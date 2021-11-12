function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/manage/manage.component */
    "./src/app/components/manage/manage.component.ts");
    /* harmony import */


    var _data_center_data_dashboard_data_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./data-center/data-dashboard/data-dashboard.component */
    "./src/app/data-center/data-dashboard/data-dashboard.component.ts");
    /* harmony import */


    var _invoice_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./invoice/customers/customers.component */
    "./src/app/invoice/customers/customers.component.ts");
    /* harmony import */


    var _invoice_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./invoice/customer/customer.component */
    "./src/app/invoice/customer/customer.component.ts");
    /* harmony import */


    var _invoice_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./invoice/customer-form/customer-form.component */
    "./src/app/invoice/customer-form/customer-form.component.ts");
    /* harmony import */


    var _invoice_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./invoice/invoices/invoices.component */
    "./src/app/invoice/invoices/invoices.component.ts");
    /* harmony import */


    var _invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./invoice/invoice-form/invoice-form.component */
    "./src/app/invoice/invoice-form/invoice-form.component.ts");
    /* harmony import */


    var _invoice_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./invoice/invoice/invoice.component */
    "./src/app/invoice/invoice/invoice.component.ts");

    var routes = [{
      path: '',
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'manage',
      component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_3__["ManageComponent"]
    }, {
      path: 'datacenter',
      component: _data_center_data_dashboard_data_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DataDashboardComponent"]
    }, {
      path: 'customers',
      component: _invoice_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"]
    }, {
      path: 'invoices',
      component: _invoice_invoices_invoices_component__WEBPACK_IMPORTED_MODULE_8__["InvoicesComponent"]
    }, {
      path: 'invoices/create',
      component: _invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_9__["InvoiceFormComponent"]
    }, {
      path: 'invoices/:invoiceId',
      component: _invoice_invoice_invoice_component__WEBPACK_IMPORTED_MODULE_10__["InvoiceComponent"]
    }, {
      path: 'invoices/:invoiceId/edit',
      component: _invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_9__["InvoiceFormComponent"]
    }, {
      path: 'customers',
      component: _invoice_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"]
    }, {
      path: 'customers/create',
      component: _invoice_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFormComponent"]
    }, {
      path: 'customers/:customerId',
      component: _invoice_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"]
    }, {
      path: 'customers/:customerId/edit',
      component: _invoice_customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_7__["CustomerFormComponent"]
    }, {
      path: '',
      pathMatch: 'full',
      redirectTo: '/invoices'
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
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 37,
      vars: 0,
      consts: [["color", "primary"], ["fxShow", "true", "fxHide.gt-sm", "true"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", "routerLink", "/", 1, "companyName"], [1, "example-spacer"], ["fxShow", "true", "fxHide.lt-md", "true"], ["mat-button", "", "routerLink", "/"], ["mat-button", "", "routerLink", "/customers"], ["mat-button", "", "routerLink", "/invoices"], ["mat-button", "", "routerLink", "/manage"], ["mat-button", "", "routerLink", "/datacenter"], ["fxFlexFill", "", 1, "example-container"], ["color", "primary", "fxLayout", "column", "mode", "over", "opened", "false", "fxHide.gt-sm", "true"], ["sidenav", ""], ["fxLayout", "column"], ["fxFlexFill", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

            return _r0.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "StockTrack");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Invoices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Manage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "DataCenter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-sidenav-container", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-sidenav", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Invoices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Manage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "DataCenter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-sidenav-content", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContainer"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenav"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
      styles: [".companyName[_ngcontent-%COMP%] {\n  font-size: 100%;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  height: 5vh;\n}\n\ndiv[_ngcontent-%COMP%] {\n  overflow: inherit;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  min-height: 93vh !important;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 100%;\n  white-space: normal;\n}\n\nbutton[_ngcontent-%COMP%] {\n  font-size: 100%;\n  min-width: -webkit-min-content;\n  min-width: -moz-min-content;\n  min-width: min-content;\n}\n\n.example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.mat-sidenav-content[_ngcontent-%COMP%] {\n  font-size: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQXNCO0VBQXRCLDJCQUFzQjtFQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wYW55TmFtZSB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgaGVpZ2h0OiA1dmg7XG59XG5cbmRpdiB7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogOTN2aCAhaW1wb3J0YW50O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbn1cblxuLmV4YW1wbGUtaWNvbiB7XG4gIHBhZGRpbmc6IDAgMTRweDtcbn1cblxuLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5tYXQtc2lkZW5hdi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _services_stocks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/stocks.service */
    "./src/app/services/stocks.service.ts");
    /* harmony import */


    var _invoice_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./invoice/service/customers/customers.service */
    "./src/app/invoice/service/customers/customers.service.ts");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/summary/summary.component */
    "./src/app/components/summary/summary.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/manage/manage.component */
    "./src/app/components/manage/manage.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./invoice/invoice.module */
    "./src/app/invoice/invoice.module.ts");
    /* harmony import */


    var _data_center_data_center_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./data-center/data-center.module */
    "./src/app/data-center/data-center.module.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_stocks_service__WEBPACK_IMPORTED_MODULE_5__["StocksService"], _invoice_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_15__["InvoiceModule"], _data_center_data_center_module__WEBPACK_IMPORTED_MODULE_16__["DataCenterModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_13__["ManageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_15__["InvoiceModule"], _data_center_data_center_module__WEBPACK_IMPORTED_MODULE_16__["DataCenterModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_11__["SummaryComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_13__["ManageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"], _invoice_invoice_module__WEBPACK_IMPORTED_MODULE_15__["InvoiceModule"], _data_center_data_center_module__WEBPACK_IMPORTED_MODULE_16__["DataCenterModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"]],
          providers: [_services_stocks_service__WEBPACK_IMPORTED_MODULE_5__["StocksService"], _invoice_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_stocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/stocks.service */
    "./src/app/services/stocks.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../summary/summary.component */
    "./src/app/components/summary/summary.component.ts");

    function DashboardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_mat_grid_tile_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "summary", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stock_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stock", stock_r2);
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(service) {
        _classCallCheck(this, DashboardComponent);

        this.service = service;
        this.symbols = service.get();
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.readStockData();
        }
      }, {
        key: "readStockData",
        value: function readStockData() {
          var _this = this;

          this.service.load(this.symbols).subscribe(function (stocks) {
            return _this.stocks = stocks;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stocks_service__WEBPACK_IMPORTED_MODULE_1__["StocksService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["dashboard"]],
      decls: 4,
      vars: 2,
      consts: [[1, "container", "mt-2"], ["class", "", "style", "text-align: center;", 4, "ngIf"], ["cols", "2", "rowHeight", "2:1"], [4, "ngFor", "ngForOf"], [1, "", 2, "text-align", "center"], [3, "stock"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-grid-list", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_mat_grid_tile_3_Template, 2, 1, "mat-grid-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.stocks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stocks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__["SummaryComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _services_stocks_service__WEBPACK_IMPORTED_MODULE_1__["StocksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/manage/manage.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/manage/manage.component.ts ***!
    \*******************************************************/

  /*! exports provided: ManageComponent */

  /***/
  function srcAppComponentsManageManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageComponent", function () {
      return ManageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/stocks.service */
    "./src/app/services/stocks.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function ManageComponent_tr_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageComponent_tr_6_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var symbol_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.remove(symbol_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Remove ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var symbol_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](symbol_r1);
      }
    }

    var ManageComponent = /*#__PURE__*/function () {
      function ManageComponent(service) {
        _classCallCheck(this, ManageComponent);

        this.service = service;
        this.symbols = service.get();
      }

      _createClass(ManageComponent, [{
        key: "add",
        value: function add() {
          this.symbols = this.service.add(this.stock.toUpperCase());
          this.stock = "";
        }
      }, {
        key: "remove",
        value: function remove(symbol) {
          this.symbols = this.service.remove(symbol);
        }
      }]);

      return ManageComponent;
    }();

    ManageComponent.ɵfac = function ManageComponent_Factory(t) {
      return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_1__["StocksService"]));
    };

    ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManageComponent,
      selectors: [["manage"]],
      decls: 7,
      vars: 2,
      consts: [[1, "manage-form"], [3, "submit"], ["name", "stock", "matInput", "", "type", "text", "placeholder", "Add Stock", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "manage-td"], ["mat-button", "", "color", "warn", 3, "click"]],
      template: function ManageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ManageComponent_Template_form_submit_1_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ManageComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.stock = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ManageComponent_tr_6_Template, 6, 1, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.symbols);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]],
      styles: [".manage-form[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n    margin-top: 5px;\n    text-align: center;\n    width: 100%;\n}\n\n.manage-td[_ngcontent-%COMP%] {\n    width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2UvbWFuYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hbmFnZS9tYW5hZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5hZ2UtZm9ybSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYW5hZ2UtdGQge1xuICAgIHdpZHRoOiA1MCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "manage",
          templateUrl: "./manage.component.html",
          styleUrls: ["./manage.component.css"]
        }]
      }], function () {
        return [{
          type: src_app_services_stocks_service__WEBPACK_IMPORTED_MODULE_1__["StocksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/summary/summary.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/summary/summary.component.ts ***!
    \*********************************************************/

  /*! exports provided: SummaryComponent */

  /***/
  function srcAppComponentsSummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
      return SummaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    var _c0 = function _c0(a0, a1) {
      return {
        increase: a0,
        decrease: a1
      };
    };

    var SummaryComponent = /*#__PURE__*/function () {
      function SummaryComponent() {
        _classCallCheck(this, SummaryComponent);
      }

      _createClass(SummaryComponent, [{
        key: "isNegative",
        value: function isNegative() {
          return this.stock && this.stock.change < 0;
        }
      }, {
        key: "isPositive",
        value: function isPositive() {
          return this.stock && this.stock.change > 0;
        }
      }]);

      return SummaryComponent;
    }();

    SummaryComponent.ɵfac = function SummaryComponent_Factory(t) {
      return new (t || SummaryComponent)();
    };

    SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SummaryComponent,
      selectors: [["summary"]],
      inputs: {
        stock: "stock"
      },
      decls: 12,
      vars: 21,
      consts: [[1, "stock-card", 3, "ngClass"], [2, "color", "#fff", "margin", "0"]],
      template: function SummaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.isPositive(), ctx.isNegative()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.stock == null ? null : ctx.stock.symbol == null ? null : ctx.stock.symbol.toUpperCase(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](7, 5, ctx.stock == null ? null : ctx.stock.lastTradePriceOnly, "USD", "symbol", ".2"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](10, 10, ctx.stock == null ? null : ctx.stock.change, "USD", "symbol", ".2"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 15, ctx.stock == null ? null : ctx.stock.changeInPercent, ".2"), ") ");
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]],
      styles: ["[_nghost-%COMP%]   .stock-card[_ngcontent-%COMP%] {\n  background: #ac9898;\n}\n[_nghost-%COMP%]   .stock-card.increase[_ngcontent-%COMP%] {\n  background: #8ed65b;\n  color: #fff;\n}\n[_nghost-%COMP%]   .stock-card.decrease[_ngcontent-%COMP%] {\n  background: #832727;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAuc3RvY2stY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNhYzk4OTg7XG59XG46aG9zdCAuc3RvY2stY2FyZC5pbmNyZWFzZSB7XG4gIGJhY2tncm91bmQ6ICM4ZWQ2NWI7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLnN0b2NrLWNhcmQuZGVjcmVhc2Uge1xuICBiYWNrZ3JvdW5kOiAjODMyNzI3O1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "summary",
          templateUrl: "./summary.component.html",
          styleUrls: ["./summary.component.css"]
        }]
      }], null, {
        stock: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data-center/alert/alert.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/data-center/alert/alert.component.ts ***!
    \******************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppDataCenterAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AlertComponent = function AlertComponent() {
      _classCallCheck(this, AlertComponent);
    };

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)();
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["app-alert"]],
      inputs: {
        date: "date"
      },
      decls: 4,
      vars: 4,
      consts: [[1, "container", "mt-2"], ["role", "alert", 1, "alert", "alert-warning"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" The data was refreshed at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.date, "medium"), " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtY2VudGVyL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.css']
        }]
      }], null, {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data-center/data-center.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/data-center/data-center.module.ts ***!
    \***************************************************/

  /*! exports provided: DataCenterModule */

  /***/
  function srcAppDataCenterDataCenterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataCenterModule", function () {
      return DataCenterModule;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/app/data-center/alert/alert.component.ts");
    /* harmony import */


    var _metric_metric_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./metric/metric.component */
    "./src/app/data-center/metric/metric.component.ts");
    /* harmony import */


    var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nodes/nodes.component */
    "./src/app/data-center/nodes/nodes.component.ts");
    /* harmony import */


    var _nodes_detail_nodes_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nodes-detail/nodes-detail.component */
    "./src/app/data-center/nodes-detail/nodes-detail.component.ts");
    /* harmony import */


    var _nodes_row_nodes_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./nodes-row/nodes-row.component */
    "./src/app/data-center/nodes-row/nodes-row.component.ts");
    /* harmony import */


    var _data_dashboard_data_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./data-dashboard/data-dashboard.component */
    "./src/app/data-center/data-dashboard/data-dashboard.component.ts");

    var DataCenterModule = function DataCenterModule() {
      _classCallCheck(this, DataCenterModule);
    };

    DataCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DataCenterModule
    });
    DataCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DataCenterModule_Factory(t) {
        return new (t || DataCenterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataCenterModule, {
        declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _metric_metric_component__WEBPACK_IMPORTED_MODULE_4__["MetricComponent"], _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_5__["NodesComponent"], _nodes_detail_nodes_detail_component__WEBPACK_IMPORTED_MODULE_6__["NodesDetailComponent"], _nodes_row_nodes_row_component__WEBPACK_IMPORTED_MODULE_7__["NodesRowComponent"], _data_dashboard_data_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DataDashboardComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataCenterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          entryComponents: [_nodes_detail_nodes_detail_component__WEBPACK_IMPORTED_MODULE_6__["NodesDetailComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"]],
          declarations: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_3__["AlertComponent"], _metric_metric_component__WEBPACK_IMPORTED_MODULE_4__["MetricComponent"], _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_5__["NodesComponent"], _nodes_detail_nodes_detail_component__WEBPACK_IMPORTED_MODULE_6__["NodesDetailComponent"], _nodes_row_nodes_row_component__WEBPACK_IMPORTED_MODULE_7__["NodesRowComponent"], _data_dashboard_data_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DataDashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/data-center/data-dashboard/data-dashboard.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/data-center/data-dashboard/data-dashboard.component.ts ***!
    \************************************************************************/

  /*! exports provided: DataDashboardComponent */

  /***/
  function srcAppDataCenterDataDashboardDataDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataDashboardComponent", function () {
      return DataDashboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../alert/alert.component */
    "./src/app/data-center/alert/alert.component.ts");
    /* harmony import */


    var _metric_metric_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../metric/metric.component */
    "./src/app/data-center/metric/metric.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nodes/nodes.component */
    "./src/app/data-center/nodes/nodes.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nodes_row_nodes_row_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../nodes-row/nodes-row.component */
    "./src/app/data-center/nodes-row/nodes-row.component.ts");

    var _c0 = ["alertBox"];

    function DataDashboardComponent_ng_template_4_Template(rf, ctx) {}

    function DataDashboardComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
      }

      if (rf & 2) {
        var node_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r4);
      }
    }

    function DataDashboardComponent_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
      }

      if (rf & 2) {
        var node_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", node_r5);
      }
    }

    var DataDashboardComponent = /*#__PURE__*/function () {
      function DataDashboardComponent(ComponentFactoryResolver) {
        _classCallCheck(this, DataDashboardComponent);

        this.ComponentFactoryResolver = ComponentFactoryResolver;
      }

      _createClass(DataDashboardComponent, [{
        key: "alert",
        value: function alert(date) {
          var _this2 = this;

          if (!this.alertRef) {
            var alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"]);
            this.alertRef = this.alertBox.createComponent(alertComponent);
          }

          this.alertRef.instance.date = date;
          this.alertRef.changeDetectorRef.detectChanges();
          setTimeout(function () {
            return _this2.destroyAlert();
          }, 5000);
        }
      }, {
        key: "destroyAlert",
        value: function destroyAlert() {
          if (this.alertRef) {
            this.alertRef.destroy();
            delete this.alertRef;
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.interval);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.generateData();
          this.interval = setInterval(function () {
            _this3.refresh();
          }, 15000);
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.generateData();
          this.alert(new Date());
        }
      }, {
        key: "generateData",
        value: function generateData() {
          this.cluster1 = [];
          this.cluster2 = [];
          this.cpu = {
            used: 0,
            available: 0
          };
          this.mem = {
            used: 0,
            available: 0
          };

          for (var i = 1; i < 4; i++) {
            this.cluster1.push(this.randomNode(i));
          }

          for (var _i = 4; _i < 7; _i++) {
            this.cluster2.push(this.randomNode(_i));
          }
        }
      }, {
        key: "randomNode",
        value: function randomNode(i) {
          var node = {
            name: 'node' + i,
            cpu: {
              available: 16,
              used: this.randomInteger(0, 16)
            },
            mem: {
              available: 48,
              used: this.randomInteger(0, 48)
            }
          };
          this.cpu.used += node.cpu.used;
          this.cpu.available += node.cpu.available;
          this.mem.used += node.mem.used;
          this.mem.available += node.mem.available;
          return node;
        }
      }, {
        key: "randomInteger",
        value: function randomInteger() {
          var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
          return Math.floor(Math.random() * max) + 1;
        }
      }]);

      return DataDashboardComponent;
    }();

    DataDashboardComponent.ɵfac = function DataDashboardComponent_Factory(t) {
      return new (t || DataDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]));
    };

    DataDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DataDashboardComponent,
      selectors: [["app-datadashboard"]],
      viewQuery: function DataDashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.alertBox = _t.first);
        }
      },
      decls: 32,
      vars: 6,
      consts: [[1, "container", "mt-2"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["alertBox", ""], [1, "row"], [1, "col-sm-6", 3, "used", "available"], [1, "card", "card-block"], [1, "card-body"], [1, "navbar", "navbar-dark", "bg-inverse", "mb-1"], [1, "navbar-brand", "mb-0"], ["app-nodes", "", 1, "table", "table-hover"], ["app-nodes-row", "", 3, "node", 4, "ngFor", "ngForOf"], ["ngbModalContainer", ""], ["app-nodes-row", "", 3, "node"]],
      template: function DataDashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataDashboardComponent_Template_button_click_1_listener() {
            return ctx.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Reload ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DataDashboardComponent_ng_template_4_Template, 0, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-metric", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "metric-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CPU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "metric-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "utilization of CPU cores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-metric", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "metric-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Memory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "metric-description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "utilization of memory in GB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cluster 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DataDashboardComponent_tr_25_Template, 1, 1, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Cluster 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, DataDashboardComponent_tr_30_Template, 1, 1, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "template", 11);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("used", ctx.cpu.used)("available", ctx.cpu.available);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("used", ctx.mem.used)("available", ctx.mem.available);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cluster1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cluster2);
        }
      },
      directives: [_metric_metric_component__WEBPACK_IMPORTED_MODULE_2__["MetricComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _nodes_nodes_component__WEBPACK_IMPORTED_MODULE_4__["NodesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nodes_row_nodes_row_component__WEBPACK_IMPORTED_MODULE_6__["NodesRowComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtY2VudGVyL2RhdGEtZGFzaGJvYXJkL2RhdGEtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-datadashboard',
          templateUrl: './data-dashboard.component.html',
          styleUrls: ['./data-dashboard.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
        }];
      }, {
        alertBox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['alertBox', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data-center/metric/metric.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/data-center/metric/metric.component.ts ***!
    \********************************************************/

  /*! exports provided: MetricComponent */

  /***/
  function srcAppDataCenterMetricMetricComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetricComponent", function () {
      return MetricComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = [[["metric-title"]], [["metric-description"]]];

    var _c1 = function _c1(a0, a1) {
      return {
        "bg-danger": a0,
        "bg-success": a1
      };
    };

    var _c2 = ["metric-title", "metric-description"];

    var MetricComponent = /*#__PURE__*/function () {
      function MetricComponent() {
        _classCallCheck(this, MetricComponent);

        this.value = 0;
        this.max = 100;
      }

      _createClass(MetricComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
          if (changes.max && isNaN(changes.max.currentValue)) this.max - 0;
        }
      }, {
        key: "isDanger",
        value: function isDanger() {
          return this.value / this.max > 0.7;
        }
      }]);

      return MetricComponent;
    }();

    MetricComponent.ɵfac = function MetricComponent_Factory(t) {
      return new (t || MetricComponent)();
    };

    MetricComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetricComponent,
      selectors: [["app-metric"]],
      inputs: {
        value: ["used", "value"],
        max: ["available", "max"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c2,
      decls: 11,
      vars: 13,
      consts: [[1, "card", "card-block"], [1, "card-body"], [1, "navbar", "navbar-dark", "bg-primary", "mb-1", 3, "ngClass"], [1, "navbar-brand", "mb-0"], [1, "card-title"], [1, "card-text"], [3, "value", "max", "type"]],
      template: function MetricComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](9, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ngb-progressbar", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c1, ctx.isDanger(), !ctx.isDanger()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx.value, "/", ctx.max, " (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 7, ctx.value / ctx.max, "1.0-2"), ") ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("max", ctx.max)("type", ctx.isDanger() ? "danger" : "success");
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]],
      styles: [".card-body[_ngcontent-%COMP%] {\n    color: brown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YS1jZW50ZXIvbWV0cmljL21ldHJpYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtY2VudGVyL21ldHJpYy9tZXRyaWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkge1xuICAgIGNvbG9yOiBicm93bjtcbn0iXX0= */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetricComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-metric',
          templateUrl: './metric.component.html',
          styleUrls: ['./metric.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], null, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['used']
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['available']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data-center/nodes-detail/nodes-detail.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/data-center/nodes-detail/nodes-detail.component.ts ***!
    \********************************************************************/

  /*! exports provided: NodesDetailComponent */

  /***/
  function srcAppDataCenterNodesDetailNodesDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodesDetailComponent", function () {
      return NodesDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _metric_metric_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../metric/metric.component */
    "./src/app/data-center/metric/metric.component.ts");

    var NodesDetailComponent = /*#__PURE__*/function () {
      function NodesDetailComponent(activeModal) {
        _classCallCheck(this, NodesDetailComponent);

        this.activeModal = activeModal;
      }

      _createClass(NodesDetailComponent, [{
        key: "isDanger",
        value: function isDanger(prop) {
          return this.node[prop].used / this.node[prop].available > 0.7;
        }
      }, {
        key: "getType",
        value: function getType(prop) {
          return this.isDanger(prop) ? 'danger' : 'success';
        }
      }]);

      return NodesDetailComponent;
    }();

    NodesDetailComponent.ɵfac = function NodesDetailComponent_Factory(t) {
      return new (t || NodesDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    NodesDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NodesDetailComponent,
      selectors: [["app-nodes-detail"]],
      inputs: {
        node: "node"
      },
      decls: 15,
      vars: 5,
      consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "container"], [1, "col-xs-6"], [3, "used", "available"]],
      template: function NodesDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodesDetailComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-metric", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "metric-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "CPU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-metric", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "metric-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Memory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.node.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("used", ctx.node.cpu.used)("available", ctx.node.cpu.available);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("used", ctx.node.mem.used)("available", ctx.node.mem.available);
        }
      },
      directives: [_metric_metric_component__WEBPACK_IMPORTED_MODULE_2__["MetricComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtY2VudGVyL25vZGVzLWRldGFpbC9ub2Rlcy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodesDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nodes-detail',
          templateUrl: './nodes-detail.component.html',
          styleUrls: ['./nodes-detail.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data-center/nodes-row/nodes-row.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/data-center/nodes-row/nodes-row.component.ts ***!
    \**************************************************************/

  /*! exports provided: NodesRowComponent */

  /***/
  function srcAppDataCenterNodesRowNodesRowComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodesRowComponent", function () {
      return NodesRowComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nodes_detail_nodes_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../nodes-detail/nodes-detail.component */
    "./src/app/data-center/nodes-detail/nodes-detail.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["app-nodes-row", ""];

    var NodesRowComponent = /*#__PURE__*/function () {
      function NodesRowComponent(modalService) {
        _classCallCheck(this, NodesRowComponent);

        this.modalService = modalService;
      }

      _createClass(NodesRowComponent, [{
        key: "isDanger",
        value: function isDanger(prop) {
          return this.node[prop].used / this.node[prop].available / 0.7;
        }
      }, {
        key: "open",
        value: function open(node) {
          var modal = this.modalService.open(_nodes_detail_nodes_detail_component__WEBPACK_IMPORTED_MODULE_1__["NodesDetailComponent"]);
          modal.componentInstance.node = node;
        }
      }]);

      return NodesRowComponent;
    }();

    NodesRowComponent.ɵfac = function NodesRowComponent_Factory(t) {
      return new (t || NodesRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    NodesRowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NodesRowComponent,
      selectors: [["", "app-nodes-row", ""]],
      inputs: {
        node: "node"
      },
      attrs: _c0,
      decls: 15,
      vars: 19,
      consts: [["scope", "row"], [1, "btn", "btn-secondary", 3, "click"]],
      template: function NodesRowComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "percent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NodesRowComponent_Template_button_click_13_listener() {
            return ctx.open(ctx.node);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.node.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-danger", ctx.isDanger("cpu"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.node.cpu.used, "/", ctx.node.cpu.available, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-danger", ctx.isDanger("cpu"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 15, ctx.node.cpu.used / ctx.node.cpu.available), ")\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-danger", ctx.isDanger("mem"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.node.mem.used, "/", ctx.node.mem.available, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("table-danger", ctx.isDanger("mem"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, ctx.node.mem.used / ctx.node.mem.available), ")\n");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["PercentPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtY2VudGVyL25vZGVzLXJvdy9ub2Rlcy1yb3cuY29tcG9uZW50LmNzcyJ9 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodesRowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[app-nodes-row]',
          templateUrl: './nodes-row.component.html',
          styleUrls: ['./nodes-row.component.css'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, {
        node: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/data-center/nodes/nodes.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/data-center/nodes/nodes.component.ts ***!
    \******************************************************/

  /*! exports provided: NodesComponent */

  /***/
  function srcAppDataCenterNodesNodesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NodesComponent", function () {
      return NodesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["app-nodes", ""];
    var _c1 = ["*"];

    var NodesComponent = /*#__PURE__*/function () {
      function NodesComponent() {
        _classCallCheck(this, NodesComponent);
      }

      _createClass(NodesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NodesComponent;
    }();

    NodesComponent.ɵfac = function NodesComponent_Factory(t) {
      return new (t || NodesComponent)();
    };

    NodesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NodesComponent,
      selectors: [["", "app-nodes", ""]],
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 11,
      vars: 2,
      consts: [[3, "colSpan"]],
      template: function NodesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Node");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CPU");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Memory");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", 2);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGEtY2VudGVyL25vZGVzL25vZGVzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[app-nodes]',
          templateUrl: './nodes.component.html',
          styleUrls: ['./nodes.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/customer-form/customer-form.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/invoice/customer-form/customer-form.component.ts ***!
    \******************************************************************/

  /*! exports provided: CustomerFormComponent */

  /***/
  function srcAppInvoiceCustomerFormCustomerFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerFormComponent", function () {
      return CustomerFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _model_customer_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../model/customer.model */
    "./src/app/invoice/model/customer.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @covalent/core/loading */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @covalent/core/dialogs */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-dialogs.js");
    /* harmony import */


    var _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/customers/customers.service */
    "./src/app/invoice/service/customers/customers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function CustomerFormComponent_div_0_form_1_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerFormComponent_div_0_form_1_mat_error_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " A valid email is required. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerFormComponent_div_0_form_1_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Not a valid phone number ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerFormComponent_div_0_form_1_button_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerFormComponent_div_0_form_1_button_21_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r10["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CustomerFormComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CustomerFormComponent_div_0_form_1_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerFormComponent_div_0_form_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.customer.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomerFormComponent_div_0_form_1_mat_error_9_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerFormComponent_div_0_form_1_Template_input_ngModelChange_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.customer.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomerFormComponent_div_0_form_1_mat_error_13_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomerFormComponent_div_0_form_1_Template_input_ngModelChange_15_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.customer.phone = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CustomerFormComponent_div_0_form_1_mat_error_17_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "json");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CustomerFormComponent_div_0_form_1_button_21_Template, 2, 0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomerFormComponent_div_0_form_1_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r17.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customer.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.touched && _r3.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customer.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.touched && _r5.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.customer.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r7.touched && (_r7.errors == null ? null : _r7.errors.phone));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx_r1.customer), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.customer.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r2.invalid);
      }
    }

    function CustomerFormComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerFormComponent_div_0_form_1_Template, 26, 11, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customer);
      }
    }

    var CustomerFormComponent = /*#__PURE__*/function () {
      function CustomerFormComponent(loadingService, router, dialogService, customersService, route) {
        _classCallCheck(this, CustomerFormComponent);

        this.loadingService = loadingService;
        this.router = router;
        this.dialogService = dialogService;
        this.customersService = customersService;
        this.route = route;
      }

      _createClass(CustomerFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.loadingService.register('customer');
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) {
            return params.customerId;
          })).subscribe(function (customerId) {
            if (customerId) {
              _this4.customersService.get(customerId).subscribe(function (customer) {
                _this4.customer = customer;

                _this4.loadingService.resolve('customer');
              });
            } else {
              _this4.customer = new _model_customer_model__WEBPACK_IMPORTED_MODULE_1__["Customer"]();

              _this4.loadingService.resolve('customer');
            }
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          if (this.customer.id) {
            this.customersService.update(this.customer.id, this.customer).subscribe(function (response) {
              _this5.viewCustomer(response.id);
            });
          } else {
            this.customersService.create(this.customer).subscribe(function (response) {
              _this5.viewCustomer(response.id);
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this6 = this;

          this.dialogService.openConfirm({
            message: 'Are you sure you want to delete this customer?',
            title: 'Confirm',
            acceptButton: 'Delete'
          }).afterClosed().subscribe(function (accept) {
            if (accept) {
              _this6.loadingService.register('customer');

              _this6.customersService["delete"](_this6.customer.id).subscribe(function (response) {
                _this6.loadingService.resolve('customer');

                _this6.customer.id = null;

                _this6.cancel();
              });
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          if (this.customer.id) {
            this.router.navigate(['/customers', this.customer.id]);
          } else {
            this.router.navigateByUrl('/customers');
          }
        }
      }, {
        key: "viewCustomer",
        value: function viewCustomer(id) {
          this.router.navigate(['/customers', id]);
        }
      }]);

      return CustomerFormComponent;
    }();

    CustomerFormComponent.ɵfac = function CustomerFormComponent_Factory(t) {
      return new (t || CustomerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_loading__WEBPACK_IMPORTED_MODULE_3__["TdLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    CustomerFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerFormComponent,
      selectors: [["app-customer-form"]],
      decls: 1,
      vars: 1,
      consts: [[4, "tdLoading"], [3, "ngSubmit", 4, "ngIf"], [3, "ngSubmit"], ["form", "ngForm"], ["name", "customer", "matInput", "", "placeholder", "Customer Name", "required", "", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], [4, "ngIf"], ["name", "email", "matInput", "", "type", "email", "placeholder", "Email", "required", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "phone", "matInput", "", "type", "tel", "placeholder", "Phone", "required", "", "phone", "", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"], ["type", "button", "mat-button", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-button", "", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]],
      template: function CustomerFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomerFormComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tdLoading", "customer");
        }
      },
      directives: [_covalent_core_loading__WEBPACK_IMPORTED_MODULE_3__["TdLoadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["JsonPipe"]],
      styles: [".mat-card-header[_ngcontent-%COMP%]{\n   flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9jdXN0b21lci1mb3JtL2N1c3RvbWVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLHNCQUFzQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvY3VzdG9tZXItZm9ybS9jdXN0b21lci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQtaGVhZGVye1xuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customer-form',
          templateUrl: './customer-form.component.html',
          styleUrls: ['./customer-form.component.css']
        }]
      }], function () {
        return [{
          type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_3__["TdLoadingService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_5__["TdDialogService"]
        }, {
          type: _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/customer/customer.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/invoice/customer/customer.component.ts ***!
    \********************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppInvoiceCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_invoice_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/invoice/service/customers/customers.service */
    "./src/app/invoice/service/customers/customers.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @covalent/core/loading */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CustomerComponent_div_0_mat_list_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "perm_identity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Customer ID: ", ctx_r1.customer.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.customer.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.customer.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.customer.phone);
      }
    }

    function CustomerComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomerComponent_div_0_mat_list_1_Template, 24, 4, "mat-list", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.customer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/customers/", ctx_r0.customer == null ? null : ctx_r0.customer.id, "/edit");
      }
    }

    var CustomerComponent = /*#__PURE__*/function () {
      function CustomerComponent(customersService, route, loadingService) {
        _classCallCheck(this, CustomerComponent);

        this.customersService = customersService;
        this.route = route;
        this.loadingService = loadingService;
      }

      _createClass(CustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          //this.loadingService.register('customer');
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) {
            return params.customerId;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (customerId) {
            return _this7.customersService.get(customerId);
          })).subscribe(function (customer) {
            _this7.customer = customer; //this.loadingService.resolve('customer');
          });
        }
      }]);

      return CustomerComponent;
    }();

    CustomerComponent.ɵfac = function CustomerComponent_Factory(t) {
      return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_invoice_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_loading__WEBPACK_IMPORTED_MODULE_4__["TdLoadingService"]));
    };

    CustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomerComponent,
      selectors: [["app-customer"]],
      decls: 1,
      vars: 1,
      consts: [[4, "tdLoading"], [4, "ngIf"], ["mat-fab", "", 3, "routerLink"], ["matSubheader", ""], ["mat-list-icon", ""], ["mat-line", ""]],
      template: function CustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomerComponent_div_0_Template, 5, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tdLoading", "customer");
        }
      },
      directives: [_covalent_core_loading__WEBPACK_IMPORTED_MODULE_4__["TdLoadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatLine"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customer',
          templateUrl: './customer.component.html',
          styleUrls: ['./customer.component.css']
        }]
      }], function () {
        return [{
          type: src_app_invoice_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_4__["TdLoadingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/customers/customers.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/invoice/customers/customers.component.ts ***!
    \**********************************************************/

  /*! exports provided: CustomersComponent */

  /***/
  function srcAppInvoiceCustomersCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersComponent", function () {
      return CustomersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../service/customers/customers.service */
    "./src/app/invoice/service/customers/customers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function CustomersComponent_mat_list_1_mat_list_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "note");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/customers/", customer_r2.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", customer_r2.email, " ");
      }
    }

    function CustomersComponent_mat_list_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Customers");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomersComponent_mat_list_1_mat_list_item_3_Template, 7, 3, "mat-list-item", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.customers);
      }
    }

    var CustomersComponent = /*#__PURE__*/function () {
      function CustomersComponent(customersService) {
        _classCallCheck(this, CustomersComponent);

        this.customersService = customersService;
      }

      _createClass(CustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.customersService.query({
            sort: 'created',
            order: 'desc'
          }).subscribe(function (customers) {
            _this8.customers = customers;
          });
        }
      }]);

      return CustomersComponent;
    }();

    CustomersComponent.ɵfac = function CustomersComponent_Factory(t) {
      return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]));
    };

    CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CustomersComponent,
      selectors: [["app-customers"]],
      decls: 5,
      vars: 1,
      consts: [[4, "ngIf"], ["mat-fab", "", "routerLink", "/customers/create", 1, "mat-fab-bottom-right", "fixed"], ["matSubheader", ""], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["mat-list-icon", ""], ["mat-line", ""]],
      template: function CustomersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomersComponent_mat_list_1_Template, 4, 1, "mat-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customers);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatLine"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvY3VzdG9tZXJzL2N1c3RvbWVycy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-customers',
          templateUrl: './customers.component.html',
          styleUrls: ['./customers.component.css']
        }]
      }], function () {
        return [{
          type: _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/hours-control/hours-control.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/invoice/hours-control/hours-control.component.ts ***!
    \******************************************************************/

  /*! exports provided: HoursControlComponent */

  /***/
  function srcAppInvoiceHoursControlHoursControlComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoursControlComponent", function () {
      return HoursControlComponent;
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


    var _validators_hours_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../validators/hours.validator */
    "./src/app/invoice/validators/hours.validator.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HoursControlComponent_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hours must be a number in increments of .25 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HoursControlComponent = /*#__PURE__*/function () {
      function HoursControlComponent() {
        _classCallCheck(this, HoursControlComponent);

        this.hours = 0;
        this.validateFn = _validators_hours_validator__WEBPACK_IMPORTED_MODULE_2__["HoursValidator"];

        this.onChange = function (v) {};
      }

      _createClass(HoursControlComponent, [{
        key: "update",
        value: function update() {
          this.onChange(this.hours);
        }
      }, {
        key: "keypress",
        value: function keypress($event) {
          if ($event.key === 'ArrowUp') {
            this.setValue(0.25);
          } else if ($event.key === 'ArrowDown') {
            this.setValue(-0.25);
          }
        }
      }, {
        key: "setValue",
        value: function setValue(change) {
          this.hours += change;
          this.update();
        }
      }, {
        key: "validate",
        value: function validate(control) {
          return this.validateFn(control);
        }
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          if (value !== undefined) {
            this.hours = value;
          }
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched() {}
      }]);

      return HoursControlComponent;
    }();

    HoursControlComponent.ɵfac = function HoursControlComponent_Factory(t) {
      return new (t || HoursControlComponent)();
    };

    HoursControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HoursControlComponent,
      selectors: [["app-hours-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return HoursControlComponent;
        }),
        multi: true
      }, {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return HoursControlComponent;
        }),
        multi: true
      }])],
      decls: 13,
      vars: 2,
      consts: [["name", "hours", "matInput", "", "type", "number", "placeholder", "Hours", "hours", "", 3, "ngModel", "ngModelChange", "keyup", "change"], ["control", "ngModel"], [4, "ngIf"], ["layout", "row"], ["type", "button", "mat-button", "", "flex", "", 3, "click"]],
      template: function HoursControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HoursControlComponent_Template_input_ngModelChange_1_listener($event) {
            return ctx.hours = $event;
          })("keyup", function HoursControlComponent_Template_input_keyup_1_listener($event) {
            return ctx.keypress($event);
          })("change", function HoursControlComponent_Template_input_change_1_listener() {
            return ctx.update();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HoursControlComponent_mat_error_3_Template, 2, 0, "mat-error", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HoursControlComponent_Template_button_click_5_listener() {
            return ctx.setValue(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "+ 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HoursControlComponent_Template_button_click_7_listener() {
            return ctx.setValue(0.25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "+ .25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HoursControlComponent_Template_button_click_9_listener() {
            return ctx.setValue(0 - 0.25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "- .25");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HoursControlComponent_Template_button_click_11_listener() {
            return ctx.setValue(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "- 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.hours);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.touched && _r0.invalid);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  display: block;\n}\nmd-input-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  padding: 0;\n  min-width: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52b2ljZS9ob3Vycy1jb250cm9sL2hvdXJzLWNvbnRyb2wuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaW52b2ljZS9ob3Vycy1jb250cm9sL2hvdXJzLWNvbnRyb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxubWQtaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBtaW4td2lkdGg6IDI1JTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoursControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hours-control',
          templateUrl: './hours-control.component.html',
          styleUrls: ['./hours-control.component.css'],
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return HoursControlComponent;
            }),
            multi: true
          }, {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return HoursControlComponent;
            }),
            multi: true
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/invoice-form/invoice-form.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/invoice/invoice-form/invoice-form.component.ts ***!
    \****************************************************************/

  /*! exports provided: InvoiceFormComponent */

  /***/
  function srcAppInvoiceInvoiceFormInvoiceFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceFormComponent", function () {
      return InvoiceFormComponent;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _model_invoice_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../model/invoice.model */
    "./src/app/invoice/model/invoice.model.ts");
    /* harmony import */


    var _validators_hours_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../validators/hours.validator */
    "./src/app/invoice/validators/hours.validator.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @covalent/core/loading */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
    /* harmony import */


    var _service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../service/invoices/invoices.service */
    "./src/app/invoice/service/invoices/invoices.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @covalent/core/dialogs */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-dialogs.js");
    /* harmony import */


    var _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../service/customers/customers.service */
    "./src/app/invoice/service/customers/customers.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../hours-control/hours-control.component */
    "./src/app/invoice/hours-control/hours-control.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function InvoiceFormComponent_div_0_form_1_mat_error_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Service is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceFormComponent_div_0_form_1_mat_error_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceFormComponent_div_0_form_1_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hourly rate is required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceFormComponent_div_0_form_1_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var customer_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", customer_r8.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r8 == null ? null : customer_r8.name);
      }
    }

    function InvoiceFormComponent_div_0_form_1_button_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceFormComponent_div_0_form_1_button_28_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r9["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceFormComponent_div_0_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function InvoiceFormComponent_div_0_form_1_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Invoice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceFormComponent_div_0_form_1_mat_error_7_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-datepicker-toggle", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InvoiceFormComponent_div_0_form_1_mat_error_11_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker", null, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-hours-control", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InvoiceFormComponent_div_0_form_1_mat_error_17_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InvoiceFormComponent_div_0_form_1_mat_option_20_Template, 2, 2, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-slide-toggle", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Paid");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, InvoiceFormComponent_div_0_form_1_button_28_Template, 2, 0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceFormComponent_div_0_form_1_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.invoiceForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invoiceForm.get("service").touched && ctx_r1.invoiceForm.get("service").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invoiceForm.get("date").touched && ctx_r1.invoiceForm.get("date").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invoiceForm.get("rate").touched && ctx_r1.invoiceForm.get("rate").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.customers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](26, 10, ctx_r1.total, "USD", true, ".2"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invoice.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.invoiceForm.invalid);
      }
    }

    function InvoiceFormComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoiceFormComponent_div_0_form_1_Template, 33, 15, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invoice);
      }
    }

    var InvoiceFormComponent = /*#__PURE__*/function () {
      function InvoiceFormComponent(loadingService, invoicesServie, router, dialogService, customersService, formBuilder, route) {
        _classCallCheck(this, InvoiceFormComponent);

        this.loadingService = loadingService;
        this.invoicesServie = invoicesServie;
        this.router = router;
        this.dialogService = dialogService;
        this.customersService = customersService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.total = 0;
        this.invoiceForm = this.formBuilder.group({
          id: [''],
          service: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          customerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          rate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          hours: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_hours_validator__WEBPACK_IMPORTED_MODULE_4__["HoursValidator"]]],
          date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          paid: ['']
        });
      }

      _createClass(InvoiceFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.loadingService.register('invoice');
          this.loadingService.register('customers');
          this.customersService.query().subscribe(function (customers) {
            _this9.customers = customers;

            _this9.loadingService.resolve('customers');
          });
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) {
            return params.invoiceId;
          })).subscribe(function (invoiceId) {
            if (invoiceId) {
              _this9.invoicesServie.get(invoiceId).subscribe(function (invoice) {
                _this9.invoiceForm.setValue(invoice);

                _this9.invoice = invoice;

                _this9.loadingService.resolve('invoice');
              });
            } else {
              _this9.invoice = new _model_invoice_model__WEBPACK_IMPORTED_MODULE_3__["Invoice"]();

              _this9.loadingService.resolve('invoice');
            }
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.invoiceForm.get('rate').valueChanges, this.invoiceForm.get('hours').valueChanges).subscribe(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                _ref2$ = _ref2[0],
                rate = _ref2$ === void 0 ? 0 : _ref2$,
                _ref2$2 = _ref2[1],
                hours = _ref2$2 === void 0 ? 0 : _ref2$2;

            _this9.total = rate * hours;
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this10 = this;

          if (this.invoice.id) {
            this.invoicesServie.update(this.invoice.id, this.invoiceForm.value).subscribe(function (response) {
              _this10.viewInvoice(response.id);
            });
          } else {
            this.invoicesServie.create(this.invoiceForm.value).subscribe(function (response) {
              _this10.viewInvoice(response.id);
            });
          }
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this11 = this;

          this.dialogService.openConfirm({
            message: 'Are you sure you want to delete this invoice?',
            title: 'Confirm',
            acceptButton: 'Delete'
          }).afterClosed().subscribe(function (accept) {
            if (accept) {
              _this11.loadingService.register('invoice');

              _this11.invoicesServie["delete"](_this11.invoice.id).subscribe(function (response) {
                _this11.loadingService.resolve('invoice');

                _this11.invoice.id = null;

                _this11.cancel();
              });
            }
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          if (this.invoice.id) {
            this.router.navigate(['/invoices', this.invoice.id]);
          } else {
            this.router.navigateByUrl('/invoices');
          }
        }
      }, {
        key: "viewInvoice",
        value: function viewInvoice(id) {
          this.router.navigate(['/invoices', id]);
        }
      }]);

      return InvoiceFormComponent;
    }();

    InvoiceFormComponent.ɵfac = function InvoiceFormComponent_Factory(t) {
      return new (t || InvoiceFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_loading__WEBPACK_IMPORTED_MODULE_6__["TdLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_9__["TdDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_10__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]));
    };

    InvoiceFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvoiceFormComponent,
      selectors: [["app-invoice-form"]],
      decls: 1,
      vars: 1,
      consts: [[4, "tdLoading"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["name", "service", "matInput", "", "type", "text", "placeholder", "Service", "formControlName", "service"], [4, "ngIf"], ["matInput", "", "placeholder", "Choose a date", "formControlName", "date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "hours"], ["name", "rate", "matInput", "", "type", "number", "placeholder", "Rate", "formControlName", "rate"], ["name", "customerId", "placeholder", "Customer", "formControlName", "customerId"], [3, "value", 4, "ngFor", "ngForOf"], [1, "toggler"], ["formControlName", "paid"], [1, "total"], ["type", "button", "mat-button", "", 3, "click", 4, "ngIf"], ["type", "button", "mat-button", "", 3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"], [3, "value"]],
      template: function InvoiceFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InvoiceFormComponent_div_0_Template, 2, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tdLoading", "invoice");
        }
      },
      directives: [_covalent_core_loading__WEBPACK_IMPORTED_MODULE_6__["TdLoadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepicker"], _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_16__["HoursControlComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS1mb3JtL2ludm9pY2UtZm9ybS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-invoice-form',
          templateUrl: './invoice-form.component.html',
          styleUrls: ['./invoice-form.component.css']
        }]
      }], function () {
        return [{
          type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_6__["TdLoadingService"]
        }, {
          type: _service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_7__["InvoicesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_9__["TdDialogService"]
        }, {
          type: _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_10__["CustomersService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/invoice.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/invoice/invoice.module.ts ***!
    \*******************************************/

  /*! exports provided: InvoiceModule */

  /***/
  function srcAppInvoiceInvoiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceModule", function () {
      return InvoiceModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _customer_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./customer/customer.component */
    "./src/app/invoice/customer/customer.component.ts");
    /* harmony import */


    var _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./customers/customers.component */
    "./src/app/invoice/customers/customers.component.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @covalent/core/loading */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
    /* harmony import */


    var _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./customer-form/customer-form.component */
    "./src/app/invoice/customer-form/customer-form.component.ts");
    /* harmony import */


    var _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @covalent/core/dialogs */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-dialogs.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./invoice/invoice.component */
    "./src/app/invoice/invoice/invoice.component.ts");
    /* harmony import */


    var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./invoices/invoices.component */
    "./src/app/invoice/invoices/invoices.component.ts");
    /* harmony import */


    var _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./invoice-form/invoice-form.component */
    "./src/app/invoice/invoice-form/invoice-form.component.ts");
    /* harmony import */


    var _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./hours-control/hours-control.component */
    "./src/app/invoice/hours-control/hours-control.component.ts");

    var InvoiceModule = function InvoiceModule() {
      _classCallCheck(this, InvoiceModule);
    };

    InvoiceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InvoiceModule
    });
    InvoiceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InvoiceModule_Factory(t) {
        return new (t || InvoiceModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_13__["CovalentLoadingModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_15__["CovalentDialogsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvoiceModule, {
        declarations: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceComponent"], _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_22__["InvoicesComponent"], _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_23__["InvoiceFormComponent"], _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_24__["HoursControlComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_13__["CovalentLoadingModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_15__["CovalentDialogsModule"]],
        exports: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"], _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_22__["InvoicesComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceComponent"], _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_23__["InvoiceFormComponent"], _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_24__["HoursControlComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceComponent"], _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_22__["InvoicesComponent"], _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_23__["InvoiceFormComponent"], _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_24__["HoursControlComponent"]],
          exports: [_customer_customer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerComponent"], _customers_customers_component__WEBPACK_IMPORTED_MODULE_4__["CustomersComponent"], _customer_form_customer_form_component__WEBPACK_IMPORTED_MODULE_14__["CustomerFormComponent"], _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_22__["InvoicesComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_21__["InvoiceComponent"], _invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_23__["InvoiceFormComponent"], _hours_control_hours_control_component__WEBPACK_IMPORTED_MODULE_24__["HoursControlComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _covalent_core_loading__WEBPACK_IMPORTED_MODULE_13__["CovalentLoadingModule"], _covalent_core_dialogs__WEBPACK_IMPORTED_MODULE_15__["CovalentDialogsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/invoice/invoice.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/invoice/invoice/invoice.component.ts ***!
    \******************************************************/

  /*! exports provided: InvoiceComponent */

  /***/
  function srcAppInvoiceInvoiceInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function () {
      return InvoiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @covalent/core/loading */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
    /* harmony import */


    var _service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/invoices/invoices.service */
    "./src/app/invoice/service/invoices/invoices.service.ts");
    /* harmony import */


    var _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../service/customers/customers.service */
    "./src/app/invoice/service/customers/customers.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function InvoiceComponent_div_0_mat_list_1_mat_icon_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_div_0_mat_list_1_mat_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_div_0_mat_list_1_h4_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Payment Received");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_div_0_mat_list_1_h4_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Outstanding");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function InvoiceComponent_div_0_mat_list_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InvoiceComponent_div_0_mat_list_1_mat_icon_4_Template, 2, 0, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InvoiceComponent_div_0_mat_list_1_mat_icon_5_Template, 2, 0, "mat-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InvoiceComponent_div_0_mat_list_1_h4_6_Template, 2, 0, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvoiceComponent_div_0_mat_list_1_h4_7_Template, 2, 0, "h4", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Payment Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "done");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Service");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "date_range");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "schedule");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hours and Rate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "attach_money");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Total Invoiced");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-list-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "perm_identity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Customer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Invoice ID: ", ctx_r1.invoice.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invoice.paid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.invoice.paid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.invoice.paid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.invoice.paid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.invoice.service);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx_r1.invoice.date));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.invoice.hours, " hours at ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](30, 13, ctx_r1.invoice.rate, "USD", true, ".0"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](38, 18, ctx_r1.invoice.hours * ctx_r1.invoice.rate, "USD", true, ".0"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.customer.name);
      }
    }

    function InvoiceComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvoiceComponent_div_0_mat_list_1_Template, 48, 23, "mat-list", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.invoice && ctx_r0.customer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/invoices/", ctx_r0.invoice == null ? null : ctx_r0.invoice.id, "/edit");
      }
    }

    var InvoiceComponent = /*#__PURE__*/function () {
      function InvoiceComponent(loadingService, invoicesService, customersService, route) {
        _classCallCheck(this, InvoiceComponent);

        this.loadingService = loadingService;
        this.invoicesService = invoicesService;
        this.customersService = customersService;
        this.route = route;
      }

      _createClass(InvoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.loadingService.register('invoice');
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (params) {
            return params.invoiceId;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (invoiceId) {
            return _this12.invoicesService.get(invoiceId);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (invoice) {
            _this12.invoice = invoice;
            return invoice.customerId;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (customerId) {
            return _this12.customersService.get(customerId);
          })).subscribe(function (customer) {
            _this12.customer = customer;

            _this12.loadingService.resolve('invoice');
          });
        }
      }]);

      return InvoiceComponent;
    }();

    InvoiceComponent.ɵfac = function InvoiceComponent_Factory(t) {
      return new (t || InvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__["TdLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_3__["InvoicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_customers_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    InvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvoiceComponent,
      selectors: [["app-invoice"]],
      decls: 1,
      vars: 1,
      consts: [[4, "tdLoading"], [4, "ngIf"], ["mat-fab", "", 1, "mat-fab-bottom-right", "fixed", "mat-accent", "mat-fab", 3, "routerLink"], ["matSubheader", ""], ["mat-list-icon", "", 4, "ngIf"], ["mat-line", "", 4, "ngIf"], ["mat-line", ""], ["mat-list-icon", ""]],
      template: function InvoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InvoiceComponent_div_0_Template, 5, 2, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tdLoading", "invoice");
        }
      },
      directives: [_covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__["TdLoadingDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListSubheaderCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListIconCssMatStyler"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZS9pbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-invoice',
          templateUrl: './invoice.component.html',
          styleUrls: ['./invoice.component.css']
        }]
      }], function () {
        return [{
          type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_2__["TdLoadingService"]
        }, {
          type: _service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_3__["InvoicesService"]
        }, {
          type: _service_customers_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/invoices/invoices.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/invoice/invoices/invoices.component.ts ***!
    \********************************************************/

  /*! exports provided: InvoicesComponent */

  /***/
  function srcAppInvoiceInvoicesInvoicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function () {
      return InvoicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @covalent/core/loading */
    "./node_modules/@covalent/core/__ivy_ngcc__/fesm2015/covalent-core-loading.js");
    /* harmony import */


    var _service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/invoices/invoices.service */
    "./src/app/invoice/service/invoices/invoices.service.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function InvoicesComponent_div_0_mat_list_item_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "folder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var invoice_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/invoices/", invoice_r2.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](invoice_r2.service);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, invoice_r2.date), " ");
      }
    }

    function InvoicesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recent Invoices");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InvoicesComponent_div_0_mat_list_item_4_Template, 8, 5, "mat-list-item", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.invoices);
      }
    }

    var InvoicesComponent = /*#__PURE__*/function () {
      function InvoicesComponent(loadingService, invoicesService) {
        _classCallCheck(this, InvoicesComponent);

        this.loadingService = loadingService;
        this.invoicesService = invoicesService;
      }

      _createClass(InvoicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.loadingService.register('invoices');
          this.invoicesService.query({
            sort: 'created',
            order: 'desc'
          }).subscribe(function (invoices) {
            _this13.invoices = invoices;

            _this13.loadingService.resolve('invoices');
          });
        }
      }]);

      return InvoicesComponent;
    }();

    InvoicesComponent.ɵfac = function InvoicesComponent_Factory(t) {
      return new (t || InvoicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__["TdLoadingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_2__["InvoicesService"]));
    };

    InvoicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InvoicesComponent,
      selectors: [["app-invoices"]],
      decls: 1,
      vars: 1,
      consts: [[4, "tdLoading"], ["matSubheader", ""], [3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-fab", "", "routerLink", "/invoices/create", 1, "mat-fab-bottom-right", "fixed", "mat-accent", "mat-fab"], [3, "routerLink"], ["mat-list-icon", ""], ["mat-line", ""]],
      template: function InvoicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InvoicesComponent_div_0_Template, 8, 1, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tdLoading", "invoices");
        }
      },
      directives: [_covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__["TdLoadingDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListSubheaderCssMatStyler"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListIconCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatLine"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludm9pY2UvaW52b2ljZXMvaW52b2ljZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-invoices',
          templateUrl: './invoices.component.html',
          styleUrls: ['./invoices.component.css']
        }]
      }], function () {
        return [{
          type: _covalent_core_loading__WEBPACK_IMPORTED_MODULE_1__["TdLoadingService"]
        }, {
          type: _service_invoices_invoices_service__WEBPACK_IMPORTED_MODULE_2__["InvoicesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/model/customer.model.ts":
  /*!*************************************************!*\
    !*** ./src/app/invoice/model/customer.model.ts ***!
    \*************************************************/

  /*! exports provided: Customer */

  /***/
  function srcAppInvoiceModelCustomerModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });

    var Customer = function Customer() {
      _classCallCheck(this, Customer);
    };
    /***/

  },

  /***/
  "./src/app/invoice/model/invoice.model.ts":
  /*!************************************************!*\
    !*** ./src/app/invoice/model/invoice.model.ts ***!
    \************************************************/

  /*! exports provided: Invoice */

  /***/
  function srcAppInvoiceModelInvoiceModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Invoice", function () {
      return Invoice;
    });

    var Invoice = function Invoice() {
      _classCallCheck(this, Invoice);

      this.paid = false;
    };
    /***/

  },

  /***/
  "./src/app/invoice/service/customers/customers.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/invoice/service/customers/customers.service.ts ***!
    \****************************************************************/

  /*! exports provided: CustomersService */

  /***/
  function srcAppInvoiceServiceCustomersCustomersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomersService", function () {
      return CustomersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_invoice_service_rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/invoice/service/rest/rest.service */
    "./src/app/invoice/service/rest/rest.service.ts");

    var CustomersService = /*#__PURE__*/function (_src_app_invoice_serv) {
      _inherits(CustomersService, _src_app_invoice_serv);

      var _super = _createSuper(CustomersService);

      function CustomersService() {
        var _this14;

        _classCallCheck(this, CustomersService);

        _this14 = _super.apply(this, arguments);
        _this14.resource = '/customers';
        return _this14;
      }

      return CustomersService;
    }(src_app_invoice_service_rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]);

    CustomersService.ɵfac = function CustomersService_Factory(t) {
      return ɵCustomersService_BaseFactory(t || CustomersService);
    };

    CustomersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CustomersService,
      factory: CustomersService.ɵfac,
      providedIn: 'root'
    });

    var ɵCustomersService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CustomersService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/service/invoices/invoices.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/invoice/service/invoices/invoices.service.ts ***!
    \**************************************************************/

  /*! exports provided: InvoicesService */

  /***/
  function srcAppInvoiceServiceInvoicesInvoicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvoicesService", function () {
      return InvoicesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _rest_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../rest/rest.service */
    "./src/app/invoice/service/rest/rest.service.ts");

    var InvoicesService = /*#__PURE__*/function (_rest_rest_service__W) {
      _inherits(InvoicesService, _rest_rest_service__W);

      var _super2 = _createSuper(InvoicesService);

      function InvoicesService() {
        var _this15;

        _classCallCheck(this, InvoicesService);

        _this15 = _super2.apply(this, arguments);
        _this15.resource = '/invoices';
        return _this15;
      }

      return InvoicesService;
    }(_rest_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"]);

    InvoicesService.ɵfac = function InvoicesService_Factory(t) {
      return ɵInvoicesService_BaseFactory(t || InvoicesService);
    };

    InvoicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InvoicesService,
      factory: InvoicesService.ɵfac,
      providedIn: 'root'
    });

    var ɵInvoicesService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](InvoicesService);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/service/rest/rest.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/invoice/service/rest/rest.service.ts ***!
    \******************************************************/

  /*! exports provided: RestService */

  /***/
  function srcAppInvoiceServiceRestRestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RestService", function () {
      return RestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RestService = /*#__PURE__*/function () {
      function RestService(http) {
        _classCallCheck(this, RestService);

        this.http = http;
        this.base = 'http://localhost:3000';
        this.resource = '/';
      }

      _createClass(RestService, [{
        key: "query",
        value: function query(_query) {
          var url = this.url;

          if (_query) {
            url += "?".concat(this.toQueryString(_query));
          }

          return this.http.get(url);
        }
      }, {
        key: "get",
        value: function get(id) {
          return this.http.get(this.url + '/' + id);
        }
      }, {
        key: "create",
        value: function create(body) {
          return this.http.post(this.url, body);
        }
      }, {
        key: "update",
        value: function update(id, body) {
          return this.http.put(this.url + '/' + id, body);
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          return this.http["delete"](this.url + '/' + id);
        }
      }, {
        key: "toQueryString",
        value: function toQueryString(paramsObject) {
          return Object.keys(paramsObject).map(function (key) {
            return "_".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(paramsObject[key]));
          }).join('&');
        }
      }, {
        key: "url",
        get: function get() {
          return this.base + this.resource;
        }
      }]);

      return RestService;
    }();

    RestService.ɵfac = function RestService_Factory(t) {
      return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RestService,
      factory: RestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/invoice/validators/hours.validator.ts":
  /*!*******************************************************!*\
    !*** ./src/app/invoice/validators/hours.validator.ts ***!
    \*******************************************************/

  /*! exports provided: HoursValidator */

  /***/
  function srcAppInvoiceValidatorsHoursValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoursValidator", function () {
      return HoursValidator;
    });

    function HoursValidator(control) {
      return Number.isInteger(control.value * 4) ? null : {
        hour: true
      };
    }
    /***/

  },

  /***/
  "./src/app/services/stocks.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/stocks.service.ts ***!
    \********************************************/

  /*! exports provided: StocksService */

  /***/
  function srcAppServicesStocksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StocksService", function () {
      return StocksService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var stocks = ["AAPL", "GOOG", "FB", "AMZN", "TWTR"];
    var service = "https://angular2-in-action-api.herokuapp.com";

    var StocksService = /*#__PURE__*/function () {
      function StocksService(http) {
        _classCallCheck(this, StocksService);

        this.http = http;
      }

      _createClass(StocksService, [{
        key: "get",
        value: function get() {
          return stocks.slice();
        }
      }, {
        key: "add",
        value: function add(stock) {
          stocks.push(stock);
          return this.get();
        }
      }, {
        key: "remove",
        value: function remove(stock) {
          stocks.splice(stocks.indexOf(stock), 1);
          return this.get();
        }
      }, {
        key: "load",
        value: function load(symbols) {
          if (symbols) {
            return this.http.get(service + "/stocks/snapshot?symbols=" + symbols.join());
          }
        }
      }]);

      return StocksService;
    }();

    StocksService.ɵfac = function StocksService_Factory(t) {
      return new (t || StocksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    StocksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StocksService,
      factory: StocksService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StocksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
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
    /*! /Users/yehanghan/Project/typescript/projects/stocks/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map