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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_login_message_login_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/users/login-message/login-message.component */ "./src/app/components/users/login-message/login-message.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_conceptos_conceptos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/conceptos/conceptos.component */ "./src/app/components/conceptos/conceptos.component.ts");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "./src/app/components/categorias/categorias.component.ts");
/* harmony import */ var _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/balance/balance.component */ "./src/app/components/balance/balance.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");












var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'user/login', component: _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'user/register', component: _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'user/login-message', component: _components_users_login_message_login_message_component__WEBPACK_IMPORTED_MODULE_5__["LoginMessageComponent"] },
    { path: 'user/profile', component: _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'conceptos', component: _components_conceptos_conceptos_component__WEBPACK_IMPORTED_MODULE_8__["ConceptosComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'categorias', component: _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_9__["CategoriasComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'balance', component: _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_10__["BalanceComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main-menu>\n  <router-outlet></router-outlet>\n</main-menu> "

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'balanceApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_conceptos_conceptos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/conceptos/conceptos.component */ "./src/app/components/conceptos/conceptos.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _modals_concepto_modal_concepto_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modals/concepto-modal/concepto-modal.component */ "./src/app/modals/concepto-modal/concepto-modal.component.ts");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "./src/app/components/categorias/categorias.component.ts");
/* harmony import */ var _modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/categoria-modal/categoria-modal.component */ "./src/app/modals/categoria-modal/categoria-modal.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _components_users_login_message_login_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/users/login-message/login-message.component */ "./src/app/components/users/login-message/login-message.component.ts");
/* harmony import */ var _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/balance/balance.component */ "./src/app/components/balance/balance.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_conceptos_conceptos_component__WEBPACK_IMPORTED_MODULE_7__["ConceptosComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_13__["MainMenuComponent"],
                _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _modals_concepto_modal_concepto_modal_component__WEBPACK_IMPORTED_MODULE_20__["ConceptoModalComponent"],
                _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_21__["CategoriasComponent"],
                _modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_22__["CategoriaModalComponent"],
                _components_users_login_message_login_message_component__WEBPACK_IMPORTED_MODULE_24__["LoginMessageComponent"],
                _components_balance_balance_component__WEBPACK_IMPORTED_MODULE_25__["BalanceComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_15__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_16__["AngularFireDatabaseModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_23__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_14__["environment"].production })
            ],
            entryComponents: [
                _modals_concepto_modal_concepto_modal_component__WEBPACK_IMPORTED_MODULE_20__["ConceptoModalComponent"],
                _modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_22__["CategoriaModalComponent"]
            ],
            providers: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuth"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestore"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/balance/balance.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/balance/balance.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFsYW5jZS9iYWxhbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/balance/balance.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/balance/balance.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header-app\">\n    <h1>Balance de Ingresos y Egresos</h1>\n  </div>\n  <form #formFiltro=\"ngForm\" (ngSubmit)=\"getConceptosByUserDates(formFiltro)\">\n  <div class=\"example-header\" fxLayout=\"row\" mat-dialog-content>\n    <div class=\"col-md-3\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pick\"  placeholder=\"Fecha Inicio\" [formControl]=\"fechaInicio\">\n        <mat-datepicker-toggle matSuffix [for]=\"pick\"></mat-datepicker-toggle>\n        <mat-datepicker #pick></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-3\">\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"pick\"  placeholder=\"Fecha Fin\" [formControl]=\"fechaFin\">\n        <mat-datepicker-toggle matSuffix [for]=\"pick\"></mat-datepicker-toggle>\n        <mat-datepicker #pick></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-md-3\">\n      <button mat-button cdkFocusInitial (click)=\"(this.formFiltro.onSubmit())\">Filtrar</button>\n    </div>\n  </div>\n  </form>\n  <div>\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n      <ng-container matColumnDef=\"type\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"category\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Categoría </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"description\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Descripción </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"mount\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Monto </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"mount-cell\"> {{element.mount | number:'.2'}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"date\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.date.toDate() | date: 'dd/MM/yyyy'}} </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/balance/balance.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/balance/balance.component.ts ***!
  \*********************************************************/
/*! exports provided: BalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BalanceComponent", function() { return BalanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/conceptos.service */ "./src/app/services/conceptos.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");





var BalanceComponent = /** @class */ (function () {
    function BalanceComponent(conceptoService, dialog, authService) {
        this.conceptoService = conceptoService;
        this.dialog = dialog;
        this.authService = authService;
        this.isAdmin = null;
        this.userUid = null;
        this.displayedColumns = ['type', 'category', 'description', 'mount', 'date'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    BalanceComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    BalanceComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        //this.fechaInicio = new FormControl(this.data.selectedConcepto.date.toDate());
    };
    BalanceComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    BalanceComponent.prototype.getConceptosByUserDates = function (filtroForm) {
        var _this = this;
        this.balance.fechaInicio = filtroForm.value.fechaInicio;
        this.balance.fechaFin = filtroForm.value.fechaFin;
        this.conceptoService.getConceptosByUserDates(this.userUid, this.balance).subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    BalanceComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                _this.userUid = auth.uid;
                _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BalanceComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], BalanceComponent.prototype, "sort", void 0);
    BalanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-balance',
            template: __webpack_require__(/*! ./balance.component.html */ "./src/app/components/balance/balance.component.html"),
            styles: [__webpack_require__(/*! ./balance.component.css */ "./src/app/components/balance/balance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__["ConceptosService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], BalanceComponent);
    return BalanceComponent;
}());



/***/ }),

/***/ "./src/app/components/categorias/categorias.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n\ttext-align: center;\r\n}\r\n\r\ntable{\r\n\twidth: 100%;\r\n}\r\n\r\n.mat-icon{\r\n\tcursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWFzL2NhdGVnb3JpYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1pY29ue1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/categorias/categorias.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"header-app\">\r\n  \t<h1>Mantenimiento de Categorías</h1>\r\n  </div>\r\n  <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n  \t<mat-icon>note_add</mat-icon> Nuevo\r\n  </button>\r\n  <br><br>\r\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    <ng-container matColumnDef=\"type\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"actions\">\r\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Acciones </th>\r\n    <td mat-cell *matCellDef=\"let element\">\r\n      <mat-icon (click)=\"onPreUpdateConcepto(element)\">edit</mat-icon>\r\n      &nbsp;\r\n      <mat-icon (click)=\"onDeleteConcepto(element.id)\">delete</mat-icon>\r\n    </td>\r\n    </ng-container>\r\n    \r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/categorias/categorias.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var _modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals/categoria-modal/categoria-modal.component */ "./src/app/modals/categoria-modal/categoria-modal.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var CategoriasComponent = /** @class */ (function () {
    function CategoriasComponent(categoriaService, dialog, authService) {
        this.categoriaService = categoriaService;
        this.dialog = dialog;
        this.authService = authService;
        this.isAdmin = null;
        this.userUid = null;
        this.displayedColumns = ['type', 'name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    CategoriasComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaModalComponent"], {
            width: '250px',
            data: { selectedCategoria: this.categoriaService.selectedCategoria,
                userUid: this.userUid }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CategoriasComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    CategoriasComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CategoriasComponent.prototype.getAllCategoriasByUser = function (userUid) {
        var _this = this;
        this.categoriaService.getCategoriasByUser(userUid).subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    CategoriasComponent.prototype.onChangeStatus = function (categoria) {
        this.categoriaService.updateCategoria(categoria);
    };
    CategoriasComponent.prototype.onPreUpdateConcepto = function (categoria) {
        this.categoriaService.selectedCategoria = Object.assign({}, categoria);
        this.openDialog();
    };
    CategoriasComponent.prototype.onDeleteConcepto = function (idCategoria) {
        var confirmacion = confirm('Estás seguro?');
        if (confirmacion) {
            this.categoriaService.deleteCategoria(idCategoria);
        }
    };
    CategoriasComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                _this.userUid = auth.uid;
                _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                });
                _this.getAllCategoriasByUser(_this.userUid);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], CategoriasComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], CategoriasComponent.prototype, "sort", void 0);
    CategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categorias',
            template: __webpack_require__(/*! ./categorias.component.html */ "./src/app/components/categorias/categorias.component.html"),
            styles: [__webpack_require__(/*! ./categorias.component.css */ "./src/app/components/categorias/categorias.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], CategoriasComponent);
    return CategoriasComponent;
}());



/***/ }),

/***/ "./src/app/components/conceptos/conceptos.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/conceptos/conceptos.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n\ttext-align: center;\r\n}\r\n\r\ntable{\r\n\twidth: 100%;\r\n}\r\n\r\n.mat-icon{\r\n\tcursor: pointer;\r\n}\r\n\r\n.mount-cell{\r\n\ttext-align: right; \r\n\tpadding-right: 1%;\r\n}\r\n\r\n.oneline{\r\n width: 49%;\r\n display: inline-block;\r\n}\r\n\r\n.oneline-right{\r\n width: 49%;\r\n display: inline-block;\r\n text-align: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25jZXB0b3MvY29uY2VwdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YscUJBQXFCO0NBQ3JCLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uY2VwdG9zL2NvbmNlcHRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZXtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1pY29ue1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vdW50LWNlbGx7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7IFxyXG5cdHBhZGRpbmctcmlnaHQ6IDElO1xyXG59XHJcblxyXG4ub25lbGluZXtcclxuIHdpZHRoOiA0OSU7XHJcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5vbmVsaW5lLXJpZ2h0e1xyXG4gd2lkdGg6IDQ5JTtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/conceptos/conceptos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/conceptos/conceptos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"header-app\">\r\n  \t<h1>Mantenimiento de Conceptos</h1>\r\n  </div>\r\n  <div class=\"example-header\" fxLayout=\"row\">\r\n    <div class=\"oneline\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\r\n        <mat-icon>note_add</mat-icon> Nuevo\r\n      </button>\r\n    </div>\r\n    <div class=\"oneline-right\">\r\n      <mat-form-field >\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtro\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n    \t<ng-container matColumnDef=\"type\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"category\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Categoría </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Descripción </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"mount\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Monto </th>\r\n        <td mat-cell *matCellDef=\"let element\" class=\"mount-cell\"> {{element.mount | number:'.2'}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"date\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.date.toDate() | date: 'dd/MM/yyyy'}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Acciones </th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <mat-icon (click)=\"onPreUpdateConcepto(element)\">edit</mat-icon>\r\n        &nbsp;\r\n        <mat-icon (click)=\"onDeleteConcepto(element.id)\">delete</mat-icon>\r\n      </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/conceptos/conceptos.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/conceptos/conceptos.component.ts ***!
  \*************************************************************/
/*! exports provided: ConceptosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptosComponent", function() { return ConceptosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/conceptos.service */ "./src/app/services/conceptos.service.ts");
/* harmony import */ var _modals_concepto_modal_concepto_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modals/concepto-modal/concepto-modal.component */ "./src/app/modals/concepto-modal/concepto-modal.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var ConceptosComponent = /** @class */ (function () {
    function ConceptosComponent(conceptoService, dialog, authService) {
        this.conceptoService = conceptoService;
        this.dialog = dialog;
        this.authService = authService;
        this.isAdmin = null;
        this.userUid = null;
        this.displayedColumns = ['type', 'category', 'description', 'mount', 'date', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ConceptosComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modals_concepto_modal_concepto_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConceptoModalComponent"], {
            width: '250px',
            data: { selectedConcepto: this.conceptoService.selectedConcepto,
                userUid: this.userUid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ConceptosComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ConceptosComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    ConceptosComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ConceptosComponent.prototype.getConceptosByUser = function (userUid) {
        var _this = this;
        this.conceptoService.getConceptosByUser(userUid).subscribe(function (res) {
            _this.dataSource.data = res;
        });
    };
    ConceptosComponent.prototype.onChangeStatus = function (concepto) {
        this.conceptoService.updateConcepto(concepto);
    };
    ConceptosComponent.prototype.onPreUpdateConcepto = function (concepto) {
        this.conceptoService.selectedConcepto = Object.assign({}, concepto);
        this.openDialog();
    };
    ConceptosComponent.prototype.onDeleteConcepto = function (idConcepto) {
        var confirmacion = confirm('Estás seguro de querer eliminar el concepto?');
        if (confirmacion) {
            this.conceptoService.deleteConcepto(idConcepto);
        }
    };
    ConceptosComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                _this.userUid = auth.uid;
                _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                    _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                });
                _this.getConceptosByUser(_this.userUid);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ConceptosComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ConceptosComponent.prototype, "sort", void 0);
    ConceptosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conceptos',
            template: __webpack_require__(/*! ./conceptos.component.html */ "./src/app/components/conceptos/conceptos.component.html"),
            styles: [__webpack_require__(/*! ./conceptos.component.css */ "./src/app/components/conceptos/conceptos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__["ConceptosService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ConceptosComponent);
    return ConceptosComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<app-login></app-login>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/users/login-message/login-message.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/users/login-message/login-message.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-app {\r\n\ttext-align: center;\r\n}\r\n\r\n.div-login{\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n}\r\n\r\n.table-login{\r\n\twidth: 100%;\r\n}\r\n\r\n.form-control-login{\r\n\ttext-align: center;\r\n}\r\n\r\n.btn-google{\r\n\tcolor: #ffffff;\r\n\tbackground: #dd4b39;\r\n}\r\n\r\n.alert{\r\n\tcolor: #ffffff;\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi1tZXNzYWdlL2xvZ2luLW1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztDQUNkLG1CQUFtQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvbG9naW4tbWVzc2FnZS9sb2dpbi1tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWFwcCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2LWxvZ2lue1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlLWxvZ2lue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWxvZ2lue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGV7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZDogI2RkNGIzOTtcclxufVxyXG5cclxuLmFsZXJ0e1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG5cdGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/login-message/login-message.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/users/login-message/login-message.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert\" role=\"alert\">\n    \t\tSe ha enviado un correo de confirmación a tu email, una vez verificado podrás logearte con tus credenciales mediante este formulario.\n    \t</div>\n<h1 class=\"header-app\">Login</h1>\n<div class=\"div-login\">\n\t<form [formGroup]=\"formLogin\" (ngSubmit)=\"onLogin()\">\n\t\t<table class=\"table-login\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #email maxlength=\"50\" matInput placeholder=\"Ingresa tu Email\"  formControlName = \"email\" required>\n\t\t\t\t\t\t<mat-error *ngIf=\"this.formLogin.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #password matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName = \"password\">\n\t\t\t\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t\n\t\t</table>\n\t</form>\n\t\t<table class=\"table-login\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"btn-send\" (click)=\"onLogin()\">\n\t\t\t\t\t\tLogin\n\t\t\t\t\t</button>\n\t\t\t\t\t&nbsp; \n\t\t\t\t\t<button mat-raised-button target=\"_blank\" class=\"btn-google\" (click)=\"onLoginGoogle()\">\n\t\t\t\t\t\tGoogle\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<a routerLink=\"/user/register\" class=\"form-control login-user\">¿Eres nuevo?</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/login-message/login-message.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/users/login-message/login-message.component.ts ***!
  \***************************************************************************/
/*! exports provided: LoginMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginMessageComponent", function() { return LoginMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






var LoginMessageComponent = /** @class */ (function () {
    function LoginMessageComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.hide = true;
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginMessageComponent.prototype.ngOnInit = function () {
    };
    LoginMessageComponent.prototype.onLogin = function () {
        var _this = this;
        //console.log('email', this.formLogin.value.email);
        //console.log('password', this.formLogin.value.password);
        this.authService.loginEmailUser(this.formLogin.value.email, this.formLogin.value.password)
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginMessageComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginMessageComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginMessageComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    LoginMessageComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['conceptos/']);
    };
    LoginMessageComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
        alert(err.message);
    };
    LoginMessageComponent.prototype.getErrorMessage = function () {
        return this.formLogin.get('email').hasError('required') ? 'Debes ingresar un valor' :
            this.formLogin.get('email').hasError('email') ? 'Email inválido' :
                '';
    };
    LoginMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-message',
            template: __webpack_require__(/*! ./login-message.component.html */ "./src/app/components/users/login-message/login-message.component.html"),
            styles: [__webpack_require__(/*! ./login-message.component.css */ "./src/app/components/users/login-message/login-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginMessageComponent);
    return LoginMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-app {\r\n\ttext-align: center;\r\n}\r\n\r\n.div-login{\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n}\r\n\r\n.table-login{\r\n\twidth: 100%;\r\n}\r\n\r\n.form-control-login{\r\n\ttext-align: center;\r\n}\r\n\r\n.btn-google{\r\n\tcolor: #ffffff;\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWFwcCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2LWxvZ2lue1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlLWxvZ2lue1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLWxvZ2lue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGV7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZDogI2RkNGIzOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/users/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header-app\">Login</h1>\n<div class=\"div-login\">\n\t<form [formGroup]=\"formLogin\" (ngSubmit)=\"onLogin()\">\n\t\t<table class=\"table-login\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #email maxlength=\"50\" matInput placeholder=\"Ingresa tu Email\"  formControlName = \"email\" required>\n\t\t\t\t\t\t<mat-error *ngIf=\"this.formLogin.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #password matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName = \"password\">\n\t\t\t\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t\n\t\t</table>\n\t</form>\n\t\t<table class=\"table-login\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"btn-send\" (click)=\"onLogin()\">\n\t\t\t\t\t\tLogin\n\t\t\t\t\t</button>\n\t\t\t\t\t&nbsp; \n\t\t\t\t\t<button mat-raised-button target=\"_blank\" class=\"btn-google\" (click)=\"onLoginGoogle()\">\n\t\t\t\t\t\tGoogle\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<a routerLink=\"/user/register\" class=\"form-control login-user\">¿Eres nuevo?</a>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.hide = true;
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        //console.log('email', this.formLogin.value.email);
        //console.log('password', this.formLogin.value.password);
        this.authService.loginEmailUser(this.formLogin.value.email, this.formLogin.value.password)
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    LoginComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['conceptos/']);
    };
    LoginComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
        alert(err.message);
    };
    LoginComponent.prototype.getErrorMessage = function () {
        return this.formLogin.get('email').hasError('required') ? 'Debes ingresar un valor' :
            this.formLogin.get('email').hasError('email') ? 'Email inválido' :
                '';
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-app {\r\n\ttext-align: center;\r\n}\r\n\r\n.div-profile{\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n}\r\n\r\n.table-profile{\r\n\twidth: 100%;\r\n}\r\n\r\n.form-control-profile{\r\n\ttext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hcHAge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpdi1wcm9maWxle1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlLXByb2ZpbGV7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtcHJvZmlsZXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header-app\">Perfil</h1>\n<div class=\"row mt-5\" class=\"div-profile\">\n\t<br>\n\t    <table class=\"table-profile\">\n\t      <!--<tr><td class=\"form-control-profile\"><img src=\"{{user.photoUrl}}\" alt=\"perfil\"></td></tr>-->\n\t      <tr><td class=\"form-control-profile\"><h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5></td></tr>\n\t      <tr><td class=\"form-control-profile\">\n\t      \t<p>{{user.email}}</p>\n\t    </td></tr>\n\t    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.user = {
            name: '',
            email: '',
            photoUrl: '',
            roles: {}
        };
        this.providerId = 'null';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (user) {
            if (user) {
                _this.user.name = user.displayName;
                _this.user.email = user.email;
                _this.user.photoUrl = user.photoURL;
                _this.providerId = user.providerData[0].providerId;
            }
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/users/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-app {\r\n\ttext-align: center;\r\n}\r\n\r\n.div-register{\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n}\r\n\r\n.table-register{\r\n\twidth: 100%;\r\n}\r\n\r\n.form-control-register{\r\n\ttext-align: center;\r\n}\r\n\r\n.btn-google{\r\n\tcolor: #ffffff;\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWFwcCB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGl2LXJlZ2lzdGVye1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlLXJlZ2lzdGVye1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXJlZ2lzdGVye1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1nb29nbGV7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcblx0YmFja2dyb3VuZDogI2RkNGIzOTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/users/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header-app\">Registro</h1>\n<div class=\"div-register\">\n\t<form [formGroup]=\"formRegister\" (ngSubmit)=\"onAddUser()\">\n\t\t<table class=\"table-register\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-register\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #email maxlength=\"50\" matInput placeholder=\"Ingresa tu Email\"  formControlName = \"email\" required>\n\t\t\t\t\t\t<mat-error *ngIf=\"this.formRegister.get('email').invalid\">{{getErrorMessage()}}</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-register\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #password matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName = \"password\">\n\t\t\t\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<!--\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-register\">\n\t\t\t\t\t<div class=\"form-group\">\n                  <h5>Seleccionar imagen:</h5>\n                  <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n                </div>\n                <div class=\"progress\">\n                  <div class=\"progress-bar progress-bar-stripped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercent | async) + '%'\">\n                  </div>\n                </div>\n                <br>\n                <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t-->\n\t\t</table>\n\t</form>\n\t\t<table class=\"table-register\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-register\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"btn-send\" [disabled]=\"!formRegister.valid\" (click)=\"onAddUser()\">\n\t\t\t\t\t\tRegistrar\n\t\t\t\t\t</button>\n\t\t\t\t\t&nbsp;\n\t\t\t\t\t<button mat-raised-button target=\"_blank\" class=\"btn-google\" (click)=\"onLoginGoogle()\">\n\t\t\t\t\t\tGoogle\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService, storage) {
        this.router = router;
        this.authService = authService;
        this.storage = storage;
        this.hide = true;
        this.formRegister = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onUpload = function (e) {
        var _this = this;
        //console.log('subir',e.target.files[0]);
        var id = Math.random().toString(36).substr(2);
        var file = e.target.files[0];
        var filePath = "uploads / profile_" + id;
        var ref = this.storage.ref(filePath);
        var task = this.storage.upload(filePath, file);
        this.uploadPercent = task.percentageChanges();
        task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
    };
    /*onAddUser(){
      this.authService.registerUser(this.formRegister.value.email, this.formRegister.value.password)
      .then((res) => {
        this.authService.isAuth().subscribe(user => {
          if(user){
            user.updateProfile({
              displayName: '',
              photoURL: this.inputImageUser.nativeElement.value
            }).then((res) => {
              this.onRegisterRedirect();
            }).catch(err => this.onCatchError(err));
          }
        })
      }).catch(err => this.onCatchError(err));
    }*/
    RegisterComponent.prototype.onAddUser = function () {
        var _this = this;
        if (this.formRegister.valid)
            this.authService.registerUser(this.formRegister.value.email, this.formRegister.value.password)
                .then(function (res) {
                _this.authService.isAuth().subscribe(function (user) {
                    user.sendEmailVerification();
                });
            }).catch(function (err) { return _this.onCatchError(err); })
                .finally(function () {
                _this.authService.logoutUser();
                _this.onRegisterRedirect();
            });
    };
    RegisterComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['conceptos']);
    };
    RegisterComponent.prototype.onRegisterRedirect = function () {
        this.router.navigate(['user/login-message']);
    };
    RegisterComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
        alert(err.message);
    };
    RegisterComponent.prototype.getErrorMessage = function () {
        return this.formRegister.get('email').hasError('required') ? 'Debes ingresar un valor' :
            this.formRegister.get('email').hasError('email') ? 'Email inválido' :
                '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUser'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], RegisterComponent.prototype, "inputImageUser", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(afsAuth, router) {
        this.afsAuth = afsAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afsAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) { return !!authState; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (auth) {
            if (!auth) {
                _this.router.navigate(['/user/login']);
            }
        }));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1tZW51L21haW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\" *ngIf=\"!isLogged\" routerLink=\"/user/login\">Login</a>\n      <a mat-list-item href=\"#\" *ngIf=\"!isLogged\" routerLink=\"/user/register\">Registro</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" routerLink=\"/user/profile\">Perfil</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" routerLink=\"/conceptos\">Conceptos</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" routerLink=\"/categorias\">Categorías</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" routerLink=\"/balance\">Balance</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" (click)=\"onLogout()\">Logout</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>App de Balance</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");






var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent(breakpointObserver, authService, afsAuth) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
        this.isLogged = false;
    }
    MainMenuComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                console.log('user logged');
                _this.isLogged = true;
            }
            else {
                console.log('user not logged');
                _this.isLogged = false;
            }
        });
    };
    MainMenuComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    MainMenuComponent.prototype.onLogout = function () {
        this.afsAuth.auth.signOut();
    };
    MainMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");











var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ],
            imports: [
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modals/categoria-modal/categoria-modal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/modals/categoria-modal/categoria-modal.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jYXRlZ29yaWEtbW9kYWwvY2F0ZWdvcmlhLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/modals/categoria-modal/categoria-modal.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/modals/categoria-modal/categoria-modal.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ !this.data.selectedCategoria.id ? 'Nueva Categoría' : 'Actualizar Categoría' }}</h1>\n<form #formCategoria=\"ngForm\" (ngSubmit)=\"onSaveCategoria(formCategoria)\">\n<div mat-dialog-content>\n  <p>Asigna los datos para la categoría</p>\n  <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.data.selectedCategoria.id\">\n  <mat-form-field>\n    <mat-label>Tipo de Concepto</mat-label>\n    <mat-select [ngModel]=\"this.data.selectedCategoria.type\" name=\"type\">\n      <mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\n        {{tipo.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"this.data.selectedCategoria.name\" name=\"name\" placeholder=\"Nombre\">\n  </mat-form-field>\n</div>\n</form>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick(formCategoria)\" >Close</button>\n  <button mat-button cdkFocusInitial (click)=\"this.formCategoria.onSubmit()\">Save</button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modals/categoria-modal/categoria-modal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modals/categoria-modal/categoria-modal.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoriaModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaModalComponent", function() { return CategoriaModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/categorias.service */ "./src/app/services/categorias.service.ts");




var CategoriaModalComponent = /** @class */ (function () {
    function CategoriaModalComponent(dialogRef, data, categoriaService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.categoriaService = categoriaService;
        this.tipos = [
            { id: 'ingreso', name: 'Ingresos' },
            { id: 'egreso', name: 'Egresos' }
        ];
    }
    CategoriaModalComponent.prototype.onNoClick = function (categoriaForm) {
        categoriaForm.resetForm();
        this.dialogRef.close();
    };
    CategoriaModalComponent.prototype.ngOnInit = function () {
        if (this.data.selectedCategoria.id != null) {
        }
        else {
            this.data.selectedCategoria.type = "ingreso";
        }
    };
    CategoriaModalComponent.prototype.onSaveCategoria = function (categoriaForm) {
        if (this.data.selectedCategoria.id == null) {
            // New
            //console.log('New', categoriaForm.value);
            if (this.data.selectedCategoria.name != null) {
                categoriaForm.value.userUid = this.data.userUid;
                this.categoriaService.createCategoria(categoriaForm.value);
            }
        }
        else {
            // Edit
            //console.log('Update', categoriaForm.value);
            if (this.data.selectedCategoria.name != null) {
                this.categoriaService.updateCategoria(categoriaForm.value);
            }
        }
        categoriaForm.resetForm();
        this.dialogRef.close();
    };
    CategoriaModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria-modal',
            template: __webpack_require__(/*! ./categoria-modal.component.html */ "./src/app/modals/categoria-modal/categoria-modal.component.html"),
            styles: [__webpack_require__(/*! ./categoria-modal.component.css */ "./src/app/modals/categoria-modal/categoria-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"]])
    ], CategoriaModalComponent);
    return CategoriaModalComponent;
}());



/***/ }),

/***/ "./src/app/modals/concepto-modal/concepto-modal.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modals/concepto-modal/concepto-modal.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFscy9jb25jZXB0by1tb2RhbC9jb25jZXB0by1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modals/concepto-modal/concepto-modal.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/modals/concepto-modal/concepto-modal.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{ !this.data.selectedConcepto.id ? 'Nuevo Concepto' : 'Actualizar Concepto' }}</h1>\n<form #formConcepto=\"ngForm\" (ngSubmit)=\"onSaveConcepto(formConcepto)\">\n<div mat-dialog-content>\n  <p>Asigna los datos para el concepto</p>\n  <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.data.selectedConcepto.id\">\n  <mat-form-field>\n    <mat-label>Tipo de Concepto</mat-label>\n    <mat-select [ngModel]=\"this.data.selectedConcepto.type\" name=\"type\" (ngModelChange)=\"getCategoriasByTipoUser($event, this.data.userUid)\">\n      <mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\n        {{tipo.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Categoría</mat-label>\n    <mat-select [ngModel]=\"this.data.selectedConcepto.category\" name=\"category\">\n      <mat-option *ngFor=\"let categoria of categorias\" [value]=\"categoria.name\">\n        {{categoria.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"this.data.selectedConcepto.description\" name=\"description\" placeholder=\"Descripción\">\n  </mat-form-field>\n  <mat-form-field>\n  \t<input matInput [(ngModel)]=\"this.data.selectedConcepto.mount\" name=\"mount\" placeholder=\"Monto\">\n  </mat-form-field>\n  <mat-form-field>\n  <input matInput [matDatepicker]=\"pick\"  placeholder=\"Fecha\" [formControl]=\"fecha\">\n  <mat-datepicker-toggle matSuffix [for]=\"pick\"></mat-datepicker-toggle>\n  <mat-datepicker #pick></mat-datepicker>\n</mat-form-field>\n</div>\n</form>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick(formConcepto)\" >Close</button>\n  <button mat-button cdkFocusInitial (click)=\"(this.formConcepto.onSubmit())\">Save</button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/modals/concepto-modal/concepto-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modals/concepto-modal/concepto-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConceptoModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptoModalComponent", function() { return ConceptoModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/conceptos.service */ "./src/app/services/conceptos.service.ts");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/categorias.service */ "./src/app/services/categorias.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var ConceptoModalComponent = /** @class */ (function () {
    function ConceptoModalComponent(dialogRef, data, conceptoService, categoriaService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.conceptoService = conceptoService;
        this.categoriaService = categoriaService;
        this.tipos = [
            { id: 'ingreso', name: 'Ingresos' },
            { id: 'egreso', name: 'Egresos' }
        ];
        this.categorias = [];
        this.fecha = null;
    }
    ConceptoModalComponent.prototype.onNoClick = function (conceptoForm) {
        conceptoForm.resetForm();
        this.dialogRef.close();
    };
    ConceptoModalComponent.prototype.ngOnInit = function () {
        if (this.data.selectedConcepto.id != null) {
            this.fecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.data.selectedConcepto.date.toDate());
            this.getCategoriasByTipoUser(this.data.selectedConcepto.type, this.data.userUid);
        }
        else {
            this.fecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](new Date());
            this.data.selectedConcepto.type = "ingreso";
            this.data.selectedConcepto.category = null;
            this.getCategoriasByTipoUser("ingreso", this.data.userUid);
        }
    };
    ConceptoModalComponent.prototype.onSaveConcepto = function (conceptoForm) {
        if (this.data.selectedConcepto.id == null) {
            // New
            //console.log('New', conceptoForm.value);
            conceptoForm.value.date = this.fecha.value;
            conceptoForm.value.userUid = this.data.userUid;
            this.conceptoService.createConcepto(conceptoForm.value);
        }
        else {
            // Edit
            //console.log('Update', conceptoForm.value);
            conceptoForm.value.date = this.fecha.value;
            this.conceptoService.updateConcepto(conceptoForm.value);
        }
        conceptoForm.resetForm();
        this.dialogRef.close();
    };
    ConceptoModalComponent.prototype.getCategoriasByTipoUser = function (tipo, userUid) {
        var _this = this;
        this.categoriaService.getCategoriasByTipoUser(tipo, userUid).subscribe(function (res) {
            _this.categorias = res;
        });
    };
    ConceptoModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-concepto-modal',
            template: __webpack_require__(/*! ./concepto-modal.component.html */ "./src/app/modals/concepto-modal/concepto-modal.component.html"),
            styles: [__webpack_require__(/*! ./concepto-modal.component.css */ "./src/app/modals/concepto-modal/concepto-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__["ConceptosService"],
            _services_categorias_service__WEBPACK_IMPORTED_MODULE_4__["CategoriasService"]])
    ], ConceptoModalComponent);
    return ConceptoModalComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");






var AuthService = /** @class */ (function () {
    function AuthService(afsAuth, afs) {
        this.afsAuth = afsAuth;
        this.afs = afs;
    }
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) {
                resolve(userData),
                    _this.updateUserData(userData.user);
            }).catch(function (err) { return console.log(reject(err)); });
        });
    };
    AuthService.prototype.loginEmailUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginFacebookUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
            .then(function (credential) { _this.updateUserData(credential.user); });
    };
    AuthService.prototype.loginGoogleUser = function () {
        var _this = this;
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider())
            .then(function (credential) { _this.updateUserData(credential.user); });
    };
    AuthService.prototype.logoutUser = function () {
        this.afsAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService.prototype.updateUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var data = {
            id: user.uid,
            email: user.email,
            roles: {
                editor: true
            }
        };
        return userRef.set(data, { merge: true });
    };
    AuthService.prototype.isUserAdmin = function (userUid) {
        return this.afs.doc("users/" + userUid).valueChanges();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/categorias.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CategoriasService = /** @class */ (function () {
    function CategoriasService(afs) {
        this.afs = afs;
        this.selectedCategoria = {
            id: null
        };
    }
    CategoriasService.prototype.getCategoriasByUser = function (userUid) {
        this.categoriasCollection = this.afs.collection('categorias', function (ref) { return ref.where('userUid', '==', userUid); });
        return this.categorias = this.categoriasCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    CategoriasService.prototype.getCategoriasByTipoUser = function (tipo, userUid) {
        this.categoriasCollection = this.afs.collection('categorias', function (ref) { return ref.where('type', '==', tipo).where('userUid', '==', userUid); });
        return this.categorias = this.categoriasCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    CategoriasService.prototype.updateCategoria = function (categoria) {
        return this.categoriasCollection.doc(categoria.id).update(categoria);
    };
    CategoriasService.prototype.deleteCategoria = function (id) {
        return this.categoriasCollection.doc(id).delete();
    };
    CategoriasService.prototype.createCategoria = function (categoria) {
        var _this = this;
        return this.categoriasCollection.add(categoria).
            then(function (docRef) {
            categoria.id = docRef.id;
            _this.updateCategoria(categoria);
        });
    };
    CategoriasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CategoriasService);
    return CategoriasService;
}());



/***/ }),

/***/ "./src/app/services/conceptos.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/conceptos.service.ts ***!
  \***********************************************/
/*! exports provided: ConceptosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConceptosService", function() { return ConceptosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ConceptosService = /** @class */ (function () {
    function ConceptosService(afs) {
        this.afs = afs;
        this.selectedConcepto = {
            id: null
        };
    }
    ConceptosService.prototype.getConceptosByUser = function (userUid) {
        this.conceptosCollection = this.afs.collection('conceptos', function (ref) { return ref.where('userUid', '==', userUid).orderBy('date', 'desc'); });
        return this.conceptos = this.conceptosCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ConceptosService.prototype.updateConcepto = function (concepto) {
        return this.conceptosCollection.doc(concepto.id).update(concepto);
    };
    ConceptosService.prototype.deleteConcepto = function (id) {
        return this.conceptosCollection.doc(id).delete();
    };
    ConceptosService.prototype.createConcepto = function (concepto) {
        var _this = this;
        return this.conceptosCollection.add(concepto).
            then(function (docRef) {
            concepto.id = docRef.id;
            _this.updateConcepto(concepto);
        });
        ;
    };
    ConceptosService.prototype.getConceptosByUserDates = function (userUid, balance) {
        this.conceptosCollection = this.afs.collection('conceptos', function (ref) { return ref.where('userUid', '==', userUid).orderBy('date', 'desc').startAt(balance.fechaInicio).endAt(balance.fechaFin); });
        return this.conceptos = this.conceptosCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    ConceptosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], ConceptosService);
    return ConceptosService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCMjNu7_xAOlTR9vkGsKEb1yQqQVcZfrG8",
        authDomain: "balanceapp-31e4c.firebaseapp.com",
        databaseURL: "https://balanceapp-31e4c.firebaseio.com",
        projectId: "balanceapp-31e4c",
        storageBucket: "balanceapp-31e4c.appspot.com",
        messagingSenderId: "762640607428",
        appId: "1:762640607428:web:a2d62cb3c4053fad",
        measurementId: "G-NR0YZ6DV62"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp64\www\balance-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map