(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout/page-not-found/page-not-found.component */ "./src/app/components/layout/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/account/login/login.component */ "./src/app/components/account/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/account/register/register.component */ "./src/app/components/account/register/register.component.ts");
/* harmony import */ var _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/account/reset-password/reset-password.component */ "./src/app/components/account/reset-password/reset-password.component.ts");
/* harmony import */ var _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account/profile/profile.component */ "./src/app/components/account/profile/profile.component.ts");
/* harmony import */ var _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/account/shopping-lists/shopping-lists.component */ "./src/app/components/account/shopping-lists/shopping-lists.component.ts");
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/contact/contact.component */ "./src/app/components/home/contact/contact.component.ts");
/* harmony import */ var _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/about/about.component */ "./src/app/components/home/about/about.component.ts");
/* harmony import */ var _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/stores/details/details.component */ "./src/app/components/home/stores/details/details.component.ts");
/* harmony import */ var _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/help/help.component */ "./src/app/components/home/help/help.component.ts");
/* harmony import */ var _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/faq/faq.component */ "./src/app/components/home/faq/faq.component.ts");
/* harmony import */ var _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/careers/careers.component */ "./src/app/components/home/careers/careers.component.ts");
/* harmony import */ var _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/home/terms/terms.component */ "./src/app/components/home/terms/terms.component.ts");
/* harmony import */ var _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/account/vendor-signup/vendor-signup.component */ "./src/app/components/account/vendor-signup/vendor-signup.component.ts");
/* harmony import */ var _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/account/change-password/change-password.component */ "./src/app/components/account/change-password/change-password.component.ts");
/* harmony import */ var _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth-service/auth.guard */ "./src/app/services/auth-service/auth.guard.ts");
/* harmony import */ var _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/home/privacy/privacy.component */ "./src/app/components/home/privacy/privacy.component.ts");
/* harmony import */ var _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/vendor-terms/vendor-terms.component */ "./src/app/components/home/vendor-terms/vendor-terms.component.ts");
/* harmony import */ var _components_nstores_nstores_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/nstores/nstores.component */ "./src/app/components/nstores/nstores.component.ts");
/* harmony import */ var _components_nproducts_nproducts_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/nproducts/nproducts.component */ "./src/app/components/nproducts/nproducts.component.ts");






















/// added




const routes = [
    {
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            /// added
            { path: 'stores', component: _components_nstores_nstores_component__WEBPACK_IMPORTED_MODULE_22__["NstoresComponent"] },
            { path: 'products', component: _components_nproducts_nproducts_component__WEBPACK_IMPORTED_MODULE_23__["NproductsComponent"] },
            /// added
            { path: 'about', component: _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] },
            { path: 'contact', component: _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
            { path: 'store/:guid', component: _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"], canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: 'stores/details', component: _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"], canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: 'account', component: _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: 'account/login', component: _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
            { path: 'account/profile', component: _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"], canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: 'account/reset-password', component: _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"] },
            { path: 'account/register', component: _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
            { path: 'account/shopping-lists', component: _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListsComponent"], canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
            { path: 'account/become-a-vendor', component: _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_17__["VendorSignupComponent"] },
            { path: 'account/change-password', component: _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"] },
            { path: 'careers', component: _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__["CareersComponent"] },
            { path: 'help', component: _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"] },
            { path: 'faq', component: _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FaqComponent"] },
            { path: 'terms', component: _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_16__["TermsComponent"] },
            { path: 'privacy', component: _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyComponent"] },
            { path: 'vendor-terms-conditions', component: _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_21__["VendorTermsComponent"] },
            { path: '**', component: _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'SeeMeSave';
        this.loading = true;
        router.events.subscribe((routerEvent) => {
            this.checkRouterEvent(routerEvent);
        });
    }
    // Show page loader when waiting for routes to load
    checkRouterEvent(routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
            this.loading = true;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/layout/layout.component */ "./src/app/components/layout/layout.component.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/layout/landing/landing.component */ "./src/app/components/layout/landing/landing.component.ts");
/* harmony import */ var _components_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/shared/number-tracker-component/number-tracker-component.component */ "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts");
/* harmony import */ var _components_layout_site_stats_site_stats_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/layout/site-stats/site-stats.component */ "./src/app/components/layout/site-stats/site-stats.component.ts");
/* harmony import */ var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/account/login/login.component */ "./src/app/components/account/login/login.component.ts");
/* harmony import */ var _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/layout/page-not-found/page-not-found.component */ "./src/app/components/layout/page-not-found/page-not-found.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/campaigns/header-campaign.component */ "./src/app/components/campaigns/header-campaign.component.ts");
/* harmony import */ var _components_campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/campaigns/footer-campaign.component */ "./src/app/components/campaigns/footer-campaign.component.ts");
/* harmony import */ var _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/account/register/register.component */ "./src/app/components/account/register/register.component.ts");
/* harmony import */ var _components_home_stores_stores_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/home/stores/stores.component */ "./src/app/components/home/stores/stores.component.ts");
/* harmony import */ var _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/account/reset-password/reset-password.component */ "./src/app/components/account/reset-password/reset-password.component.ts");
/* harmony import */ var _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/account/profile/profile.component */ "./src/app/components/account/profile/profile.component.ts");
/* harmony import */ var _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/account/shopping-lists/shopping-lists.component */ "./src/app/components/account/shopping-lists/shopping-lists.component.ts");
/* harmony import */ var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/home/contact/contact.component */ "./src/app/components/home/contact/contact.component.ts");
/* harmony import */ var _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/home/about/about.component */ "./src/app/components/home/about/about.component.ts");
/* harmony import */ var _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/home/help/help.component */ "./src/app/components/home/help/help.component.ts");
/* harmony import */ var _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/home/faq/faq.component */ "./src/app/components/home/faq/faq.component.ts");
/* harmony import */ var _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/home/careers/careers.component */ "./src/app/components/home/careers/careers.component.ts");
/* harmony import */ var _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/home/terms/terms.component */ "./src/app/components/home/terms/terms.component.ts");
/* harmony import */ var _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/account/vendor-signup/vendor-signup.component */ "./src/app/components/account/vendor-signup/vendor-signup.component.ts");
/* harmony import */ var _components_layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/layout/panel/panel.component */ "./src/app/components/layout/panel/panel.component.ts");
/* harmony import */ var _components_layout_panel_templates_products_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/layout/panel/templates/products.component */ "./src/app/components/layout/panel/templates/products.component.ts");
/* harmony import */ var _components_layout_panel_templates_store_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/layout/panel/templates/store.component */ "./src/app/components/layout/panel/templates/store.component.ts");
/* harmony import */ var _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/home/stores/details/details.component */ "./src/app/components/home/stores/details/details.component.ts");
/* harmony import */ var _components_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/account/change-password/change-password.component */ "./src/app/components/account/change-password/change-password.component.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
/* harmony import */ var _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/auth-service/auth.guard */ "./src/app/services/auth-service/auth.guard.ts");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _services_auth_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./services/auth-service/token-interceptor.service */ "./src/app/services/auth-service/token-interceptor.service.ts");
/* harmony import */ var _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./components/home/counter/counter.component */ "./src/app/components/home/counter/counter.component.ts");
/* harmony import */ var _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./components/home/privacy/privacy.component */ "./src/app/components/home/privacy/privacy.component.ts");
/* harmony import */ var _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./components/home/vendor-terms/vendor-terms.component */ "./src/app/components/home/vendor-terms/vendor-terms.component.ts");
/* harmony import */ var _components_nstores_nstores_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./components/nstores/nstores.component */ "./src/app/components/nstores/nstores.component.ts");
/* harmony import */ var _components_nproducts_nproducts_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./components/nproducts/nproducts.component */ "./src/app/components/nproducts/nproducts.component.ts");
/* harmony import */ var _components_npanels_seemesaveproducts_seemesaveproducts_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./components/npanels/seemesaveproducts/seemesaveproducts.component */ "./src/app/components/npanels/seemesaveproducts/seemesaveproducts.component.ts");




















//----------------------------------------\MaterialModules\----------------------------------------//
//----------------------------------------App Components----------------------------------------//





























//----------------------------------------\App Components\----------------------------------------//




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_51__["CookieService"],
        {
            provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_53__["RECAPTCHA_V3_SITE_KEY"],
            useValue: '6LfeU8sZAAAAADza5HAu55lCP8QS6TDdmllpnfv3'
        },
        _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_57__["AuthGuard"], _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_58__["AuthService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_59__["TokenInterceptorService"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_53__["RecaptchaV3Module"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_54__["GooglePlaceModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_56__["AutocompleteLibModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_52__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyDb3oLDTkoVpLzE4PxZ0PL1ENW8rVI7OU4'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_21__["LayoutComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
        _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
        _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        _components_layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
        _components_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_25__["NumberTrackerComponent"],
        _components_layout_site_stats_site_stats_component__WEBPACK_IMPORTED_MODULE_26__["SiteStatsComponent"],
        _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
        _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_28__["PageNotFoundComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
        _components_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_30__["HeaderCampaignComponent"],
        _components_campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_31__["FooterCampaignComponent"],
        _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
        _components_home_stores_stores_component__WEBPACK_IMPORTED_MODULE_33__["StoresComponent"],
        _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"],
        _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"],
        _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_36__["ShoppingListsComponent"],
        _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_37__["ContactComponent"],
        _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_38__["AboutComponent"],
        _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_39__["HelpComponent"],
        _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_40__["FaqComponent"],
        _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_42__["TermsComponent"],
        _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_43__["VendorSignupComponent"],
        _components_layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_44__["PanelComponent"],
        _components_layout_panel_templates_products_component__WEBPACK_IMPORTED_MODULE_45__["ProductsPanelComponent"],
        _components_layout_panel_templates_store_component__WEBPACK_IMPORTED_MODULE_46__["StorePanelComponent"],
        _components_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_48__["LazyImgDirective"],
        _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_47__["DetailsComponent"],
        _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_41__["CareersComponent"],
        _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_55__["ChangePasswordComponent"],
        _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_60__["CounterComponent"],
        _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_61__["PrivacyComponent"],
        _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_62__["VendorTermsComponent"],
        _components_nstores_nstores_component__WEBPACK_IMPORTED_MODULE_63__["NstoresComponent"],
        _components_nproducts_nproducts_component__WEBPACK_IMPORTED_MODULE_64__["NproductsComponent"],
        _components_npanels_seemesaveproducts_seemesaveproducts_component__WEBPACK_IMPORTED_MODULE_65__["SeemesaveproductsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__["BrowserAnimationsModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_53__["RecaptchaV3Module"],
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_54__["GooglePlaceModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_56__["AutocompleteLibModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"], _agm_core__WEBPACK_IMPORTED_MODULE_52__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_21__["LayoutComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"],
                    _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                    _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                    _components_layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_24__["LandingComponent"],
                    _components_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_25__["NumberTrackerComponent"],
                    _components_layout_site_stats_site_stats_component__WEBPACK_IMPORTED_MODULE_26__["SiteStatsComponent"],
                    _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                    _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_28__["PageNotFoundComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"],
                    _components_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_30__["HeaderCampaignComponent"],
                    _components_campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_31__["FooterCampaignComponent"],
                    _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
                    _components_home_stores_stores_component__WEBPACK_IMPORTED_MODULE_33__["StoresComponent"],
                    _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_34__["ResetPasswordComponent"],
                    _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"],
                    _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_36__["ShoppingListsComponent"],
                    _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_37__["ContactComponent"],
                    _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_38__["AboutComponent"],
                    _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_39__["HelpComponent"],
                    _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_40__["FaqComponent"],
                    _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_42__["TermsComponent"],
                    _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_43__["VendorSignupComponent"],
                    _components_layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_44__["PanelComponent"],
                    _components_layout_panel_templates_products_component__WEBPACK_IMPORTED_MODULE_45__["ProductsPanelComponent"],
                    _components_layout_panel_templates_store_component__WEBPACK_IMPORTED_MODULE_46__["StorePanelComponent"],
                    _components_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_48__["LazyImgDirective"],
                    _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_47__["DetailsComponent"],
                    _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_41__["CareersComponent"],
                    _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_55__["ChangePasswordComponent"],
                    _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_60__["CounterComponent"],
                    _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_61__["PrivacyComponent"],
                    _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_62__["VendorTermsComponent"],
                    _components_nstores_nstores_component__WEBPACK_IMPORTED_MODULE_63__["NstoresComponent"],
                    _components_nproducts_nproducts_component__WEBPACK_IMPORTED_MODULE_64__["NproductsComponent"],
                    _components_npanels_seemesaveproducts_seemesaveproducts_component__WEBPACK_IMPORTED_MODULE_65__["SeemesaveproductsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_50__["BrowserAnimationsModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_53__["RecaptchaV3Module"],
                    ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_54__["GooglePlaceModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                    angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_56__["AutocompleteLibModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_52__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyDb3oLDTkoVpLzE4PxZ0PL1ENW8rVI7OU4'
                    })
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_51__["CookieService"],
                    {
                        provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_53__["RECAPTCHA_V3_SITE_KEY"],
                        useValue: '6LfeU8sZAAAAADza5HAu55lCP8QS6TDdmllpnfv3'
                    },
                    _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_57__["AuthGuard"], _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_58__["AuthService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_59__["TokenInterceptorService"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/account/change-password/change-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/account/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../campaigns/header-campaign.component */ "./src/app/components/campaigns/header-campaign.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function ChangePasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User unsuccessfully changed password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(router, cookieService, authService) {
        this.router = router;
        this.cookieService = cookieService;
        this.authService = authService;
        this.success = true;
    }
    ngOnInit() {
    }
    _changePassword() {
        console.log(this.username, this.password, this.token);
        this.authService._changePassword(this.username, this.password, this.token)
            .subscribe(res => {
            console.log(res);
            this.cookieService.set('changePassword', JSON.stringify(res));
            const reset = JSON.parse(this.cookieService.get('changePassword'));
            const success = reset.success;
            if (success) {
                this.success = true;
                setTimeout(() => {
                    this.cookieService.delete('changePassword');
                    this.router.navigate(['/account/login']);
                }, 3000);
            }
            else {
                this.success = false;
            }
        }, err => {
            console.log(err);
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 21, vars: 4, consts: [[1, "content"], [1, "for-account"], [1, "for-account-container"], [1, "for-account-content"], [1, "for-account-form", "recovery-form"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-header"], [1, "form-body"], ["id", "feedback", 1, "feedback"], [1, "form-group"], ["type", "email", "placeholder", "a Valid Email Address", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter new password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter recovery token", "name", "token", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["role", "alert", 1, "alert", "alert-danger"]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChangePasswordComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_13_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_15_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_17_listener($event) { return ctx.token = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_19_listener() { return ctx._changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.token);
    } }, directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__["HeaderCampaignComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-change-password',
                templateUrl: './change-password.component.html',
                styleUrls: ['./change-password.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/account/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/account/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home/counter/counter.component */ "./src/app/components/home/counter/counter.component.ts");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username or password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset your password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username and password combination");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Don't have an account? Click here");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_4_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.emailAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_4_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_4_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.password == null || ctx_r3.emailAddress == null);
} }
const ApiResult = {
    SUCCESS: 'Success',
    ERROR: 'Invalid username and password combination.',
};
class LoginComponent {
    constructor(router, route, cookieService, authService) {
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.authService = authService;
        this.expiredDate = new Date();
        this.emailAddress = null;
        this.password = null;
        this.feedback = null;
        this.isLoading = false;
        this._isAuthenticated = true;
        this.msg = '';
        this.resetMsg = 'Please reset your password to continue';
        this.invalidMsg = 'Invalid username and password combination';
        this.success = false;
    }
    ngOnInit() {
        $(".btn-shopping-list").css("display", "none");
        this.authService._logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    validateEmail(email) {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }
    validator() {
        let returnValue = {
            status: true,
            value: "Validated",
        };
        if (this.emailAddress == null || this.password == null) {
            returnValue.status = false;
            returnValue.value = "Please input the fields.";
            return returnValue;
        }
        if (this.emailAddress == "" || this.password == "") {
            returnValue.status = false;
            returnValue.value = "Please input the fields.";
            return returnValue;
        }
        if (!this.validateEmail(this.emailAddress)) {
            returnValue.status = false;
            returnValue.value = "Please input the correct email.";
            return returnValue;
        }
        return returnValue;
    }
    login() {
        console.log("----- this is the login -----");
        let formData = {
            email_address: this.emailAddress,
            password: this.password
        };
        let validateResult = this.validator();
        if (!validateResult.status) {
            this.feedback = validateResult.value;
            return;
        }
        this.feedback = null;
        this.isLoading = true;
        this.authService.login(JSON.stringify(formData)).subscribe((res) => {
            this.isLoading = false;
            console.log(res);
            if (res.trim() == ApiResult.ERROR) {
                this.feedback = res.trim();
            }
            else {
                // this.feedback = "User Already Exist. Please try another email."
                res = res.trim();
                // console.log(JSON.parse(res.substring(21, res.length-1)))
                // let currentUser = JSON.parse(res.substring(21, res.length-1))
                // localStorage.setItem('user_email', currentUser.email)
                // localStorage.setItem('currentUser', res.substring(21, res.length-1))
                console.log(JSON.parse(res));
                let currentUser = JSON.parse(res);
                localStorage.setItem('user_email', currentUser.email);
                localStorage.setItem('currentUser', res);
                localStorage.setItem('guid', 'true');
                localStorage.setItem('userID', currentUser.id);
                if (this.returnUrl != '/') {
                    this.router.navigateByUrl(this.returnUrl);
                }
                else {
                    this.router.navigate(['']);
                }
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 8, vars: 4, consts: [[1, "justify-content-center"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "spinner-grow", "style", "text-align: center; justify-content: center;", "role", "status", 4, "ngIf"], ["class", "login-container d-flex justify-content-center", 4, "ngIf"], [1, "campaign"], ["src", "../../../../assets//campaign-2.jpg"], ["role", "alert", 1, "alert", "alert-danger"], ["routerLink", "/account/reset-password"], ["routerLink", "/account/register"], ["role", "status", 1, "spinner-grow", 2, "text-align", "center", "justify-content", "center"], [1, "sr-only"], [1, "login-container", "d-flex", "justify-content-center"], [1, "inner-login-container", "d-flex", "justify-content-center"], [1, "form-group"], ["id", "feedback", 1, "feedback"], [1, "login-block"], [1, "row"], [1, "col-md-3", 2, "align-items", "center"], [1, "col-md-9"], ["type", "email", "name", "username", "aria-describedby", "emailHelp", "required", "", "placeholder", "Enter your email address here", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", 2, "align-items", "center"], [1, "col-md-3"], ["type", "password", "required", "", "name", "password", "placeholder", "Enter your password here", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", 2, "text-align", "right"], [1, "seemesave_button", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 24, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated && ctx.msg == ctx.resetMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated && ctx.msg == ctx.invalidMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 20em;\n  background-color: #89c33f;\n  padding: 1em;\n  padding-top: 5em;\n  padding-bottom: 5em;\n  margin-top: 1em;\n  \n  background: linear-gradient(to bottom, #89c33f, #89c33f);\n}\n\n.inner-login-container[_ngcontent-%COMP%] {\n  min-height: 18em;\n  width: 60%;\n}\n\n.inner-login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.campaign[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #89c33f, #f1e832) !important;\n  padding: 4em 1em !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 2em 4em;\n  background: rgba(149, 201, 108, 0.6);\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n  border-spacing: 0;\n  border: none;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.9em;\n  text-align: right;\n  float: right;\n  margin-right: 3em;\n  position: relative;\n  bottom: 6px;\n  line-height: 1.2em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 0 auto 12px;\n  text-indent: 10px;\n  padding: 15px 10px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  float: right;\n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n.merged[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 20px;\n}\n\n.merged[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.merged[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.merged[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.merged[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25px !important;\n  height: 25px;\n  float: right !important;\n  margin: 0 0 0 10px !important;\n  top: -2px;\n}\n\n.merged[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.2em 2.8em;\n  line-height: 35px;\n  float: right;\n  top: -15px;\n}\n\n.login-block[_ngcontent-%COMP%] {\n  background-color: #9cbf63;\n  padding: 3em 5em 2em 2em;\n}\n\n.col-md-9[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n}\n\n.col-md-3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  direction: rtl;\n  text-align: right;\n  color: white;\n  font-weight: 600;\n}\n\n.seemesave_button[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 40px;\n  border-radius: 6px;\n  background-color: #f7e843;\n  box-shadow: none;\n  margin-top: 1em;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  font-size: 12px;\n}\n\n.float_clear[_ngcontent-%COMP%] {\n  float: unset;\n}\n\n@media only screen and (max-width: 1200px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 764px) {\n  .col-md-3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    direction: ltr;\n    text-align: left;\n    color: white;\n    font-weight: 600;\n  }\n\n  .login-block[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFLRywrQkFBQTtFQUNILHdEQUFBO0FBTEY7O0FBV0E7RUFFRSxnQkFBQTtFQUNBLFVBQUE7QUFURjs7QUFXQTtFQUNFLFdBQUE7QUFSRjs7QUFXQTtFQUNFLFdBQUE7QUFSRjs7QUFVQTtFQUNFO0lBQ0UsV0FBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRSxTQUFBO0FBUkY7O0FBV0E7RUFDRSx1RUFBQTtFQUNBLDJCQUFBO0FBUkY7O0FBU0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBUEo7O0FBUUk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFOTjs7QUFRSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFOTjs7QUFRSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQ3ZFSTtBRGlFVjs7QUFPTTtFQUFpQix5Q0FBQTtFQUNmLGNDekVFO0VEMEVGLFVBQUE7RUFBWSxZQUFBO0FBSHBCOztBQUNNO0VBQWlCLHlDQUFBO0VBQ2YsY0N6RUU7RUQwRUYsVUFBQTtFQUFZLFlBQUE7QUFIcEI7O0FBQ007RUFBaUIseUNBQUE7RUFDZixjQ3pFRTtFRDBFRixVQUFBO0VBQVksWUFBQTtBQUhwQjs7QUFDTTtFQUFpQix5Q0FBQTtFQUNmLGNDekVFO0VEMEVGLFVBQUE7RUFBWSxZQUFBO0FBSHBCOztBQUtNO0VBQTBCLDRCQUFBO0VBQ3hCLGNDN0VFO0FEMkVWOztBQUlNO0VBQTJCLG1CQUFBO0VBQ3pCLGNDaEZFO0FEK0VWOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUhGOztBQUlFO0VBQ0UsdUJBQUE7QUFGSjs7QUFHSTtFQUNFLHVCQUFBO0FBRE47O0FBR0k7RUFDRSxlQUFBO0FBRE47O0FBSUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUlFO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBRko7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBSEY7O0FBTUE7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFBZ0IseUNBQUE7RUFDZCxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7RUFDWixlQUFBO0FBREY7O0FBRkE7RUFBZ0IseUNBQUE7RUFDZCxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7RUFDWixlQUFBO0FBREY7O0FBRkE7RUFBZ0IseUNBQUE7RUFDZCxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7RUFDWixlQUFBO0FBREY7O0FBRkE7RUFBZ0IseUNBQUE7RUFDZCxjQUFBO0VBQ0EsVUFBQTtFQUFZLFlBQUE7RUFDWixlQUFBO0FBREY7O0FBSUE7RUFBeUIsNEJBQUE7RUFDdkIsY0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUEwQixtQkFBQTtFQUN4QixjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQUY7O0VBRUE7SUFDRSxZQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdmFyaWFibGVzIGZpbGUgd2l0aCBnbG9iYWwgc3R5bGUgdmFyaWFibGVzIGFuZCB0aGVtZVxuQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWMzM2Y7XG4gIHBhZGRpbmc6IDFlbTtcbiAgcGFkZGluZy10b3A6IDVlbTtcbiAgcGFkZGluZy1ib3R0b206IDVlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzg5YzMzZixcbiAgICAjODljMzNmXG4gICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzg5YzMzZixcbiAgICAjODljMzNmXG4gICk7XG59XG4uaW5uZXItbG9naW4tY29udGFpbmVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMThlbTtcbiAgd2lkdGg6IDYwJTtcbn1cbi5pbm5lci1sb2dpbi1jb250YWluZXIgZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2FtcGFpZ24gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5pbm5lci1sb2dpbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4OWMzM2YsICNmMWU4MzIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRlbSAxZW0gIWltcG9ydGFudDtcbiAgLmxvZ2luLWZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyZW0gNGVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMDEsIDEwOCwgMC42KTtcbiAgICB0YWJsZSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEycHg7XG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICY6OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICAgICAgfVxuICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICB9XG4gICAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ubWVyZ2VkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbGFiZWwge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAgIHNwYW4ge1xuICAgICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDAgMCAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAtMnB4O1xuICB9XG4gIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMC4yZW0gMi44ZW07XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHRvcDogLTE1cHg7XG4gIH1cbn1cblxuLmxvZ2luLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljYmY2MztcbiAgcGFkZGluZzogM2VtIDVlbSAyZW0gMmVtO1xufVxuXG4uY29sLW1kLTkgPiBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC41cmVtICsgOHB4KSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xufVxuXG4uY29sLW1kLTMgPiBwIHtcbiAgZGlyZWN0aW9uOiBydGw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZWVtZXNhdmVfYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlODQzO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6ICAjNjBBOERDOztcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogICM2MEE4REM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogICM2MEE4REM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZsb2F0X2NsZWFyIHtcbiAgZmxvYXQ6IHVuc2V0O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuaW5uZXItbG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NHB4KSB7XG4gIC5jb2wtbWQtMyA+IHAge1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmxvZ2luLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbn1cbiIsIkBtaXhpbiB0cmFuc2l0aW9uKCR4KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHg7XG4gIC1tb3otdHJhbnNpdGlvbjogJHg7XG4gIC1tcy10cmFuc2l0aW9uOiAkeDtcbiAgLW8tdHJhbnNpdGlvbjogJHg7XG4gIHRyYW5zaXRpb246ICR4O1xufVxuXG4kcHJpbWFyeTogIzYwQThEQztcbiRwcmltYXJ5LWFjY2VudDogZGFya2VuKCRwcmltYXJ5LCAxMCUpO1xuJHNlY29uZGFyeTogIzlEQ0U3NDtcbiRzZWNvbmRhcnktYWNjZW50OiBkYXJrZW4oJHNlY29uZGFyeSwgMTAlKTtcbiR0ZXh0LWNvbG9yOiAjMGUwZTBlO1xuJGxpbmstY29sb3I6ICNhOGE4YTg7XG4kbGluay1jb2xvci1ob3ZlcjogJHByaW1hcnk7XG4kc2VhcmNoLWJnOiAjZjdlOTQzO1xuJHNlYXJjaC1iZy1ob3ZlcjogZGFya2VuKCRzZWFyY2gtYmcsIDEwJSk7XG4kZGFuZ2VyOiAjRTIyMTI3O1xuJGhlYWRpbmdzLWNvbG9yOiAjZmZmZmZmO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/account/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/account/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");




class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
        this.user = {
            email: '',
            first_name: '',
            last_name: '',
            phone: ''
        };
    }
    ngOnInit() {
        const guid = localStorage.getItem('userID');
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("----- this is the user ----");
        this.authService.getUserProfileByUserID(currentUser.email)
            .subscribe(res => {
            console.log(res);
            localStorage.setItem('userProfile', JSON.stringify(res));
            const profile = JSON.parse(res);
            console.log('User Profile: ', profile);
            this.user.email = profile[0].email;
            this.user.first_name = profile[0].first_name;
            this.user.last_name = profile[0].last_name;
            this.user.phone = profile[0].phone;
        }, err => {
            console.log(err);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 30, vars: 6, consts: [[1, "for-user-profile"], [1, "for-user-profile-container"], [1, "for-user-profile-content"], [1, "user-profile"], [1, "profile-upper-content", 2, "padding", "1em"], [1, "row"], [1, "col-sm-1.9"], [1, "user-profile-picture"], [1, "user-image"], ["src", "./assets/save-campaign.jpg", "alt", "profile image"], [1, "col-sm-"], [1, "user-names", 2, "padding-top", "2em", "margin", ".5em"], [1, "profile-lower-content"], [1, "form-group"], ["type", "text", "placeholder", "FirstName", "name", "FirstName", "id", "FirstName", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "LastName", "name", "LastName", "id", "LastName", 1, "form-control", 3, "value"], ["type", "email", "placeholder", "Email Address", "id", "Email", 1, "form-control", 3, "value"], ["type", "tel", "placeholder", "Phone Number", "name", "Cell", "id", "Cell", 1, "form-control", 3, "value"], ["type", "password", "placeholder", "Password", "id", "Password", 1, "form-control"], ["type", "password", "placeholder", "Retype Password", "name", "RetypePassword", "id", "RetypePassword", 1, "form-control"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "fieldset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Save Changes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "fieldset", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Delete Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.user.first_name, " ", ctx.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.user.phone);
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__["LazyImgDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/account/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/account/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../home/counter/counter.component */ "./src/app/components/home/counter/counter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");










const _c0 = function (a0) { return { "border": a0 }; };
const ApiResult = {
    SUCCESS: 'Success',
    ALREADYEXISTES: 'User exists.',
    EXTRA: 'ERROR'
};
class RegisterComponent {
    constructor(recaptchaV3Service, authService, router, cookieService) {
        this.recaptchaV3Service = recaptchaV3Service;
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
        this.password = null;
        this.conPassword = null;
        this.emailAddress = null;
        this.firstName = null;
        this.lastName = null;
        this.phoneNumber = null;
        this.terms = false;
        this.newsLetter = false;
        this.feedback = null;
        this.isLoading = false;
    }
    ngOnInit() {
        $(".btn-shopping-list").css("display", "none");
    }
    register() {
        console.log("--- this is the register -----");
        let formData = {
            password: this.password,
            con_password: this.conPassword,
            email_address: this.emailAddress,
            firstname: this.firstName,
            lastname: this.lastName,
            phone: this.phoneNumber,
            terms: this.terms,
            news_letter: this.newsLetter
        };
        // this.recaptchaV3Service.execute('importantAction').subscribe((token) => this.handleToken(token));
        let validateResult = this.validator();
        if (!validateResult.status) {
            this.feedback = validateResult.value;
            return;
        }
        this.feedback = null;
        this.isLoading = true;
        this.authService.register(JSON.stringify(formData)).subscribe((res) => {
            this.isLoading = false;
            console.log(res);
            if (res.toString() == ApiResult.SUCCESS) {
                this.router.navigate(['account/login']);
            }
            if (res.toString() == ApiResult.ALREADYEXISTES) {
                this.feedback = "User Already Exist. Please try another email.";
            }
            else {
                this.feedback = "User Already Exist. Please try another email";
            }
        });
    }
    validator() {
        let returnValue = {
            status: true,
            value: "validated",
        };
        if (this.password == null || this.conPassword == null ||
            this.emailAddress == null || this.firstName == null || this.lastName == null ||
            this.phoneNumber == null || this.terms == null || this.newsLetter == null) {
            returnValue.status = false;
            returnValue.value = "Please input the fields.";
            return returnValue;
        }
        if (this.password == "" || this.conPassword == "" ||
            this.emailAddress == "" || this.firstName == "" || this.lastName == "" ||
            this.phoneNumber == "") {
            returnValue.status = false;
            returnValue.value = "Please input the fields.";
            return returnValue;
        }
        if (!this.terms || !this.newsLetter) {
            returnValue.status = false;
            returnValue.value = "Please agree to our terms and conditions.";
            return returnValue;
        }
        if (this.password != this.conPassword) {
            returnValue.status = false;
            returnValue.value = "Your passwords do not match.";
            return returnValue;
        }
        if (!this.validateEmail(this.emailAddress)) {
            returnValue.status = false;
            returnValue.value = "Please input the correct email.";
            return returnValue;
        }
        // if (!this.validatePhoneNumber(this.phoneNumber)) {
        //   returnValue.status = false
        //   returnValue.value = "Please input the correct phone number."
        //   return returnValue
        // }
        return returnValue;
    }
    handleToken(token) {
        console.log(token);
    }
    validateEmail(email) {
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regularExpression.test(String(email).toLowerCase());
    }
    validatePhoneNumber(phone) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return (phone.match(phoneno));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaV3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 81, vars: 24, consts: [[1, "justify-content-center"], [1, "login-container", "d-flex", "justify-content-center"], [1, "inner-login-container", "d-flex", "justify-content-center"], [1, "form-group"], ["id", "feedback", 1, "feedback"], [1, "login-block"], [1, "row"], [1, "col-md-3"], [1, "col-md-9"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Enter your title here", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Enter your first name here", 1, "form-control", 3, "ngStyle", "input"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Enter your last name here", 1, "form-control", 3, "ngStyle", "input"], ["type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter your email address here", 1, "form-control", 3, "ngStyle", "input"], ["type", "password", "placeholder", "Enter your password here", 1, "form-control", 3, "ngStyle", "input"], ["type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter your mobile number here", 1, "form-control", 3, "ngStyle", "input"], ["type", "email", "aria-describedby", "emailHelp", "placeholder", "Enter your address here", 1, "form-control", 3, "ngStyle", "input"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", "name", "newsletter", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "checkbox", "id", "exampleCheck2", "name", "terms", 1, "form-check-input", 3, "ngModel", "ngModelChange"], [1, "col-md-12", 2, "text-align", "right"], [1, "seemesave_button", 3, "click"], [1, "campaign"], ["src", "../../../../assets//campaign-2.jpg"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_20_listener($event) { return ctx.firstName = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_26_listener($event) { return ctx.lastName = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_32_listener($event) { return ctx.emailAddress = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_38_listener($event) { return ctx.password = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_44_listener($event) { return ctx.conPassword = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_50_listener($event) { return ctx.phoneNumber = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_56_listener($event) { return ctx.firstName = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_63_listener($event) { return ctx.newsLetter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Receive email promostions and hot deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_72_listener($event) { return ctx.terms = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Receive hot deals notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_77_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feedback);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.feedback != null && ctx.firstName == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.feedback != null && ctx.lastName == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.feedback != null && ctx.emailAddress == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.feedback != null && ctx.password == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.feedback != null && ctx.conPassword == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.feedback != null && ctx.phoneNumber == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.feedback != null && ctx.firstName == null ? "1px solid red" : "1px solid #ced4da"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newsLetter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.terms);
    } }, directives: [_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_8__["LazyImgDirective"]], styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 20em;\n  background-color: #89c33f;\n  padding: 1em;\n  margin-top: 1em;\n  \n  background: linear-gradient(to bottom, #89c33f, #89c33f);\n}\n\n.top[_ngcontent-%COMP%] {\n  \n  background: linear-gradient(to bottom, #89c33f, #89c33f);\n  height: 50px;\n}\n\n.inner-login-container[_ngcontent-%COMP%] {\n  padding: 1.5em;\n  width: 60%;\n}\n\n.inner-login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.campaign[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #89c33f, #f1e832) !important;\n  padding: 4em 1em !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 2em 4em;\n  background: rgba(149, 201, 108, 0.6);\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n  border-spacing: 0;\n  border: none;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.9em;\n  text-align: right;\n  float: left;\n  margin-right: 3em;\n  position: relative;\n  bottom: 6px;\n  line-height: 1.2em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 0 auto 12px;\n  text-indent: 10px;\n  padding: 15px 10px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  outline: none !important;\n  border: none !important;\n  float: right;\n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0.2em 2.8em;\n  line-height: 35px;\n  float: right;\n}\n\n.login-block[_ngcontent-%COMP%] {\n  background-color: #9cbf63;\n  padding: 3em 5em 2em 2em;\n}\n\n.col-md-9[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n}\n\n.col-md-6[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n}\n\n.col-md-3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  text-align: left;\n  color: white;\n  font-weight: 600;\n}\n\n.seemesave_button[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 40px;\n  border-radius: 6px;\n  background-color: #f7e843;\n  box-shadow: none;\n  margin-top: 1em;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  font-size: 12px;\n}\n\n.float_clear[_ngcontent-%COMP%] {\n  float: unset;\n}\n\n.login-block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.form-check[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: gainsboro;\n}\n\n@media only screen and (max-width: 1200px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-width: 764px) {\n  .col-md-3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    text-align: left;\n    color: white;\n    font-weight: 600;\n  }\n\n  .login-block[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUtHLCtCQUFBO0VBQ0gsd0RBQUE7QUFKRjs7QUFVQTtFQUtLLCtCQUFBO0VBQ0gsd0RBQUE7RUFLQSxZQUFBO0FBZEY7O0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFiRjs7QUFlQTtFQUNFLFdBQUE7QUFaRjs7QUFlQTtFQUNFLFdBQUE7QUFaRjs7QUFjQTtFQUNFO0lBQ0UsV0FBQTtFQVhGO0FBQ0Y7O0FBYUE7RUFDRSx1RUFBQTtFQUNBLDJCQUFBO0FBWEY7O0FBWUU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBVko7O0FBV0k7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFUTjs7QUFXSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFUTjs7QUFXSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNDM0VJO0FEa0VWOztBQVVNO0VBQWlCLHlDQUFBO0VBQ2YsY0M3RUU7RUQ4RUYsVUFBQTtFQUFZLFlBQUE7QUFOcEI7O0FBSU07RUFBaUIseUNBQUE7RUFDZixjQzdFRTtFRDhFRixVQUFBO0VBQVksWUFBQTtBQU5wQjs7QUFJTTtFQUFpQix5Q0FBQTtFQUNmLGNDN0VFO0VEOEVGLFVBQUE7RUFBWSxZQUFBO0FBTnBCOztBQUlNO0VBQWlCLHlDQUFBO0VBQ2YsY0M3RUU7RUQ4RUYsVUFBQTtFQUFZLFlBQUE7QUFOcEI7O0FBUU07RUFBMEIsNEJBQUE7RUFDeEIsY0NqRkU7QUQ0RVY7O0FBT007RUFBMkIsbUJBQUE7RUFDekIsY0NwRkU7QURnRlY7O0FBT0k7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTE47O0FBV0E7RUFDRSx5QkFBQTtFQUNBLHdCQUFBO0FBUkY7O0FBV0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVJGOztBQVdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFSRjs7QUFXQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtFQUNaLGVBQUE7QUFORjs7QUFHQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtFQUNaLGVBQUE7QUFORjs7QUFHQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtFQUNaLGVBQUE7QUFORjs7QUFHQTtFQUFnQix5Q0FBQTtFQUNkLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtFQUNaLGVBQUE7QUFORjs7QUFTQTtFQUF5Qiw0QkFBQTtFQUN2QixjQUFBO0VBQ0EsZUFBQTtBQUxGOztBQVFBO0VBQTBCLG1CQUFBO0VBQ3hCLGNBQUE7RUFDQSxlQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFO0lBQ0UsV0FBQTtFQUpGO0FBQ0Y7O0FBT0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBTEY7O0VBT0E7SUFDRSxZQUFBO0VBSkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdmFyaWFibGVzIGZpbGUgd2l0aCBnbG9iYWwgc3R5bGUgdmFyaWFibGVzIGFuZCB0aGVtZVxuQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcbi5sb2dpbi1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAyMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODljMzNmO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgICM4OWMzM2YsXG4gICAgIzg5YzMzZlxuICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgICM4OWMzM2YsXG4gICAgIzg5YzMzZlxuICApO1xufVxuLnRvcCB7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSxcbiAgICAjODljMzNmLFxuICAgICM4OWMzM2ZcbiAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIHRvIGJvdHRvbSxcbiAgICAjODljMzNmLFxuICAgICM4OWMzM2ZcbiAgKTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuLmlubmVyLWxvZ2luLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICB3aWR0aDogNjAlO1xufVxuLmlubmVyLWxvZ2luLWNvbnRhaW5lciBmb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYW1wYWlnbiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmlubmVyLWxvZ2luLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4OWMzM2YsICNmMWU4MzIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRlbSAxZW0gIWltcG9ydGFudDtcbiAgLnJlZ2lzdGVyLWZvcm0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyZW0gNGVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMDEsIDEwOCwgMC42KTtcbiAgICB0YWJsZSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIG1hcmdpbi1yaWdodDogM2VtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm90dG9tOiA2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgfVxuICAgIGlucHV0LCBzZWxlY3Qge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0byAxMnB4O1xuICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgJjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gICAgICB9XG4gICAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIH1cbiAgICAgICY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIH1cbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwLjJlbSAyLjhlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuXG5cbi5sb2dpbi1ibG9jayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2JmNjM7XG4gIHBhZGRpbmc6IDNlbSA1ZW0gMmVtIDJlbTtcbn1cblxuLmNvbC1tZC05ID4gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNXJlbSArIDhweCkgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbn1cblxuLmNvbC1tZC02ID4gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNXJlbSArIDhweCkgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtanVzdGlmeTogYXV0bztcbn1cblxuLmNvbC1tZC0zID4gcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNlZW1lc2F2ZV9idXR0b24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2U4NDM7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogICM2MEE4REM7O1xuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAgIzYwQThEQztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAgIzYwQThEQztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmxvYXRfY2xlYXIge1xuICBmbG9hdDogdW5zZXQ7XG59XG5cbi5sb2dpbi1ibG9jayA+IC5yb3cge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZm9ybS1jaGVjayA+IGxhYmVsIHtcbiAgY29sb3I6IGdhaW5zYm9ybztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlubmVyLWxvZ2luLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjRweCkge1xuICAuY29sLW1kLTMgPiBwIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG4gIC5sb2dpbi1ibG9jayB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG59XG5cbiIsIkBtaXhpbiB0cmFuc2l0aW9uKCR4KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHg7XG4gIC1tb3otdHJhbnNpdGlvbjogJHg7XG4gIC1tcy10cmFuc2l0aW9uOiAkeDtcbiAgLW8tdHJhbnNpdGlvbjogJHg7XG4gIHRyYW5zaXRpb246ICR4O1xufVxuXG4kcHJpbWFyeTogIzYwQThEQztcbiRwcmltYXJ5LWFjY2VudDogZGFya2VuKCRwcmltYXJ5LCAxMCUpO1xuJHNlY29uZGFyeTogIzlEQ0U3NDtcbiRzZWNvbmRhcnktYWNjZW50OiBkYXJrZW4oJHNlY29uZGFyeSwgMTAlKTtcbiR0ZXh0LWNvbG9yOiAjMGUwZTBlO1xuJGxpbmstY29sb3I6ICNhOGE4YTg7XG4kbGluay1jb2xvci1ob3ZlcjogJHByaW1hcnk7XG4kc2VhcmNoLWJnOiAjZjdlOTQzO1xuJHNlYXJjaC1iZy1ob3ZlcjogZGFya2VuKCRzZWFyY2gtYmcsIDEwJSk7XG4kZGFuZ2VyOiAjRTIyMTI3O1xuJGhlYWRpbmdzLWNvbG9yOiAjZmZmZmZmO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaV3Service"] }, { type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/account/reset-password/reset-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/account/reset-password/reset-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../campaigns/header-campaign.component */ "./src/app/components/campaigns/header-campaign.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function ResetPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password reset token sent successfully to ", ctx_r0.email, " ");
} }
function ResetPasswordComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password reset token not sent successfully to ", ctx_r1.email, " ");
} }
class ResetPasswordComponent {
    constructor(authService, router, cookieService) {
        this.authService = authService;
        this.router = router;
        this.cookieService = cookieService;
    }
    ngOnInit() {
    }
    recoverCredentials() {
        console.log('Reset: ', this.email);
        this.authService.generatePasswordToken(this.email)
            .subscribe(res => {
            console.log('---- generate password token -----');
            console.log(res);
            this.cookieService.set('resetPassword', JSON.stringify(res));
            const reset = JSON.parse(this.cookieService.get('resetPassword'));
            const success = reset.success;
            console.log('Res: ', res);
            if (success) {
                this.emailSent = true;
                setTimeout(() => {
                    this.cookieService.delete('resetPassword');
                    this.router.navigate(['/account/change-password']);
                }, 3000);
            }
            else {
                this.errorSent = true;
            }
        }, err => {
            console.log(err);
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 20, vars: 3, consts: [[1, "content"], [1, "for-account"], [1, "for-account-container"], [1, "for-account-content"], [1, "for-account-form", "recovery-form"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-header"], [1, "form-body"], [1, "form-group"], ["type", "email", "placeholder", "a Valid Email Address", "name", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["routerLink", "/account/login"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResetPasswordComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResetPasswordComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_13_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_15_listener() { return ctx.recoverCredentials(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Recover");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorSent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__["HeaderCampaignComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".feedback[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFjayB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reset-password',
                templateUrl: './reset-password.component.html',
                styleUrls: ['./reset-password.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/account/shopping-lists/shopping-lists.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/account/shopping-lists/shopping-lists.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ShoppingListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListsComponent", function() { return ShoppingListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ShoppingListsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShoppingListsComponent.ɵfac = function ShoppingListsComponent_Factory(t) { return new (t || ShoppingListsComponent)(); };
ShoppingListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingListsComponent, selectors: [["app-shopping-lists"]], decls: 2, vars: 0, template: function ShoppingListsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shopping-lists works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9zaG9wcGluZy1saXN0cy9zaG9wcGluZy1saXN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shopping-lists',
                templateUrl: './shopping-lists.component.html',
                styleUrls: ['./shopping-lists.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/account/vendor-signup/vendor-signup.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/account/vendor-signup/vendor-signup.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VendorSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorSignupComponent", function() { return VendorSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/counter/counter.component */ "./src/app/components/home/counter/counter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");






function VendorSignupComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "General");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Store Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We can add more stores later");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Enter your primary store name. This can be anything because later on you'll perhaps add more stores and would need to differenctiate between them. For example - a store in Randburg, call it Randburg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_24_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.next("two"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function VendorSignupComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose your plan, currently only FREE is available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Subscription choice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_25_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.next("one"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Beginning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_25_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.next("one"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_25_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.next("three"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function VendorSignupComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Important Notice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " SeeMeSave strives to be a platform that connects you, our vendor, to consumers and traders thus enabling you to gorw your business through retail product promotions and other business servies SeeMeSave might consider to offer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " SeeMeSave will not share your pormotins performance, statistics, promotion and selling prices of products to any other verndor who is also registered on SeeMeSave. We protect this information. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Registering as a vendor is strictly subscription based. A physical address is also required of your primary sotre which we will verify. Upon approval you may add more of your stores (limited to 1 one store for now) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Once you are complete iwth registeration, please validate your account with the registration link that will be sent via email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " The SeeMeSave Team will validate your account as soon as we have confirmed your submitted credentials. You will be notified via email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I agree to the Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_26_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.next("one"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Beginning");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_26_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.next("two"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_ng_container_26_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.signup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SignUp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class VendorSignupComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.countFeatured = 436;
        this.countLocations = 254;
        this.countPromotions = 2034;
        this.step = "one";
        this.vendor = {
            businessName: '',
            image: ''
        };
    }
    ngOnInit() {
        this.step = 'one';
    }
    next(value) {
        this.step = value;
    }
    signup() {
    }
}
VendorSignupComponent.ɵfac = function VendorSignupComponent_Factory(t) { return new (t || VendorSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
VendorSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VendorSignupComponent, selectors: [["app-vendor-signup"]], decls: 29, vars: 7, consts: [[1, "vendor-container"], [1, "container"], [1, "row"], [1, "col-md-4", "step-board-active", 3, "click"], [1, "col-md-4", 3, "ngClass", "click"], [1, "form-group"], ["id", "feedback", 1, "feedback"], [1, "login-block", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "campaign"], ["src", "../../../../assets//campaign-2.jpg", 2, "width", "100%"], [1, "col-md-6"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Busniess name", 1, "form-control"], ["type", "file", "aria-describedby", "emailHelp", "placeholder", "Upload logo", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Busniess contact number", 1, "form-control"], ["type", "file", "aria-describedby", "emailHelp", "placeholder", "Upload cover image", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Busniess website", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Enter your story", 1, "form-control"], [1, "col-md-12"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Store name", 1, "form-control"], [1, "white-description"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Street address", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Suburb", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "Province", 1, "form-control"], ["type", "text", "aria-describedby", "emailHelp", "placeholder", "City", 1, "form-control"], [1, "col-md-12", 2, "text-align", "right"], [1, "seemesave_button", 3, "click"], [1, "seemesave_button", "float-left", 3, "click"], [1, "seemesave_button", "previous_button", 3, "click"], [1, "float-right", "seemesave_button", 3, "click"], [1, "important-notice"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck2", "name", "terms", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"]], template: function VendorSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_Template_div_click_4_listener() { return ctx.next("one"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "STEP 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "General Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_Template_div_click_9_listener() { return ctx.next("two"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "STEP 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Choose Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_Template_div_click_14_listener() { return ctx.next("three"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "STEP 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Confirmation Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VendorSignupComponent_ng_container_24_Template, 45, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VendorSignupComponent_ng_container_25_Template, 26, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, VendorSignupComponent_ng_container_26_Template, 34, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step == "one" ? "step-board" : "step-board-active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.step != "three" ? "step-board" : "step-board-active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feedback);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.step);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "one");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "three");
    } }, directives: [_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n\n  .mat-horizontal-stepper-header-container {\n  margin-bottom: 1em;\n  background-color: white;\n}\n\n  .mat-step-header {\n  color: white;\n  background-color: #60a8dc;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  background-color: #89c33f;\n}\n\n.stepper[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 70%;\n  margin-top: 0.5em;\n  padding: 0;\n}\n\n.step-board[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n  align-items: center;\n  padding: 10px;\n  color: #60a8dc;\n  cursor: pointer;\n}\n\n.step-board[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.step-board-active[_ngcontent-%COMP%] {\n  background-color: #60a8dc;\n  text-align: center;\n  align-items: center;\n  padding: 10px;\n  color: white;\n  cursor: pointer;\n}\n\n.step-board-active[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.login-block[_ngcontent-%COMP%] {\n  background-color: #9cbf63;\n  padding: 3em 7em;\n}\n\n.login-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 800;\n}\n\n.login-block[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: white;\n}\n\n.login-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 12px;\n}\n\n.login-block[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 800;\n  color: white;\n}\n\n.login-block[_ngcontent-%COMP%]   .important-notice[_ngcontent-%COMP%] {\n  color: #60a8dc;\n  font-size: 14px;\n  padding: 15px;\n  border-radius: 8px;\n  background-color: white;\n}\n\n.col-md-12[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n}\n\n.col-md-12[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n  border: none;\n  width: 100%;\n}\n\n.col-md-12[_ngcontent-%COMP%]    > select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n  border: none;\n  width: 100%;\n}\n\n.col-md-6[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  border-radius: 4px !important;\n  padding: 4px;\n  padding-left: 15px;\n  background-color: white;\n  height: calc(1.5em + .5rem + 8px) !important;\n  justify-content: center;\n  text-justify: auto;\n}\n\n.col-md-3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  text-align: left;\n  color: white;\n  font-weight: 600;\n}\n\n.seemesave_button[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: bold;\n  text-align: center;\n  padding: 5px 40px;\n  border-radius: 6px;\n  background-color: #f7e843;\n  box-shadow: none;\n  margin-top: 1em;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  font-size: 12px;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  font-size: 12px;\n}\n\n.float_clear[_ngcontent-%COMP%] {\n  float: unset;\n}\n\n.login-block[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.form-check[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  color: gainsboro;\n}\n\n.vendor-container[_ngcontent-%COMP%] {\n  padding-bottom: 0.5em;\n  margin-top: 1em;\n  padding-top: 15px;\n  background-color: #89c33f;\n}\n\n.previous_button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n@media only screen and (max-width: 1200px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .vendor-container[_ngcontent-%COMP%] {\n    padding-bottom: 0.5em;\n    margin-top: 1em;\n    padding-top: 15px;\n    background-color: #89c33f;\n  }\n}\n\n@media only screen and (max-width: 764px) {\n  .col-md-3[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    text-align: left;\n    color: white;\n    font-weight: 600;\n  }\n\n  .login-block[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .vendor-container[_ngcontent-%COMP%] {\n    padding-bottom: 0.5em;\n    margin-top: 1em;\n    padding-top: 0;\n    background-color: #89c33f;\n  }\n\n  .previous_button[_ngcontent-%COMP%] {\n    margin-left: 0;\n    float: right;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .stepper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .col-md-6[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n\n  .vendor-container[_ngcontent-%COMP%] {\n    padding-bottom: 0.5em;\n    margin-top: 1em;\n    padding-top: 0;\n    background-color: #89c33f;\n  }\n\n  .previous_button[_ngcontent-%COMP%] {\n    margin-left: 0;\n    float: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3ZlbmRvci1zaWdudXAvdmVuZG9yLXNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGdCQUFBO0FBSEo7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFFQSx1QkFBQTtBQUZGOztBQUtBO0VBRUUsWUFBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUlBLGVBQUE7QUFORjs7QUFHRTtFQUNFLFNBQUE7QUFESjs7QUFNQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsZUFBQTtBQU5GOztBQUdFO0VBQ0UsU0FBQTtBQURKOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUpGOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBSUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFISjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBSEo7O0FBT0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFKRjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFISjs7QUFPQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQWdCLHlDQUFBO0VBQ2QsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0VBQ1osZUFBQTtBQUZGOztBQURBO0VBQWdCLHlDQUFBO0VBQ2QsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0VBQ1osZUFBQTtBQUZGOztBQURBO0VBQWdCLHlDQUFBO0VBQ2QsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0VBQ1osZUFBQTtBQUZGOztBQURBO0VBQWdCLHlDQUFBO0VBQ2QsY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0VBQ1osZUFBQTtBQUZGOztBQUtBO0VBQXlCLDRCQUFBO0VBQ3ZCLGNBQUE7RUFDQSxlQUFBO0FBREY7O0FBSUE7RUFBMEIsbUJBQUE7RUFDeEIsY0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0UsV0FBQTtFQUFGOztFQUVBO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSx5QkFBQTtFQUNGO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VBQUY7O0VBRUE7SUFDRSxZQUFBO0VBQ0Y7O0VBQ0E7SUFDRSxnQkFBQTtFQUVGOztFQUFBO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0lBQ0EsY0FBQTtJQUNBLHlCQUFBO0VBR0Y7O0VBREE7SUFDRSxjQUFBO0lBQ0EsWUFBQTtFQUlGO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFdBQUE7RUFDRjs7RUFDQTtJQUNFLGdCQUFBO0VBRUY7O0VBQUE7SUFDRSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0lBQ0EseUJBQUE7RUFHRjs7RUFEQTtJQUNFLGNBQUE7SUFDQSxZQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC92ZW5kb3Itc2lnbnVwL3ZlbmRvci1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbi5tYXQtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59ICBcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVye1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IzYwYThkYztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59IFxuXG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYThkYztcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg5YzMzZjtcbn1cblxuLnN0ZXBwZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnN0ZXAtYm9hcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogIzYwYThkYztcbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN0ZXAtYm9hcmQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwYThkYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLmxvZ2luLWJsb2NrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljYmY2MztcbiAgcGFkZGluZzogM2VtIDdlbTtcbiAgaDUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHNwYW4ge1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuICBwIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIGg2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmltcG9ydGFudC1ub3RpY2V7XG4gICAgY29sb3I6ICM2MGE4ZGM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG59XG5cbi5jb2wtbWQtMTIgPiBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIC41cmVtICsgOHB4KSAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1qdXN0aWZ5OiBhdXRvO1xufVxuXG4uY29sLW1kLTEyID4gc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjVyZW0gKyA4cHgpICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWp1c3RpZnk6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wdGlvbiB7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNXJlbSArIDhweCkgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5jb2wtbWQtNiA+IGlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjVyZW0gKyA4cHgpICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWp1c3RpZnk6IGF1dG87XG59XG5cbi5jb2wtbWQtMyA+IHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zZWVtZXNhdmVfYnV0dG9uIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlODQzO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6ICAjNjBBOERDOztcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogICM2MEE4REM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogICM2MEE4REM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZsb2F0X2NsZWFyIHtcbiAgZmxvYXQ6IHVuc2V0O1xufVxuXG4ubG9naW4tYmxvY2sgPiAucm93IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmZvcm0tY2hlY2sgPiBsYWJlbCB7XG4gIGNvbG9yOiBnYWluc2Jvcm87XG59XG5cbi52ZW5kb3ItY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICBtYXJnaW4tdG9wOiAxZW07XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODljMzNmO1xufVxuXG4ucHJldmlvdXNfYnV0dG9ue1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlubmVyLWxvZ2luLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnZlbmRvci1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg5YzMzZjtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2NHB4KSB7XG4gIC5jb2wtbWQtMyA+IHAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgLmxvZ2luLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gIH1cbiAgLmNvbC1tZC02IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC52ZW5kb3ItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWMzM2Y7XG4gIH1cbiAgLnByZXZpb3VzX2J1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN0ZXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb2wtbWQtNiB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAudmVuZG9yLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODljMzNmO1xuICB9XG4gIC5wcmV2aW91c19idXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vendor-signup',
                templateUrl: './vendor-signup.component.html',
                styleUrls: ['./vendor-signup.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/campaigns/footer-campaign.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/campaigns/footer-campaign.component.ts ***!
  \*******************************************************************/
/*! exports provided: FooterCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterCampaignComponent", function() { return FooterCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");



class FooterCampaignComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterCampaignComponent.ɵfac = function FooterCampaignComponent_Factory(t) { return new (t || FooterCampaignComponent)(); };
FooterCampaignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterCampaignComponent, selectors: [["app-footer-campaign"]], decls: 1, vars: 0, consts: [["loading", "lazy", "alt", "SeeMeSave Campaign", "src", "../assets/campaign-bottom.jpg", 1, "campaign-image"]], template: function FooterCampaignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterCampaignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-campaign',
                template: `<img class="campaign-image" loading="lazy" alt="SeeMeSave Campaign" src="../assets/campaign-bottom.jpg"/>`,
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/campaigns/header-campaign.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/campaigns/header-campaign.component.ts ***!
  \*******************************************************************/
/*! exports provided: HeaderCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderCampaignComponent", function() { return HeaderCampaignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");



class HeaderCampaignComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderCampaignComponent.ɵfac = function HeaderCampaignComponent_Factory(t) { return new (t || HeaderCampaignComponent)(); };
HeaderCampaignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderCampaignComponent, selectors: [["app-header-campaign"]], decls: 1, vars: 0, consts: [["loading", "lazy", "alt", "SeeMeSave Campaign", "src", "../assets/campaign-top.jpg", 1, "campaign-image"]], template: function HeaderCampaignComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderCampaignComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-campaign',
                template: `<img class="campaign-image" loading="lazy" alt="SeeMeSave Campaign" src="../assets/campaign-top.jpg"/>`,
                styleUrls: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/about/about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/about/about.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../campaigns/header-campaign.component */ "./src/app/components/campaigns/header-campaign.component.ts");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");




class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 104, vars: 0, consts: [[1, "content"], [1, "about-section-main"], [1, "about-section"], [1, "about-section-container"], [1, "about-section-content"], [1, "section-main"], [1, "section-main-header"], [1, "section-main-body"], [1, "row"], [1, "col-sm-3"], [1, "about-icon"], ["src", "../../../../assets/images/vendors.png", 2, "width", "100px"], ["src", "../../../../assets/images/trolley.png", 2, "width", "100px"], ["src", "../../../../assets/images/checklist.png", 2, "width", "100px"], ["src", "../../../../assets/images/feedback.png", 2, "width", "100px"], ["id", "second-section", 1, "section-main"], ["src", "../../../../assets/images/wallet.png", 2, "width", "100px"], ["src", "../../../../assets/images/market.png", 2, "width", "100px"], ["src", "../../../../assets/images/location_pin.png", 2, "width", "100px"], ["src", "../../../../assets/images/like.png", 2, "width", "100px"], [1, "col-sm-4"], ["src", "../../../../assets/images/analytic.png", 2, "width", "100px"], ["src", "../../../../assets/images/promotion.png", 2, "width", "100px"], ["src", "../../../../assets/images/products.png", 2, "width", "100px"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "WHY OUR PRODUCT IS THE BEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Unlock daily savings on retail goods around the country. With a simple to access interface, add products on promotions to your shopping lists and we\u2019ll calculate how much you save. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "VENDORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Promotions are listed by vendor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "ACTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Simply add the products you want to shopping lists.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "SHOPPING LISTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Print out these shopping lists or view them here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "FEEDBACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Give the vendor feedback about your shopping experience.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "YOUR LIFE WILL BE LIVED SMARTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "SAVINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "SeeMeSave strives to promote real savings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "VENDOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " SeeMeSave works closely with vendors around the country to bring to you top class savings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "LOCATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "SeeMeSave lists promotions closest to you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "LATEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " SeeMeSave strives to bring to you the latest promotions that are fresh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "ARE YOU PERHAPS A VENDOR LOOKING TO PROMOTE?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Simply subscribe to SeeMeSave and unlock the power of digital promotion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "UNLOCK ANALYTICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " We have tools to assist in analysing past and current promotions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "PROMOTIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Your promotions can target speci\u001Ec individuals or the public. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Available to you is a library of products with high quality images ready to be added to your promotion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_1__["HeaderCampaignComponent"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__["LazyImgDirective"]], styles: [".about-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-icon[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-top: 0.5em;\n}\n#second-section[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWljb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoNHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcbiAgICB9XG59XG5cbiNzZWNvbmQtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/careers/careers.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/careers/careers.component.ts ***!
  \**************************************************************/
/*! exports provided: CareersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareersComponent", function() { return CareersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CareersComponent {
    constructor() { }
    ngOnInit() {
    }
}
CareersComponent.ɵfac = function CareersComponent_Factory(t) { return new (t || CareersComponent)(); };
CareersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CareersComponent, selectors: [["app-careers"]], decls: 71, vars: 0, consts: [[1, "for-careers"], [1, "for-careers-container"], [1, "for-careers-content"], [1, "for-careers-header"], [1, "for-careers-body"], [1, "careers-section"], [1, "careers-section-container"], [1, "careers-section-content"], [1, "careers-section-body"], [1, "section-body-left"], [1, "section-body-right"], [1, "section-jobs"], [1, "jobs-content"], [1, "job-card"], [1, "job-card-header"], [1, "job-card-body"], [1, "job-card-footer"]], template: function CareersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Join Our Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We would love having you on board, do you feel like you have what it takes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Why SeeMeSave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Software Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "HTML5 & CSS 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "JavaScript & JQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "3 + Years Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Human Resource");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "HTML5 & CSS 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "JavaScript & JQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "3 + Years Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Data Capturing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "HTML5 & CSS 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "JavaScript & JQuery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "3 + Years Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jYXJlZXJzL2NhcmVlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CareersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-careers',
                templateUrl: './careers.component.html',
                styleUrls: ['./careers.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");



class ContactComponent {
    constructor() {
        this.nameFocused = '';
        this.lastnameFocused = '';
        this.emailFocused = '';
        this.numberFocused = '';
        this.messageFocused = '';
    }
    ngOnInit() {
    }
    contactUs() {
    }
    inputFocused(value, focusIn, el) {
        if (focusIn) {
            this[el] = 'focused';
        }
        else {
            if (value.length) {
                this[el] = 'focused';
            }
            else {
                this[el] = '';
            }
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 61, vars: 0, consts: [[1, "for-contact"], [1, "for-contact-container"], [1, "for-contact-content"], [2, "color", "#000000"], [1, "for-contact-forms"], [1, "for-contact-forms-container"], [1, "for-contact-forms-content"], [1, "contact-forms"], [1, "contact-form"], [1, "form-group"], ["type", "text", "placeholder", "First Name", "name", "FirstName", "id", "FirstName", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "name", "LastName", "id", "LastName", 1, "form-control"], ["type", "tel", "placeholder", "Cell Phone Number", "name", "Cell", "id", "Cell", 1, "form-control"], ["type", "email", "placeholder", "a Valid Email Address", "name", "Email", "id", "Email", 1, "form-control"], ["id", "Message", "placeholder", "Message", "name", "Message", 1, "form-control"], [1, "contact-maps"], [1, "addresses"], [1, "address"], [1, "address-header"], [1, "address-body"], ["href", "mailto:hello@seemesave.com"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-envelope-fill"], ["fill-rule", "evenodd", "d", "M.05 3.555A2 2 0 0 1\n                                                2 2h12a2 2 0 0 1 1.95\n                                                1.555L8 8.414.05\n                                                3.555zM0\n                                                4.697v7.104l5.803-3.558L0\n                                                4.697zM6.761 8.83l-6.57\n                                                4.027A2 2 0 0 0 2\n                                                14h12a2 2 0 0 0\n                                                1.808-1.144l-6.57-4.027L8\n                                                9.586l-1.239-.757zm3.436-.586L16\n                                                11.801V4.697l-5.803\n                                                3.546z"], [2, "color", "#000000", "padding", "10px 0 0 10px"], ["href", "tel:011 513 3048"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-fill"], ["fill-rule", "evenodd", "d", "M2.267.98a1.636\n                                                    1.636 0 0 1\n                                                    2.448.152l1.681\n                                                    2.162c.309.396.418.913.296\n                                                    1.4l-.513\n                                                    2.053a.636.636 0 0 0\n                                                    .167.604L8.65\n                                                    9.654a.636.636 0 0 0\n                                                    .604.167l2.052-.513a1.636\n                                                    1.636 0 0 1\n                                                    1.401.296l2.162\n                                                    1.681c.777.604.849\n                                                    1.753.153\n                                                    2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47\n                                                    17.47 0 0\n                                                    1-6.571-4.144A17.47\n                                                    17.47 0 0 1 .639\n                                                    4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"], [1, "social-media"], [1, "social-media-header"], [1, "social-media-body"], ["href", "https://web.facebook.com/seemesavesa", "target", "_blank"], ["src", "../../../../assets/icons/facebook.png", "width", "30"], ["href", " https://www.linkedin.com/company/18805029", "target", "_blank"], ["src", "../../../../assets/icons/linkedin.webp", "width", "30"], ["href", "https://www.instagram.com/seemesave", "target", "_blank"], ["src", "../../../../assets/icons/instagram.png", "width", "30"], ["href", "https://www.youtube.com/channel/UChAi9kTle3MGAFoGjUMaFzg", "target", "_blank"], ["src", "../../../../assets/icons/youtube.png", "width", "30"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Let's Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We would love to hear from you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "fieldset", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Connect with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "For Support or any questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "hello@seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "011 513 3048");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Find us on social media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #89c33f, #f1e832) !important;\n  padding: 4em 1em !important;\n  color: #ffffff;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 10px;\n  top: 5px;\n  width: 31px;\n  height: 31px;\n  font-size: 31px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: underline;\n  font-size: 0.9em;\n  transition: all 0.3s ease-in-out;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.social-link[_ngcontent-%COMP%] {\n  margin: 10px;\n  display: inline-block;\n  height: 32px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.social-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n  transition: all 0.3s ease-in-out;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.social-link[_ngcontent-%COMP%]:first-of-type {\n  margin-left: 0px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.connect-links[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0e0e0e;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  cursor: pointer;\n  fill: #0e0e0e;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  line-height: 1.6em;\n  margin-bottom: 0px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  line-height: 2em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \" \";\n  left: 0;\n  bottom: -6px;\n  height: 2px;\n  width: 100%;\n  background: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2em;\n  background: rgba(149, 201, 108, 0.6);\n  width: 40%;\n  float: left;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n  border-spacing: 0;\n  border: none;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #60A8DC;\n  font-size: 0.7em;\n  line-height: 1.2em;\n  font-weight: 400;\n  z-index: 2;\n  margin-top: 16px;\n  margin-left: 20px;\n  pointer-events: none;\n  transition: all 0.3s ease-in-out;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   span.focused[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n  font-weight: 700 !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: calc(100% - 20px);\n  margin: 0 auto 12px;\n  padding: 15px 10px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  outline: none !important;\n  border: none !important;\n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0.2em 2.8em;\n  line-height: 35px;\n  float: right;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2em;\n  background: rgba(149, 201, 108, 0.6);\n  width: 40%;\n  float: right;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \" \";\n  left: 0;\n  bottom: -10px;\n  height: 2px;\n  width: 100%;\n  background: #60A8DC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSx1RUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFHRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VDakJGLGdDRGtCc0I7QUFHeEI7O0FBRkk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBSU47O0FBSE07RUFDRSxhQUFBO0VDeEJOLGdDRHlCMEI7QUFTNUI7O0FBUE07RUFDRSxnQkFBQTtBQVNSOztBQU5JO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBUU47O0FBTkk7RUFDRSxjQzdCTztBRHFDYjs7QUFQTTtFQUNFLGVBQUE7RUFDQSxhQ2hDSztBRHlDYjs7QUFMRTtFQUNFLGdCQUFBO0FBT0o7O0FBTkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFRTjs7QUFOSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVFOOztBQVBNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQzFERTtBRG1FVjs7QUFMRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPSjs7QUFOSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVFOOztBQU5JO0VBQ0Usa0JBQUE7RUFDQSxjQzdFSTtFRDhFSixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VDdkZKLGdDRHdGd0I7QUFZMUI7O0FBWE07RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FBYVI7O0FBVkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNDckdJO0FEaUhWOztBQVZJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVlOOztBQVRFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVZJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQy9ISTtBRDJJViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbmNsdWRlIHZhcmlhYmxlcyBmaWxlIHdpdGggZ2xvYmFsIHN0eWxlIHZhcmlhYmxlcyBhbmQgdGhlbWVcbkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBwLCBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4OWMzM2YsICNmMWU4MzIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRlbSAxZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMzFweDtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuM3MgZWFzZS1pbi1vdXQpO1xuICAgICYuc29jaWFsLWxpbmsge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgc3ZnIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuM3MgZWFzZS1pbi1vdXQpO1xuICAgICAgfVxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5jb25uZWN0LWxpbmtzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICBzdmcgcGF0aCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZmlsbDogJHRleHQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jb250YWN0LWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udGFjdC1mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMDEsIDEwOCwgMC42KTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRhYmxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjNzIGVhc2UtaW4tb3V0KTtcbiAgICAgICYuZm9jdXNlZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEycHg7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAuMmVtIDIuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG4gIC5jb250YWN0LWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDksIDIwMSwgMTA4LCAwLjYpO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIGgyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IC0xMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHRyYW5zaXRpb24oJHgpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkeDtcbiAgLW1vei10cmFuc2l0aW9uOiAkeDtcbiAgLW1zLXRyYW5zaXRpb246ICR4O1xuICAtby10cmFuc2l0aW9uOiAkeDtcbiAgdHJhbnNpdGlvbjogJHg7XG59XG5cbiRwcmltYXJ5OiAjNjBBOERDO1xuJHByaW1hcnktYWNjZW50OiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XG4kc2Vjb25kYXJ5OiAjOURDRTc0O1xuJHNlY29uZGFyeS1hY2NlbnQ6IGRhcmtlbigkc2Vjb25kYXJ5LCAxMCUpO1xuJHRleHQtY29sb3I6ICMwZTBlMGU7XG4kbGluay1jb2xvcjogI2E4YThhODtcbiRsaW5rLWNvbG9yLWhvdmVyOiAkcHJpbWFyeTtcbiRzZWFyY2gtYmc6ICNmN2U5NDM7XG4kc2VhcmNoLWJnLWhvdmVyOiBkYXJrZW4oJHNlYXJjaC1iZywgMTAlKTtcbiRkYW5nZXI6ICNFMjIxMjc7XG4kaGVhZGluZ3MtY29sb3I6ICNmZmZmZmY7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/counter/counter.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/counter/counter.component.ts ***!
  \**************************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/number-tracker-component/number-tracker-component.component */ "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts");



const _c0 = function (a0) { return [a0]; };
class CounterComponent {
    constructor() {
        this.countFeatured = 436;
        this.countLocations = 254;
        this.countPromotions = 2034;
    }
    ngOnInit() {
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter"]], decls: 30, vars: 9, consts: [[1, "container"], [1, "for-counters"], [1, "for-counters-container"], [1, "for-counters-content"], [1, "counters"], [1, "counter-card"], [1, "counter-content"], [1, "counter-left"], [1, "count"], [3, "end"], [1, "counter-right"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "number-tracker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "number-tracker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "number-tracker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.countFeatured));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.countPromotions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.countLocations));
    } }, directives: [_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_1__["NumberTrackerComponent"]], styles: [".for-counters[_ngcontent-%COMP%] {\n  position: relative;\n  left: 3.5em;\n}\n\n.count-cycle[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 50%;\n  background: #60A8DC;\n  text-align: center;\n  height: 57px;\n  line-height: 57px;\n}\n\n.count-cycle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n}\n\n.counter-container[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.col-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  margin-bottom: 0.3em;\n}\n\n.count-text[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 5% 0 0 5%;\n  padding: 0 0 0 5%;\n  text-align: center;\n}\n\n.count-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #60A8DC;\n  padding-top: 0.5em;\n}\n\n.for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.counter-right[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #60A8DC;\n  font-weight: 700;\n}\n\n@media only screen and (max-width: 600px) {\n  .for-counters[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0em;\n  }\n\n  section[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n    overflow: hidden;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n    display: inline-flex;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n    overflow: hidden;\n    margin: 0 auto;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   .counter-card[_ngcontent-%COMP%] {\n    width: 34%;\n    margin: 10px 0 0 0;\n    justify-content: center;\n    float: left;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   .counter-card[_ngcontent-%COMP%]   .counter-content[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   .counter-card[_ngcontent-%COMP%]   .counter-content[_ngcontent-%COMP%]   .counter-right[_ngcontent-%COMP%] {\n    padding: 0;\n    text-align: center;\n    width: 100%;\n    font-size: 14px;\n  }\n}\n\n@media only screen and (max-width: 1024px) {\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   .counter-card[_ngcontent-%COMP%]   .counter-content[_ngcontent-%COMP%]   .counter-left[_ngcontent-%COMP%] {\n    width: 60px;\n    margin: 0 auto 20px;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   .counter-card[_ngcontent-%COMP%]   .counter-content[_ngcontent-%COMP%]   .counter-right[_ngcontent-%COMP%] {\n    padding: 0;\n    text-align: center;\n  }\n\n  .for-counters[_ngcontent-%COMP%]   .for-counters-container[_ngcontent-%COMP%]   .for-counters-content[_ngcontent-%COMP%]   .counters[_ngcontent-%COMP%]   .counter-card[_ngcontent-%COMP%]   .counter-content[_ngcontent-%COMP%]   .counter-right[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n\n  .for-counters[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0FBRUo7O0FBRUE7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFBRjs7RUFFQTtJQUNFLFVBQUE7RUFDRjs7RUFDQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUFFRjs7RUFBQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7RUFHRjs7RUFEQTtJQUNFLFdBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0VBSUY7O0VBRkE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUFLRjs7RUFIQTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBTUY7O0VBSkE7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQU9GO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQU1GOztFQUpBO0lBQ0UsVUFBQTtJQUNBLGtCQUFBO0VBT0Y7O0VBTEE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFQVFGOztFQU5BO0lBQ0UsT0FBQTtFQVNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvci1jb3VudGVycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMy41ZW07XG59XG5cbi5jb3VudC1jeWNsZSB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM2MEE4REM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNTdweDtcbiAgICBsaW5lLWhlaWdodDogNTdweDtcbn1cbi5jb3VudC1jeWNsZSBzcGFuIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgfVxuXG4uY291bnRlci1jb250YWluZXIge1xuICAgIG1hcmdpbjogMWVtO1xufVxuXG5cbi5jb2wtY29udGVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbi5jb3VudC10ZXh0IHtcbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmc6IDUlIDAgMCA1JTtcbiAgICBwYWRkaW5nOiAwIDAgMCA1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3VudC10ZXh0IHAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM2MEE4REM7XG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuXG4uZm9yLWNvdW50ZXJzIC5mb3ItY291bnRlcnMtY29udGFpbmVyIC5mb3ItY291bnRlcnMtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY291bnRlci1yaWdodCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2MEE4REM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuZm9yLWNvdW50ZXJzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMGVtO1xuICB9XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLmZvci1jb3VudGVycyAuZm9yLWNvdW50ZXJzLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5mb3ItY291bnRlcnMgLmZvci1jb3VudGVycy1jb250YWluZXIgLmZvci1jb3VudGVycy1jb250ZW50IC5jb3VudGVycyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuICAuZm9yLWNvdW50ZXJzIC5mb3ItY291bnRlcnMtY29udGFpbmVyIC5mb3ItY291bnRlcnMtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5mb3ItY291bnRlcnMgLmZvci1jb3VudGVycy1jb250YWluZXIgLmZvci1jb3VudGVycy1jb250ZW50IC5jb3VudGVycyAuY291bnRlci1jYXJkIHtcbiAgICB3aWR0aDogMzQlO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG4gIC5mb3ItY291bnRlcnMgLmZvci1jb3VudGVycy1jb250YWluZXIgLmZvci1jb3VudGVycy1jb250ZW50IC5jb3VudGVycyAuY291bnRlci1jYXJkIC5jb3VudGVyLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5mb3ItY291bnRlcnMgLmZvci1jb3VudGVycy1jb250YWluZXIgLmZvci1jb3VudGVycy1jb250ZW50IC5jb3VudGVycyAuY291bnRlci1jYXJkIC5jb3VudGVyLWNvbnRlbnQgLmNvdW50ZXItcmlnaHQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAyNHB4KSB7XG4gIC5mb3ItY291bnRlcnMgLmZvci1jb3VudGVycy1jb250YWluZXIgLmZvci1jb3VudGVycy1jb250ZW50IC5jb3VudGVycyAuY291bnRlci1jYXJkIC5jb3VudGVyLWNvbnRlbnQgLmNvdW50ZXItbGVmdCB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgfVxuICAuZm9yLWNvdW50ZXJzIC5mb3ItY291bnRlcnMtY29udGFpbmVyIC5mb3ItY291bnRlcnMtY29udGVudCAuY291bnRlcnMgLmNvdW50ZXItY2FyZCAuY291bnRlci1jb250ZW50IC5jb3VudGVyLXJpZ2h0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZm9yLWNvdW50ZXJzIC5mb3ItY291bnRlcnMtY29udGFpbmVyIC5mb3ItY291bnRlcnMtY29udGVudCAuY291bnRlcnMgLmNvdW50ZXItY2FyZCAuY291bnRlci1jb250ZW50IC5jb3VudGVyLXJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5mb3ItY291bnRlcnMge1xuICAgIGxlZnQ6IDA7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counter',
                templateUrl: './counter.component.html',
                styleUrls: ['./counter.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/faq/faq.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/home/faq/faq.component.ts ***!
  \******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 2, vars: 0, template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "faq works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/help/help.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/help/help.component.ts ***!
  \********************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");



class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 134, vars: 0, consts: [[1, "header-main"], [1, "header-main-container"], [1, "header-content"], [1, "header-search-bar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search..", "name", "search", 1, "form-control"], [1, "live-chat-container"], [1, "live-chat-main"], [1, "live-chat-content"], [1, "cards-container"], [1, "news-card"], [1, "news-left"], ["src", "/assets/icons/newspaper.png", "alt", "news\n                                icon"], [1, "news-right"], [1, "news-header"], [1, "news-body"], [1, "live-chat-card"], [1, "chat-left"], ["src", "/assets/icons/chat.png", "alt", "chat\n                                icon"], [1, "chat-right"], [1, "chat-header"], [1, "chat-body"], [1, "different-articles"], [1, "articles-container-main"], [1, "articles-container"], [1, "articles-content"], [1, "articles"], [1, "article-card"], [1, "article-header"], [1, "article-body"], ["src", "/assets/icons/journal.png", "alt", "journal"], ["href", "#"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome To Our Support Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Contains 11 Articles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Live Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Connect Right Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "section", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Popular Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "How To Create My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Placing an Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Receiving Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Settling My Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Most Helpful Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "How To Create My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Placing an Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Receiving Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Settling My Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Knowledge Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "How To Create My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Placing an Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Receiving Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Settling My Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../campaigns/header-campaign.component */ "./src/app/components/campaigns/header-campaign.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../campaigns/footer-campaign.component */ "./src/app/components/campaigns/footer-campaign.component.ts");
/* harmony import */ var _stores_stores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stores/stores.component */ "./src/app/components/home/stores/stores.component.ts");
/* harmony import */ var _layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/landing/landing.component */ "./src/app/components/layout/landing/landing.component.ts");








function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HomeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stores");
} }
function HomeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing");
} }
class HomeComponent {
    constructor(cookieService) {
        this.cookieService = cookieService;
        // this.addressExists = cookieService.check('sms-address');
        // this.addressExists = false
        if (localStorage.getItem('full-address')) {
            this.addressExists = true;
        }
        else {
            this.addressExists = false;
        }
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer-campaign");
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressExists)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_2__["HeaderCampaignComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_4__["FooterCampaignComponent"], _stores_stores_component__WEBPACK_IMPORTED_MODULE_5__["StoresComponent"], _layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/privacy/privacy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/home/privacy/privacy.component.ts ***!
  \**************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) { return new (t || PrivacyComponent)(); };
PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyComponent, selectors: [["app-privacy"]], decls: 398, vars: 0, consts: [[1, "for-terms"], [1, "for-terms-container"], [1, "for-terms-content"], [1, "for-terms-header"], [1, "container"], [1, "privacy"], ["href", "www.seemesave.com"], ["href", "http://www.seemesave.com"], [2, "color", "#60A8DC"], ["href", "mailto:hello@seemesave.com"], [1, "white-dots"], ["href", "maito:hello@seemesave.com"], ["href", "maito:inforeg@justice.gov.za"]], template: function PrivacyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Thank you for visiting the website of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " This Privacy Policy is subject to the terms and conditions contained on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "http://www.seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " (\"this Website\"), and all definitions contained in such terms and conditions shall apply equally to this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " References to \"seemesave.com\", \"we\", \"us\", \"our\" and \"ours\" in this Privacy Policy mean seemesave.com. The terms \"you\", \"your\" and \"yours\" when used in this Privacy Policy mean any user of this Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " By continuing to use this Website, you agree to the terms and conditions set out in this Privacy Policy. Please note that by submitting information via this Website, you consent to the collection, collation, processing and storing of such information and the use and disclosure of such information in accordance with this Privacy Policy. We recommend that you read this Privacy Policy together with our terms and conditions prior to submitting information to this Website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " The Privacy Policy below to help you to understand better how we use your personal information. In it, we explain in more detail the types of personal information we collect, how we collect it, what we may use it for and who we may share it with. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Within the Privacy Policy you will find some specific examples of why and how we use your personal information. If you have further questions please get in touch with us by contacting the seemesave.com Data Protection Officer, using the below contact details. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Head Office See me Save (Pty) Ltd");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email address hello@seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Att: Data Protection Officer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " We are committed to respecting your privacy and protecting your personal information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "We will be transparent about the information we are collecting and what we will do with it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "We will use the information you give us for the purposes described in our Privacy Policy, which include providing you with products and/or services you have requested and enhancing your experience with seemesave.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "We will also use the information to help us understand you better and, if permitted to do so in terms of applicable law, give you information on relevant offers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "If you tell us you don\u2019t want to receive marketing messages we will stop sending them. We will, of course, continue to send essential information relating to a product or service you have purchased to keep you informed about your order.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "We will put in place measures to protect your personal information and keep it secure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "We will respect your data protection rights and aim to give you control over your own personal information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Within the Privacy Policy you will find some specific examples of why and how we use your personal information. If you have further questions please get in touch with us by writing to the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Data Protection Officer .");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Without prejudice to your rights under applicable laws, the above and the Privacy Policy are not contractual and do not form part of your contract with us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Controller of / Responsible Party for Personal Information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Any personal information processed by seemesave.com in connection with this Privacy Policy is controlled by seemesave.com which is considered the \"controller\" or \"responsible party\" of your personal information South African data protection law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "What do we mean by Personal Information?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Personal information means details which identify you or could be used to identify you, such as your name and contact details and purchase history. It may also include information about how you use our websites and mobile applications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "When does this policy apply?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " This Privacy Policy applies to personal information about you that we collect, use and otherwise process regarding your relationship with us as a customer or potential customer, including when you purchase products or use our services, use our websites or mobile applications, contact our offices. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Where we reference that others are controllers or responsible parties in the sections \"Controller of / Responsible party for personal information\" and \"Who do we share your personal information with?\" you should consult their privacy policies for further information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Additional terms and conditions or policies may apply if you elect to take additional products or services from us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "How can you keep your Personal Information Secure?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "We are committed to implementing leading data security safety measures and we take great care to protect the personal information you provide to us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " We have specialised security measures in place who constantly review and improve our measures to protect your personal information from unauthorised access, accidental loss, disclosure or destruction. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Here are some things you can do to keep your information secure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Keep your reference confidential.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "When you place an order, you will be given a reference. This will appear on the email confirmation sent to you. You should always keep your reference and login details confidential.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Giving your reference to others may allow them to access your order details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Keep your registered customer log-in details confidential.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "To make sure your access to our websites, other online services, and mobile applications is secure, you should not share your log-in details with anyone else. When you finish using the website, online services or mobile app you should log out if others may be able to access your computer or device. This is especially important if you are using a publicly accessible computer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Be aware of and protect yourself against Internet fraud and \"phishing\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " There is an Internet fraud practice known as \"phishing\" which is the illegal gathering of personal information by deception. Unsolicited emails are sent to individuals from lists illegally gathered by a third party, and recipients are asked to enter or reconfirm bank or password details into a \"cloned\u201D or website. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " We will only ask you for your bank or credit card details on a secure platform and will never ask you for your password or PIN. Make sure you are dealing with seemesave.com when you are asked for your bank or credit card details for refund purposes and never share your password or PIN with anyone, including us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "When do we collect Personal Information about you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " We collect personal information about you whenever you use our products and services (whether these products or services are provided by us or by other companies or agents acting on our behalf), including when you use our Website or mobile applications; interact with us through email or our contact center. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " We may also collect information about you from other companies within our group, or third parties, if this is appropriate and allowed by law. These include fraud-prevention agencies, business directories, credit reference agencies and business partners. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " For additional details see \"What types of personal information do we collect and retain?\" below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " In addition, we may receive personal information about you from third parties, such as: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Companies contracted by us to provide products or services to you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Companies that participate in our customer programmes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Companies who provide details to us under privacy polices providing for information to be shared with seemesave.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "What types of Personal Information do we collect and retain?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "When you use our products or services, you will need to provide us with your personal details.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "We collect the following categories of personal information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Information you provide for seemesave.com to complete and manage an order you have made with us or a service you have requested from us, such as your name, date of birth, home language, address, account information and email address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Information about your order and purchase trends.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Information about the products or services we have provided to you in the past.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Information about online registration and other interactions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Information about your use of our websites, contact center and mobile applications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Information about your device and your location if you have been browsing on our website, for example your \"Internet Protocol\" or \"IP\" address (i.e. a numeric code that can act as a unique identifier for your computer or other device, which can be turned off from your device) or unique device ID.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Your preferences for particular products or services when you tell us what they are - or when we assume what they are, depending on how you use our products and services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Your contact with us - such as a note or recording of a call you make to one of our contact centers, an email or letter you send to us or other records of any contact you have with us.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "When and why do we collect \"Special Personal Information\"?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Certain categories of personal information, such as that about race, ethnicity, religion, health, sexuality or biometric information are special categories of data requiring additional protection under South African data protection law and are referred to here as \"special personal information\". Generally, we try to limit the circumstances where we collect and process special personal information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Examples of where we may collect and process special personal information includes the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Where you have requested specific products from us with specific requirements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Where you have otherwise chosen to provide such information to us or it has been passed onto us by a third party, such as one of our Suppliers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Information relating to promotions that may be applicable.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "In addition, you may have requested products or services which is not special personal information data, but may imply or suggest your religion, health or other information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "What do we use your Personal Information for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "The main purposes for which we use your personal information are:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "To fulfil your requests and deliver the products or services you have asked for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "To manage the list of products by analyzing market trends.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "To send relevant communications to you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "To help us to meet certain legal and regulatory requirements which apply to seemesave.com.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "To provide products or services tailored to your requirements and to treat you in a more personal way.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "To carry out analysis and market research.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " To, subject to applicable law, carry out marketing including targeted online advertising and keep you informed of seemesave.com's products and services. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "To send you status updates and service communications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "To improve our websites, products and services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "For management and administrative purposes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "For internal business & operational purposes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "To respond to any questions or concerns you may have about our products or services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "To carry out research and statistical analysis including to monitor how customers use our products or services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "To prevent and detect fraud or other crimes, recover debts or trace those who owe us money.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "To provide aggregated reports to third parties (such reports do not contain any information which may identify you as an individual).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "To provide loyalty type and usage reports to third parties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "When will we send you Direct Marketing?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " We will not use your personal information for electronic direct marketing purposes unless we are permitted to do so by law. With your consent, we may sometimes send direct marketing communications that include a business partners' products and services related to the order you may place. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " We will only allow third parties or other members affiliated to us to send direct marketing communications to you when you have agreed to receive marketing from third parties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " We will respect your choice as to what communications you wish to receive and how these are sent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "How can you change what Direct Marketing Communications you receive, how you receive them and unsubscribe:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " If you decide you would no longer like to be sent direct marketing communications, you can unsubscribe or opt out at any time. In each direct marketing communication we send by email will have an unsubscribe option at the bottom of each email, which will allow you to stop you receiving further direct marketing emails. You may also stop any further text messages by replying with the word \"STOP\". We aim to action requests to stop being sent direct marketing communications as soon as possible, but it is possible that you will receive some marketing in the period prior to that change being made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " If you ask us to stop sending direct marketing communications, please note we will retain your personal information for the purposes of indicating that you do not want to receive direct marketing communications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Please note that if you tell us that you do not wish to be sent further direct marketing communications, you will still receive service communications (as described above) which are necessary, for example, to confirm your order or to provide you with an update on its status. If you have subscribed to any of our loyalty programmes, or if you are a member of any of our brands, we will continue to keep you informed about your membership and other important service information relating to that programme or brand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, " If you wish to change how we use your personal information, including exercising your right to be forgotten or have your personal information destroyed or deleted, please see section: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " \"What are your legal rights in relation to the personal information we hold about you?\" and \"How can you exercise your legal rights and change how we use your personal information?\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "What is our Legal basis for using your Personal Information?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Seemesave.com will only process your personal information where we have a legal basis to do so. The legal basis will depend on the reason or reasons that seemesave.com has collected and needs to use your information. Under South African data protection laws in almost all cases the legal basis will be: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Because we need to use your personal information so that we can process order and otherwise perform the contract we have with you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Because it is in seemesave.com's legitimate interests to use your personal information to operate and improve our business. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " Because seemesave.com needs to use your personal information to comply with a legal obligation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "To protect the legitimate or vital interests of you or another person.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " Because you have consented to seemesave.com using your personal information for a particular purpose. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "How long do we keep Personal Information?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " We will keep your information for as long as we need it for the purpose it is being processed for. For example, where you place an order with us, we will keep the information related to your order, so we can fulfil the order you have placed. After that, we will keep the information for a period which enables us to handle or respond to any complaints, queries or concerns relating to the order. The information may also be retained so that we can continue to improve your experience with us and to ensure that you receive any loyalty rewards which are due to you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " We will actively review the information we hold and delete it securely, or in some cases anonymise it, when there is no longer a legal, business or customer need for it to be retained. If you stop interacting with us as a customer, we will remove or anonymise your information after 7 years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Completion of a Contract with you:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " It will be necessary for seemesave.com to use your personal information to complete an order you have made with us. For example, we will need to use information such as your contact details and payment information, to provide you with the products that you have requested and paid for. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "Legitimate Interests:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " seemesave.com has a legitimate business interest to use the personal information we collect to offer an effective service and carry out our business. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " Compliance with Legal Obligations: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " There are situations where seemesave.com is subject to a legal obligation and needs to use your personal information to comply with those obligations, including cases where we are required to share your personal information with regulators. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "To Protect the Legitimate or Vital Interest of You or Another Person:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " There are situations where we may need to use your personal information to protect the vital interests of you or another person. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Consent:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " We may collect and use your personal information where you have given your specific consent to us doing so. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " However, if you withdraw your full consent, in some circumstances, and subject to applicable law, we may not be able to provide all or parts of the products or services you have requested from us and you will not be able to cancel your order or obtain a refund of any charges you have paid. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Who do we transfer to, disclose or share your Personal Information with?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Your personal information may be shared within our group with entities or brands Suppliers and all legitimate business partners. We share information with them, so they can assist us in providing products and services to you and to understand more about your requirements. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " We may also disclose your personal information (subject to applicable law) to the following third parties for the purpose described here: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Service providers needed to deliver the products and services you have asked for.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " Credit and charge card companies, credit reference agencies and anti-fraud screening service providers to process payments and (where necessar y) to carry out fraud-screening. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " In response to a valid, legal request from government or a law enforcement agency, such as a customs and immigration authority. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " Third party Suppliers we use to provide products and services that involve data processing, for example, to carry out marketing initiatives or run customer surveys on our behalf. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, " Third parties, such as law firms and law courts, to enforce or apply any contract with you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](276, " Third parties, such as the police and regulatory authorities, to protect our rights, property, or the safety of our customers, staff and assets. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " We may provide usage information (but not your personal details) to other websites so that they know that you have visited our websites. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " We may provide usage information including your personal details if we have your consent, to marketing agencies to deliver online advertising on websites or social networks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " Online or social media platforms, such as Google (Adwords, Youtube etc), Instagram, Twitter and Facebook, in order to facilitate target segmentation with online advertising. Should you no longer wish to be targeted, you can opt out through the preference settings on the respective platforms. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " If necessary to comply with a legal or regulatory obligation in any jurisdiction, including where that obligation arises because of a voluntary act or decision by us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " If we are reorganised or sold to another organisation, we may transfer any personal information we hold about you to that organisation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Where appropriate, before disclosing personal information to a third party, we contractually require the third party (such as SeemeSave\u2019s suppliers and vendors) to take adequate precautions to protect that data and to comply with applicable law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "What Countries will your Personal Information be sent to?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Your personal information may be sent to and stored by us and third parties in South Africa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " In the unlikely event where your personal information is transferred because we are using a service provider in a third country, we will implement safeguards so that your personal information continues to be protected to the standards set out in this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " If you would like more information on these safeguards, please contact the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Data Protection Officer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "What are your Legal Rights in relation to the Personal Information we hold about you?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Under data protection laws in South Africa, you have certain rights in relation to your personal information. Responses to exercise your rights will be provided within one month and generally there is no fee for making these requests. If your request is particularly complicated we may extend the deadline for responding to 3 months, but we will let you know if this is the case. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, " We will handle all requests in accordance with applicable law. However, depending on the right you wish to exercise, and the nature of the personal information involved, there may be legal reasons why we cannot grant your request. Further explanation of those rights and the exceptions to them are set out below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Details of how to exercise your rights are set out in the section below \"How can you exercise your legal rights and change how we use your data?\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Your rights include the following:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, " You may request us to stop sending you direct marketing. To see how to change your permission to receive direct marketing please reach us on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "hello@seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, " If you do so, we will no longer be able to send you direct marketing communications. However, if you subsequently order with us, we will need to send you communications about the products or services you have booked. These communications will help you get the most from the products and services we provide and may also contain options and other details about the products or services you will be using. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, " You may request us to stop using your personal information where we are doing so under legitimate interests (see the section \"What is our legal basis for using your personal information\" for examples of when that applies) unless it is needed for dealing with legal claims or we have other compelling legitimate reasons that override your rights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, " Also see \"Who do we transfer, disclose or share your information with\" in respect of online or social media platform settings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, " You may access the personal information we hold on you. There are some limited exceptions to this right, such as information relating to others who have not consented to the disclosure of their information and information which is legally privileged. Please see \"Accessing your personal information\" which can be located within \"How can you exercise your legal rights and change how we use your data?\" for more details. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, " You may ask us to correct your personal information (the \"right of rectification\") if that information is inaccurate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " You may ask for personal information which identifies you to be erased (or forgotten). To do this we will remove the information that identifies you from the data we hold in our active systems (\"anonymise\"). However, a separate and restricted copy of the identifying information will (subject to applicable law) be kept for 7 years to meet the obligations we have to law enforcement, national authorities and legal proceedings. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, " Considerations when you submit a request to have your personal information erased: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, " We may need to retain certain elements that relate to a contract between you and seemesave.com because we need it for our own legal and auditing purposes (for more information on the basis on which we process your personal information see the section \"What is our legal basis for using your personal information?\"). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, " A record of your request including the personal information you supplied will be retained in the application used to carry this out for 3 years. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, " In some circumstances it may mean we will not be able to provide all or parts of the products or services you have requested from us in relation to previous orders or retain any preferences you have previously shared with us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " We cannot erase your personal information if you are a member of one of our loyalty programmes or brands, as we require this information to deliver our contract with you. If you wish to proceed you will need to resign from such loyalty programme or membership. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " We cannot erase your personal information if we have identified that you either have an open complaint with us or we hold a previous case for you within the past 6 years. We are required to retain this information in case there is a need to re-open the complaint. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "How can you Exercise your Legal Rights and Change how we use your Data?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " If you wish to change how we use your personal information, please contact our Data Protection Officer on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "hello@seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, " We will ask for some information to identify you, which will only be used to process your request. We will verify your identity by email before processing your request. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " Accessing your Personal Information: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, " If you wish to receive a copy of your information, you can make your request in writing to the Data Protection Officer at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "hello@seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, " and (subject to such internal requirements by SeemeSave, prior to divulging same), include the following information with your request: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Your name and postal address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Details of your request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "A photocopy of your passport, photo identification or driving licence, so that we can verify your identity.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Your signature and the date of the request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](368, "If you are applying on behalf of another person then signed authority from the individual is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " Any details which may help us locate the information which is the subject of your request, for example: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "Order numbers and dates.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](375, "Loyalty programme name and number.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "If you wish the information to be provided to you in a machine-readable copy, please indicate that at the time of making your request.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "How will we inform you of Changes to this Privacy Policy?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "If we change this Privacy Policy, we will let you know about the changes by publishing the updated version on www.seemesave.com. We are committed to protecting and respecting your privacy and will continue to do so in any future changes we make to this Privacy Policy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " This Privacy Policy came into effect on 1 October 2018. This Privacy Policy applies to all information we process about you in connection with your relationship with us as a customer or potential customer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "How to get in touch with us and your Right to Complain:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](387, " If you have any questions or complaints about this Privacy Policy, or how we handle your personal information, please contact the Data Protection Officer on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "hello@seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, " We work hard to handle your information responsibly. We hope that we will be able to resolve any concerns you may have, but in the unlikely event that we do not, you have the right to contact the relevant data protection supervisory authority or regulator. For example, the Information Regulator in South Africa, once operational, can be contacted at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](396, "inforeg@justice.gov.za");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".privacy[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 10px;\n}\n\n.privacy[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5IHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wcml2YWN5IHVsIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy',
                templateUrl: './privacy.component.html',
                styleUrls: ['./privacy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/stores/details/details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/stores/details/details.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/dao.service */ "./src/app/services/dao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");









function DetailsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DetailsComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_ng_template_38_div_3_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.name);
} }
function DetailsComponent_ng_template_38_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DetailsComponent_ng_template_38_div_3_Template_select_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const product_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.selectCount($event.target.value, product_r6.products_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DetailsComponent_ng_template_38_div_3_option_19_Template, 2, 2, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_ng_template_38_div_3_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const product_r6 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.addToBag(product_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Add to list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r5.env.globalImageUrl, "", product_r6.thumbnail_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r6.brand, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r6.packsize, "", product_r6.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R", product_r6.sellingprice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.options);
} }
function DetailsComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DetailsComponent_ng_template_38_div_3_Template, 23, 8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.featuredProducts);
} }
let currentProducts = [];
class DetailsComponent {
    constructor(route, daoService, _fb, notifyService) {
        this.route = route;
        this.daoService = daoService;
        this._fb = _fb;
        this.notifyService = notifyService;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.isLoading = true;
        this.options = [
            { name: "1", value: 1 },
            { name: "2", value: 2 },
            { name: "3", value: 3 },
            { name: "4", value: 4 },
            { name: "5", value: 5 },
            { name: "6", value: 6 },
            { name: "7", value: 7 },
            { name: "8", value: 8 },
            { name: "9", value: 9 },
        ];
        this.guid = this.route.snapshot.params.guid;
    }
    ngOnInit() {
        this.isLoading = true;
        this.retrieveStoreDetails(this.guid);
        this.retrievePromotionProducts();
    }
    retrieveStoreDetails(guid) {
        this.daoService.getStorePromotionsByStoreID(guid).subscribe((data) => {
            console.log("------ this is teh store detail -----");
            if (data.success) {
                this.storeData = data['data'];
            }
        }, (error) => {
            console.log(error);
        });
    }
    retrievePromotionProducts() {
        this.daoService.getPromotionProductsByID(this.guid).subscribe((data) => {
            console.log("----- this is the promotion products -----");
            let result = JSON.parse(data);
            this.featuredProducts = result[0];
            if (this.featuredProducts.length > 0) {
                this.featuredProducts.map((d) => {
                    d['count'] = 1;
                });
            }
            console.log(this.featuredProducts);
            this.isLoading = false;
        }, (error) => {
            console.log(error);
            this.isLoading = false;
        });
    }
    // change count of product 
    selectCount(count, product_id) {
        this.featuredProducts.find(item => item.products_id == product_id)['count'] = count;
    }
    // add to my bag
    addToBag(product) {
        this.notifyService.showSuccess("The product was added to your shoppinglist.", "SeeMeSave.com");
        let data = localStorage.getItem('my_bag');
        let mybag = [];
        if (data != null && data != '' && data != 'null') {
            mybag = JSON.parse(data);
        }
        let is_exist = false;
        for (let i = 0; i < mybag.length; i++) {
            if (mybag[i].products_id == product.products_id) {
                mybag[i].count = mybag[i].count + product.count;
                is_exist = true;
                break;
            }
        }
        if (!is_exist)
            mybag.push(product);
        localStorage.setItem('my_bag', JSON.stringify(mybag));
    }
    showToasterSuccess() {
        this.notifyService.showSuccess("The product was added to your shoppinglist !!", "SeeMeSave.com");
    }
    showToasterError() {
        this.notifyService.showError("Something is wrong", "ItSolutionStuff.com");
    }
    showToasterInfo() {
        this.notifyService.showInfo("This is info", "ItSolutionStuff.com");
    }
    showToasterWarning() {
        this.notifyService.showWarning("This is warning", "ItSolutionStuff.com");
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_3__["DaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["store-details"]], decls: 40, vars: 3, consts: [[1, "main-section"], [1, "container"], [1, "row"], [1, "col-sm-4"], [1, "store-title"], [1, "store-name"], [1, "col-sm-5"], [1, "date-info"], [1, "store-detail"], [1, "valid-date"], [1, "margin-0"], [1, "status"], [1, "col-sm-3"], [1, "day-detail"], [1, "date-counter"], [1, "date-description"], [1, "description"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["loading", ""], ["block", ""], [1, "loading-part", "text-center"], ["src", "./assets/images/loading.gif"], [1, "products"], ["class", "col-md-4 col-sm-4", 4, "ngFor", "ngForOf"], [1, "col-md-4", "col-sm-4"], [1, "product-card"], [1, "products-information"], [1, "products-mg"], [3, "src"], [1, "products-detail"], [1, "name"], [1, "product-title"], [1, "unit"], [1, "product-status"], [1, "product-price"], [1, "add-lists"], [1, "selection-part", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "add-action", 3, "click"], [3, "value"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Black Friday Special");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Vendor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cosmetic Connection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Valid from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "03 Dec 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "until ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "03 Dec 20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "DAYS AGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Add products to your shopping list which you can email, sms or whatsapp to your mobile device.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DetailsComponent_div_35_Template, 1, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DetailsComponent_ng_template_36_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DetailsComponent_ng_template_38_Template, 4, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_7__["LazyImgDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["section[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ddd;\n  border-top: 2px solid #ddd;\n}\n\n.store-title[_ngcontent-%COMP%] {\n  font-weight: 1000;\n}\n\n.store-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n  span-font-size: 20px;\n  span-font-weight: 600;\n}\n\n.margin-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.date-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.date-info[_ngcontent-%COMP%]   .store-detail[_ngcontent-%COMP%] {\n  display: inline;\n  width: 70%;\n}\n\n.date-info[_ngcontent-%COMP%]   .store-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  text-align: bottom;\n}\n\n.date-info[_ngcontent-%COMP%]   .store-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 1000;\n}\n\n.date-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  display: inline;\n  background-color: #7AC29A;\n  border-radius: 35%;\n  font-size: 22px;\n  padding: 15px;\n  font-weight: 1000;\n  color: white;\n  margin-left: 30px;\n}\n\n.day-detail[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.day-detail[_ngcontent-%COMP%]   .date-counter[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ab3d3d;\n  font-weight: 4000;\n}\n\n.day-detail[_ngcontent-%COMP%]   .date-description[_ngcontent-%COMP%] {\n  font-weight: 20px;\n}\n\n.valid-date[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  font-size: 26px !important;\n  font-weight: bolder !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  background-color: #bf964c;\n  padding: 10px 20px;\n  color: white;\n  text-align: center;\n}\n\n.loading-part[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.loading-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  height: 230px;\n  border-radius: 10px;\n  box-shadow: 3px 3px 7px 5px grey;\n  margin: 15px 0;\n  transition: all 0.2s ease-in-out;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px;\n  align-items: center;\n  margin-bottom: 0;\n  justify-content: center;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-mg[_ngcontent-%COMP%] {\n  display: inline;\n  width: 30%;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border: 2px solid lightgreen;\n  height: 140px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-mg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  width: 100%;\n  height: 80%;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%] {\n  display: inline;\n  width: 70%;\n  padding: 10px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: red;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 27px;\n  font-weight: 900;\n  color: red;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.add-lists[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px;\n  align-items: center;\n}\n\n.add-lists[_ngcontent-%COMP%]   .selection-part[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.add-lists[_ngcontent-%COMP%]   .add-action[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: 15px;\n  font-weight: 600;\n  color: white;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  background-color: yellowgreen;\n  width: 120px;\n  height: 35px;\n  padding-top: 6px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-lists[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: calc(100% - 120px);\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n  border: 1px solid gray;\n  border-right: none;\n  height: 35px;\n}\n\n@media screen and (max-width: 768px) {\n  .loading-part[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .loading-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70px;\n    height: 70px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3Jlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKOztBQUNBO0VBQ0ksNkJBQUE7RUFFQSwwQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBRUksb0JBQUE7RUFDQSxxQkFBQTtBQUVSOztBQUNBO0VBQ0ksU0FBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBRkk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUlSOztBQUhRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLWjs7QUFKWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQU1oQjs7QUFGSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlSOztBQURBO0VBQ0ksa0JBQUE7QUFJSjs7QUFISTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFLUjs7QUFISTtFQUNJLGlCQUFBO0FBS1I7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUFLSjs7QUFIQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFOSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBUVI7O0FBTEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQU9KOztBQU5JO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFRUjs7QUFQUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQVNaOztBQVJZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBVWhCOztBQVBRO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBU1o7O0FBUlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBVWhCOztBQVRnQjtFQUNJLGVBQUE7QUFXcEI7O0FBUlk7RUFDSSxlQUFBO0FBVWhCOztBQVJZO0VBQ0ksZUFBQTtBQVVoQjs7QUFSWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFVaEI7O0FBUlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBVWhCOztBQVJZO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBVWhCOztBQU5JO0VBQ0kscUJBQUE7QUFRUjs7QUFMQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFQSTtFQUNJLGVBQUE7QUFTUjs7QUFQSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVNSOztBQVBJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBU1I7O0FBTEE7RUFDSTtJQUNJLGFBQUE7RUFRTjtFQVBNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUFTVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3Jlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5tYWluLXNlY3Rpb257XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgI2RkZDtcblxuICAgIGJvcmRlci10b3A6MnB4IHNvbGlkICNkZGQ7XG59XG4uc3RvcmUtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuLnN0b3JlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBzcGFuOiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG4ubWFyZ2luLTAge1xuICAgIG1hcmdpbjogMDtcbn1cbi5kYXRlLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuc3RvcmUtZGV0YWlsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBkaXYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogYm90dG9tO1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zdGF0dXMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3QUMyOUE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM1JTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICB9XG59XG4uZGF5LWRldGFpbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5kYXRlLWNvdW50ZXIge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGNvbG9yOiAjYWIzZDNkO1xuICAgICAgICBmb250LXdlaWdodDogNDAwMDtcbiAgICB9XG4gICAgLmRhdGUtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXdlaWdodDogMjBweDtcbiAgICB9XG59XG4udmFsaWQtZGF0ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlciAhaW1wb3J0YW50O1xufVxuLmRlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNiZjk2NGM7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9hZGluZy1wYXJ0IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG59XG4ucHJvZHVjdC1jYXJke1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvLyBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IDVweCBncmV5O1xuICAgIG1hcmdpbjogMTVweCAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLnByb2R1Y3RzLWluZm9ybWF0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICAucHJvZHVjdHMtbWcge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JlZW47XG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnByb2R1Y3RzLWRldGFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudW5pdCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3Qtc3RhdHVzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByb2R1Y3QtcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZHVjdC10aXRsZSB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxufVxuLmFkZC1saXN0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuc2VsZWN0aW9uLXBhcnQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgfVxuICAgIC5hZGQtYWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgc2VsZWN0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sb2FkaW5nLXBhcnQge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'store-details',
                templateUrl: './details.component.html',
                styleUrls: ['./details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_3__["DaoService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/stores/stores.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/home/stores/stores.component.ts ***!
  \************************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/dao.service */ "./src/app/services/dao.service.ts");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../layout/panel/panel.component */ "./src/app/components/layout/panel/panel.component.ts");









function StoresComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function StoresComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StoresComponent_ng_template_27_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx_r6.env.globalImageUrl, "", product_r7.thumbnail_image == null ? product_r7.media == null ? product_r7.logo : product_r7.media : product_r7.thumbnail_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r7.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", product_r7.packsize, "", product_r7.unit, "");
} }
function StoresComponent_ng_template_27_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresComponent_ng_template_27_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.cancelSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StoresComponent_ng_template_27_div_0_div_7_Template, 15, 7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " There is no prodcut. Please search another. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r5.searchResults.length > 0 ? "visible" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.searchResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r5.searchResults.length == 0 ? "visible" : "hidden");
} }
function StoresComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoresComponent_ng_template_27_div_0_Template, 11, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hot Deals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-panel", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-panel", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Store Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "svg", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "path", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "fieldset", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "textarea", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-panel", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx_r4.isSearch ? "hidden" : "visible")("height", ctx_r4.isSearch ? "10px" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx_r4.promotionProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx_r4.featuredProducts);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx_r4.stores);
} }
class StoresComponent {
    constructor(daoService, notifyService) {
        this.daoService = daoService;
        this.notifyService = notifyService;
        this.isSearch = false;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        if (localStorage.getItem('temp-address')) {
            console.log(localStorage.getItem('temp-address'));
            let address_list = JSON.parse(localStorage.getItem('temp-address'));
            if (address_list["address_components"].length > 0) {
                this.city = address_list['address_components'][0]['long_name'];
                console.log("this is the user location");
            }
        }
    }
    ngOnInit() {
        this.isLoading = true;
        this.isSearch = false;
        this.searchStores();
        this.retrieveNewToMarket();
        this.retrieveFeaturedProducts();
        this.retrievePromotion();
        $(".btn-shopping-list").css("display", "inline-block");
    }
    retrievePromotion() {
        this.daoService.getNewToMarketProducts().subscribe((data) => {
            console.log("----- this is the getting promotion products -----");
            let result = JSON.parse(data);
            this.promotionProducts = result[0];
            if (this.promotionProducts.length > 300)
                this.promotionProducts = this.promotionProducts.slice(0, 300);
            console.log(this.promotionProducts);
        }, (error) => {
            console.log(error);
        });
    }
    retrieveFeaturedProducts() {
        this.daoService.getFeaturedProducts().subscribe((data) => {
            console.log("----- this is the getting featured products -----");
            let result = JSON.parse(data);
            this.featuredProducts = result[0];
            console.log(this.featuredProducts);
            this.isLoading = false;
        }, (error) => {
            console.log(error);
        });
    }
    retrieveNewToMarket() {
        this.daoService.getNewToMarket().subscribe((data) => {
            if (data.success) {
                this.newProducts = data['data'];
            }
        }, (error) => {
            console.log(error);
        });
    }
    retrieveStores(lng, lat, radius) {
        this.daoService.getNearestStores('South Africa', this.city).subscribe((data) => {
            console.log("--- getting nearest city stores ----");
            // console.log(JSON.parse(data))
            let result = JSON.parse(data);
            this.stores = result;
            console.log(this.stores);
        }, (error) => {
            console.log(error);
        });
    }
    searchStores() {
        let loc = localStorage.getItem('temp-geo');
        console.log("----- this is the location for getting searchstores ------");
        console.log(loc);
        if (loc) {
            let lat = JSON.parse(loc.toString()).lat, lng = JSON.parse(loc.toString()).lng, radius = 50;
            this.retrieveStores(lng, lat, radius);
        }
    }
    formatLabel(value) {
        return value;
    }
    getInputValue() {
        if (this.searchValue != null) {
            if (this.searchValue.length > 2)
                this.setSearchResult();
            else
                this.notifyService.showWarning("Please input the 3 more characters to serach product.", "SeeMeSave.com");
        }
        else {
            this.isSearch = false;
        }
    }
    onSearchChange(sv) {
        console.log(sv);
        this.searchValue = sv;
        if (this.searchValue != null && this.searchValue.length > 2) {
            this.isLoading = true;
            this.setSearchResult();
        }
        else {
            this.isSearch = false;
        }
    }
    setSearchResult() {
        this.isSearch = true;
        this.searchResults = [];
        let rr = [];
        rr.push(...this.featuredProducts);
        rr.push(...this.promotionProducts);
        rr.push(...this.stores);
        if (rr.length > 0) {
            rr.map((d) => {
                if ((d.brand != null && d.brand != "" && d.brand.toString().toLowerCase().includes(this.searchValue.toLocaleLowerCase())) || (d.name != null && d.name != "" && d.name.toString().toLowerCase().includes(this.searchValue.toLocaleLowerCase()))) {
                    this.searchResults.push(d);
                }
            });
        }
        this.isLoading = false;
    }
    cancelSearch() {
        this.isLoading = true;
        console.log("--- cancel serach ----");
        // this.searchResults = []
        this.isSearch = false;
        this.searchValue = null;
        this.isLoading = false;
    }
}
StoresComponent.ɵfac = function StoresComponent_Factory(t) { return new (t || StoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"])); };
StoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoresComponent, selectors: [["app-stores"]], decls: 29, vars: 4, consts: [[1, "for-location-search"], [1, "for-location-search-container"], [1, "for-location-search-content"], [1, "for-location-search-form"], [1, "search-form-header"], [1, "search-form-fields"], [1, "fa", "fa-search", "icon", "search-icon"], ["type", "text", "id", "txtLandingAddress", "name", "Search", "onfocus", "initAutocomplete()", "placeholder", "Enter your address", 1, "form-control"], ["onclick", "reverseGeocodeAddress(document.getElementById('txtLandingAddress').value)"], [1, "for-location-search", 2, "background-color", "white"], [2, "color", "black"], ["type", "text", "id", "txtProductSearch", "name", "ProductSearch", "placeholder", "Enter your search product", 1, "form-control", 3, "ngModel", "ngModelChange"], [2, "background-color", "#60A8DC", "color", "white", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["loadingPart", ""], ["mainPart", ""], [1, "loading-part", "text-center"], ["src", "./assets/images/loading.gif"], [4, "ngIf"], [1, "for-search-results"], [1, "for-search-results-container"], [1, "for-search-results-content"], [1, "outcome-container"], [1, "outcome-body"], [1, "new-market", "outcome-card"], [1, "new-market-header", "outcome-card-header"], [1, "new-market-body", "outcome-card-body"], ["ngClass", "hot-deals"], ["ngClass", "section-title"], ["ngClass", "new-products", "panelTitle", "New To Market", "panelClass", "new-products", 3, "panelData"], ["ngClass", "featured", "panelTitle", "Featured Products", "panelClass", "featured", 3, "panelData"], [1, "current-promotions", "outcome-card"], ["id", "featured-products", 1, "current-promotions-body", "outcome-card-body"], [1, "for-stores-container"], ["ngClass", "stores-container"], [1, "ratings-content"], [1, "for-rating"], [1, "ratings-header"], [1, "ratings-body"], [1, "ratings-stars"], ["onclick", "setRating(event, 1)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                    16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                      15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                      6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                      0l2.184 4.327\n                                      4.898.696c.441.062.612.636.283.95l-3.523\n                                      3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                      13.187l-4.389 2.256z"], ["onclick", "setRating(event, 2)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                      16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                        15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                        6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                        0l2.184 4.327\n                                        4.898.696c.441.062.612.636.283.95l-3.523\n                                        3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                        13.187l-4.389 2.256z"], ["onclick", "setRating(event, 3)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                        16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                          15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                          6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                          0l2.184 4.327\n                                          4.898.696c.441.062.612.636.283.95l-3.523\n                                          3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                          13.187l-4.389 2.256z"], ["onclick", "setRating(event, 4)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                          16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                            15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                            6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                            0l2.184 4.327\n                                            4.898.696c.441.062.612.636.283.95l-3.523\n                                            3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                            13.187l-4.389 2.256z"], ["onclick", "setRating(event ,5)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                            16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                              15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                              6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                              0l2.184 4.327\n                                              4.898.696c.441.062.612.636.283.95l-3.523\n                                              3.356.83\n                                              4.73c.078.443-.36.79-.746.592L8\n                                              13.187l-4.389 2.256z"], [1, "review"], [1, "form-group"], ["placeholder", "Add a review", "id", "review", 1, "form-control"], [1, "ratings-footer"], ["onclick", "saveRatings()", 1, "btn-save-rating"], ["onclick", "closeRating()"], ["panelTitle", "Current Promotions", "panelClass", "stores", 3, "panelData"], [1, "container", 2, "height", "40px"], [1, "btn", "btn-primary", "btn-sm", "float-right", 3, "click"], [1, "container"], [1, "row"], ["class", "col-md-3 col-sm-4", 4, "ngFor", "ngForOf"], [1, "no-search-description"], [1, "col-md-3", "col-sm-4"], [1, "product-card"], [1, "products-information"], [1, "products-mg"], [3, "src"], [1, "products-detail"], [1, "name"], [1, "product-title"], [1, "unit"]], template: function StoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Find promotions and hot deals in your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Find products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StoresComponent_Template_input_ngModelChange_21_listener($event) { return ctx.searchValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoresComponent_Template_button_click_22_listener() { return ctx.getInputValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, StoresComponent_div_24_Template, 1, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, StoresComponent_ng_template_25_Template, 2, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, StoresComponent_ng_template_27_Template, 50, 8, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".search-form-fields[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 40px;\n  padding-left: 30px;\n  border-top-left-radius: 6px !important;\n  border-bottom-left-radius: 6px !important;\n}\n\n.search-form-fields[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 30%;\n  background-color: #f7e843;\n  font-size: 17px;\n  font-weight: bold;\n  height: 40px;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  box-shadow: none;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #60A8DC;\n}\n\n.search-form-fields[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main-section[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #ddd;\n  border-top: 2px solid #ddd;\n}\n\n.store-title[_ngcontent-%COMP%] {\n  font-weight: 1000;\n}\n\n.store-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: gray;\n  span-font-size: 20px;\n  span-font-weight: 600;\n}\n\n.margin-0[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.date-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.date-info[_ngcontent-%COMP%]   .store-detail[_ngcontent-%COMP%] {\n  display: inline;\n  width: 70%;\n}\n\n.date-info[_ngcontent-%COMP%]   .store-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n  text-align: bottom;\n}\n\n.date-info[_ngcontent-%COMP%]   .store-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 1000;\n}\n\n.date-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  display: inline;\n  background-color: #7AC29A;\n  border-radius: 35%;\n  font-size: 22px;\n  padding: 15px;\n  font-weight: 1000;\n  color: white;\n  margin-left: 30px;\n}\n\n.day-detail[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.day-detail[_ngcontent-%COMP%]   .date-counter[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #ab3d3d;\n  font-weight: 4000;\n}\n\n.day-detail[_ngcontent-%COMP%]   .date-description[_ngcontent-%COMP%] {\n  font-weight: 20px;\n}\n\n.valid-date[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  font-size: 26px !important;\n  font-weight: bolder !important;\n}\n\n.description[_ngcontent-%COMP%] {\n  background-color: #bf964c;\n  padding: 10px 20px;\n  color: white;\n  text-align: center;\n}\n\n.loading-part[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.loading-part[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n.no-search-description[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n\n.product-card[_ngcontent-%COMP%] {\n  height: 160px;\n  border-radius: 10px;\n  border: 2px solid gray;\n  margin: 5px 0;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px;\n  align-items: center;\n  margin-bottom: 0;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-mg[_ngcontent-%COMP%] {\n  display: inline;\n  width: 30%;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-mg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%] {\n  display: inline;\n  width: 70%;\n  padding: 10px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 900;\n  color: red;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 27px;\n  font-weight: 900;\n  color: red;\n}\n\n.product-card[_ngcontent-%COMP%]   .products-information[_ngcontent-%COMP%]   .products-detail[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3Jlcy9zdG9yZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQWdCLHlDQUFBO0VBQ1osY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FBR2hCOztBQUxBO0VBQWdCLHlDQUFBO0VBQ1osY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FBR2hCOztBQUxBO0VBQWdCLHlDQUFBO0VBQ1osY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FBR2hCOztBQUxBO0VBQWdCLHlDQUFBO0VBQ1osY0FBQTtFQUNBLFVBQUE7RUFBWSxZQUFBO0FBR2hCOztBQUNFO0VBQXlCLDRCQUFBO0VBQ3ZCLGNBQUE7QUFHSjs7QUFDRTtFQUEwQixtQkFBQTtFQUN4QixjQUFBO0FBR0o7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFHQTtFQUNFLDZCQUFBO0VBRUEsMEJBQUE7QUFERjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUVJLG9CQUFBO0VBQ0EscUJBQUE7QUFBTjs7QUFHQTtFQUNFLFNBQUE7QUFBRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUFFO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFFTjs7QUFETTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR1Y7O0FBRlU7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFJZDs7QUFBRTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVOOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFERTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHTjs7QUFERTtFQUNJLGlCQUFBO0FBR047O0FBQUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFGQTtFQUNFLGFBQUE7QUFLRjs7QUFKRTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBTU47O0FBSEE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQU9GOztBQU5FO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUU47O0FBUE07RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQVNWOztBQVJVO0VBQ0ksV0FBQTtBQVVkOztBQVBNO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBU1Y7O0FBUlU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBVWQ7O0FBVGM7RUFDSSxlQUFBO0FBV2xCOztBQVJVO0VBQ0ksZUFBQTtBQVVkOztBQVJVO0VBQ0ksZUFBQTtBQVVkOztBQVJVO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVVkOztBQVJVO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQVVkOztBQVJVO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBVWQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc3RvcmVzL3N0b3Jlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtZm9ybS1maWVsZHMgPiBpbnB1dCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLWZvcm0tZmllbGRzID4gYnV0dG9uIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2U4NDM7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgIGNvbG9yOiAgIzYwQThEQzs7XG4gICAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xuICAgIFxuICB9XG4gIFxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICBjb2xvcjogICM2MEE4REM7XG4gICAgXG4gIH1cbiAgXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICBjb2xvcjogICM2MEE4REM7XG4gICAgXG4gIH1cblxuLnNlYXJjaC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICM2MEE4REM7XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG5cbi5tYWluLXNlY3Rpb257XG4gIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICNkZGQ7XG5cbiAgYm9yZGVyLXRvcDoycHggc29saWQgI2RkZDtcbn1cbi5zdG9yZS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xufVxuLnN0b3JlLW5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiBncmF5O1xuICBzcGFuOiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG4ubWFyZ2luLTAge1xuICBtYXJnaW46IDA7XG59XG4uZGF0ZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLnN0b3JlLWRldGFpbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgZGl2IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGJvdHRvbTtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbiAgLnN0YXR1cyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0FDMjlBO1xuICAgICAgYm9yZGVyLXJhZGl1czogMzUlO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIH1cbn1cbi5kYXktZGV0YWlsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAuZGF0ZS1jb3VudGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIGNvbG9yOiAjYWIzZDNkO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDA7XG4gIH1cbiAgLmRhdGUtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwcHg7XG4gIH1cbn1cbi52YWxpZC1kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XG59XG4uZGVzY3JpcHRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNiZjk2NGM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9hZGluZy1wYXJ0IHtcbiAgcGFkZGluZzogMjBweDtcbiAgaW1nIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gIH1cbn1cbi5uby1zZWFyY2gtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZHVjdC1jYXJke1xuICBoZWlnaHQ6IDE2MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBtYXJnaW46IDVweCAwO1xuICAucHJvZHVjdHMtaW5mb3JtYXRpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgLnByb2R1Y3RzLW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICAucHJvZHVjdHMtZGV0YWlsIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudW5pdCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3Qtc3RhdHVzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtdGl0bGUge1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stores',
                templateUrl: './stores.component.html',
                styleUrls: ['./stores.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"] }, { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/terms/terms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/home/terms/terms.component.ts ***!
  \**********************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TermsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsComponent.ɵfac = function TermsComponent_Factory(t) { return new (t || TermsComponent)(); };
TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsComponent, selectors: [["app-terms"]], decls: 31, vars: 0, consts: [[1, "for-terms"], [1, "for-terms-container"], [1, "for-terms-content"], [1, "for-terms-header"], [1, "terms-section"], [1, "terms-container"], [1, "terms-content", "d-flex", "justify-content-center"], [1, "terms-and-conditions", 2, "width", "70%"], [1, "terms-card"], [1, "terms-header"], [1, "terms-body"]], template: function TermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Terms and Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Intellectual Property Right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Restrictions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 600px) {\n  .terms-and-conditions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90ZXJtcy90ZXJtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50ZXJtcy1hbmQtY29uZGl0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms',
                templateUrl: './terms.component.html',
                styleUrls: ['./terms.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/vendor-terms/vendor-terms.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/home/vendor-terms/vendor-terms.component.ts ***!
  \************************************************************************/
/*! exports provided: VendorTermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorTermsComponent", function() { return VendorTermsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class VendorTermsComponent {
    constructor() { }
    ngOnInit() {
    }
}
VendorTermsComponent.ɵfac = function VendorTermsComponent_Factory(t) { return new (t || VendorTermsComponent)(); };
VendorTermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VendorTermsComponent, selectors: [["app-vendor-terms"]], decls: 82, vars: 0, consts: [[1, "for-terms"], [1, "for-terms-container"], [1, "for-terms-content"], [1, "for-terms-header"], [1, "container"], [1, "terms-vendor"], ["href", "www.seemesave.com"], [2, "color", "#60A8DC"], [1, "dashed"]], template: function VendorTermsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "VENDOR TERMS AND CONDITIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "These terms and conditions are an electronic record in terms of the Electronic Communications and Transactions Act 25 of 2002. This electronic record does not require any physical or digital signatures. If you do not agree to these terms and conditions you will not be entitled to proceed any further on this page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "These terms and conditions are binding and enforceable against all vendors that access the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "www.seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " domain, in terms of section 11 of ECT Act.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " The domain name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "www.seemesave.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " (hereinafter referred to as \u201CPortal \") is owned by See Me Save (Pty) Ltd (\u201Cthe Company\u201D) and operates as an online platform for sale of the Products to the end customer (\u201CCustomers\u201D) and provides related services to the Vendors and to the Customers / users of the Portal on behalf of the Vendors. The Company shall permit the Vendor to use of the Portal for enabling promotion and advertisement of its Products. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "OBLIGATIONS OF THE VENDOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "The Vendor shall be obliged to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Establish the selling price of the Product as advertised on the online platform. Through the interface provided by the Company, the Vendor shall provide the Company with the information to be uploaded such as the product description, images, disclaimer, delivery timelines, price and such other details for the Products to be displayed and offered for sale through the said online platform. The Company shall manage the library of products (including the image and product descriptions). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Vendor shall ensure not to upload any description/image/text/graphic that is unlawful, illegal, objectionable, obscene, vulgar, opposed to public policy, prohibited or is in violation of intellectual property rights including but not limited to trademark and copyright of any third party. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Not to send any kind of promotional material or any material, which is, derogatory to and/or adverse to the interests financial or otherwise of the Company, to the Customer, either along with the Products supplied or in any manner whatsoever. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Not to do any act or deal in a Product, goods or services which are either banned or prohibited by law or violates any of the intellectual property rights of any party in respect of such Product. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " The Vendor declares that it has all rights and authorisations in respect of intellectual property rights of third parties and is authorised to sell/provide/licence such Products to the Customer. The copy of such authorization shall be provided on demand without failure and/or protest. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " The Vendor agrees to indemnify and keep indemnified the Company from all claims or losses (including attorney\u2019s fee for defending/prosecuting any case) that may arise against the Company due to any acts or omission on the part of the Vendor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " To ensure and not to provide any description, image, text or graphic which is unlawful, illegal, intimidating, obnoxious, objectionable, obscene, vulgar, opposed to public policy, prohibited by law or morality or is in violation of intellectual property rights including but not limited to trademark and copyright of any third party or of inaccurate, false, incorrect, misleading description or which is derogatory in nature. Further it will forward the product description and image only for the product which is offered for sale through the website of the Company. The Vendor agrees that in case there is violation of this covenant, it shall do and cause to be done all such acts as are necessary to prevent disrepute being caused to the Company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " To provide a full, correct, accurate and true description of the Product so as to enable the Customers to make an informed decision. The Vendor agrees not to provide any such description or information regarding the Product which amounts to misrepresentation to the end customer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " To be solely responsible for the quality, quantity, merchantability, guarantee, warranties in respect of the Products offered for sale through the online platform of the Company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " At all times have access to the Internet and its email account to check the status of approved Orders and ensure prompt deliveries within the time frames communicated to the Customer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " To raise an invoice as well as receipt of payment in the name of the Customer for an amount equivalent to the amount displayed as the retail price on the online platform to the Customer and paid by or charged to the Customer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Not to offer any Products for sale on the Online Store, which are prohibited for sale, dangerous, against the public policy, banned, unlawful, illegal or prohibited under South African law. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " To provide satisfactory proof about the ownership or licences of all the legal rights in the Products that are offered for sale on the Online Store if and when requested by the Company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " The Vendor shall at all time endeavor to protect and promote the interests of the Company and ensure that third parties rights including intellectual property rights are not infringed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " The Vendor shall at all times be responsible for compliance of all applicable laws and regulations including but not limited to Intellectual Property Rights, applicable tax laws (including, Value added tax), applicable South African National Standards, etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " To provide to the Company copies of any document required by the Company for the purposes of performance of its obligations within 48 (forty-eight) hours of receipt of a written notice from the Company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " To seek advance written approval from the Company, prior to release of any promotion or advertisement material, in so far as the same relates to services offered by the Company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "RIGHTS OF THE COMPANY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Vendor agrees and acknowledges that the Company shall at all times have the right to remove, block or delete any text, graphic, image(s) uploaded on the online platform by the Vendor without any prior notice to the Vendor in the event the said text, image, graphic is found to be in violation of any law or in breach of any of the terms of engagement between the Parties. In such an event, the Company reserves the right to forthwith remove or close the online platform of the Vendor, without any prior notice or liability to the Vendor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Appropriate disclaimers and terms of use shall be placed by the Company, as it deems fit and in its sole discretion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " At any time if the Company believes that the services are being utilized by the Vendor or its Customer in contravention of the terms and conditions of use of the Company, the Company shall have the right either at its sole discretion or upon the receipt of a request from the legal or statutory authorities or a court order to discontinue/terminate the said service(s) to the Customer, forthwith remove or block the online platform of the Vendor and furnish such details about the Vendor or its Customers upon a request received from any legal authority or under a Court order. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " The Company shall be entitled to use the Vendors Intellectual Property and shall have a royalty free irrevocable license in this regard for the purposes of providing the Services by the Company as contemplated hereunder. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " The Company shall own all rights in any intellectual property created by the Company under these Terms and Conditions, including material, designs, graphics created and / or developed by the Company. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " b. Subject to the provision contained herein, the Company owns and shall exclusively own all rights (including all intellectual property rights), title and interest in respect of the Portal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " PROTECTION OF PERSONAL INFORMATION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " The Vendor undertakes to protect such Customer information and shall comply in all material respects with all applicable laws in performing its obligations, including but not limited to the Protection of Personal Information Act No. 4 of 2013. It will at its own costs and at all times observe and comply with all laws, regulatory requirements, the conditions and directives of any government, regulatory body or competent authority and obtain and maintain all permits, authorisations and licences applicable or necessary for the performance of its obligations herein. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".terms-vendor[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 10px;\n}\n\n.terms-vendor[_ngcontent-%COMP%]   ul.dashed[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  list-style-type: none;\n}\n\n.terms-vendor[_ngcontent-%COMP%]   ul.dashed[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  text-indent: -5px;\n}\n\n.terms-vendor[_ngcontent-%COMP%]   ul.dashed[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  content: \"-\";\n  text-indent: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ZlbmRvci10ZXJtcy92ZW5kb3ItdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ZlbmRvci10ZXJtcy92ZW5kb3ItdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtdmVuZG9yIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRlcm1zLXZlbmRvciB1bC5kYXNoZWQge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4udGVybXMtdmVuZG9yIHVsLmRhc2hlZCA+IGxpIHtcbiAgICB0ZXh0LWluZGVudDogLTVweDtcbn1cblxuLnRlcm1zLXZlbmRvciB1bC5kYXNoZWQgPiBsaTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLVwiO1xuICAgIHRleHQtaW5kZW50OiAtNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorTermsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vendor-terms',
                templateUrl: './vendor-terms.component.html',
                styleUrls: ['./vendor-terms.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 66, vars: 0, consts: [[1, "container", "text-center"], [1, "row"], [1, "col-md-3"], ["loading", "lazy", "alt", "SeeMeSave Logo", "src", "./assets/svg/logo.svg", 1, "logo-image"], [1, "col-md-3", "footer-link-group"], [1, "text-center"], [1, "footer-link-list"], ["href", "/"], ["href", "/about"], ["href", "/contact"], ["href", "/account/login"], ["href", "/account/register"], ["_ngcontent-wcb-c126", "", 1, "fb-feed", "text-center"], ["_ngcontent-wcb-c126", "", "src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fseemesavesa%2F&tabs=timeline&height=200&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId", "loading", "lazy", "width", "100%", "height", "200", "scrolling", "no", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "border", "none", "overflow", "hidden"], ["_ngcontent-wcb-c126", "", "role", "img", "ngclass", "scroll-arrow", "aria-hidden", "true", "ng-reflect-ng-class", "scroll-arrow", 1, "mat-icon", "notranslate", "material-icons", "scroll-arrow", "mat-icon-no-color"], [1, "text-center", 2, "width", "100%"], [1, "seemesave_blue_button"], ["href", "/account/login", 1, "margin-left-per-1"], ["type", "text", "placeholder", "Email Address", "id", "subscribe_input"], ["id", "subscribe_button"], [1, "row", "download-block"], [1, "col-sm-6", "app-download"], ["loading", "lazy", "alt", "andoird Logo", "src", "./assets/images/google.png", 1, "logo-android"], ["loading", "lazy", "alt", "ios Logo", "src", "./assets/images/ios.png", 1, "logo-ios"], [1, "col-sm-6", "more-web-info"], [1, "web-email"], [1, "web-phone"], [1, "web-location"], [1, "footer-lower-content"], ["href", "/terms"], ["href", "/privacy"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "iframe", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "REGISTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "SUBSCRIBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " location_on");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "2020 \u00A9 SeeMeSave, Sniffing Out Savings | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Terms of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Privacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".seemesave_blue_button[_ngcontent-%COMP%] {\n  width: 49%;\n  padding: 7px 0;\n  text-align: center;\n  color: white;\n  font-weight: 800;\n  background-color: #60A8DC;\n  box-shadow: none;\n  border-radius: 5px;\n}\n\n#subscribe_button[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  text-align: center;\n  color: white;\n  font-weight: 800;\n  background-color: #60A8DC;\n  box-shadow: none;\n  width: 40%;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n#subscribe_input[_ngcontent-%COMP%] {\n  border: none;\n  height: 30px;\n  width: 60%;\n}\n\n.margin-left-per-1[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n.col-md-3[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  display: flex;\n}\n\nfooter[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  align-items: center;\n  margin: 0;\n}\n\n.footer-link-list[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.footer-lower-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.download-block[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  background-color: #60A8DC;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 160px;\n}\n\n.download-block[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .logo-android[_ngcontent-%COMP%] {\n  display: inline;\n  width: 200px;\n  cursor: pointer;\n}\n\n.download-block[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .logo-ios[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 20px;\n  width: 200px;\n  cursor: pointer;\n}\n\n.download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%] {\n  height: 160px;\n  margin-top: 10px;\n  background-color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%]   .web-email[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: inline;\n  background-color: white;\n  color: #60A8DC;\n  text-align: center;\n  padding-top: 22px;\n  cursor: pointer;\n}\n\n.download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%]   .web-phone[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: inline;\n  background-color: white;\n  color: #60A8DC;\n  text-align: center;\n  padding-top: 22px;\n  cursor: pointer;\n}\n\n.download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%]   .web-location[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: inline;\n  background-color: white;\n  color: #60A8DC;\n  text-align: center;\n  padding-top: 22px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 768px) {\n  .footer-link-list[_ngcontent-%COMP%] {\n    text-align: center;\n    display: inline;\n    padding: 5px 5px;\n  }\n\n  .footer-link-group[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 10px 0 !important;\n  }\n\n  .logo-image[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n\n  .download-block[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: #60A8DC;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 160px;\n  }\n  .download-block[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .logo-android[_ngcontent-%COMP%] {\n    display: inline;\n    width: 150px;\n  }\n  .download-block[_ngcontent-%COMP%]   .app-download[_ngcontent-%COMP%]   .logo-ios[_ngcontent-%COMP%] {\n    display: inline;\n    margin-left: 10px;\n    width: 150px;\n  }\n  .download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%] {\n    height: 160px;\n    margin-top: 10px;\n    background-color: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%]   .web-email[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    display: inline;\n    background-color: white;\n    color: #60A8DC;\n    text-align: center;\n    padding-top: 12px;\n  }\n  .download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%]   .web-phone[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    display: inline;\n    background-color: white;\n    color: #60A8DC;\n    text-align: center;\n    padding-top: 12px;\n  }\n  .download-block[_ngcontent-%COMP%]   .more-web-info[_ngcontent-%COMP%]   .web-location[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    display: inline;\n    background-color: white;\n    color: #60A8DC;\n    text-align: center;\n    padding-top: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFHSTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFBUjs7QUFDUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNaOztBQUVRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFBWjs7QUFJSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGUjs7QUFHUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFEWjs7QUFHUTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURaOztBQUdRO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRFo7O0FBUUE7RUFDSTtJQUVJLGtCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBTk47O0VBUUU7SUFDSSxXQUFBO0lBQ0EseUJBQUE7RUFMTjs7RUFPRTtJQUNJLFVBQUE7RUFKTjs7RUFPTTtJQUNJLGdCQUFBO0lBQ0EseUJBQUE7SUFDQSxhQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7RUFKVjtFQUtVO0lBQ0ksZUFBQTtJQUNBLFlBQUE7RUFIZDtFQU1VO0lBQ0ksZUFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQUpkO0VBUU07SUFDSSxhQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VBTlY7RUFPVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUxkO0VBT1U7SUFDSSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUxkO0VBT1U7SUFDSSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUxkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlZW1lc2F2ZV9ibHVlX2J1dHRvbiB7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBwYWRkaW5nOiA3cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwQThEQztcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI3N1YnNjcmliZV9idXR0b24ge1xuICAgIHBhZGRpbmc6IDdweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBOERDO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG5cbiNzdWJzY3JpYmVfaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuLm1hcmdpbi1sZWZ0LXBlci0xIHtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5jb2wtbWQtMyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuZm9vdGVyID4gLnJvdyB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5mb290ZXItbGluay1saXN0IHtcbiAgICBtYXJnaW46IDEwcHggMDsgXG59XG5cbi5mb290ZXItbG93ZXItY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZG93bmxvYWQtYmxvY2sge1xuICAgIC5hcHAtZG93bmxvYWQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBOERDO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAubG9nby1hbmRyb2lkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIC8vIGhlaWdodDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAubG9nby1pb3Mge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1vcmUtd2ViLWluZm8ge1xuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLndlYi1lbWFpbCB7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzYwQThEQztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC53ZWItcGhvbmUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzYwQThEQztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC53ZWItbG9jYXRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogIzYwQThEQztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMnB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5mb290ZXItbGluay1saXN0IHtcbiAgICAgICAgLy8gd2lkdGg6IDIwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHg7XG4gICAgfVxuICAgIC5mb290ZXItbGluay1ncm91cCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHggMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9nby1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgIC5kb3dubG9hZC1ibG9jayB7XG4gICAgICAgIC5hcHAtZG93bmxvYWQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MEE4REM7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICAgICAgLmxvZ28tYW5kcm9pZCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9nby1pb3Mge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICAgICAgLy8gaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tb3JlLXdlYi1pbmZvIHtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAud2ViLWVtYWlsIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjBBOERDO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53ZWItcGhvbmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2MEE4REM7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLndlYi1sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzYwQThEQztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _services_dao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/dao.service */ "./src/app/services/dao.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notification.service */ "./src/app/services/notification.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










const _c0 = ["menu"];
const _c1 = ["bag"];
const _c2 = ["header"];
function HeaderComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "help_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "FAQ's");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Terms & Conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.profile[0].first_name + ctx_r10.profile[0].last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.user_email);
} }
function HeaderComponent_div_3_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_3_div_28_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12._logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign Out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_3_div_2_Template, 27, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About SeeMeSave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Become a vendor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Help");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_div_3_div_28_Template, 3, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._isAuthenticated());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1._isAuthenticated());
} }
function HeaderComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function HeaderComponent_div_4_ng_template_6_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_4_ng_template_6_tr_12_Template_td_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const item_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.remove(item_r21.products_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", item_r21.description, " ", item_r21.packsize, "", item_r21.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r21.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R", (item_r21.count * item_r21.sellingprice).toFixed(2), "");
} }
function HeaderComponent_div_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_4_ng_template_6_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.myBagClear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_4_ng_template_6_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.sendEmail(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_4_ng_template_6_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.sendWhatsApp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "whatsapp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_div_4_ng_template_6_tr_12_Template, 10, 5, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Clear Shopping List");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R", ctx_r17.total_shopping_price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.shoppingList);
} }
function HeaderComponent_div_4_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The shopping bas is empty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Shopping Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_4_div_5_Template, 1, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_4_ng_template_6_Template, 16, 2, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HeaderComponent_div_4_ng_template_8_Template, 2, 0, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.shoppingList != null && ctx_r2.shoppingList.length > 0)("ngIfThen", _r16)("ngIfElse", _r18);
} }
function HeaderComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.toggleBag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.userLocation);
} }
function HeaderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.user_email);
} }
function HeaderComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.toggleBag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(authService, daoService, cookieService, router, _eref, notifyService, renderer) {
        this.authService = authService;
        this.daoService = daoService;
        this.cookieService = cookieService;
        this.router = router;
        this._eref = _eref;
        this.notifyService = notifyService;
        this.renderer = renderer;
        this.menuToggle = false;
        this.isMenu = false;
        this.isBag = false;
        this.userLocation = '';
        this.shoppingList = [];
        this.total_shopping_price = "0.0";
        if (localStorage.getItem('user_email')) {
            this.user_email = localStorage.getItem('user_email');
            console.log(this.user_email);
        }
        if (localStorage.getItem('currentUser')) {
            this.profile = JSON.parse(localStorage.getItem('currentUser'));
            console.log(this.profile);
            this.user_email = this.profile[0].email;
        }
        this.addressExists = cookieService.check('sms-address');
        // this.renderer.listen('window', 'click',(e:Event)=>{
        //   if(this.isBag && !this.bag.nativeElement.contains(e.target) && !this.header.nativeElement.contains(e.target)) {
        //       this.isBag=false;
        //   }
        //   if(this.isMenu && !this.menu.nativeElement.contains(e.target) && !this.header.nativeElement.contains(e.target)) {
        //     this.isMenu=false;
        //   }
        // });
    }
    ngOnInit() {
        let localAddress = localStorage.getItem('full-address');
        if (localAddress) {
            this.fullAddress = `<span>${localAddress}</span>`;
        }
        if (localStorage.getItem('temp-address')) {
            console.log(localStorage.getItem('temp-address'));
            let address_list = JSON.parse(localStorage.getItem('temp-address'));
            if (address_list["address_components"].length > 0) {
                this.userLocation = address_list['address_components'][0]['long_name'];
                console.log("this is the user location");
            }
        }
    }
    onClick(event) {
        if (!this.header.nativeElement.contains(event.target)) // or some similar check
         {
            this.isMenu = false;
            this.isBag = false;
            // if (this.shoppingList.length == 0) this.isBag = false
        }
    }
    onScrollEvent($event) {
        // console.log($event);
        // console.log("scrolling");
        this.isBag = false;
        this.isMenu = false;
    }
    _isAuthenticated() {
        return this.authService._isAuthenticated();
    }
    _logout() {
        this.authService._logout();
    }
    toggleMenu() {
        if (this.isMenu) {
            this.isMenu = false;
        }
        else {
            this.isMenu = true;
            this.isBag = false;
        }
    }
    toggleBag() {
        if (this.isBag) {
            this.isBag = false;
        }
        else {
            this.shoppingList = JSON.parse(localStorage.getItem('my_bag'));
            if (this.shoppingList != null && this.shoppingList.length > 0) {
                let total_price = 0.0;
                this.shoppingList.map((d) => {
                    total_price = total_price + parseFloat(d.sellingprice) * parseInt(d.count);
                });
                this.total_shopping_price = total_price.toFixed(2);
            }
            this.isBag = true;
            this.isMenu = false;
        }
    }
    // remove shopping list
    remove(products_id) {
        this.shoppingList = this.shoppingList.filter(item => item.products_id !== products_id);
        localStorage.setItem('my_bag', JSON.stringify(this.shoppingList));
        if (this.shoppingList.length == 0)
            this.isBag = false;
        else
            this.isBag = true;
    }
    // clear shopping lists
    myBagClear() {
        this.shoppingList = [];
        this.total_shopping_price = "0.0";
        localStorage.setItem('my_bag', null);
    }
    // send email
    sendEmail() {
        this.isBag = false;
        this.isMenu = false;
        let data = {
            "recipient": this.profile[0].email,
            "firstname": this.profile[0].first_name,
            "lastname": this.profile[0].last_name,
            "subject": "contact from seemesave.com",
            "body": this.bodyParse(0)
        };
        this.daoService.sendemail(data).subscribe((data) => {
            console.log("------ successfully sent -----");
            this.notifyService.showSuccess("The email was sent to your email", "SeeMeSave.com");
        }, (error) => {
            console.log(error);
            this.notifyService.showError("Something is wrong", "Error");
        });
    }
    // send email
    sendSMS() {
        this.isBag = false;
        this.isMenu = false;
        let data = {
            "number": "+278" + this.profile[0].phone,
            "body": this.bodyParse(2)
        };
        this.daoService.sendsms(data).subscribe((data) => {
            console.log("------ successfully sent -----");
            this.notifyService.showSuccess("The email was sent to your SMS", "SeeMeSave.com");
        }, (error) => {
            console.log(error);
            this.notifyService.showError("Something is wrong", "Error");
        });
    }
    // send email
    sendWhatsApp() {
        this.isBag = false;
        this.isMenu = false;
        let data = {
            "number": "+278" + this.profile[0].phone,
            "body": this.bodyParse(1)
        };
        this.daoService.sendWhatsApp(data).subscribe((data) => {
            this.notifyService.showSuccess("The email was sent to your WhatsApp", "SeeMeSave.com");
            console.log("------ successfully sent -----");
        }, (error) => {
            console.log(error);
            this.notifyService.showError("Something is wrong", "Error");
        });
    }
    /// getting body part for api
    bodyParse(index) {
        let result = "This is your shopping list: ";
        if (this.shoppingList != null && this.shoppingList.length > 0) {
            this.shoppingList.map((d) => {
                if (index == 0) {
                    result = result + "<ul><li>" + d.brand + "</li><li>" + d.description + "</li><li>" + d.count + "</li><li>" + (d.count * d.sellingprice).toFixed(2) + "</li></ul>";
                }
                else {
                    result = result + "\r" + +" -" + d.brand + " " + d.description + " " + d.count + " " + (d.count * d.sellingprice).toFixed(2) + " " + "\r";
                }
            });
        }
        return result;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bag = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
    } }, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onScrollEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 63, vars: 8, consts: [[1, "back-drop"], [1, "for-navigations"], ["header", ""], ["class", "menu", 4, "ngIf"], ["class", "bag", 4, "ngIf"], [1, "for-navi-content"], [1, "for-navi-content-container"], [1, "navi-content"], [1, "navi-lower-content"], [1, "app-logo"], ["routerLink", "/"], ["loading", "lazy", "alt", "SeeMeSave Logo", "src", "./assets/svg/logo.svg", 1, "logo-image"], [1, "app-mobile-menu"], ["class", "btn btn-sm btn-success", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "margin-left-15", 3, "click"], [1, "app-navigation"], ["class", "info-tag", 4, "ngIf"], ["class", "btn btn-sm btn-primary", 4, "ngIf"], ["class", "btn btn-sm btn-primary margin-left-15", 4, "ngIf"], ["class", "btn btn-sm btn-success margin-left-15", 3, "click", 4, "ngIf"], [1, "for-shopping-list-container"], [1, "for-shopping-list-content"], [1, "for-shopping-list-header"], [1, "for-shopping-list-body"], [1, "list-body-options"], [1, "list-body-options-links"], [1, "form-group"], [1, "shopping-list-table"], [1, "total-price"], ["onclick", "closeShoppingModal()"], ["src", "../../../../assets/icons/email.png", "width", "20"], ["src", "../../../../assets/icons/sms.png", "width", "20"], ["href", "https://wa.me/0739204376"], ["src", "../../../../assets/icons/whatsapp.png", "width", "20"], ["id", "for-feedback", 1, "for-feedback"], [1, "for-feedback-content"], ["onclick", "closeFeedbackModal()"], [1, "menu"], ["menu", ""], [4, "ngIf"], [1, "menu-list"], [1, "detail-board"], ["href", "/"], [1, "normal-detail"], ["href", "/about"], ["href", "/careers"], ["href", "/account/become-a-vendor"], ["href", "/help"], ["class", "menu-list", 4, "ngIf"], [1, "icon-board"], [1, "bold-detail"], [1, "small-detail"], ["href", "/faq"], ["href", "/terms"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "bag"], ["bag", ""], [1, "bag_board"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""], [3, "click"], [1, "total_bag_price"], [1, "table_board"], [1, "table", "table-striped", "table-responsive"], [4, "ngFor", "ngForOf"], [1, "float-clear"], [1, "btn", "btn-sm", "btn-primary"], [1, "width-30", 3, "click"], [1, "remove_icon"], [1, "width-200"], [1, "width-60"], [1, "width-70"], [1, "empty_description"], [1, "btn", "btn-sm", "btn-success", 3, "click"], [1, "info-tag"], [1, "pen-icon"], ["href", "/account/register"], [1, "btn", "btn-sm", "btn-primary", "margin-left-15"], ["href", "/account/login"], [1, "btn", "btn-sm", "btn-success", "margin-left-15", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_3_Template, 29, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 10, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_button_13_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_14_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "dehaze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_div_18_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 5, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_button_20_Template, 3, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_button_21_Template, 3, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_button_22_Template, 3, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_23_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "dehaze");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "table", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "R0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "fieldset", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "fieldset", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userLocation != "" && ctx.userLocation != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated() && ctx.userLocation != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isAuthenticated());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_7__["LazyImgDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".send-icon[_ngcontent-%COMP%] {\n  padding: 0.2em;\n  background-color: transparent;\n  border: solid;\n  border-width: 0.5px;\n  border-color: #9DCE74;\n}\n\n.send-icon[_ngcontent-%COMP%]:hover {\n  border-color: #60A8DC;\n}\n\n.app-navigation[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.remove_icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n}\n\n#account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  color: #60A8DC;\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #60A8DC;\n  color: white;\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  color: #60A8DC;\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #60A8DC;\n  color: white;\n  border-color: #60A8DC;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  width: 47px;\n  height: 34px;\n  background-color: #60A8DC;\n  border: none;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  height: 2px;\n  background-color: #fff;\n  margin-bottom: 5px;\n}\n\n.for-navigations[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.menu[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: fixed;\n  top: 75px;\n  right: 30px;\n  width: 260px;\n  background-color: #92b386;\n  padding: 5px;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: white;\n  border-bottom: 1px solid black;\n  padding: 5px 7px;\n  display: flex;\n  align-items: center;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .icon-board[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  background-color: #60A8DC;\n  width: 30px;\n  height: 30px;\n  display: inline;\n  padding-top: 3px;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .detail-board[_ngcontent-%COMP%] {\n  display: inline;\n  margin-left: 30px;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .detail-board[_ngcontent-%COMP%]   .bold-detail[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  color: black;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .detail-board[_ngcontent-%COMP%]   .small-detail[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]   .detail-board[_ngcontent-%COMP%]   .normal-detail[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: black;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-list[_ngcontent-%COMP%]:hover {\n  background-color: gainsboro;\n}\n\n.bag[_ngcontent-%COMP%] {\n  z-index: 10;\n  position: fixed;\n  top: 75px;\n  right: 30px;\n  width: 320px;\n  max-height: 400px;\n  background-color: #92b386;\n  padding: 5px;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 10px;\n  max-height: 380px;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  overflow: auto;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: black;\n  padding: 3px 0;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .width-30[_ngcontent-%COMP%] {\n  width: 30px;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .width-200[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .width-60[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .width-70[_ngcontent-%COMP%] {\n  width: 70px;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 12px;\n  color: #60A8DC;\n  text-decoration: underline;\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   .total_bag_price[_ngcontent-%COMP%] {\n  float: right;\n  text-decoration: none;\n  color: black;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.bag[_ngcontent-%COMP%]   .bag_board[_ngcontent-%COMP%]   .float-clear[_ngcontent-%COMP%] {\n  float: unset;\n  margin-top: 20px;\n}\n\n.margin-left-15[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  align-items: center;\n  padding-top: 8px !important;\n  color: white;\n}\n\nbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 16px;\n  font-weight: 800;\n}\n\n.info-tag[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 300px;\n  min-width: 100px;\n  text-overflow: ellipsis;\n  border-radius: 6px;\n  padding: 11px;\n  padding-right: 50px;\n  color: white;\n  background-color: #60A8DC;\n  display: inline;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5px;\n  font-size: 15px;\n}\n\n.info-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7px;\n  right: 10px;\n}\n\n.empty_description[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n}\n\n@media screen and (max-width: 1024px) {\n  .menu[_ngcontent-%COMP%] {\n    top: 70px;\n    right: 20px;\n  }\n\n  .bag[_ngcontent-%COMP%] {\n    top: 70px;\n    right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBS0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUlFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUlFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFESjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFFQSxtQkFBQTtBQURKOztBQUVJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQU47O0FBQ007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ007RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFDUjs7QUFHRTtFQUNFLDJCQUFBO0FBREo7O0FBS0E7RUFDRSxXQUFBO0VBRUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBSEY7O0FBSUU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUZKOztBQUdJO0VBQ0UsWUFBQTtBQUROOztBQU9JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBTE47O0FBTU07RUFDRSxtQkFBQTtBQUpSOztBQU1NO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBSlI7O0FBUU07RUFDRSxXQUFBO0FBTlI7O0FBUU07RUFDRSxZQUFBO0FBTlI7O0FBUU07RUFDRSxXQUFBO0FBTlI7O0FBUU07RUFDRSxXQUFBO0FBTlI7O0FBU0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVBOOztBQVNJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBOOztBQVNJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBUE47O0FBZUE7RUFDRSxpQkFBQTtBQVpGOztBQWVBO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFaRjs7QUFhRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWEo7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUVBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFmRjs7QUFnQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FBZEo7O0FBa0JBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBZkY7O0FBa0JBO0VBQ0U7SUFDRSxTQUFBO0lBQ0EsV0FBQTtFQWZGOztFQWlCQTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VBZEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1pY29uIHtcbiAgICBwYWRkaW5nOiAwLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMDtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogLjVweDtcbiAgICBib3JkZXItY29sb3I6ICM5RENFNzQ7XG5cbn1cbi5zZW5kLWljb246aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzYwQThEQztcblxufVxuXG4uYXBwLW5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucmVtb3ZlX2ljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8vTXkgc3R5bHJlIGRyb3Bkb3duXG4jYWNjb3VudCBhIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgIGNvbG9yOiAjNjBBOERDO1xuICAgIGJvcmRlci1jb2xvcjogIzYwQThEQztcbiAgfVxuICAjYWNjb3VudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBOERDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM2MEE4REM7XG4gIH1cblxuICAjYWNjb3VudCBidXR0b257XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBjb2xvcjogIzYwQThEQztcbiAgICBib3JkZXItY29sb3I6ICM2MEE4REM7XG4gIH1cbiAgI2FjY291bnQgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBOERDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItY29sb3I6ICM2MEE4REM7XG4gIH1cblxuXG4gIC5uYXZiYXItdG9nZ2xlcntcbiAgICB3aWR0aDogNDdweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwQThEQztcbiAgICBib3JkZXI6bm9uZTtcbn1cbi5uYXZiYXItdG9nZ2xlciAubGluZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmZvci1uYXZpZ2F0aW9ucyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1lbnUge1xuICB6LWluZGV4OiAxMDtcbiAgLy8gZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDc1cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmIzODY7XG4gIHBhZGRpbmc6IDVweDtcbiAgLm1lbnUtbGlzdCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuaWNvbi1ib2FyZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBOERDO1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIH1cbiAgICAuZGV0YWlsLWJvYXJkIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgLmJvbGQtZGV0YWlsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgICAgLnNtYWxsLWRldGFpbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgfVxuICAgICAgLm5vcm1hbC1kZXRhaWwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1lbnUtbGlzdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICB9XG59XG5cbi5iYWcge1xuICB6LWluZGV4OiAxMDtcbiAgLy8gZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDc1cHg7XG4gIHJpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJiMzg2O1xuICBwYWRkaW5nOiA1cHg7XG4gIC5iYWdfYm9hcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogMzgwcHg7XG4gICAgaDUge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAvLyAudGFibGVfYm9hcmQge1xuICAgIC8vICAgaGVpZ2h0OiAzMDBweDtcbiAgICAvLyAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8vIH1cbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMjIwcHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIHRyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIHRkIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHBhZGRpbmc6IDNweCAwO1xuICAgICAgICBcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgICAgLndpZHRoLTMwe1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgIH1cbiAgICAgIC53aWR0aC0yMDB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIC53aWR0aC02MHtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICB9XG4gICAgICAud2lkdGgtNzB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6IzYwQThEQztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAudG90YWxfYmFnX3ByaWNlIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5mbG9hdC1jbGVhciB7XG4gICAgICBmbG9hdDogdW5zZXQ7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAvLyB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbiAgXG59XG5cbi5tYXJnaW4tbGVmdC0xNSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5idXR0b24ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cblxuLmluZm8tdGFnIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgLy8gaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIC8vIHBhZGRpbmctbGVmdDogMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICAvLyBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEE4REM7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDdweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxufVxuXG4uZW1wdHlfZGVzY3JpcHRpb257XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xuICAubWVudSB7XG4gICAgdG9wOiA3MHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICB9XG4gIC5iYWcge1xuICAgIHRvcDogNzBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                host: {
                    '(document:click)': 'onClick($event)',
                },
            }]
    }], function () { return [{ type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_dao_service__WEBPACK_IMPORTED_MODULE_2__["DaoService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { menu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['menu']
        }], bag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['bag']
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header']
        }], onScrollEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/components/layout/landing/landing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/landing/landing.component.ts ***!
  \****************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/counter/counter.component */ "./src/app/components/home/counter/counter.component.ts");



class LandingComponent {
    constructor() {
        this.countFeatured = 436;
        this.countLocations = 254;
        this.countPromotions = 2034;
    }
    ngOnInit() {
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 39, vars: 0, consts: [[1, "container", "justify-content-center"], [1, "for-location-search"], [1, "for-location-search-container"], [1, "for-location-search-content"], [1, "for-location-search-form"], [1, "search-form-header"], [1, "search-form-fields"], [1, "fa", "fa-search", "icon", "search-icon"], ["type", "text", "id", "txtLandingAddress", "name", "Search", "onfocus", "initAutocomplete()", "placeholder", "Enter your address", 1, "form-control"], ["onclick", "reverseGeocodeAddress(document.getElementById('txtLandingAddress').value)"], [1, "save-banner"], [1, "banner-bg"], [1, "banner-details"], [1, "margin-top-25"], [1, "vendor-banner", "for-vendor-banner", "margin-top-10"], [1, "save-banner", "margin-top-10"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Find promotions and hot deals in your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Save Big. Less Hassle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "More Stores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Search promotional products with significant savings at the click of a button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Great Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Great Savings. Great Delivery.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Easy of finding promotions with great savings & optional choice of Delivery, Click & Collect or In-store Collection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Are you a Vendor?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Are you?! Easy Vendor sign-up, upload your products and start increasing your sales through the SeeMeSave platform.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_1__["CounterComponent"]], styles: [".search-form-fields[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 40px;\n  padding-left: 30px;\n  border-top-left-radius: 6px !important;\n  border-bottom-left-radius: 6px !important;\n}\n\n.search-form-fields[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 30%;\n  background-color: #f7e843;\n  font-size: 17px;\n  font-weight: bold;\n  height: 40px;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  box-shadow: none;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #60A8DC;\n}\n\n.search-form-fields[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.banner-details[_ngcontent-%COMP%] {\n  margin-left: 7em;\n}\n\n.banner-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 2em;\n  text-align: left;\n}\n\n.banner-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 1.6em;\n  text-align: left;\n}\n\n.margin-top-25[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n\n.banner-details[_ngcontent-%COMP%] {\n  position: relative;\n  color: #ffffff;\n  width: 80%;\n  max-width: 80%;\n  overflow: hidden;\n  white-space: normal;\n  max-height: 100%;\n  padding: 4em 0 6em;\n}\n\n.vendor-banner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  float: left;\n  background-size: 60%;\n  height: 350px;\n}\n\n.vendor-banner[_ngcontent-%COMP%]   .banner-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  background-image: linear-gradient(to left #89c33f, #f1e832) !important;\n  height: 100%;\n  width: 65%;\n  right: 0;\n  height: 350px;\n  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%);\n  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%);\n  top: 0px;\n}\n\n.banner-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 2em;\n  text-align: left;\n}\n\n.campaign-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: block;\n  margin: 0;\n  padding: 0;\n}\n\n.for-vendor-banner[_ngcontent-%COMP%]   .banner-details[_ngcontent-%COMP%] {\n  width: 45% !important;\n  text-align: center !important;\n  padding: 8px 40px 0px 0px !important;\n}\n\n.for-vendor-banner[_ngcontent-%COMP%]   .banner-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: red;\n  text-decoration: none;\n  font-weight: bold;\n}\n\n.for-vendor-banner[_ngcontent-%COMP%]   .banner-details[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.vendor-banner[_ngcontent-%COMP%]   .banner-details[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.last-banner[_ngcontent-%COMP%] {\n  background: none !important;\n  padding: unset !important;\n}\n\n.for-search-results[_ngcontent-%COMP%] {\n  background: none;\n}\n\n.for-search-results[_ngcontent-%COMP%]   .for-search-results-container[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  overflow: hidden;\n}\n\n.margin-top-10[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n@media screen and (max-width: 1024px) {\n  .banner-details[_ngcontent-%COMP%] {\n    margin-left: 0;\n    padding: 20px 0;\n  }\n\n  .for-vendor-banner[_ngcontent-%COMP%]   .banner-details[_ngcontent-%COMP%] {\n    width: 70% !important;\n    text-align: center !important;\n    padding: 8px 40px 0px 0px !important;\n  }\n}\n\n@media screen and (max-width: 860px) {\n  .save-banner[_ngcontent-%COMP%] {\n    height: 250px;\n    background-size: 100%;\n  }\n\n  .vendor-banner[_ngcontent-%COMP%] {\n    height: 250px;\n    background-size: 100%;\n  }\n\n  .vendor-banner[_ngcontent-%COMP%]   .banner-bg[_ngcontent-%COMP%] {\n    position: absolute;\n    background-image: linear-gradient(to left #89c33f, #f1e832) !important;\n    height: 100%;\n    width: 0;\n    right: 0;\n    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%);\n    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 8% 100%);\n    top: 0px;\n  }\n\n  .save-banner[_ngcontent-%COMP%]   .banner-bg[_ngcontent-%COMP%] {\n    position: absolute;\n    background-image: none;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 100% 100%, 0 100%);\n    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);\n  }\n\n  .banner-details[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .banner-details[_ngcontent-%COMP%] {\n    position: relative;\n    top: 40px;\n    color: #ffffff;\n    width: 80%;\n    background-color: #89c33f;\n    opacity: 0.8;\n    overflow: hidden;\n    white-space: normal;\n    padding: 15px;\n    max-width: 80%;\n    margin: 0 10%;\n    border-radius: 6px;\n  }\n  .banner-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 600;\n    font-size: 18px;\n    text-align: left;\n  }\n  .banner-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: 600;\n    font-size: 16px;\n    text-align: left;\n  }\n\n  .for-vendor-banner[_ngcontent-%COMP%]   .banner-details[_ngcontent-%COMP%] {\n    width: 80% !important;\n    text-align: center !important;\n    top: 15px;\n    height: unset;\n    padding: 15px !important;\n  }\n\n  .banner-details[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0;\n  }\n\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n    overflow: hidden;\n    padding: 10px 0;\n  }\n\n  .margin-top-25[_ngcontent-%COMP%] {\n    margin-top: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFDRTtFQUF5Qiw0QkFBQTtFQUN2QixjQUFBO0FBR0o7O0FBQ0U7RUFBMEIsbUJBQUE7RUFDeEIsY0FBQTtBQUdKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFFSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUlBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxzRUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSw4REFBQTtFQUNBLHNEQUFBO0VBQ0EsUUFBQTtBQUhKOztBQU1FO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFISjs7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtBQUhKOztBQU1FO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUFISjs7QUFNRTtFQUNFLGNBQUE7QUFISjs7QUFNRTtFQUNFLFlBQUE7QUFISjs7QUFNRTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7QUFISjs7QUFNRTtFQUNFLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtBQUhKOztBQU1BO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQUhGOztFQUtBO0lBQ0UscUJBQUE7SUFDQSw2QkFBQTtJQUNBLG9DQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFO0lBQ0ksYUFBQTtJQUNBLHFCQUFBO0VBSEo7O0VBS0E7SUFDRSxhQUFBO0lBQ0EscUJBQUE7RUFGRjs7RUFJQTtJQUNFLGtCQUFBO0lBQ0Esc0VBQUE7SUFDQSxZQUFBO0lBQ0EsUUFBQTtJQUNBLFFBQUE7SUFFQSw4REFBQTtJQUNBLHNEQUFBO0lBQ0EsUUFBQTtFQUZGOztFQUlBO0lBQ0Usa0JBQUE7SUFDQSxzQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxtRUFBQTtJQUNBLG1EQUFBO0VBREY7O0VBR0E7SUFDRSxjQUFBO0VBQUY7O0VBRUE7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxrQkFBQTtFQUNGO0VBQUU7SUFDRSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFFSjtFQUFFO0lBQ0UsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0VBRUo7O0VBQ0E7SUFDRSxxQkFBQTtJQUNBLDZCQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSx3QkFBQTtFQUVGOztFQUFBO0lBQ0Usa0JBQUE7SUFDQSxPQUFBO0VBR0Y7O0VBREE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0VBSUY7O0VBRkE7SUFDRSxnQkFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9sYW5kaW5nL2xhbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWZvcm0tZmllbGRzID4gaW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkcyA+IGJ1dHRvbiB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlODQzO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICBjb2xvcjogICM2MEE4REM7O1xuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICBcbiAgfVxuICBcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgY29sb3I6ICAjNjBBOERDO1xuICAgIFxuICB9XG4gIFxuICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgY29sb3I6ICAjNjBBOERDO1xuICAgIFxuICB9XG5cbi5zZWFyY2gtaWNvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiAjNjBBOERDO1xufVxuXG4uc2VhcmNoLWZvcm0tZmllbGRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cblxuLmJhbm5lci1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogN2VtO1xufVxuLmJhbm5lci1kZXRhaWxzIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgIFxufVxuLmJhbm5lci1kZXRhaWxzIGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgXG59XG5cbi5tYXJnaW4tdG9wLTI1IHtcbiAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG5cblxuLmJhbm5lci1kZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLy8gaGVpZ2h0OiA4LjdlbTtcbiAgICB3aWR0aDogODAlO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDRlbSAwIDZlbTtcbiAgfVxuICBcbiAgLnZlbmRvci1iYW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWFnZXMvdmVuZG9yLWNhbXBhaWduLmpwZ1wiKSAtMjAlIDgwJSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgfVxuICBcbiAgLnZlbmRvci1iYW5uZXIgLmJhbm5lci1iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0ICM4OWMzM2YsICNmMWU4MzIpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbigwJSAwJSwgMTAwJSAwJSwgMTAwJSAxMDAlLCA4JSAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgOCUgMTAwJSk7XG4gICAgdG9wOiAwcHg7XG4gIH1cbiAgXG4gIC5iYW5uZXItZGV0YWlscyBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgXG4gIC5jYW1wYWlnbi1pbWFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAuZm9yLXZlbmRvci1iYW5uZXIgLmJhbm5lci1kZXRhaWxzIHtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogOHB4IDQwcHggMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZm9yLXZlbmRvci1iYW5uZXIgLmJhbm5lci1kZXRhaWxzIGEge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAuZm9yLXZlbmRvci1iYW5uZXIgLmJhbm5lci1kZXRhaWxzIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIFxuICAudmVuZG9yLWJhbm5lciAuYmFubmVyLWRldGFpbHMge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuICBcbiAgLmxhc3QtYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogdW5zZXQgIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmZvci1zZWFyY2gtcmVzdWx0cyB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICBcbiAgLmZvci1zZWFyY2gtcmVzdWx0cyAuZm9yLXNlYXJjaC1yZXN1bHRzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5tYXJnaW4tdG9wLTEwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLmJhbm5lci1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbiAgLmZvci12ZW5kb3ItYmFubmVyIC5iYW5uZXItZGV0YWlscyB7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA4cHggNDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODYwcHgpIHsgIFxuICAuc2F2ZS1iYW5uZXIge1xuICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgfVxuICAudmVuZG9yLWJhbm5lciB7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIH1cbiAgLnZlbmRvci1iYW5uZXIgLmJhbm5lci1iZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0ICM4OWMzM2YsICNmMWU4MzIpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIC8vIGhlaWdodDogMzUwcHg7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCUgMCUsIDEwMCUgMCUsIDEwMCUgMTAwJSwgOCUgMTAwJSk7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAlIDAlLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDglIDEwMCUpO1xuICAgIHRvcDogMHB4O1xuICB9XG4gIC5zYXZlLWJhbm5lciAuYmFubmVyLWJnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMCUsIDEwMCUgMTAwJSwgMCAxMDAlKTtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG4gIH1cbiAgLmJhbm5lci1kZXRhaWxzIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuICAuYmFubmVyLWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODljMzNmO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgMTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIGRpdiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuICAuZm9yLXZlbmRvci1iYW5uZXIgLmJhbm5lci1kZXRhaWxzIHtcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAxNXB4O1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICB9XG4gIC5iYW5uZXItZGV0YWlscyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gIH1cbiAgc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbiAgLm1hcmdpbi10b3AtMjUge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");





class LayoutComponent {
    constructor(router) {
        this.router = router;
        this.pageName = this.router.url.split('/').pop();
    }
    ngOnInit() {
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 5, vars: 0, consts: [[1, "page-container"], ["id", "customBackdrop"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/page-not-found/page-not-found.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/layout/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PageNotFoundComponent {
    constructor() {
        this.title = 'Page Not Found';
    }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 15, vars: 0, consts: [[1, "justify-content-center"], [1, "container"], [1, "global_link"], [2, "font-size", "15em"], [1, "fa", "fa-fw", "fa-frown-o"], ["routerLink", "/", 1, "reload"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Page Not Found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " The page you are trying to view cannot be found or has been removed. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Please navigate back Home or check again later. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Go Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".global_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n  color: #4d4d4d;\n  background-image: -webkit-linear-gradient(top, #ffffff 0%, #F6F6F6 47%, #ededed 100%);\n  margin-top: 1em;\n  justify-content: center;\n}\n\n.global_link[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 5em;\n  font-style: italic;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-variant: small-caps;\n}\n\n.reload[_ngcontent-%COMP%] {\n  color: white;\n  -webkit-appearance: none;\n  margin-top: 20px;\n  font-size: 20px;\n  padding: 8px 30px;\n  background: #60a8dc;\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  margin-bottom: 100px;\n  outline: none;\n}\n\n.reload[_ngcontent-%COMP%]:active {\n  box-shadow: none;\n  transform: translateY(1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUZBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWxfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMzAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjRjZGNkY2IDQ3JSwgI2VkZWRlZCAxMDAlKTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nbG9iYWxfbGluayBoNCB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cbi5yZWxvYWQge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjBhOGRjO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMjYpO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5yZWxvYWQ6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/layout/panel/panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/layout/panel/panel.component.ts ***!
  \************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _templates_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/products.component */ "./src/app/components/layout/panel/templates/products.component.ts");
/* harmony import */ var _templates_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/store.component */ "./src/app/components/layout/panel/templates/store.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







function PanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PanelComponent_ng_template_4_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PanelComponent_ng_template_4_products_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "products-panel", 11, 12);
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selling_price", item_r15.selling_price)("thumbnail_image", item_r15.thumbnail_image != null ? item_r15.thumbnail_image : item_r15.media)("brand", item_r15.brand)("description", item_r15.description)("pack_size", item_r15.pack_size != null ? item_r15.pack_size : item_r15.packsize + " " + item_r15.unit);
} }
function PanelComponent_ng_template_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PanelComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelComponent_ng_template_4_div_0_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_ng_template_4_products_panel_1_Template, 2, 5, "products-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_ng_template_4_ng_template_2_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.panelData)("ngIfThen", ctx_r2.products)("ngIfElse", _r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.panelData);
} }
function PanelComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PanelComponent_ng_template_6_store_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "store-panel", 18, 19);
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/store/", item_r21.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", item_r21.logo != null ? item_r21.logo : item_r21.media)("name", item_r21.name)("location", item_r21.displayname)("products", item_r21.products)("promotions", item_r21.promotions)("distance", item_r21.distance)("time", item_r21.time)("street", item_r21.street);
} }
function PanelComponent_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PanelComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelComponent_ng_template_6_div_0_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_ng_template_6_store_panel_1_Template, 2, 9, "store-panel", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_ng_template_6_ng_template_2_Template, 4, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.panelData)("ngIfThen", ctx_r4.stores)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.panelData);
} }
function PanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PanelComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function PanelComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_back_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PanelComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PanelComponent {
    constructor() { }
    ngOnInit() { }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["app-panel"]], inputs: { panelTitle: "panelTitle", panelClass: "panelClass", panelData: "panelData", panelTemplate: "panelTemplate" }, decls: 14, vars: 9, consts: [["ngClass", "store-panel", 1, "store-panel"], [3, "innerHTML"], [3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["productsBlock", ""], ["storesBlock", ""], [4, "ngIf", "ngIfThen"], ["scrollLeft", ""], ["scrollRight", ""], ["ngClass", "panel-block", 3, "selling_price", "thumbnail_image", "brand", "description", "pack_size", 4, "ngFor", "ngForOf"], ["noproducts", ""], ["ngClass", "panel-block", 3, "selling_price", "thumbnail_image", "brand", "description", "pack_size"], ["products", ""], [1, "no-data"], ["role", "status", 1, "spinner-grow", "text-primary"], [1, "sr-only"], ["ngClass", "panel-block", 3, "logo", "name", "location", "products", "promotions", "distance", "time", "street", "routerLink", 4, "ngFor", "ngForOf"], ["nostores", ""], ["ngClass", "panel-block", 3, "logo", "name", "location", "products", "promotions", "distance", "time", "street", "routerLink"], ["stores", ""], ["onclick", "javascript:scrollWindow(this);", 1, "scroll-left"], ["onclick", "javascript:scrollWindow(this);", 1, "scroll-right"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelComponent_ng_template_4_Template, 4, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PanelComponent_ng_template_6_Template, 4, 4, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PanelComponent_div_8_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PanelComponent_div_9_Template, 1, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PanelComponent_ng_template_10_Template, 2, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PanelComponent_ng_template_12_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.panelTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("ngClass", "panel-slider ", ctx.panelClass, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.panelClass === "stores")("ngIfThen", _r3)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.panelData)("ngIfThen", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.panelData)("ngIfThen", _r9);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _templates_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsPanelComponent"], _templates_store_component__WEBPACK_IMPORTED_MODULE_3__["StorePanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss']
            }]
    }], function () { return []; }, { panelTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], panelData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], panelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/layout/panel/templates/products.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/layout/panel/templates/products.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPanelComponent", function() { return ProductsPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");



/*<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
             <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>&nbsp; */
class ProductsPanelComponent {
    constructor() { }
    ngOnInit() {
    }
    generatePrice() {
        if (this.selling_price) {
            var high = this.selling_price.split('.')[0], low = this.selling_price.split('.')[1];
            // return `<span>R${high}</span>.<span>${low}</span>`;
            return 'R' + this.selling_price;
        }
    }
}
ProductsPanelComponent.ɵfac = function ProductsPanelComponent_Factory(t) { return new (t || ProductsPanelComponent)(); };
ProductsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsPanelComponent, selectors: [["products-panel"]], inputs: { thumbnail_image: "thumbnail_image", brand: "brand", description: "description", pack_size: "pack_size", unit: "unit", selling_price: "selling_price", barcode: "barcode" }, decls: 25, vars: 8, consts: [[1, "for-prom-content"], [1, "img", "img-responsive", "thumbnail"], ["loading", "lazy", "alt", "", 1, "for-prom-images", 3, "src"], [1, "details"], [1, "product-brand"], [1, "product-description"], [1, "product-price", 3, "innerHtml"], [1, "product-pack-size"], [1, "button-proms"], ["onclick", "likeProduct(event)", 3, "id"], ["src", "../../../../../assets/icons/like.png", "width", "15"], [1, "badge", "badge-light", 2, "margin", "2px !important"], ["type", "number", "name", "quantity", "placeholder", "Qty", "id", "quantity"], ["onclick", "addToShoppingList(event)", 3, "id"]], template: function ProductsPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add To Shopping List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", ctx.thumbnail_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.generatePrice(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.pack_size, " ", ctx.unit, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.thumbnail_image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.thumbnail_image);
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'products-panel',
                template: `<div class="for-prom-content">
              <div class="img img-responsive thumbnail">
                  <img class="for-prom-images" src="https://seemesave-web.fra1.digitaloceanspaces.com/media/{{thumbnail_image}}" loading="lazy" alt="" />
                </div>
                <div class="details">
                  <div class="product-brand">{{brand}}</div>
                  <div class="product-description">{{description}}</div>
                  <div class="product-price" [innerHtml]="generatePrice()"></div>
                  <div class="product-pack-size">{{pack_size}} {{unit}}</div>
                  <!-- <div class="product-icons" [innerHtml]="generateIcons()"></div> -->
                </div>
              </div>
              <br /> <br /> <br /> <br /> <br />
              <div class="button-proms">
             <button id="{{thumbnail_image}}" onclick="likeProduct(event)"><img src="../../../../../assets/icons/like.png" width="15"/>
             <span class="badge badge-light" style="margin: 2px !important;">0</span></button>
              <input type="number" name="quantity" placeholder="Qty" id="quantity"/>
             <button id="{{thumbnail_image}}" onclick="addToShoppingList(event)"><span>Add To Shopping List</span></button>
             </div>
              `,
                styleUrls: []
            }]
    }], function () { return []; }, { thumbnail_image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], brand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pack_size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selling_price: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], barcode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/layout/panel/templates/store.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/panel/templates/store.component.ts ***!
  \**********************************************************************/
/*! exports provided: StorePanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorePanelComponent", function() { return StorePanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");




class StorePanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
StorePanelComponent.ɵfac = function StorePanelComponent_Factory(t) { return new (t || StorePanelComponent)(); };
StorePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StorePanelComponent, selectors: [["store-panel"]], inputs: { logo: "logo", name: "name", promotions: "promotions", products: "products", location: "location", guid: "guid", rating: "rating", distance: "distance", time: "time", street: "street" }, decls: 24, vars: 9, consts: [[1, "for-stores", 3, "id"], [1, "store-name", "text-center"], [1, "text-center", 2, "font-size", "18px", "font-weight", "600", "margin", "5px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "text-center"], ["onmouseover", "toggleRatings(event)", "title", "Mark as Favourite Store", 2, "color", "red"], [1, "promotion_details"], [1, "store-promotions", "bubble"], [1, "store-products", "bubble"], [1, "img", "text-center"], ["loading", "lazy", "alt", "", "width", "120px", "height", "60px", 1, "for-store-image-logo", 3, "src"], [2, "color", "black", "font-size", "10px"], [2, "color", "black", "font-size", "10px", "white-space", "nowrap", "overflow", "hidden", "text-overflow", "ellipsis"], [1, "store-location", 2, "color", "black", "font-size", "9px"]], template: function StorePanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " promotions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.promotions, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.products, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", ctx.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.distance, ", ", ctx.time, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.street);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__["LazyImgDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorePanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'store-panel',
                template: `<div class="for-stores" id="{{name}}">
  <div class="store-name text-center"><p class="text-center" style="font-size: 18px; font-weight: 600; margin: 5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{name}}</p></div>
  <div class="text-center">
    <mat-icon onmouseover="toggleRatings(event)" title="Mark as Favourite Store" style="color:red">favorite_border</mat-icon>
  </div>
  <div class="promotion_details">
    <div class="store-promotions bubble">
      {{promotions}}<br>
      promotions
    </div>
    <div class="store-products bubble">
      {{products}}<br>products
    </div>
  </div>
  <div class="img text-center">
    <img class="for-store-image-logo" src="https://seemesave-web.fra1.digitaloceanspaces.com/media/{{logo}}" loading="lazy" alt="" width="120px" height="60px" />
  </div>
  <div style="color:black; font-size:10px; ">{{distance}}, {{time}}</div>
  <div style="color:black; font-size:10px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{street}}</div>
  <div class="store-location" style="color:black; font-size: 9px">{{location}}</div>
  </div>`,
                styleUrls: []
            }]
    }], function () { return []; }, { logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], promotions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], guid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], distance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], time: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], street: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/layout/site-stats/site-stats.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/layout/site-stats/site-stats.component.ts ***!
  \**********************************************************************/
/*! exports provided: SiteStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteStatsComponent", function() { return SiteStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/number-tracker-component/number-tracker-component.component */ "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts");




const _c0 = function (a0) { return [a0]; };
class SiteStatsComponent {
    constructor() {
        this.countFeatured = 436;
        this.countLocations = 254;
        this.countPromotions = 2034;
    }
    ngOnInit() {
    }
}
SiteStatsComponent.ɵfac = function SiteStatsComponent_Factory(t) { return new (t || SiteStatsComponent)(); };
SiteStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SiteStatsComponent, selectors: [["app-site-stats"]], decls: 18, vars: 9, consts: [[1, "grid-container"], [1, "grid-child"], [1, "counters"], [1, "featured-counter"], [1, "count"], [3, "end"], [1, "value"], [1, "promotions-counter"], [1, "locations-counter"]], template: function SiteStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "number-tracker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "number-tracker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "number-tracker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.countFeatured));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.countPromotions));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.countLocations));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_2__["NumberTrackerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3NpdGUtc3RhdHMvc2l0ZS1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-site-stats',
                templateUrl: './site-stats.component.html',
                styleUrls: ['./site-stats.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/npanels/seemesaveproducts/seemesaveproducts.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/npanels/seemesaveproducts/seemesaveproducts.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SeemesaveproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeemesaveproductsComponent", function() { return SeemesaveproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");




class SeemesaveproductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SeemesaveproductsComponent.ɵfac = function SeemesaveproductsComponent_Factory(t) { return new (t || SeemesaveproductsComponent)(); };
SeemesaveproductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SeemesaveproductsComponent, selectors: [["app-seemesaveproducts"]], inputs: { logo: "logo", name: "name", promotions: "promotions", products: "products", location: "location", guid: "guid", rating: "rating" }, decls: 21, vars: 3, consts: [[1, "product-card"], [1, "product-img"], ["loading", "lazy", "alt", "", 1, "seemesave-product-logo", 3, "src"], [1, "product-detail"], [1, "product-name"], [1, "product-unit"], [1, "product-status"], [1, "product-price"], [1, "product-like"], ["title", "Mark as Favourite Store", 3, "inline"], [1, "product-add"]], template: function SeemesaveproductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Maq ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Auto Washing Powder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2 kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "R37.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "add_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", ctx.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inline", true);
    } }, directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: [".product-card[_ngcontent-%COMP%] {\n  padding: 15px;\n  display: flex;\n  width: 260px;\n  height: 170px;\n  align-items: center;\n  position: relative;\n  background-color: white;\n  border: 15px solid #b6d7ad;\n  border-right: none;\n}\n\n.product-img[_ngcontent-%COMP%] {\n  display: inline;\n  text-align: center;\n  width: 90px;\n}\n\n.product-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n\n.product-detail[_ngcontent-%COMP%] {\n  padding: 0px 10px;\n  display: inline;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  align-items: center;\n  justify-content: center;\n  text-overflow: ellipsis;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: normal;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-unit[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-status[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.product-detail[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 16px;\n  font-weight: 1000;\n}\n\n.product-like[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 0px;\n  width: 30px;\n  height: 30px;\n  font-size: 25px;\n}\n\n.product-add[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  right: 30px;\n  width: 30px;\n  height: 30px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ucGFuZWxzL3NlZW1lc2F2ZXByb2R1Y3RzL3NlZW1lc2F2ZXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBQTtFQUVBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUVSOztBQURRO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBR1o7O0FBQUk7RUFDSSxlQUFBO0FBRVI7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRVI7O0FBQUk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25wYW5lbHMvc2VlbWVzYXZlcHJvZHVjdHMvc2VlbWVzYXZlcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJke1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNiNmQ3YWQ7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDI2MHB4O1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNiNmQ3YWQ7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnByb2R1Y3QtaW1ne1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICB9XG59XG4ucHJvZHVjdC1kZXRhaWwge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2R1Y3QtdW5pdCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLnByb2R1Y3Qtc3RhdHVzIHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgfVxufVxuXG4ucHJvZHVjdC1saWtlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnByb2R1Y3QtYWRkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeemesaveproductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-seemesaveproducts',
                templateUrl: './seemesaveproducts.component.html',
                styleUrls: ['./seemesaveproducts.component.scss']
            }]
    }], function () { return []; }, { logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], promotions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], guid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/nproducts/nproducts.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/nproducts/nproducts.component.ts ***!
  \*************************************************************/
/*! exports provided: NproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NproductsComponent", function() { return NproductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dao.service */ "./src/app/services/dao.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/LazyImg/lazy-img.directive */ "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _npanels_seemesaveproducts_seemesaveproducts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../npanels/seemesaveproducts/seemesaveproducts.component */ "./src/app/components/npanels/seemesaveproducts/seemesaveproducts.component.ts");








function NproductsComponent_app_seemesaveproducts_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-seemesaveproducts", 24);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", item_r4.logo != null ? item_r4.logo : item_r4.media)("name", item_r4.name)("location", item_r4.location)("products", item_r4.products)("promotions", item_r4.promotion);
} }
function NproductsComponent_app_seemesaveproducts_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-seemesaveproducts", 24);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", item_r5.logo != null ? item_r5.logo : item_r5.media)("name", item_r5.name)("location", item_r5.location)("products", item_r5.products)("promotions", item_r5.promotion);
} }
function NproductsComponent_app_seemesaveproducts_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-seemesaveproducts", 24);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", item_r6.logo != null ? item_r6.logo : item_r6.media)("name", item_r6.name)("location", item_r6.location)("products", item_r6.products)("promotions", item_r6.promotion);
} }
function NproductsComponent_app_seemesaveproducts_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-seemesaveproducts", 24);
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", item_r7.logo != null ? item_r7.logo : item_r7.media)("name", item_r7.name)("location", item_r7.location)("products", item_r7.products)("promotions", item_r7.promotion);
} }
class NproductsComponent {
    constructor(daoService) {
        this.daoService = daoService;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    ngOnInit() {
        this.searchStores();
        this.retrieveNewToMarket();
        this.retrieveFeaturedProducts();
        this.retrievePromotion();
        $(".btn-shopping-list").css("display", "inline-block");
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    retrievePromotion() {
        this.daoService.getPromotionProducts().subscribe((data) => {
            console.log("----- this is the getting promotion products -----");
            let result = JSON.parse(data);
            this.promotionProducts = result[0];
            if (this.promotionProducts.length > 300)
                this.promotionProducts = this.promotionProducts.slice(0, 300);
            console.log(this.promotionProducts);
        }, (error) => {
            console.log(error);
        });
    }
    retrieveFeaturedProducts() {
        this.daoService.getFeaturedProducts().subscribe((data) => {
            console.log("----- this is the getting featured products -----");
            let result = JSON.parse(data);
            this.featuredProducts = result[0];
            console.log(this.featuredProducts);
        }, (error) => {
            console.log(error);
        });
    }
    retrieveNewToMarket() {
        this.daoService.getNewToMarket().subscribe((data) => {
            if (data.success) {
                this.newProducts = data['data'];
            }
        }, (error) => {
            console.log(error);
        });
    }
    retrieveStores(lng, lat, radius) {
        // this.daoService.getAllStores(lng, lat, radius).subscribe((data) => {
        //   if (data.success) {
        //     this.stores = data['data'];
        //   }
        // }, (error) => {
        //   console.log(error);
        // });
        this.daoService.getAllStores().subscribe((data) => {
            console.log("--- getting all stores ----");
            // console.log(JSON.parse(data))
            let result = JSON.parse(data);
            this.stores = result[0];
            console.log(this.stores);
        }, (error) => {
            console.log(error);
        });
    }
    searchStores() {
        let loc = localStorage.getItem('temp-geo');
        console.log("----- this is the location for getting searchstores ------");
        console.log(loc);
        if (loc) {
            let lat = JSON.parse(loc.toString()).lat, lng = JSON.parse(loc.toString()).lng, radius = 50;
            this.retrieveStores(lng, lat, radius);
        }
    }
}
NproductsComponent.ɵfac = function NproductsComponent_Factory(t) { return new (t || NproductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"])); };
NproductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NproductsComponent, selectors: [["app-nproducts"]], decls: 65, vars: 8, consts: [[1, "store-header"], [1, "search-form-header"], [2, "background-color", "#a8cd3b"], [1, "container"], [1, "hyper_link"], [1, "hpyer_title"], [1, "title"], [1, "title_description"], [1, "rate"], ["title", "Mark as Favourite Store", 2, "color", "red"], [1, "text-description"], [1, "text-map"], [3, "latitude", "longitude"], [1, "title_circle"], ["id", "hpyer_logo", "src", "./assets/test-title.png"], [1, "hpyer_products"], [1, "search-form-fields"], [1, "fa", "fa-search", "icon", "search-icon"], ["type", "text", "id", "txtLandingAddress", "name", "Search", "onfocus", "initAutocomplete()", "placeholder", "Enter your address", 1, "form-control"], ["onclick", "reverseGeocodeAddress(document.getElementById('txtLandingAddress').value)"], [1, "seemesave-products"], [1, "scrollmenu"], [3, "logo", "name", "location", "products", "promotions", 4, "ngFor", "ngForOf"], [1, "seemesave-featured"], [3, "logo", "name", "location", "products", "promotions"]], template: function NproductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "favorite_border");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " The Save group was established by Moosa Noorgat in 1987 when he opended Save Cash and Carry in Vic-toria rd. From humble beginnings in Pietermaritzburg the company grew to one of the largest Cash and Carry businesses in teh Natal Mid-lands. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " From 2009 the company expanded Into smaller supermarket retail out-lets, making their low prices acces-sible to the everyday consumer. State of the art butcheries, bakeries and kitchens were introduced into there supermakrets. The Save group consists now of 1 Hyper and 5 Supermakrets (Dalton, Howick, Church Street, Brickfield and Ne-wholme) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "agm-map", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "agm-marker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "New to Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, NproductsComponent_app_seemesaveproducts_41_Template, 1, 5, "app-seemesaveproducts", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Eeatured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, NproductsComponent_app_seemesaveproducts_48_Template, 1, 5, "app-seemesaveproducts", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Promotion END 22 July 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, NproductsComponent_app_seemesaveproducts_55_Template, 1, 5, "app-seemesaveproducts", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Featured Products!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, NproductsComponent_app_seemesaveproducts_62_Template, 1, 5, "app-seemesaveproducts", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredProducts);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmMarker"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _npanels_seemesaveproducts_seemesaveproducts_component__WEBPACK_IMPORTED_MODULE_6__["SeemesaveproductsComponent"]], styles: [".search-form-fields[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 40px;\n  padding-left: 30px;\n  border-top-left-radius: 6px !important;\n  border-bottom-left-radius: 6px !important;\n}\n\n.search-form-fields[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 30%;\n  background-color: #f7e843;\n  font-size: 17px;\n  font-weight: bold;\n  height: 40px;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  box-shadow: none;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #60A8DC;\n}\n\n.search-form-fields[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  margin-top: 10px;\n}\n\n.search-form-header[_ngcontent-%COMP%] {\n  bottom: 10px;\n  text-align: center;\n  margin: auto;\n  width: 100%;\n  color: white;\n  font-size: 0.5em;\n  background-image: url('campaign-old.jpg');\n  background-size: cover;\n  min-height: 300px;\n}\n\n#search-text[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 12px;\n}\n\n.hyper_link[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.hpyer_title[_ngcontent-%COMP%] {\n  display: inline;\n  width: 350px;\n}\n\n.hpyer_products[_ngcontent-%COMP%] {\n  display: inline;\n  width: calc(100% - 350px);\n  padding: 50px 0 40px 50px;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 320px;\n  padding-bottom: 30px;\n  position: relative;\n  min-height: 1000px;\n  text-align: center;\n}\n\n.title_circle[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  border-radius: 50%;\n  height: 320px;\n  width: 320px;\n  top: -140px;\n}\n\n.title_description[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 320px;\n  top: 40px;\n  background-color: #9abe64;\n  padding-top: 170px;\n  padding-bottom: 30px;\n}\n\n.rate[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.text-description[_ngcontent-%COMP%] {\n  color: white;\n  padding: 10px 20px;\n  font-weight: 500;\n  font-size: 13px;\n  direction: ltr;\n}\n\n#hpyer_logo[_ngcontent-%COMP%] {\n  margin-top: 140px;\n  margin-left: 50px;\n  width: 240px;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.text-map[_ngcontent-%COMP%] {\n  width: 280px;\n  margin: auto;\n}\n\ndiv.scrollmenu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  overflow: auto;\n}\n\n.seemesave-products[_ngcontent-%COMP%] {\n  background-color: #92b386;\n  padding: 10px;\n  width: 100%;\n}\n\n.seemesave-products[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.seemesave-featured[_ngcontent-%COMP%] {\n  background-color: red;\n  padding: 10px;\n  width: 100%;\n}\n\n.seemesave-featured[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.seemesave-promotion[_ngcontent-%COMP%] {\n  background-color: #92b386;\n  padding: 10px;\n  width: 100%;\n}\n\n.seemesave-promotion[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: white;\n}\n\n@media only screen and (max-width: 800px) {\n  .hyper_link[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n\n  .hpyer_title[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: center;\n  }\n\n  .hpyer_products[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-bottom: 30px;\n    position: relative;\n    text-align: center;\n    min-height: 900px;\n  }\n\n  .title_circle[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: white;\n    border-radius: 50%;\n    height: 220px;\n    width: 220px;\n    top: -60px;\n  }\n\n  .title_description[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    top: 40px;\n    background-color: #9abe64;\n    padding-top: 150px;\n    padding-bottom: 30px;\n  }\n\n  .rate[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .text-description[_ngcontent-%COMP%] {\n    color: white;\n    padding: 10px 20px;\n    font-weight: 500;\n  }\n\n  #hpyer_logo[_ngcontent-%COMP%] {\n    margin-top: 90px;\n    margin-left: 10px;\n    width: 180px;\n  }\n\n  agm-map[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n\n  .text-map[_ngcontent-%COMP%] {\n    width: 280px;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ucHJvZHVjdHMvbnByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUNBQUE7QUFBRjs7QUFHQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFBRTtFQUF5Qiw0QkFBQTtFQUN2QixjQUFBO0FBSUo7O0FBQUU7RUFBMEIsbUJBQUE7RUFDeEIsY0FBQTtBQUlKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUtBO0VBQ0UsYUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0VBRUEsb0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUFMRjs7QUFTQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBTkY7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBUEY7O0FBUUU7RUFDRSxZQUFBO0FBTko7O0FBVUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBUEY7O0FBUUU7RUFDRSxZQUFBO0FBTko7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBUEY7O0FBUUU7RUFDRSxZQUFBO0FBTko7O0FBV0E7RUFFRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0VBVEY7O0VBWUE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBVEY7O0VBWUE7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUFURjs7RUFhQTtJQUNFLFdBQUE7SUFFQSxvQkFBQTtJQUNBLGtCQUFBO0lBRUEsa0JBQUE7SUFDQSxpQkFBQTtFQVpGOztFQWVBO0lBQ0Usa0JBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBWkY7O0VBZUE7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxTQUFBO0lBQ0EseUJBQUE7SUFDQSxrQkFBQTtJQUNBLG9CQUFBO0VBWkY7O0VBZUE7SUFDRSxrQkFBQTtFQVpGOztFQWVBO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7RUFaRjs7RUFnQkE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQWJGOztFQWdCQTtJQUNFLGFBQUE7RUFiRjs7RUFnQkE7SUFDRSxZQUFBO0lBQ0EsWUFBQTtFQWJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25wcm9kdWN0cy9ucHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZWFyY2gtZm9ybS1maWVsZHMgPiBpbnB1dCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZHMgPiBidXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdlODQzO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXG4gICAgY29sb3I6ICAjNjBBOERDOztcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovICAgIFxuICB9XG4gIFxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICBjb2xvcjogICM2MEE4REM7XG4gICAgXG4gIH1cbiAgXG4gIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICBjb2xvcjogICM2MEE4REM7XG4gICAgXG4gIH1cblxuLnNlYXJjaC1pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgY29sb3I6ICM2MEE4REM7XG59XG5cbi5zZWFyY2gtZm9ybS1maWVsZHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLy8gd2lkdGg6IDcwJTs/XG59XG5cbi5zZWFyY2gtZm9ybS1oZWFkZXJ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvY2FtcGFpZ24tb2xkLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgXG59XG5cbiNzZWFyY2gtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuXG5cblxuLmh5cGVyX2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuXG59XG4uaHB5ZXJfdGl0bGV7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDM1MHB4O1xufVxuXG4uaHB5ZXJfcHJvZHVjdHN7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDM1MHB4KTtcbiAgcGFkZGluZzogNTBweCAwIDQwcHggNTBweDtcbn1cblxuLnRpdGxlIHtcbiAgd2lkdGg6IDMyMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFiZTY0O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBoZWlnaHQ6IDEyMDBweDtcbiAgbWluLWhlaWdodDogMTAwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZV9jaXJjbGV7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgd2lkdGg6IDMyMHB4O1xuICB0b3A6IC0xNDBweDtcbn1cblxuLnRpdGxlX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzIwcHg7XG4gIHRvcDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhYmU2NDtcbiAgcGFkZGluZy10b3A6IDE3MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnJhdGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtZGVzY3JpcHRpb257XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC8vIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBkaXJlY3Rpb246IGx0cjtcbiAgLy8gZm9udC1mYW1pbHk6IFwiYXJpYVwiO1xufVxuXG4jaHB5ZXJfbG9nbyB7XG4gIG1hcmdpbi10b3A6IDE0MHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnRleHQtbWFwIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbmRpdi5zY3JvbGxtZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zZWVtZXNhdmUtcHJvZHVjdHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJiMzg2O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uc2VlbWVzYXZlLWZlYXR1cmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaDQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uc2VlbWVzYXZlLXByb21vdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MmIzODY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoNCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIFxuICAuaHlwZXJfbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgfVxuICAuaHB5ZXJfdGl0bGV7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmhweWVyX3Byb2R1Y3Rze1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzlhYmU2NDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gaGVpZ2h0OiAxMjAwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDkwMHB4O1xuICB9XG5cbiAgLnRpdGxlX2NpcmNsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIHRvcDogLTYwcHg7XG4gIH1cblxuICAudGl0bGVfZGVzY3JpcHRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlhYmU2NDtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIH1cblxuICAucmF0ZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAudGV4dC1kZXNjcmlwdGlvbntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgLy8gZm9udC1mYW1pbHk6IFwiYXJpYVwiO1xuICB9XG5cbiAgI2hweWVyX2xvZ28ge1xuICAgIG1hcmdpbi10b3A6IDkwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gIC50ZXh0LW1hcCB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NproductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nproducts',
                templateUrl: './nproducts.component.html',
                styleUrls: ['./nproducts.component.scss']
            }]
    }], function () { return [{ type: src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/nstores/nstores.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nstores/nstores.component.ts ***!
  \*********************************************************/
/*! exports provided: NstoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NstoresComponent", function() { return NstoresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dao.service */ "./src/app/services/dao.service.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/panel/panel.component */ "./src/app/components/layout/panel/panel.component.ts");






class NstoresComponent {
    constructor(daoService) {
        this.daoService = daoService;
    }
    ngOnInit() {
        this.searchStores();
        this.retrieveNewToMarket();
        this.retrieveFeaturedProducts();
        this.retrievePromotion();
        $(".btn-shopping-list").css("display", "inline-block");
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
    retrievePromotion() {
        this.daoService.getPromotionProducts().subscribe((data) => {
            console.log("----- this is the getting promotion products -----");
            let result = JSON.parse(data);
            this.promotionProducts = result[0];
            if (this.promotionProducts.length > 300)
                this.promotionProducts = this.promotionProducts.slice(0, 300);
            console.log(this.promotionProducts);
        }, (error) => {
            console.log(error);
        });
    }
    retrieveFeaturedProducts() {
        this.daoService.getFeaturedProducts().subscribe((data) => {
            console.log("----- this is the getting featured products -----");
            let result = JSON.parse(data);
            this.featuredProducts = result[0];
            console.log(this.featuredProducts);
        }, (error) => {
            console.log(error);
        });
    }
    retrieveNewToMarket() {
        this.daoService.getNewToMarket().subscribe((data) => {
            if (data.success) {
                this.newProducts = data['data'];
            }
        }, (error) => {
            console.log(error);
        });
    }
    retrieveStores(lng, lat, radius) {
        // this.daoService.getAllStores(lng, lat, radius).subscribe((data) => {
        //   if (data.success) {
        //     this.stores = data['data'];
        //   }
        // }, (error) => {
        //   console.log(error);
        // });
        this.daoService.getAllStores().subscribe((data) => {
            console.log("--- getting all stores ----");
            // console.log(JSON.parse(data))
            let result = JSON.parse(data);
            this.stores = result[0];
            console.log(this.stores);
        }, (error) => {
            console.log(error);
        });
    }
    searchStores() {
        let loc = localStorage.getItem('temp-geo');
        console.log("----- this is the location for getting searchstores ------");
        console.log(loc);
        if (loc) {
            let lat = JSON.parse(loc.toString()).lat, lng = JSON.parse(loc.toString()).lng, radius = 50;
            this.retrieveStores(lng, lat, radius);
        }
    }
}
NstoresComponent.ɵfac = function NstoresComponent_Factory(t) { return new (t || NstoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"])); };
NstoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NstoresComponent, selectors: [["app-nstores"]], decls: 64, vars: 4, consts: [[1, "store-header"], [1, "search-form-header"], ["id", "search-text"], [1, "row"], [1, "col-md-3"], [1, "col-md-6"], [1, "search-form-fields"], [1, "fa", "fa-search", "icon", "search-icon"], ["type", "text", "id", "txtLandingAddress", "name", "Search", "onfocus", "initAutocomplete()", "placeholder", "Enter your address", 1, "form-control"], ["onclick", "reverseGeocodeAddress(document.getElementById('txtLandingAddress').value)"], [1, "col-md-2"], ["thumbLabel", "", "tickInterval", "10", "min", "1", "max", "1000", 3, "displayWith"], [1, "for-search-results"], [1, "for-search-results-container"], [1, "for-search-results-content"], [1, "outcome-container"], [1, "outcome-body"], [1, "new-market", "outcome-card"], [1, "new-market-header", "outcome-card-header"], [1, "new-market-body", "outcome-card-body"], ["ngClass", "hot-deals"], ["ngClass", "section-title", 1, "text-center"], ["ngClass", "new-products", "panelTitle", "New To Market", "panelClass", "new-products", 3, "panelData"], [2, "height", "15px", "background-color", "red"], ["ngClass", "featured", "panelTitle", "Featured Products", "panelClass", "featured", 3, "panelData"], [1, "current-promotions", "outcome-card"], ["id", "featured-products", 1, "current-promotions-body", "outcome-card-body"], [1, "for-stores-container"], ["ngClass", "stores-container"], [1, "ratings-content"], [1, "for-rating"], [1, "ratings-header"], [1, "ratings-body"], [1, "ratings-stars"], ["onclick", "setRating(event, 1)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                  16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                    15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                    6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                    0l2.184 4.327\n                                    4.898.696c.441.062.612.636.283.95l-3.523\n                                    3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                    13.187l-4.389 2.256z"], ["onclick", "setRating(event, 2)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                    16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                      15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                      6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                      0l2.184 4.327\n                                      4.898.696c.441.062.612.636.283.95l-3.523\n                                      3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                      13.187l-4.389 2.256z"], ["onclick", "setRating(event, 3)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                      16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                        15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                        6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                        0l2.184 4.327\n                                        4.898.696c.441.062.612.636.283.95l-3.523\n                                        3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                        13.187l-4.389 2.256z"], ["onclick", "setRating(event, 4)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                        16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                          15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                          6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                          0l2.184 4.327\n                                          4.898.696c.441.062.612.636.283.95l-3.523\n                                          3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                          13.187l-4.389 2.256z"], ["onclick", "setRating(event ,5)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                          16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                            15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                            6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                            0l2.184 4.327\n                                            4.898.696c.441.062.612.636.283.95l-3.523\n                                            3.356.83\n                                            4.73c.078.443-.36.79-.746.592L8\n                                            13.187l-4.389 2.256z"], [1, "review"], [1, "form-group"], ["placeholder", "Add a review", "id", "review", 1, "form-control"], [1, "ratings-footer"], ["onclick", "saveRatings()", 1, "btn-save-rating"], ["onclick", "closeRating()"], ["panelTitle", "Current Promotions", "panelClass", "stores", 3, "panelData"]], template: function NstoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Find promotions and hot deals in your area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-slider", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hot Deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-panel", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-panel", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Store Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "svg", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "svg", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "svg", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "svg", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "path", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "fieldset", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-panel", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx.formatLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.promotionProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.featuredProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.stores);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"]], styles: [".search-form-fields[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-left: 30px;\n  border-top-left-radius: 6px !important;\n  border-bottom-left-radius: 6px !important;\n  display: inline;\n  width: 70%;\n}\n\n.search-form-fields[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline;\n  background-color: #f7e843;\n  font-size: 14px;\n  font-weight: bold;\n  height: 30px;\n  text-align: center;\n  align-items: center;\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n  box-shadow: none;\n  width: 30%;\n  padding: 0;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #60A8DC;\n}\n\n.search-form-fields[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  margin-top: 10px;\n}\n\n.search-form-header[_ngcontent-%COMP%] {\n  bottom: 10px;\n  text-align: center;\n  margin: auto;\n  width: 100%;\n  color: white;\n  font-size: 0.5em;\n  background-image: url('campaign-top.jpg');\n  background-size: cover;\n  min-height: 400px;\n  padding-top: 300px;\n  padding-bottom: 20px;\n}\n\n#search-text[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  font-size: 12px;\n}\n\nmat-slider[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-radius: 6px;\n  height: 30px;\n  min-width: 128px;\n  \n  background-color: #60A8DC;\n}\n\n.mat-slider-wrapper[_ngcontent-%COMP%] {\n  height: 2px;\n  top: 10px;\n  left: 0px;\n  right: 0px;\n}\n\n.mat-slider-track-wrapper[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 100%;\n  background-color: white;\n}\n\n.for-search-results[_ngcontent-%COMP%] {\n  background: none;\n  background-color: #89c33f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uc3RvcmVzL25zdG9yZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFMQTtFQUFnQix5Q0FBQTtFQUNaLGNBQUE7RUFDQSxVQUFBO0VBQVksWUFBQTtBQUdoQjs7QUFBRTtFQUF5Qiw0QkFBQTtFQUN2QixjQUFBO0FBSUo7O0FBQUU7RUFBMEIsbUJBQUE7RUFDeEIsY0FBQTtBQUlKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHSjs7QUFBQTtFQUNJLFdBQUE7QUFHSjs7QUFBRTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDRixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBR0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25zdG9yZXMvbnN0b3Jlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtZm9ybS1maWVsZHMgPiBpbnB1dCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkcyA+IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2U4NDM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB3aWR0aDogMzAlO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgICBjb2xvcjogICM2MEE4REM7O1xuICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi8gICAgXG4gIH1cbiAgXG4gIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICAgIGNvbG9yOiAgIzYwQThEQztcbiAgICBcbiAgfVxuICBcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICAgIGNvbG9yOiAgIzYwQThEQztcbiAgICBcbiAgfVxuXG4uc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzYwQThEQztcbn1cblxuLnNlYXJjaC1mb3JtLWZpZWxkcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnNlYXJjaC1mb3JtLWhlYWRlcntcbiAgICBib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9jYW1wYWlnbi10b3AuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBwYWRkaW5nLXRvcDogMzAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbiNzZWFyY2gtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxubWF0LXNsaWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1pbi13aWR0aDogMTI4cHg7XG4gICAgLyogY29sb3I6IGdyZWVuOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MEE4REM7XG4gICAgXG4gICAgXG59XG5cbi5tYXQtc2xpZGVyLXdyYXBwZXIge1xuICAgIGhlaWdodDogMnB4O1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuLm1hdC1zbGlkZXItdHJhY2std3JhcHBlciB7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5mb3Itc2VhcmNoLXJlc3VsdHMge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICM4OWMzM2Y7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NstoresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nstores',
                templateUrl: './nstores.component.html',
                styleUrls: ['./nstores.component.scss']
            }]
    }], function () { return [{ type: src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/LazyImg/lazy-img.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/shared/LazyImg/lazy-img.directive.ts ***!
  \*****************************************************************/
/*! exports provided: LazyImgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImgDirective", function() { return LazyImgDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LazyImgDirective {
    constructor({ nativeElement }) {
        const supports = 'loading' in HTMLImageElement.prototype;
        if (supports) {
            nativeElement.setAttribute('loading', 'lazy');
        }
    }
}
LazyImgDirective.ɵfac = function LazyImgDirective_Factory(t) { return new (t || LazyImgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LazyImgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyImgDirective, selectors: [["img"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyImgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'img'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NumberTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberTrackerComponent", function() { return NumberTrackerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class NumberTrackerComponent {
    constructor() {
        this.countInterval = 2.5;
        this.currentNumber = 0;
        this._counterSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._counterSub$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(endRange => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, this.countInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(this.positiveOrNegative(endRange, this.currentNumber)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.currentNumber), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((acc, curr) => acc + curr), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(this.isApproachingRange(endRange, this.currentNumber)));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy$))
            .subscribe((val) => this.currentNumber = val);
    }
    set end(endRange) {
        this._counterSub$.next(endRange);
    }
    positiveOrNegative(endRange, currentNumber) {
        return endRange > currentNumber ? 1 : -1;
    }
    isApproachingRange(endRange, currentNumber) {
        return endRange > currentNumber
            ? val => val <= endRange
            : val => val >= endRange;
    }
    ngOnDestroy() {
        this._onDestroy$.next();
        this._onDestroy$.complete();
    }
}
NumberTrackerComponent.ɵfac = function NumberTrackerComponent_Factory(t) { return new (t || NumberTrackerComponent)(); };
NumberTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NumberTrackerComponent, selectors: [["number-tracker"]], inputs: { end: "end", countInterval: "countInterval" }, decls: 1, vars: 1, template: function NumberTrackerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentNumber);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberTrackerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'number-tracker',
                template: `{{ currentNumber }}`
            }]
    }], function () { return []; }, { end: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], countInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/auth-service/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/auth-service/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth-service/auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (this.authService._isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-service/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/auth-service/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








const baseUrl = 'https://api.seemesave.com/api/v1';
const apiUrl = 'http://svcseemesave.us-east-2.elasticbeanstalk.com/';
const StoreApiLists = {
    getAllStores: 'getAllStores.php',
    getCategories: 'getCategories.php',
    getCities: 'getCities.php',
    getFeaturedProducts: 'getFeaturedProducts.php',
    getNearestStores: 'getNearestStores.php',
    getNumberOfPromotionProductsByStore: 'getNumberOfPromotionProductsByStore.php',
    getPromotionCountByVendor: 'getPromotionCountByVendor.php',
    getPromotionProductsByLocation: 'getPromotionProductsByLocation.php',
    GetPromotionProductsByProductID: 'GetPromotionProductsByProductID.php',
    getStorePromotionsByStore: 'getStorePromotionsByStore.php',
    getStorePromotionsByStoreID: 'getStorePromotionsByStoreID.php',
    getUserProfileByUserID: 'getUserProfileByUserID.php',
    sendemail: 'sendemail.php.php',
    sendsms: 'sendsms.php.php',
    sendWhatsApp: 'sendWhatsApp.php',
    userRegistration: 'userRegistration.php',
    generatePasswordToken: 'generatePasswordToken.php',
    getPromotionProductsByID: 'getPromotionProductsByID.php',
    getPromotionsByProduct: 'getPromotionsByProduct.php',
    getStoreProducts: 'getStoreProducts.php',
    getStorePromotions: 'getStorePromotions.php',
    getStorePromotionsByID: 'getStorePromotionsByID.php',
    getPromotionProducts: 'getPromotionProducts.php',
};
class AuthService {
    constructor(http, cookieService, router) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.isLoggedIn = false;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // check the handle error
    // this is the check the error when result of api
    // there is the client or server side error detect part
    handleError(error) {
        let msg = '';
        console.log("----- this is the error -----");
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = `client server : ${error.error.message}`;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
    // register
    register(data) {
        let url = `${apiUrl}userRegistration.php`;
        return this.postApi(url, data);
    }
    // login
    login(data) {
        let url = `${apiUrl}login.php`;
        return this.postApi(url, data);
    }
    /// get user profile
    // get userprofie by user id
    getUserProfileByUserID(userid) {
        // ----- userid is email of user -----
        let url = `${apiUrl}${StoreApiLists.getUserProfileByUserID}?userid=${userid}`;
        return this.getApi(url);
    }
    // generate password token
    // generate password
    generatePasswordToken(email) {
        let url = `${apiUrl}${StoreApiLists.generatePasswordToken}?email=${email}`;
        return this.getApi(url);
    }
    postApi(url, data) {
        return this.http.post(url, data, { headers: this.headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getApi(url) {
        return this.http.get(url, { headers: this.headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    _login(username, password) {
        const user = {
            username: username,
            password: password
        };
        return this.http.post(baseUrl + '/account/login', user);
    }
    _logout() {
        try {
            if (this.cookieService.check('guid')) {
                const user = JSON.parse(this.cookieService.get('guid'));
                user.success = false;
                this.cookieService.set('guid', JSON.stringify(user));
            }
            this.cookieService.deleteAll();
            localStorage.clear();
            this.router.navigate(['/account/login']);
        }
        catch (error) {
            console.log('Error: ', error);
        }
    }
    _isAuthenticated() {
        const _isAuth = localStorage.getItem('currentUser');
        if (_isAuth)
            return true;
        else
            false;
    }
    _register(user) {
        return this.http.post(baseUrl + '/account/register', user);
    }
    _resetPassword(email) {
        const data = {
            username: email
        };
        console.log(data);
        return this.http.post(baseUrl + '/account/reset-old-password', JSON.stringify(data));
    }
    _getToken() {
        return localStorage.getItem('userID');
    }
    _changePassword(username, password, token) {
        const data = {
            username: username,
            password: password,
            token: token
        };
        return this.http.post(baseUrl + '/account/change-password', data);
    }
    _getUserProfile(guid) {
        return this.http.get(baseUrl + '/account/profile/' + guid);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth-service/token-interceptor.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/auth-service/token-interceptor.service.ts ***!
  \********************************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth-service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class TokenInterceptorService {
    constructor(injector, auth, router) {
        this.injector = injector;
        this.auth = auth;
        this.router = router;
    }
    intercept(request, next) {
        let authReq = request;
        if (this.auth._getToken() != null) {
            authReq = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth._getToken()}`
                }
            });
        }
        return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                console.log(err);
                console.log('req url :: ' + request.url);
                if (err.status === 401) {
                    this.router.navigate(['/login']);
                }
            }
        }));
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/dao.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/dao.service.ts ***!
  \*****************************************/
/*! exports provided: DaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaoService", function() { return DaoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








const baseUrl = 'https://api.seemesave.com/api/v1';
const apiUrl = 'http://svcseemesave.us-east-2.elasticbeanstalk.com/';
const StoreApiLists = {
    getAllStores: 'getAllStores.php',
    getCategories: 'getCategories.php',
    getCities: 'getCities.php',
    getFeaturedProducts: 'getFeaturedProducts.php',
    getNearestStores: 'getNearestStores.php',
    getNumberOfPromotionProductsByStore: 'getNumberOfPromotionProductsByStore.php',
    getPromotionCountByVendor: 'getPromotionCountByVendor.php',
    getPromotionProductsByLocation: 'getPromotionProductsByLocation.php',
    GetPromotionProductsByProductID: 'GetPromotionProductsByProductID.php',
    getStorePromotionsByStore: 'getStorePromotionsByStore.php',
    getStorePromotionsByStoreID: 'getStorePromotionsByStoreID.php',
    getUserProfileByUserID: 'getUserProfileByUserID.php',
    sendemail: 'sendemail.php',
    sendsms: 'sendsms.php',
    sendWhatsApp: 'sendWhatsApp.php',
    userRegistration: 'userRegistration.php',
    generatePasswordToken: 'generatePasswordToken.php',
    getPromotionProductsByID: 'getPromotionProductsByID.php',
    getPromotionsByProduct: 'getPromotionsByProduct.php',
    getStoreProducts: 'getStoreProducts.php',
    getStorePromotions: 'getStorePromotions.php',
    getStorePromotionsByID: 'getStorePromotionsByID.php',
    getPromotionProducts: 'getPromotionProducts.php',
    getNewToMarketProducts: 'getNewToMarketProducts.php',
};
class DaoService {
    constructor(http, router, cookieService) {
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // check the handle error
    // this is the check the error when result of api
    // there is the client or server side error detect part
    handleError(error) {
        let msg = '';
        console.log("----- this is the error -----");
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = `client server : ${error.error.message}`;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    }
    postApi(url, data) {
        return this.http.post(url, data, { headers: this.headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getApi(url) {
        return this.http.get(url, { headers: this.headers, responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ///------- THIS IS THE GET POST FUNCTION -------------//
    // GET ALL STORES
    getAllStores() {
        let url = `${apiUrl}${StoreApiLists.getAllStores}`;
        return this.getApi(url);
    }
    // get categories
    getCategoreis() {
        let url = `${apiUrl}${StoreApiLists.getCategories}`;
        return this.getApi(url);
    }
    // get cities
    getCities() {
        let url = `${apiUrl}${StoreApiLists.getCities}`;
        return this.getApi(url);
    }
    // get featured products
    getFeaturedProducts() {
        let url = `${apiUrl}${StoreApiLists.getFeaturedProducts}`;
        return this.getApi(url);
    }
    // get neareststores
    getNearestStores(address, city) {
        let url = `${apiUrl}${StoreApiLists.getNearestStores}?address=${address}&city=${city}`;
        return this.getApi(url);
    }
    // get numberof promostion products by store
    getNumberOfPromotionProductsByStore(vendcd) {
        let url = `${apiUrl}${StoreApiLists.getNumberOfPromotionProductsByStore}?vendcd=${vendcd}`;
        return this.getApi(url);
    }
    // get promostion countby vendor
    getPromotionCountByVendor(vendcd) {
        let url = `${apiUrl}${StoreApiLists.getPromotionCountByVendor}?vendcd=${vendcd}`;
        return this.getApi(url);
    }
    // get promotion products by location
    getPromotionProductsByLocation(location) {
        /// ---- location = user is in ----- city name?
        let url = `${apiUrl}${StoreApiLists.getPromotionProductsByLocation}?location=${location}`;
        return this.getApi(url);
    }
    // get promotion products by productid
    GetPromotionProductsByProductID(prodid) {
        let url = `${apiUrl}${StoreApiLists.GetPromotionProductsByProductID}?prodid=${prodid}`;
        return this.getApi(url);
    }
    // get store promotion by store
    getStorePromotionsByStore(vendcd) {
        let url = `${apiUrl}${StoreApiLists.getStorePromotionsByStore}?vendcd=${vendcd}`;
        return this.getApi(url);
    }
    // get store promotion by storeid
    getStorePromotionsByStoreID(vendcd) {
        let url = `${apiUrl}${StoreApiLists.getStorePromotionsByStoreID}?vendcd=${vendcd}`;
        return this.getApi(url);
    }
    // get userprofie by user id
    getUserProfileByUserID(userid) {
        // ----- userid is email of user -----
        let url = `${apiUrl}${StoreApiLists.getUserProfileByUserID}?userid=${userid}`;
        return this.getApi(url);
    }
    // send email
    sendemail(data) {
        let url = `${apiUrl}${StoreApiLists.sendemail}`;
        return this.postApi(url, data);
    }
    // send sms
    sendsms(data) {
        let url = `${apiUrl}${StoreApiLists.sendsms}`;
        return this.postApi(url, data);
    }
    // send whats app
    sendWhatsApp(data) {
        let url = `${apiUrl}${StoreApiLists.sendWhatsApp}`;
        return this.postApi(url, data);
    }
    // get promotion products by id
    getPromotionProductsByID(promo) {
        let url = `${apiUrl}${StoreApiLists.getPromotionProductsByID}?promo=${promo}`;
        return this.getApi(url);
    }
    // get promotion by product
    getPromotionsByProduct(prodcd) {
        let url = `${apiUrl}${StoreApiLists.getPromotionsByProduct}?prodcd=${prodcd}`;
        return this.getApi(url);
    }
    // get store products
    getStoreProducts(vendcd) {
        let url = `${apiUrl}${StoreApiLists.getStoreProducts}?vendcd=${vendcd}`;
        return this.getApi(url);
    }
    // get store promotion
    getStorePromotions() {
        let url = `${apiUrl}${StoreApiLists.getStorePromotions}`;
        return this.getApi(url);
    }
    // get store promotion by id
    getStorePromotionsByID(promo) {
        let url = `${apiUrl}${StoreApiLists.getStorePromotionsByID}?promo=${promo}`;
        return this.getApi(url);
    }
    // get promotion products
    getPromotionProducts() {
        let url = `${apiUrl}${StoreApiLists.getPromotionProducts}`;
        return this.getApi(url);
    }
    // getNewToMarketProducts
    getNewToMarketProducts() {
        let url = `${apiUrl}${StoreApiLists.getNewToMarketProducts}`;
        return this.getApi(url);
    }
    // getFeaturedProducts(): Observable<any> {
    //   let url = baseUrl + '/products/featured/';
    //   return this.http.get(url);
    // }
    getNewToMarket() {
        let url = baseUrl + '/products/new-to-market/';
        return this.http.get(url);
    }
    // getAllStores(lng:any,lat:any,radius:any): Observable<any> {
    //   let url = `${baseUrl}/stores?lng=${lng}&lat=${lat}&radius=${radius}`,
    //   fullAddress = localStorage.getItem('full-address');
    //   this.cookieService.set('sms-address', fullAddress);
    //   return this.http.get(url);
    // }
    getStoreDetails(id) {
        let url = `${baseUrl}/stores/details/${id}`;
        return this.http.get(url);
    }
    // getStoreProducts(id): Observable<any> {
    //   let url = `${baseUrl}/stores/products/${id}`;
    //   return this.http.get(url);
    // }
    // getStorePromotions(id): Observable<any> {
    //   let url = `${baseUrl}/promotions/${id}`;
    //   return this.http.get(url);
    // }
    // getPromotionProducts(id): Observable<any> {
    //   let url = `${baseUrl}/promotions/products/${id}`;
    //   return this.http.get(url);
    // }
    //------------------------------------------------------//
    create(data) {
        return this.http.post(baseUrl, data);
    }
    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }
    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
    deleteAll() {
        return this.http.delete(baseUrl);
    }
    findByTitle(title) {
        return this.http.get(`${baseUrl}?title=${title}`);
    }
}
DaoService.ɵfac = function DaoService_Factory(t) { return new (t || DaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"])); };
DaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DaoService, factory: DaoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");



class NotificationService {
    constructor(toastr) {
        this.toastr = toastr;
    }
    showSuccess(message, title) {
        this.toastr.success(message, title);
    }
    showError(message, title) {
        this.toastr.error(message, title);
    }
    showInfo(message, title) {
        this.toastr.info(message, title);
    }
    showWarning(message, title) {
        this.toastr.warning(message, title);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
NotificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    globalImageUrl: 'https://seemesave-web.fra1.digitaloceanspaces.com/media/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ftf/Documents/projects/angular_seemesave/52_angular_apis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map