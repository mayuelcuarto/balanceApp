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
/* harmony import */ var _components_conceptos_conceptos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/conceptos/conceptos.component */ "./src/app/components/conceptos/conceptos.component.ts");
/* harmony import */ var _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categorias/categorias.component */ "./src/app/components/categorias/categorias.component.ts");






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'conceptos', component: _components_conceptos_conceptos_component__WEBPACK_IMPORTED_MODULE_4__["ConceptosComponent"] },
    { path: 'categorias', component: _components_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasComponent"] },
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
                _modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_22__["CategoriaModalComponent"]
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
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_18__["AngularFireStorageModule"]
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

module.exports = "<div class=\"container\">\n  <div class=\"header-app\">\n  \t<h1>Mantenimiento de Categorías</h1>\n  </div>\n  <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n  \t<mat-icon>note_add</mat-icon> NEW\n  </button>\n  <br><br>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n    <ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-icon (click)=\"onPreUpdateConcepto(element)\">edit</mat-icon>\n      &nbsp;\n      <mat-icon (click)=\"onDeleteConcepto(element.id)\">delete</mat-icon>\n    </td>\n    </ng-container>\n    \n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

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





var CategoriasComponent = /** @class */ (function () {
    function CategoriasComponent(categoriaService, dialog) {
        this.categoriaService = categoriaService;
        this.dialog = dialog;
        this.displayedColumns = ['type', 'name', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    CategoriasComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modals_categoria_modal_categoria_modal_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaModalComponent"], {
            width: '250px',
            data: { selectedCategoria: this.categoriaService.selectedCategoria }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CategoriasComponent.prototype.ngOnInit = function () {
        this.getAllCategorias();
    };
    CategoriasComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    CategoriasComponent.prototype.getAllCategorias = function () {
        var _this = this;
        this.categoriaService.getCategorias().subscribe(function (res) {
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
        var confirmacion = confirm('Are you sure?');
        if (confirmacion) {
            this.categoriaService.deleteCategoria(idCategoria);
        }
    };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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

module.exports = "h1{\r\n\ttext-align: center;\r\n}\r\n\r\ntable{\r\n\twidth: 100%;\r\n}\r\n\r\n.mat-icon{\r\n\tcursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25jZXB0b3MvY29uY2VwdG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb25jZXB0b3MvY29uY2VwdG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxle1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWljb257XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/conceptos/conceptos.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/conceptos/conceptos.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header-app\">\n  \t<h1>Mantenimiento de Conceptos</h1>\n  </div>\n  <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">\n  \t<mat-icon>note_add</mat-icon> NEW\n  </button>\n  <br><br>\n  <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n  \t<ng-container matColumnDef=\"type\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Tipo </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.type}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Categoría </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Descripción </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"mount\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Monto </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.mount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fecha </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date.toDate() | date: 'dd/MM/yyyy'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\n    <td mat-cell *matCellDef=\"let element\">\n      <mat-icon (click)=\"onPreUpdateConcepto(element)\">edit</mat-icon>\n      &nbsp;\n      <mat-icon (click)=\"onDeleteConcepto(element.id)\">delete</mat-icon>\n    </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n"

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





var ConceptosComponent = /** @class */ (function () {
    function ConceptosComponent(conceptoService, dialog) {
        this.conceptoService = conceptoService;
        this.dialog = dialog;
        this.displayedColumns = ['type', 'category', 'description', 'mount', 'date', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ConceptosComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modals_concepto_modal_concepto_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConceptoModalComponent"], {
            width: '250px',
            data: { selectedConcepto: this.conceptoService.selectedConcepto,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ConceptosComponent.prototype.ngOnInit = function () {
        this.getAllConceptos();
    };
    ConceptosComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    ConceptosComponent.prototype.getAllConceptos = function () {
        var _this = this;
        this.conceptoService.getConceptos().subscribe(function (res) {
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
        var confirmacion = confirm('Are you sure?');
        if (confirmacion) {
            this.conceptoService.deleteConcepto(idConcepto);
        }
    };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_conceptos_service__WEBPACK_IMPORTED_MODULE_3__["ConceptosService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-app {\r\n\ttext-align: center;\r\n}\r\n\r\n.div-login{\r\n\tdisplay: inline-block;\r\n\twidth: 100%;\r\n}\r\n\r\n.table-login{\r\n\twidth: 100%;\r\n}\r\n\r\n.form-control-login{\r\n\ttext-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYXBwIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXYtbG9naW57XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFibGUtbG9naW57XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtbG9naW57XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/users/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"header-app\">Login</h1>\n<div class=\"div-login\">\n\t<form [formGroup]=\"formLogin\" (ngSubmit)=\"onLogin()\">\n\t\t<table class=\"table-login\">\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #email maxlength=\"50\" matInput placeholder=\"Ingresa tu Email\"  formControlName = \"email\">\n\t\t\t\t\t\t<mat-error *ngIf=\"email.invalid\">{{getErrorMessage()}}</mat-error>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input #password matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName = \"password\">\n\t\t\t\t\t\t<mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td class=\"form-control-login\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" class=\"btn-send\" (click)=\"onLogin()\">\n\t\t\t\t\t\tLOGIN\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</form>\n</div>\n"

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
        console.log('email', this.formLogin.value.email);
        console.log('password', this.formLogin.value.password);
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

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


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcnMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/users/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  register works!\n</p>\n"

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


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
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

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item href=\"#\" *ngIf=\"!isLogged\" routerLink=\"/\">Login</a>\n      <a mat-list-item href=\"#\" *ngIf=\"!isLogged\">Register</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" routerLink=\"/conceptos\">Conceptos</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" routerLink=\"/categorias\">Categorías</a>\n      <a mat-list-item href=\"#\" *ngIf=\"isLogged\" (click)=\"onLogout()\">Logout</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n      <span>App de Balance</span>\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

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

module.exports = "<h1 mat-dialog-title>{{ !this.data.selectedCategoria.id ? 'Nueva Categoría' : 'Actualizar Categoría' }}</h1>\n<form #formCategoria=\"ngForm\" (ngSubmit)=\"onSaveCategoria(formCategoria)\">\n<div mat-dialog-content>\n  <p>Asigna los datos para la categoría</p>\n  <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.data.selectedCategoria.id\">\n  <mat-form-field>\n    <mat-label>Tipo de Concepto</mat-label>\n    <mat-select [ngModel]=\"this.data.selectedCategoria.type\" name=\"type\" [value]=\"selectedTipo\">\n      <mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\n        {{tipo.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"this.data.selectedCategoria.name\" name=\"name\" placeholder=\"Nombre\">\n  </mat-form-field>\n</div>\n</form>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" >Close</button>\n  <button mat-button cdkFocusInitial (click)=\"this.formCategoria.onSubmit()\">Save</button>\n</div>\n\n"

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
        this.selectedTipo = 'Ingreso';
    }
    CategoriaModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CategoriaModalComponent.prototype.ngOnInit = function () {
    };
    CategoriaModalComponent.prototype.onSaveCategoria = function (categoriaForm) {
        if (this.data.selectedCategoria.id == null) {
            // New
            console.log('New', categoriaForm.value);
            if (this.data.selectedCategoria.name != null) {
                this.categoriaService.createCategoria(categoriaForm.value);
            }
        }
        else {
            // Edit
            console.log('Update', categoriaForm.value);
            if (this.data.selectedCategoria.name != null) {
                this.categoriaService.updateCategoria(categoriaForm.value);
            }
        }
        //console.log('Else', categoriaForm.value);
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

module.exports = "<h1 mat-dialog-title>{{ !this.data.selectedConcepto.id ? 'Nuevo Concepto' : 'Actualizar Concepto' }}</h1>\n<form #formConcepto=\"ngForm\" (ngSubmit)=\"onSaveConcepto(formConcepto)\">\n<div mat-dialog-content>\n  <p>Asigna los datos para el concepto</p>\n  <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.data.selectedConcepto.id\">\n  <mat-form-field>\n    <mat-label>Tipo de Concepto</mat-label>\n    <mat-select [ngModel]=\"this.data.selectedConcepto.type\" name=\"type\" [value]=\"selectedTipo\" (ngModelChange)=\"getCategoriasByTipo($event)\">\n      <mat-option *ngFor=\"let tipo of tipos\" [value]=\"tipo.id\">\n        {{tipo.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Categoría</mat-label>\n    <mat-select [ngModel]=\"this.data.selectedConcepto.category\" name=\"category\" [value]=\"selectedCategoria\" >\n      <mat-option *ngFor=\"let categoria of categorias\" [value]=\"categoria.name\">\n        {{categoria.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <input matInput [(ngModel)]=\"this.data.selectedConcepto.description\" name=\"description\" placeholder=\"Descripción\">\n  </mat-form-field>\n  <mat-form-field>\n  \t<input matInput [(ngModel)]=\"this.data.selectedConcepto.mount\" name=\"mount\" placeholder=\"Monto\" type=\"number\">\n  </mat-form-field>\n  <mat-form-field>\n  <input matInput [matDatepicker]=\"pick\"  placeholder=\"Fecha\" [formControl]=\"fecha\">\n  <mat-datepicker-toggle matSuffix [for]=\"pick\"></mat-datepicker-toggle>\n  <mat-datepicker #pick></mat-datepicker>\n</mat-form-field>\n</div>\n</form>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\" >Close</button>\n  <button mat-button cdkFocusInitial (click)=\"(this.formConcepto.onSubmit())\">Save</button>\n</div>\n\n\n"

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
        this.selectedTipo = 'Ingreso';
        this.fecha = null;
    }
    ConceptoModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConceptoModalComponent.prototype.ngOnInit = function () {
        this.getCategoriasByTipo('ingreso');
        this.fecha = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.data.selectedConcepto.date.toDate());
    };
    ConceptoModalComponent.prototype.onSaveConcepto = function (conceptoForm) {
        if (this.data.selectedConcepto.id == null) {
            // New
            console.log('New', conceptoForm.value);
            if (this.data.selectedConcepto.description != null
                && this.data.selectedConcepto.mount != null
                && this.data.selectedConcepto.date != null) {
                conceptoForm.value.date = this.fecha.value;
                this.conceptoService.createConcepto(conceptoForm.value);
            }
        }
        else {
            // Edit
            console.log('Update', conceptoForm.value);
            if (this.data.selectedConcepto.description != null
                && this.data.selectedConcepto.mount != null
                && this.data.selectedConcepto.date != null) {
                conceptoForm.value.date = this.fecha.value;
                this.conceptoService.updateConcepto(conceptoForm.value);
            }
        }
        //console.log('Else', conceptoForm.value);
        conceptoForm.resetForm();
        this.dialogRef.close();
    };
    ConceptoModalComponent.prototype.getAllCategorias = function () {
        var _this = this;
        this.categoriaService.getCategorias().subscribe(function (res) {
            _this.categorias = res;
        });
    };
    ConceptoModalComponent.prototype.getCategoriasByTipo = function (tipo) {
        var _this = this;
        this.categoriaService.getCategoriasByTipo(tipo).subscribe(function (res) {
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
    CategoriasService.prototype.getCategorias = function () {
        this.categoriasCollection = this.afs.collection('categorias');
        return this.categorias = this.categoriasCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    };
    CategoriasService.prototype.getCategoriasByTipo = function (tipo) {
        this.categoriasCollection = this.afs.collection('categorias', function (ref) { return ref.where('type', '==', tipo); });
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
        return this.categoriasCollection.add(categoria);
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
    ConceptosService.prototype.getConceptos = function () {
        this.conceptosCollection = this.afs.collection('conceptos');
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
        /*console.log(concepto.date.getFullYear(), concepto.date.getMonth() + 1, concepto.date.getDate());
        let day = concepto.date.getDate();
        let month = concepto.date.getMonth();
        let year = concepto.date.getFullYear();
    
        let fecha: string = (month + 1 ) + "/" + day + "/" + year;
        concepto.date = fecha;*/
        return this.conceptosCollection.doc(concepto.id).update(concepto);
    };
    ConceptosService.prototype.deleteConcepto = function (id) {
        return this.conceptosCollection.doc(id).delete();
    };
    ConceptosService.prototype.createConcepto = function (concepto) {
        console.log(concepto.date.getDate);
        return this.conceptosCollection.add(concepto);
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
        appId: "1:762640607428:web:a2d62cb3c4053fad"
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