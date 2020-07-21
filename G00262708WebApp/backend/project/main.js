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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 11 auto;\r\n}\r\n.mat-toolbar\r\n{\r\n  background-image: url('back.jpg');\r\n   \r\n}\r\n.container\r\n{\r\n  background-image: url('back.jpg');\r\n}\r\n.one{\r\nbackground-image: url('RecipeButton.jpg');\r\nbackground-size: cover;\r\nheight: 60%;\r\nwidth:15%;\r\nborder-radius: 25px;\r\nmargin-right:8.5%;\r\nmargin-left: 11%;\r\n}\r\n.two\r\n{\r\nbackground-image: url('AddRecipeButtonNew.jpg');\r\nbackground-size: cover;\r\nheight: 60%;\r\nwidth:15%;\r\nborder-radius: 25px;\r\nmargin-right:8%;\r\nmargin-left:8.5%;\r\n}\r\n.three\r\n{\r\nbackground-image: url('searchButtonNew.jpg');\r\nbackground-size: cover;\r\nheight: 60%;\r\nwidth:15%;\r\nborder-radius: 25px;\r\nmargin-right:8.5%;\r\nmargin-left:8.5%;\r\n}\r\n.toolbar\r\n{\r\n  height: 200px;\r\n}\r\n.h1\r\n{\r\n  color:wheat;\r\n  text-align: center;\r\n  font-family: Georgia, Helvetica, sans-serif;\r\n  font-weight: 900;\r\n  font-style: oblique;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar class=\"toolbar\" color=\"primary\">\r\n        <!-- <span>Home Page</span> -->\r\n        <!-- This fills the remaining space of the current row -->\r\n        <button class=\"one\" mat-button [routerLink]=\"['/index']\" color=\"Warn\"></button>\r\n        <button class=\"two\" mat-button [routerLink]=\"['/pageTwo']\" color=\"Warn\"></button>\r\n        <button class=\"three\" mat-button [routerLink]=\"['/search']\" color=\"Warn\"></button>\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n    <app-disclaimer></app-disclaimer>\r\n</div>"

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
        this.title = 'G00262708WebApp';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _get_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-info.service */ "./src/app/get-info.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-two/page-two.component */ "./src/app/page-two/page-two.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./disclaimer/disclaimer.component */ "./src/app/disclaimer/disclaimer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








//for viewing pleasure

//components




var appRoutes = [
    {
        path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
    },
    {
        path: 'pageTwo', component: _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_10__["PageTwoComponent"]
    },
    {
        path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
                _page_two_page_two_component__WEBPACK_IMPORTED_MODULE_10__["PageTwoComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_12__["DisclaimerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPseudoCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"]
            ],
            providers: [_get_info_service__WEBPACK_IMPORTED_MODULE_5__["GetInfoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/disclaimer/disclaimer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h1\r\n{\r\n  color:wheat;\r\n  text-align: center;\r\n  font-family: Georgia, Helvetica, sans-serif;\r\n  font-weight: 900;\r\n  font-style: oblique;\r\n}"

/***/ }),

/***/ "./src/app/disclaimer/disclaimer.component.html":
/*!******************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"h1\">Warning!! Man who built this app Knows very little about cooking</h1>"

/***/ }),

/***/ "./src/app/disclaimer/disclaimer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/disclaimer/disclaimer.component.ts ***!
  \****************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
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

var DisclaimerComponent = /** @class */ (function () {
    function DisclaimerComponent() {
    }
    DisclaimerComponent.prototype.ngOnInit = function () {
    };
    DisclaimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disclaimer',
            template: __webpack_require__(/*! ./disclaimer.component.html */ "./src/app/disclaimer/disclaimer.component.html"),
            styles: [__webpack_require__(/*! ./disclaimer.component.css */ "./src/app/disclaimer/disclaimer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisclaimerComponent);
    return DisclaimerComponent;
}());



/***/ }),

/***/ "./src/app/get-info.service.ts":
/*!*************************************!*\
  !*** ./src/app/get-info.service.ts ***!
  \*************************************/
/*! exports provided: GetInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetInfoService", function() { return GetInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GetInfoService = /** @class */ (function () {
    function GetInfoService(http) {
        this.http = http;
    }
    //functions to change this
    GetInfoService.prototype.setChoiceSavory = function () {
        this.choice = "Savory";
    };
    GetInfoService.prototype.setChoiceSweet = function () {
        this.choice = "Sweet";
    };
    //function for returning the current choice to user
    GetInfoService.prototype.getChoice = function () {
        return this.choice;
    };
    //returns all documents from the database
    GetInfoService.prototype.getRecipes = function (choice) {
        return this.http.get("http://46.101.213.83/:8081/database/test/" + choice);
    };
    //sends recipe to sever.js
    GetInfoService.prototype.addRecipe = function (Dish, Instructions, img, Ingredients, choice) {
        var recipe = { Dish: Dish, Instructions: Instructions, img: img, Ingredients: Ingredients };
        return this.http.post("http://46.101.213.83/:8081/database/test/" + choice, recipe);
    };
    //send the id to the database of document you wish to delete to server js
    GetInfoService.prototype.deleteRecipe = function (id, choice) {
        return this.http.delete("http://46.101.213.83/:8081/database/delete/" + choice + id);
    };
    //searches for a returns a document based on the dish name
    GetInfoService.prototype.searchRecipe = function (Dish, choice) {
        return this.http.get("http://46.101.213.83/:8081/database/search/" + choice + Dish);
    };
    //sends id and new info to the server to find and updat a recipe
    GetInfoService.prototype.updateRecipe = function (id, Dish, Instructions, img, Ingredients, choice) {
        var recipe = { Dish: Dish, Instructions: Instructions, img: img, Ingredients: Ingredients };
        return this.http.put("http://46.101.213.83/:8081/database/update/" + choice + id, recipe);
    };
    GetInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GetInfoService);
    return GetInfoService;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".one\r\n{\r\n    border-radius: 12px;\r\n    padding: 20% 20%;\r\n    background-image: url('savoryButtonNew.jpg');\r\n    background-size: cover;\r\n    margin:5%;\r\n}\r\n.section\r\n{\r\n  color:wheat;\r\n  text-align: center;\r\n  font-family: Georgia, Helvetica, sans-serif;\r\n  font-weight: 900;\r\n  font-style: oblique;\r\n}\r\n.two\r\n{\r\n    border-radius: 12px;\r\n    padding: 20% 20%;\r\n    background-image: url('sweetButtonNew.jpg');\r\n    background-size: cover;\r\n    margin:5%;\r\n}\r\n.three\r\n{\r\n  margin: 25px;\r\n  margin-left: 35%;\r\n  margin-right: 35%;\r\n}\r\n.mat-card-avatar\r\n{\r\n  height: 100px;\r\n  width: 100px;\r\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n    <div class=\"three\">\r\n        <button class=\"one\" mat-raised-button (click)=\"setChoiceSavory()\"></button>\r\n        <button class=\"two\" mat-raised-button (click)=\"setChoiceSweet()\"></button>\r\n    </div>\r\n    <h1 class=\"section\">{{choice}}</h1>\r\n    <mat-card *ngFor=\"let recipe of databaseInfo\">\r\n        <mat-card-header>\r\n            <img src=\"{{recipe.img}}\" mat-card-avatar>\r\n            <mat-card-title>\r\n                <h1>{{recipe.Dish}}</h1>\r\n            </mat-card-title>\r\n        </mat-card-header>\r\n        <br>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <h3>Ingredients</h3>\r\n        <ul *ngFor=\"let ingredient of recipe.Ingredients\">\r\n            <li>{{ingredient}}</li>\r\n        </ul>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <mat-divider></mat-divider>\r\n        <h3>Instructions</h3>\r\n        <h4>{{recipe.Instructions}}</h4>\r\n    </mat-card>\r\n    <br>\r\n    <br>\r\n    <p class=\"info-text mat-body-1\" *ngIf=\"databaseInfo.length <= 0\">No Recipes!</p>\r\n</div>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-info.service */ "./src/app/get-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(info) {
        this.info = info;
        this.databaseInfo = [];
    }
    //set collection
    IndexComponent.prototype.setChoiceSavory = function () {
        this.info.setChoiceSavory();
        this.ngOnInit();
    };
    IndexComponent.prototype.setChoiceSweet = function () {
        this.info.setChoiceSweet();
        this.ngOnInit();
    };
    //on loading the page stores all recipes in the database to an array databaseInfo
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        //gets choice from service
        this.choice = this.info.getChoice();
        //gets info from correct collection from database to display
        if (this.info.getChoice() == "Savory") {
            this.info.getRecipes(this.info.getChoice()).subscribe(function (data) { _this.databaseInfo = data; });
        }
        else if (this.info.getChoice() == "Sweet") {
            this.info.getRecipes(this.info.getChoice()).subscribe(function (data) { _this.databaseInfo = data; });
        }
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_get_info_service__WEBPACK_IMPORTED_MODULE_1__["GetInfoService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/page-two/page-two.component.css":
/*!*************************************************!*\
  !*** ./src/app/page-two/page-two.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item\r\n{\r\n    color:wheat;\r\n    font-family: Georgia, Helvetica, sans-serif;\r\n    font-weight: 900;\r\n    font-style: oblique;\r\n}\r\n.one\r\n{\r\n    border-radius: 12px;\r\n    padding: 20% 20%;\r\n    background-image: url('savoryButtonNew.jpg');\r\n    background-size: cover;\r\n    margin:5%;\r\n}\r\n.two\r\n{\r\n    border-radius: 12px;\r\n    padding: 20% 20%;\r\n    background-image: url('sweetButtonNew.jpg');\r\n    background-size: cover;\r\n    margin:5%;\r\n}\r\n.three\r\n{\r\n  margin: 25px;\r\n  margin-left: 35%;\r\n  margin-right: 35%;\r\n}\r\n.section\r\n{\r\n  color:wheat;\r\n  text-align: center;\r\n  font-family: Georgia, Helvetica, sans-serif;\r\n  font-weight: 900;\r\n  font-style: oblique;\r\n}\r\n.inputBoxSize\r\n{\r\n    height:250PX;\r\n}\r\n.inputBoxSizeTwo\r\n{\r\n    width:60%;\r\n}\r\n.size\r\n{\r\nheight: 200px;\r\nwidth: 60%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/page-two/page-two.component.html":
/*!**************************************************!*\
  !*** ./src/app/page-two/page-two.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <div class=\"three\">\r\n    <button class=\"one\" mat-raised-button (click)=\"setChoiceSavory(postForm)\"></button>\r\n    <button class=\"two\" mat-raised-button (click)=\"setChoiceSweet(postForm)\"></button>\r\n  </div>\r\n  <h1 class=\"section\">{{choice}}</h1>\r\n  <form #postForm=\"ngForm\">\r\n    <mat-card>\r\n      <mat-list>\r\n        <mat-list-item>Dish</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"Dish\" ngModel required #Dish=\"ngModel\" required></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Instructions</mat-list-item>\r\n        <mat-form-field class=\"inputBoxSizeTwo\">\r\n          <textarea class=\"inputBoxSize\" matInput type=\"text\" name=\"Instructions\" ngModel required #Instructions=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Image URL</mat-list-item>\r\n        <mat-form-field class=\"inputBoxSizeTwo\">\r\n          <textarea matInput type=\"text\" name=\"img\" [(ngModel)]=\"displayimg\" ngModel required #img=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <p>\r\n          <img class=\"size\" *ngIf=\"displayimg\" src=\"{{displayimg}}\">\r\n        </p>\r\n      </mat-list>\r\n    </mat-card>\r\n    <br>\r\n    <mat-card>\r\n      <mat-list>\r\n        <mat-list-item>Ingredient 1</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"ingredientOne\" ngModel required #ingredientOne=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Ingredient 2</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"ingredientTwo\" ngModel required #ingredientTwo=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Ingredient 3</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"ingredientThree\" ngModel required #ingredientThree=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Ingredient 4</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"ingredientFour\" ngModel required #ingredientFour=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n      </mat-list>\r\n      <br>\r\n      <br>\r\n      <button mat-raised-button (click)=\"addRecipe(postForm)\">Add Recipe</button>\r\n      <br>\r\n      <br>\r\n    </mat-card>\r\n  </form>\r\n  <br>\r\n  <br>\r\n</div>"

/***/ }),

/***/ "./src/app/page-two/page-two.component.ts":
/*!************************************************!*\
  !*** ./src/app/page-two/page-two.component.ts ***!
  \************************************************/
/*! exports provided: PageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoComponent", function() { return PageTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _get_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-info.service */ "./src/app/get-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageTwoComponent = /** @class */ (function () {
    function PageTwoComponent(info) {
        this.info = info;
        //used to store an array of ingredients to be sent to the service
        this.ingredients = [];
    }
    PageTwoComponent.prototype.ngOnInit = function () {
        this.choice = this.info.getChoice();
    };
    //setting which choices you want
    PageTwoComponent.prototype.setChoiceSavory = function (postForm) {
        if (this.info.getChoice() == "Sweet") {
            postForm.resetForm();
        }
        this.info.setChoiceSavory();
        this.ngOnInit();
    };
    PageTwoComponent.prototype.setChoiceSweet = function (postForm) {
        if (this.info.getChoice() == "Savory") {
            postForm.resetForm();
        }
        this.info.setChoiceSweet();
        this.ngOnInit();
    };
    PageTwoComponent.prototype.addRecipe = function (postForm) {
        //wont add unless form filled correctly
        if (!postForm.valid) {
            return;
        }
        this.ingredients.push(postForm.value.ingredientOne);
        this.ingredients.push(postForm.value.ingredientTwo);
        this.ingredients.push(postForm.value.ingredientThree);
        this.ingredients.push(postForm.value.ingredientFour);
        this.info.addRecipe(postForm.value.Dish, postForm.value.Instructions, postForm.value.img, this.ingredients, this.info.getChoice()).subscribe();
        postForm.resetForm();
    };
    PageTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-two',
            template: __webpack_require__(/*! ./page-two.component.html */ "./src/app/page-two/page-two.component.html"),
            styles: [__webpack_require__(/*! ./page-two.component.css */ "./src/app/page-two/page-two.component.css")]
        }),
        __metadata("design:paramtypes", [_get_info_service__WEBPACK_IMPORTED_MODULE_1__["GetInfoService"]])
    ], PageTwoComponent);
    return PageTwoComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-list-item\r\n{\r\ncolor: wheat;\r\nfont-family: Georgia, Helvetica, sans-serif;\r\nfont-weight: 900;\r\nfont-style: oblique;\r\n}\r\n.one\r\n{\r\nborder-radius: 12px;\r\npadding: 20% 20%;\r\nbackground-image: url('savoryButtonNew.jpg');\r\nbackground-size: cover;\r\nmargin:5%;\r\n}\r\n.two\r\n{\r\nborder-radius: 12px;\r\npadding: 20% 20%;\r\nbackground-image: url('sweetButtonNew.jpg');\r\nbackground-size: cover;\r\nmargin:5%;\r\n}\r\n.three\r\n{\r\nmargin: 25px;\r\nmargin-left: 35%;\r\nmargin-right: 35%;\r\n}\r\n.section\r\n{\r\ncolor:wheat;\r\ntext-align: center;\r\nfont-family: Georgia, Helvetica, sans-serif;\r\nfont-weight: 900;\r\nfont-style: oblique;\r\n}\r\n.inputBoxSize\r\n{\r\nheight:250PX;\r\n}\r\n.inputBoxSizeTwo\r\n{\r\nwidth:60%;\r\n}\r\n.size\r\n{\r\nheight: 200px;\r\nwidth: 60%;\r\n}\r\n.mat-card-avatar\r\n{\r\nheight: 100px;\r\nwidth: 100px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\">\r\n  <div class=\"three\">\r\n    <button class=\"one\" mat-raised-button (click)=\"setChoiceSavory()\"></button>\r\n    <button class=\"two\" mat-raised-button (click)=\"setChoiceSweet()\"></button>\r\n  </div>\r\n  <h1 class=\"section\">{{choice}}</h1>\r\n  <mat-card>\r\n    <form (submit)=\"search(searchWord)\" #searchWord=\"ngForm\">\r\n      <p>Search for a Recipe</p>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" name=\"dish\" ngModel required #dish=\"ngModel\">\r\n      </mat-form-field>\r\n      <br>\r\n      <h2>{{notFound}}</h2>\r\n      <button mat-raised-button type=\"submit\">Search</button>\r\n    </form>\r\n  </mat-card>\r\n  <mat-card *ngIf=\"recipe.Ingredients\">\r\n    <mat-card-header>\r\n      <img src=\"{{recipe.img}}\" mat-card-avatar>\r\n      <mat-card-title>\r\n        <h1>{{recipe.Dish}}</h1>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <ul *ngFor=\"let ingredient of recipe.Ingredients\">\r\n      <li>{{ingredient}}</li>\r\n    </ul>\r\n    <h2>Instructions</h2>\r\n    <h4>{{recipe.Instructions}}</h4>\r\n    <br>\r\n    <button mat-raised-button (click)=\"delete(recipe._id)\">Delete</button>\r\n    <button mat-raised-button (click)=\"displayEdit()\">Edit</button>\r\n  </mat-card>\r\n  <br>\r\n  <br>\r\n  <mat-card *ngIf=\"(bool%2)== 1\">\r\n    <form #postForm=\"ngForm\">\r\n      <p>Dish: </p>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" [(ngModel)]=\"recipe.Dish\" name=\"Dish\" ngModel required #Dish=\"ngModel\">\r\n      </mat-form-field>\r\n      <br>\r\n      <br>\r\n      <p>Instructions: </p>\r\n      <mat-form-field class=\"inputBoxSizeTwo\">\r\n        <textarea class=\"inputBoxSize\" matInput type=\"text\" [(ngModel)]=\"recipe.Instructions\" name=\"Instructions\" ngModel required\r\n          #Instructions=\"ngModel\"></textarea>\r\n      </mat-form-field>\r\n      <br>\r\n      <br>\r\n      <p>Add Img URL: </p>\r\n      <mat-form-field class=\"inputBoxSizeTwo\">\r\n        <textarea matInput type=\"text\" [(ngModel)]=\"recipe.img\" name=\"img\" ngModel required #img=\"ngModel\"></textarea>\r\n      </mat-form-field>\r\n      <p>\r\n        <img class=\"size\" *ngIf=\"recipe.img\" src=\"{{recipe.img}}\">\r\n      </p>\r\n      <br>\r\n      <br>\r\n      <mat-list>\r\n        <mat-list-item>Ingredient 1</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"One\" [(ngModel)]=\"recipe.Ingredients[0]\" ngModel required #One=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Ingredient 2</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"Two\" [(ngModel)]=\"recipe.Ingredients[1]\" ngModel required #Two=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Ingredient 3</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"Three\" [(ngModel)]=\"recipe.Ingredients[2]\" ngModel required #Three=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n        <br>\r\n        <mat-list-item>Ingredient 4</mat-list-item>\r\n        <mat-form-field>\r\n          <textarea matInput type=\"text\" name=\"Four\" [(ngModel)]=\"recipe.Ingredients[3]\" ngModel required #Four=\"ngModel\"></textarea>\r\n        </mat-form-field>\r\n      </mat-list>\r\n      <button mat-raised-button (click)=(updatePost(postForm)) align=\"center\">Edit Post</button>\r\n    </form>\r\n  </mat-card>\r\n  <br>\r\n  <br>\r\n</div>"

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
/* harmony import */ var _get_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-info.service */ "./src/app/get-info.service.ts");
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
    function SearchComponent(info) {
        this.info = info;
        //variable to store object returned from search
        this.recipe = [];
        //variable for storing new ingredients to be sent to updat function in service
        this.ingredients = [];
        //variable for show edit
        this.bool = 0;
        //variable for searching
        this.notFound = " ";
    }
    SearchComponent.prototype.ngOnInit = function () {
        this.choice = this.info.getChoice();
    };
    //buttons to switch between collections with logic for concurrent feel to web app
    SearchComponent.prototype.setChoiceSavory = function () {
        if (this.info.getChoice() == "Sweet") {
            this.recipe = [];
            this.bool = 0;
        }
        this.info.setChoiceSavory();
        this.ngOnInit();
    };
    SearchComponent.prototype.setChoiceSweet = function () {
        if (this.info.getChoice() == "Savory") {
            this.recipe = [];
            this.bool = 0;
        }
        this.info.setChoiceSweet();
        this.ngOnInit();
    };
    SearchComponent.prototype.search = function (searchWord) {
        var _this = this;
        //get data from database through searchPost->Service->server
        //if theres nothing entered then return form the function
        if (!searchWord.valid) {
            return;
        }
        this.info.searchRecipe(searchWord.value.dish, this.info.getChoice()).subscribe(function (data) {
            //client side logic for catching errors
            if (data != null) {
                _this.recipe = data;
                _this.updateId = _this.recipe._id;
                _this.notFound = " ";
            }
            else {
                _this.notFound = "Recipe not in Book!";
            }
        });
        searchWord.resetForm();
        this.bool = 0;
        this.ngOnInit();
    }; //end search function
    SearchComponent.prototype.delete = function (id) {
        //go to delete Post -> service->send Post id to server to delete post from database
        this.info.deleteRecipe(id, this.info.getChoice()).subscribe();
        //clear Array
        this.recipe = [];
        //re-load Page
        this.ngOnInit();
    };
    SearchComponent.prototype.displayEdit = function () {
        //everytime this is pressed the menu for editing opens up!
        this.bool++;
    };
    SearchComponent.prototype.updatePost = function (postForm) {
        //same logic as add recipe
        if (!postForm.valid) {
            return;
        }
        this.ingredients.push(postForm.value.One);
        this.ingredients.push(postForm.value.Two);
        this.ingredients.push(postForm.value.Three);
        this.ingredients.push(postForm.value.Four);
        this.info.updateRecipe(this.updateId, postForm.value.Dish, postForm.value.Instructions, postForm.value.img, this.ingredients, this.info.choice).subscribe();
        //re-sets page for concurrency
        this.bool++;
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_get_info_service__WEBPACK_IMPORTED_MODULE_1__["GetInfoService"]])
    ], SearchComponent);
    return SearchComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Cormac\Desktop\WebApp\G00262708WebApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map