(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/layout/page-not-found/page-not-found.component */
      "./src/app/components/layout/page-not-found/page-not-found.component.ts");
      /* harmony import */


      var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/account/login/login.component */
      "./src/app/components/account/login/login.component.ts");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/home/home.component */
      "./src/app/components/home/home.component.ts");
      /* harmony import */


      var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/layout/layout.component */
      "./src/app/components/layout/layout.component.ts");
      /* harmony import */


      var _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/account/register/register.component */
      "./src/app/components/account/register/register.component.ts");
      /* harmony import */


      var _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/account/reset-password/reset-password.component */
      "./src/app/components/account/reset-password/reset-password.component.ts");
      /* harmony import */


      var _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/account/profile/profile.component */
      "./src/app/components/account/profile/profile.component.ts");
      /* harmony import */


      var _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/account/shopping-lists/shopping-lists.component */
      "./src/app/components/account/shopping-lists/shopping-lists.component.ts");
      /* harmony import */


      var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/home/contact/contact.component */
      "./src/app/components/home/contact/contact.component.ts");
      /* harmony import */


      var _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/home/about/about.component */
      "./src/app/components/home/about/about.component.ts");
      /* harmony import */


      var _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/home/stores/details/details.component */
      "./src/app/components/home/stores/details/details.component.ts");
      /* harmony import */


      var _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/home/help/help.component */
      "./src/app/components/home/help/help.component.ts");
      /* harmony import */


      var _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/home/faq/faq.component */
      "./src/app/components/home/faq/faq.component.ts");
      /* harmony import */


      var _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/home/careers/careers.component */
      "./src/app/components/home/careers/careers.component.ts");
      /* harmony import */


      var _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/home/terms/terms.component */
      "./src/app/components/home/terms/terms.component.ts");
      /* harmony import */


      var _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/account/vendor-signup/vendor-signup.component */
      "./src/app/components/account/vendor-signup/vendor-signup.component.ts");
      /* harmony import */


      var _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/account/change-password/change-password.component */
      "./src/app/components/account/change-password/change-password.component.ts");
      /* harmony import */


      var _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./services/auth-service/auth.guard */
      "./src/app/services/auth-service/auth.guard.ts");
      /* harmony import */


      var _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/home/privacy/privacy.component */
      "./src/app/components/home/privacy/privacy.component.ts");
      /* harmony import */


      var _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/home/vendor-terms/vendor-terms.component */
      "./src/app/components/home/vendor-terms/vendor-terms.component.ts");

      var routes = [{
        path: '',
        component: _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"],
        children: [{
          path: '',
          component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
        }, {
          path: 'about',
          component: _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"]
        }, {
          path: 'contact',
          component: _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
        }, {
          path: 'store/:guid',
          component: _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
          canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
        }, {
          path: 'stores/details',
          component: _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_12__["DetailsComponent"],
          canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
        }, {
          path: 'account',
          component: _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
          canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
        }, {
          path: 'account/login',
          component: _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
        }, {
          path: 'account/profile',
          component: _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
          canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
        }, {
          path: 'account/reset-password',
          component: _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]
        }, {
          path: 'account/register',
          component: _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
        }, {
          path: 'account/shopping-lists',
          component: _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingListsComponent"],
          canActivate: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
        }, {
          path: 'account/become-a-vendor',
          component: _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_17__["VendorSignupComponent"]
        }, {
          path: 'account/change-password',
          component: _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_18__["ChangePasswordComponent"]
        }, {
          path: 'careers',
          component: _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_15__["CareersComponent"]
        }, {
          path: 'help',
          component: _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_13__["HelpComponent"]
        }, {
          path: 'faq',
          component: _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_14__["FaqComponent"]
        }, {
          path: 'terms',
          component: _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_16__["TermsComponent"]
        }, {
          path: 'privacy',
          component: _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_20__["PrivacyComponent"]
        }, {
          path: 'vendor-terms-conditions',
          component: _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_21__["VendorTermsComponent"]
        }, {
          path: '**',
          component: _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]
        }]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        providers: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          onSameUrlNavigation: 'reload'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              onSameUrlNavigation: 'reload'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.router = router;
          this.title = 'SeeMeSave';
          this.loading = true;
          router.events.subscribe(function (routerEvent) {
            _this.checkRouterEvent(routerEvent);
          });
        } // Show page loader when waiting for routes to load


        _createClass(AppComponent, [{
          key: "checkRouterEvent",
          value: function checkRouterEvent(routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              this.loading = true;
            }

            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
              this.loading = true;
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/slider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/layout/layout.component */
      "./src/app/components/layout/layout.component.ts");
      /* harmony import */


      var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/layout/header/header.component */
      "./src/app/components/layout/header/header.component.ts");
      /* harmony import */


      var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/layout/footer/footer.component */
      "./src/app/components/layout/footer/footer.component.ts");
      /* harmony import */


      var _components_layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/layout/landing/landing.component */
      "./src/app/components/layout/landing/landing.component.ts");
      /* harmony import */


      var _components_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/shared/number-tracker-component/number-tracker-component.component */
      "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts");
      /* harmony import */


      var _components_layout_site_stats_site_stats_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/layout/site-stats/site-stats.component */
      "./src/app/components/layout/site-stats/site-stats.component.ts");
      /* harmony import */


      var _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/account/login/login.component */
      "./src/app/components/account/login/login.component.ts");
      /* harmony import */


      var _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/layout/page-not-found/page-not-found.component */
      "./src/app/components/layout/page-not-found/page-not-found.component.ts");
      /* harmony import */


      var _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/home/home.component */
      "./src/app/components/home/home.component.ts");
      /* harmony import */


      var _components_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/campaigns/header-campaign.component */
      "./src/app/components/campaigns/header-campaign.component.ts");
      /* harmony import */


      var _components_campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/campaigns/footer-campaign.component */
      "./src/app/components/campaigns/footer-campaign.component.ts");
      /* harmony import */


      var _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/account/register/register.component */
      "./src/app/components/account/register/register.component.ts");
      /* harmony import */


      var _components_home_stores_stores_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/home/stores/stores.component */
      "./src/app/components/home/stores/stores.component.ts");
      /* harmony import */


      var _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/account/reset-password/reset-password.component */
      "./src/app/components/account/reset-password/reset-password.component.ts");
      /* harmony import */


      var _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/account/profile/profile.component */
      "./src/app/components/account/profile/profile.component.ts");
      /* harmony import */


      var _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/account/shopping-lists/shopping-lists.component */
      "./src/app/components/account/shopping-lists/shopping-lists.component.ts");
      /* harmony import */


      var _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/home/contact/contact.component */
      "./src/app/components/home/contact/contact.component.ts");
      /* harmony import */


      var _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./components/home/about/about.component */
      "./src/app/components/home/about/about.component.ts");
      /* harmony import */


      var _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./components/home/help/help.component */
      "./src/app/components/home/help/help.component.ts");
      /* harmony import */


      var _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./components/home/faq/faq.component */
      "./src/app/components/home/faq/faq.component.ts");
      /* harmony import */


      var _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./components/home/careers/careers.component */
      "./src/app/components/home/careers/careers.component.ts");
      /* harmony import */


      var _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/home/terms/terms.component */
      "./src/app/components/home/terms/terms.component.ts");
      /* harmony import */


      var _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./components/account/vendor-signup/vendor-signup.component */
      "./src/app/components/account/vendor-signup/vendor-signup.component.ts");
      /* harmony import */


      var _components_layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./components/layout/panel/panel.component */
      "./src/app/components/layout/panel/panel.component.ts");
      /* harmony import */


      var _components_layout_panel_templates_products_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./components/layout/panel/templates/products.component */
      "./src/app/components/layout/panel/templates/products.component.ts");
      /* harmony import */


      var _components_layout_panel_templates_store_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./components/layout/panel/templates/store.component */
      "./src/app/components/layout/panel/templates/store.component.ts");
      /* harmony import */


      var _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./components/home/stores/details/details.component */
      "./src/app/components/home/stores/details/details.component.ts");
      /* harmony import */


      var _components_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
      /*! ./components/shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
      /*! ng-recaptcha */
      "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
      /*! ngx-google-places-autocomplete */
      "./node_modules/ngx-google-places-autocomplete/__ivy_ngcc__/bundles/ngx-google-places-autocomplete.umd.js");
      /* harmony import */


      var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_53__);
      /* harmony import */


      var _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
      /*! ./components/account/change-password/change-password.component */
      "./src/app/components/account/change-password/change-password.component.ts");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
      /* harmony import */


      var _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
      /*! ./services/auth-service/auth.guard */
      "./src/app/services/auth-service/auth.guard.ts");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
      /*! ./services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _services_auth_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
      /*! ./services/auth-service/token-interceptor.service */
      "./src/app/services/auth-service/token-interceptor.service.ts");
      /* harmony import */


      var _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
      /*! ./components/home/counter/counter.component */
      "./src/app/components/home/counter/counter.component.ts");
      /* harmony import */


      var _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
      /*! ./components/home/privacy/privacy.component */
      "./src/app/components/home/privacy/privacy.component.ts");
      /* harmony import */


      var _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
      /*! ./components/home/vendor-terms/vendor-terms.component */
      "./src/app/components/home/vendor-terms/vendor-terms.component.ts"); //----------------------------------------\MaterialModules\----------------------------------------//
      //----------------------------------------App Components----------------------------------------//
      //----------------------------------------\App Components\----------------------------------------//


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_50__["CookieService"], {
          provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_52__["RECAPTCHA_V3_SITE_KEY"],
          useValue: '6LfeU8sZAAAAADza5HAu55lCP8QS6TDdmllpnfv3'
        }, _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_56__["AuthGuard"], _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_57__["AuthService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
          useClass: _services_auth_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_58__["TokenInterceptorService"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_48__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_49__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_52__["RecaptchaV3Module"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_53__["GooglePlaceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_55__["AutocompleteLibModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _agm_core__WEBPACK_IMPORTED_MODULE_51__["AgmCoreModule"].forRoot({
          apiKey: 'AIzaSyDb3oLDTkoVpLzE4PxZ0PL1ENW8rVI7OU4'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__["LayoutComponent"], _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"], _components_layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_23__["LandingComponent"], _components_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_24__["NumberTrackerComponent"], _components_layout_site_stats_site_stats_component__WEBPACK_IMPORTED_MODULE_25__["SiteStatsComponent"], _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"], _components_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_29__["HeaderCampaignComponent"], _components_campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_30__["FooterCampaignComponent"], _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_31__["RegisterComponent"], _components_home_stores_stores_component__WEBPACK_IMPORTED_MODULE_32__["StoresComponent"], _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["ResetPasswordComponent"], _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"], _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_35__["ShoppingListsComponent"], _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_36__["ContactComponent"], _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_37__["AboutComponent"], _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_38__["HelpComponent"], _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_39__["FaqComponent"], _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_41__["TermsComponent"], _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_42__["VendorSignupComponent"], _components_layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_43__["PanelComponent"], _components_layout_panel_templates_products_component__WEBPACK_IMPORTED_MODULE_44__["ProductsPanelComponent"], _components_layout_panel_templates_store_component__WEBPACK_IMPORTED_MODULE_45__["StorePanelComponent"], _components_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_47__["LazyImgDirective"], _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_46__["DetailsComponent"], _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_40__["CareersComponent"], _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_54__["ChangePasswordComponent"], _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_59__["CounterComponent"], _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_60__["PrivacyComponent"], _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_61__["VendorTermsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_48__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_49__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_52__["RecaptchaV3Module"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_53__["GooglePlaceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_55__["AutocompleteLibModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _agm_core__WEBPACK_IMPORTED_MODULE_51__["AgmCoreModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_20__["LayoutComponent"], _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"], _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_21__["HeaderComponent"], _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"], _components_layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_23__["LandingComponent"], _components_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_24__["NumberTrackerComponent"], _components_layout_site_stats_site_stats_component__WEBPACK_IMPORTED_MODULE_25__["SiteStatsComponent"], _components_account_login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"], _components_layout_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_27__["PageNotFoundComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"], _components_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_29__["HeaderCampaignComponent"], _components_campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_30__["FooterCampaignComponent"], _components_account_register_register_component__WEBPACK_IMPORTED_MODULE_31__["RegisterComponent"], _components_home_stores_stores_component__WEBPACK_IMPORTED_MODULE_32__["StoresComponent"], _components_account_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["ResetPasswordComponent"], _components_account_profile_profile_component__WEBPACK_IMPORTED_MODULE_34__["ProfileComponent"], _components_account_shopping_lists_shopping_lists_component__WEBPACK_IMPORTED_MODULE_35__["ShoppingListsComponent"], _components_home_contact_contact_component__WEBPACK_IMPORTED_MODULE_36__["ContactComponent"], _components_home_about_about_component__WEBPACK_IMPORTED_MODULE_37__["AboutComponent"], _components_home_help_help_component__WEBPACK_IMPORTED_MODULE_38__["HelpComponent"], _components_home_faq_faq_component__WEBPACK_IMPORTED_MODULE_39__["FaqComponent"], _components_home_terms_terms_component__WEBPACK_IMPORTED_MODULE_41__["TermsComponent"], _components_account_vendor_signup_vendor_signup_component__WEBPACK_IMPORTED_MODULE_42__["VendorSignupComponent"], _components_layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_43__["PanelComponent"], _components_layout_panel_templates_products_component__WEBPACK_IMPORTED_MODULE_44__["ProductsPanelComponent"], _components_layout_panel_templates_store_component__WEBPACK_IMPORTED_MODULE_45__["StorePanelComponent"], _components_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_47__["LazyImgDirective"], _components_home_stores_details_details_component__WEBPACK_IMPORTED_MODULE_46__["DetailsComponent"], _components_home_careers_careers_component__WEBPACK_IMPORTED_MODULE_40__["CareersComponent"], _components_account_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_54__["ChangePasswordComponent"], _components_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_59__["CounterComponent"], _components_home_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_60__["PrivacyComponent"], _components_home_vendor_terms_vendor_terms_component__WEBPACK_IMPORTED_MODULE_61__["VendorTermsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_48__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_49__["BrowserAnimationsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_52__["RecaptchaV3Module"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_53__["GooglePlaceModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_55__["AutocompleteLibModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _agm_core__WEBPACK_IMPORTED_MODULE_51__["AgmCoreModule"].forRoot({
              apiKey: 'AIzaSyDb3oLDTkoVpLzE4PxZ0PL1ENW8rVI7OU4'
            })],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_50__["CookieService"], {
              provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_52__["RECAPTCHA_V3_SITE_KEY"],
              useValue: '6LfeU8sZAAAAADza5HAu55lCP8QS6TDdmllpnfv3'
            }, _services_auth_service_auth_guard__WEBPACK_IMPORTED_MODULE_56__["AuthGuard"], _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_57__["AuthService"], {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
              useClass: _services_auth_service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_58__["TokenInterceptorService"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/change-password/change-password.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/components/account/change-password/change-password.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: ChangePasswordComponent */

    /***/
    function srcAppComponentsAccountChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
        return ChangePasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../campaigns/header-campaign.component */
      "./src/app/components/campaigns/header-campaign.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function ChangePasswordComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " User unsuccessfully changed password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ChangePasswordComponent = /*#__PURE__*/function () {
        function ChangePasswordComponent(router, cookieService, authService) {
          _classCallCheck(this, ChangePasswordComponent);

          this.router = router;
          this.cookieService = cookieService;
          this.authService = authService;
          this.success = true;
        }

        _createClass(ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "_changePassword",
          value: function _changePassword() {
            var _this2 = this;

            console.log(this.username, this.password, this.token);

            this.authService._changePassword(this.username, this.password, this.token).subscribe(function (res) {
              console.log(res);

              _this2.cookieService.set('changePassword', JSON.stringify(res));

              var reset = JSON.parse(_this2.cookieService.get('changePassword'));
              var success = reset.success;

              if (success) {
                _this2.success = true;
                setTimeout(function () {
                  _this2.cookieService["delete"]('changePassword');

                  _this2.router.navigate(['/account/login']);
                }, 3000);
              } else {
                _this2.success = false;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ChangePasswordComponent;
      }();

      ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
        return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ChangePasswordComponent,
        selectors: [["app-change-password"]],
        decls: 21,
        vars: 4,
        consts: [[1, "content"], [1, "for-account"], [1, "for-account-container"], [1, "for-account-content"], [1, "for-account-form", "recovery-form"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-header"], [1, "form-body"], ["id", "feedback", 1, "feedback"], [1, "form-group"], ["type", "email", "placeholder", "a Valid Email Address", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter new password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Enter recovery token", "name", "token", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.username = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.password = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_17_listener($event) {
              return ctx.token = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_19_listener() {
              return ctx._changePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.success);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.token);
          }
        },
        directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__["HeaderCampaignComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-change-password',
            templateUrl: './change-password.component.html',
            styleUrls: ['./change-password.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }, {
            type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/login/login.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/account/login/login.component.ts ***!
      \*************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppComponentsAccountLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../home/counter/counter.component */
      "./src/app/components/home/counter/counter.component.ts");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function LoginComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username or password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Reset your password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid username and password combination");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Don't have an account? Click here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_4_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.emailAddress = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We'll never share your email with anyone else.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_4_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Remember me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_4_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.feedback);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.emailAddress);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.password == null || ctx_r3.emailAddress == null);
        }
      }

      var ApiResult = {
        SUCCESS: 'Success',
        ERROR: 'Invalid username and password combination.'
      };

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, route, cookieService, authService) {
          _classCallCheck(this, LoginComponent);

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

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(".btn-shopping-list").css("display", "none");

            this.authService._logout();

            this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regularExpression.test(String(email).toLowerCase());
          }
        }, {
          key: "validator",
          value: function validator() {
            var returnValue = {
              status: true,
              value: "Validated"
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
        }, {
          key: "login",
          value: function login() {
            var _this3 = this;

            console.log("----- this is the login -----");
            var formData = {
              email_address: this.emailAddress,
              password: this.password
            };
            var validateResult = this.validator();

            if (!validateResult.status) {
              this.feedback = validateResult.value;
              return;
            }

            this.feedback = null;
            this.isLoading = true;
            this.authService.login(JSON.stringify(formData)).subscribe(function (res) {
              _this3.isLoading = false;
              console.log(res);

              if (res.trim() == ApiResult.ERROR) {
                _this3.feedback = res.trim();
              } else {
                // this.feedback = "User Already Exist. Please try another email."
                res = res.trim();
                console.log(JSON.parse(res.substring(21, res.length - 1)));
                var currentUser = JSON.parse(res.substring(21, res.length - 1));
                localStorage.setItem('currentUser', res.substring(21, res.length - 1));
                localStorage.setItem('guid', 'true');
                localStorage.setItem('userID', currentUser.id);

                if (_this3.returnUrl != '/') {
                  _this3.router.navigateByUrl(_this3.returnUrl);
                } else {
                  _this3.router.navigate(['']);
                }
              }
            }); // this.expiredDate.setDate(this.expiredDate.getDate() + 24);
            // this.isLoading = true;
            // this.authService._login(this.username, this.password)
            //   .subscribe(
            //     res => {
            //       this.cookieService.set('guid', JSON.stringify(res), this.expiredDate);
            //       const user = JSON.parse(this.cookieService.get('guid'));
            //       this._isAuthenticated = user.success;
            //       if (this._isAuthenticated) {
            //         localStorage.setItem('guid', user.success);
            //         localStorage.setItem('userID', user.guid);
            //         this.success = true;
            //         this.isLoading = false;
            //         this.authService._getUserProfile(user.guid)
            //           .subscribe(
            //             res => {
            //               console.log('User Profile: ', res);
            //               localStorage.setItem('userProfile', JSON.stringify(res));
            //             },
            //             err => {
            //               console.log(err);
            //             }
            //           )
            //         //Checking if there is no return URL
            //         if (this.returnUrl != '/') {
            //           this.router.navigateByUrl(this.returnUrl);
            //         } else {
            //           this.router.navigate([''])
            //         }
            //       } else {
            //         this.isLoading = false;
            //       }
            //       this.msg = user.msg;
            //       this.username = '';
            //       this.password = '';
            //     },
            //     err => {
            //       this.username = '';
            //       this.password = '';
            //       console.log('err ', err);
            //     }
            //   )
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 8,
        vars: 4,
        consts: [[1, "justify-content-center"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["class", "spinner-grow", "style", "text-align: center; justify-content: center;", "role", "status", 4, "ngIf"], ["class", "login-container d-flex justify-content-center", 4, "ngIf"], [1, "campaign"], ["src", "../../../../assets//campaign-2.jpg"], ["role", "alert", 1, "alert", "alert-danger"], ["routerLink", "/account/reset-password"], ["routerLink", "/account/register"], ["role", "status", 1, "spinner-grow", 2, "text-align", "center", "justify-content", "center"], [1, "sr-only"], [1, "login-container", "d-flex", "justify-content-center"], [1, "inner-login-container", "d-flex", "justify-content-center"], [1, "form-group"], ["id", "feedback", 1, "feedback"], ["for", "exampleInputEmail1"], ["type", "email", "name", "username", "aria-describedby", "emailHelp", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["for", "exampleInputPassword1"], ["type", "password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], [1, "btn", "btn-primary", 3, "disabled", "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 4, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_div_2_Template, 4, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 3, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 22, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated && ctx.msg == ctx.resetMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated && ctx.msg == ctx.invalidMsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 20em;\n  background-color: #89c33f;\n  padding: 1em;\n  margin-top: 1em;\n  \n  background: linear-gradient(to bottom, #89c33f, #89c33f);\n}\n\n.inner-login-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 18em;\n  padding: 1.5em;\n  width: 50%;\n}\n\n.inner-login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.campaign[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #89c33f, #f1e832) !important;\n  padding: 4em 1em !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 2em 4em;\n  background: rgba(149, 201, 108, 0.6);\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n  border-spacing: 0;\n  border: none;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.9em;\n  text-align: right;\n  float: right;\n  margin-right: 3em;\n  position: relative;\n  bottom: 6px;\n  line-height: 1.2em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 0 auto 12px;\n  text-indent: 10px;\n  padding: 15px 10px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  float: right;\n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\n.merged[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 20px;\n}\n\n.merged[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.merged[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: right !important;\n}\n\n.merged[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.merged[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25px !important;\n  height: 25px;\n  float: right !important;\n  margin: 0 0 0 10px !important;\n  top: -2px;\n}\n\n.merged[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.2em 2.8em;\n  line-height: 35px;\n  float: right;\n  top: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUtHLCtCQUFBO0VBQ0gsd0RBQUE7QUFMRjs7QUFXQTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVJGOztBQVVBO0VBQ0UsV0FBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtBQVBGOztBQVNBO0VBQ0U7SUFDRSxXQUFBO0VBTkY7QUFDRjs7QUFTQTtFQUNFLHVFQUFBO0VBQ0EsMkJBQUE7QUFQRjs7QUFRRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUFOSjs7QUFPSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOOztBQU9JO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUxOOztBQU9JO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNDbEVJO0FENkRWOztBQU1NO0VBQWlCLHlDQUFBO0VBQ2YsY0NwRUU7RURxRUYsVUFBQTtFQUFZLFlBQUE7QUFGcEI7O0FBQU07RUFBaUIseUNBQUE7RUFDZixjQ3BFRTtFRHFFRixVQUFBO0VBQVksWUFBQTtBQUZwQjs7QUFBTTtFQUFpQix5Q0FBQTtFQUNmLGNDcEVFO0VEcUVGLFVBQUE7RUFBWSxZQUFBO0FBRnBCOztBQUFNO0VBQWlCLHlDQUFBO0VBQ2YsY0NwRUU7RURxRUYsVUFBQTtFQUFZLFlBQUE7QUFGcEI7O0FBSU07RUFBMEIsNEJBQUE7RUFDeEIsY0N4RUU7QUR1RVY7O0FBR007RUFBMkIsbUJBQUE7RUFDekIsY0MzRUU7QUQyRVY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBR0U7RUFDRSx1QkFBQTtBQURKOztBQUVJO0VBQ0UsdUJBQUE7QUFBTjs7QUFFSTtFQUNFLGVBQUE7QUFBTjs7QUFHRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FBREo7O0FBR0U7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgdmFyaWFibGVzIGZpbGUgd2l0aCBnbG9iYWwgc3R5bGUgdmFyaWFibGVzIGFuZCB0aGVtZVxuQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWMzM2Y7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzg5YzMzZixcbiAgICAjODljMzNmXG4gICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzg5YzMzZixcbiAgICAjODljMzNmXG4gICk7XG59XG4uaW5uZXItbG9naW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMThlbTtcbiAgcGFkZGluZzogMS41ZW07XG4gIHdpZHRoOiA1MCU7XG59XG4uaW5uZXItbG9naW4tY29udGFpbmVyIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhbXBhaWduIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaW5uZXItbG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODljMzNmLCAjZjFlODMyKSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0ZW0gMWVtICFpbXBvcnRhbnQ7XG4gIC5sb2dpbi1mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMmVtIDRlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0OSwgMjAxLCAxMDgsIDAuNik7XG4gICAgdGFibGUge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3R0b206IDZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDAgYXV0byAxMnB4O1xuICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgIH1cbiAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgfVxuICAgICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm1lcmdlZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGxhYmVsIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgICBzcGFuIHtcbiAgICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbiAgaW5wdXQge1xuICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAwIDAgMTBweCAhaW1wb3J0YW50O1xuICAgIHRvcDogLTJweDtcbiAgfVxuICBidXR0b24ge1xuICAgIHBhZGRpbmc6IDAuMmVtIDIuOGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0b3A6IC0xNXB4O1xuICB9XG59XG4iLCJAbWl4aW4gdHJhbnNpdGlvbigkeCkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR4O1xuICAtbW96LXRyYW5zaXRpb246ICR4O1xuICAtbXMtdHJhbnNpdGlvbjogJHg7XG4gIC1vLXRyYW5zaXRpb246ICR4O1xuICB0cmFuc2l0aW9uOiAkeDtcbn1cblxuJHByaW1hcnk6ICM2MEE4REM7XG4kcHJpbWFyeS1hY2NlbnQ6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcbiRzZWNvbmRhcnk6ICM5RENFNzQ7XG4kc2Vjb25kYXJ5LWFjY2VudDogZGFya2VuKCRzZWNvbmRhcnksIDEwJSk7XG4kdGV4dC1jb2xvcjogIzBlMGUwZTtcbiRsaW5rLWNvbG9yOiAjYThhOGE4O1xuJGxpbmstY29sb3ItaG92ZXI6ICRwcmltYXJ5O1xuJHNlYXJjaC1iZzogI2Y3ZTk0MztcbiRzZWFyY2gtYmctaG92ZXI6IGRhcmtlbigkc2VhcmNoLWJnLCAxMCUpO1xuJGRhbmdlcjogI0UyMjEyNztcbiRoZWFkaW5ncy1jb2xvcjogI2ZmZmZmZjtcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }, {
            type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/profile/profile.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/account/profile/profile.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function srcAppComponentsAccountProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(authService) {
          _classCallCheck(this, ProfileComponent);

          this.authService = authService;
          this.user = {
            email: '',
            first_name: '',
            last_name: '',
            phone: ''
          };
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            var guid = localStorage.getItem('userID');
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            console.log("----- this is the user ----");
            this.authService.getUserProfileByUserID(currentUser.email).subscribe(function (res) {
              console.log(res);
              localStorage.setItem('userProfile', JSON.stringify(res));
              var profile = JSON.parse(res);
              console.log('User Profile: ', profile);
              _this4.user.email = profile[0].email;
              _this4.user.first_name = profile[0].first_name;
              _this4.user.last_name = profile[0].last_name;
              _this4.user.phone = profile[0].phone;
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 30,
        vars: 6,
        consts: [[1, "for-user-profile"], [1, "for-user-profile-container"], [1, "for-user-profile-content"], [1, "user-profile"], [1, "profile-upper-content", 2, "padding", "1em"], [1, "row"], [1, "col-sm-1.9"], [1, "user-profile-picture"], [1, "user-image"], ["src", "./assets/save-campaign.jpg", "alt", "profile image"], [1, "col-sm-"], [1, "user-names", 2, "padding-top", "2em", "margin", ".5em"], [1, "profile-lower-content"], [1, "form-group"], ["type", "text", "placeholder", "FirstName", "name", "FirstName", "id", "FirstName", 1, "form-control", 3, "value"], ["type", "text", "placeholder", "LastName", "name", "LastName", "id", "LastName", 1, "form-control", 3, "value"], ["type", "email", "placeholder", "Email Address", "id", "Email", 1, "form-control", 3, "value"], ["type", "tel", "placeholder", "Phone Number", "name", "Cell", "id", "Cell", 1, "form-control", 3, "value"], ["type", "password", "placeholder", "Password", "id", "Password", 1, "form-control"], ["type", "password", "placeholder", "Retype Password", "name", "RetypePassword", "id", "RetypePassword", 1, "form-control"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__["LazyImgDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/register/register.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/account/register/register.component.ts ***!
      \*******************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppComponentsAccountRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng-recaptcha */
      "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../home/counter/counter.component */
      "./src/app/components/home/counter/counter.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var _c0 = function _c0(a0) {
        return {
          "border": a0
        };
      };

      var ApiResult = {
        SUCCESS: 'Success',
        ALREADYEXISTES: 'User exists.',
        EXTRA: 'ERROR'
      };

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(recaptchaV3Service, authService, router, cookieService) {
          _classCallCheck(this, RegisterComponent);

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

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            $(".btn-shopping-list").css("display", "none");
          }
        }, {
          key: "register",
          value: function register() {
            var _this5 = this;

            console.log("--- this is the register -----");
            var formData = {
              password: this.password,
              con_password: this.conPassword,
              email_address: this.emailAddress,
              firstname: this.firstName,
              lastname: this.lastName,
              phone: this.phoneNumber,
              terms: this.terms,
              news_letter: this.newsLetter
            }; // this.recaptchaV3Service.execute('importantAction').subscribe((token) => this.handleToken(token));

            var validateResult = this.validator();

            if (!validateResult.status) {
              this.feedback = validateResult.value;
              return;
            }

            this.feedback = null;
            this.isLoading = true;
            this.authService.register(JSON.stringify(formData)).subscribe(function (res) {
              _this5.isLoading = false;
              console.log(res);

              if (res.toString() == ApiResult.SUCCESS) {
                _this5.router.navigate(['account/login']);
              }

              if (res.toString() == ApiResult.ALREADYEXISTES) {
                _this5.feedback = "User Already Exist. Please try another email.";
              } else {
                _this5.feedback = "User Already Exist. Please try another email";
              }
            });
          }
        }, {
          key: "validator",
          value: function validator() {
            var returnValue = {
              status: true,
              value: "validated"
            };

            if (this.password == null || this.conPassword == null || this.emailAddress == null || this.firstName == null || this.lastName == null || this.phoneNumber == null || this.terms == null || this.newsLetter == null) {
              returnValue.status = false;
              returnValue.value = "Please input the fields.";
              return returnValue;
            }

            if (this.password == "" || this.conPassword == "" || this.emailAddress == "" || this.firstName == "" || this.lastName == "" || this.phoneNumber == "") {
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
            } // if (!this.validatePhoneNumber(this.phoneNumber)) {
            //   returnValue.status = false
            //   returnValue.value = "Please input the correct phone number."
            //   return returnValue
            // }


            return returnValue;
          }
        }, {
          key: "handleToken",
          value: function handleToken(token) {
            console.log(token);
          }
        }, {
          key: "validateEmail",
          value: function validateEmail(email) {
            var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regularExpression.test(String(email).toLowerCase());
          }
        }, {
          key: "validatePhoneNumber",
          value: function validatePhoneNumber(phone) {
            var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            return phone.match(phoneno);
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaV3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        decls: 46,
        vars: 21,
        consts: [[1, "justify-content-center"], [1, "login-container", "d-flex", "justify-content-center"], [1, "inner-login-container", "d-flex", "justify-content-center"], [1, "form-group"], ["id", "feedback", 1, "feedback"], ["for", "exampleInputEmail1"], ["type", "email", "aria-describedby", "emailHelp", 1, "form-control", 3, "ngStyle", "input"], ["for", "exampleInputPassword1"], ["type", "password", 1, "form-control", 3, "ngStyle", "input"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", "name", "newsletter", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "exampleCheck1", 1, "form-check-label"], ["type", "checkbox", "id", "exampleCheck2", "name", "terms", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["href", "#"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "campaign"], ["src", "../../../../assets//campaign-2.jpg"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_11_listener($event) {
              return ctx.firstName = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_15_listener($event) {
              return ctx.lastName = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_19_listener($event) {
              return ctx.emailAddress = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_23_listener($event) {
              return ctx.phoneNumber = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_27_listener($event) {
              return ctx.password = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RegisterComponent_Template_input_input_31_listener($event) {
              return ctx.conPassword = $event.target.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_33_listener($event) {
              return ctx.newsLetter = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Receive our newsletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_37_listener($event) {
              return ctx.terms = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Accept our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "T's & C's");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_42_listener() {
              return ctx.register();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Register");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feedback);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.feedback != null && ctx.firstName == null ? "1px solid red" : "1px solid #ced4da"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.feedback != null && ctx.lastName == null ? "1px solid red" : "1px solid #ced4da"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.feedback != null && ctx.emailAddress == null ? "1px solid red" : "1px solid #ced4da"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.feedback != null && ctx.phoneNumber == null ? "1px solid red" : "1px solid #ced4da"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.feedback != null && ctx.password == null ? "1px solid red" : "1px solid #ced4da"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.feedback != null && ctx.conPassword == null ? "1px solid red" : "1px solid #ced4da"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newsLetter);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.terms);
          }
        },
        directives: [_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_8__["LazyImgDirective"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 20em;\n  background-color: #89c33f;\n  padding: 1em;\n  margin-top: 1em;\n  \n  background: linear-gradient(to bottom, #89c33f, #89c33f);\n}\n\n.top[_ngcontent-%COMP%] {\n  \n  background: linear-gradient(to bottom, #89c33f, #89c33f);\n  height: 50px;\n}\n\n.inner-login-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  min-height: 18em;\n  padding: 1.5em;\n  width: 50%;\n}\n\n.inner-login-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.campaign[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media only screen and (max-width: 600px) {\n  .inner-login-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #89c33f, #f1e832) !important;\n  padding: 4em 1em !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 2em 4em;\n  background: rgba(149, 201, 108, 0.6);\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n  border-spacing: 0;\n  border: none;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 0.9em;\n  text-align: right;\n  float: left;\n  margin-right: 3em;\n  position: relative;\n  bottom: 6px;\n  line-height: 1.2em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  margin: 0 auto 12px;\n  text-indent: 10px;\n  padding: 15px 10px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  outline: none !important;\n  border: none !important;\n  float: right;\n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-moz-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  \n  color: #60A8DC;\n  opacity: 1;\n  \n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder, mat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0.2em 2.8em;\n  line-height: 35px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUtHLCtCQUFBO0VBQ0gsd0RBQUE7QUFKRjs7QUFVQTtFQUtLLCtCQUFBO0VBQ0gsd0RBQUE7RUFLQSxZQUFBO0FBZEY7O0FBZ0JBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBZUE7RUFDRSxXQUFBO0FBWkY7O0FBY0E7RUFDRTtJQUNFLFdBQUE7RUFYRjtBQUNGOztBQWFBO0VBQ0UsdUVBQUE7RUFDQSwyQkFBQTtBQVhGOztBQVlFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQVZKOztBQVdJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBVE47O0FBV0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVE47O0FBV0k7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxjQzdFSTtBRG9FVjs7QUFVTTtFQUFpQix5Q0FBQTtFQUNmLGNDL0VFO0VEZ0ZGLFVBQUE7RUFBWSxZQUFBO0FBTnBCOztBQUlNO0VBQWlCLHlDQUFBO0VBQ2YsY0MvRUU7RURnRkYsVUFBQTtFQUFZLFlBQUE7QUFOcEI7O0FBSU07RUFBaUIseUNBQUE7RUFDZixjQy9FRTtFRGdGRixVQUFBO0VBQVksWUFBQTtBQU5wQjs7QUFJTTtFQUFpQix5Q0FBQTtFQUNmLGNDL0VFO0VEZ0ZGLFVBQUE7RUFBWSxZQUFBO0FBTnBCOztBQVFNO0VBQTBCLDRCQUFBO0VBQ3hCLGNDbkZFO0FEOEVWOztBQU9NO0VBQTJCLG1CQUFBO0VBQ3pCLGNDdEZFO0FEa0ZWOztBQU9JO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5jbHVkZSB2YXJpYWJsZXMgZmlsZSB3aXRoIGdsb2JhbCBzdHlsZSB2YXJpYWJsZXMgYW5kIHRoZW1lXG5AaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xuLmxvZ2luLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4OWMzM2Y7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzg5YzMzZixcbiAgICAjODljMzNmXG4gICk7IC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICB0byBib3R0b20sXG4gICAgIzg5YzMzZixcbiAgICAjODljMzNmXG4gICk7XG59XG4udG9wIHtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgICM4OWMzM2YsXG4gICAgIzg5YzMzZlxuICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gYm90dG9tLFxuICAgICM4OWMzM2YsXG4gICAgIzg5YzMzZlxuICApO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uaW5uZXItbG9naW4tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWluLWhlaWdodDogMThlbTtcbiAgcGFkZGluZzogMS41ZW07XG4gIHdpZHRoOiA1MCU7XG59XG4uaW5uZXItbG9naW4tY29udGFpbmVyIGZvcm0ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhbXBhaWduIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaW5uZXItbG9naW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzg5YzMzZiwgI2YxZTgzMikgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNGVtIDFlbSAhaW1wb3J0YW50O1xuICAucmVnaXN0ZXItZm9ybSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDJlbSA0ZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDksIDIwMSwgMTA4LCAwLjYpO1xuICAgIHRhYmxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBsYWJlbCB7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3R0b206IDZweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB9XG4gICAgaW5wdXQsIHNlbGVjdCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEycHg7XG4gICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAmOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgICAgIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbiAgICAgIH1cbiAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgfVxuICAgICAgJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgfVxuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAuMmVtIDIuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gdHJhbnNpdGlvbigkeCkge1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR4O1xuICAtbW96LXRyYW5zaXRpb246ICR4O1xuICAtbXMtdHJhbnNpdGlvbjogJHg7XG4gIC1vLXRyYW5zaXRpb246ICR4O1xuICB0cmFuc2l0aW9uOiAkeDtcbn1cblxuJHByaW1hcnk6ICM2MEE4REM7XG4kcHJpbWFyeS1hY2NlbnQ6IGRhcmtlbigkcHJpbWFyeSwgMTAlKTtcbiRzZWNvbmRhcnk6ICM5RENFNzQ7XG4kc2Vjb25kYXJ5LWFjY2VudDogZGFya2VuKCRzZWNvbmRhcnksIDEwJSk7XG4kdGV4dC1jb2xvcjogIzBlMGUwZTtcbiRsaW5rLWNvbG9yOiAjYThhOGE4O1xuJGxpbmstY29sb3ItaG92ZXI6ICRwcmltYXJ5O1xuJHNlYXJjaC1iZzogI2Y3ZTk0MztcbiRzZWFyY2gtYmctaG92ZXI6IGRhcmtlbigkc2VhcmNoLWJnLCAxMCUpO1xuJGRhbmdlcjogI0UyMjEyNztcbiRoZWFkaW5ncy1jb2xvcjogI2ZmZmZmZjtcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_1__["ReCaptchaV3Service"]
          }, {
            type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/reset-password/reset-password.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/account/reset-password/reset-password.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function srcAppComponentsAccountResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../campaigns/header-campaign.component */
      "./src/app/components/campaigns/header-campaign.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      function ResetPasswordComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password reset token sent successfully to ", ctx_r0.email, " ");
        }
      }

      function ResetPasswordComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Password reset token not sent successfully to ", ctx_r1.email, " ");
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function () {
        function ResetPasswordComponent(authService, router, cookieService) {
          _classCallCheck(this, ResetPasswordComponent);

          this.authService = authService;
          this.router = router;
          this.cookieService = cookieService;
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "recoverCredentials",
          value: function recoverCredentials() {
            var _this6 = this;

            console.log('Reset: ', this.email);
            this.authService.generatePasswordToken(this.email).subscribe(function (res) {
              _this6.cookieService.set('resetPassword', JSON.stringify(res));

              var reset = JSON.parse(_this6.cookieService.get('resetPassword'));
              var success = reset.success;
              console.log('Res: ', res);

              if (success) {
                _this6.emailSent = true;
                setTimeout(function () {
                  _this6.cookieService["delete"]('resetPassword');

                  _this6.router.navigate(['/account/change-password']);
                }, 3000);
              } else {
                _this6.errorSent = true;
              }
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ResetPasswordComponent;
      }();

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]));
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        decls: 20,
        vars: 3,
        consts: [[1, "content"], [1, "for-account"], [1, "for-account-container"], [1, "for-account-content"], [1, "for-account-form", "recovery-form"], ["class", "alert alert-success", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-header"], [1, "form-body"], [1, "form-group"], ["type", "email", "placeholder", "a Valid Email Address", "name", "Email", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "click"], ["routerLink", "/account/login"], ["role", "alert", 1, "alert", "alert-success"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_13_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_15_listener() {
              return ctx.recoverCredentials();
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emailSent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorSent);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);
          }
        },
        directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_4__["HeaderCampaignComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        styles: [".feedback[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVkYmFjayB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/shopping-lists/shopping-lists.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/components/account/shopping-lists/shopping-lists.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: ShoppingListsComponent */

    /***/
    function srcAppComponentsAccountShoppingListsShoppingListsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShoppingListsComponent", function () {
        return ShoppingListsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ShoppingListsComponent = /*#__PURE__*/function () {
        function ShoppingListsComponent() {
          _classCallCheck(this, ShoppingListsComponent);
        }

        _createClass(ShoppingListsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ShoppingListsComponent;
      }();

      ShoppingListsComponent.ɵfac = function ShoppingListsComponent_Factory(t) {
        return new (t || ShoppingListsComponent)();
      };

      ShoppingListsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ShoppingListsComponent,
        selectors: [["app-shopping-lists"]],
        decls: 2,
        vars: 0,
        template: function ShoppingListsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "shopping-lists works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC9zaG9wcGluZy1saXN0cy9zaG9wcGluZy1saXN0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShoppingListsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-shopping-lists',
            templateUrl: './shopping-lists.component.html',
            styleUrls: ['./shopping-lists.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/account/vendor-signup/vendor-signup.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/account/vendor-signup/vendor-signup.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: VendorSignupComponent */

    /***/
    function srcAppComponentsAccountVendorSignupVendorSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorSignupComponent", function () {
        return VendorSignupComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../home/counter/counter.component */
      "./src/app/components/home/counter/counter.component.ts");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/stepper */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      function VendorSignupComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "General");
        }
      }

      function VendorSignupComponent_ng_template_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Confirmation Completion");
        }
      }

      var VendorSignupComponent = /*#__PURE__*/function () {
        function VendorSignupComponent(_formBuilder) {
          _classCallCheck(this, VendorSignupComponent);

          this._formBuilder = _formBuilder;
          this.isLinear = false;
          this.countFeatured = 436;
          this.countLocations = 254;
          this.countPromotions = 2034;
          this.vendor = {
            businessName: '',
            image: ''
          };
        }

        _createClass(VendorSignupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }]);

        return VendorSignupComponent;
      }();

      VendorSignupComponent.ɵfac = function VendorSignupComponent_Factory(t) {
        return new (t || VendorSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      VendorSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VendorSignupComponent,
        selectors: [["app-vendor-signup"]],
        decls: 113,
        vars: 5,
        consts: [[1, "main-container", 2, "padding-bottom", "0.5em", "margin-top", "1em"], [1, "container", "d-flex", "justify-content-center"], [1, "stepper"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", 1, "form-control"], ["for", "inputAddress2"], ["type", "file", 1, "form-control"], ["type", "text", 1, "form-control"], ["for", "inputCity"], [1, "form-group", "col-md-12"], ["mat-button", "", "matStepperNext", ""], ["label", "Choose Subscription", 3, "stepControl"], [1, "form-group", "col-md-4"], ["for", "inputState"], ["id", "inputState", 1, "form-control"], ["selected", ""], ["mat-button", "", "matStepperPrevious", ""], [1, "form-group"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "exampleCheck1", 1, "form-check-input"], ["for", "exampleCheck1", 1, "form-check-label"], ["routerLink", "/vendor-terms-conditions"], ["mat-button", "", 3, "click"], ["mat-button", ""], [1, "campaign"], ["src", "../../../../assets//campaign-2.jpg"]],
        template: function VendorSignupComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-horizontal-stepper", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-step", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VendorSignupComponent_ng_template_8_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Business Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Upload Logo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Business Contact Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Upload Cover Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Business Website");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enter your story");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Store Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Store Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Street Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Suburb");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Province");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "City");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-step", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Choose Subscription");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Free");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Free");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, VendorSignupComponent_ng_template_83_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Important Note");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " SeeMeSave strives to be the platform that connect you, our vendor, to consumers and traders thus enabling you to grow your business retail product promotions and other business services SeeMeSave might consider to offer. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " SeeMeSave will not share your promotions performance, statistics, promotion and selling prices of products to any other vendor who is also registered on SeeMeSave. We protect this information. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Registering as a vendor is strictly subscription based. A physical address is also required of your primary store which we will verify. Upon approval you may add more of your stores (limited to 1 one for now). ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Once you are complete with registration, please validate your account with the registration link that will be sent via email. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " The SeeMeSave Team will validate your account as soon as we have confirmed your submitted credentials. You will be notified via email. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "fieldset", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Agree to ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "T & C's");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VendorSignupComponent_Template_button_click_107_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

              return _r0.reset();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", ctx.isLinear);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
          }
        },
        directives: [_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperPrevious"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"]],
        styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n\n  .mat-horizontal-stepper-header-container {\n  margin-bottom: 1em;\n  background-color: #60a8dc;\n}\n\n  .mat-step-header {\n  color: white;\n}\n\n.main-container[_ngcontent-%COMP%] {\n  background-color: #89c33f;\n}\n\n.stepper[_ngcontent-%COMP%] {\n  background-color: white;\n  width: 70%;\n  margin-top: 0.5em;\n  padding: 0;\n}\n\n@media only screen and (max-width: 600px) {\n  .stepper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L3ZlbmRvci1zaWdudXAvdmVuZG9yLXNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGdCQUFBO0FBSEo7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBRUUsWUFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUlBO0VBQ0U7SUFDRSxXQUFBO0VBREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNjb3VudC92ZW5kb3Itc2lnbnVwL3ZlbmRvci1zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgLy8gbWFyZ2luLXRvcDogOHB4O1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbi5tYXQtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59ICBcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVye1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6IzYwYThkYztcbn0gXG5cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODljMzNmO1xufVxuXG4uc3RlcHBlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3RlcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorSignupComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vendor-signup',
            templateUrl: './vendor-signup.component.html',
            styleUrls: ['./vendor-signup.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/campaigns/footer-campaign.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/campaigns/footer-campaign.component.ts ***!
      \*******************************************************************/

    /*! exports provided: FooterCampaignComponent */

    /***/
    function srcAppComponentsCampaignsFooterCampaignComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterCampaignComponent", function () {
        return FooterCampaignComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var FooterCampaignComponent = /*#__PURE__*/function () {
        function FooterCampaignComponent() {
          _classCallCheck(this, FooterCampaignComponent);
        }

        _createClass(FooterCampaignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterCampaignComponent;
      }();

      FooterCampaignComponent.ɵfac = function FooterCampaignComponent_Factory(t) {
        return new (t || FooterCampaignComponent)();
      };

      FooterCampaignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterCampaignComponent,
        selectors: [["app-footer-campaign"]],
        decls: 1,
        vars: 0,
        consts: [["loading", "lazy", "alt", "SeeMeSave Campaign", "src", "../assets/campaign-bottom.jpg", 1, "campaign-image"]],
        template: function FooterCampaignComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterCampaignComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer-campaign',
            template: "<img class=\"campaign-image\" loading=\"lazy\" alt=\"SeeMeSave Campaign\" src=\"../assets/campaign-bottom.jpg\"/>",
            styleUrls: []
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/campaigns/header-campaign.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/campaigns/header-campaign.component.ts ***!
      \*******************************************************************/

    /*! exports provided: HeaderCampaignComponent */

    /***/
    function srcAppComponentsCampaignsHeaderCampaignComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderCampaignComponent", function () {
        return HeaderCampaignComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var HeaderCampaignComponent = /*#__PURE__*/function () {
        function HeaderCampaignComponent() {
          _classCallCheck(this, HeaderCampaignComponent);
        }

        _createClass(HeaderCampaignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderCampaignComponent;
      }();

      HeaderCampaignComponent.ɵfac = function HeaderCampaignComponent_Factory(t) {
        return new (t || HeaderCampaignComponent)();
      };

      HeaderCampaignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderCampaignComponent,
        selectors: [["app-header-campaign"]],
        decls: 1,
        vars: 0,
        consts: [["loading", "lazy", "alt", "SeeMeSave Campaign", "src", "../assets/campaign-top.jpg", 1, "campaign-image"]],
        template: function HeaderCampaignComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderCampaignComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header-campaign',
            template: "<img class=\"campaign-image\" loading=\"lazy\" alt=\"SeeMeSave Campaign\" src=\"../assets/campaign-top.jpg\"/>",
            styleUrls: []
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/about/about.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/components/home/about/about.component.ts ***!
      \**********************************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppComponentsHomeAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../campaigns/header-campaign.component */
      "./src/app/components/campaigns/header-campaign.component.ts");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 104,
        vars: 0,
        consts: [[1, "content"], [1, "about-section-main"], [1, "about-section"], [1, "about-section-container"], [1, "about-section-content"], [1, "section-main"], [1, "section-main-header"], [1, "section-main-body"], [1, "row"], [1, "col-sm-3"], [1, "about-icon"], ["src", "../../../../assets/images/vendors.png", 2, "width", "100px"], ["src", "../../../../assets/images/trolley.png", 2, "width", "100px"], ["src", "../../../../assets/images/checklist.png", 2, "width", "100px"], ["src", "../../../../assets/images/feedback.png", 2, "width", "100px"], ["id", "second-section", 1, "section-main"], ["src", "../../../../assets/images/wallet.png", 2, "width", "100px"], ["src", "../../../../assets/images/market.png", 2, "width", "100px"], ["src", "../../../../assets/images/location_pin.png", 2, "width", "100px"], ["src", "../../../../assets/images/like.png", 2, "width", "100px"], [1, "col-sm-4"], ["src", "../../../../assets/images/analytic.png", 2, "width", "100px"], ["src", "../../../../assets/images/promotion.png", 2, "width", "100px"], ["src", "../../../../assets/images/products.png", 2, "width", "100px"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Your promotions can target speci\x1Ec individuals or the public. ");

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
          }
        },
        directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_1__["HeaderCampaignComponent"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__["LazyImgDirective"]],
        styles: [".about-icon[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-icon[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-top: 0.5em;\n}\n#second-section[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRUE7RUFDSSx5QkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LWljb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoNHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcbiAgICB9XG59XG5cbiNzZWNvbmQtc2VjdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/careers/careers.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/home/careers/careers.component.ts ***!
      \**************************************************************/

    /*! exports provided: CareersComponent */

    /***/
    function srcAppComponentsHomeCareersCareersComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CareersComponent", function () {
        return CareersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var CareersComponent = /*#__PURE__*/function () {
        function CareersComponent() {
          _classCallCheck(this, CareersComponent);
        }

        _createClass(CareersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CareersComponent;
      }();

      CareersComponent.ɵfac = function CareersComponent_Factory(t) {
        return new (t || CareersComponent)();
      };

      CareersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CareersComponent,
        selectors: [["app-careers"]],
        decls: 71,
        vars: 0,
        consts: [[1, "for-careers"], [1, "for-careers-container"], [1, "for-careers-content"], [1, "for-careers-header"], [1, "for-careers-body"], [1, "careers-section"], [1, "careers-section-container"], [1, "careers-section-content"], [1, "careers-section-body"], [1, "section-body-left"], [1, "section-body-right"], [1, "section-jobs"], [1, "jobs-content"], [1, "job-card"], [1, "job-card-header"], [1, "job-card-body"], [1, "job-card-footer"]],
        template: function CareersComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jYXJlZXJzL2NhcmVlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CareersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-careers',
            templateUrl: './careers.component.html',
            styleUrls: ['./careers.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/contact/contact.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/home/contact/contact.component.ts ***!
      \**************************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function srcAppComponentsHomeContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);

          this.nameFocused = '';
          this.lastnameFocused = '';
          this.emailFocused = '';
          this.numberFocused = '';
          this.messageFocused = '';
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "contactUs",
          value: function contactUs() {}
        }, {
          key: "inputFocused",
          value: function inputFocused(value, focusIn, el) {
            if (focusIn) {
              this[el] = 'focused';
            } else {
              if (value.length) {
                this[el] = 'focused';
              } else {
                this[el] = '';
              }
            }
          }
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 61,
        vars: 0,
        consts: [[1, "for-contact"], [1, "for-contact-container"], [1, "for-contact-content"], [2, "color", "#000000"], [1, "for-contact-forms"], [1, "for-contact-forms-container"], [1, "for-contact-forms-content"], [1, "contact-forms"], [1, "contact-form"], [1, "form-group"], ["type", "text", "placeholder", "First Name", "name", "FirstName", "id", "FirstName", 1, "form-control"], ["type", "text", "placeholder", "Last Name", "name", "LastName", "id", "LastName", 1, "form-control"], ["type", "tel", "placeholder", "Cell Phone Number", "name", "Cell", "id", "Cell", 1, "form-control"], ["type", "email", "placeholder", "a Valid Email Address", "name", "Email", "id", "Email", 1, "form-control"], ["id", "Message", "placeholder", "Message", "name", "Message", 1, "form-control"], [1, "contact-maps"], [1, "addresses"], [1, "address"], [1, "address-header"], [1, "address-body"], ["href", "mailto:hello@seemesave.com"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-envelope-fill"], ["fill-rule", "evenodd", "d", "M.05 3.555A2 2 0 0 1\n                                                2 2h12a2 2 0 0 1 1.95\n                                                1.555L8 8.414.05\n                                                3.555zM0\n                                                4.697v7.104l5.803-3.558L0\n                                                4.697zM6.761 8.83l-6.57\n                                                4.027A2 2 0 0 0 2\n                                                14h12a2 2 0 0 0\n                                                1.808-1.144l-6.57-4.027L8\n                                                9.586l-1.239-.757zm3.436-.586L16\n                                                11.801V4.697l-5.803\n                                                3.546z"], [2, "color", "#000000", "padding", "10px 0 0 10px"], ["href", "tel:011 513 3048"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-telephone-fill"], ["fill-rule", "evenodd", "d", "M2.267.98a1.636\n                                                    1.636 0 0 1\n                                                    2.448.152l1.681\n                                                    2.162c.309.396.418.913.296\n                                                    1.4l-.513\n                                                    2.053a.636.636 0 0 0\n                                                    .167.604L8.65\n                                                    9.654a.636.636 0 0 0\n                                                    .604.167l2.052-.513a1.636\n                                                    1.636 0 0 1\n                                                    1.401.296l2.162\n                                                    1.681c.777.604.849\n                                                    1.753.153\n                                                    2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47\n                                                    17.47 0 0\n                                                    1-6.571-4.144A17.47\n                                                    17.47 0 0 1 .639\n                                                    4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"], [1, "social-media"], [1, "social-media-header"], [1, "social-media-body"], ["href", "https://web.facebook.com/seemesavesa", "target", "_blank"], ["src", "../../../../assets/icons/facebook.png", "width", "30"], ["href", " https://www.linkedin.com/company/18805029", "target", "_blank"], ["src", "../../../../assets/icons/linkedin.webp", "width", "30"], ["href", "https://www.instagram.com/seemesave", "target", "_blank"], ["src", "../../../../assets/icons/instagram.png", "width", "30"], ["href", "https://www.youtube.com/channel/UChAi9kTle3MGAFoGjUMaFzg", "target", "_blank"], ["src", "../../../../assets/icons/youtube.png", "width", "30"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], p[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, #89c33f, #f1e832) !important;\n  padding: 4em 1em !important;\n  color: #ffffff;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-right: 10px;\n  top: 5px;\n  width: 31px;\n  height: 31px;\n  font-size: 31px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-decoration: underline;\n  font-size: 0.9em;\n  transition: all 0.3s ease-in-out;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.social-link[_ngcontent-%COMP%] {\n  margin: 10px;\n  display: inline-block;\n  height: 32px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.social-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff;\n  transition: all 0.3s ease-in-out;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.social-link[_ngcontent-%COMP%]:first-of-type {\n  margin-left: 0px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a.connect-links[_ngcontent-%COMP%] {\n  position: relative;\n  top: -5px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0e0e0e;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  cursor: pointer;\n  fill: #0e0e0e;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  line-height: 1.6em;\n  margin-bottom: 0px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 20px;\n  line-height: 2em;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \" \";\n  left: 0;\n  bottom: -6px;\n  height: 2px;\n  width: 100%;\n  background: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2em;\n  background: rgba(149, 201, 108, 0.6);\n  width: 40%;\n  float: left;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  padding: 0;\n  border-spacing: 0;\n  border: none;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #60A8DC;\n  font-size: 0.7em;\n  line-height: 1.2em;\n  font-weight: 400;\n  z-index: 2;\n  margin-top: 16px;\n  margin-left: 20px;\n  pointer-events: none;\n  transition: all 0.3s ease-in-out;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   span.focused[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n  font-weight: 700 !important;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], mat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: calc(100% - 20px);\n  margin: 0 auto 12px;\n  padding: 15px 10px;\n  font-size: 0.7em;\n  border-radius: 10px;\n  outline: none !important;\n  border: none !important;\n  color: #60A8DC;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 0.2em 2.8em;\n  line-height: 35px;\n  float: right;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   .contact-details[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2em;\n  background: rgba(149, 201, 108, 0.6);\n  width: 40%;\n  float: right;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n}\n\nmat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \" \";\n  left: 0;\n  bottom: -10px;\n  height: 2px;\n  width: 100%;\n  background: #60A8DC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSx1RUFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFESjs7QUFHRTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VDakJGLGdDRGtCc0I7QUFHeEI7O0FBRkk7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBSU47O0FBSE07RUFDRSxhQUFBO0VDeEJOLGdDRHlCMEI7QUFTNUI7O0FBUE07RUFDRSxnQkFBQTtBQVNSOztBQU5JO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBUU47O0FBTkk7RUFDRSxjQzdCTztBRHFDYjs7QUFQTTtFQUNFLGVBQUE7RUFDQSxhQ2hDSztBRHlDYjs7QUFMRTtFQUNFLGdCQUFBO0FBT0o7O0FBTkk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFRTjs7QUFOSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVFOOztBQVBNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQzFERTtBRG1FVjs7QUFMRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPSjs7QUFOSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVFOOztBQU5JO0VBQ0Usa0JBQUE7RUFDQSxjQzdFSTtFRDhFSixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VDdkZKLGdDRHdGd0I7QUFZMUI7O0FBWE07RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FBYVI7O0FBVkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNDckdJO0FEaUhWOztBQVZJO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQVlOOztBQVRFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQVdKOztBQVRFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVZJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQy9ISTtBRDJJViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbmNsdWRlIHZhcmlhYmxlcyBmaWxlIHdpdGggZ2xvYmFsIHN0eWxlIHZhcmlhYmxlcyBhbmQgdGhlbWVcbkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcblxuaDEsIGgyLCBoMywgaDQsIGg1LCBwLCBzcGFuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4OWMzM2YsICNmMWU4MzIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRlbSAxZW0gIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hdC1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNXB4O1xuICAgIHdpZHRoOiAzMXB4O1xuICAgIGhlaWdodDogMzFweDtcbiAgICBmb250LXNpemU6IDMxcHg7XG4gIH1cbiAgYSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuM3MgZWFzZS1pbi1vdXQpO1xuICAgICYuc29jaWFsLWxpbmsge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgc3ZnIHBhdGgge1xuICAgICAgICBmaWxsOiAjZmZmZmZmO1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuM3MgZWFzZS1pbi1vdXQpO1xuICAgICAgfVxuICAgICAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5jb25uZWN0LWxpbmtzIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICBzdmcgcGF0aCB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZmlsbDogJHRleHQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5jb250YWN0LWRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIH1cbiAgICBoMyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAtNnB4O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY29udGFjdC1mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQ5LCAyMDEsIDEwOCwgMC42KTtcbiAgICB3aWR0aDogNDAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRhYmxlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbG9yOiAkcHJpbWFyeTtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgLjNzIGVhc2UtaW4tb3V0KTtcbiAgICAgICYuZm9jdXNlZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDEycHg7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDAuN2VtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIHBhZGRpbmc6IDAuMmVtIDIuOGVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuICB9XG4gIC5jb250YWN0LWRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNDksIDIwMSwgMTA4LCAwLjYpO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIGgyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IC0xMHB4O1xuICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHRyYW5zaXRpb24oJHgpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkeDtcbiAgLW1vei10cmFuc2l0aW9uOiAkeDtcbiAgLW1zLXRyYW5zaXRpb246ICR4O1xuICAtby10cmFuc2l0aW9uOiAkeDtcbiAgdHJhbnNpdGlvbjogJHg7XG59XG5cbiRwcmltYXJ5OiAjNjBBOERDO1xuJHByaW1hcnktYWNjZW50OiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XG4kc2Vjb25kYXJ5OiAjOURDRTc0O1xuJHNlY29uZGFyeS1hY2NlbnQ6IGRhcmtlbigkc2Vjb25kYXJ5LCAxMCUpO1xuJHRleHQtY29sb3I6ICMwZTBlMGU7XG4kbGluay1jb2xvcjogI2E4YThhODtcbiRsaW5rLWNvbG9yLWhvdmVyOiAkcHJpbWFyeTtcbiRzZWFyY2gtYmc6ICNmN2U5NDM7XG4kc2VhcmNoLWJnLWhvdmVyOiBkYXJrZW4oJHNlYXJjaC1iZywgMTAlKTtcbiRkYW5nZXI6ICNFMjIxMjc7XG4kaGVhZGluZ3MtY29sb3I6ICNmZmZmZmY7XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/counter/counter.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/home/counter/counter.component.ts ***!
      \**************************************************************/

    /*! exports provided: CounterComponent */

    /***/
    function srcAppComponentsHomeCounterCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CounterComponent", function () {
        return CounterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/number-tracker-component/number-tracker-component.component */
      "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var CounterComponent = /*#__PURE__*/function () {
        function CounterComponent() {
          _classCallCheck(this, CounterComponent);

          this.countFeatured = 436;
          this.countLocations = 254;
          this.countPromotions = 2034;
        }

        _createClass(CounterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CounterComponent;
      }();

      CounterComponent.ɵfac = function CounterComponent_Factory(t) {
        return new (t || CounterComponent)();
      };

      CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CounterComponent,
        selectors: [["app-counter"]],
        decls: 29,
        vars: 9,
        consts: [[1, "container"], [1, "for-counters"], [1, "for-counters-container"], [1, "for-counters-content"], [1, "counters"], [1, "counter-card"], [1, "counter-content"], [1, "counter-left"], [1, "count"], [3, "end"], [1, "counter-right"]],
        template: function CounterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "number-tracker", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Featured Products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "number-tracker", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Promotions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "number-tracker", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Locations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.countFeatured));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.countPromotions));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.countLocations));
          }
        },
        directives: [_shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_1__["NumberTrackerComponent"]],
        styles: [".for-counters[_ngcontent-%COMP%] {\n  position: relative;\n  left: 3.5em;\n}\n\n@media only screen and (max-width: 600px) {\n  .for-counters[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0em;\n  }\n}\n\n.count-cycle[_ngcontent-%COMP%] {\n  width: 70px;\n  border-radius: 50%;\n  background: #60A8DC;\n  text-align: center;\n  height: 57px;\n  line-height: 57px;\n}\n\n.count-cycle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: #ffffff;\n}\n\n.counter-container[_ngcontent-%COMP%] {\n  margin: 1em;\n}\n\n.col-content[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  margin-bottom: 0.3em;\n}\n\n.count-text[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 5% 0 0 5%;\n  padding: 0 0 0 5%;\n  text-align: center;\n}\n\n.count-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 500;\n  color: #60A8DC;\n  padding-top: 0.5em;\n}\n\n@media only screen and (max-width: 600px) {\n  .for-counters[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLFNBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUdBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBSUE7RUFDSTtJQUNFLGtCQUFBO0lBQ0EsU0FBQTtFQURKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvci1jb3VudGVycyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMy41ZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvci1jb3VudGVycyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBlbTtcbiAgfVxufVxuXG4uY291bnQtY3ljbGUge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAjNjBBOERDO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDU3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU3cHg7XG59XG4uY291bnQtY3ljbGUgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gIH1cblxuLmNvdW50ZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDFlbTtcbn1cblxuXG4uY29sLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4uY291bnQtdGV4dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nOiA1JSAwIDAgNSU7XG4gICAgcGFkZGluZzogMCAwIDAgNSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY291bnQtdGV4dCBwIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjNjBBOERDO1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmZvci1jb3VudGVycyB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBsZWZ0OiAwZW07XG4gICAgfVxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-counter',
            templateUrl: './counter.component.html',
            styleUrls: ['./counter.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/faq/faq.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/components/home/faq/faq.component.ts ***!
      \******************************************************/

    /*! exports provided: FaqComponent */

    /***/
    function srcAppComponentsHomeFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
        return FaqComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FaqComponent = /*#__PURE__*/function () {
        function FaqComponent() {
          _classCallCheck(this, FaqComponent);
        }

        _createClass(FaqComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FaqComponent;
      }();

      FaqComponent.ɵfac = function FaqComponent_Factory(t) {
        return new (t || FaqComponent)();
      };

      FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FaqComponent,
        selectors: [["app-faq"]],
        decls: 2,
        vars: 0,
        template: function FaqComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "faq works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-faq',
            templateUrl: './faq.component.html',
            styleUrls: ['./faq.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/help/help.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/components/home/help/help.component.ts ***!
      \********************************************************/

    /*! exports provided: HelpComponent */

    /***/
    function srcAppComponentsHomeHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
        return HelpComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var HelpComponent = /*#__PURE__*/function () {
        function HelpComponent() {
          _classCallCheck(this, HelpComponent);
        }

        _createClass(HelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpComponent;
      }();

      HelpComponent.ɵfac = function HelpComponent_Factory(t) {
        return new (t || HelpComponent)();
      };

      HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelpComponent,
        selectors: [["app-help"]],
        decls: 134,
        vars: 0,
        consts: [[1, "header-main"], [1, "header-main-container"], [1, "header-content"], [1, "header-search-bar"], [1, "search-form"], [1, "form-group"], ["type", "text", "placeholder", "Search..", "name", "search", 1, "form-control"], [1, "live-chat-container"], [1, "live-chat-main"], [1, "live-chat-content"], [1, "cards-container"], [1, "news-card"], [1, "news-left"], ["src", "/assets/icons/newspaper.png", "alt", "news\n                                icon"], [1, "news-right"], [1, "news-header"], [1, "news-body"], [1, "live-chat-card"], [1, "chat-left"], ["src", "/assets/icons/chat.png", "alt", "chat\n                                icon"], [1, "chat-right"], [1, "chat-header"], [1, "chat-body"], [1, "different-articles"], [1, "articles-container-main"], [1, "articles-container"], [1, "articles-content"], [1, "articles"], [1, "article-card"], [1, "article-header"], [1, "article-body"], ["src", "/assets/icons/journal.png", "alt", "journal"], ["href", "#"]],
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9oZWxwL2hlbHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-help',
            templateUrl: './help.component.html',
            styleUrls: ['./help.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/home.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/home/home.component.ts ***!
      \***************************************************/

    /*! exports provided: HomeComponent */

    /***/
    function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../campaigns/header-campaign.component */
      "./src/app/components/campaigns/header-campaign.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../campaigns/footer-campaign.component */
      "./src/app/components/campaigns/footer-campaign.component.ts");
      /* harmony import */


      var _stores_stores_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./stores/stores.component */
      "./src/app/components/home/stores/stores.component.ts");
      /* harmony import */


      var _layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../layout/landing/landing.component */
      "./src/app/components/layout/landing/landing.component.ts");

      function HomeComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function HomeComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stores");
        }
      }

      function HomeComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing");
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(cookieService) {
          _classCallCheck(this, HomeComponent);

          this.cookieService = cookieService;
          this.addressExists = cookieService.check('sms-address');
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 7,
        vars: 3,
        consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["thenBlock", ""], ["elseBlock", ""]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-campaign");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 1, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer-campaign");
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addressExists)("ngIfThen", _r1)("ngIfElse", _r3);
          }
        },
        directives: [_campaigns_header_campaign_component__WEBPACK_IMPORTED_MODULE_2__["HeaderCampaignComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _campaigns_footer_campaign_component__WEBPACK_IMPORTED_MODULE_4__["FooterCampaignComponent"], _stores_stores_component__WEBPACK_IMPORTED_MODULE_5__["StoresComponent"], _layout_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [{
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/privacy/privacy.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/home/privacy/privacy.component.ts ***!
      \**************************************************************/

    /*! exports provided: PrivacyComponent */

    /***/
    function srcAppComponentsHomePrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
        return PrivacyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var PrivacyComponent = /*#__PURE__*/function () {
        function PrivacyComponent() {
          _classCallCheck(this, PrivacyComponent);
        }

        _createClass(PrivacyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyComponent;
      }();

      PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) {
        return new (t || PrivacyComponent)();
      };

      PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PrivacyComponent,
        selectors: [["app-privacy"]],
        decls: 398,
        vars: 0,
        consts: [[1, "for-terms"], [1, "for-terms-container"], [1, "for-terms-content"], [1, "for-terms-header"], [1, "container"], [1, "privacy"], ["href", "www.seemesave.com"], ["href", "http://www.seemesave.com"], [2, "color", "#60A8DC"], ["href", "mailto:hello@seemesave.com"], [1, "white-dots"], ["href", "maito:hello@seemesave.com"], ["href", "maito:inforeg@justice.gov.za"]],
        template: function PrivacyComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: [".privacy[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 10px;\n}\n\n.privacy[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcml2YWN5IHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wcml2YWN5IHVsIHtcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-privacy',
            templateUrl: './privacy.component.html',
            styleUrls: ['./privacy.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/stores/details/details.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/home/stores/details/details.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DetailsComponent */

    /***/
    function srcAppComponentsHomeStoresDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
        return DetailsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/dao.service */
      "./src/app/services/dao.service.ts");
      /* harmony import */


      var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-ng-autocomplete */
      "./node_modules/angular-ng-autocomplete/__ivy_ngcc__/fesm2015/angular-ng-autocomplete.js");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @agm/core */
      "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../layout/panel/panel.component */
      "./src/app/components/layout/panel/panel.component.ts");

      function DetailsComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", item_r7.thumbnail_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r7.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("R: ", item_r7.selling_price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Promotion Price: R: ", item_r7.promotion_price, "");
        }
      }

      function DetailsComponent_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 59);
        }

        if (rf & 2) {
          var notFound_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", notFound_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      }

      function DetailsComponent_app_panel_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel", 61);
        }

        if (rf & 2) {
          var promotion_r9 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("panelTitle", "", promotion_r9.name, " <strong>ENDS</strong>\n                  ", promotion_r9.end_date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx_r5.getPromotionProducts(promotion_r9.guid));
        }
      }

      function DetailsComponent_app_panel_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-panel", 61);
        }

        if (rf & 2) {
          var promotion_r10 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("panelTitle", "", promotion_r10.name, " <strong>ENDS</strong>\n                ", promotion_r10.end_date, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx_r6.getPromotionProducts(promotion_r10.guid));
        }
      }

      var _c0 = function _c0() {
        return {
          height: 32,
          width: 32
        };
      };

      var _c1 = function _c1(a1) {
        return {
          url: "assets/marker(64).png",
          scaledSize: a1
        };
      };

      var currentProducts = [];

      var DetailsComponent = /*#__PURE__*/function () {
        function DetailsComponent(route, daoService, _fb) {
          _classCallCheck(this, DetailsComponent);

          this.route = route;
          this.daoService = daoService;
          this._fb = _fb;
          this.name = '';
          this.placeholder = 'Search Product';
          this.keyword = 'description';
          this.brand = 'brand';
          this.historyHeading = 'Recently selected';
          this.products = [];
          this.newProductsModifiedd = [];
          this.guid = this.route.snapshot.params.guid;
          this.reactiveForm = _fb.group({
            name: [{
              value: '',
              disabled: false
            }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
        /**
         * Submit reactive form
         */


        _createClass(DetailsComponent, [{
          key: "submitProducts",
          value: function submitProducts() {
            if (this.reactiveForm.valid) {
              console.log(this.reactiveForm.value);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.retrieveStoreDetails(this.guid);
            this.retrieveStorePromotions(this.guid);
            this.retrieveStoreProducts(this.guid);
            this.retrieveNewToMarket();
            this.retrieveFeaturedProducts();
            var localAddress = localStorage.getItem('full-address');
            console.log("----- this is the store id -----");
            console.log(this.guid);

            if (localAddress) {
              this.fullAddress = "<span>".concat(localAddress, "</span>");
            }
          }
        }, {
          key: "retrieveStoreDetails",
          value: function retrieveStoreDetails(guid) {
            var _this7 = this;

            this.daoService.getStorePromotionsByStoreID(guid).subscribe(function (data) {
              console.log("------ this is teh store detail -----");
              console.log(data);

              if (data.success) {
                _this7.storeData = data['data'];

                if (_this7.storeData.story == "" || _this7.storeData.story == "Store history") {
                  $(".panel-right p").text("");
                } else {
                  $(".panel-right p").text(_this7.storeData.story);
                }
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveStorePromotions",
          value: function retrieveStorePromotions(guid) {
            var _this8 = this;

            this.daoService.getStorePromotionsByID(guid).subscribe(function (data) {
              console.log("------ this is teh store promotion detail -----");
              console.log(data);

              if (data.success) {
                _this8.storePromotions = data['data'];
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveStoreProducts",
          value: function retrieveStoreProducts(guid) {
            var _this9 = this;

            this.daoService.getStoreProducts(guid).subscribe(function (data) {
              console.log("------ this is teh store products -----");
              var result = JSON.parse(data);
              _this9.storeProducts = result[0];
              currentProducts = _this9.storeProducts;
              _this9.products = result[0];

              _this9.products.forEach(function (element) {
                var obj = {
                  description: element.brand + ' - ' + element.description,
                  barcode: element.barcode,
                  guid: element.guid,
                  pack_size: element.pack_size,
                  promotion_id: element.promotion_id,
                  promotion_price: element.promotion_price,
                  selling_price: element.selling_price,
                  quantity: element.quantity,
                  thumbnail_image: element.thumbnail_image,
                  unit: element.unit
                };

                _this9.newProductsModifiedd.push(obj);
              });
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveFeaturedProducts",
          value: function retrieveFeaturedProducts() {
            var _this10 = this;

            var cardHolder = document.querySelector("#featured-products");
            this.daoService.getFeaturedProducts().subscribe(function (data) {
              if (data.success) {
                _this10.featuredProducts = data['data'];
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveNewToMarket",
          value: function retrieveNewToMarket() {
            var _this11 = this;

            this.daoService.getNewToMarket().subscribe(function (data) {
              if (data.success) {
                _this11.newProducts = data['data'];
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getPromotionProducts",
          value: function getPromotionProducts(guid) {
            var products = [];

            if (this.storeProducts) {
              products = this.storeProducts.filter(function (x) {
                return x.promotion_id === guid;
              }); //console.log(products);
            }

            return products;
          }
        }]);

        return DetailsComponent;
      }();

      DetailsComponent.ɵfac = function DetailsComponent_Factory(t) {
        return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_3__["DaoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DetailsComponent,
        selectors: [["store-details"]],
        decls: 85,
        vars: 22,
        consts: [[1, "for-location-search"], [1, "for-location-search-container"], [1, "reactive-form"], ["autocomplete", "off", "novalidate", "", 3, "formGroup", "ngSubmit"], [1, "container"], [1, "row"], [1, "col-sm-7"], [1, "ng-autocomplete"], ["formControlName", "name", "historyIdentifier", "countriesReactiveList", "historyListMaxNumber", "", "notFoundText", "Product not found", 3, "data", "initialValue", "placeHolder", "searchKeyword", "historyHeading", "itemTemplate", "notFoundTemplate"], ["ngAutoCompleteStatic", ""], ["itemTemplateStatic", ""], ["notFoundTemplate", ""], [1, "col-sm-2"], ["type", "submit", 1, "btn", 3, "disabled"], [1, "for-story-history"], [1, "for-story-history-container"], [1, "for-story-history-content"], [1, "for-story-history-panel"], [1, "col"], ["type", "button", "data-toggle", "modal", "data-target", "#storeHistory", 1, "btn", "btn-primary"], ["id", "storeHistory", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], [1, "map-location", 3, "latitude", "longitude"], [3, "iconUrl", "latitude", "longitude"], ["src", "assets/marker(64).png"], ["type", "button", "data-toggle", "modal", "data-target", "#storeStory", 1, "btn", "btn-primary"], ["id", "storeStory", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLongTitle", "aria-hidden", "true", 1, "modal", "fade"], [1, "for"], [2, "padding-top", "1em"], ["onload", "alignLogo();", "width", "200", 3, "src", "alt"], [1, "panels-content"], [1, "panel-left"], [1, "store-history-content"], [1, "content-for-maps"], [1, "for-search-results"], [1, "for-search-results-container"], [1, "for-search-results-content"], [1, "outcome-container"], [1, "outcome-body"], [1, "new-market", "outcome-card"], [1, "new-market-body", "outcome-card-body"], ["ngClass", "hot-deals"], ["ngClass", "section-title"], ["src", "../../../../assets/images/hot-deal.png", "width", "50"], ["ngClass", "new-products", "panelTitle", "New To Market", "panelClass", "new-products", 3, "panelData"], ["ngClass", "featured", "panelTitle", "Featured Products", "panelClass", "featured", 3, "panelData"], ["ngClass", "panel-block-container", "panelClass", "products", 3, "panelTitle", "panelData", 4, "ngFor", "ngForOf"], [1, "item"], [1, "col-sm-3"], ["height", "80", 3, "src"], [1, "col-sm-8"], [3, "innerHTML"], [2, "background-color", "red", "padding", "2px", "color", "white"], ["ngClass", "panel-block-container", "panelClass", "products", 3, "panelTitle", "panelData"]],
        template: function DetailsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DetailsComponent_Template_form_ngSubmit_4_listener() {
              return ctx.submitProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ng-autocomplete", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DetailsComponent_ng_template_11_Template, 12, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DetailsComponent_ng_template_13_Template, 1, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Store History ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Store History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Store History ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "agm-map", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "agm-marker", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Store Story ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Store Story");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Store Story ... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "t Deals ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-panel", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-panel", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, DetailsComponent_app_panel_83_Template, 1, 3, "app-panel", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DetailsComponent_app_panel_84_Template, 1, 3, "app-panel", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.newProductsModifiedd)("placeHolder", ctx.placeholder)("searchKeyword", ctx.keyword)("historyHeading", ctx.historyHeading)("itemTemplate", _r1)("notFoundTemplate", _r3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.reactiveForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.storeData.location_y)("longitude", ctx.storeData.location_x);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0)))("latitude", ctx.storeData.location_y)("longitude", ctx.storeData.location_x);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", ctx.storeData.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.storeData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.newProducts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.featuredProducts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.storePromotions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.storePromotions);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_4__["AutocompleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmMarker"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]],
        styles: [".item[_ngcontent-%COMP%] {\n  border-bottom: solid lightgrey 1px;\n  padding: 0.3em;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #9DCE74;\n  font-weight: 700;\n  border-color: #9DCE74;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  background-color: #60A8DC;\n  border-color: #60A8DC;\n}\n\n.ng-autocomplete[_ngcontent-%COMP%] {\n  max-width: 445px;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  left: 20%;\n}\n\n@media only screen and (max-width: 600px) {\n  .ng-autocomplete[_ngcontent-%COMP%] {\n    position: relative;\n    left: 0%;\n    max-width: 300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3N0b3Jlcy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQ0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFHSTtFQUNJLFNBQUE7QUFBUjs7QUFHQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFFBQUE7SUFDQSxnQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvc3RvcmVzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcbiAgICBib3JkZXItYm90dG9tOnNvbGlkIGxpZ2h0Z3JleSAxcHggO1xuICAgIHBhZGRpbmc6IC4zZW07XG59XG5cbi5uZy1hdXRvY29tcGxldGV7XG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59XG4uYnRuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlEQ0U3NDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1jb2xvcjojOURDRTc0O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBBOERDO1xuICAgIGJvcmRlci1jb2xvcjojNjBBOERDO1xufVxuLm5nLWF1dG9jb21wbGV0ZSB7XG4gICAgbWF4LXdpZHRoOiA0NDVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMCU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAubmctYXV0b2NvbXBsZXRlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICB9XG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'store-details',
            templateUrl: './details.component.html',
            styleUrls: ['./details.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }, {
            type: src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_3__["DaoService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/stores/stores.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/components/home/stores/stores.component.ts ***!
      \************************************************************/

    /*! exports provided: StoresComponent */

    /***/
    function srcAppComponentsHomeStoresStoresComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StoresComponent", function () {
        return StoresComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/dao.service */
      "./src/app/services/dao.service.ts");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /* harmony import */


      var _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../layout/panel/panel.component */
      "./src/app/components/layout/panel/panel.component.ts");

      var StoresComponent = /*#__PURE__*/function () {
        function StoresComponent(daoService) {
          _classCallCheck(this, StoresComponent);

          this.daoService = daoService;
        }

        _createClass(StoresComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.searchStores();
            this.retrieveNewToMarket();
            this.retrieveFeaturedProducts();
            this.retrievePromotion();
            $(".btn-shopping-list").css("display", "inline-block");
          }
        }, {
          key: "retrievePromotion",
          value: function retrievePromotion() {
            var _this12 = this;

            this.daoService.getPromotionProducts().subscribe(function (data) {
              console.log("----- this is the getting promotion products -----");
              var result = JSON.parse(data);
              _this12.promotionProducts = result[0];
              if (_this12.promotionProducts.length > 300) _this12.promotionProducts = _this12.promotionProducts.slice(0, 300);
              console.log(_this12.promotionProducts);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveFeaturedProducts",
          value: function retrieveFeaturedProducts() {
            var _this13 = this;

            this.daoService.getFeaturedProducts().subscribe(function (data) {
              console.log("----- this is the getting featured products -----");
              var result = JSON.parse(data);
              _this13.featuredProducts = result[0];
              console.log(_this13.featuredProducts);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveNewToMarket",
          value: function retrieveNewToMarket() {
            var _this14 = this;

            this.daoService.getNewToMarket().subscribe(function (data) {
              if (data.success) {
                _this14.newProducts = data['data'];
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "retrieveStores",
          value: function retrieveStores(lng, lat, radius) {
            var _this15 = this;

            // this.daoService.getAllStores(lng, lat, radius).subscribe((data) => {
            //   if (data.success) {
            //     this.stores = data['data'];
            //   }
            // }, (error) => {
            //   console.log(error);
            // });
            this.daoService.getAllStores().subscribe(function (data) {
              console.log("--- getting all stores ----"); // console.log(JSON.parse(data))

              var result = JSON.parse(data);
              _this15.stores = result[0];
              console.log(_this15.stores);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "searchStores",
          value: function searchStores() {
            var loc = localStorage.getItem('temp-geo');
            console.log("----- this is the location for getting searchstores ------");
            console.log(loc);

            if (loc) {
              var lat = JSON.parse(loc.toString()).lat,
                  lng = JSON.parse(loc.toString()).lng,
                  radius = 50;
              this.retrieveStores(lng, lat, radius);
            }
          }
        }, {
          key: "formatLabel",
          value: function formatLabel(value) {
            return value;
          }
        }]);

        return StoresComponent;
      }();

      StoresComponent.ɵfac = function StoresComponent_Factory(t) {
        return new (t || StoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"]));
      };

      StoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StoresComponent,
        selectors: [["app-stores"]],
        decls: 77,
        vars: 3,
        consts: [[1, "for-home-content"], [1, "home-content-container"], [1, "home-content"], [1, "location-container"], [1, "user-location"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482\n                4.796c-.646.566-1.658.106-1.658-.753V3.204a1\n                1 0 0 1 1.659-.753l5.48\n                4.796a1 1 0 0 1 0\n                1.506z"], ["onClick", "focusAddress()", 1, "current-address"], [1, "for-location-search"], [1, "for-location-search-container"], [1, "for-location-search-content"], [1, "for-location-search-form"], [1, "search-form-header"], [1, "search-form-fields"], [1, "form-group"], ["type", "text", "id", "txtLandingAddress", "name", "Search", "onfocus", "initAutocomplete()", "placeholder", "Enter your address", 1, "form-control"], [1, "form-group", "for-btn-locate"], ["title", "Find My Location", "matTooltip", "Find\n                My Location", "onclick", "geolocate()", 1, "btn-locate"], [1, "locate-me"], ["onclick", "reverseGeocodeAddress(document.getElementById('txtLandingAddress').value)"], [1, "for-search-results"], [1, "for-search-results-container"], [1, "for-search-results-content"], [1, "outcome-container"], [1, "outcome-body"], [1, "new-market", "outcome-card"], [1, "new-market-header", "outcome-card-header"], [1, "new-market-body", "outcome-card-body"], ["ngClass", "hot-deals"], ["ngClass", "section-title"], ["src", "../../../../assets/images/hot-deal.png", "width", "50"], ["ngClass", "new-products", "panelTitle", "New To Market", "panelClass", "new-products", 3, "panelData"], ["ngClass", "featured", "panelTitle", "Featured Products", "panelClass", "featured", 3, "panelData"], [1, "current-promotions", "outcome-card"], ["id", "featured-products", 1, "current-promotions-body", "outcome-card-body"], [1, "for-stores-container"], ["ngClass", "stores-container"], [1, "ratings-content"], [1, "for-rating"], [1, "ratings-header"], [1, "ratings-body"], [1, "ratings-stars"], ["onclick", "setRating(event, 1)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                  15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                  6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                  0l2.184 4.327\n                                  4.898.696c.441.062.612.636.283.95l-3.523\n                                  3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                  13.187l-4.389 2.256z"], ["onclick", "setRating(event, 2)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                  16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                    15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                    6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                    0l2.184 4.327\n                                    4.898.696c.441.062.612.636.283.95l-3.523\n                                    3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                    13.187l-4.389 2.256z"], ["onclick", "setRating(event, 3)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                    16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                      15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                      6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                      0l2.184 4.327\n                                      4.898.696c.441.062.612.636.283.95l-3.523\n                                      3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                      13.187l-4.389 2.256z"], ["onclick", "setRating(event, 4)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                      16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                        15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                        6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                        0l2.184 4.327\n                                        4.898.696c.441.062.612.636.283.95l-3.523\n                                        3.356.83 4.73c.078.443-.36.79-.746.592L8\n                                        13.187l-4.389 2.256z"], ["onclick", "setRating(event ,5)"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                        16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-star-fill"], ["d", "M3.612\n                                          15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173\n                                          6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927\n                                          0l2.184 4.327\n                                          4.898.696c.441.062.612.636.283.95l-3.523\n                                          3.356.83\n                                          4.73c.078.443-.36.79-.746.592L8\n                                          13.187l-4.389 2.256z"], [1, "review"], ["placeholder", "Add a review", "id", "review", 1, "form-control"], [1, "ratings-footer"], ["onclick", "saveRatings()", 1, "btn-save-rating"], ["onclick", "closeRating()"], ["panelTitle", "Current Promotions", "panelClass", "stores", 3, "panelData"]],
        template: function StoresComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Your Location ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Find promotions, new to market and featured products in your area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "fieldset", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "fieldset", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "gps_fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "fieldset", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "H");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "t Deals");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-panel", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-panel", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Store Rating");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "svg", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "svg", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "fieldset", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "textarea", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "app-panel", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.promotionProducts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.featuredProducts);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("panelData", ctx.stores);
          }
        },
        directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_5__["LazyImgDirective"], _layout_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9zdG9yZXMvc3RvcmVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoresComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-stores',
            templateUrl: './stores.component.html',
            styleUrls: ['./stores.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_services_dao_service__WEBPACK_IMPORTED_MODULE_1__["DaoService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/terms/terms.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/components/home/terms/terms.component.ts ***!
      \**********************************************************/

    /*! exports provided: TermsComponent */

    /***/
    function srcAppComponentsHomeTermsTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
        return TermsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TermsComponent = /*#__PURE__*/function () {
        function TermsComponent() {
          _classCallCheck(this, TermsComponent);
        }

        _createClass(TermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TermsComponent;
      }();

      TermsComponent.ɵfac = function TermsComponent_Factory(t) {
        return new (t || TermsComponent)();
      };

      TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TermsComponent,
        selectors: [["app-terms"]],
        decls: 31,
        vars: 0,
        consts: [[1, "for-terms"], [1, "for-terms-container"], [1, "for-terms-content"], [1, "for-terms-header"], [1, "terms-section"], [1, "terms-container"], [1, "terms-content", "d-flex", "justify-content-center"], [1, "terms-and-conditions", 2, "width", "70%"], [1, "terms-card"], [1, "terms-header"], [1, "terms-body"]],
        template: function TermsComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["@media only screen and (max-width: 600px) {\n  .terms-and-conditions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0U7SUFDRSxXQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS90ZXJtcy90ZXJtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50ZXJtcy1hbmQtY29uZGl0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-terms',
            templateUrl: './terms.component.html',
            styleUrls: ['./terms.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/home/vendor-terms/vendor-terms.component.ts":
    /*!************************************************************************!*\
      !*** ./src/app/components/home/vendor-terms/vendor-terms.component.ts ***!
      \************************************************************************/

    /*! exports provided: VendorTermsComponent */

    /***/
    function srcAppComponentsHomeVendorTermsVendorTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorTermsComponent", function () {
        return VendorTermsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VendorTermsComponent = /*#__PURE__*/function () {
        function VendorTermsComponent() {
          _classCallCheck(this, VendorTermsComponent);
        }

        _createClass(VendorTermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VendorTermsComponent;
      }();

      VendorTermsComponent.ɵfac = function VendorTermsComponent_Factory(t) {
        return new (t || VendorTermsComponent)();
      };

      VendorTermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VendorTermsComponent,
        selectors: [["app-vendor-terms"]],
        decls: 82,
        vars: 0,
        consts: [[1, "for-terms"], [1, "for-terms-container"], [1, "for-terms-content"], [1, "for-terms-header"], [1, "container"], [1, "terms-vendor"], ["href", "www.seemesave.com"], [2, "color", "#60A8DC"], [1, "dashed"]],
        template: function VendorTermsComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: [".terms-vendor[_ngcontent-%COMP%] {\n  margin-top: 1em;\n  padding: 10px;\n}\n\n.terms-vendor[_ngcontent-%COMP%]   ul.dashed[_ngcontent-%COMP%] {\n  margin-left: 2em;\n  list-style-type: none;\n}\n\n.terms-vendor[_ngcontent-%COMP%]   ul.dashed[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  text-indent: -5px;\n}\n\n.terms-vendor[_ngcontent-%COMP%]   ul.dashed[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n  content: \"-\";\n  text-indent: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ZlbmRvci10ZXJtcy92ZW5kb3ItdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3ZlbmRvci10ZXJtcy92ZW5kb3ItdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtdmVuZG9yIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRlcm1zLXZlbmRvciB1bC5kYXNoZWQge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4udGVybXMtdmVuZG9yIHVsLmRhc2hlZCA+IGxpIHtcbiAgICB0ZXh0LWluZGVudDogLTVweDtcbn1cblxuLnRlcm1zLXZlbmRvciB1bC5kYXNoZWQgPiBsaTpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiLVwiO1xuICAgIHRleHQtaW5kZW50OiAtNXB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VendorTermsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-vendor-terms',
            templateUrl: './vendor-terms.component.html',
            styleUrls: ['./vendor-terms.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/footer/footer.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/layout/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppComponentsLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 43,
        vars: 0,
        consts: [[1, "footer-container"], [1, "footer-content"], [1, "footer-main"], [1, "footer-upper-content"], [1, "company-info"], ["loading", "lazy", "alt", "SeeMeSave Logo", "src", "./assets/svg/logo.svg", 1, "logo-image"], [1, "company-info-body"], [1, "company-about-info"], ["routerLink", "/about"], ["width", "1em", "height", "1em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14 8.753l-5.482\n                                                4.796c-.646.566-1.658.106-1.658-.753V3.204a1\n                                                1 0 0 1 1.659-.753l5.48\n                                                4.796a1 1 0 0 1 0\n                                                1.506z"], ["routerLink", "/contact"], ["width", "1em", "height", "1em", "viewBox", "0 0 16\n                                                        16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-caret-right-fill"], ["d", "M12.14\n                                                            8.753l-5.482\n                                                            4.796c-.646.566-1.658.106-1.658-.753V3.204a1\n                                                            1 0 0 1\n                                                            1.659-.753l5.48\n                                                            4.796a1 1 0\n                                                            0 1 0\n                                                            1.506z"], [1, "company-contact-info"], ["_ngcontent-wcb-c126", "", 1, "fb-feed"], ["_ngcontent-wcb-c126", "", "src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fseemesavesa%2F&tabs=timeline&width=290&height=200&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId", "loading", "lazy", "width", "290", "height", "200", "scrolling", "no", "frameborder", "0", "allowtransparency", "true", "allow", "encrypted-media", 2, "border", "none", "overflow", "hidden"], ["_ngcontent-wcb-c126", "", "role", "img", "ngclass", "scroll-arrow", "aria-hidden", "true", "ng-reflect-ng-class", "scroll-arrow", 1, "mat-icon", "notranslate", "material-icons", "scroll-arrow", "mat-icon-no-color"], [1, "footer-lower-content"], ["href", "/terms"], ["href", "/privacy"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "128 Leslie Road, Building 2, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Design Quarter, Fourways, ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "South Africa, 2191");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Who We Are ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "svg", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "iframe", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "expand_more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2020 \xA9 SeeMeSave, Sniffing Out Savings | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Terms of Use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Privacy ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/header/header.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/components/layout/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppComponentsLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function HeaderComponent_a_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_button_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " List ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_a_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authService, cookieService, router) {
          _classCallCheck(this, HeaderComponent);

          this.authService = authService;
          this.cookieService = cookieService;
          this.router = router;
          this.menuToggle = false;
          this.shoppingList = [];

          this.toggleModal = function () {
            $(".app-navigation").slideToggle(500);
          };
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var localAddress = localStorage.getItem('full-address');

            if (localAddress) {
              this.fullAddress = "<span>".concat(localAddress, "</span>");
            }

            this.profile = JSON.parse(localStorage.getItem('userProfile'));
          }
        }, {
          key: "_isAuthenticated",
          value: function _isAuthenticated() {
            return !!this.authService._isAuthenticated();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 66,
        vars: 4,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], ["href", "/", 1, "navbar-brand"], ["loading", "lazy", "alt", "SeeMeSave Logo", "src", "./assets/svg/logo.svg", 2, "width", "180px"], ["id", "btnCollapse", "type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["href", "/", 1, "nav-link"], [1, "fa", "fa-fw", "fa-home"], [1, "sr-only"], ["href", "/about", 1, "nav-link"], [1, "fa", "fa-fw", "fa-info-circle"], ["href", "/contact", 1, "nav-link"], [1, "fa", "fa-fw", "fa-address-book"], ["id", "account", 1, "form-inline", "my-2", "my-lg-0"], ["class", "btn btn-outline-success  form-control my-2 my-sm-0", "href", "/account/login", 4, "ngIf"], ["class", "btn btn-outline-success  form-control my-2 my-sm-0", "href", "/account/register", 4, "ngIf"], ["class", "btn btn-outline-success form-control mr-sm-2", "onclick", "toggleShoppingModal()", 4, "ngIf"], ["class", "btn btn-outline-success form-control mr-sm-2", "href", "/account/profile", 4, "ngIf"], ["href", "account/become-a-vendor", 1, "btn", "btn-outline-success", "form-control", "mr-sm-2"], [1, "fa", "fa-fw", "fa-plus-square"], [1, "for-shopping-list-container"], [1, "for-shopping-list-content"], [1, "for-shopping-list-header"], [1, "for-shopping-list-body"], [1, "list-body-options"], [1, "list-body-options-links"], [1, "form-group"], [1, "shopping-list-table"], [1, "total-price"], ["onclick", "closeShoppingModal()"], ["src", "../../../../assets/icons/email.png", "width", "20"], ["src", "../../../../assets/icons/sms.png", "width", "20"], ["href", "https://wa.me/0739204376"], ["src", "../../../../assets/icons/whatsapp.png", "width", "20"], ["id", "for-feedback", 1, "for-feedback"], [1, "for-feedback-content"], ["onclick", "closeFeedbackModal()"], ["href", "/account/login", 1, "btn", "btn-outline-success", "form-control", "my-2", "my-sm-0"], [1, "fa", "fa-fw", "fa-user"], ["href", "/account/register", 1, "btn", "btn-outline-success", "form-control", "my-2", "my-sm-0"], [1, "fa", "fa-fw", "fa-user-plus"], ["onclick", "toggleShoppingModal()", 1, "btn", "btn-outline-success", "form-control", "mr-sm-2"], [1, "fa", "fa-fw", "fa-shopping-bag"], [1, "badge", "badge-success"], ["href", "/account/profile", 1, "btn", "btn-outline-success", "form-control", "mr-sm-2"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_a_22_Template, 3, 0, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_a_23_Template, 3, 0, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_button_24_Template, 5, 0, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_a_25_Template, 3, 0, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Become a Vendor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Shopping List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "R0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "fieldset", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "fieldset", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._isAuthenticated());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isAuthenticated());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._isAuthenticated());
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: [".send-icon[_ngcontent-%COMP%] {\n  padding: 0.2em;\n  background-color: transparent;\n  border: solid;\n  border-width: 0.5px;\n  border-color: #9DCE74;\n}\n\n.send-icon[_ngcontent-%COMP%]:hover {\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  color: #60A8DC;\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #60A8DC;\n  color: white;\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  color: #60A8DC;\n  border-color: #60A8DC;\n}\n\n#account[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #60A8DC;\n  color: white;\n  border-color: #60A8DC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSw2QkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUtBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQURKOztBQUdFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VuZC1pY29uIHtcbiAgICBwYWRkaW5nOiAwLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvLyBib3gtc2hhZG93OiAwIDAgMDtcbiAgICBib3JkZXI6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogLjVweDtcbiAgICBib3JkZXItY29sb3I6ICM5RENFNzQ7XG5cbn1cbi5zZW5kLWljb246aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogIzYwQThEQztcblxufVxuXG4vL015IHN0eWxyZSBkcm9wZG93blxuI2FjY291bnQgYSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBjb2xvcjogIzYwQThEQztcbiAgICBib3JkZXItY29sb3I6ICM2MEE4REM7XG4gIH1cbiAgI2FjY291bnQgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwQThEQztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjBBOERDO1xuICB9XG5cbiAgI2FjY291bnQgYnV0dG9ue1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG4gICAgY29sb3I6ICM2MEE4REM7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjBBOERDO1xuICB9XG4gICNhY2NvdW50IGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwQThEQztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjBBOERDO1xuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _services_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/landing/landing.component.ts":
    /*!****************************************************************!*\
      !*** ./src/app/components/layout/landing/landing.component.ts ***!
      \****************************************************************/

    /*! exports provided: LandingComponent */

    /***/
    function srcAppComponentsLayoutLandingLandingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingComponent", function () {
        return LandingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _home_counter_counter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../home/counter/counter.component */
      "./src/app/components/home/counter/counter.component.ts");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var LandingComponent = /*#__PURE__*/function () {
        function LandingComponent() {
          _classCallCheck(this, LandingComponent);

          this.countFeatured = 436;
          this.countLocations = 254;
          this.countPromotions = 2034;
        }

        _createClass(LandingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingComponent;
      }();

      LandingComponent.ɵfac = function LandingComponent_Factory(t) {
        return new (t || LandingComponent)();
      };

      LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LandingComponent,
        selectors: [["app-landing"]],
        decls: 37,
        vars: 0,
        consts: [[1, "container", "justify-content-center"], [1, "for-location-search"], [1, "for-location-search-container"], [1, "for-location-search-content"], [1, "for-location-search-form"], [1, "search-form-header"], [1, "search-form-fields"], [1, "form-group"], ["type", "text", "id", "txtLandingAddress", "name", "Search", "onfocus", "initAutocomplete()", "placeholder", "Enter your address", 1, "form-control"], [1, "form-group", "for-btn-locate"], ["titile", "Find My Location", "matTooltip", "Find\n              My Location", "onclick", "geolocate()", 1, "btn-locate"], [1, "locate-me"], ["onclick", "reverseGeocodeAddress(document.getElementById('txtLandingAddress').value)"], [1, "save-banner"], [1, "banner-bg"], [1, "banner-details"], [1, "vendor-banner", "for-vendor-banner"], ["href", "/account/become-a-vendor"]],
        template: function LandingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-counter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Find promotions, new to market and featured products in your area");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fieldset", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "gps_fixed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Save Big. Less Hassle.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "More Stores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Search promotional products with significant savings at the click of a button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Do you own a Store?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Do you?! Easy Store sign-up, upload your products and start increasing your sales through the SeeMeSave platform. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Become a Vendor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_home_counter_counter_component__WEBPACK_IMPORTED_MODULE_1__["CounterComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-landing',
            templateUrl: './landing.component.html',
            styleUrls: ['./landing.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/layout.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/layout/layout.component.ts ***!
      \*******************************************************/

    /*! exports provided: LayoutComponent */

    /***/
    function srcAppComponentsLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
        return LayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/components/layout/header/header.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/components/layout/footer/footer.component.ts");

      var LayoutComponent = /*#__PURE__*/function () {
        function LayoutComponent(router) {
          _classCallCheck(this, LayoutComponent);

          this.router = router;
          this.pageName = this.router.url.split('/').pop();
        }

        _createClass(LayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LayoutComponent;
      }();

      LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
        return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LayoutComponent,
        selectors: [["app-layout"]],
        decls: 5,
        vars: 0,
        consts: [[1, "page-container"], ["id", "customBackdrop"]],
        template: function LayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-layout',
            templateUrl: './layout.component.html',
            styleUrls: ['./layout.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/page-not-found/page-not-found.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/components/layout/page-not-found/page-not-found.component.ts ***!
      \******************************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function srcAppComponentsLayoutPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);

          this.title = 'Page Not Found';
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 15,
        vars: 0,
        consts: [[1, "justify-content-center"], [1, "container"], [1, "global_link"], [2, "font-size", "15em"], [1, "fa", "fa-fw", "fa-frown-o"], ["routerLink", "/", 1, "reload"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".global_link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n  color: #4d4d4d;\n  background-image: -webkit-linear-gradient(top, #ffffff 0%, #F6F6F6 47%, #ededed 100%);\n  margin-top: 1em;\n  justify-content: center;\n}\n\n.global_link[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: red;\n  text-align: center;\n  font-weight: bolder;\n  font-size: 5em;\n  font-style: italic;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  font-variant: small-caps;\n}\n\n.reload[_ngcontent-%COMP%] {\n  color: white;\n  -webkit-appearance: none;\n  margin-top: 20px;\n  font-size: 20px;\n  padding: 8px 30px;\n  background: #60a8dc;\n  border: none;\n  border-radius: 2px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  margin-bottom: 100px;\n  outline: none;\n}\n\n.reload[_ngcontent-%COMP%]:active {\n  box-shadow: none;\n  transform: translateY(1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EscUZBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FBR0Y7O0FBREE7RUFDRSxnQkFBQTtFQUNBLDBCQUFBO0FBSUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWxfbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMzAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZmZmZmZmIDAlLCAjRjZGNkY2IDQ3JSwgI2VkZWRlZCAxMDAlKTtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nbG9iYWxfbGluayBoNCB7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiA1ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtdmFyaWFudDogc21hbGwtY2Fwcztcbn1cbi5yZWxvYWQge1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDhweCAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjBhOGRjO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMjYpO1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5yZWxvYWQ6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/panel/panel.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/components/layout/panel/panel.component.ts ***!
      \************************************************************/

    /*! exports provided: PanelComponent */

    /***/
    function srcAppComponentsLayoutPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PanelComponent", function () {
        return PanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _templates_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./templates/products.component */
      "./src/app/components/layout/panel/templates/products.component.ts");
      /* harmony import */


      var _templates_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./templates/store.component */
      "./src/app/components/layout/panel/templates/store.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      function PanelComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function PanelComponent_ng_template_4_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function PanelComponent_ng_template_4_products_panel_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "products-panel", 11, 12);
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selling_price", item_r15.selling_price)("thumbnail_image", item_r15.thumbnail_image != null ? item_r15.thumbnail_image : item_r15.media)("brand", item_r15.brand)("description", item_r15.description)("pack_size", item_r15.pack_size != null ? item_r15.pack_size : item_r15.packsize + " " + item_r15.unit);
        }
      }

      function PanelComponent_ng_template_4_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PanelComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelComponent_ng_template_4_div_0_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_ng_template_4_products_panel_1_Template, 2, 5, "products-panel", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_ng_template_4_ng_template_2_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.panelData)("ngIfThen", ctx_r2.products)("ngIfElse", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.panelData);
        }
      }

      function PanelComponent_ng_template_6_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function PanelComponent_ng_template_6_store_panel_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "store-panel", 18, 19);
        }

        if (rf & 2) {
          var item_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/store/", item_r21.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", item_r21.logo)("name", item_r21.name)("location", item_r21.display_name)("products", item_r21.products)("promotions", item_r21.promotions);
        }
      }

      function PanelComponent_ng_template_6_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PanelComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PanelComponent_ng_template_6_div_0_Template, 1, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_ng_template_6_store_panel_1_Template, 2, 6, "store-panel", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_ng_template_6_ng_template_2_Template, 4, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.panelData)("ngIfThen", ctx_r4.stores)("ngIfElse", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.panelData);
        }
      }

      function PanelComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function PanelComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
        }
      }

      function PanelComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_back_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PanelComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "arrow_forward_ios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PanelComponent = /*#__PURE__*/function () {
        function PanelComponent() {
          _classCallCheck(this, PanelComponent);
        }

        _createClass(PanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PanelComponent;
      }();

      PanelComponent.ɵfac = function PanelComponent_Factory(t) {
        return new (t || PanelComponent)();
      };

      PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PanelComponent,
        selectors: [["app-panel"]],
        inputs: {
          panelTitle: "panelTitle",
          panelClass: "panelClass",
          panelData: "panelData",
          panelTemplate: "panelTemplate"
        },
        decls: 14,
        vars: 9,
        consts: [["ngClass", "store-panel"], [3, "innerHTML"], [3, "ngClass"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["productsBlock", ""], ["storesBlock", ""], [4, "ngIf", "ngIfThen"], ["scrollLeft", ""], ["scrollRight", ""], ["ngClass", "panel-block", 3, "selling_price", "thumbnail_image", "brand", "description", "pack_size", 4, "ngFor", "ngForOf"], ["noproducts", ""], ["ngClass", "panel-block", 3, "selling_price", "thumbnail_image", "brand", "description", "pack_size"], ["products", ""], [1, "no-data"], ["role", "status", 1, "spinner-grow", "text-primary"], [1, "sr-only"], ["ngClass", "panel-block", 3, "logo", "name", "location", "products", "promotions", "routerLink", 4, "ngFor", "ngForOf"], ["nostores", ""], ["ngClass", "panel-block", 3, "logo", "name", "location", "products", "promotions", "routerLink"], ["stores", ""], ["onclick", "javascript:scrollWindow(this);", 1, "scroll-left"], ["onclick", "javascript:scrollWindow(this);", 1, "scroll-right"]],
        template: function PanelComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _templates_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsPanelComponent"], _templates_store_component__WEBPACK_IMPORTED_MODULE_3__["StorePanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-panel',
            templateUrl: './panel.component.html',
            styleUrls: ['./panel.component.scss']
          }]
        }], function () {
          return [];
        }, {
          panelTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          panelData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          panelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/panel/templates/products.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/layout/panel/templates/products.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ProductsPanelComponent */

    /***/
    function srcAppComponentsLayoutPanelTemplatesProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProductsPanelComponent", function () {
        return ProductsPanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");
      /*<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                   <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>&nbsp; */


      var ProductsPanelComponent = /*#__PURE__*/function () {
        function ProductsPanelComponent() {
          _classCallCheck(this, ProductsPanelComponent);
        }

        _createClass(ProductsPanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "generatePrice",
          value: function generatePrice() {
            if (this.selling_price) {
              var high = this.selling_price.split('.')[0],
                  low = this.selling_price.split('.')[1]; // return `<span>R${high}</span>.<span>${low}</span>`;

              return 'R' + this.selling_price;
            }
          }
        }]);

        return ProductsPanelComponent;
      }();

      ProductsPanelComponent.ɵfac = function ProductsPanelComponent_Factory(t) {
        return new (t || ProductsPanelComponent)();
      };

      ProductsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProductsPanelComponent,
        selectors: [["products-panel"]],
        inputs: {
          thumbnail_image: "thumbnail_image",
          brand: "brand",
          description: "description",
          pack_size: "pack_size",
          unit: "unit",
          selling_price: "selling_price",
          barcode: "barcode"
        },
        decls: 25,
        vars: 8,
        consts: [[1, "for-prom-content"], [1, "img", "img-responsive", "thumbnail"], ["loading", "lazy", "alt", "", 1, "for-prom-images", 3, "src"], [1, "details"], [1, "product-brand"], [1, "product-description"], [1, "product-pack-size"], [1, "product-price", 3, "innerHtml"], [1, "button-proms"], ["onclick", "likeProduct(event)", 3, "id"], ["src", "../../../../../assets/icons/like.png", "width", "15"], [1, "badge", "badge-light", 2, "margin", "2px !important"], ["type", "number", "name", "quantity", "placeholder", "Qty", "id", "quantity"], ["onclick", "addToShoppingList(event)", 3, "id"]],
        template: function ProductsPanelComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", ctx.thumbnail_image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.brand);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.pack_size, " ", ctx.unit, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.generatePrice(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.thumbnail_image);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.thumbnail_image);
          }
        },
        directives: [_shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsPanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'products-panel',
            template: "<div class=\"for-prom-content\">\n              <div class=\"img img-responsive thumbnail\">\n                  <img class=\"for-prom-images\" src=\"https://seemesave-web.fra1.digitaloceanspaces.com/media/{{thumbnail_image}}\" loading=\"lazy\" alt=\"\" />\n                </div>\n                <div class=\"details\">\n                  <div class=\"product-brand\">{{brand}}</div>\n                  <div class=\"product-description\">{{description}}</div>\n                  <div class=\"product-pack-size\">{{pack_size}} {{unit}}</div>\n                  <div class=\"product-price\" [innerHtml]=\"generatePrice()\"></div>\n                  <!-- <div class=\"product-icons\" [innerHtml]=\"generateIcons()\"></div> -->\n                </div>\n              </div>\n              <br /> <br /> <br /> <br /> <br />\n              <div class=\"button-proms\">\n             <button id=\"{{thumbnail_image}}\" onclick=\"likeProduct(event)\"><img src=\"../../../../../assets/icons/like.png\" width=\"15\"/>\n             <span class=\"badge badge-light\" style=\"margin: 2px !important;\">0</span></button>\n              <input type=\"number\" name=\"quantity\" placeholder=\"Qty\" id=\"quantity\"/>\n             <button id=\"{{thumbnail_image}}\" onclick=\"addToShoppingList(event)\"><span>Add To Shopping List</span></button>\n             </div>\n              ",
            styleUrls: []
          }]
        }], function () {
          return [];
        }, {
          thumbnail_image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          brand: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          pack_size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          selling_price: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          barcode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/panel/templates/store.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/layout/panel/templates/store.component.ts ***!
      \**********************************************************************/

    /*! exports provided: StorePanelComponent */

    /***/
    function srcAppComponentsLayoutPanelTemplatesStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorePanelComponent", function () {
        return StorePanelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/LazyImg/lazy-img.directive */
      "./src/app/components/shared/LazyImg/lazy-img.directive.ts");

      var StorePanelComponent = /*#__PURE__*/function () {
        function StorePanelComponent() {
          _classCallCheck(this, StorePanelComponent);
        }

        _createClass(StorePanelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StorePanelComponent;
      }();

      StorePanelComponent.ɵfac = function StorePanelComponent_Factory(t) {
        return new (t || StorePanelComponent)();
      };

      StorePanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StorePanelComponent,
        selectors: [["store-panel"]],
        inputs: {
          logo: "logo",
          name: "name",
          promotions: "promotions",
          products: "products",
          location: "location",
          guid: "guid",
          rating: "rating"
        },
        decls: 21,
        vars: 6,
        consts: [[1, "for-stores", 3, "id"], ["onmouseover", "toggleRatings(event)", "title", "Mark as Favourite Store"], [1, "details"], [1, "store-promotions", "bubble"], [1, "count"], [1, "store-products", "bubble"], [1, "store-location"], [1, "img"], ["loading", "lazy", "alt", "", 1, "for-store-image-logo", 3, "src"], [1, "store-name"]],
        template: function StorePanelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "favorite_border");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "promotions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "products");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promotions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.products);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://seemesave-web.fra1.digitaloceanspaces.com/media/", ctx.logo, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _shared_LazyImg_lazy_img_directive__WEBPACK_IMPORTED_MODULE_2__["LazyImgDirective"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorePanelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'store-panel',
            template: "<div class=\"for-stores\" id=\"{{name}}\">\n  <mat-icon onmouseover=\"toggleRatings(event)\" title=\"Mark as Favourite Store\">favorite_border</mat-icon>\n  <div class=\"details\">\n    <div class=\"store-promotions bubble\">\n      <span class=\"count\">{{promotions}}</span>\n      <span>promotions</span>\n    </div>\n    <div class=\"store-products bubble\">\n      <span class=\"count\">{{products}}</span>\n      <span>products</span>\n    </div>\n  </div>\n  <div class=\"store-location\">{{location}}</div>\n  <div class=\"img\">\n    <img class=\"for-store-image-logo\" src=\"https://seemesave-web.fra1.digitaloceanspaces.com/media/{{logo}}\" loading=\"lazy\" alt=\"\" />\n  </div>\n  <div class=\"store-name\"><p>{{name}}</p></div>\n  </div>",
            styleUrls: []
          }]
        }], function () {
          return [];
        }, {
          logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          promotions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          location: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          guid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/layout/site-stats/site-stats.component.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/components/layout/site-stats/site-stats.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SiteStatsComponent */

    /***/
    function srcAppComponentsLayoutSiteStatsSiteStatsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SiteStatsComponent", function () {
        return SiteStatsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/number-tracker-component/number-tracker-component.component */
      "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var SiteStatsComponent = /*#__PURE__*/function () {
        function SiteStatsComponent() {
          _classCallCheck(this, SiteStatsComponent);

          this.countFeatured = 436;
          this.countLocations = 254;
          this.countPromotions = 2034;
        }

        _createClass(SiteStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SiteStatsComponent;
      }();

      SiteStatsComponent.ɵfac = function SiteStatsComponent_Factory(t) {
        return new (t || SiteStatsComponent)();
      };

      SiteStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SiteStatsComponent,
        selectors: [["app-site-stats"]],
        decls: 18,
        vars: 9,
        consts: [[1, "grid-container"], [1, "grid-child"], [1, "counters"], [1, "featured-counter"], [1, "count"], [3, "end"], [1, "value"], [1, "promotions-counter"], [1, "locations-counter"]],
        template: function SiteStatsComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.countFeatured));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.countPromotions));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("end", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.countLocations));
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _shared_number_tracker_component_number_tracker_component_component__WEBPACK_IMPORTED_MODULE_2__["NumberTrackerComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L3NpdGUtc3RhdHMvc2l0ZS1zdGF0cy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SiteStatsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-site-stats',
            templateUrl: './site-stats.component.html',
            styleUrls: ['./site-stats.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/shared/LazyImg/lazy-img.directive.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/shared/LazyImg/lazy-img.directive.ts ***!
      \*****************************************************************/

    /*! exports provided: LazyImgDirective */

    /***/
    function srcAppComponentsSharedLazyImgLazyImgDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyImgDirective", function () {
        return LazyImgDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LazyImgDirective = function LazyImgDirective(_ref) {
        var nativeElement = _ref.nativeElement;

        _classCallCheck(this, LazyImgDirective);

        var supports = ('loading' in HTMLImageElement.prototype);

        if (supports) {
          nativeElement.setAttribute('loading', 'lazy');
        }
      };

      LazyImgDirective.ɵfac = function LazyImgDirective_Factory(t) {
        return new (t || LazyImgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      LazyImgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: LazyImgDirective,
        selectors: [["img"]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyImgDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: 'img'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/shared/number-tracker-component/number-tracker-component.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: NumberTrackerComponent */

    /***/
    function srcAppComponentsSharedNumberTrackerComponentNumberTrackerComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NumberTrackerComponent", function () {
        return NumberTrackerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var NumberTrackerComponent = /*#__PURE__*/function () {
        function NumberTrackerComponent() {
          var _this16 = this;

          _classCallCheck(this, NumberTrackerComponent);

          this.countInterval = 2.5;
          this.currentNumber = 0;
          this._counterSub$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();

          this._counterSub$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (endRange) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, _this16.countInterval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(_this16.positiveOrNegative(endRange, _this16.currentNumber)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(_this16.currentNumber), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (acc, curr) {
              return acc + curr;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(_this16.isApproachingRange(endRange, _this16.currentNumber)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._onDestroy$)).subscribe(function (val) {
            return _this16.currentNumber = val;
          });
        }

        _createClass(NumberTrackerComponent, [{
          key: "positiveOrNegative",
          value: function positiveOrNegative(endRange, currentNumber) {
            return endRange > currentNumber ? 1 : -1;
          }
        }, {
          key: "isApproachingRange",
          value: function isApproachingRange(endRange, currentNumber) {
            return endRange > currentNumber ? function (val) {
              return val <= endRange;
            } : function (val) {
              return val >= endRange;
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._onDestroy$.next();

            this._onDestroy$.complete();
          }
        }, {
          key: "end",
          set: function set(endRange) {
            this._counterSub$.next(endRange);
          }
        }]);

        return NumberTrackerComponent;
      }();

      NumberTrackerComponent.ɵfac = function NumberTrackerComponent_Factory(t) {
        return new (t || NumberTrackerComponent)();
      };

      NumberTrackerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NumberTrackerComponent,
        selectors: [["number-tracker"]],
        inputs: {
          end: "end",
          countInterval: "countInterval"
        },
        decls: 1,
        vars: 1,
        template: function NumberTrackerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentNumber);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberTrackerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'number-tracker',
            template: "{{ currentNumber }}"
          }]
        }], function () {
          return [];
        }, {
          end: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          countInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/services/auth-service/auth.guard.ts":
    /*!*****************************************************!*\
      !*** ./src/app/services/auth-service/auth.guard.ts ***!
      \*****************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppServicesAuthServiceAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth-service/auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.authService._isAuthenticated()) {
              return true;
            }

            this.router.navigate(['/account/login'], {
              queryParams: {
                returnUrl: state.url
              }
            });
            return false;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/auth-service/auth.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/services/auth-service/auth.service.ts ***!
      \*******************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppServicesAuthServiceAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var baseUrl = 'https://api.seemesave.com/api/v1';
      var apiUrl = 'http://svcseemesave.us-east-2.elasticbeanstalk.com/';
      var StoreApiLists = {
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
        getPromotionProducts: 'getPromotionProducts.php'
      };

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, cookieService, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.cookieService = cookieService;
          this.router = router;
          this.isLoggedIn = false;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        } // check the handle error
        // this is the check the error when result of api
        // there is the client or server side error detect part


        _createClass(AuthService, [{
          key: "handleError",
          value: function handleError(error) {
            var msg = '';
            console.log("----- this is the error -----");

            if (error.error instanceof ErrorEvent) {
              // client-side error
              msg = "client server : ".concat(error.error.message);
            } else {
              // server-side error
              msg = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
          } // register

        }, {
          key: "register",
          value: function register(data) {
            var url = "".concat(apiUrl, "userRegistration.php");
            return this.postApi(url, data);
          } // login

        }, {
          key: "login",
          value: function login(data) {
            var url = "".concat(apiUrl, "login.php");
            return this.postApi(url, data);
          } /// get user profile
          // get userprofie by user id

        }, {
          key: "getUserProfileByUserID",
          value: function getUserProfileByUserID(userid) {
            // ----- userid is email of user -----
            var url = "".concat(apiUrl).concat(StoreApiLists.getUserProfileByUserID, "?userid=").concat(userid);
            return this.getApi(url);
          } // generate password token
          // generate password

        }, {
          key: "generatePasswordToken",
          value: function generatePasswordToken(email) {
            var url = "".concat(apiUrl).concat(StoreApiLists.generatePasswordToken, "?email=").concat(email);
            return this.getApi(url);
          }
        }, {
          key: "postApi",
          value: function postApi(url, data) {
            return this.http.post(url, data, {
              headers: this.headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "getApi",
          value: function getApi(url) {
            return this.http.get(url, {
              headers: this.headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "_login",
          value: function _login(username, password) {
            var user = {
              username: username,
              password: password
            };
            return this.http.post(baseUrl + '/account/login', user);
          }
        }, {
          key: "_logout",
          value: function _logout() {
            try {
              var user = JSON.parse(this.cookieService.get('guid'));
              user.success = false;
              this.cookieService.set('guid', JSON.stringify(user)); // this.cookieService.deleteAll();

              localStorage.clear();
              this.router.navigate(['/account/login']);
            } catch (error) {
              console.log('Error: ', error);
            }
          }
        }, {
          key: "_isAuthenticated",
          value: function _isAuthenticated() {
            var _isAuth = localStorage.getItem('userID');

            return _isAuth;
          }
        }, {
          key: "_register",
          value: function _register(user) {
            return this.http.post(baseUrl + '/account/register', user);
          }
        }, {
          key: "_resetPassword",
          value: function _resetPassword(email) {
            var data = {
              username: email
            };
            console.log(data);
            return this.http.post(baseUrl + '/account/reset-old-password', JSON.stringify(data));
          }
        }, {
          key: "_getToken",
          value: function _getToken() {
            return localStorage.getItem('userID');
          }
        }, {
          key: "_changePassword",
          value: function _changePassword(username, password, token) {
            var data = {
              username: username,
              password: password,
              token: token
            };
            return this.http.post(baseUrl + '/account/change-password', data);
          }
        }, {
          key: "_getUserProfile",
          value: function _getUserProfile(guid) {
            return this.http.get(baseUrl + '/account/profile/' + guid);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/auth-service/token-interceptor.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/services/auth-service/token-interceptor.service.ts ***!
      \********************************************************************/

    /*! exports provided: TokenInterceptorService */

    /***/
    function srcAppServicesAuthServiceTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
        return TokenInterceptorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/services/auth-service/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var TokenInterceptorService = /*#__PURE__*/function () {
        function TokenInterceptorService(injector, auth, router) {
          _classCallCheck(this, TokenInterceptorService);

          this.injector = injector;
          this.auth = auth;
          this.router = router;
        }

        _createClass(TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this17 = this;

            var authReq = request;

            if (this.auth._getToken() != null) {
              authReq = request.clone({
                setHeaders: {
                  Authorization: "Bearer ".concat(this.auth._getToken())
                }
              });
            }

            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (err) {
              if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                console.log(err);
                console.log('req url :: ' + request.url);

                if (err.status === 401) {
                  _this17.router.navigate(['/login']);
                }
              }
            }));
          }
        }]);

        return TokenInterceptorService;
      }();

      TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) {
        return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TokenInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptorService,
        factory: TokenInterceptorService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/services/dao.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/services/dao.service.ts ***!
      \*****************************************/

    /*! exports provided: DaoService */

    /***/
    function srcAppServicesDaoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DaoService", function () {
        return DaoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var baseUrl = 'https://api.seemesave.com/api/v1';
      var apiUrl = 'http://svcseemesave.us-east-2.elasticbeanstalk.com/';
      var StoreApiLists = {
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
        getPromotionProducts: 'getPromotionProducts.php'
      };

      var DaoService = /*#__PURE__*/function () {
        function DaoService(http, router, cookieService) {
          _classCallCheck(this, DaoService);

          this.http = http;
          this.router = router;
          this.cookieService = cookieService;
          this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        } // check the handle error
        // this is the check the error when result of api
        // there is the client or server side error detect part


        _createClass(DaoService, [{
          key: "handleError",
          value: function handleError(error) {
            var msg = '';
            console.log("----- this is the error -----");

            if (error.error instanceof ErrorEvent) {
              // client-side error
              msg = "client server : ".concat(error.error.message);
            } else {
              // server-side error
              msg = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
          }
        }, {
          key: "postApi",
          value: function postApi(url, data) {
            return this.http.post(url, data, {
              headers: this.headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          }
        }, {
          key: "getApi",
          value: function getApi(url) {
            return this.http.get(url, {
              headers: this.headers,
              responseType: 'text'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
          } ///------- THIS IS THE GET POST FUNCTION -------------//
          // GET ALL STORES

        }, {
          key: "getAllStores",
          value: function getAllStores() {
            var url = "".concat(apiUrl).concat(StoreApiLists.getAllStores);
            return this.getApi(url);
          } // get categories

        }, {
          key: "getCategoreis",
          value: function getCategoreis() {
            var url = "".concat(apiUrl).concat(StoreApiLists.getCategories);
            return this.getApi(url);
          } // get cities

        }, {
          key: "getCities",
          value: function getCities() {
            var url = "".concat(apiUrl).concat(StoreApiLists.getCities);
            return this.getApi(url);
          } // get featured products

        }, {
          key: "getFeaturedProducts",
          value: function getFeaturedProducts() {
            var url = "".concat(apiUrl).concat(StoreApiLists.getFeaturedProducts);
            return this.getApi(url);
          } // get neareststores

        }, {
          key: "getNearestStores",
          value: function getNearestStores(address, city) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getFeaturedProducts, "?address=").concat(address, "&city=").concat(city);
            return this.getApi(url);
          } // get numberof promostion products by store

        }, {
          key: "getNumberOfPromotionProductsByStore",
          value: function getNumberOfPromotionProductsByStore(vendcd) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getNumberOfPromotionProductsByStore, "?vendcd=").concat(vendcd);
            return this.getApi(url);
          } // get promostion countby vendor

        }, {
          key: "getPromotionCountByVendor",
          value: function getPromotionCountByVendor(vendcd) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getPromotionCountByVendor, "?vendcd=").concat(vendcd);
            return this.getApi(url);
          } // get promotion products by location

        }, {
          key: "getPromotionProductsByLocation",
          value: function getPromotionProductsByLocation(location) {
            /// ---- location = user is in ----- city name?
            var url = "".concat(apiUrl).concat(StoreApiLists.getPromotionProductsByLocation, "?location=").concat(location);
            return this.getApi(url);
          } // get promotion products by productid

        }, {
          key: "GetPromotionProductsByProductID",
          value: function GetPromotionProductsByProductID(prodid) {
            var url = "".concat(apiUrl).concat(StoreApiLists.GetPromotionProductsByProductID, "?prodid=").concat(prodid);
            return this.getApi(url);
          } // get store promotion by store

        }, {
          key: "getStorePromotionsByStore",
          value: function getStorePromotionsByStore(vendcd) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getStorePromotionsByStore, "?vendcd=").concat(vendcd);
            return this.getApi(url);
          } // get store promotion by storeid

        }, {
          key: "getStorePromotionsByStoreID",
          value: function getStorePromotionsByStoreID(vendcd) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getStorePromotionsByStoreID, "?vendcd=").concat(vendcd);
            return this.getApi(url);
          } // get userprofie by user id

        }, {
          key: "getUserProfileByUserID",
          value: function getUserProfileByUserID(userid) {
            // ----- userid is email of user -----
            var url = "".concat(apiUrl).concat(StoreApiLists.getUserProfileByUserID, "?userid=").concat(userid);
            return this.getApi(url);
          } // send email

        }, {
          key: "sendemail",
          value: function sendemail() {
            var url = "".concat(apiUrl).concat(StoreApiLists.sendemail);
            return this.getApi(url);
          } // send sms

        }, {
          key: "sendsms",
          value: function sendsms() {
            var url = "".concat(apiUrl).concat(StoreApiLists.sendsms);
            return this.getApi(url);
          } // send whats app

        }, {
          key: "sendWhatsApp",
          value: function sendWhatsApp() {
            var url = "".concat(apiUrl).concat(StoreApiLists.sendWhatsApp);
            return this.getApi(url);
          } // get promotion products by id

        }, {
          key: "getPromotionProductsByID",
          value: function getPromotionProductsByID(promo) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getPromotionProductsByLocation, "?promo=").concat(promo);
            return this.getApi(url);
          } // get promotion by product

        }, {
          key: "getPromotionsByProduct",
          value: function getPromotionsByProduct(prodcd) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getPromotionsByProduct, "?prodcd=").concat(prodcd);
            return this.getApi(url);
          } // get store products

        }, {
          key: "getStoreProducts",
          value: function getStoreProducts(vendcd) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getStoreProducts, "?vendcd=").concat(vendcd);
            return this.getApi(url);
          } // get store promotion

        }, {
          key: "getStorePromotions",
          value: function getStorePromotions() {
            var url = "".concat(apiUrl).concat(StoreApiLists.getStorePromotions);
            return this.getApi(url);
          } // get store promotion by id

        }, {
          key: "getStorePromotionsByID",
          value: function getStorePromotionsByID(promo) {
            var url = "".concat(apiUrl).concat(StoreApiLists.getStorePromotionsByID, "?promo=").concat(promo);
            return this.getApi(url);
          } // get promotion products

        }, {
          key: "getPromotionProducts",
          value: function getPromotionProducts() {
            var url = "".concat(apiUrl).concat(StoreApiLists.getPromotionProducts);
            return this.getApi(url);
          } // getFeaturedProducts(): Observable<any> {
          //   let url = baseUrl + '/products/featured/';
          //   return this.http.get(url);
          // }

        }, {
          key: "getNewToMarket",
          value: function getNewToMarket() {
            var url = baseUrl + '/products/new-to-market/';
            return this.http.get(url);
          } // getAllStores(lng:any,lat:any,radius:any): Observable<any> {
          //   let url = `${baseUrl}/stores?lng=${lng}&lat=${lat}&radius=${radius}`,
          //   fullAddress = localStorage.getItem('full-address');
          //   this.cookieService.set('sms-address', fullAddress);
          //   return this.http.get(url);
          // }

        }, {
          key: "getStoreDetails",
          value: function getStoreDetails(id) {
            var url = "".concat(baseUrl, "/stores/details/").concat(id);
            return this.http.get(url);
          } // getStoreProducts(id): Observable<any> {
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

        }, {
          key: "create",
          value: function create(data) {
            return this.http.post(baseUrl, data);
          }
        }, {
          key: "update",
          value: function update(id, data) {
            return this.http.put("".concat(baseUrl, "/").concat(id), data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.http["delete"]("".concat(baseUrl, "/").concat(id));
          }
        }, {
          key: "deleteAll",
          value: function deleteAll() {
            return this.http["delete"](baseUrl);
          }
        }, {
          key: "findByTitle",
          value: function findByTitle(title) {
            return this.http.get("".concat(baseUrl, "?title=").concat(title));
          }
        }]);

        return DaoService;
      }();

      DaoService.ɵfac = function DaoService_Factory(t) {
        return new (t || DaoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]));
      };

      DaoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DaoService,
        factory: DaoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DaoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/ftf/Documents/projects/angular_seemesave/52_angular_apis/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map