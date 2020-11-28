let storesRatings = {};
let shoppingList = [];
let featuredProducts = [];
let apiAddress = "https://api.seemesave.com/api/v1";
let availableTags = [];
let storeGuid = "";
let itemCode = "";
let routing = "";

$(document).ready(function () {
    let placeSearch;
    let autocomplete;
    const componentForm = {
        street_number: "short_name",
        route: "long_name",
        locality: "long_name",
        administrative_area_level_1: "short_name",
        country: "long_name",
        postal_code: "short_name"
    };

    loadProductSearchItems();
    loadUpShoppingList();

    if (document.querySelector(".current-address")) {
        $(".for-home-content").slideDown(500);
        document.querySelector(".current-address").innerHTML = localStorage.getItem('full-address');
    }

});

loadUpShoppingList = () => {
    let testObj = [];
    let compareItem;
    let totalPrice = 0;
    let shoppingContainer = document.querySelector(".shopping-list-table");

    $.get(apiAddress + "/products/shopping-list/" + localStorage.getItem("userID"), function (data, result) {
        if (data.success) {
            shoppingList = data.data;
            shoppingList.forEach((item, index) => {

                if (index > 0) {
                    testObj = shoppingList.filter(item => {
                        return (item.barcode == compareItem.barcode);
                    });

                    if (testObj.length > 1) {
                        testObj.forEach((obj, count) => {
                            if (count > 0) {
                                item.quantity += 1;
                                shoppingList.splice(shoppingList.indexOf(obj), 1);
                            }
                        });
                    }
                }

                compareItem = item;

            });

            shoppingContainer.innerHTML = "";
            shoppingList.forEach((item, index) => {
                (item.quantity > 1) ? (item.price = (item.price * item.quantity)) : ("");
                shoppingContainer.innerHTML +=
                    `<tr id="${item.barcode}">
                            <td>${index + 1}</td>
                            <td>${item.brand + ": " + item.description}</td>
                            <td>${item.quantity}</td>
                            <td>R${item.price}</td>
                            <td><span onclick="removeListItem(${item.barcode})">
                            x</span></td>
                        </tr>`;

                totalPrice = parseFloat(totalPrice) + parseFloat(item.price);

            });

            document.querySelector(".total-price h4").innerHTML = "R" + totalPrice;
            document.querySelector(".badge-light").innerHTML = data.data.length;
        } else {
            //toggleFeedbackModal(data.msg);
        }

        //closeRating();
    });
}

loadProductSearchItems = () => {
    availableTags.forEach((item, index) => {
        document.querySelector(".list ul").innerHTML += `
    <li onclick="populateProductField(${index})" id="${item}">${item}</li>`;
    });

    let listItems = Array.from(document.querySelectorAll(".list li"));

    return listItems;
}

registerUser = () => {
    let formStatus = true;
    let fieldsObject = {};
    let terms = document.querySelector("#terms");
    let newsletter = document.querySelector("#newsletter");
    let formFields = Array.from(document.querySelectorAll(".form-body input"));

    formFields = formFields.filter(input => { return input.type !== "checkbox" });
    formStatus = validateFields(formFields);

    if (formStatus.status) {
        fieldsObject = formStatus.fieldsObject;

        if (fieldsObject.Password !== fieldsObject.RetypePassword)
            document.getElementById("feedback").innerHTML = "Your passwords do not match.";
        else if (!terms.checked) {
            document.getElementById("feedback").innerHTML = "Please agree to our terms and conditions.";
        } else {
            //fieldsObject["Terms"] = terms.checked;

            delete fieldsObject.RetypePassword;
            fieldsObject["Newsletter"] = newsletter.checked;
            document.getElementById("feedback").innerHTML = "";
            makeApiCall(fieldsObject, "/account/register");
        }
        //call api
    }
}

validateUser = () => {
    let formStatus = true;
    let fieldsObject = {};
    let rememberMe = document.querySelector(".form-body input[type='checkbox']");
    let formFields = Array.from(document.querySelectorAll(".form-body input"));

    formFields = formFields.filter(input => { return input.type !== "checkbox" });
    formStatus = validateFields(formFields);

    if (formStatus.status) {
        fieldsObject = formStatus.fieldsObject;
        //fieldsObject["rememberMe"] = rememberMe.checked;
        makeApiCall(fieldsObject, "/account/login");
    }
}

validateField = (event) => {
    if (event.currentTarget.value !== "") {
        event.currentTarget.style.border = "1px solid #ced4da";
    } else {
        event.currentTarget.style.border = "1px solid red";
    }
}

validateFields = (arrays) => {
    let status = true;
    let fieldsObject = {};
    arrays.forEach(input => {
        input.onkeyup = validateField;

        if (input.value == "") {
            status = false;
            input.style.border = "1px solid red";
            document.getElementById("feedback").innerHTML = "Please fill in all required fields.";
        } else {
            input.style.border = "1px solid #ced4da";
            fieldsObject[input.name] = input.value;
            document.getElementById("feedback").innerHTML = "";
        }
    });

    return { status, fieldsObject };

}

recoverCredentials = () => {
    let formStatus = true;
    let fieldsObject = {};
    let formFields = Array.from(document.querySelectorAll(".form-body input, .form-body select"));

    formStatus = validateFields(formFields);

    if (formStatus.status) {
        fieldsObject = formStatus.fieldsObject;
        //call api
    }
}

makeApiCall = (obj, method) => {
    $.post(apiAddress + method, obj, function (result) {
        console.log(result)
    });
}
setRating = (event, rate) => {
    let currentItem = event.currentTarget;
    let ratingStars = Array.from(document.querySelectorAll(".ratings-stars span"));

    ratingStars.forEach(star => {
        star.setAttribute("class", "");
    });

    for (let i = 0; i < rate; i++) {
        ratingStars[i].classList.add("rated-star");
    }

    $(".review fieldset").slideDown(500);

}
closeRating = () => {
    $(".review fieldset").slideUp(500);
    document.querySelector(".ratings-content").style.left = "-1000px";

    let ratingStars = Array.from(document.querySelectorAll(".ratings-stars span"));

    ratingStars.forEach(star => {
        star.setAttribute("class", "");
    });
}
saveRatings = () => {
    let feedback;
    let dataObject = {};
    let review = $("#review").val();
    let rating = Array.from(document.querySelectorAll(".rated-star"));

    dataObject.comment = review;
    dataObject.vendorguid = storeGuid;
    dataObject.rating = rating.length;
    dataObject.userguid = localStorage.getItem("userID");

    $.post(apiAddress + "/stores/rate-store", dataObject, function (data, result) {
        if (data.success) {
            feedback = data.data;
            toggleFeedbackModal(data.msg);
        } else {
            toggleFeedbackModal(data.msg);
        }

        closeRating();

    });
}

toggleRatings = () => {
    let storeCard = event.currentTarget.parentElement.parentElement;
    let ratingStars = Array.from(document.querySelectorAll(".ratings-stars span"));

    for (let i = 0; i < 5; i++) {
        ratingStars[i].setAttribute("class", "");
    }

    storeGuid = event.currentTarget.parentElement.parentElement.attributes[4].value.split("/")[2];
    document.querySelector(".ratings-content").style.left = storeCard.offsetLeft - 20 + "px";


    $.get(apiAddress + "/stores/details/" + storeGuid, function (data, result) {
        if (data.success) {
            storesRatings = data.data;

            for (let i = 0; i < storesRatings.rating; i++) {
                ratingStars[i].classList.add("rated-star");
            }
        }
    });
}

populateProductField = (id) => {
    document.getElementById("txtProductSearch").value = availableTags[id];
    $(".list").slideUp(500);
}

productSearchAutoComplete = (event) => {
    let td;
    let searchValue = event.currentTarget.value;
    let listItems = Array.from(document.querySelectorAll(".list li"));

    if (searchValue.length >= 3) {
        (listItems.length == 0) ? (listItems = loadProductSearchItems()) : (listItems);

        (searchValue == "") ? ($(".list").slideUp(500)) : ($(".list").slideDown(500));

        listItems.forEach(item => {
            td = item.innerHTML.toUpperCase();

            if (td.indexOf(searchValue.toUpperCase()) > -1)
                $("#" + item.id).slideDown(500);
            else
                item.style.display = "none";
        });
    } else {
        $(".list").slideUp(500);
    }
}

function alignLogo() {
    var imgContainer = document.getElementById('logoImage'),
        img = document.getElementById('logoImage');

    if (img) {
        var imgOffset = '-' + (img.offsetHeight / 2) + 'px';
        imgContainer.style.marginTop = imgOffset;
        $('#logoImage').css({ 'opacity': 1 });
    }
}

addToShoppingList = (event) => {
    let selectedItem;
    let promotionsArray = [];
    let quantity = event.currentTarget.parentElement.querySelector("input").value;

    routing = window.location.pathname;
    itemCode = event.currentTarget.id.split("/")[0];

    if (routing.match("store")) {
        routing = routing.split("/")[2];
        routing = "/stores/products/" + routing;
    } else {
        routing = "/promotions/products/" + routing;
    }

    $.get(apiAddress + routing, function (data, result) {
        if (data.success) {
            promotionsArray = data.data;

            selectedItem = promotionsArray.find(item => {
                return (item.barcode == itemCode);

            });

            if (selectedItem) {
                selectedItem.quantity = (quantity == "" ? 1 : quantity);

                if (selectedItem.quantity > 1) {
                    selectedItem.selling_price * selectedItem.quantity;
                }

                let itemIndex = shoppingList.find(item => {
                    return (item.barcode == selectedItem.barcode);
                });

                if (!itemIndex)
                    shoppingList.push(selectedItem);
                else {
                    shoppingList.forEach(item => {
                        if (item.barcode == selectedItem.barcode) {
                            item.quantity += 1;
                            item.price = item.price * item.quantity;
                        }
                    });
                }

                addListToDom(shoppingList, selectedItem.barcode);

            }
        }
    });
}

likeProduct = (event) => {
    let dataObject = {};

    routing = window.location.pathname;
    itemCode = event.currentTarget.id.split("/")[0];

    if (routing.match("store")) {
        routing = routing.split("/")[2];
        routing = "/stores/products/" + routing;
    } else {
        routing = "/promotions/products/" + routing;
    }

    $.get(apiAddress + routing, function (data, result) {
        if (data.success) {
            promotionsArray = data.data;

            selectedItem = promotionsArray.find(item => {
                return (item.barcode == itemCode);

            });

            runLikeApi(selectedItem);

        }
    });
}

runLikeApi = (selectedItem) => {
    let dataObject = {};

    dataObject.productguid = selectedItem.guid;
    dataObject.userguid = localStorage.getItem("userID");

    $.post(apiAddress + "/products/like", dataObject, function (data, result) {
        if (data.success) {
            feedback = data.data;
            toggleFeedbackModal(data.msg);
        } else {
            toggleFeedbackModal(data.msg);
        }

    });
}

toggleFeedbackModal = (message) => {
    $(".back-drop").slideDown(500);
    document.querySelector(".for-feedback-content p").innerHTML = message;
    $("#for-feedback").css("left", "50%");
    document.querySelector("#for-feedback").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

closeFeedbackModal = () => {
    $(".back-drop").slideUp(500);
    $("#for-feedback").css("left", "-50%");
}

addListToDom = (shoppingArray, itemCode) => {
    let feedback;
    let totalPrice = 0;
    let dataObject = {};
    let shoppingContainer = document.querySelector(".shopping-list-table");
    let selectedProduct = shoppingArray.find(item => { return (item.barcode == itemCode) });

    dataObject.barcode = selectedProduct.barcode;
    dataObject.productguid = selectedProduct.product_id;
    dataObject.vendorguid = routing.split("/")[3];
    dataObject.userguid = localStorage.getItem("userID");
    dataObject.quantity = selectedProduct.quantity;

    $.post(apiAddress + "/products/add-to-list", dataObject, function (data, result) {
        if (data.success) {
            feedback = data.data;
            toggleFeedbackModal("Item added to your shopping list successfully.");

            shoppingContainer.innerHTML = "";
            shoppingArray.forEach((item, index) => {
                shoppingContainer.innerHTML +=
                    `<tr id="${item.barcode}">
                    <td>${index + 1}</td>
                        <td>${item.brand + ": " + item.description}</td>
                        <td>${item.quantity}</td>
                        <td>R${item.price}</td>
                        <td><span onclick="removeListItem(${item.barcode})">
                            x</span></td>
                            </tr>`;

                totalPrice = parseFloat(totalPrice) + parseFloat(item.price);

            });

            document.querySelector(".total-price h4").innerHTML = "R" + totalPrice;
            document.querySelector(".badge-light").innerHTML = shoppingList.length;
        } else {
            toggleFeedbackModal(data.msg);
        }
    });
}

removeListItem = (barcode) => {
    let totalPrice = 0;
    let shoppingContainer = document.querySelector(".shopping-list-table");
    let currentItem = shoppingList.find(item => {
        return (item.barcode == barcode);

    });

    shoppingList.splice(shoppingList.indexOf(currentItem), 1);

    // replace the code below with this function loadUpShoppingList()
    shoppingContainer.innerHTML = "";
    shoppingList.forEach((item, index) => {
        shoppingContainer.innerHTML +=
            `<tr id="${item.barcode}">
            <td>${index + 1}</td>
                <td>${item.brand + ": " + item.description}</td>
                <td>${item.quantity}</td>
                <td>R${item.price}</td>
                <td><span onclick="removeListItem(${item.barcode})">
                    x</span></td>
                    </tr>`;

        totalPrice = parseFloat(totalPrice) + parseFloat(item.price);

    });

    document.querySelector(".total-price h4").innerHTML = "R" + totalPrice;
    document.querySelector(".badge-light").innerHTML = shoppingList.length;
}

addProductToList = (guid) => {
    console.log(guid);
}

toggleShoppingModal = () => {
    $(".back-drop").slideDown(500);
    $(".for-shopping-list-container").css("left", "50%");
    //document.querySelector(".for-shopping-list-container input").focus();
}

closeShoppingModal = () => {
    $(".back-drop").slideUp(500);
    $(".for-shopping-list-container").css("left", "-50%");
    //document.querySelector(".feedback").innerHTML = "";
    //document.querySelector(".for-shopping-list-container input").value = "";
    //document.querySelector(".for-shopping-list-container input").style.border = "1px solid #ced4da";

}


function scrollWindow(el) {
    var $sliderContainer = $(el).parent().find('.panel-slider.products'),
        posLeft = $sliderContainer.scrollLeft(),
        scrollInterval = 250,
        scrollPos = posLeft + scrollInterval,
        scrollWidth = $sliderContainer[0].scrollWidth;

    if ($(el).hasClass('scroll-left')) {
        scrollPos = posLeft - scrollInterval;
    }

    scrollPos = Math.floor((scrollPos + scrollInterval - 1) / scrollInterval) * scrollInterval;

    $sliderContainer.animate({ scrollLeft: scrollPos });
}

function initAutocomplete() {
    if ($('#txtLandingAddress').length) {
        $('#customBackdrop').on('click', function () {
            $('app-root').removeClass('shown');
        }).height($('app-root').height());

        $('app-root').addClass('shown');

        $('#txtLandingAddress').on('blur', function () {
            $('app-root').removeClass('shown');
        });

        if ($('.main-menu').hasClass('open')) {
            $('#btnToggleMenu').trigger('click');
        }
        // Create the autocomplete object, restricting the search predictions to
        // geographical location types.
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById("txtLandingAddress"),
            { types: ["geocode"] }
        );
        // Avoid paying for data that you don't need by restricting the set of
        // place fields that are returned to just the address components.
        autocomplete.setFields(["address_component"]);
        // When the user selects an address from the drop-down, populate the
        // address fields in the form.
        autocomplete.addListener("place_changed", fillInAddress);
    }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            reverseGeocode(geolocation);
        });
    }
}

function reverseGeocode(latLng) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                var address = results[0].formatted_address,
                    nLatLng = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    };
                $('#txtLandingAddress').val(address);
                $('#txtLandingAddress').focus();
                $('.current-address').html(`<span>${address}</span>`);
                localStorage.setItem('temp-geo', JSON.stringify(nLatLng));
                localStorage.setItem('full-address', address);
            }
        }
    });
}

function reverseGeocodeAddress(address) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                var address = results[0].formatted_address,
                    nLatLng = {
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng()
                    };
                localStorage.setItem('temp-geo', JSON.stringify(nLatLng));
                localStorage.setItem('full-address', address);
                document.cookie = `sms-address=${address}`;
                window.location.reload();
            }
        }
    });
}

function fillInAddress() {
    let address = $('#txtLandingAddress').val();
    placeSearch = autocomplete.getPlace();

    localStorage.setItem('temp-address', JSON.stringify(placeSearch));
    $('.user-location').html(`<span>${address}</span>`);
    document.querySelector(".user-location").style.display = "block";
    reverseGeocodeAddress(address);
}

function clearAddress() {
    localStorage.removeItem('temp-geo');
    localStorage.removeItem('temp-address');
    localStorage.removeItem('full-address');
    document.cookie = "sms-address=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
}

function focusAddress() {
    $('#txtLandingAddress').val($('.current-address').text());
    $('#txtLandingAddress').focus();
    $('app-root').addClass('shown');
}
