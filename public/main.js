(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"!this.authService.admin\" class=\"container\"><br>\n<legend>Logga in som administratör</legend><br>\n<form class=\"col-lg-6\">\n\t<div class= \"form-group\">\n\t\t<label>Email</label>\n\t\t<input type= \"text\" class= \"form-control\" name=\"email\">\n\t</div>\n\t<div class= \"form-group\">\n\t\t<label>Password</label>\n\t\t<input type= \"password\" class= \"form-control\" name=\"password\">\n\t</div>\n\t<input type= \"submit\" class= \"btn btn-primary\" (click)= \"onLogin()\" value= \"Logga in\">\n\n</form>\n</div><br>\n<div *ngIf= \"this.authService.admin || this.authService.employee\" class= \"row container\">\n      <legend>Exempelinformation</legend><br><br>\n    <table class=\"table table-hover\">\n\n    <tbody>\n        <tr>\n      <th scope=\"row\">Fakturor med överskridet förfallod.</th>\n      <td>5</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Accepterade erbjudanden</th>\n      <td>3 st</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Nya lägenheter denna vecka</th>\n      <td>2 st</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Nästa visning</th>\n      <td>2018-10-14</td>\n    </tr>\n\n   </tbody>\n</table> \n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(authService) {
        this.authService = authService;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.onLogin = function () {
        this.authService.employee = false;
        this.authService.admin = true;
        this.authService.loggedin = false;
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());

//hej


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<br><br><br>\n<div class=\"container\">\n<div class= \"row\">\n  <div class=\"col-lg-1\"></div>\n  <div class=\"col-lg-10\">\n  <h1>\nVälkommen till SVPHs bostadskö!  </h1>\n<br>\n <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n  <div class=\"col-lg-1\">\n</div>\n</div>\n\n\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./customer/customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invoices/invoices.component */ "./src/app/invoices/invoices.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: "start", component: _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"] },
    { path: "help", component: _help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"] },
    { path: "profile", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: "employee", component: _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"] },
    { path: "customer", component: _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__["CustomerComponent"] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"] },
    { path: "employees", component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_14__["EmployeesComponent"] },
    { path: "invoices", component: _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_15__["InvoicesComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_7__["HelpComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _customer_customer_component__WEBPACK_IMPORTED_MODULE_11__["CustomerComponent"],
                _employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_14__["EmployeesComponent"],
                _invoices_invoices_component__WEBPACK_IMPORTED_MODULE_15__["InvoicesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.css":
/*!*************************************************!*\
  !*** ./src/app/customer/customer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\">\n\t<div class=\"col-lg-8\">\n\t\t <div  *ngIf=\"sven\" ><br>\n\t\t \t<div class=\"row\">\n  \t<legend class=\"col-lg-9\" (click)=\"sven = !sven\">Detaljinformation (dölj)</legend>\n  \t<input type=\"submit\" class= \"btn btn-primary col-lg-3\" value=\"Maila\"></div><br>\n  <table class=\"table \" >\n  <tbody>\n    <tr>\n      <th scope=\"row\">Email</th>\n      <td>sven@test.se</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Förnamn</th>\n      <td>Sven</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Eftenamn</th>\n      <td>Svensson</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Personnummer</th>\n      <td>19551219-1111</td>\n    </tr>   \n        <tr style=\"border-top:solid;border-top-width: 1.5px;\">\n      <th scope=\"row\">Land</th>\n      <td>Sverige</td>\n    </tr>\n        <tr>\n      <th scope=\"row\">Postadress</th>\n      <td>Drottninggatan 1</td>\n    </tr> \n        <tr>\n      <th scope=\"row\">Postnummer</th>\n      <td>17683</td>\n    </tr> \n        <tr >\n      <th scope=\"row\">Ort</th>\n      <td>Stockholm</td>\n    </tr> \n        <tr style=\"border-top:solid;border-top-width: 1.5px;\">\n      <th scope=\"row\">Telefon hem</th>\n      <td>08-111111</td>\n    </tr> \n         <tr>\n      <th scope=\"row\">Telefon mobil</th>\n      <td>073-57344529</td>\n    </tr> \n   </tbody>\n</table> </div>\n\t<br>\n\t<legend>Registrerade Kunder</legend>\n\t<br>\n\t<table class=\"table table-hover\" >\n  <tbody>\n  \t  <tr>\n      <th scope=\"col\">Namn</th>\n      <th scope=\"col\">Antal ködagar</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Ta bort</th>\n    </tr>\n    <tr (click)=\"sven = !sven\">\n      <td>Sven Svensson</td>\n      <td>1567</td>\n      <td>sven@exempel.se</td>\n      <td><a href=\"#\" >X</a></td>\n    </tr>\n    <tr>\n      <td>Knut Knutsson</td>\n      <td>937</td>\n      <td>knut@exempel.se</td>\n      <td><a href=\"#\" >X</a></td>\n    </tr>\n\n   </tbody>\n  </table><br>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/*!**************************************************!*\
  !*** ./src/app/employee/employee.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"!this.authService.employee\" class=\"container\"><br>\n<legend>Logga in som anställd</legend><br>\n<form class=\"col-lg-6\">\n\t<div class= \"form-group\">\n\t\t<label>Email</label>\n\t\t<input type= \"text\" class= \"form-control\" name=\"email\">\n\t</div>\n\t<div class= \"form-group\">\n\t\t<label>Password</label>\n\t\t<input type= \"password\" class= \"form-control\" name=\"password\">\n\t</div>\n\t<input type= \"submit\" class= \"btn btn-primary\" (click)= \"onLogin()\" value= \"Logga in\">\n\n</form>\n</div>"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(authService) {
        this.authService = authService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent.prototype.onLogin = function () {
        this.authService.employee = true;
        this.authService.admin = false;
        this.authService.loggedin = false;
    };
    EmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<br>\n\t<legend>Anställda</legend>\n\t<br>\n\t<table class=\"table table-hover\" >\n  <tbody>\n  \t  <tr>\n      <th scope=\"col\">Namn</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Ta bort</th>\n    </tr>\n    <tr (click)=\"sven = !sven\">\n      <td>Emma Emmsson</td>\n      <td>emma@exempel.se</td>\n      <td><a href=\"#\" >X</a></td>\n    </tr>\n    <tr>\n      <td>Knut Knutsson</td>\n      <td>knut@exempel.se</td>\n      <td><a href=\"#\" >X</a></td>\n    </tr>\n\n   </tbody>\n  </table><br>\n  \t<input type= \"button\" class= \"btn btn-outline-primary\" value= \"Lägg till anställd\">\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class= \"col-lg-4\" >\n<br>\n<br>\n<br>\n<ul class=\"nav nav-pills flex-column\" style= \"text-align: left; border-right: solid; border-width: 1px; border-color: #ccc\">\n\t  <li class=\"nav-item\" >\n    <legend>Visa information om:</legend>\n  </li>\n  <li class=\"nav-item\" >\n    <a class=\"nav-link\">Registrering</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" >Logga in</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" >Min profil</a></li>\n    <li class=\"nav-item \">\n    <a class=\"nav-link\" >Hyr hos oss</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" >Söktjänster</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" >Mitt boende</a>\n  </li>\n</ul>\n</div>\n<div class= \"col-lg-8\" style= \"text-align: left\">\n\t<br>\n\t<legend style= \"text-align: center\">Hjälp</legend>\n\t<div class= \"container\"><br>\n\n\t\t<h5>Registrera sig\n</h5>\n\t\t<p>\n\t\t\tFölj länken Registrera Dig och fyll i dina personuppgifter, sökandeuppgifter och inloggningsuppgifter. Mer information och instruktioner finns vid registreringen.\n<br>\nAlla fält med * är obligatoriska.\n<br>\nAnvändarnamn (personnummer) och lösenord bör hållas hemliga.\n<br>\nUppgifterna som anges vid registrering sparas i företagets register. Vill Du ändra uppgifterna i efterhand kan detta göras via Ändra profil och Byt lösenord. \n\n\t\t</p>\n\t</div><br>\n\t<div class= \"container\">\n\t\t<h5>Logga in\n</h5>\n\t\t<p>\n\t\t\tFör att kunna logga in måste Du vara registrerad med ett användarnamn och lösenord.\n<br>\nSkriv in ditt användarnamn och lösenord och klicka på knappen logga in.\n<br>\nLogga in för första gången<br>\nNär Du loggar in för första gången är det viktigt att Du kontrollerar och eventuellt kompletterar dina sökandeuppgifter. Detta kan Du göra under Ändra profil.\n<br><br>\nGlömt lösenord<br>\nOm Du har glömt ditt lösenord kan Du få ett nytt genom att följa länken Glömt lösenord? och skriva in din e-postadress eller ditt personnummer. Det nya lösenordet erhålles via valt meddelandesätt om så är möjligt. I annat fall finns information om alternativt tillvägagångssätt på sidan.\n<br><br>\nDet nya lösenordet bör bytas ut till ett ”personligt” lösenord. \n\n\t\t</p>\n\t</div><br>\n\t<div class= \"container\">\n\t\t<h5>Min profil\n</h5>\n\t\t<p>\n\t\t\tUppdatera profil<br>\nFör att kunna ändra din profil måste Du vara inloggad. Under Ändra profil kan Du uppdatera dina person- eller organisationsuppgifter tillsammans med de sökandeuppgifter Du tidigare registrerat.\n<br><br>\nByta lösenord<br>\nFör att kunna byta lösenord måste Du vara inloggad. Du går in på Byt lösenord, anger det nuvarande lösenordet, sedan det nya Du vill ha och till sist bekräftar Du det nya lösenordet genom att ange det igen.\n\t\t</p>\n\t</div><br>\n\t<div class= \"container\">\n\t\t<h5>Hyr hos oss\n</h5>\n\n\t\t<p>\n\t\t\tUthyrningspolicy<br>\nDu kan läsa mer om vår uthyrningspolicy här. \n\n\t\t</p>\n\t</div><br>\n\t<div class= \"container\">\n\t\t<h5>Söktjänster\n</h5>\n\t\t<p>\n\n\nDetaljerad sökning<br>\nDetaljerad sökning innebär att Du erbjuds fler möjligheter att filtrera ditt urval på. Du kan göra en detaljerad sökning på en bostad, bilplats eller lokal. Sökning på bilplats kräver i vissa fall att Du måste vara inloggad.\n<br><br>\n\nSökprenumeration<br>\nSökprenumeration fungerar snarlikt den detaljerade sökningen, med skillnad att Du kan spara dina sökkriterier över tiden och få ett meddelande via e-post när ett nytt objekt dykt upp som matchar din \"sökprofil\". Det senare kräver att Du valt meddelandesätt e-post och fyllt i en korrekt e-postadress.\n<br><br>\n\nIntresseanmälan<br>\nDu kan göra en intresseanmälan genom att klicka på ett objekt i sökresultatlistan och sedan välja \"Anmäl intresse\" på den detaljsida som följer.\n<br><br>\nUnder Intresseanmälningar hittar Du sedan en lista över de intresseanmälningar Du gjort. \"Aktuella intresseanmälningar\" visar de intresseanmälningar som Du gjort under den senaste perioden. Du kan ta bort din intresseanmälan under anmälningsperioden genom att klicka på knappen \"Ta bort\". Efter anmälningsperioden kan Du inte ändra Dig. Under \"Historik\" syns de anmälningar Du gjort under de senaste året.\n<br><br>\nErbjudanden<br>\nMina erbjudanden visar de erbjudanden som<br>\nDu har fått, men ej svarat på (Obesvarade erbjudanden).<br>\nDu har fått och svarat på, men som är under bearbetning (Besvarade, ej bearbetade erbjudanden).<br>\nHar bearbetats klart och som ej längre är till uthyrning (Historik).\n<br><br>Att ett erbjudande är under bearbetning innebär att vi gör en kreditkontroll av den kund som har möjlighet att få lägenheten.\n\t\t</p>\n\t</div><br>\n\t<div class= \"container\">\n\t\t<h5>Mitt boende\n</h5>\n\t\t<p>\n\t\t\tFör att utnyttja tjänsterna under Mitt boende måste Du vara hyresgäst hos oss och ha loggat in. \n\n\t\t</p>\n\t</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/invoices/invoices.component.css":
/*!*************************************************!*\
  !*** ./src/app/invoices/invoices.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/invoices/invoices.component.html":
/*!**************************************************!*\
  !*** ./src/app/invoices/invoices.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row container\">\n  <div class= \"col-lg-2\">\n  <br>\n  <legend>År</legend>\n<ul class=\"nav nav-pills flex-column\" style= \" border-right: solid; border-width: 1px; border-color: #ccc\">\n  <li class=\"nav-item\" >\n    <a class=\"nav-link\">2017</a>\n  </li>\n  <li class=\"nav-item\" >\n    <a class=\"nav-link\">2018</a>\n  </li>\n</ul>\n</div>\n<div class=\"col-lg-10\">\n<br>\n\t\t<legend>Skickade fakturor</legend><br>\n    <div class=\"row\">\n        <div class=\"form-group col-lg-4\">\n      <label for=\"exampleSelect1\">Visa:</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>Alla</option>\n\n        <option>Betalda</option>\n        <option>Obetalda</option>\n      </select>\n    </div>\n    <div class=\"form-group col-lg-4\">\n      <label for=\"exampleSelect1\">Markerade:</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>Registrera som betalda</option>\n        <option>Registrera som obetalda</option>\n      </select>\n    </div>\n    <div class=\"form-group col-lg-4\">\n      <label for=\"search\">Sök:</label>\n      <input type=\"text\" class=\"form-control\" id=\"search\" placeholder=\"t.ex. ocr, namn\">\n    </div>\n  </div>\n\t\t<table class=\"table \" >\n  <tbody>\n  \t  <tr>\n      <th scope=\"col\">Namn</th>\n      <th scope=\"col\">Förfallodag</th>\n      <th scope=\"col\">Betaldatum</th>\n      <th scope=\"col\">Ocr</th>\n      <th scope=\"col\">Faktura</th>\n\n    </tr>\n    <tr>\n      <td>Sven Svensson</td>\n      <td>2018-01-30</td>\n      <td>2018-01-25</td>\n      <td>40005678</td>\n      <td>pdf</td>\n      <td>    \n<div class=\"custom-control custom-checkbox\" >\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"knut\" >\n      <label class=\"custom-control-label\" for=\"knut\" style=\"position:static\"> </label>\n    </div>\n\n</td>\n\n\n    </tr>\n    <tr>\n      <td>Knut Knutsson</td>\n      <td>2018-01-30</td>\n      <td>Obetald</td>\n      <td>40005680</td>\n      <td><a href=\"/../../assets/Invoice-703C55F-0001.pdf\">Pdf</a></td>\n            <td>       <div class=\"custom-control custom-checkbox\" >\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"sven\" >\n      <label class=\"custom-control-label\" for=\"sven\" style=\"position:static\"> </label>\n    </div>\n</td>\n    </tr>\n   </tbody>\n  </table><br><br></div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/invoices/invoices.component.ts":
/*!************************************************!*\
  !*** ./src/app/invoices/invoices.component.ts ***!
  \************************************************/
/*! exports provided: InvoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesComponent", function() { return InvoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoicesComponent = /** @class */ (function () {
    function InvoicesComponent() {
    }
    InvoicesComponent.prototype.ngOnInit = function () {
    };
    InvoicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoices',
            template: __webpack_require__(/*! ./invoices.component.html */ "./src/app/invoices/invoices.component.html"),
            styles: [__webpack_require__(/*! ./invoices.component.css */ "./src/app/invoices/invoices.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoicesComponent);
    return InvoicesComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngIf= \"!this.authService.employee && !this.authService.admin\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact: true}\">\n    <a class=\"nav-link \" [routerLinkActive]=\"['active']\" [routerLink]=\"['/start']\">Översikt</a>\n  </li>\n  <li class=\"nav-item \" [routerLinkActive]=\"['active']\" >\n    <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/search']\">Lediga lägenheter</a>\n  </li>\n  <li *ngIf= \"!this.authService.employee && !this.authService.admin\" class=\"nav-item\"[routerLinkActive]=\"['active']\" >\n    <a class=\"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/help']\">Hjälp</a>\n  </li>\n  <li *ngIf= \"this.authService.loggedin\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n    <a class=\"nav-link\"  [routerLinkActive]=\"['active']\" [routerLink]=\"['/profile']\">Min profil</a>\n  </li>\n    <li *ngIf=\"this.authService.employee || this.authService.admin\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n    <a class= \"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/customer']\">Registrerade kunder</a >\n</li>\n    <li *ngIf=\"this.authService.employee || this.authService.admin\" class=\"nav-item\" [routerLinkActive]=\"['active']\" >\n    <a class= \"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/invoices']\">Skickade fakturor</a >\n</li>\n    <li *ngIf=\"this.authService.admin\" class=\"nav-item\">\n    <a class= \"nav-link\" [routerLinkActive]=\"['active']\" [routerLink]=\"['/employees']\">Anställda</a >\n</li>\n  <li *ngIf=\"this.authService.loggedin || this.authService.employee || this.authService.admin\" class=\"nav-item\">\n    <a class= \"nav-link\" (click)= \"logOut()\" href= \"/start\"> Logga ut</a >\n</li>\n</ul>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.tab = "start";
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logOut = function () {
        this.authService.loggedin = false;
        this.authService.employee = false;
        this.authService.admin = false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<div class= \"col-lg-4\">\n\t<br>\n\t<legend>Visa:</legend>\n<ul class=\"nav nav-pills flex-column\" style= \" border-right: solid; border-width: 1px; border-color: #ccc\">\n  <li class=\"nav-item\" >\n    <a class=\"nav-link\" (click)= \"this.page=1\">Mina uppgifter</a>\n  </li>\n  <li class=\"nav-item\" >\n    <a class=\"nav-link\" (click)= \"this.page=5\">Mina fakturor</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)= \"this.page=2\">Sökprenumerationer</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" (click)= \"this.page=3\">Intresseanmälningar</a></li>\n    <li class=\"nav-item \">\n    <a class=\"nav-link\" (click)= \"this.page=4\">Erbjudanden</a>\n  </li>\n  \n</ul>\n</div>\n<div class= \"col-lg-8 \" >\n<div *ngIf= \"this.page == 1\" >\n<br>\t<legend>Mina uppgifter</legend>\n\n\n\t<br>\n<table class=\"table \" >\n  <tbody>\n    <tr>\n      <th scope=\"row\">Email</th>\n      <td>sven@test.se</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Förnamn</th>\n      <td>Sven</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Eftenamn</th>\n      <td>Svensson</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Personnummer</th>\n      <td>19551219-1111</td>\n    </tr>   \n        <tr style=\"border-top:solid;border-top-width: 1.5px;\">\n      <th scope=\"row\">Land</th>\n      <td>Sverige</td>\n    </tr>\n        <tr>\n      <th scope=\"row\">Postadress</th>\n      <td>Drottninggatan 1</td>\n    </tr> \n        <tr>\n      <th scope=\"row\">Postnummer</th>\n      <td>17683</td>\n    </tr> \n        <tr >\n      <th scope=\"row\">Ort</th>\n      <td>Stockholm</td>\n    </tr> \n        <tr style=\"border-top:solid;border-top-width: 1.5px;\">\n      <th scope=\"row\">Telefon hem</th>\n      <td>08-111111</td>\n    </tr> \n         <tr>\n      <th scope=\"row\">Telefon mobil</th>\n      <td>073-57344529</td>\n    </tr> \n   </tbody>\n</table> \n<input type= \"button\" class=\"btn btn-outline-primary\" value=\"Ändra\">\n<input style = \"margin-left: 1em\" type=\"submit\" class=\"btn btn-outline-primary\" value=\"Anmäl medsökande\">\n<input type= \"button\" class=\"btn btn-danger\" value=\"Ta bort konto\" style=\"margin-left: 1em\">\n<br><br><br>\n<legend>Byt Lösenord</legend>\n<br>\n<form >\n\t<div class= \"form-group row \">\n\t\t<label class=\"col-sm-6\">Gammalt lösenord</label>\n\t\t<input type= \"password\" class= \"form-control col-sm-6\" name=\"email\">\n\t</div>\n\t<div class= \"form-group row\">\n\t\t<label class=\"col-sm-6\">Nytt lösenord</label>\n\t\t<input type= \"password\" class= \"form-control col-sm-6\" name=\"password\">\n\t</div>\n\t<div class= \"form-group row\">\n\t\t<label class=\"col-sm-6\">Bekräfta nytt lösenord</label>\n\t\t<input type= \"password\" class= \"form-control col-sm-6\" name=\"password\">\n\t</div>\n\t<input  type= \"button\" class= \"btn btn-outline-primary\" value= \"Byt\" style=\"margin-bottom: 1em\">\n\n</form>\n</div>\n\n<div *ngIf=\"this.page==2\" >\n\n<br>\n<legend>Mina sökprenumerationer</legend>\n<br>\n<table class=\"table\" >\n  <tbody>\n  \t  <tr>\n      <th scope=\"col\">Antal personer</th>\n      <th scope=\"col\">Områden</th>\n      <th scope=\"col\">Antal rum</th>\n      <th scope=\"col\">Status</th>\n    </tr>\n    <tr>\n      <td>2</td>\n      <td>Nockebyhus, Fredhäll</td>\n      <td>2,3</td>\n      <td>Aktiv</td>\n    </tr>\n    <tr>\n      <td>1</td>\n      <td>Nockebyhem</td>\n      <td>1,2</td>\n      <td>Stoppad</td>\n    </tr>\n   </tbody>\n  </table><br><br>\n<legend>Lägg till Sökprenumeration</legend>\n<br>\n<form>\n\t<h6>Lägenheter för * personer</h6>\n\n\t<div class=\"form-group row container\">\n    <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"onePerson\">\n      <label class=\"custom-control-label\" for=\"onePerson\">1</label>\n    </div>\n    <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"twoPerson\">\n      <label class=\"custom-control-label\" for=\"twoPerson\">2</label>\n    </div>\n  </div><br>\n  \t<h6>Antal rum</h6>\n\n\t<div class=\"form-group row container\">\n    <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"oneRoom\">\n      <label class=\"custom-control-label\" for=\"oneRoom\">1</label>\n    </div>\n    <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"twoRoom\">\n      <label class=\"custom-control-label\" for=\"twoRoom\">2</label>\n    </div>\n        <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"threeRoom\">\n      <label class=\"custom-control-label\" for=\"threeRoom\">3</label>\n    </div>\n  </div>\n  <br>\n  \t<h6>Område</h6>\n\n\t<div class=\"form-group row container\">\n    <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"nockebyhus\">\n      <label class=\"custom-control-label\" for=\"nockebyhus\">Nockebyhus</label>\n    </div>\n    <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"nockebyhem\">\n      <label class=\"custom-control-label\" for=\"nockebyhem\">Nockebyhem</label>\n    </div>\n        <div class=\"custom-control custom-checkbox col-sm-4\">\n      <input type=\"checkbox\" class=\"custom-control-input\" id=\"fredhäll\">\n      <label class=\"custom-control-label\" for=\"fredhäll\">Fredhäll</label>\n    </div>\n  </div>\n\t<input type= \"submit\" class= \"btn btn-primary\" value= \"Lägg till\">\n\n</form>\n\t</div>\n\n\t<div *ngIf=\"this.page==3\">\n\t\t<br>\n\t\t<legend>Mina Intresseanmälningar</legend><br>\n\t\t<div class=\"row\" style=\"border-right: solid; border-bottom: solid; border-width: 1px; border-color: #ccc; margin: 0.5em\">\n<img class=\"col-lg-4\" src=\"https://bilder.hemnet.se/images/results_list/d9/d2/d9d289ae66463fac82347e47a39a2856.jpg\">\n<div class=\"col-lg-8\" style= \"text-align: left\">\n\t\t<h6>Nockebygatan 5a</h6>\n\n\t<div class=\"row\">\n\n\t<p class= \"col-lg-6\">55 kvm   <br> 2 rum</p>\n\t<p class= \"col-lg-6\">2000 kr/mån   <br>1 person</p>\n    <input type= \"button\" class = \"btn btn-danger\" value = \"Ta bort\">\n  <input type= \"button\" class = \"btn btn-outline-primary\" value = \"Detaljinfo\" style=\"margin-left:1em\">\n</div>\n</div>\n</div>\n\n<div class=\"row\" style=\"border-right: solid; border-bottom: solid; border-width: 1px; border-color: #ccc; margin: 0.5em\">\n<img class=\"col-lg-4\" src=\"https://bilder.hemnet.se/images/results_list/e9/7d/e97d1c1048986104d577644b1b0bac74.jpg\">\n<div class=\"col-lg-8\" style= \"text-align: left\">\n\t\t<h6>Fredhällplan 20</h6>\n\n\t<div class=\"row\">\n\n\t<p class= \"col-lg-6\">30 kvm   <br> 1 rum</p>\n\t<p class= \"col-lg-6\">2000 kr/mån   <br>1 person</p>\n    <input type= \"button\" class = \"btn btn-danger\" value = \"Ta bort\">\n  <input type= \"button\" class = \"btn btn-outline-primary\" value = \"Detaljinfo\" style=\"margin-left:1em\">\n</div>\n</div>\n</div>\n<br>\n<a href=\"#\">Se historik</a>\n\t</div>\n\t<div *ngIf=\"this.page==4\">\n\t<br>\n\t\t<legend>Mina Erbjudanden</legend><br>\n<div class=\"row\" style=\"border-right: solid; border-bottom: solid; border-width: 1px; border-color: #ccc; margin: 0.5em\">\n<img class=\"col-lg-4\" src=\"https://bilder.hemnet.se/images/results_list/40/d6/40d61179e9e6188e69a9c86b5236be25.jpg\">\n<div class=\"col-lg-8\" style= \"text-align: left\">\n    <h6>Nockebyhus 10</h6>\n\n  <div class=\"row\">\n\n  <p class= \"col-lg-6\">100 kvm   <br> 2 rum</p>\n  <p class= \"col-lg-6\">2000 kr/mån   <br>2 person</p><br> \n\n  <input type= \"button\" class = \"btn btn-danger\" value = \"Tacka Nej\" style=\"margin-left:1em\">\n    <input class = \"btn btn-success\" type= \"button\" value = \"Tacka Ja\" style=\"margin-left:1em\"></div>\n</div>\n</div>\t</div>\n\n\t\t<div *ngIf=\"this.page==5\">\n\t<br>\n\t\t<legend>Mina Fakturor</legend><br>\n\t\t<table class=\"table \" >\n  <tbody>\n  \t  <tr>\n      <th scope=\"col\">Datum</th>\n      <th scope=\"col\">Status</th>\n      <th scope=\"col\">Ocr</th>\n      <th scope=\"col\">Faktura</th>\n    </tr>\n    <tr>\n      <td>2017-01-30</td>\n      <td>Betald</td>\n      <td>400027678</td>\n      <td>Pdf länk</td>\n    </tr>\n    <tr>\n      <td>2018-01-30</td>\n      <td>Obetald</td>\n\n      <td>400027656</td>\n      <td><a href=\"/../../assets/Invoice-703C55F-0001.pdf\">Pdf länk</a></td>\n    </tr>\n   </tbody>\n  </table><br><br>\n\t</div>\n\n\n</div></div>\n\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.page = 1;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<form class= \"col-lg-8\"><br>    \n\t<h3>Registrera dig</h3>\n\t<br>\n\n  <fieldset>\n\n<legend>Kund- och Faktureringsuppgifter</legend><br>\n\n    <div class=\"row container form-group\">\n      <label class=\"col-sm-4\" for=\"firstName\">Förnamn *</label>\n      <input type=\"text\" class=\"form-control col-sm-8\" id=\"firstName\">\n    </div>\n    <div class=\"row  container form-group\">\n      <label class=\"col-sm-4\" for=\"lastName\">Efternamn *</label>\n      <input type=\"text\" class=\"form-control col-sm-8\" id=\"lastName\">\n    </div>\n        <div class=\"row form-group container\">\n      <label class=\"col-sm-4\" for=\"personalId\">Personnummer *</label>\n      <input type=\"number\" class=\"form-control col-sm-8\" id=\"personalId\" placeholder=\"ex. 19450720-1234\">\n    </div>\n    <div class=\"custom-control custom-checkbox\">\n        <input class=\"custom-control-input\" type=\"checkbox\" value=\"\">\n        <label class=\"custom-control-label\">\n          Saknar svenskt personnummer\n        </label>\n      </div><br>\n    <div class=\"form-group container row\" style=\"border-top:solid; border-width: 1px; border-color: #ccc; padding-top: 1em\">\n    \t<br>\n      <label class=\"col-sm-4\" for=\"country\">Land</label>\n      <select class=\"form-control col-sm-8\" id=\"country\">\n        <option></option>\n        <option>Sverige</option>\n        <option>Finland</option>\n        <option>Danmark</option>\n        <option>Norge</option>\n      </select>\n    </div>\n    <div class=\"row container form-group\">\n      <label class=\"col-sm-4\" for=\"address\">Postadress *</label>\n      <input type=\"text\" class=\"form-control col-sm-8\" id=\"address\">\n    </div>\n    <div class=\"row container form-group\">\n      <label class=\"col-sm-4\" for=\"address2\">Postadress 2</label>\n      <input type=\"text\" class=\"form-control col-sm-8\" id=\"address2\">\n    </div>\n    <div class=\"row container form-group\">\n      <label class=\"col-sm-4\" for=\"postnr\">Postnummer *</label>\n      <input type=\"text\" class=\"form-control col-sm-8\" id=\"postnr\">\n    </div>\n     <div class=\"row container form-group\">\n      <label class=\"col-sm-4\" for=\"ort\">Ort *</label>\n      <input type=\"text\" class=\"form-control col-sm-8\" id=\"ort\">\n    </div>\n    <div class=\"row container form-group\" style=\"border-top:solid; border-width: 1px; border-color: #ccc; padding-top: 1em\">\n      <label class=\"col-sm-4\" for=\"phoneHome\">Telefon hem</label>\n      <input type=\"number\" class=\"form-control col-sm-8\" id=\"phoneHome\" >\n    </div>\n    <div class=\"row container form-group\">\n      <label class=\"col-sm-4\" for=\"phoneCell\">Telefon mobil</label>\n      <input type=\"number\" class=\"form-control col-sm-8\" id=\"phoneCell\" >\n    </div><br>\n    \t    \t<legend>Inloggningsuppgifter</legend><br>\n    <div class=\"form-group container row\">\n\n      <label class=\"col-sm-4\" for=\"email\">Email adress *</label>\n      <input type=\"email\" class=\"form-control col-sm-8\" id=\"email\" placeholder=\"anders@exempel.com\"></div>\n          <div class=\"form-group container row\">\n\n      <label class=\"col-sm-4\" for=\"confirmEmail\">Bekräfta email adress *</label>\n      <input type=\"email\" class=\"form-control col-sm-8\" id=\"confirmEmail\"placeholder=\"anders@exempel.com\">\n    </div><br>\n    <div class=\"form-group container row\">\n      <label class=\"col-sm-4\" for=\"exampleInputPassword1\">Lösenord *</label>\n      <input type=\"password\" class=\"form-control col-sm-8\" id=\"password\" ></div>\n\n          <div class=\"form-group container row\">\n      <label class=\"col-sm-4\" for=\"confirmPassword\">Bekräfta lösenord *</label>\n      <input type=\"password\" class=\"form-control col-sm-8\" id=\"confirmPassword\" placeholder=\"Password\">\n    </div><br>\n        <fieldset class=\"form-group\">\n      <legend>Villkorsavtal</legend>\n      <div class=\"form-check container\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n          Jag godkänner\n        </label>\n      </div><br>\n\n    </fieldset>\n    <input type=\"submit\" class=\"btn btn-primary\" value= \"Slutför\">\n <br><br>\n\n  </fieldset>\n</form>\n<div class=\"card border-light mb-3 col-lg-4\" >\n<br>\n  <h5 class=\"card-header\">Om dina personuppgifter</h5>\n  <div class=\"card-body\">\n    <p class=\"card-text\">Ändamålet med att behandla personuppgifter i vår bostadskö är att kunna erbjuda och förmedla lediga lägenheter till personer som är intresserade av en bostad inom SVPH.<br><br>\n\nVid kontrakt kommer dina uppgifter att flyttas över till vårt hyressystem som används för att administrera hyresförhållandet.<br><br>\n\nDina personuppgifter lagras under den tid som din ansökan eller ditt kontrakt är aktuellt. \n<br><br>\nGenom att jag anmäler mig som bostadssökande hos SVPH, samtycker jag till att SVPH behandlar personuppgifter enligt ovan.<br>\nMer information finns om Du klickar Läs villkorsavtal.</p>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"row\" style= \"padding-top: 1em\">\n<div class= \"col-lg-3\" style= \"text-align:left\">\n\t<form style= \"border-bottom:solid; border-bottom-width: 1px; border-bottom-color: #ccc; padding-bottom: 1em\">\n\t\t<fieldset>\n\t<legend>Sökalternativ</legend>\n\t    <div class=\"form-group\">\n      <label for=\"exampleSelect1\">Lägenhet för</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n      \t<option>Alla</option>\n        <option>1 person</option>\n        <option>2 personer</option>\n\n      </select>\n    </div>\n\n        <div class=\"form-group\">\n      <label for=\"exampleSelect1\">Antal rum</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n      \t<option>Alla</option>\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n      </select>\n    </div>\n\n        <div class=\"form-group\">\n      <label for=\"exampleSelect1\">Område</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>Alla</option>\n        <option>Fredhäll</option>\n        <option>Nockebyhem</option>\n        <option>Nockebyhus</option>\n\n      </select>\n    </div>\n<button class=\"btn btn-primary\" type=\"submit\" > Sök </button>\n</fieldset>\n</form>\n<br>\n<div *ngIf= \"this.authService.loggedin\">\n<legend>Visa mina</legend>\n<ul class=\"nav\">\n  <li class=\"nav-item\" >\n    <a class=\"nav-link\" >Sökprenumerationer</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" >Intresseanmälningar</a>\n  </li>\n  <li class=\"nav-item\">\n    <a class=\"nav-link\" >Erbjudanden</a>\n</li>\n</ul>\n</div>\n</div>\n<div class= \"col-lg-9\">\n\n<legend>Sökresultat</legend><br>\n\n<div class=\"row\" style=\"border-right: solid; border-bottom: solid; border-width: 1px; border-color: #ccc; margin: 0.5em\">\n<img class=\"col-lg-4\" src=\"https://bilder.hemnet.se/images/results_list/d9/d2/d9d289ae66463fac82347e47a39a2856.jpg\">\n<div class=\"col-lg-8\" style= \"text-align: left\">\n\t\t<h6>Nockebygatan 5a</h6>\n\n\t<div class=\"row\">\n\n\t<p class= \"col-lg-6\">55 kvm   <br> 2 rum</p>\n\t<p class= \"col-lg-6\">2000 kr/mån   <br>1 person</p><br> \n  <input *ngIf= \"this.authService.loggedin\" class = \"btn btn-outline-primary\" type= \"button\" value = \"Anmäl intresse\">\n  <input *ngIf= \"this.authService.employee || this.authService.admin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Se intressenter\">\n\n  <input *ngIf= \"this.authService.employee || this.authService.admin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Ändra\" style=\"margin-left:1em\">\n    <input type= \"button\" class = \"btn btn-outline-primary\" value = \"Detaljinfo\" style=\"margin-left:1em\">\n\n\n</div>\n</div>\n</div>\n\n<div class=\"row\" style=\"border-right: solid; border-bottom: solid; border-width: 1px; border-color: #ccc; margin: 0.5em\">\n<img class=\"col-lg-4\" src=\"https://bilder.hemnet.se/images/results_list/e9/7d/e97d1c1048986104d577644b1b0bac74.jpg\">\n<div class=\"col-lg-8\" style= \"text-align: left\">\n\t\t<h6>Fredhällplan 20</h6>\n\n\t<div class=\"row\">\n\n\t<p class= \"col-lg-6\">30 kvm   <br> 1 rum</p>\n\t<p class= \"col-lg-6\">2000 kr/mån   <br>1 person</p><br> \n  <input *ngIf= \"this.authService.loggedin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Anmäl intresse\">\n  <input *ngIf= \"this.authService.employee || this.authService.admin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Se intressenter\">\n  <input *ngIf= \"this.authService.employee || this.authService.admin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Ändra\" style=\"margin-left:1em\">\n    <input class = \"btn btn-outline-primary\" type= \"button\" value = \"Detaljinfo\" style=\"margin-left:1em\"></div>\n</div>\n</div>\n\n<div class=\"row\" style=\"border-right: solid; border-bottom: solid; border-width: 1px; border-color: #ccc; margin: 0.5em\">\n<img class=\"col-lg-4\" src=\"https://bilder.hemnet.se/images/results_list/40/d6/40d61179e9e6188e69a9c86b5236be25.jpg\">\n<div class=\"col-lg-8\" style= \"text-align: left\">\n\t\t<h6>Nockebyhus 10</h6>\n\n\t<div class=\"row\">\n\n\t<p class= \"col-lg-6\">100 kvm   <br> 2 rum</p>\n\t<p class= \"col-lg-6\">2000 kr/mån   <br>2 person</p><br> \n  <input *ngIf= \"this.authService.loggedin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Anmäl intresse\">\n  <input *ngIf= \"this.authService.employee || this.authService.admin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Se intressenter\">\n  \n  <input *ngIf= \"this.authService.employee || this.authService.admin\" type= \"button\" class = \"btn btn-outline-primary\" value = \"Ändra\" style=\"margin-left:1em\">\n    <input class = \"btn btn-outline-primary\" type= \"button\" value = \"Detaljinfo\" style=\"margin-left:1em\"></div>\n</div>\n</div>\n\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(authService) {
        this.authService = authService;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedin = false;
        this.employee = false;
        this.admin = false;
    }
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"this.authService.admin || this.authService.employee\" class= \"row\">\n      <legend>Exempelinformation</legend><br>\n    <table class=\"table\">\n\n    <tbody>\n        <tr>\n      <th scope=\"row\">Fakturor med överskridet förfallod.</th>\n      <td>5</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Accepterade erbjudanden</th>\n      <td>3 st</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Nya lägenheter denna vecka</th>\n      <td>2 st</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Nästa visning</th>\n      <td>2018-10-14</td>\n    </tr>\n\n   </tbody>\n</table> \n</div>\n\n\n<div *ngIf= \"!this.authService.loggedin\" class= \"row\">\n\t<div class=\"col-lg-8\">\n  <div class=\"jumbotron\" style=\"text-align:left\">\n\n  <p>\nHär kan du som fyllt 55 år ställa dig i bostadskön och anmäla intresse för lediga lägenheter. \n<br>\nOm du inte redan står i bostadskön måste du registrera dig och sedan kan du logga in med ditt användarnamn och lösenord. Som inloggad kan du söka och bevaka de lägenheter som du är intresserad av.\n<br>\n</div>\n  </div>\n<div class=\"col-lg-4\">\n<form style=\"text-align:left; margin-top: 3em\">\n\t<div class= \"form-group\">\n\t\t<label>Email</label>\n\t\t<input type= \"text\" class= \"form-control\" name=\"email\">\n\t</div>\n\t<div class= \"form-group\">\n\t\t<label>Password</label>\n\t\t<input type= \"password\" class= \"form-control\" name=\"password\">\n\t</div>\n\t<input type= \"submit\" class= \"btn btn-primary\" (click)= \"onLogin()\" value= \"Logga in\">\n\t<input type= \"submit\" class= \"btn btn-outline-primary\" (click)= \"onRegister()\" value= \"Registrera dig\" style=\"margin-left:1em\">\n\n</form>\n</div>\n</div>\n\n<div *ngIf= \"this.authService.loggedin\" class= \"row\" >\n\t<div class=\"col-lg-9\"> <br>\n    <legend>Kundstatus</legend><br>\n\n\t\t<table class=\"table\">\n\n  <tbody>\n        <tr>\n      <th scope=\"row\">Antal ködagar</th>\n      <td>1537</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Intresseanmälan bostad</th>\n      <td>5 st</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Erbjudande bostad</th>\n      <td>2 st</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Kund sedan</th>\n      <td>2011-04-14</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sökprenumeration</th>\n      <td>Ej startad</td>\n    </tr>   \n        <tr>\n      <th scope=\"row\">Karantänstatus</th>\n      <td>3 missade visningar kvar till karantän</td>\n    </tr> \n   </tbody>\n</table> \n</div>\n\t<div class=\"col-lg-3\"><br>\n\t\t<form>\n\t\t<fieldset>\n\t<legend>Snabbsök</legend>\n\t    <div class=\"form-group\">\n      <label for=\"exampleSelect1\">Lägenhet för</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n      \t<option>Alla</option>\n        <option>1 person</option>\n        <option>2 personer</option>\n\n      </select>\n    </div>\n\n        <div class=\"form-group\">\n      <label for=\"exampleSelect1\">Antal rum</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n      \t<option>Alla</option>\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n      </select>\n    </div>\n\n        <div class=\"form-group\">\n      <label for=\"exampleSelect1\">Område</label>\n      <select class=\"form-control\" id=\"exampleSelect1\">\n        <option>Alla</option>\n        <option>Fredhäll</option>\n        <option>Nockebyhem</option>\n        <option>Nockebyhus</option>\n\n      </select>\n    </div>\n<button class=\"btn btn-primary\" type=\"submit\" > Sök </button>\n</fieldset>\n</form>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartComponent = /** @class */ (function () {
    function StartComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent.prototype.onLogin = function () {
        this.authService.loggedin = true;
        this.authService.employee = false;
        this.authService.admin = false;
    };
    StartComponent.prototype.onRegister = function () {
        console.log("hello");
        this.router.navigate(['/register']);
    };
    StartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], StartComponent);
    return StartComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fredrikgisslen/Documents/projekt/svph/SVPH/svph-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map