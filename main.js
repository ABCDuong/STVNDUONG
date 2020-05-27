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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _snap_clinical_snap_clinical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snap-clinical/snap-clinical.component */ "./src/app/snap-clinical/snap-clinical.component.ts");
/* harmony import */ var _stem_immune_stem_immune_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stem-immune/stem-immune.component */ "./src/app/stem-immune/stem-immune.component.ts");








var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'work', component: _works_works_component__WEBPACK_IMPORTED_MODULE_4__["WorksComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'snapClinical', component: _snap_clinical_snap_clinical_component__WEBPACK_IMPORTED_MODULE_6__["SnapClinicalComponent"] },
    { path: 'StemImmune', component: _stem_immune_stem_immune_component__WEBPACK_IMPORTED_MODULE_7__["StemImmuneComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.navigate(['home']);
    };
    AppComponent.prototype.getRoute = function () {
        this.currRoute = this.router.url;
    };
    AppComponent.prototype.getResume = function () {
        var newWindow = window.open('https://drive.google.com/file/d/1I7Bom1cXeJMYP1XTgjh3lcm1fTgLbHxn/view?usp=sharing', '_blank');
        newWindow = null;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _work_card_work_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work-card/work-card.component */ "./src/app/work-card/work-card.component.ts");
/* harmony import */ var _snap_clinical_snap_clinical_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./snap-clinical/snap-clinical.component */ "./src/app/snap-clinical/snap-clinical.component.ts");
/* harmony import */ var _stem_immune_stem_immune_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stem-immune/stem-immune.component */ "./src/app/stem-immune/stem-immune.component.ts");
/* harmony import */ var ngx_carousel_3d__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-carousel-3d */ "./node_modules/ngx-carousel-3d/esm5/ngx-carousel-3d.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _works_works_component__WEBPACK_IMPORTED_MODULE_8__["WorksComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _work_card_work_card_component__WEBPACK_IMPORTED_MODULE_12__["WorkCardComponent"],
                _snap_clinical_snap_clinical_component__WEBPACK_IMPORTED_MODULE_13__["SnapClinicalComponent"],
                _stem_immune_stem_immune_component__WEBPACK_IMPORTED_MODULE_14__["StemImmuneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                ngx_carousel_3d__WEBPACK_IMPORTED_MODULE_15__["NgxCarousel3dModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\" fxLayout=\"column\">\n  <div class=\"contact-entity\" fxLayout=\"row nowrap\">\n    <img class=\"contact-entity-icon\" src=\"assets/images/if_linkedin-logo.svg\" alt=\"linkedIn-icon\">\n    <span class=\"contact-text\" (click)=\"getRoute(linkedIn)\">{{linkedIn}}</span>\n    <img class=\"copy-icon\" src=\"assets/images/copy.svg\" alt=\"copy-clipboard-icon\" (click)=\"copyClipboard(linkedIn)\">\n\n    <div class=\"copied-msg-container\" [ngClass]=\"copied1 ? 'show' : ''\">\n      <div class=\"copied-text\">Copied to clipboard!</div>\n    </div>\n  </div>\n\n  <div class=\"contact-entity\" fxLayout=\"row nowrap\">\n    <img class=\"contact-entity-icon\" src=\"../../assets/images/mail.svg\" alt=\"email-icon\">\n    <span class=\"contact-text\" (click)=\"getRoute(email)\">{{email}}</span>\n    <img class=\"copy-icon\" src=\"assets/images/copy.svg\" alt=\"copy-clipboard-icon\" (click)=\"copyClipboard(email)\">\n\n    <div class=\"copied-msg-container\" [ngClass]=\"copied2 ? 'show' : ''\">\n      <div class=\"copied-text\">Copied to clipboard!</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n:host {\n  background-color: #EFEFEB;\n  height: 100%; }\n.contact-container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n.contact-container .contact-entity {\n    margin: 2rem auto;\n    width: 28em;\n    align-items: center;\n    position: relative; }\n.contact-container .contact-entity .contact-entity-icon {\n      width: 2.15rem;\n      height: 2.15rem; }\n.contact-container .contact-entity .copy-icon {\n      width: 1rem;\n      height: 1rem; }\n.contact-container .contact-entity .copy-icon:hover {\n        cursor: pointer;\n        -webkit-filter: invert(66%) sepia(70%) saturate(417%) hue-rotate(158deg) brightness(99%) contrast(91%);\n                filter: invert(66%) sepia(70%) saturate(417%) hue-rotate(158deg) brightness(99%) contrast(91%); }\n.contact-container .contact-entity:hover .contact-text {\n      cursor: pointer;\n      color: #56CCF2; }\n.contact-container .contact-text {\n    width: 25rem;\n    line-height: 280%;\n    margin-left: 1.25rem; }\n.contact-container .copied-msg-container {\n    position: absolute;\n    right: -5rem;\n    top: -1rem;\n    display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcVXNlcnNcXFN0ZXZlbiBEdW9uZ1xcT25lRHJpdmVcXE15UHJvamVjdHNcXFN0ZXZlbkR1b25ndjIwMTkvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L0M6XFxVc2Vyc1xcU3RldmVuIER1b25nXFxPbmVEcml2ZVxcTXlQcm9qZWN0c1xcU3RldmVuRHVvbmd2MjAxOS9zcmNcXGFwcFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBO0FBSmxDO0lBT0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCLEVBQUE7QUFWdEI7TUFhTSxjQUFjO01BQ2QsZUFBZSxFQUFBO0FBZHJCO01BaUJNLFdBQVc7TUFDWCxZQUFZLEVBQUE7QUFsQmxCO1FBb0JRLGVBQWU7UUFDZixzR0FBOEY7Z0JBQTlGLDhGQUE4RixFQUFBO0FBckJ0RztNQTJCUSxlQUFlO01BQ2YsY0ZqQ1ksRUFBQTtBRUtwQjtJQWtDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG9CQUFvQixFQUFBO0FBcEN4QjtJQXdDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw2MDAsNzAwLDgwMHxNdWxpOjMwMCw0MDAsNjAwLDcwMCw4MDAnKTtcblxuJGxpZ2h0LWJsdWU6ICM1NkNDRjI7XG4kbWVkaXVtLWJsdWU6ICMyRDlDREI7XG4kb2ZmLXdoaXRlOiAjRUZGNkZCOztcbiRtYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogJ011bGknLCBzYW5zLXNlcmlmO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlLWluIHtcblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGg7XG59XG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1vdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uZmFkZS1vdXQge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGggIWltcG9ydGFudDtcbn1cblxuXG46aG9zdCB7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2JpbGUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbn1cbi5oaWRlIHtcbiAgLy8gZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLW91dDtcbn1cbi5zaG93IHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLWluO1xuICBhbmltYXRpb24tZGVsYXk6IDIwcztcbiAgQGV4dGVuZCAuZmFkZS1vdXQ7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDYwMCw3MDAsODAwfE11bGk6MzAwLDQwMCw2MDAsNzAwLDgwMFwiKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi5mYWRlLWluLCA6aG9zdCwgLm1vYmlsZS1zaG93LCAuc2hvdyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoOyB9XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbi5mYWRlLW91dCwgLmhpZGUsIC5zaG93IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aCAhaW1wb3J0YW50OyB9XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5tb2JpbGUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7IH1cblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVCO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuICAuY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtZW50aXR5IHtcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcbiAgICB3aWR0aDogMjhlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIC5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1lbnRpdHkgLmNvbnRhY3QtZW50aXR5LWljb24ge1xuICAgICAgd2lkdGg6IDIuMTVyZW07XG4gICAgICBoZWlnaHQ6IDIuMTVyZW07IH1cbiAgICAuY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtZW50aXR5IC5jb3B5LWljb24ge1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07IH1cbiAgICAgIC5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1lbnRpdHkgLmNvcHktaWNvbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjYlKSBzZXBpYSg3MCUpIHNhdHVyYXRlKDQxNyUpIGh1ZS1yb3RhdGUoMTU4ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoOTElKTsgfVxuICAgIC5jb250YWN0LWNvbnRhaW5lciAuY29udGFjdC1lbnRpdHk6aG92ZXIgLmNvbnRhY3QtdGV4dCB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogIzU2Q0NGMjsgfVxuICAuY29udGFjdC1jb250YWluZXIgLmNvbnRhY3QtdGV4dCB7XG4gICAgd2lkdGg6IDI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtOyB9XG4gIC5jb250YWN0LWNvbnRhaW5lciAuY29waWVkLW1zZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTVyZW07XG4gICAgdG9wOiAtMXJlbTtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFQjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGFjdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gIC5jb250YWN0LWVudGl0eSB7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gICAgd2lkdGg6IDI4ZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuY29udGFjdC1lbnRpdHktaWNvbiB7XG4gICAgICB3aWR0aDogMi4xNXJlbTtcbiAgICAgIGhlaWdodDogMi4xNXJlbTtcbiAgICB9XG4gICAgLmNvcHktaWNvbiB7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDY2JSkgc2VwaWEoNzAlKSBzYXR1cmF0ZSg0MTclKSBodWUtcm90YXRlKDE1OGRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDkxJSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAmOmhvdmVyIHtcbiAgICAgIC5jb250YWN0LXRleHQge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGFjdC10ZXh0IHtcbiAgICB3aWR0aDogMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gIH1cblxuICAuY29waWVkLW1zZy1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTVyZW07XG4gICAgdG9wOiAtMXJlbTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
        this.copied1 = false;
        this.copied2 = false;
        this.linkedIn = 'https://www.linkedin.com/in/stvnduong/';
        this.email = 'stevenduong22@gmail.com';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.copyClipboard = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var selBox, wait, wait;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selBox = document.createElement('textarea');
                        selBox.style.position = 'fixed';
                        selBox.style.left = '0';
                        selBox.style.top = '0';
                        selBox.style.opacity = '0';
                        selBox.value = data;
                        document.body.appendChild(selBox);
                        selBox.focus();
                        selBox.select();
                        document.execCommand('copy');
                        document.body.removeChild(selBox);
                        if (!data.startsWith('https')) return [3 /*break*/, 2];
                        this.copied1 = true;
                        wait = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
                        return [4 /*yield*/, wait(3000)];
                    case 1:
                        _a.sent();
                        this.copied1 = false;
                        return [3 /*break*/, 4];
                    case 2:
                        this.copied2 = true;
                        wait = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
                        return [4 /*yield*/, wait(3000)];
                    case 3:
                        _a.sent();
                        this.copied2 = false;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ContactComponent.prototype.getRoute = function (route) {
        if (!route) {
            console.log('route does not exist');
            return;
        }
        if (route.startsWith('http')) {
            var newWindow = window.open(route);
            newWindow = null;
        }
        else {
            this.copyClipboard(route);
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-container fade-in\">\n  <div class=\"landing-self-container\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div class=\"landing-self-name uppercase\">steven duong</div>\n    <div class=\"landing-self-role\" fxLayout=\"column\">\n      <p class=\"role-info\">UX <span class=\"role-x\">x</span> Interaction Designer</p>\n      <p class=\"role-info\">Software Engineer <span class=\"role-x\">x</span> Developer</p>\n    </div>\n  </div>\n  \n  <div class=\"landing-project-container\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n    <div class=\"mobile-show\">\n      <p class=\"project-featuring uppercase\">featuring</p>\n      <p class=\"project-title\">snap<span class=\"project-title-bold\">Clinical</span></p>\n      <p class=\"project-description\">\n        snapClinical™ is the only self-service mClinical platforms providing the industry with the most \n        advanced, powerful, flexible, scalable and HIPAA-compliant secure solutions to support all the \n        elements of any successful Clinical Trials.\n      </p>\n    </div>\n\n    <div class=\"landing-project-images\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n        <img src=\"assets/images/snap-template.png\" alt=\"snapClinical-Home-Device-Template\">\n        <img src=\"assets/images/snapClinicalPatientPage.png\" alt=\"snapClinical-Patient\" class=\"mobile-hidden\">\n\n        <div class=\"project-tech mobile-show\">\n          <span>HTML 5</span>\n          <span>CSS 3</span>\n          <span>Angular 5</span>\n          <span>REST APIs</span>\n          <span>JSON</span>\n          <span>JIRA</span>\n        </div>\n    </div>\n\n    <div class=\"landing-project-info\">\n      <div class=\"mobile-hidden\">\n        <p class=\"project-featuring uppercase\">featuring</p>\n        <p class=\"project-title\">snap<span class=\"project-title-bold\">Clinical</span></p>\n        <p class=\"project-description\">\n          snapClinical™ is the only self-service mClinical platforms providing the industry with the most \n          advanced, powerful, flexible, scalable and HIPAA-compliant secure solutions to support all the \n          elements of any successful Clinical Trials.\n        </p>\n\n        <div class=\"project-tech\">\n          <span>HTML 5</span>\n          <span>CSS 3</span>\n          <span>Angular 5</span>\n          <span>REST APIs</span>\n          <span>JSON</span>\n          <span>JIRA</span>\n        </div>\n      </div>\n\n      <button mat-raised-button class=\"view-btn\" (click)=\"getRoute('snapClinical')\">\n        <p class=\"btn-text uppercase\">view</p>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n.landing-self-container {\n  left: 0;\n  position: fixed;\n  display: block;\n  width: 50%;\n  height: 100%;\n  background: url('circleart.png') no-repeat;\n  background-size: contain;\n  background-position-y: 35%;\n  padding: 0 5rem; }\n.landing-self-container .landing-self-name {\n    letter-spacing: 2.5px;\n    font-family: \"Montserrat\", sans-serif;\n    margin-top: -8rem; }\n.landing-self-container .landing-self-role {\n    letter-spacing: 1.75px;\n    font-family: \"Muli\", sans-serif;\n    font-weight: 800; }\n.landing-self-container .landing-self-name,\n  .landing-self-container .landing-self-role {\n    font-size: 2.5vw;\n    -webkit-text-stroke-color: #FFF;\n    -moz-text-stroke-width: 0.75px;\n    -webkit-text-stroke-width: 0.75px; }\n.landing-self-container .role-info {\n    white-space: nowrap;\n    margin: 0; }\n.landing-self-container .role-x {\n    font-size: 1.75vw; }\n.landing-project-container {\n  right: 0;\n  position: fixed;\n  display: block;\n  width: 50%;\n  height: 100%;\n  background-color: #EFF6FB;\n  -webkit-transform: translateY(-3.875rem);\n          transform: translateY(-3.875rem);\n  padding: 0 5rem; }\n.landing-project-container .landing-project-images img {\n    max-height: 100%;\n    max-width: 100%;\n    height: auto;\n    -o-object-fit: contain;\n       object-fit: contain; }\n.landing-project-container .landing-project-images img:nth-child(1) {\n      width: 50%;\n      min-width: 175px; }\n.landing-project-container .landing-project-images img:nth-child(2) {\n      width: 50%;\n      min-width: 175px; }\n.landing-project-container .landing-project-info {\n    width: 80%; }\n.landing-project-container .project-featuring {\n    font-size: 0.875vw;\n    letter-spacing: 1px;\n    line-height: 0;\n    -webkit-transform: translateY(0.5rem);\n            transform: translateY(0.5rem); }\n.landing-project-container .project-title,\n  .landing-project-container .project-description,\n  .landing-project-container .project-tech {\n    font-family: \"Muli\", sans-serif; }\n.landing-project-container .project-title {\n    font-weight: 300;\n    font-size: 2.5vw;\n    letter-spacing: 1px;\n    line-height: 0; }\n.landing-project-container .project-title .project-title-bold {\n      font-weight: 800; }\n.landing-project-container .project-description {\n    letter-spacing: 0.75px;\n    padding-bottom: 3rem;\n    width: 110%;\n    font-size: 0.785vw; }\n.landing-project-container .project-tech {\n    margin: 0;\n    font-size: 0.95vw;\n    flex-flow: column;\n    display: flex;\n    white-space: nowrap; }\n.landing-project-container .view-btn {\n    margin-top: 2rem;\n    font-family: \"Muli\", sans-serif;\n    font-weight: 400;\n    letter-spacing: 2px;\n    text-align: center;\n    border-radius: 0px;\n    border: none;\n    background-color: #2D9CDB;\n    width: 5.95rem;\n    height: 2.15rem; }\n.landing-project-container .view-btn:hover {\n      cursor: pointer; }\n.landing-project-container .view-btn .btn-text {\n      color: #FFF;\n      margin: 0;\n      line-height: 190%;\n      font-size: 1rem; }\n.mobile-show {\n  display: none !important; }\n@media screen and (max-width: 1500px) {\n  .landing-self-container .landing-self-name,\n  .landing-self-container .landing-self-role {\n    font-size: 2rem;\n    -moz-text-stroke-width: 0.5px;\n    -webkit-text-stroke-width: 0.5px; }\n  .landing-project-container .landing-project-info .project-featuring {\n    font-size: 1.25vw; }\n  .landing-project-container .landing-project-info .project-title {\n    font-size: 2.75rem; }\n  .landing-project-container .landing-project-info .project-description {\n    font-size: 0.95rem; }\n  .landing-project-container .landing-project-info .project-tech {\n    font-size: 1.5vw; } }\n@media screen and (max-width: 1200px) {\n  .landing-self-container .landing-self-name {\n    font-size: 3.25vw;\n    white-space: nowrap;\n    -moz-text-stroke-width: 0.15px;\n    -webkit-text-stroke-width: 0.15px; }\n  .landing-self-container .landing-self-role {\n    font-size: 2.35vw;\n    -moz-text-stroke-width: 0.25px;\n    -webkit-text-stroke-width: 0.25px; }\n  .landing-project-container .landing-project-info .project-featuring {\n    font-size: 2vw; }\n  .landing-project-container .landing-project-info .project-title {\n    font-size: 5.75vw; }\n  .landing-project-container .landing-project-info .project-description {\n    font-size: 1.5vw; }\n  .landing-project-container .landing-project-info .project-tech {\n    font-size: 2vw; } }\n@media screen and (max-width: 1065px) {\n  .home-container {\n    margin-top: 3rem; }\n  .landing-self-container,\n  .landing-project-container {\n    width: 100%;\n    position: relative;\n    right: unset;\n    left: unset;\n    padding: 50vw 8vw; }\n  .landing-self-container .landing-self-name {\n    font-size: 5vw;\n    margin-top: -5rem;\n    -moz-text-stroke-width: 0.15px;\n    -webkit-text-stroke-width: 0.15px; }\n  .landing-self-container .landing-self-role {\n    font-size: 5vw;\n    -moz-text-stroke-width: 0.25px;\n    -webkit-text-stroke-width: 0.25px; }\n  .landing-self-container .role-x {\n    font-size: 3.15vw; }\n  .landing-project-container {\n    -webkit-transform: initial;\n            transform: initial; }\n    .landing-project-container .mobile-show {\n      display: block !important; }\n    .landing-project-container .project-featuring {\n      font-size: 1.15rem; }\n    .landing-project-container .project-title {\n      font-size: 3.5rem; }\n    .landing-project-container .project-description {\n      font-size: 1.05rem;\n      width: 100%; }\n    .landing-project-container .project-tech {\n      font-size: 1.35rem;\n      display: flex !important;\n      flex-direction: column !important;\n      margin: auto; }\n  .mobile-hidden {\n    display: none !important; } }\n@media screen and (max-width: 580px) {\n  .landing-self-container {\n    padding: 15.8rem 2rem; }\n    .landing-self-container .landing-self-name {\n      font-size: 1.35rem;\n      white-space: nowrap;\n      -moz-text-stroke-width: 0.05px;\n      -webkit-text-stroke-width: 0.05px; }\n    .landing-self-container .landing-self-role {\n      font-size: 0.95rem;\n      -moz-text-stroke-width: 0.15px;\n      -webkit-text-stroke-width: 0.15px; }\n  .landing-project-container {\n    padding: 5.8rem 2rem; }\n    .landing-project-container .project-featuring {\n      font-size: 0.85rem !important; }\n    .landing-project-container .project-title {\n      font-size: 2.25rem; }\n    .landing-project-container .project-description {\n      font-size: 0.85rem;\n      width: 85%; }\n    .landing-project-container .project-tech {\n      font-size: 0.85rem;\n      margin: auto; }\n  .landing-project-images {\n    margin: -1rem auto 1rem auto; }\n  .view-btn {\n    margin-top: 5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFN0ZXZlbiBEdW9uZ1xcT25lRHJpdmVcXE15UHJvamVjdHNcXFN0ZXZlbkR1b25ndjIwMTkvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL0M6XFxVc2Vyc1xcU3RldmVuIER1b25nXFxPbmVEcml2ZVxcTXlQcm9qZWN0c1xcU3RldmVuRHVvbmd2MjAxOS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0UsT0FBTztFQUNQLGVBQWU7RUFDZixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQ0FBOEQ7RUFDOUQsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixlQUFlLEVBQUE7QUFUakI7SUFZSSxxQkFBcUI7SUFDckIscUNGVmdDO0lFV2hDLGlCQUFpQixFQUFBO0FBZHJCO0lBaUJJLHNCQUFzQjtJQUN0QiwrQkZkK0I7SUVlL0IsZ0JBQWdCLEVBQUE7QUFuQnBCOztJQXVCSSxnQkFBZ0I7SUFDaEIsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixpQ0FBaUMsRUFBQTtBQTFCckM7SUE4QkksbUJBQW1CO0lBQ25CLFNBQVMsRUFBQTtBQS9CYjtJQWtDSSxpQkFBaUIsRUFBQTtBQUlyQjtFQUNFLFFBQVE7RUFDUixlQUFlO0VBQ2YsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1oseUJGMUNpQjtFRTJDakIsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxlQUFlLEVBQUE7QUFSakI7SUFZTSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixzQkFBbUI7T0FBbkIsbUJBQW1CLEVBQUE7QUFmekI7TUFrQlEsVUFBVTtNQUNWLGdCQUFnQixFQUFBO0FBbkJ4QjtNQXNCUSxVQUFVO01BQ1YsZ0JBQWdCLEVBQUE7QUF2QnhCO0lBNkJJLFVBQVUsRUFBQTtBQTdCZDtJQWdDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxxQ0FBNkI7WUFBN0IsNkJBQTZCLEVBQUE7QUFuQ2pDOzs7SUF5Q0ksK0JGM0UrQixFQUFBO0FFa0NuQztJQTRDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7QUEvQ2xCO01Ba0RNLGdCQUFnQixFQUFBO0FBbER0QjtJQXVESSxzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtBQTFEdEI7SUE4REksU0FBUztJQUNULGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQixFQUFBO0FBbEV2QjtJQXNFSSxnQkFBZ0I7SUFDaEIsK0JGekcrQjtJRTBHL0IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix5QkZsSGlCO0lFbUhqQixjQUFjO0lBQ2QsZUFBZSxFQUFBO0FBL0VuQjtNQWlGTSxlQUFlLEVBQUE7QUFqRnJCO01BcUZNLFdBQVc7TUFDWCxTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLGVBQWUsRUFBQTtBRnBEckI7RUUwREUsd0JBQXdCLEVBQUE7QUFLMUI7RUF6SUE7O0lBNklNLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsZ0NBQWdDLEVBQUE7RUFJcEM7SUFHTSxpQkFBaUIsRUFBQTtFQUh2QjtJQU1NLGtCQUFrQixFQUFBO0VBTnhCO0lBU00sa0JBQWtCLEVBQUE7RUFUeEI7SUFZTSxnQkFBZ0IsRUFBQSxFQUNqQjtBQUtQO0VBcktBO0lBd0tNLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlDQUFpQyxFQUFBO0VBM0t2QztJQThLTSxpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLGlDQUFpQyxFQUFBO0VBN0JyQztJQW1DTSxjQUFjLEVBQUE7RUFuQ3BCO0lBc0NNLGlCQUFpQixFQUFBO0VBdEN2QjtJQXlDTSxnQkFBZ0IsRUFBQTtFQXpDdEI7SUE0Q00sY0FBYyxFQUFBLEVBQ2Y7QUFLUDtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUE7RUFFbEI7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQixFQUFBO0VBL01yQjtJQW9OTSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixpQ0FBaUMsRUFBQTtFQXZOdkM7SUEwTk0sY0FBYztJQUNkLDhCQUE4QjtJQUM5QixpQ0FBaUMsRUFBQTtFQTVOdkM7SUErTk0saUJBQWlCLEVBQUE7RUF6THZCO0lBOExJLDBCQUFrQjtZQUFsQixrQkFBa0IsRUFBQTtJQURwQjtNQUlJLHlCQUF5QixFQUFBO0lBak0vQjtNQXFNTSxrQkFBa0IsRUFBQTtJQXJNeEI7TUF3TU0saUJBQWlCLEVBQUE7SUF4TXZCO01BMk1NLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7SUE1TWpCO01BK01NLGtCQUFrQjtNQUNsQix3QkFBd0I7TUFDeEIsaUNBQWlDO01BQ2pDLFlBQVksRUFBQTtFQUloQjtJQUNFLHdCQUF3QixFQUFBLEVBQ3pCO0FBR0g7RUFqUUE7SUFtUUkscUJBQXFCLEVBQUE7SUFuUXpCO01BcVFNLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsOEJBQThCO01BQzlCLGlDQUFpQyxFQUFBO0lBeFF2QztNQTJRTSxrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLGlDQUFpQyxFQUFBO0VBdk92QztJQTJPSSxvQkFBb0IsRUFBQTtJQTNPeEI7TUE2T00sNkJBQTZCLEVBQUE7SUE3T25DO01BZ1BNLGtCQUFrQixFQUFBO0lBaFB4QjtNQW1QTSxrQkFBa0I7TUFDbEIsVUFBVSxFQUFBO0lBcFBoQjtNQXVQTSxrQkFBa0I7TUFDbEIsWUFBWSxFQUFBO0VBSWhCO0lBQ0UsNEJBQTRCLEVBQUE7RUFHOUI7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDYwMCw3MDAsODAwfE11bGk6MzAwLDQwMCw2MDAsNzAwLDgwMCcpO1xuXG4kbGlnaHQtYmx1ZTogIzU2Q0NGMjtcbiRtZWRpdW0tYmx1ZTogIzJEOUNEQjtcbiRvZmYtd2hpdGU6ICNFRkY2RkI7O1xuJG1haW4tZm9udDogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuJHNlY29uZGFyeS1mb250OiAnTXVsaScsIHNhbnMtc2VyaWY7XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLmZhZGUtaW4ge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcbn1cblxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLW91dFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5mYWRlLW91dCB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aCAhaW1wb3J0YW50O1xufVxuXG5cbjpob3N0IHtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbn1cblxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4udXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1vYmlsZS1zaG93IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLWluO1xufVxuLmhpZGUge1xuICAvLyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIEBleHRlbmQgLmZhZGUtb3V0O1xufVxuLnNob3cge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIEBleHRlbmQgLmZhZGUtaW47XG4gIGFuaW1hdGlvbi1kZWxheTogMjBzO1xuICBAZXh0ZW5kIC5mYWRlLW91dDtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNjAwLDcwMCw4MDB8TXVsaTozMDAsNDAwLDYwMCw3MDAsODAwXCIpO1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1pblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLmZhZGUtaW4sIDpob3N0LCAubW9iaWxlLXNob3csIC5zaG93IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7IH1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1vdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLmZhZGUtb3V0LCAuaGlkZSwgLnNob3cge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoICFpbXBvcnRhbnQ7IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm1vYmlsZS1zaG93IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5zaG93IHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IDIwczsgfVxuXG4ubGFuZGluZy1zZWxmLWNvbnRhaW5lciB7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXJjbGVhcnQucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDM1JTtcbiAgcGFkZGluZzogMCA1cmVtOyB9XG4gIC5sYW5kaW5nLXNlbGYtY29udGFpbmVyIC5sYW5kaW5nLXNlbGYtbmFtZSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAtOHJlbTsgfVxuICAubGFuZGluZy1zZWxmLWNvbnRhaW5lciAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjc1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTXVsaVwiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7IH1cbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIgLmxhbmRpbmctc2VsZi1uYW1lLFxuICAubGFuZGluZy1zZWxmLWNvbnRhaW5lciAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgIGZvbnQtc2l6ZTogMi41dnc7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogI0ZGRjtcbiAgICAtbW96LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjc1cHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC43NXB4OyB9XG4gIC5sYW5kaW5nLXNlbGYtY29udGFpbmVyIC5yb2xlLWluZm8ge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luOiAwOyB9XG4gIC5sYW5kaW5nLXNlbGYtY29udGFpbmVyIC5yb2xlLXgge1xuICAgIGZvbnQtc2l6ZTogMS43NXZ3OyB9XG5cbi5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIHtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjZGQjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zLjg3NXJlbSk7XG4gIHBhZGRpbmc6IDAgNXJlbTsgfVxuICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAubGFuZGluZy1wcm9qZWN0LWltYWdlcyBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBvYmplY3QtZml0OiBjb250YWluOyB9XG4gICAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbWFnZXMgaW1nOm50aC1jaGlsZCgxKSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWluLXdpZHRoOiAxNzVweDsgfVxuICAgIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5sYW5kaW5nLXByb2plY3QtaW1hZ2VzIGltZzpudGgtY2hpbGQoMikge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIG1pbi13aWR0aDogMTc1cHg7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbmZvIHtcbiAgICB3aWR0aDogODAlOyB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWZlYXR1cmluZyB7XG4gICAgZm9udC1zaXplOiAwLjg3NXZ3O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNXJlbSk7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtdGl0bGUsXG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWRlc2NyaXB0aW9uLFxuICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC10ZWNoIHtcbiAgICBmb250LWZhbWlseTogXCJNdWxpXCIsIHNhbnMtc2VyaWY7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtdGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAyLjV2dztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAwOyB9XG4gICAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtdGl0bGUgLnByb2plY3QtdGl0bGUtYm9sZCB7XG4gICAgICBmb250LXdlaWdodDogODAwOyB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIHdpZHRoOiAxMTAlO1xuICAgIGZvbnQtc2l6ZTogMC43ODV2dzsgfVxuICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC10ZWNoIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjk1dnc7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC52aWV3LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LWZhbWlseTogXCJNdWxpXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDlDREI7XG4gICAgd2lkdGg6IDUuOTVyZW07XG4gICAgaGVpZ2h0OiAyLjE1cmVtOyB9XG4gICAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnZpZXctYnRuOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC52aWV3LWJ0biAuYnRuLXRleHQge1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBsaW5lLWhlaWdodDogMTkwJTtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG4ubW9iaWxlLXNob3cge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTUwMHB4KSB7XG4gIC5sYW5kaW5nLXNlbGYtY29udGFpbmVyIC5sYW5kaW5nLXNlbGYtbmFtZSxcbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIgLmxhbmRpbmctc2VsZi1yb2xlIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbmZvIC5wcm9qZWN0LWZlYXR1cmluZyB7XG4gICAgZm9udC1zaXplOiAxLjI1dnc7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbmZvIC5wcm9qZWN0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNzVyZW07IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbmZvIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbmZvIC5wcm9qZWN0LXRlY2gge1xuICAgIGZvbnQtc2l6ZTogMS41dnc7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIgLmxhbmRpbmctc2VsZi1uYW1lIHtcbiAgICBmb250LXNpemU6IDMuMjV2dztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIC1tb3otdGV4dC1zdHJva2Utd2lkdGg6IDAuMTVweDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjE1cHg7IH1cbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIgLmxhbmRpbmctc2VsZi1yb2xlIHtcbiAgICBmb250LXNpemU6IDIuMzV2dztcbiAgICAtbW96LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjI1cHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4yNXB4OyB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5sYW5kaW5nLXByb2plY3QtaW5mbyAucHJvamVjdC1mZWF0dXJpbmcge1xuICAgIGZvbnQtc2l6ZTogMnZ3OyB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5sYW5kaW5nLXByb2plY3QtaW5mbyAucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC1zaXplOiA1Ljc1dnc7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLmxhbmRpbmctcHJvamVjdC1pbmZvIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDEuNXZ3OyB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5sYW5kaW5nLXByb2plY3QtaW5mbyAucHJvamVjdC10ZWNoIHtcbiAgICBmb250LXNpemU6IDJ2dzsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjVweCkge1xuICAuaG9tZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07IH1cbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIsXG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IHVuc2V0O1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmc6IDUwdncgOHZ3OyB9XG4gIC5sYW5kaW5nLXNlbGYtY29udGFpbmVyIC5sYW5kaW5nLXNlbGYtbmFtZSB7XG4gICAgZm9udC1zaXplOiA1dnc7XG4gICAgbWFyZ2luLXRvcDogLTVyZW07XG4gICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC4xNXB4O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMTVweDsgfVxuICAubGFuZGluZy1zZWxmLWNvbnRhaW5lciAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIC1tb3otdGV4dC1zdHJva2Utd2lkdGg6IDAuMjVweDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjI1cHg7IH1cbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIgLnJvbGUteCB7XG4gICAgZm9udC1zaXplOiAzLjE1dnc7IH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIge1xuICAgIHRyYW5zZm9ybTogaW5pdGlhbDsgfVxuICAgIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5tb2JpbGUtc2hvdyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gICAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtZmVhdHVyaW5nIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xNXJlbTsgfVxuICAgIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMy41cmVtOyB9XG4gICAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC10ZWNoIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbjogYXV0bzsgfVxuICAubW9iaWxlLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1LjhyZW0gMnJlbTsgfVxuICAgIC5sYW5kaW5nLXNlbGYtY29udGFpbmVyIC5sYW5kaW5nLXNlbGYtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDEuMzVyZW07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC4wNXB4O1xuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4wNXB4OyB9XG4gICAgLmxhbmRpbmctc2VsZi1jb250YWluZXIgLmxhbmRpbmctc2VsZi1yb2xlIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIC1tb3otdGV4dC1zdHJva2Utd2lkdGg6IDAuMTVweDtcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMTVweDsgfVxuICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNS44cmVtIDJyZW07IH1cbiAgICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1mZWF0dXJpbmcge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7IH1cbiAgICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIuMjVyZW07IH1cbiAgICAubGFuZGluZy1wcm9qZWN0LWNvbnRhaW5lciAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICB3aWR0aDogODUlOyB9XG4gICAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIgLnByb2plY3QtdGVjaCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBtYXJnaW46IGF1dG87IH1cbiAgLmxhbmRpbmctcHJvamVjdC1pbWFnZXMge1xuICAgIG1hcmdpbjogLTFyZW0gYXV0byAxcmVtIGF1dG87IH1cbiAgLnZpZXctYnRuIHtcbiAgICBtYXJnaW4tdG9wOiA1cmVtOyB9IH1cbiIsIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy5zY3NzJztcblxuLmxhbmRpbmctc2VsZi1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2lyY2xlYXJ0LnBuZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAzNSU7XG4gIHBhZGRpbmc6IDAgNXJlbTtcblxuICAubGFuZGluZy1zZWxmLW5hbWUge1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjVweDtcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgICBtYXJnaW4tdG9wOiAtOHJlbTtcbiAgfVxuICAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjc1cHg7XG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICB9XG4gIC5sYW5kaW5nLXNlbGYtbmFtZSxcbiAgLmxhbmRpbmctc2VsZi1yb2xlIHtcbiAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6ICNGRkY7XG4gICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC43NXB4OyAgXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC43NXB4O1xuICB9XG5cbiAgLnJvbGUtaW5mbyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLnJvbGUteCB7XG4gICAgZm9udC1zaXplOiAxLjc1dnc7XG4gIH1cbn1cblxuLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIge1xuICByaWdodDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2ZmLXdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMuODc1cmVtKTtcbiAgcGFkZGluZzogMCA1cmVtO1xuXG4gIC5sYW5kaW5nLXByb2plY3QtaW1hZ2VzIHtcbiAgICBpbWcge1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG5cbiAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxNzVweDtcbiAgICAgIH1cbiAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxNzVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubGFuZGluZy1wcm9qZWN0LWluZm8ge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbiAgLnByb2plY3QtZmVhdHVyaW5nIHtcbiAgICBmb250LXNpemU6IDAuODc1dnc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41cmVtKTtcbiAgfVxuXG4gIC5wcm9qZWN0LXRpdGxlLFxuICAucHJvamVjdC1kZXNjcmlwdGlvbixcbiAgLnByb2plY3QtdGVjaCB7XG4gICAgZm9udC1mYW1pbHk6ICRzZWNvbmRhcnktZm9udDtcbiAgfVxuICAucHJvamVjdC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDIuNXZ3O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG5cbiAgICAucHJvamVjdC10aXRsZS1ib2xkIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgfVxuICB9XG4gIFxuICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNzVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgICB3aWR0aDogMTEwJTtcbiAgICBmb250LXNpemU6IDAuNzg1dnc7XG4gIH1cblxuICAucHJvamVjdC10ZWNoIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAwLjk1dnc7ICAgIFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC52aWV3LWJ0biB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWJsdWU7XG4gICAgd2lkdGg6IDUuOTVyZW07XG4gICAgaGVpZ2h0OiAyLjE1cmVtO1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIC5idG4tdGV4dCB7XG4gICAgICBjb2xvcjogI0ZGRjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOTAlO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG4ubW9iaWxlLXNob3cge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIge1xuICAgIC5sYW5kaW5nLXNlbGYtbmFtZSxcbiAgICAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC41cHg7ICBcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuNXB4O1xuICAgIH1cbiAgfVxuXG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIHtcbiAgICAubGFuZGluZy1wcm9qZWN0LWluZm8ge1xuICAgICAgLnByb2plY3QtZmVhdHVyaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1dnc7XG4gICAgICB9XG4gICAgICAucHJvamVjdC10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi43NXJlbTtcbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgfVxuICAgICAgLnByb2plY3QtdGVjaCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubGFuZGluZy1zZWxmLWNvbnRhaW5lciB7XG4gICAgLmxhbmRpbmctc2VsZi1uYW1lIHtcbiAgICAgIGZvbnQtc2l6ZTogMy4yNXZ3O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC1tb3otdGV4dC1zdHJva2Utd2lkdGg6IDAuMTVweDsgIFxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4xNXB4O1xuICAgIH1cbiAgICAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgICAgZm9udC1zaXplOiAyLjM1dnc7XG4gICAgICAtbW96LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjI1cHg7ICBcbiAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMjVweDtcbiAgICB9XG4gIH1cbiAgLmxhbmRpbmctcHJvamVjdC1jb250YWluZXIge1xuICAgIC5sYW5kaW5nLXByb2plY3QtaW5mbyB7XG4gICAgICAucHJvamVjdC1mZWF0dXJpbmcge1xuICAgICAgICBmb250LXNpemU6IDJ2dztcbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiA1Ljc1dnc7XG4gICAgICB9XG4gICAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgICB9XG4gICAgICAucHJvamVjdC10ZWNoIHtcbiAgICAgICAgZm9udC1zaXplOiAydnc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNjVweCkge1xuICAuaG9tZS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gIH1cbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIsXG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IHVuc2V0O1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmc6IDUwdncgOHZ3O1xuICB9XG5cbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIge1xuICAgIC5sYW5kaW5nLXNlbGYtbmFtZSB7XG4gICAgICBmb250LXNpemU6IDV2dztcbiAgICAgIG1hcmdpbi10b3A6IC01cmVtO1xuICAgICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC4xNXB4OyAgXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjE1cHg7XG4gICAgfVxuICAgIC5sYW5kaW5nLXNlbGYtcm9sZSB7XG4gICAgICBmb250LXNpemU6IDV2dztcbiAgICAgIC1tb3otdGV4dC1zdHJva2Utd2lkdGg6IDAuMjVweDsgIFxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4yNXB4O1xuICAgIH1cbiAgICAucm9sZS14IHtcbiAgICAgIGZvbnQtc2l6ZTogMy4xNXZ3O1xuICAgIH1cbiAgfVxuXG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIHtcbiAgICB0cmFuc2Zvcm06IGluaXRpYWw7XG5cbiAgICAubW9iaWxlLXNob3cge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHJvamVjdC1mZWF0dXJpbmcge1xuICAgICAgZm9udC1zaXplOiAxLjE1cmVtO1xuICAgIH1cbiAgICAucHJvamVjdC10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5wcm9qZWN0LXRlY2gge1xuICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgfVxuXG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmxhbmRpbmctc2VsZi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE1LjhyZW0gMnJlbTtcbiAgICAubGFuZGluZy1zZWxmLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC1tb3otdGV4dC1zdHJva2Utd2lkdGg6IDAuMDVweDsgIFxuICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS13aWR0aDogMC4wNXB4O1xuICAgIH1cbiAgICAubGFuZGluZy1zZWxmLXJvbGUge1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC4xNXB4OyAgXG4gICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAwLjE1cHg7XG4gICAgfVxuICB9XG4gIC5sYW5kaW5nLXByb2plY3QtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1LjhyZW0gMnJlbTtcbiAgICAucHJvamVjdC1mZWF0dXJpbmcge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wcm9qZWN0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcbiAgICB9XG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICB9XG4gICAgLnByb2plY3QtdGVjaCB7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICB9XG5cbiAgLmxhbmRpbmctcHJvamVjdC1pbWFnZXMge1xuICAgIG1hcmdpbjogLTFyZW0gYXV0byAxcmVtIGF1dG87XG4gIH1cblxuICAudmlldy1idG4ge1xuICAgIG1hcmdpbi10b3A6IDVyZW07XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route.service */ "./src/app/route.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, routeService, elementRef) {
        this.router = router;
        this.routeService = routeService;
        this.elementRef = elementRef;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#FFF';
    };
    HomeComponent.prototype.getRoute = function (route) {
        this.router.navigate([route]);
        this.routeService.currRoute = route;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"routeService.currRoute === 'home' ? 'nav-bar' : 'nav-bar-middle'\" fxLayout=\"row nowrap\" fxLayoutAlign=\"start center\">\n  <img class=\"nav-link nav-logo\" src=\"assets/images/Logo-sm.png\" alt=\"logo\" (click)=\"getRoute('home')\">\n\n  <div class=\"nav-link\" \n       [ngClass]=\"(routeService.currRoute === 'work' || routeService.currRoute === 'snapClinical' || routeService.currRoute === 'StemImmune' || routeService.currRoute === 'regex') ? 'nav-link-active' : ''\" (click)=\"getRoute('work')\">\n    <p>work</p>\n    <div class=\"nav-underline\"></div>\n  </div>\n  <div class=\"nav-link\" [ngClass]=\"currRoute === 'contact' ? 'nav-link-active' : ''\" (click)=\"getRoute('contact')\">\n    <p>contact</p>\n    <div class=\"nav-underline\"></div>\n  </div>\n  <div class=\"nav-link\" (click)=\"getResume()\">\n    <p>resume</p>\n    <div class=\"nav-underline\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show, .nav-bar, .nav-link:hover .nav-underline, .nav-link-active .nav-underline, .nav-bar-middle {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\na {\n  text-decoration: none; }\n.nav-bar {\n  height: 3.875rem;\n  width: 50%;\n  -webkit-transform: translate(2rem, 1rem);\n          transform: translate(2rem, 1rem); }\n.nav-link {\n  position: relative;\n  font-family: \"Montserrat\", sans-serif;\n  letter-spacing: 1px;\n  padding: 0 1rem; }\n.nav-link:hover {\n    cursor: pointer; }\n.nav-link:hover .nav-underline {\n      display: block; }\n.nav-link-active {\n  font-weight: 700; }\n.nav-link-active .nav-underline {\n    display: block; }\n.nav-underline {\n  position: absolute;\n  display: none;\n  width: 50%;\n  height: 0.25rem;\n  background-color: #56CCF2;\n  bottom: 0.25rem;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  content: \"\"; }\n.nav-bar-middle {\n  height: 3.875rem;\n  width: 25%;\n  margin: auto;\n  -webkit-transform: translate(2rem, 1rem);\n          transform: translate(2rem, 1rem); }\n@media screen and (max-width: 1150px) {\n  .nav-bar,\n  .nav-bar-middle {\n    width: 100%; }\n    .nav-bar .nav-logo,\n    .nav-bar-middle .nav-logo {\n      width: 2.5rem; }\n    .nav-bar .nav-link,\n    .nav-bar-middle .nav-link {\n      font-size: 0.95rem;\n      padding: 0 0.5rem; } }\n@media screen and (max-width: 640px) {\n  .nav-bar,\n  .nav-bar-middle {\n    width: 100%; }\n    .nav-bar .nav-logo,\n    .nav-bar-middle .nav-logo {\n      width: 2.5rem; }\n    .nav-bar .nav-link,\n    .nav-bar-middle .nav-link {\n      font-size: 0.785rem;\n      padding: 0 0.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcU3RldmVuIER1b25nXFxPbmVEcml2ZVxcTXlQcm9qZWN0c1xcU3RldmVuRHVvbmd2MjAxOS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvQzpcXFVzZXJzXFxTdGV2ZW4gRHVvbmdcXE9uZURyaXZlXFxNeVByb2plY3RzXFxTdGV2ZW5EdW9uZ3YyMDE5L3NyY1xcYXBwXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0UscUJBQXFCLEVBQUE7QUFHdkI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTtBQUlsQztFQUNFLGtCQUFrQjtFQUNsQixxQ0ZWa0M7RUVXbEMsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtBQUpqQjtJQU9JLGVBQWUsRUFBQTtBQVBuQjtNQVVNLGNBQWMsRUFBQTtBQU1wQjtFQUNFLGdCQUFnQixFQUFBO0FBRGxCO0lBSUksY0FBYyxFQUFBO0FBS2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZUFBZTtFQUNmLHlCRnpDa0I7RUUwQ2xCLGVBQWU7RUFDZixTQUFTO0VBQ1QsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLHdDQUFnQztVQUFoQyxnQ0FBZ0MsRUFBQTtBQUtsQztFQUNFOztJQUVFLFdBQVcsRUFBQTtJQUZiOztNQUlJLGFBQWEsRUFBQTtJQUpqQjs7TUFPSSxrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUEsRUFDbEI7QUFHTDtFQVpFOztJQWVFLFdBQVcsRUFBQTtJQWZiOztNQWlCSSxhQUFhLEVBQUE7SUFqQmpCOztNQW9CSSxtQkFBbUI7TUFDbkIsaUJBQWlCLEVBQUEsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNjAwLDcwMCw4MDB8TXVsaTozMDAsNDAwLDYwMCw3MDAsODAwJyk7XG5cbiRsaWdodC1ibHVlOiAjNTZDQ0YyO1xuJG1lZGl1bS1ibHVlOiAjMkQ5Q0RCO1xuJG9mZi13aGl0ZTogI0VGRjZGQjs7XG4kbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6ICdNdWxpJywgc2Fucy1zZXJpZjtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1pblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZS1pbiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xufVxuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmZhZGUtb3V0IHtcblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoICFpbXBvcnRhbnQ7XG59XG5cblxuOmhvc3Qge1xuICBAZXh0ZW5kIC5mYWRlLWluO1xufVxuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubW9iaWxlLXNob3cge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG4uaGlkZSB7XG4gIC8vIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1vdXQ7XG59XG4uc2hvdyB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7XG4gIEBleHRlbmQgLmZhZGUtb3V0O1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw2MDAsNzAwLDgwMHxNdWxpOjMwMCw0MDAsNjAwLDcwMCw4MDBcIik7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uZmFkZS1pbiwgOmhvc3QsIC5tb2JpbGUtc2hvdywgLnNob3csIC5uYXYtYmFyLCAubmF2LWxpbms6aG92ZXIgLm5hdi11bmRlcmxpbmUsIC5uYXYtbGluay1hY3RpdmUgLm5hdi11bmRlcmxpbmUsIC5uYXYtYmFyLW1pZGRsZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoOyB9XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbi5mYWRlLW91dCwgLmhpZGUsIC5zaG93IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aCAhaW1wb3J0YW50OyB9XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5tb2JpbGUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7IH1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4ubmF2LWJhciB7XG4gIGhlaWdodDogMy44NzVyZW07XG4gIHdpZHRoOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJyZW0sIDFyZW0pOyB9XG5cbi5uYXYtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAwIDFyZW07IH1cbiAgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAubmF2LWxpbms6aG92ZXIgLm5hdi11bmRlcmxpbmUge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cblxuLm5hdi1saW5rLWFjdGl2ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7IH1cbiAgLm5hdi1saW5rLWFjdGl2ZSAubmF2LXVuZGVybGluZSB7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLm5hdi11bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2Q0NGMjtcbiAgYm90dG9tOiAwLjI1cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgY29udGVudDogXCJcIjsgfVxuXG4ubmF2LWJhci1taWRkbGUge1xuICBoZWlnaHQ6IDMuODc1cmVtO1xuICB3aWR0aDogMjUlO1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJyZW0sIDFyZW0pOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNTBweCkge1xuICAubmF2LWJhcixcbiAgLm5hdi1iYXItbWlkZGxlIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uYXYtYmFyIC5uYXYtbG9nbyxcbiAgICAubmF2LWJhci1taWRkbGUgLm5hdi1sb2dvIHtcbiAgICAgIHdpZHRoOiAyLjVyZW07IH1cbiAgICAubmF2LWJhciAubmF2LWxpbmssXG4gICAgLm5hdi1iYXItbWlkZGxlIC5uYXYtbGluayB7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5uYXYtYmFyLFxuICAubmF2LWJhci1taWRkbGUge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5hdi1iYXIgLm5hdi1sb2dvLFxuICAgIC5uYXYtYmFyLW1pZGRsZSAubmF2LWxvZ28ge1xuICAgICAgd2lkdGg6IDIuNXJlbTsgfVxuICAgIC5uYXYtYmFyIC5uYXYtbGluayxcbiAgICAubmF2LWJhci1taWRkbGUgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43ODVyZW07XG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXYtYmFyIHtcbiAgaGVpZ2h0OiAzLjg3NXJlbTtcbiAgd2lkdGg6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnJlbSwgMXJlbSk7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG5cbi5uYXYtbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHBhZGRpbmc6IDAgMXJlbTtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAubmF2LXVuZGVybGluZSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIEBleHRlbmQgLmZhZGUtaW47XG4gICAgfVxuICB9XG59XG5cbi5uYXYtbGluay1hY3RpdmUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBcbiAgLm5hdi11bmRlcmxpbmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIEBleHRlbmQgLmZhZGUtaW47XG4gIH1cbn1cblxuLm5hdi11bmRlcmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gIGJvdHRvbTogMC4yNXJlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5uYXYtYmFyLW1pZGRsZSB7XG4gIGhlaWdodDogMy44NzVyZW07XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogYXV0bztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnJlbSwgMXJlbSk7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE1MHB4KSB7XG4gIC5uYXYtYmFyLFxuICAubmF2LWJhci1taWRkbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5uYXYtbG9nbyB7XG4gICAgICB3aWR0aDogMi41cmVtO1xuICAgIH1cbiAgICAubmF2LWxpbmsge1xuICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgfVxuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAubmF2LWJhcixcbiAgLm5hdi1iYXItbWlkZGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAubmF2LWxvZ28ge1xuICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICB9XG4gICAgLm5hdi1saW5rIHtcbiAgICAgIGZvbnQtc2l6ZTogMC43ODVyZW07XG4gICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICB9XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _route_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../route.service */ "./src/app/route.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, routeService) {
        this.router = router;
        this.routeService = routeService;
        this.currRoute = 'home';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.routeService.currRoute = this.currRoute;
    };
    NavbarComponent.prototype.getRoute = function (route) {
        this.router.navigate([route]);
        this.currRoute = route;
        this.routeService.currRoute = this.currRoute;
    };
    NavbarComponent.prototype.getResume = function () {
        var newWindow = window.open('https://drive.google.com/file/d/1CWiMDSLvwQjk4Ex0ytczjd-e9xPH6v7m/view?usp=sharing', '_blank');
        newWindow = null;
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _route_service__WEBPACK_IMPORTED_MODULE_3__["RouteService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/route.service.ts":
/*!**********************************!*\
  !*** ./src/app/route.service.ts ***!
  \**********************************/
/*! exports provided: RouteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteService", function() { return RouteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RouteService = /** @class */ (function () {
    function RouteService() {
    }
    RouteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RouteService);
    return RouteService;
}());



/***/ }),

/***/ "./src/app/snap-clinical/snap-clinical.component.html":
/*!************************************************************!*\
  !*** ./src/app/snap-clinical/snap-clinical.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-descr-container\" fxLayout=\"row nowrap\" fxLayoutAlign=\"center start\">\n    <img src=\"../../assets/images/snap-template.png\" alt=\"snapClinical-Login-Device-Template\" class=\"mobile-show\">\n\n  <div class=\"project-intro-text\" fxLayout=\"column\">\n    <div class=\"project-title\">\n      snap<span class=\"project-title-bold\">Clinical</span>\n      <div class=\"project-title-underline\"></div>\n    </div>\n    \n    <p class=\"project-descr\">\n      snapClinical™ is the only self-service mClinical platforms providing the industry \n      with the most advanced, powerful, flexible, scalable and HIPAA-compliant secure solutions \n      to support all the elements of any successful Clinical Trials.\n    </p>\n  </div>\n\n  <img src=\"../../assets/images/snap-template.png\" alt=\"snapClinical-Login-Device-Template\" class=\"mobile-hidden\">\n</div>\n\n<div class=\"project-image-slide\">\n  <ngx-carousel-3d [slides]=\"slides\" [options]=\"options\" class=\"col-12\" #carousel>\n    <ngx-carousel-3d-slide *ngFor=\"let slide of slides; let i = index\" (click)=\"slideClicked(i)\">\n        <img class=\"slide-img\" src=\"{{slide.src}}\" alt=\"\"/>\n    </ngx-carousel-3d-slide>\n  </ngx-carousel-3d>\n</div>\n\n<div class=\"project-descr-container\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n  <div class=\"project-intro-text\" fxLayout=\"column\">\n    <div class=\"project-section-title\">\n      Background\n      <div class=\"project-title-underline\"></div>\n    </div>\n    \n    <p class=\"project-section-descr\">\n      Working with clients and their requirements, wireframes were quickly produced \n      and development began shortly after client approval. An Angular 2+ skeleton \n      project was produced and development began as an in-house project before \n      snapClinical became what it is today. I joined in the front-end development of \n      the Management Dashboard shortly after. \n      <br><br>\n      I soon became the lead front-end developer of the Management Dashboard and was \n      involved in interviewing potential front-end developers. I would onboard new team \n      members to the system and its goals and requirements and would delegate tasks which \n      produced noticeable time efficiencies in project deliveries which continued to open \n      new doors for the company.\n    </p>\n  </div>\n\n  <div class=\"project-intro-text\" fxLayout=\"column\">\n    <div class=\"project-section-title\">\n      Technology\n      <div class=\"project-title-underline\"></div>\n    </div>\n    \n    <p class=\"project-section-descr\">\n      Assignments were organized and tracked through <span class=\"project-title-bold\">JIRA</span>. Coordinated with teams in Rome, \n      Italy and Bangalore, India to ensure timely and proper deliverly of required <span class=\"project-title-bold\">RESTful APIs</span>. \n      <br><br>\n      The project used the <span class=\"project-title-bold\">Angular 2+ Framework</span> with <span class=\"project-title-bold\">Typescript</span> and made use of various <span class=\"project-title-bold\">node \n          modules</span> for implementation. The UI made use of <span class=\"project-title-bold\">Material Components</span> but was heavily customized \n      using <span class=\"project-title-bold\">SCSS</span> and <span class=\"project-title-bold\">HTML 5</span> to ensure proper matching of the wireframes. \n      <br><br>\n      <span class=\"project-title-bold\">Resonsive design</span> was achieved using Flexbox and <span class=\"project-title-bold\">maintainability</span> was adhered by practice \n      of modular and reusable components and classes.\n    </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/snap-clinical/snap-clinical.component.scss":
/*!************************************************************!*\
  !*** ./src/app/snap-clinical/snap-clinical.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show, .project-descr-container {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n:host {\n  background-color: #EFEFEB;\n  height: 100%; }\n.project-descr-container {\n  width: 45vw;\n  margin: 5rem auto 3.5rem auto;\n  font-family: \"Muli\", sans-serif; }\n.project-descr-container img {\n    width: 100%;\n    max-width: 400px; }\n.project-intro-text {\n  margin: 3.15rem auto; }\n.project-title,\n.project-section-title {\n  font-weight: 400;\n  font-size: 1.75rem;\n  letter-spacing: 0.5px; }\n.project-section-title {\n  font-size: 1.5rem; }\n.project-title-bold {\n  font-weight: 800; }\n.project-title-underline {\n  width: 6.75rem;\n  height: 0.175rem;\n  background-color: #8F57EB;\n  margin-top: 0.315rem; }\n.project-descr {\n  width: 92%;\n  line-height: 128%;\n  letter-spacing: 0.05px; }\n.project-section-descr {\n  line-height: 128%;\n  width: 100%; }\n.project-image-slide {\n  width: 100vw;\n  height: auto;\n  background-color: #FFF;\n  padding: 2rem 0; }\n::ng-deep .carousel-3d-container {\n  padding: 1rem 0; }\n.slide-img {\n  width: 100%;\n  height: 100%; }\n.slide-img:hover {\n    cursor: pointer;\n    box-shadow: 1px 1px 10px #777; }\n::ng-deep .slide-3d {\n  border: none !important;\n  box-shadow: 0px 2px 8px #777; }\n.current {\n  box-shadow: 0px 2px 8px #777; }\n.current:hover {\n    cursor: pointer;\n    box-shadow: 1px 2px 10px #777; }\n@media screen and (max-width: 1065px) {\n  .mobile-show {\n    display: block !important; }\n  .mobile-hidden {\n    display: none !important; }\n  .project-descr-container {\n    flex-direction: column !important; }\n    .project-descr-container img.mobile-show {\n      display: flex !important;\n      margin-bottom: 2.75rem; }\n    .project-descr-container .project-descr {\n      width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc25hcC1jbGluaWNhbC9DOlxcVXNlcnNcXFN0ZXZlbiBEdW9uZ1xcT25lRHJpdmVcXE15UHJvamVjdHNcXFN0ZXZlbkR1b25ndjIwMTkvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvc25hcC1jbGluaWNhbC9zbmFwLWNsaW5pY2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zbmFwLWNsaW5pY2FsL0M6XFxVc2Vyc1xcU3RldmVuIER1b25nXFxPbmVEcml2ZVxcTXlQcm9qZWN0c1xcU3RldmVuRHVvbmd2MjAxOS9zcmNcXGFwcFxcc25hcC1jbGluaWNhbFxcc25hcC1jbGluaWNhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUdkO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QiwrQkZKaUMsRUFBQTtBRUNuQztJQU9JLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtBQUdwQjtFQUNFLG9CQUFvQixFQUFBO0FBRXRCOztFQUVFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxpQkFBaUIsRUFBQTtBQUVuQjtFQUNFLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsb0JBQW9CLEVBQUE7QUFFdEI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBO0FBRXhCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtBQUZkO0lBS0ksZUFBZTtJQUNmLDZCQUE2QixFQUFBO0FBR2pDO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRCQUE0QixFQUFBO0FBRTlCO0VBQ0UsNEJBQTRCLEVBQUE7QUFEOUI7SUFJSSxlQUFlO0lBQ2YsNkJBQTZCLEVBQUE7QUFLakM7RUZOQTtJRVNJLHlCQUF5QixFQUFBO0VBRTNCO0lBQ0Usd0JBQXdCLEVBQUE7RUFqRjVCO0lBcUZJLGlDQUFpQyxFQUFBO0lBRG5DO01BSUksd0JBQXdCO01BQ3hCLHNCQUFzQixFQUFBO0lBTDFCO01BU0ksV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9zbmFwLWNsaW5pY2FsL3NuYXAtY2xpbmljYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw2MDAsNzAwLDgwMHxNdWxpOjMwMCw0MDAsNjAwLDcwMCw4MDAnKTtcblxuJGxpZ2h0LWJsdWU6ICM1NkNDRjI7XG4kbWVkaXVtLWJsdWU6ICMyRDlDREI7XG4kb2ZmLXdoaXRlOiAjRUZGNkZCOztcbiRtYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogJ011bGknLCBzYW5zLXNlcmlmO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlLWluIHtcblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGg7XG59XG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1vdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uZmFkZS1vdXQge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGggIWltcG9ydGFudDtcbn1cblxuXG46aG9zdCB7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2JpbGUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbn1cbi5oaWRlIHtcbiAgLy8gZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLW91dDtcbn1cbi5zaG93IHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLWluO1xuICBhbmltYXRpb24tZGVsYXk6IDIwcztcbiAgQGV4dGVuZCAuZmFkZS1vdXQ7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDYwMCw3MDAsODAwfE11bGk6MzAwLDQwMCw2MDAsNzAwLDgwMFwiKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi5mYWRlLWluLCA6aG9zdCwgLm1vYmlsZS1zaG93LCAuc2hvdywgLnByb2plY3QtZGVzY3ItY29udGFpbmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7IH1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1vdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLmZhZGUtb3V0LCAuaGlkZSwgLnNob3cge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoICFpbXBvcnRhbnQ7IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm1vYmlsZS1zaG93IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5zaG93IHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IDIwczsgfVxuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUI7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4ucHJvamVjdC1kZXNjci1jb250YWluZXIge1xuICB3aWR0aDogNDV2dztcbiAgbWFyZ2luOiA1cmVtIGF1dG8gMy41cmVtIGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIiwgc2Fucy1zZXJpZjsgfVxuICAucHJvamVjdC1kZXNjci1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4OyB9XG5cbi5wcm9qZWN0LWludHJvLXRleHQge1xuICBtYXJnaW46IDMuMTVyZW0gYXV0bzsgfVxuXG4ucHJvamVjdC10aXRsZSxcbi5wcm9qZWN0LXNlY3Rpb24tdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxuXG4ucHJvamVjdC1zZWN0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07IH1cblxuLnByb2plY3QtdGl0bGUtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7IH1cblxuLnByb2plY3QtdGl0bGUtdW5kZXJsaW5lIHtcbiAgd2lkdGg6IDYuNzVyZW07XG4gIGhlaWdodDogMC4xNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM4RjU3RUI7XG4gIG1hcmdpbi10b3A6IDAuMzE1cmVtOyB9XG5cbi5wcm9qZWN0LWRlc2NyIHtcbiAgd2lkdGg6IDkyJTtcbiAgbGluZS1oZWlnaHQ6IDEyOCU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1cHg7IH1cblxuLnByb2plY3Qtc2VjdGlvbi1kZXNjciB7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICB3aWR0aDogMTAwJTsgfVxuXG4ucHJvamVjdC1pbWFnZS1zbGlkZSB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBwYWRkaW5nOiAycmVtIDA7IH1cblxuOjpuZy1kZWVwIC5jYXJvdXNlbC0zZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtIDA7IH1cblxuLnNsaWRlLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cbiAgLnNsaWRlLWltZzpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjNzc3OyB9XG5cbjo6bmctZGVlcCAuc2xpZGUtM2Qge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggIzc3NzsgfVxuXG4uY3VycmVudCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4ICM3Nzc7IH1cbiAgLmN1cnJlbnQ6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDEwcHggIzc3NzsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDY1cHgpIHtcbiAgLm1vYmlsZS1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9XG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLnByb2plY3QtZGVzY3ItY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7IH1cbiAgICAucHJvamVjdC1kZXNjci1jb250YWluZXIgaW1nLm1vYmlsZS1zaG93IHtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNzVyZW07IH1cbiAgICAucHJvamVjdC1kZXNjci1jb250YWluZXIgLnByb2plY3QtZGVzY3Ige1xuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2plY3QtZGVzY3ItY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1dnc7XG4gIG1hcmdpbjogNXJlbSBhdXRvIDMuNXJlbSBhdXRvO1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICBAZXh0ZW5kIC5mYWRlLWluO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfTtcbn1cbi5wcm9qZWN0LWludHJvLXRleHQge1xuICBtYXJnaW46IDMuMTVyZW0gYXV0bztcbn1cbi5wcm9qZWN0LXRpdGxlLFxuLnByb2plY3Qtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnByb2plY3Qtc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLnByb2plY3QtdGl0bGUtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ucHJvamVjdC10aXRsZS11bmRlcmxpbmUge1xuICB3aWR0aDogNi43NXJlbTtcbiAgaGVpZ2h0OiAwLjE3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhGNTdFQjtcbiAgbWFyZ2luLXRvcDogMC4zMTVyZW07XG59XG4ucHJvamVjdC1kZXNjciB7XG4gIHdpZHRoOiA5MiU7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXB4O1xufVxuLnByb2plY3Qtc2VjdGlvbi1kZXNjciB7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2plY3QtaW1hZ2Utc2xpZGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgcGFkZGluZzogMnJlbSAwO1xufVxuXG46Om5nLWRlZXAgLmNhcm91c2VsLTNkLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbn1cbi5zbGlkZS1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAjNzc3O1xuICB9XG59XG46Om5nLWRlZXAgLnNsaWRlLTNkIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4ICM3Nzc7XG59XG4uY3VycmVudCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4ICM3Nzc7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMTBweCAjNzc3O1xuICB9XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA2NXB4KSB7XG5cbiAgLm1vYmlsZS1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG4gIC5tb2JpbGUtaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucHJvamVjdC1kZXNjci1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcblxuICAgIGltZy5tb2JpbGUtc2hvdyB7XG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyLjc1cmVtO1xuICAgIH1cblxuICAgIC5wcm9qZWN0LWRlc2NyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/snap-clinical/snap-clinical.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/snap-clinical/snap-clinical.component.ts ***!
  \**********************************************************/
/*! exports provided: IMAGESET, SnapClinicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGESET", function() { return IMAGESET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapClinicalComponent", function() { return SnapClinicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IMAGESET = [];
var SnapClinicalComponent = /** @class */ (function () {
    function SnapClinicalComponent(elementRef) {
        this.elementRef = elementRef;
        this.movies = [];
        this.slides = [
            { 'src': '../../assets/images/snapClinicalHomePage.png' },
            { 'src': '../../assets/images/snapClinicalPatientPage.png' },
            { 'src': '../../assets/images/snapClinicalPatientDetailPage.png' }
        ];
        this.options = {
            clicking: true,
            sourceProp: 'src',
            visible: 100,
            perspective: 1,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 580,
            height: 350,
            space: 380,
            autoRotationSpeed: 5000,
            loop: true
        };
    }
    SnapClinicalComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EFEFEB';
    };
    SnapClinicalComponent.prototype.slideClicked = function (index) {
        this.carousel.slideClicked(index);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carousel'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SnapClinicalComponent.prototype, "carousel", void 0);
    SnapClinicalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snap-clinical',
            template: __webpack_require__(/*! ./snap-clinical.component.html */ "./src/app/snap-clinical/snap-clinical.component.html"),
            styles: [__webpack_require__(/*! ./snap-clinical.component.scss */ "./src/app/snap-clinical/snap-clinical.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SnapClinicalComponent);
    return SnapClinicalComponent;
}());



/***/ }),

/***/ "./src/app/stem-immune/stem-immune.component.html":
/*!********************************************************!*\
  !*** ./src/app/stem-immune/stem-immune.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-descr-container\" fxLayout=\"row nowrap\" fxLayoutAlign=\"center start\">\n  <img src=\"../../assets/images/snap-template.png\" alt=\"snapClinical-Login-Device-Template\" class=\"mobile-show\">\n\n  <div class=\"project-intro-text\" fxLayout=\"column\">\n    <div class=\"project-title\">\n      Stem<span class=\"project-title-bold\">Immune</span>\n      <div class=\"project-title-underline\"></div>\n    </div>\n    \n    <p class=\"project-descr\">\n      A desktop website in a form of a lab notebook. It provides the ability to track many projects and view \n      experiment steps and much more. \n      <br><br>\n      Initial designs were created based on initial documentation provided by StemImmune Inc. A demo was \n      given through Figma and live chat with screen broadcast. Feedback was taken, reviewed, and improvements \n      were made.\n      <br><br>\n      Design handoff given to developer.\n    </p>\n  </div>\n\n  <img src=\"../../assets/images/ELN/ELN-template.png\" alt=\"StemImmune-Login-Device-Template\" class=\"mobile-hidden\">\n</div>\n\n<div class=\"project-descr-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <img src=\"../../assets/images/ELN/project_main.png\" alt=\"StemImmune-Main\" class=\"project-section-img\">\n  <img src=\"../../assets/images/ELN/menu.png\" alt=\"StemImmune-Menu\" class=\"project-section-img\">\n  <img src=\"../../assets/images/ELN/edit_equipment.png\" alt=\"StemImmune-Edit-Equipment\" class=\"project-section-img\">\n</div>"

/***/ }),

/***/ "./src/app/stem-immune/stem-immune.component.scss":
/*!********************************************************!*\
  !*** ./src/app/stem-immune/stem-immune.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show, .project-descr-container {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n:host {\n  background-color: #EFEFEB;\n  height: 100%; }\n.project-descr-container {\n  width: 45vw;\n  margin: 5rem auto 3.5rem auto;\n  font-family: \"Muli\", sans-serif; }\n.project-descr-container img {\n    width: 100%;\n    max-width: 400px; }\n.project-descr-container .project-section-img {\n    margin: 5rem auto;\n    max-width: 100%; }\n.project-intro-text {\n  margin: 3.15rem auto; }\n.project-title {\n  font-weight: 400;\n  font-size: 1.75rem;\n  letter-spacing: 0.5px; }\n.project-title-bold {\n  font-weight: 800; }\n.project-title-underline {\n  width: 6.75rem;\n  height: 0.175rem;\n  background-color: #8F57EB;\n  margin-top: 0.315rem; }\n.project-descr {\n  width: 92%;\n  line-height: 128%;\n  letter-spacing: 0.05px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RlbS1pbW11bmUvQzpcXFVzZXJzXFxTdGV2ZW4gRHVvbmdcXE9uZURyaXZlXFxNeVByb2plY3RzXFxTdGV2ZW5EdW9uZ3YyMDE5L3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3N0ZW0taW1tdW5lL3N0ZW0taW1tdW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGVtLWltbXVuZS9DOlxcVXNlcnNcXFN0ZXZlbiBEdW9uZ1xcT25lRHJpdmVcXE15UHJvamVjdHNcXFN0ZXZlbkR1b25ndjIwMTkvc3JjXFxhcHBcXHN0ZW0taW1tdW5lXFxzdGVtLWltbXVuZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTtBQUdkO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QiwrQkZKaUMsRUFBQTtBRUNuQztJQU9JLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtBQVJwQjtJQVlJLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7QUFHbkI7RUFDRSxvQkFBb0IsRUFBQTtBQUV0QjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7QUFFdkI7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBO0FBRXRCO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0ZW0taW1tdW5lL3N0ZW0taW1tdW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNjAwLDcwMCw4MDB8TXVsaTozMDAsNDAwLDYwMCw3MDAsODAwJyk7XG5cbiRsaWdodC1ibHVlOiAjNTZDQ0YyO1xuJG1lZGl1bS1ibHVlOiAjMkQ5Q0RCO1xuJG9mZi13aGl0ZTogI0VGRjZGQjs7XG4kbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6ICdNdWxpJywgc2Fucy1zZXJpZjtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1pblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZS1pbiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xufVxuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmZhZGUtb3V0IHtcblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoICFpbXBvcnRhbnQ7XG59XG5cblxuOmhvc3Qge1xuICBAZXh0ZW5kIC5mYWRlLWluO1xufVxuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubW9iaWxlLXNob3cge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG4uaGlkZSB7XG4gIC8vIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1vdXQ7XG59XG4uc2hvdyB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7XG4gIEBleHRlbmQgLmZhZGUtb3V0O1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw2MDAsNzAwLDgwMHxNdWxpOjMwMCw0MDAsNjAwLDcwMCw4MDBcIik7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uZmFkZS1pbiwgOmhvc3QsIC5tb2JpbGUtc2hvdywgLnNob3csIC5wcm9qZWN0LWRlc2NyLWNvbnRhaW5lciB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoOyB9XG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbi5mYWRlLW91dCwgLmhpZGUsIC5zaG93IHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGg7XG4gIGFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aCAhaW1wb3J0YW50OyB9XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50OyB9XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5tb2JpbGUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7IH1cblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVCO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLnByb2plY3QtZGVzY3ItY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1dnc7XG4gIG1hcmdpbjogNXJlbSBhdXRvIDMuNXJlbSBhdXRvO1xuICBmb250LWZhbWlseTogXCJNdWxpXCIsIHNhbnMtc2VyaWY7IH1cbiAgLnByb2plY3QtZGVzY3ItY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDsgfVxuICAucHJvamVjdC1kZXNjci1jb250YWluZXIgLnByb2plY3Qtc2VjdGlvbi1pbWcge1xuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTsgfVxuXG4ucHJvamVjdC1pbnRyby10ZXh0IHtcbiAgbWFyZ2luOiAzLjE1cmVtIGF1dG87IH1cblxuLnByb2plY3QtdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDsgfVxuXG4ucHJvamVjdC10aXRsZS1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDsgfVxuXG4ucHJvamVjdC10aXRsZS11bmRlcmxpbmUge1xuICB3aWR0aDogNi43NXJlbTtcbiAgaGVpZ2h0OiAwLjE3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhGNTdFQjtcbiAgbWFyZ2luLXRvcDogMC4zMTVyZW07IH1cblxuLnByb2plY3QtZGVzY3Ige1xuICB3aWR0aDogOTIlO1xuICBsaW5lLWhlaWdodDogMTI4JTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVweDsgfVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRkVGRUI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByb2plY3QtZGVzY3ItY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1dnc7XG4gIG1hcmdpbjogNXJlbSBhdXRvIDMuNXJlbSBhdXRvO1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICBAZXh0ZW5kIC5mYWRlLWluO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfTtcblxuICAucHJvamVjdC1zZWN0aW9uLWltZyB7XG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4ucHJvamVjdC1pbnRyby10ZXh0IHtcbiAgbWFyZ2luOiAzLjE1cmVtIGF1dG87XG59XG4ucHJvamVjdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnByb2plY3QtdGl0bGUtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4ucHJvamVjdC10aXRsZS11bmRlcmxpbmUge1xuICB3aWR0aDogNi43NXJlbTtcbiAgaGVpZ2h0OiAwLjE3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhGNTdFQjtcbiAgbWFyZ2luLXRvcDogMC4zMTVyZW07XG59XG4ucHJvamVjdC1kZXNjciB7XG4gIHdpZHRoOiA5MiU7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNXB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/stem-immune/stem-immune.component.ts":
/*!******************************************************!*\
  !*** ./src/app/stem-immune/stem-immune.component.ts ***!
  \******************************************************/
/*! exports provided: StemImmuneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StemImmuneComponent", function() { return StemImmuneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StemImmuneComponent = /** @class */ (function () {
    function StemImmuneComponent() {
    }
    StemImmuneComponent.prototype.ngOnInit = function () {
    };
    StemImmuneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stem-immune',
            template: __webpack_require__(/*! ./stem-immune.component.html */ "./src/app/stem-immune/stem-immune.component.html"),
            styles: [__webpack_require__(/*! ./stem-immune.component.scss */ "./src/app/stem-immune/stem-immune.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StemImmuneComponent);
    return StemImmuneComponent;
}());



/***/ }),

/***/ "./src/app/work-card/work-card.component.html":
/*!****************************************************!*\
  !*** ./src/app/work-card/work-card.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-container\">\n  <div class=\"project-preview\">\n    <img src=\"{{projectPreview}}\" alt=\"project-preview\">\n  </div>\n\n  <div class=\"project-title-container\">\n    <div class=\"project-title\">\n      {{projectTitle1}}<span class=\"project-title-bold\">{{projectTitle2}}</span>\n      <div class=\"project-title-underline\" [style.background-color]=\"projectColor\"></div>\n    </div>\n\n    <div class=\"project-role\">{{projectRole}}</div>\n\n    <button mat-raised-button class=\"work-view-btn\" (click)=\"viewProject()\">\n      <span class=\"btn-text\">View</span>\n      <img class=\"btn-icon\" src=\"assets/images/left-arrow.png\" alt=\"arrow-icon\">\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/work-card/work-card.component.scss":
/*!****************************************************!*\
  !*** ./src/app/work-card/work-card.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show, .card-container {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n.card-container {\n  border-radius: 5px;\n  border: none;\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n  width: 420px;\n  height: auto;\n  font-family: \"Muli\", sans-serif;\n  padding-bottom: 1rem;\n  background-color: #FFF; }\n.project-preview img {\n  width: 420px;\n  height: 250px;\n  border-radius: 5px 5px 0 0; }\n.project-title-container {\n  padding: 0.5rem 1rem; }\n.project-title {\n  font-weight: 400;\n  font-size: 1.415rem;\n  letter-spacing: 0.25px; }\n.project-title-bold {\n  font-weight: 800; }\n.project-title-underline {\n  width: 20%;\n  height: 0.175rem; }\n.project-role {\n  margin-top: 0.75rem; }\n.work-view-btn {\n  margin-top: 2rem;\n  background-color: transparent;\n  border-radius: 0;\n  border: 1px solid #000;\n  padding: 0 1rem;\n  line-height: 200%; }\n.work-view-btn .btn-text {\n    padding-right: 0.5rem;\n    font-size: 0.925rem; }\n.work-view-btn:hover {\n    cursor: pointer; }\n@media screen and (max-width: 1115px) {\n  .card-container {\n    width: 350px; }\n  .project-preview img {\n    width: 350px;\n    height: 200px;\n    border-radius: 8px 8px 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay1jYXJkL0M6XFxVc2Vyc1xcU3RldmVuIER1b25nXFxPbmVEcml2ZVxcTXlQcm9qZWN0c1xcU3RldmVuRHVvbmd2MjAxOS9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL2FwcC93b3JrLWNhcmQvd29yay1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93b3JrLWNhcmQvQzpcXFVzZXJzXFxTdGV2ZW4gRHVvbmdcXE9uZURyaXZlXFxNeVByb2plY3RzXFxTdGV2ZW5EdW9uZ3YyMDE5L3NyY1xcYXBwXFx3b3JrLWNhcmRcXHdvcmstY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3RUFBa0U7RUFDbEUsWUFBWTtFQUNaLFlBQVk7RUFDWiwrQkZGaUM7RUVHakMsb0JBQW9CO0VBQ3BCLHNCQUFzQixFQUFBO0FBSXhCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEIsRUFBQTtBQUc1QjtFQUNFLG9CQUFvQixFQUFBO0FBRXRCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0IsRUFBQTtBQUV4QjtFQUNFLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxnQkFBZ0I7RUFDaEIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0FBTm5CO0lBU0kscUJBQXFCO0lBQ3JCLG1CQUFtQixFQUFBO0FBVnZCO0lBY0ksZUFBZSxFQUFBO0FBSW5CO0VBdkRBO0lBeURJLFlBQVksRUFBQTtFQTdDaEI7SUFnREksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQkFBMEIsRUFBQSxFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3dvcmstY2FyZC93b3JrLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw2MDAsNzAwLDgwMHxNdWxpOjMwMCw0MDAsNjAwLDcwMCw4MDAnKTtcblxuJGxpZ2h0LWJsdWU6ICM1NkNDRjI7XG4kbWVkaXVtLWJsdWU6ICMyRDlDREI7XG4kb2ZmLXdoaXRlOiAjRUZGNkZCOztcbiRtYWluLWZvbnQ6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiRzZWNvbmRhcnktZm9udDogJ011bGknLCBzYW5zLXNlcmlmO1xuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5mYWRlLWluIHtcblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xuXHQgICAgICAgIGFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOTAsIDAuNTc1LCAwLjU2NSwgMS4wMDApIGJvdGg7XG59XG5cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1vdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4uZmFkZS1vdXQge1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGggIWltcG9ydGFudDtcbn1cblxuXG46aG9zdCB7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG5cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2JpbGUtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbn1cbi5oaWRlIHtcbiAgLy8gZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLW91dDtcbn1cbi5zaG93IHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBAZXh0ZW5kIC5mYWRlLWluO1xuICBhbmltYXRpb24tZGVsYXk6IDIwcztcbiAgQGV4dGVuZCAuZmFkZS1vdXQ7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDozMDAsNDAwLDYwMCw3MDAsODAwfE11bGk6MzAwLDQwMCw2MDAsNzAwLDgwMFwiKTtcbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtaW5cbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbi5mYWRlLWluLCA6aG9zdCwgLm1vYmlsZS1zaG93LCAuc2hvdywgLmNhcmQtY29udGFpbmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpIGJvdGg7IH1cblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1vdXRcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLmZhZGUtb3V0LCAuaGlkZSwgLnNob3cge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1vdXQgNXMgZWFzZS1vdXQgYm90aDtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoICFpbXBvcnRhbnQ7IH1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7IH1cblxuLnVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm1vYmlsZS1zaG93IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi5zaG93IHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBhbmltYXRpb24tZGVsYXk6IDIwczsgfVxuXG4uY2FyZC1jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjsgfVxuXG4ucHJvamVjdC1wcmV2aWV3IGltZyB7XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7IH1cblxuLnByb2plY3QtdGl0bGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07IH1cblxuLnByb2plY3QtdGl0bGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEuNDE1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4yNXB4OyB9XG5cbi5wcm9qZWN0LXRpdGxlLWJvbGQge1xuICBmb250LXdlaWdodDogODAwOyB9XG5cbi5wcm9qZWN0LXRpdGxlLXVuZGVybGluZSB7XG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogMC4xNzVyZW07IH1cblxuLnByb2plY3Qtcm9sZSB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07IH1cblxuLndvcmstdmlldy1idG4ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgcGFkZGluZzogMCAxcmVtO1xuICBsaW5lLWhlaWdodDogMjAwJTsgfVxuICAud29yay12aWV3LWJ0biAuYnRuLXRleHQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDAuOTI1cmVtOyB9XG4gIC53b3JrLXZpZXctYnRuOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExNXB4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1MHB4OyB9XG4gIC5wcm9qZWN0LXByZXZpZXcgaW1nIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDsgfSB9XG4iLCJAaW1wb3J0ICcuLi8uLi9zdHlsZXMuc2Nzcyc7XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7IC8vIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICM3Nzc7XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbn1cblxuLnByb2plY3QtcHJldmlldyBpbWcge1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ucHJvamVjdC10aXRsZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbn1cbi5wcm9qZWN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjQxNXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbn1cbi5wcm9qZWN0LXRpdGxlLWJvbGQge1xuICBmb250LXdlaWdodDogODAwO1xufVxuLnByb2plY3QtdGl0bGUtdW5kZXJsaW5lIHtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAwLjE3NXJlbTtcbn1cbi5wcm9qZWN0LXJvbGUge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xufVxuXG4ud29yay12aWV3LWJ0biB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG4gIGxpbmUtaGVpZ2h0OiAyMDAlO1xuXG4gIC5idG4tdGV4dCB7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45MjVyZW07XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTExNXB4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIC5wcm9qZWN0LXByZXZpZXcgaW1nIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/work-card/work-card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/work-card/work-card.component.ts ***!
  \**************************************************/
/*! exports provided: WorkCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkCardComponent", function() { return WorkCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkCardComponent = /** @class */ (function () {
    function WorkCardComponent() {
        this.onView = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    WorkCardComponent.prototype.ngOnInit = function () {
    };
    WorkCardComponent.prototype.viewProject = function () {
        this.onView.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkCardComponent.prototype, "projectPreview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkCardComponent.prototype, "projectTitle1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkCardComponent.prototype, "projectTitle2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkCardComponent.prototype, "projectColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WorkCardComponent.prototype, "projectRole", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], WorkCardComponent.prototype, "onView", void 0);
    WorkCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work-card',
            template: __webpack_require__(/*! ./work-card.component.html */ "./src/app/work-card/work-card.component.html"),
            styles: [__webpack_require__(/*! ./work-card.component.scss */ "./src/app/work-card/work-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkCardComponent);
    return WorkCardComponent;
}());



/***/ }),

/***/ "./src/app/works/works.component.html":
/*!********************************************!*\
  !*** ./src/app/works/works.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"works-component\">\n  <div class=\"works-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"works-title\" fxLayout=\"row nowrap\">\n      Projects at<span class=\"work-title-highlight\">&nbsp;SnapIoT</span>\n      <div class=\"works-title-dash\"></div>\n    </div>\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n      <div *ngFor=\"let work of works.snapIoT\" class=\"work-card\">\n        <app-work-card \n          [projectPreview]=\"work.preview\"\n          [projectTitle1]=\"work.title1\"\n          [projectTitle2]=\"work.title2\"\n          [projectRole]=\"work.role\"\n          [projectColor]=\"work.color\"\n          (onView)=\"getRoute(work.title1 + work.title2)\"></app-work-card>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"works-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <div class=\"works-title\" fxLayout=\"row nowrap\">\n      <span class=\"work-title-highlight\">Self</span>&nbsp;Projects\n      <div class=\"works-title-dash\"></div>\n    </div>\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\n      <div *ngFor=\"let work of works.self\" class=\"work-card\">\n        <app-work-card \n        [projectPreview]=\"work.preview\"\n          [projectTitle1]=\"work.title1\"\n          [projectTitle2]=\"work.title2\"\n          [projectRole]=\"work.description\"\n          [projectColor]=\"work.color\"\n          (onView)=\"getRoute(work.route)\"></app-work-card>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/works/works.component.scss":
/*!********************************************!*\
  !*** ./src/app/works/works.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700,800|Muli:300,400,600,700,800\");\n/**\n * ----------------------------------------\n * animation fade-in\n * ----------------------------------------\n */\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n@keyframes fade-in {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n.fade-in, :host, .mobile-show, .show {\n  -webkit-animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both;\n  animation: fade-in 0.95s cubic-bezier(0.39, 0.575, 0.565, 1) both; }\n/**\n * ----------------------------------------\n * animation fade-out\n * ----------------------------------------\n */\n@-webkit-keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n@keyframes fade-out {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n.fade-out, .hide, .show {\n  -webkit-animation: fade-out 5s ease-out both;\n  animation: fade-out 5s ease-out both !important; }\nbody {\n  font-family: \"Montserrat\", sans-serif;\n  margin: 0 !important; }\n.uppercase {\n  text-transform: uppercase; }\n.mobile-show {\n  display: none !important; }\n.show {\n  display: initial !important;\n  -webkit-animation-delay: 20s;\n          animation-delay: 20s; }\n.works-component {\n  margin: 2rem auto;\n  width: 80vw; }\n.work-card {\n  margin: 1rem 3rem; }\n.works-title {\n  font-family: \"Muli\", sans-serif;\n  font-weight: 400;\n  font-size: 1.25rem;\n  margin-left: -42rem;\n  margin-top: 5rem;\n  margin-bottom: 0.5rem;\n  width: 20rem;\n  letter-spacing: 0.25px; }\n.works-title .work-title-highlight {\n    font-weight: 800; }\n.works-title .works-title-dash {\n    width: 2rem;\n    height: 0.15rem;\n    margin: auto 0.5rem;\n    background-color: #56CCF2;\n    -webkit-transform: translateY(0.085rem);\n            transform: translateY(0.085rem); }\n.works-container {\n  margin: 2rem auto; }\n@media screen and (max-width: 1364px) {\n  .works-title {\n    margin-left: -2rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3MvQzpcXFVzZXJzXFxTdGV2ZW4gRHVvbmdcXE9uZURyaXZlXFxNeVByb2plY3RzXFxTdGV2ZW5EdW9uZ3YyMDE5L3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvYXBwL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC93b3Jrcy9DOlxcVXNlcnNcXFN0ZXZlbiBEdW9uZ1xcT25lRHJpdmVcXE15UHJvamVjdHNcXFN0ZXZlbkR1b25ndjIwMTkvc3JjXFxhcHBcXHdvcmtzXFx3b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4R0FBWTtBQVFaOzs7O0VDSEU7QURRRDtFQUNDO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQUdkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDQyx5RUFBOEU7RUFDdEUsaUVBQXNFLEVBQUE7QUFJL0U7Ozs7RUNURTtBRGNEO0VBQ0M7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBO0FBR2Q7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFHZDtFQUNDLDRDQUE0QztFQUNwQywrQ0FBK0MsRUFBQTtBQVN4RDtFQUNFLHFDQS9Ea0M7RUFnRWxDLG9CQUFvQixFQUFBO0FBR3RCO0VBQ0UseUJBQXlCLEVBQUE7QUFHM0I7RUFDRSx3QkFBd0IsRUFBQTtBQU8xQjtFQUNFLDJCQUEyQjtFQUUzQiw0QkFBb0I7VUFBcEIsb0JBQW9CLEVBQUE7QUVyRnRCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTtBQUdiO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSwrQkZOaUM7RUVPakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osc0JBQXNCLEVBQUE7QUFSeEI7SUFZSSxnQkFBZ0IsRUFBQTtBQVpwQjtJQWdCSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix5QkY1QmdCO0lFNkJoQix1Q0FBK0I7WUFBL0IsK0JBQStCLEVBQUE7QUFJbkM7RUFDRSxpQkFBaUIsRUFBQTtBQUluQjtFQTdCQTtJQStCSSxrQkFBa0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzL3dvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjMwMCw0MDAsNjAwLDcwMCw4MDB8TXVsaTozMDAsNDAwLDYwMCw3MDAsODAwJyk7XG5cbiRsaWdodC1ibHVlOiAjNTZDQ0YyO1xuJG1lZGl1bS1ibHVlOiAjMkQ5Q0RCO1xuJG9mZi13aGl0ZTogI0VGRjZGQjs7XG4kbWFpbi1mb250OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4kc2Vjb25kYXJ5LWZvbnQ6ICdNdWxpJywgc2Fucy1zZXJpZjtcblxuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gZmFkZS1pblxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG4gQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4uZmFkZS1pbiB7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLWluIDAuOTVzIGN1YmljLWJlemllcigwLjM5MCwgMC41NzUsIDAuNTY1LCAxLjAwMCkgYm90aDtcblx0ICAgICAgICBhbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzkwLCAwLjU3NSwgMC41NjUsIDEuMDAwKSBib3RoO1xufVxuXG5cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIGZhZGUtb3V0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbiBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLmZhZGUtb3V0IHtcblx0LXdlYmtpdC1hbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGg7XG5cdCAgICAgICAgYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoICFpbXBvcnRhbnQ7XG59XG5cblxuOmhvc3Qge1xuICBAZXh0ZW5kIC5mYWRlLWluO1xufVxuXG5cbmJvZHkge1xuICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi51cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubW9iaWxlLXNob3cge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIEBleHRlbmQgLmZhZGUtaW47XG59XG4uaGlkZSB7XG4gIC8vIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1vdXQ7XG59XG4uc2hvdyB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgQGV4dGVuZCAuZmFkZS1pbjtcbiAgYW5pbWF0aW9uLWRlbGF5OiAyMHM7XG4gIEBleHRlbmQgLmZhZGUtb3V0O1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6MzAwLDQwMCw2MDAsNzAwLDgwMHxNdWxpOjMwMCw0MDAsNjAwLDcwMCw4MDBcIik7XG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLWluXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5cbkBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuXG4uZmFkZS1pbiwgOmhvc3QsIC5tb2JpbGUtc2hvdywgLnNob3cge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAwLjk1cyBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKSBib3RoO1xuICBhbmltYXRpb246IGZhZGUtaW4gMC45NXMgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSkgYm90aDsgfVxuXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBmYWRlLW91dFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZS1vdXQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG4uZmFkZS1vdXQsIC5oaWRlLCAuc2hvdyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlLW91dCA1cyBlYXNlLW91dCBib3RoO1xuICBhbmltYXRpb246IGZhZGUtb3V0IDVzIGVhc2Utb3V0IGJvdGggIWltcG9ydGFudDsgfVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDsgfVxuXG4udXBwZXJjYXNlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4ubW9iaWxlLXNob3cge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cblxuLnNob3cge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIGFuaW1hdGlvbi1kZWxheTogMjBzOyB9XG5cbi53b3Jrcy1jb21wb25lbnQge1xuICBtYXJnaW46IDJyZW0gYXV0bztcbiAgd2lkdGg6IDgwdnc7IH1cblxuLndvcmstY2FyZCB7XG4gIG1hcmdpbjogMXJlbSAzcmVtOyB9XG5cbi53b3Jrcy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBtYXJnaW4tbGVmdDogLTQycmVtO1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDsgfVxuICAud29ya3MtdGl0bGUgLndvcmstdGl0bGUtaGlnaGxpZ2h0IHtcbiAgICBmb250LXdlaWdodDogODAwOyB9XG4gIC53b3Jrcy10aXRsZSAud29ya3MtdGl0bGUtZGFzaCB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAwLjE1cmVtO1xuICAgIG1hcmdpbjogYXV0byAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2Q0NGMjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4wODVyZW0pOyB9XG5cbi53b3Jrcy1jb250YWluZXIge1xuICBtYXJnaW46IDJyZW0gYXV0bzsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY0cHgpIHtcbiAgLndvcmtzLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07IH0gfVxuIiwiQGltcG9ydCAnLi4vLi4vc3R5bGVzLnNjc3MnO1xuXG4ud29ya3MtY29tcG9uZW50IHtcbiAgbWFyZ2luOiAycmVtIGF1dG87XG4gIHdpZHRoOiA4MHZ3O1xufVxuXG4ud29yay1jYXJkIHtcbiAgbWFyZ2luOiAxcmVtIDNyZW07XG59XG5cbi53b3Jrcy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC00MnJlbTtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG5cblxuICAud29yay10aXRsZS1oaWdobGlnaHQge1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cblxuICAud29ya3MtdGl0bGUtZGFzaCB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiAwLjE1cmVtO1xuICAgIG1hcmdpbjogYXV0byAwLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuMDg1cmVtKVxuICB9XG59XG5cbi53b3Jrcy1jb250YWluZXIge1xuICBtYXJnaW46IDJyZW0gYXV0bztcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY0cHgpIHtcbiAgLndvcmtzLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WorksComponent = /** @class */ (function () {
    function WorksComponent(router, elementRef) {
        var _this = this;
        this.router = router;
        this.elementRef = elementRef;
        this.works = {
            'snapIoT': [
                {
                    'title1': 'snap',
                    'title2': 'Clinical',
                    'role': 'Lead Front-End Software Engineer',
                    'preview': 'assets/images/snapClinicalPatientPage.png',
                    'color': '#8F57EB',
                    'route': function () { return _this.works.snapIoT[0].title1 + _this.works.snapIoT[0].title2; }
                },
                {
                    'title1': 'Stem',
                    'title2': 'Immune',
                    'role': 'UX Designer',
                    'preview': 'assets/images/ELN/project_main.png',
                    'color': '#2D9CDB',
                    'route': function () { return _this.works.snapIoT[1].title1 + _this.works.snapIoT[1].title2; }
                }
            ],
            'self': [
                {
                    'title1': 'COR',
                    'title2': 'AL',
                    'description': 'WORK IN-PROGRESS: A dashboard to log correlations. Flexible data entries.',
                    'preview': 'assets/images/coral_signup_page.png',
                    'color': '#F1C7C7',
                    'route': 'https://abcduong.github.io/CORAL/'
                },
                {
                    'title1': 'Cafe ',
                    'title2': 'Bassam',
                    'description': 'Local San Diego Coffee House',
                    'preview': 'assets/images/bassam.jpg',
                    'color': '#F29856',
                    'route': 'https://abcduong.github.io/CafeBassam/'
                }
            ]
        };
    }
    WorksComponent.prototype.ngOnInit = function () {
    };
    WorksComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#EFEFEB';
    };
    WorksComponent.prototype.getRoute = function (route) {
        if (!route) {
            console.log('route does not exist');
            return;
        }
        if (route.startsWith('http')) {
            var newWindow = window.open(route);
            newWindow = null;
        }
        else {
            this.router.navigate([route]);
        }
    };
    WorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! ./works.component.html */ "./src/app/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.scss */ "./src/app/works/works.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], WorksComponent);
    return WorksComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseApiUrl: 'https://stvnduong.com'
};


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

module.exports = __webpack_require__(/*! C:\Users\Steven Duong\OneDrive\MyProjects\StevenDuongv2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map