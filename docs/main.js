(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/enginelin/Documents/the-f2e/level-eight-cloud-drives/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logo/logo.component */ "o5g6");
/* harmony import */ var _drive_capacity_progress_bar_drive_capacity_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drive-capacity-progress-bar/drive-capacity-progress-bar.component */ "anhm");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../avatar/avatar.component */ "gi6I");






class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 6, vars: 0, consts: [[1, "app-logo"], [1, "middle"], [1, "app-avatar"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logo", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-drive-capacity-progress-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], _drive_capacity_progress_bar_drive_capacity_progress_bar_component__WEBPACK_IMPORTED_MODULE_2__["DriveCapacityProgressBarComponent"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_3__["SearchBarComponent"], _avatar_avatar_component__WEBPACK_IMPORTED_MODULE_4__["AvatarComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\nheader[_ngcontent-%COMP%]   .app-logo[_ngcontent-%COMP%] {\n  margin-right: 70px;\n}\nheader[_ngcontent-%COMP%]   .app-avatar[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUiwyQkFBZ0I7RUFDaEIscUJBQVk7QUFDZDtBQUNFO0VBQ0Usa0JBQWE7QUFDakI7QUFBRTtFQUNFLE9BQUs7QUFFVCIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJcbiAgZGlzcGxheSBmbGV4XG4gIGp1c3RpZnktY29udGVudCBmbGV4LXN0YXJ0XG4gIGFsaWduLWl0ZW1zIGZsZXgtZW5kXG5cbiAgLmFwcC1sb2dvXG4gICAgbWFyZ2luLXJpZ2h0IDcwcHhcbiAgLmFwcC1hdmF0YXJcbiAgICBmbGV4IDFcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.styl']
            }]
    }], null, null); })();


/***/ }),

/***/ "2X6e":
/*!*****************************************************!*\
  !*** ./src/app/components/aside/aside.component.ts ***!
  \*****************************************************/
/*! exports provided: AsideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideComponent", function() { return AsideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FILE_TYPE */ "E3WU");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/file-type.pipe */ "EZEb");
/* harmony import */ var _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/file-size.pipe */ "Jri/");








function AsideComponent_div_1_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.FILE_TYPE_TO_ICON_PATH_ADAPTER[file_r7.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r7.name);
} }
function AsideComponent_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsideComponent_div_1_div_32_div_1_Template, 4, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.fileDataContent);
} }
function AsideComponent_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.fileData.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r3.fileData.name);
} }
function AsideComponent_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.fileData.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AsideComponent_div_1_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.fileData.content);
} }
function AsideComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u4FEE\u6539\u65E5\u671F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u985E\u578B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "fileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u64C1\u6709\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u5927\u5C0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u9810\u89BD\u5167\u5BB9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AsideComponent_div_1_div_32_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AsideComponent_div_1_div_33_Template, 2, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AsideComponent_div_1_div_34_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AsideComponent_div_1_div_35_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fileData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 10, ctx_r0.fileData.updateTime, "yyyy.MM.DD hh:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, ctx_r0.fileData.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fileData.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 15, ctx_r0.fileData.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.fileData.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.FILE_TYPE.FOLDER);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.FILE_TYPE.PICTURE);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.FILE_TYPE.VIDEO);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx_r0.FILE_TYPE.DOCUMENT);
} }
function AsideComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u9EDE\u64CA\u8CC7\u6599\u67E5\u770B\u8A73\u7D30\u5167\u5BB9");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AsideComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.fileData = null;
        this.FILE_TYPE = _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE"];
        this.FILE_TYPE_TO_ICON_PATH_ADAPTER = _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE_TO_ICON_PATH_ADAPTER"];
    }
    get fileDataContent() {
        var _a;
        return (_a = this.fileData) === null || _a === void 0 ? void 0 : _a.content;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.fileService.subFile$.subscribe(value => this.fileData = value);
    }
}
AsideComponent.ɵfac = function AsideComponent_Factory(t) { return new (t || AsideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"])); };
AsideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideComponent, selectors: [["app-aside"]], decls: 3, vars: 2, consts: [[1, "aside-container"], ["class", "detail", 4, "ngIf"], ["class", "empty", 4, "ngIf"], [1, "detail"], [1, "basic"], [1, "name"], [1, "content-item"], ["for", "updateTime"], ["id", "updateTime"], ["for", "type"], ["id", "type"], ["for", "owner"], ["id", "owner"], ["for", "size"], ["id", "size"], [1, "context"], [1, "context-main", 3, "ngSwitch"], ["class", "folder", 4, "ngSwitchCase"], ["class", "photo", 4, "ngSwitchCase"], ["class", "video", 4, "ngSwitchCase"], ["class", "document", 4, "ngSwitchCase"], [1, "folder"], ["class", "file-item", 4, "ngFor", "ngForOf"], [1, "file-item"], [3, "src"], [1, "photo"], [3, "src", "alt"], [1, "video"], [1, "document"], [1, "empty"]], template: function AsideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AsideComponent_div_1_Template, 36, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsideComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fileData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.fileData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["SvgIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_5__["FileTypePipe"], _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_6__["FileSizePipe"]], styles: [".aside-container[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 600px;\n  background: #fff;\n  border-radius: 8px;\n  margin-left: 30px;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%] {\n  padding: 30px 20px;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .basic[_ngcontent-%COMP%] {\n  padding-bottom: 15px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .basic[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  font-size: 20px;\n  border-bottom: 1px solid #f5f5f5;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .basic[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .basic[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 0;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .basic[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .basic[_ngcontent-%COMP%]   .content-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   .folder[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 10px 0;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   .folder[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 15px;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   .folder[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: left;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.aside-container[_ngcontent-%COMP%]   .detail[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n.aside-container[_ngcontent-%COMP%]   .empty[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding-top: 50px;\n  font-size: 16px;\n  color: #556f96;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FzaWRlLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBTTtFQUNOLGFBQU87RUFDUCxnQkFBVztFQUNYLGtCQUFjO0VBQ2QsaUJBQVk7QUFDZDtBQUFFO0VBQ0Usa0JBQVE7QUFFWjtBQURJO0VBQ0Usb0JBQWU7RUFDZixnQ0FBYztBQUdwQjtBQURNO0VBQ0UsYUFBUTtFQUNSLG1CQUFZO0VBQ1osWUFBTztFQUNQLGVBQVU7RUFDVixnQ0FBYztBQUd0QjtBQUZRO0VBQ0UsU0FBTztBQUlqQjtBQUhNO0VBQ0UsYUFBUTtFQUNSLDhCQUFnQjtFQUNoQixtQkFBWTtFQUNaLGNBQVE7QUFLaEI7QUFKUTtFQUNFLGVBQVU7QUFNcEI7QUFMUTtFQUNFLFNBQU87RUFDUCxlQUFVO0FBT3BCO0FBTE07RUFDRSxlQUFVO0FBT2xCO0FBTFE7RUFDRSxhQUFRO0VBQ1IsMkJBQWdCO0VBQ2hCLG1CQUFZO0VBQ1osY0FBTztBQU9qQjtBQU5VO0VBQ0UsV0FBTTtFQUNOLGtCQUFhO0FBUXpCO0FBUFU7RUFDRSxTQUFPO0VBQ1AsZ0JBQVc7QUFTdkI7QUFOUTtFQUNFLFdBQU07RUFDTixZQUFPO0FBUWpCO0FBTlE7RUFDRSxXQUFNO0VBQ04sWUFBTztBQVFqQjtBQU5FO0VBQ0UsYUFBUTtFQUNSLHVCQUFnQjtFQUNoQix1QkFBWTtFQUNaLGlCQUFZO0VBQ1osZUFBVTtFQUNWLGNBQU07QUFRViIsImZpbGUiOiJhc2lkZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5hc2lkZS1jb250YWluZXJcbiAgd2lkdGggMjEwcHhcbiAgaGVpZ2h0IDYwMHB4XG4gIGJhY2tncm91bmQgI2ZmZmZmZlxuICBib3JkZXItcmFkaXVzIDhweFxuICBtYXJnaW4tbGVmdCAzMHB4XG4gIC5kZXRhaWxcbiAgICBwYWRkaW5nIDMwcHggMjBweFxuICAgIC5iYXNpY1xuICAgICAgcGFkZGluZy1ib3R0b20gMTVweFxuICAgICAgYm9yZGVyLWJvdHRvbSAxcHggc29saWQgI0Y1RjVGNVxuXG4gICAgICAubmFtZVxuICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAgYWxpZ24taXRlbXMgY2VudGVyXG4gICAgICAgIGhlaWdodCA1MHB4XG4gICAgICAgIGZvbnQtc2l6ZSAyMHB4XG4gICAgICAgIGJvcmRlci1ib3R0b20gMXB4IHNvbGlkICNGNUY1RjVcbiAgICAgICAgcFxuICAgICAgICAgIG1hcmdpbiAwXG4gICAgICAuY29udGVudC1pdGVtXG4gICAgICAgIGRpc3BsYXkgZmxleFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgc3BhY2UtYmV0d2VlblxuICAgICAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICAgICAgcGFkZGluZyA1cHggMFxuICAgICAgICBsYWJlbFxuICAgICAgICAgIGZvbnQtc2l6ZSAxMnB4XG4gICAgICAgIHBcbiAgICAgICAgICBtYXJnaW4gMFxuICAgICAgICAgIGZvbnQtc2l6ZSAxMnB4XG4gICAgLmNvbnRleHRcbiAgICAgIGgzXG4gICAgICAgIGZvbnQtc2l6ZSAxMnB4XG4gICAgICAuZm9sZGVyXG4gICAgICAgIC5maWxlLWl0ZW1cbiAgICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgZmxleC1zdGFydFxuICAgICAgICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgICAgICAgIG1hcmdpbiAxMHB4IDBcbiAgICAgICAgICBzdmctaWNvblxuICAgICAgICAgICAgd2lkdGggMjBweFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0IDE1cHhcbiAgICAgICAgICBwXG4gICAgICAgICAgICBtYXJnaW4gMFxuICAgICAgICAgICAgdGV4dC1hbGlnbiBsZWZ0XG5cbiAgICAgIC5waG90b1xuICAgICAgICBpbWdcbiAgICAgICAgICB3aWR0aCAxMDAlXG4gICAgICAgICAgaGVpZ2h0IGF1dG9cbiAgICAgIC52aWRlb1xuICAgICAgICB2aWRlb1xuICAgICAgICAgIHdpZHRoIDEwMCVcbiAgICAgICAgICBoZWlnaHQgYXV0b1xuXG4gIC5lbXB0eVxuICAgIGRpc3BsYXkgZmxleFxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBhbGlnbi1pdGVtcyBmbGV4LXN0YXJ0XG4gICAgcGFkZGluZy10b3AgNTBweFxuICAgIGZvbnQtc2l6ZSAxNnB4XG4gICAgY29sb3IgIzU1NkY5NlxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside',
                templateUrl: './aside.component.html',
                styleUrls: ['./aside.component.styl']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] }]; }, null); })();


/***/ }),

/***/ "66o4":
/*!*************************************************!*\
  !*** ./src/app/components/tab/tab.component.ts ***!
  \*************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigator.service */ "ec3T");




class TabComponent {
    constructor(navigatorService) {
        this.navigatorService = navigatorService;
        this.label = '';
        this.value = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PRIVATE;
        this.tabValue = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PRIVATE;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.navigatorService.subTab$.subscribe(value => this.tabValue = value);
    }
    onClick() {
        this.navigatorService.setTab(this.value);
        this.navigatorService.setPaths([_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE_TO_TAB_NAME"][this.value]]);
    }
}
TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"])); };
TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["app-tab"]], inputs: { label: "label", value: "value" }, decls: 4, vars: 3, consts: [[1, "tab-container", 3, "click"], [1, "context"]], template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.tabValue === ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
    } }, styles: [".tab-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n  width: 186px;\n  margin-right: 20px;\n  background: #556f96;\n  border-radius: 15px 15px 0 0;\n  cursor: pointer;\n}\n.tab-container[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 28px;\n}\n.tab-container[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  color: #fff;\n  font-weight: bold;\n}\n.active[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.active[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%] {\n  position: relative;\n}\n.active[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #556f96;\n}\n.active[_ngcontent-%COMP%]   .context[_ngcontent-%COMP%]::before {\n  content: '';\n  width: 8px;\n  height: 28px;\n  background: #556f96;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYi5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUix1QkFBZ0I7RUFDaEIsbUJBQVk7RUFDWixZQUFPO0VBQ1AsWUFBTTtFQUNOLGtCQUFhO0VBQ2IsbUJBQVc7RUFDWCw0QkFBYztFQUNkLGVBQU87QUFDVDtBQUNFO0VBQ0UsYUFBUTtFQUNSLHVCQUFnQjtFQUNoQixtQkFBWTtFQUNaLFdBQU07RUFDTixZQUFPO0FBQ1g7QUFBSTtFQUNFLFNBQU87RUFDUCxlQUFVO0VBQ1YsV0FBTTtFQUNOLGlCQUFZO0FBRWxCO0FBQUE7RUFDRSxnQkFBVztBQUViO0FBREU7RUFDRSxrQkFBUztBQUdiO0FBRkk7RUFDRSxjQUFNO0FBSVo7QUFISTtFQUNFLFdBQVE7RUFDUixVQUFNO0VBQ04sWUFBTztFQUNQLG1CQUFXO0VBQ1gsa0JBQVM7RUFDVCxPQUFLO0VBQ0wsUUFBSTtFQUNKLDJCQUFVO0FBS2hCIiwiZmlsZSI6InRhYi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY29udGFpbmVyXG4gIGRpc3BsYXkgZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gIGFsaWduLWl0ZW1zIGNlbnRlclxuICBoZWlnaHQgNTBweFxuICB3aWR0aCAxODZweFxuICBtYXJnaW4tcmlnaHQgMjBweFxuICBiYWNrZ3JvdW5kICM1NTZGOTZcbiAgYm9yZGVyLXJhZGl1cyAxNXB4IDE1cHggMCAwXG4gIGN1cnNvciBwb2ludGVyXG5cbiAgLmNvbnRleHRcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gICAgYWxpZ24taXRlbXMgY2VudGVyXG4gICAgd2lkdGggMTAwJVxuICAgIGhlaWdodCAyOHB4XG4gICAgcFxuICAgICAgbWFyZ2luIDBcbiAgICAgIGZvbnQtc2l6ZSAxNnB4XG4gICAgICBjb2xvciB3aGl0ZVxuICAgICAgZm9udC13ZWlnaHQgYm9sZFxuXG4uYWN0aXZlXG4gIGJhY2tncm91bmQgI2ZmZmZmZlxuICAuY29udGV4dFxuICAgIHBvc2l0aW9uIHJlbGF0aXZlXG4gICAgcFxuICAgICAgY29sb3IgIzU1NkY5NlxuICAgICY6OmJlZm9yZVxuICAgICAgY29udGVudCAnJ1xuICAgICAgd2lkdGggOHB4XG4gICAgICBoZWlnaHQgMjhweFxuICAgICAgYmFja2dyb3VuZCAjNTU2Rjk2XG4gICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgbGVmdCAwXG4gICAgICB0b3AgNTAlXG4gICAgICB0cmFuc2Zvcm0gdHJhbnNsYXRlWSgtNTAlKVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab',
                templateUrl: './tab.component.html',
                styleUrls: ['./tab.component.styl'],
            }]
    }], function () { return [{ type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7FIb":
/*!*******************************************************!*\
  !*** ./src/app/components/toggle/toggle.component.ts ***!
  \*******************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigator.service */ "ec3T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");






function ToggleComponent_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 3);
} }
function ToggleComponent_svg_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 4);
} }
class ToggleComponent {
    constructor(navigatorService) {
        this.navigatorService = navigatorService;
        this.type = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"].LIST;
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggleValue = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"].LIST;
        this.TOGGLE_TYPE = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"];
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.navigatorService.subToggle$.subscribe(value => this.toggleValue = value);
    }
    onClick() {
        this.navigatorService.setToggle(this.type);
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"])); };
ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["app-toggle"]], inputs: { type: "type" }, outputs: { clickEvent: "clickEvent" }, decls: 3, vars: 4, consts: [[1, "toggle-container", 3, "click"], ["src", "assets/list.svg", 4, "ngIf"], ["src", "assets/grid.svg", 4, "ngIf"], ["src", "assets/list.svg"], ["src", "assets/grid.svg"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToggleComponent_svg_icon_1_Template, 1, 0, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToggleComponent_svg_icon_2_Template, 1, 0, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.toggleValue === ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === ctx.TOGGLE_TYPE.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === ctx.TOGGLE_TYPE.GRID);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]], styles: [".toggle-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 36px;\n  height: 36px;\n  background: #d9d9d9;\n  cursor: pointer;\n}\n.active[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RvZ2dsZS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUix1QkFBZ0I7RUFDaEIsbUJBQVk7RUFDWixXQUFNO0VBQ04sWUFBTztFQUNQLG1CQUFXO0VBQ1gsZUFBTztBQUNUO0FBQ0E7RUFDRSxnQkFBVztBQUNiIiwiZmlsZSI6InRvZ2dsZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi50b2dnbGUtY29udGFpbmVyXG4gIGRpc3BsYXkgZmxleFxuICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gIGFsaWduLWl0ZW1zIGNlbnRlclxuICB3aWR0aCAzNnB4XG4gIGhlaWdodCAzNnB4XG4gIGJhY2tncm91bmQgI0Q5RDlEOVxuICBjdXJzb3IgcG9pbnRlclxuXG4uYWN0aXZlXG4gIGJhY2tncm91bmQgI2ZmZmZmZlxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toggle',
                templateUrl: './toggle.component.html',
                styleUrls: ['./toggle.component.styl']
            }]
    }], function () { return [{ type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "95mk":
/*!*****************************************************************!*\
  !*** ./src/app/components/grid-folder/grid-folder.component.ts ***!
  \*****************************************************************/
/*! exports provided: GridFolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFolderComponent", function() { return GridFolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../favorite-button/favorite-button.component */ "aVbW");





class GridFolderComponent {
    constructor() {
        this.data = Object(_services_file_service__WEBPACK_IMPORTED_MODULE_1__["initTableRow"])();
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doubleClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick() {
        this.clickEvent.emit(this.data);
    }
    onDoubleClick() {
        this.doubleClickEvent.emit(this.data);
    }
}
GridFolderComponent.ɵfac = function GridFolderComponent_Factory(t) { return new (t || GridFolderComponent)(); };
GridFolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridFolderComponent, selectors: [["app-grid-folder"]], inputs: { data: "data" }, outputs: { clickEvent: "clickEvent", doubleClickEvent: "doubleClickEvent" }, decls: 5, vars: 3, consts: [[1, "grid-folder-container", 3, "click", "dblclick"], ["src", "assets/folder.svg", 1, "type-icon"], [1, "name"], [3, "active", "id"]], template: function GridFolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridFolderComponent_Template_div_click_0_listener() { return ctx.onClick(); })("dblclick", function GridFolderComponent_Template_div_dblclick_0_listener() { return ctx.onDoubleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-favorite-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.data.favorite)("id", ctx.data.id);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_2__["SvgIconComponent"], _favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_3__["FavoriteButtonComponent"]], styles: [".grid-folder-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 5px 15px;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  cursor: pointer;\n  justify-content: space-between;\n  align-items: center;\n  border: 1px solid #000;\n}\n.grid-folder-container[_ngcontent-%COMP%]:hover {\n  background: #d9d9d9;\n}\n.grid-folder-container[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.grid-folder-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0 15px 0 0;\n  font-size: 18px;\n  max-width: 130px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyaWQtZm9sZGVyLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQVc7RUFDWCxpQkFBUTtFQUNSLFlBQU07RUFDTixZQUFPO0VBQ1AsYUFBUTtFQUNSLGVBQU87RUFDUCw4QkFBZ0I7RUFDaEIsbUJBQVk7RUFDWixzQkFBTztBQUNUO0FBQUU7RUFDRSxtQkFBVztBQUVmO0FBREU7RUFDRSxrQkFBYTtBQUdqQjtBQUZFO0VBQ0Usa0JBQU87RUFDUCxlQUFVO0VBQ1YsZ0JBQVU7RUFDVixnQkFBUztFQUNULHVCQUFjO0VBQ2QsbUJBQVk7QUFJaEIiLCJmaWxlIjoiZ3JpZC1mb2xkZXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1mb2xkZXItY29udGFpbmVyXG4gIGJveC1zaXppbmcgYm9yZGVyLWJveFxuICBwYWRkaW5nIDVweCAxNXB4XG4gIHdpZHRoIDIwMHB4XG4gIGhlaWdodCA1MHB4XG4gIGRpc3BsYXkgZmxleFxuICBjdXJzb3IgcG9pbnRlclxuICBqdXN0aWZ5LWNvbnRlbnQgc3BhY2UtYmV0d2VlblxuICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgYm9yZGVyIDFweCBzb2xpZCBibGFja1xuICAmOmhvdmVyXG4gICAgYmFja2dyb3VuZCAjRDlEOUQ5XG4gIC50eXBlLWljb25cbiAgICBtYXJnaW4tcmlnaHQgMTBweFxuICAubmFtZVxuICAgIG1hcmdpbiAwIDE1cHggMCAwXG4gICAgZm9udC1zaXplIDE4cHhcbiAgICBtYXgtd2lkdGggMTMwcHhcbiAgICBvdmVyZmxvdyBoaWRkZW5cbiAgICB0ZXh0LW92ZXJmbG93IGVsbGlwc2lzXG4gICAgd2hpdGUtc3BhY2Ugbm93cmFwXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridFolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-folder',
                templateUrl: './grid-folder.component.html',
                styleUrls: ['./grid-folder.component.styl']
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], doubleClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
    apiUrl: 'http://level-eight-cloud-drives-apis.herokuapp.com'
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

/***/ "CeM+":
/*!***************************************************************!*\
  !*** ./src/app/components/file-popup/file-popup.component.ts ***!
  \***************************************************************/
/*! exports provided: FilePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilePopupComponent", function() { return FilePopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/FILE_TYPE */ "E3WU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FilePopupComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.data.name);
} }
function FilePopupComponent_video_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function FilePopupComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.data.content);
} }
class FilePopupComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.data = Object(_services_file_service__WEBPACK_IMPORTED_MODULE_1__["initTableRow"])();
        this.isOpen = false;
        this.FILE_TYPE = _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_2__["FILE_TYPE"];
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.fileService.subContent$.subscribe(value => this.data = value);
        this.fileService.subIsPopupOpen$.subscribe(value => this.isOpen = value);
    }
    onPopupClick() {
        this.fileService.setIsOpen(false);
    }
}
FilePopupComponent.ɵfac = function FilePopupComponent_Factory(t) { return new (t || FilePopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"])); };
FilePopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilePopupComponent, selectors: [["app-file-popup"]], decls: 7, vars: 6, consts: [[1, "file-popup-container", 3, "click"], [1, "name"], [1, "player"], [3, "src", "alt", 4, "ngIf"], ["autoplay", "", 3, "src", 4, "ngIf"], ["class", "document", 4, "ngIf"], [3, "src", "alt"], ["autoplay", "", 3, "src"], [1, "document"]], template: function FilePopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilePopupComponent_Template_div_click_0_listener() { return ctx.onPopupClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilePopupComponent_img_4_Template, 1, 2, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FilePopupComponent_video_5_Template, 1, 1, "video", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FilePopupComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.FILE_TYPE.PICTURE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.FILE_TYPE.VIDEO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.FILE_TYPE.DOCUMENT);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".active[_ngcontent-%COMP%] {\n  display: inline-block !important;\n}\n.file-popup-container[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.file-popup-container[_ngcontent-%COMP%]::before {\n  content: '';\n  background: rgba(0,0,0,0.4);\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.file-popup-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  top: 50px;\n  left: 50px;\n  font-size: 30px;\n  color: #fff;\n}\n.file-popup-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.file-popup-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.file-popup-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.file-popup-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  padding: 30px 15px;\n}\n.file-popup-container[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .document[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ZpbGUtcG9wdXAuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBUTtBQUNWO0FBQUE7RUFDRSxhQUFRO0VBQ1Isa0JBQVM7RUFDVCxNQUFJO0VBQ0osUUFBTTtFQUNOLFNBQU87RUFDUCxPQUFLO0FBRVA7QUFERTtFQUNFLFdBQVE7RUFDUiwyQkFBVztFQUNYLGtCQUFTO0VBQ1QsTUFBSTtFQUNKLFFBQU07RUFDTixTQUFPO0VBQ1AsT0FBSztBQUdUO0FBREU7RUFDRSxTQUFPO0VBQ1Asa0JBQVM7RUFDVCxTQUFJO0VBQ0osVUFBSztFQUNMLGVBQVU7RUFDVixXQUFNO0FBR1Y7QUFERTtFQUNFLGtCQUFTO0VBQ1QsUUFBSTtFQUNKLFNBQUs7RUFDTCxnQ0FBVTtBQUdkO0FBRkk7RUFDRSxXQUFNO0VBQ04sWUFBTztBQUliO0FBSEk7RUFDRSxXQUFNO0VBQ04sWUFBTztBQUtiO0FBSkk7RUFDRSxXQUFNO0VBQ04sWUFBTztFQUNQLGdCQUFXO0VBQ1gsa0JBQVE7QUFNZDtBQUxNO0VBQ0UsZUFBVTtBQU9sQiIsImZpbGUiOiJmaWxlLXBvcHVwLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZVxuICBkaXNwbGF5IGlubGluZS1ibG9jayAhaW1wb3J0YW50XG4uZmlsZS1wb3B1cC1jb250YWluZXJcbiAgZGlzcGxheSBub25lXG4gIHBvc2l0aW9uIGFic29sdXRlXG4gIHRvcCAwXG4gIHJpZ2h0IDBcbiAgYm90dG9tIDBcbiAgbGVmdCAwXG4gICY6OmJlZm9yZVxuICAgIGNvbnRlbnQgJydcbiAgICBiYWNrZ3JvdW5kIHJnYmEoMCwgMCwgMCwgLjQpXG4gICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICB0b3AgMFxuICAgIHJpZ2h0IDBcbiAgICBib3R0b20gMFxuICAgIGxlZnQgMFxuXG4gIC5uYW1lXG4gICAgbWFyZ2luIDBcbiAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgIHRvcCA1MHB4XG4gICAgbGVmdCA1MHB4XG4gICAgZm9udC1zaXplIDMwcHhcbiAgICBjb2xvciB3aGl0ZVxuXG4gIC5wbGF5ZXJcbiAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgIHRvcCA1MCVcbiAgICBsZWZ0IDUwJVxuICAgIHRyYW5zZm9ybSB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbiAgICBpbWdcbiAgICAgIHdpZHRoIDEwMCVcbiAgICAgIGhlaWdodCAxMDAlXG4gICAgdmlkZW9cbiAgICAgIHdpZHRoIDEwMCVcbiAgICAgIGhlaWdodCAxMDAlXG4gICAgLmRvY3VtZW50XG4gICAgICB3aWR0aCAxMDAlXG4gICAgICBoZWlnaHQgMTAwJVxuICAgICAgYmFja2dyb3VuZCB3aGl0ZVxuICAgICAgcGFkZGluZyAzMHB4IDE1cHhcbiAgICAgIHBcbiAgICAgICAgZm9udC1zaXplIDIwcHhcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilePopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-popup',
                templateUrl: './file-popup.component.html',
                styleUrls: ['./file-popup.component.styl']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] }]; }, null); })();


/***/ }),

/***/ "E3WU":
/*!************************************!*\
  !*** ./src/app/utils/FILE_TYPE.ts ***!
  \************************************/
/*! exports provided: FILE_TYPE, FILE_TYPE_TO_ICON_PATH_ADAPTER, FILE_TYPE_TO_NAME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_TYPE", function() { return FILE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_TYPE_TO_ICON_PATH_ADAPTER", function() { return FILE_TYPE_TO_ICON_PATH_ADAPTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILE_TYPE_TO_NAME", function() { return FILE_TYPE_TO_NAME; });
var FILE_TYPE;
(function (FILE_TYPE) {
    FILE_TYPE[FILE_TYPE["FOLDER"] = 0] = "FOLDER";
    FILE_TYPE[FILE_TYPE["PICTURE"] = 1] = "PICTURE";
    FILE_TYPE[FILE_TYPE["VIDEO"] = 2] = "VIDEO";
    FILE_TYPE[FILE_TYPE["DOCUMENT"] = 3] = "DOCUMENT";
})(FILE_TYPE || (FILE_TYPE = {}));
const FILE_TYPE_TO_ICON_PATH_ADAPTER = {
    [FILE_TYPE.FOLDER]: 'assets/folder.svg',
    [FILE_TYPE.PICTURE]: 'assets/picture.svg',
    [FILE_TYPE.VIDEO]: 'assets/video.svg',
    [FILE_TYPE.DOCUMENT]: 'assets/doc.svg'
};
const FILE_TYPE_TO_NAME = {
    [FILE_TYPE.FOLDER]: '資料夾',
    [FILE_TYPE.PICTURE]: 'JPG',
    [FILE_TYPE.VIDEO]: 'MP4',
    [FILE_TYPE.DOCUMENT]: '文件'
};


/***/ }),

/***/ "EZEb":
/*!*****************************************!*\
  !*** ./src/app/utils/file-type.pipe.ts ***!
  \*****************************************/
/*! exports provided: FileTypePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTypePipe", function() { return FileTypePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FILE_TYPE */ "E3WU");



class FileTypePipe {
    transform(value) {
        return _FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE_TO_NAME"][value];
    }
}
FileTypePipe.ɵfac = function FileTypePipe_Factory(t) { return new (t || FileTypePipe)(); };
FileTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fileType", type: FileTypePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fileType'
            }]
    }], null, null); })();


/***/ }),

/***/ "HVfF":
/*!***************************************************!*\
  !*** ./src/app/components/list/list.component.ts ***!
  \***************************************************/
/*! exports provided: SORT_TYPE, ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SORT_TYPE", function() { return SORT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/FILE_TYPE */ "E3WU");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "ec3T");
/* harmony import */ var _arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../arrow-button/arrow-button.component */ "hU0S");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../favorite-button/favorite-button.component */ "aVbW");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/file-type.pipe */ "EZEb");
/* harmony import */ var _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/file-size.pipe */ "Jri/");











function ListComponent_tr_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_tr_25_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const row_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onRowClick(row_r1); })("dblclick", function ListComponent_tr_25_Template_tr_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const row_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onRowDoubleClick(row_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-favorite-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "svg-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "fileType");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", row_r1.favorite)("id", row_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.FILE_TYPE_TO_ICON_PATH_ADAPTER[row_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 8, row_r1.updateTime, "yyyy/mm/dd hh:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 11, row_r1.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r1.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 13, row_r1.size));
} }
var SORT_TYPE;
(function (SORT_TYPE) {
    SORT_TYPE[SORT_TYPE["NAME"] = 0] = "NAME";
    SORT_TYPE[SORT_TYPE["UPDATE_TIME"] = 1] = "UPDATE_TIME";
    SORT_TYPE[SORT_TYPE["TYPE"] = 2] = "TYPE";
    SORT_TYPE[SORT_TYPE["OWNER"] = 3] = "OWNER";
    SORT_TYPE[SORT_TYPE["SIZE"] = 4] = "SIZE";
})(SORT_TYPE || (SORT_TYPE = {}));
const sortTypeToPropertyAdapter = {
    [SORT_TYPE.NAME]: 'name',
    [SORT_TYPE.UPDATE_TIME]: 'updateTime',
    [SORT_TYPE.TYPE]: 'type',
    [SORT_TYPE.OWNER]: 'owner',
    [SORT_TYPE.SIZE]: 'size'
};
class ListComponent {
    constructor(filesService, navigatorService) {
        this.filesService = filesService;
        this.navigatorService = navigatorService;
        this.sortType = SORT_TYPE.NAME;
        this.tableData = [];
        this.paths = [];
        this.SORT_TYPE = SORT_TYPE;
        this.FILE_TYPE_TO_ICON_PATH_ADAPTER = src_app_utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE_TO_ICON_PATH_ADAPTER"];
    }
    get localTableData() {
        const property = sortTypeToPropertyAdapter[this.sortType];
        return this.tableData.sort((a, b) => {
            // return a[property] - b[property];
            return a.id - b.id;
        });
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.filesService.subFiles$.subscribe(value => this.tableData = value);
        this.navigatorService.subPaths$.subscribe(value => this.paths = value);
    }
    onSortClick(sortType) {
        this.sortType = sortType;
    }
    onRowClick(row) {
        this.filesService.fetchFile(row.id);
    }
    onRowDoubleClick(row) {
        if (row.type === src_app_utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE"].FOLDER) {
            this.navigatorService.setPaths([...this.paths, row.name]);
            this.filesService.fetchFolder(row.id);
            return;
        }
        this.filesService.fetchContent(row.id);
        this.filesService.setIsOpen(true);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 26, vars: 6, consts: [[1, "head"], ["scope", "col", 1, "operator"], ["scope", "col"], [3, "active", "clickEvent"], ["class", "row", 3, "click", "dblclick", 4, "ngFor", "ngForOf"], [1, "row", 3, "click", "dblclick"], ["scope", "row", 1, "operator"], [3, "active", "id"], [2, "margin-right", "8px", 3, "src"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u540D\u7A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-arrow-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ListComponent_Template_app_arrow_button_clickEvent_7_listener() { return ctx.onSortClick(ctx.SORT_TYPE.NAME); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u4FEE\u6539\u65E5\u671F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-arrow-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ListComponent_Template_app_arrow_button_clickEvent_11_listener() { return ctx.onSortClick(ctx.SORT_TYPE.UPDATE_TIME); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u985E\u578B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-arrow-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ListComponent_Template_app_arrow_button_clickEvent_15_listener() { return ctx.onSortClick(ctx.SORT_TYPE.TYPE); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u64C1\u6709\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-arrow-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ListComponent_Template_app_arrow_button_clickEvent_19_listener() { return ctx.onSortClick(ctx.SORT_TYPE.OWNER); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u5927\u5C0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-arrow-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function ListComponent_Template_app_arrow_button_clickEvent_23_listener() { return ctx.onSortClick(ctx.SORT_TYPE.SIZE); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ListComponent_tr_25_Template, 17, 15, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.sortType === ctx.SORT_TYPE.NAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.sortType === ctx.SORT_TYPE.UPDATE_TIME);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.sortType === ctx.SORT_TYPE.TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.sortType === ctx.SORT_TYPE.OWNER);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.sortType === ctx.SORT_TYPE.SIZE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.localTableData);
    } }, directives: [_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_4__["ArrowButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_6__["FavoriteButtonComponent"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_7__["SvgIconComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_8__["FileTypePipe"], _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_9__["FileSizePipe"]], styles: ["table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f5f5f5;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  text-align: start;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 15px 0;\n  text-align: start;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpc3QuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUNFLHlCQUFnQjtBQUdsQjtBQURBO0VBQ0UsV0FBTTtBQUdSO0FBREk7RUFDRSxnQ0FBYztBQUdwQjtBQUZNO0VBQ0UsZUFBUTtFQUNSLGlCQUFXO0FBSW5CO0FBSFE7RUFDRSxpQkFBYTtBQUt2QjtBQUpNO0VBQ0UsYUFBUTtFQUNSLHVCQUFnQjtBQU14QjtBQUhJO0VBQ0UsZUFBTztBQUtiO0FBSk07O0VBQ0UsZUFBUTtFQUNSLGlCQUFXO0FBT25CO0FBTk07RUFDRSxtQkFBVztBQVFuQjtBQVBNO0VBQ0UsYUFBUTtFQUNSLHVCQUFnQjtBQVN4QiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsIHRoLCB0ZFxuICBib3JkZXItY29sbGFwc2UgY29sbGFwc2VcblxudGFibGVcbiAgd2lkdGggMTAwJVxuICB0aGVhZFxuICAgIC5oZWFkXG4gICAgICBib3JkZXItYm90dG9tIDFweCBzb2xpZCAjRjVGNUY1XG4gICAgICB0aFxuICAgICAgICBwYWRkaW5nIDE1cHggMFxuICAgICAgICB0ZXh0LWFsaWduIHN0YXJ0XG4gICAgICAgIHNwYW5cbiAgICAgICAgICBtYXJnaW4tcmlnaHQgOHB4XG4gICAgICAub3BlcmF0b3JcbiAgICAgICAgZGlzcGxheSBmbGV4XG4gICAgICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcblxuICB0Ym9keVxuICAgIC5yb3dcbiAgICAgIGN1cnNvciBwb2ludGVyXG4gICAgICB0aCwgdGRcbiAgICAgICAgcGFkZGluZyAxNXB4IDBcbiAgICAgICAgdGV4dC1hbGlnbiBzdGFydFxuICAgICAgJjpob3ZlclxuICAgICAgICBiYWNrZ3JvdW5kICNGNUY1RjVcbiAgICAgIC5vcGVyYXRvclxuICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.styl']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "Jri/":
/*!*****************************************!*\
  !*** ./src/app/utils/file-size.pipe.ts ***!
  \*****************************************/
/*! exports provided: FileSizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSizePipe", function() { return FileSizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FileSizePipe {
    transform(value) {
        if (value < 1024) {
            return value + 'KB';
        }
        if (value < 1024 * 1024) {
            return (value / 1024).toFixed(2) + 'MB';
        }
        if (value < 1024 * 1024 * 1024) {
            return (value / (1024 * 1024)).toFixed(2) + 'GB';
        }
        return '體積過大';
    }
}
FileSizePipe.ɵfac = function FileSizePipe_Factory(t) { return new (t || FileSizePipe)(); };
FileSizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fileSize", type: FileSizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileSizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'fileSize'
            }]
    }], null, null); })();


/***/ }),

/***/ "RlUD":
/*!*****************************************************************!*\
  !*** ./src/app/components/plus-button/plus-button.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlusButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlusButtonComponent", function() { return PlusButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");



class PlusButtonComponent {
    constructor() {
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick() {
        this.clickEvent.emit();
    }
}
PlusButtonComponent.ɵfac = function PlusButtonComponent_Factory(t) { return new (t || PlusButtonComponent)(); };
PlusButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlusButtonComponent, selectors: [["app-plus-button"]], outputs: { clickEvent: "clickEvent" }, decls: 2, vars: 0, consts: [["role", "button", 1, "plus-button", 3, "click"], ["src", "assets/plus.svg"]], template: function PlusButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlusButtonComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__["SvgIconComponent"]], styles: [".plus-button[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  background: #ffbe45;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BsdXMtYnV0dG9uLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBTTtFQUNOLFlBQU87RUFDUCxtQkFBVztFQUNYLGtCQUFjO0VBQ2QsYUFBUTtFQUNSLHVCQUFnQjtFQUNoQixtQkFBWTtFQUNaLGVBQU87QUFDVCIsImZpbGUiOiJwbHVzLWJ1dHRvbi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5wbHVzLWJ1dHRvblxuICB3aWR0aCA0OHB4XG4gIGhlaWdodCA0OHB4XG4gIGJhY2tncm91bmQgI0ZGQkU0NVxuICBib3JkZXItcmFkaXVzIDUwJVxuICBkaXNwbGF5IGZsZXhcbiAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgY3Vyc29yIHBvaW50ZXJcblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlusButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-plus-button',
                templateUrl: './plus-button.component.html',
                styleUrls: ['./plus-button.component.styl']
            }]
    }], null, { clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/navigator.service */ "ec3T");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "qfBg");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/file.service */ "cpn4");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "t99X");
/* harmony import */ var _components_plus_button_plus_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/plus-button/plus-button.component */ "RlUD");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/aside/aside.component */ "2X6e");
/* harmony import */ var _components_file_popup_file_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/file-popup/file-popup.component */ "CeM+");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tab/tab.component */ "66o4");
/* harmony import */ var _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/toggle/toggle.component */ "7FIb");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/list/list.component */ "HVfF");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/grid/grid.component */ "m4bG");
















function AppComponent_app_tab_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-tab", 15);
} if (rf & 2) {
    const tab_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", tab_r4.label)("value", tab_r4.value);
} }
function AppComponent_app_toggle_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toggle", 16);
} if (rf & 2) {
    const toggle_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", toggle_r5);
} }
function AppComponent_app_list_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list");
} }
function AppComponent_app_grid_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-grid");
} }
class AppComponent {
    constructor(navigatorService, userService, fileService) {
        this.navigatorService = navigatorService;
        this.userService = userService;
        this.fileService = fileService;
        this.tabs = [
            { label: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE_TO_TAB_NAME"][_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PRIVATE], value: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PRIVATE },
            { label: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE_TO_TAB_NAME"][_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PUBLIC], value: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PUBLIC },
            { label: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE_TO_TAB_NAME"][_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].IMPORTANT], value: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].IMPORTANT },
            { label: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE_TO_TAB_NAME"][_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].TRASH], value: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].TRASH },
        ];
        this.toggles = [
            _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"].LIST,
            _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"].GRID
        ];
        this.TOGGLE_TYPE = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"];
        this.tabValue = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].PRIVATE;
        this.toggleValue = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_TYPE"].LIST;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        // Bind toggle and tab value
        this.navigatorService.subToggle$.subscribe(value => this.toggleValue = value);
        this.navigatorService.subTab$.subscribe(value => {
            this.tabValue = value;
            // Default value is 0: private
            this.fileService.fetchMain(value);
        });
        // Default fetch data
        // User Info
        this.userService.fetchUserInfo();
    }
    onButtonClick(type) {
        alert(`我後端還沒厲害到能做出這個功能: ${type}`);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 4, consts: [["role", "main", 1, "content"], [1, "container"], [1, "dashboard-container"], [1, "main-container"], [1, "main-top"], [3, "label", "value", 4, "ngFor", "ngForOf"], [1, "toggle-wrapper"], [3, "type", 4, "ngFor", "ngForOf"], [1, "main-body"], [1, "table-container"], [4, "ngIf"], [1, "button-container"], [1, "plus-button-container"], [3, "clickEvent"], [1, "label"], [3, "label", "value"], [3, "type"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_tab_6_Template, 1, 2, "app-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_app_toggle_8_Template, 1, 1, "app-toggle", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_app_list_12_Template, 1, 0, "app-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_app_grid_13_Template, 1, 0, "app-grid", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-plus-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function AppComponent_Template_app_plus_button_clickEvent_16_listener() { return ctx.onButtonClick("\u65B0\u589E\u8CC7\u6599\u593E"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u65B0\u589E\u8CC7\u6599\u593E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-plus-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function AppComponent_Template_app_plus_button_clickEvent_20_listener() { return ctx.onButtonClick("\u65B0\u589E\u6A94\u6848"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u65B0\u589E\u6A94\u6848");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-file-popup");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toggles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleValue === ctx.TOGGLE_TYPE.LIST);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleValue === ctx.TOGGLE_TYPE.GRID);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_plus_button_plus_button_component__WEBPACK_IMPORTED_MODULE_7__["PlusButtonComponent"], _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_8__["AsideComponent"], _components_file_popup_file_popup_component__WEBPACK_IMPORTED_MODULE_9__["FilePopupComponent"], _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_10__["TabComponent"], _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_11__["ToggleComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"], _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 50px auto 0;\n  padding: 30px 50px 50px;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  margin-top: 30px;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-top[_ngcontent-%COMP%]   .toggle-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-content: center;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n  background: #fff;\n  border-radius: 0 8px 8px 8px;\n  box-sizing: border-box;\n  padding: 30px 50px;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  height: 450px;\n  overflow-y: scroll;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .plus-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-content: center;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .plus-button-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 0 15px;\n  font-size: 14px;\n}\n.content[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .main-container[_ngcontent-%COMP%]   .main-body[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .plus-button-container[_ngcontent-%COMP%]:first-child {\n  margin-right: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFXO0VBQ1gsa0JBQVM7RUFDVCxNQUFJO0VBQ0osUUFBTTtFQUNOLFNBQU87RUFDUCxPQUFLO0FBQ1A7QUFBRTtFQUNFLGlCQUFVO0VBQ1YsbUJBQU87RUFDUCx1QkFBUTtBQUVaO0FBREk7RUFDRSxhQUFRO0VBQ1IsdUJBQWdCO0VBQ2hCLHFCQUFZO0VBQ1osZ0JBQVc7QUFHakI7QUFGTTtFQUNFLE9BQUs7QUFJYjtBQUhRO0VBQ0UsYUFBUTtFQUNSLDJCQUFnQjtFQUNoQixxQkFBWTtBQUt0QjtBQUpVO0VBQ0UsYUFBUTtFQUNSLHVCQUFnQjtFQUNoQixxQkFBYztBQU0xQjtBQUpRO0VBQ0UsV0FBTTtFQUNOLGFBQU87RUFDUCxnQkFBVztFQUNYLDRCQUFjO0VBQ2Qsc0JBQVc7RUFDWCxrQkFBUTtBQU1sQjtBQUxVO0VBQ0UsYUFBTztFQUNQLGtCQUFXO0FBT3ZCO0FBTlU7RUFDRSxhQUFRO0VBQ1Isc0JBQWdCO0VBQ2hCLG1CQUFZO0FBUXhCO0FBUFk7RUFDRSxhQUFRO0VBQ1IsMkJBQWdCO0VBQ2hCLHFCQUFjO0FBUzVCO0FBUmM7RUFDRSxhQUFRO0VBQ1IsdUJBQWdCO0VBQ2hCLG1CQUFZO0VBQ1osa0JBQU87RUFDUCxlQUFVO0FBVTFCO0FBVGM7RUFDRSxrQkFBYTtBQVc3QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudFxuICBiYWNrZ3JvdW5kICNmNWY1ZjVcbiAgcG9zaXRpb24gYWJzb2x1dGVcbiAgdG9wIDBcbiAgcmlnaHQgMFxuICBib3R0b20gMFxuICBsZWZ0IDBcbiAgLmNvbnRhaW5lclxuICAgIG1heC13aWR0aCAxMjgwcHhcbiAgICBtYXJnaW4gNTBweCBhdXRvIDBcbiAgICBwYWRkaW5nIDMwcHggNTBweCA1MHB4XG4gICAgLmRhc2hib2FyZC1jb250YWluZXJcbiAgICAgIGRpc3BsYXkgZmxleFxuICAgICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgICAgYWxpZ24taXRlbXMgZmxleC1lbmRcbiAgICAgIG1hcmdpbi10b3AgMzBweFxuICAgICAgLm1haW4tY29udGFpbmVyXG4gICAgICAgIGZsZXggMVxuICAgICAgICAubWFpbi10b3BcbiAgICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgZmxleC1zdGFydFxuICAgICAgICAgIGFsaWduLWl0ZW1zIGZsZXgtZW5kXG4gICAgICAgICAgLnRvZ2dsZS13cmFwcGVyXG4gICAgICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQgY2VudGVyXG5cbiAgICAgICAgLm1haW4tYm9keVxuICAgICAgICAgIHdpZHRoIDEwMCVcbiAgICAgICAgICBoZWlnaHQgNjAwcHhcbiAgICAgICAgICBiYWNrZ3JvdW5kICNmZmZmZmZcbiAgICAgICAgICBib3JkZXItcmFkaXVzIDAgOHB4IDhweCA4cHhcbiAgICAgICAgICBib3gtc2l6aW5nIGJvcmRlci1ib3hcbiAgICAgICAgICBwYWRkaW5nIDMwcHggNTBweFxuICAgICAgICAgIC50YWJsZS1jb250YWluZXJcbiAgICAgICAgICAgIGhlaWdodCA0NTBweFxuICAgICAgICAgICAgb3ZlcmZsb3cteSBzY3JvbGxcbiAgICAgICAgICAuYnV0dG9uLWNvbnRhaW5lclxuICAgICAgICAgICAgZGlzcGxheSBmbGV4XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQgc3RhcnRcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgICAgICAgICAgLnBsdXMtYnV0dG9uLWNvbnRhaW5lclxuICAgICAgICAgICAgICBkaXNwbGF5IGZsZXhcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50IGZsZXgtc3RhcnRcbiAgICAgICAgICAgICAgYWxpZ24tY29udGVudCBjZW50ZXJcbiAgICAgICAgICAgICAgcFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgZmxleFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICAgICAgICAgICAgICBtYXJnaW4gMCAwIDAgMTVweFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAxNHB4XG4gICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGRcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQgMzBweFxuXG4iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.styl'],
            }]
    }], function () { return [{ type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_plus_button_plus_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/plus-button/plus-button.component */ "RlUD");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "lCy9");
/* harmony import */ var _components_drive_capacity_progress_bar_drive_capacity_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/drive-capacity-progress-bar/drive-capacity-progress-bar.component */ "anhm");
/* harmony import */ var _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/avatar/avatar.component */ "gi6I");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/logo/logo.component */ "o5g6");
/* harmony import */ var _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tab/tab.component */ "66o4");
/* harmony import */ var _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/toggle/toggle.component */ "7FIb");
/* harmony import */ var _components_favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/favorite-button/favorite-button.component */ "aVbW");
/* harmony import */ var _components_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/arrow-button/arrow-button.component */ "hU0S");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/list/list.component */ "HVfF");
/* harmony import */ var _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/grid/grid.component */ "m4bG");
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ "t99X");
/* harmony import */ var _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/aside/aside.component */ "2X6e");
/* harmony import */ var _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/file-type.pipe */ "EZEb");
/* harmony import */ var _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./utils/file-size.pipe */ "Jri/");
/* harmony import */ var _components_grid_folder_grid_folder_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/grid-folder/grid-folder.component */ "95mk");
/* harmony import */ var _components_grid_file_grid_file_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/grid-file/grid-file.component */ "yB5P");
/* harmony import */ var _components_file_popup_file_popup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/file-popup/file-popup.component */ "CeM+");





// Component






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["AngularSvgIconModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_plus_button_plus_button_component__WEBPACK_IMPORTED_MODULE_6__["PlusButtonComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
        _components_drive_capacity_progress_bar_drive_capacity_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__["DriveCapacityProgressBarComponent"],
        _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__["AvatarComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_11__["LogoComponent"],
        _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__["TabComponent"],
        _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_13__["ToggleComponent"],
        _components_favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteButtonComponent"],
        _components_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_15__["ArrowButtonComponent"],
        _components_list_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"],
        _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_17__["GridComponent"],
        _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"],
        _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_19__["AsideComponent"],
        _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_20__["FileTypePipe"],
        _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_21__["FileSizePipe"],
        _components_grid_folder_grid_folder_component__WEBPACK_IMPORTED_MODULE_22__["GridFolderComponent"],
        _components_grid_file_grid_file_component__WEBPACK_IMPORTED_MODULE_23__["GridFileComponent"],
        _components_file_popup_file_popup_component__WEBPACK_IMPORTED_MODULE_24__["FilePopupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["AngularSvgIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_plus_button_plus_button_component__WEBPACK_IMPORTED_MODULE_6__["PlusButtonComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"],
                    _components_drive_capacity_progress_bar_drive_capacity_progress_bar_component__WEBPACK_IMPORTED_MODULE_9__["DriveCapacityProgressBarComponent"],
                    _components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_10__["AvatarComponent"],
                    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_11__["LogoComponent"],
                    _components_tab_tab_component__WEBPACK_IMPORTED_MODULE_12__["TabComponent"],
                    _components_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_13__["ToggleComponent"],
                    _components_favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_14__["FavoriteButtonComponent"],
                    _components_arrow_button_arrow_button_component__WEBPACK_IMPORTED_MODULE_15__["ArrowButtonComponent"],
                    _components_list_list_component__WEBPACK_IMPORTED_MODULE_16__["ListComponent"],
                    _components_grid_grid_component__WEBPACK_IMPORTED_MODULE_17__["GridComponent"],
                    _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadcrumbComponent"],
                    _components_aside_aside_component__WEBPACK_IMPORTED_MODULE_19__["AsideComponent"],
                    _utils_file_type_pipe__WEBPACK_IMPORTED_MODULE_20__["FileTypePipe"],
                    _utils_file_size_pipe__WEBPACK_IMPORTED_MODULE_21__["FileSizePipe"],
                    _components_grid_folder_grid_folder_component__WEBPACK_IMPORTED_MODULE_22__["GridFolderComponent"],
                    _components_grid_file_grid_file_component__WEBPACK_IMPORTED_MODULE_23__["GridFileComponent"],
                    _components_file_popup_file_popup_component__WEBPACK_IMPORTED_MODULE_24__["FilePopupComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["AngularSvgIconModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aVbW":
/*!*************************************************************************!*\
  !*** ./src/app/components/favorite-button/favorite-button.component.ts ***!
  \*************************************************************************/
/*! exports provided: FavoriteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return FavoriteButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");





function FavoriteButtonComponent_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 3);
} }
function FavoriteButtonComponent_svg_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 4);
} }
class FavoriteButtonComponent {
    constructor(fileService) {
        this.fileService = fileService;
        this.active = false;
        this.id = -1;
        this.localActive = false;
    }
    ngOnChanges(changes) {
        this.localActive = changes.active.currentValue;
    }
    onClick() {
        this.fileService.postFavorite({ id: this.id, favorite: !this.active });
        this.localActive = !this.localActive;
    }
}
FavoriteButtonComponent.ɵfac = function FavoriteButtonComponent_Factory(t) { return new (t || FavoriteButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"])); };
FavoriteButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteButtonComponent, selectors: [["app-favorite-button"]], inputs: { active: "active", id: "id" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [["role", "button", 1, "favorite-button-container", 3, "click"], ["src", "assets/bookmark.svg", 4, "ngIf"], ["src", "assets/bookmark_unselected.svg", 4, "ngIf"], ["src", "assets/bookmark.svg"], ["src", "assets/bookmark_unselected.svg"]], template: function FavoriteButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteButtonComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteButtonComponent_svg_icon_1_Template, 1, 0, "svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoriteButtonComponent_svg_icon_2_Template, 1, 0, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.localActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.localActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]], styles: [".favorite-button-container[_ngcontent-%COMP%] {\n  width: 20px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zhdm9yaXRlLWJ1dHRvbi5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQU07RUFDTixlQUFPO0FBQ1QiLCJmaWxlIjoiZmF2b3JpdGUtYnV0dG9uLmNvbXBvbmVudC5zdHlsIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlLWJ1dHRvbi1jb250YWluZXJcbiAgd2lkdGggMjBweFxuICBjdXJzb3IgcG9pbnRlclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-favorite-button',
                templateUrl: './favorite-button.component.html',
                styleUrls: ['./favorite-button.component.styl']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "anhm":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/drive-capacity-progress-bar/drive-capacity-progress-bar.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: DriveCapacityProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriveCapacityProgressBarComponent", function() { return DriveCapacityProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class DriveCapacityProgressBarComponent {
    constructor(userService) {
        this.userService = userService;
        this.used = 0;
        this.total = 0;
    }
    get barStyle() {
        const percent = 100 - (this.used / this.total) * 100;
        return {
            right: `${percent}%`
        };
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.userService.subUserInfo$.subscribe(value => {
            this.used = value.drive.used;
            this.total = value.drive.total;
        });
    }
}
DriveCapacityProgressBarComponent.ɵfac = function DriveCapacityProgressBarComponent_Factory(t) { return new (t || DriveCapacityProgressBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
DriveCapacityProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriveCapacityProgressBarComponent, selectors: [["app-drive-capacity-progress-bar"]], decls: 12, vars: 3, consts: [[1, "progress-bar-container"], [1, "label-wrapper"], [1, "label-used"], [1, "label-total"], [1, "progress-bar"], [1, "bar", 3, "ngStyle"]], template: function DriveCapacityProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.used);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.barStyle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".progress-bar-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .label-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  transition: ease right 300ms;\n  background: #fff;\n  width: 450px;\n  height: 10px;\n  position: relative;\n}\n.progress-bar-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #556f96;\n  position: absolute;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RyaXZlLWNhcGFjaXR5LXByb2dyZXNzLWJhci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFTO0FBQ1g7QUFDRTtFQUNFLGFBQVE7RUFDUiw4QkFBZ0I7RUFDaEIsbUJBQVk7QUFDaEI7QUFBSTtFQUNFLFNBQU87RUFDUCxlQUFVO0FBRWhCO0FBRE07RUFDRSxpQkFBYTtBQUdyQjtBQURFO0VBQ0UsNEJBQVc7RUFDWCxnQkFBVztFQUNYLFlBQU07RUFDTixZQUFPO0VBQ1Asa0JBQVM7QUFHYjtBQUZJO0VBQ0UsV0FBTTtFQUNOLFlBQU87RUFDUCxtQkFBVztFQUNYLGtCQUFTO0VBQ1QsTUFBSTtBQUlWIiwiZmlsZSI6ImRyaXZlLWNhcGFjaXR5LXByb2dyZXNzLWJhci5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy1iYXItY29udGFpbmVyXG4gIG92ZXJmbG93IGhpZGRlblxuXG4gIC5sYWJlbC13cmFwcGVyXG4gICAgZGlzcGxheSBmbGV4XG4gICAganVzdGlmeS1jb250ZW50IHNwYWNlLWJldHdlZW5cbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICBwXG4gICAgICBtYXJnaW4gMFxuICAgICAgZm9udC1zaXplIDEwcHhcbiAgICAgIHNwYW5cbiAgICAgICAgbWFyZ2luLXJpZ2h0IDhweFxuXG4gIC5wcm9ncmVzcy1iYXJcbiAgICB0cmFuc2l0aW9uIGVhc2UgcmlnaHQgMzAwbXNcbiAgICBiYWNrZ3JvdW5kICNmZmZmZmZcbiAgICB3aWR0aCA0NTBweFxuICAgIGhlaWdodCAxMHB4XG4gICAgcG9zaXRpb24gcmVsYXRpdmVcbiAgICAuYmFyXG4gICAgICB3aWR0aCAxMDAlXG4gICAgICBoZWlnaHQgMTAwJVxuICAgICAgYmFja2dyb3VuZCAjNTU2Rjk2XG4gICAgICBwb3NpdGlvbiBhYnNvbHV0ZVxuICAgICAgdG9wIDBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriveCapacityProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-drive-capacity-progress-bar',
                templateUrl: './drive-capacity-progress-bar.component.html',
                styleUrls: ['./drive-capacity-progress-bar.component.styl']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "cpn4":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: initTableRow, FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTableRow", function() { return initTableRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/FILE_TYPE */ "E3WU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






const { apiUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
const initTableRow = () => ({
    id: -1,
    favorite: false,
    trash: false,
    name: '',
    updateTime: new Date(),
    type: _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_3__["FILE_TYPE"].FOLDER,
    owner: '',
    size: 0,
    content: ''
});
class FileService {
    constructor(http) {
        this.http = http;
        this.files = [];
        this.file = null;
        this.complete = [];
        this.content = initTableRow();
        this.isOpen = false;
        this.subFiles$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.files);
        this.subFile$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.file);
        this.subComplete$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.complete);
        this.subContent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.content);
        this.subIsPopupOpen$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.isOpen);
    }
    fetchMain(type) {
        this.http.get(`${apiUrl}/files/main/${type}`)
            .subscribe(value => this.subFiles$.next(value));
    }
    fetchFile(id) {
        this.http.get(`${apiUrl}/files/file/${id}`)
            .subscribe(value => this.subFile$.next(value));
    }
    fetchFolder(id) {
        this.http.get(`${apiUrl}/files/file/${id}`)
            .subscribe(value => this.subFiles$.next(value.content));
    }
    fetchContent(id) {
        this.http.get(`${apiUrl}/files/file/${id}`)
            .subscribe(value => this.subContent$.next(value));
    }
    postFavorite(body) {
        this.http.post(`${apiUrl}/files/favorite`, body).subscribe();
    }
    postComplete(body) {
        this.http.post(`${apiUrl}/search/complete`, body)
            .subscribe(value => this.subComplete$.next(value));
    }
    postSearch(body) {
        this.http.post(`${apiUrl}/search`, body)
            .subscribe(value => this.subFiles$.next(value));
    }
    setIsOpen(isOpen) {
        this.subIsPopupOpen$.next(isOpen);
    }
}
FileService.ɵfac = function FileService_Factory(t) { return new (t || FileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
FileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FileService, factory: FileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ec3T":
/*!***********************************************!*\
  !*** ./src/app/services/navigator.service.ts ***!
  \***********************************************/
/*! exports provided: TAB_TYPE, TAB_TYPE_TO_TAB_NAME, TAB_NAME_TO_TAB_TYPE, TOGGLE_TYPE, NavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_TYPE", function() { return TAB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_TYPE_TO_TAB_NAME", function() { return TAB_TYPE_TO_TAB_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_NAME_TO_TAB_TYPE", function() { return TAB_NAME_TO_TAB_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TYPE", function() { return TOGGLE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorService", function() { return NavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



var TAB_TYPE;
(function (TAB_TYPE) {
    TAB_TYPE[TAB_TYPE["PRIVATE"] = 0] = "PRIVATE";
    TAB_TYPE[TAB_TYPE["PUBLIC"] = 1] = "PUBLIC";
    TAB_TYPE[TAB_TYPE["IMPORTANT"] = 2] = "IMPORTANT";
    TAB_TYPE[TAB_TYPE["TRASH"] = 3] = "TRASH";
    TAB_TYPE[TAB_TYPE["NONE"] = 4] = "NONE";
})(TAB_TYPE || (TAB_TYPE = {}));
const TAB_TYPE_TO_TAB_NAME = {
    [TAB_TYPE.PRIVATE]: '我的抽屜',
    [TAB_TYPE.PUBLIC]: '公用抽屜',
    [TAB_TYPE.IMPORTANT]: '重要抽屜',
    [TAB_TYPE.TRASH]: '垃圾桶',
    [TAB_TYPE.NONE]: ''
};
const TAB_NAME_TO_TAB_TYPE = {
    [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.PRIVATE]]: TAB_TYPE.PRIVATE,
    [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.PUBLIC]]: TAB_TYPE.PUBLIC,
    [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.IMPORTANT]]: TAB_TYPE.IMPORTANT,
    [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.TRASH]]: TAB_TYPE.TRASH,
    [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.NONE]]: TAB_TYPE.NONE,
};
var TOGGLE_TYPE;
(function (TOGGLE_TYPE) {
    TOGGLE_TYPE[TOGGLE_TYPE["LIST"] = 0] = "LIST";
    TOGGLE_TYPE[TOGGLE_TYPE["GRID"] = 1] = "GRID";
})(TOGGLE_TYPE || (TOGGLE_TYPE = {}));
class NavigatorService {
    constructor() {
        this.tab = TAB_TYPE.PRIVATE;
        this.toggle = TOGGLE_TYPE.LIST;
        this.paths = [TAB_TYPE_TO_TAB_NAME[TAB_TYPE.PRIVATE]];
        this.subTab$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tab);
        this.subToggle$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.toggle);
        this.subPaths$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.paths);
    }
    setTab(value) {
        this.subTab$.next(value);
    }
    setToggle(value) {
        this.subToggle$.next(value);
    }
    setPaths(value) {
        this.subPaths$.next(value);
    }
}
NavigatorService.ɵfac = function NavigatorService_Factory(t) { return new (t || NavigatorService)(); };
NavigatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigatorService, factory: NavigatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "gi6I":
/*!*******************************************************!*\
  !*** ./src/app/components/avatar/avatar.component.ts ***!
  \*******************************************************/
/*! exports provided: AvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarComponent", function() { return AvatarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "qfBg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class AvatarComponent {
    constructor(userService) {
        this.userService = userService;
        this.name = '';
        this.avatarUrl = '';
    }
    get imageStyle() {
        return {
            backgroundImage: `url(${this.avatarUrl})`
        };
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.userService.subUserInfo$.subscribe(value => {
            this.name = value.name;
            this.avatarUrl = value.avatarUrl;
        });
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AvatarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["app-avatar"]], decls: 5, vars: 2, consts: [[1, "avatar-wrapper"], [1, "avatar-container"], [1, "image", 3, "ngStyle"], [1, "name"]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.imageStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".avatar-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 44px;\n  border-radius: 50%;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n.avatar-wrapper[_ngcontent-%COMP%]   .avatar-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 8px 0 0;\n  font-size: 10px;\n  font-weight: 800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2F2YXRhci5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQVE7RUFDUix5QkFBZ0I7RUFDaEIsbUJBQVk7QUFDZDtBQUNFO0VBQ0UsYUFBUTtFQUNSLHNCQUFlO0VBQ2YsdUJBQWdCO0VBQ2hCLG1CQUFZO0FBQ2hCO0FBQ0k7RUFDRSxXQUFNO0VBQ04sWUFBTztFQUNQLGtCQUFjO0VBQ2QsNEJBQWtCO0VBQ2xCLDJCQUFvQjtFQUNwQixzQkFBZ0I7QUFDdEI7QUFDSTtFQUNFLGtCQUFXO0VBQ1gsZUFBTztFQUNQLGVBQVU7RUFDVixnQkFBWTtBQUNsQiIsImZpbGUiOiJhdmF0YXIuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuYXZhdGFyLXdyYXBwZXJcbiAgZGlzcGxheSBmbGV4XG4gIGp1c3RpZnktY29udGVudCBmbGV4LWVuZFxuICBhbGlnbi1pdGVtcyBjZW50ZXJcblxuICAuYXZhdGFyLWNvbnRhaW5lclxuICAgIGRpc3BsYXkgZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uIGNvbHVtblxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcblxuICAgIC5pbWFnZVxuICAgICAgd2lkdGggNDVweFxuICAgICAgaGVpZ2h0IDQ0cHhcbiAgICAgIGJvcmRlci1yYWRpdXMgNTAlXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdCBuby1yZXBlYXRcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb24gY2VudGVyXG4gICAgICBiYWNrZ3JvdW5kLXNpemUgY292ZXJcblxuICAgIC5uYW1lXG4gICAgICB0ZXh0LWFsaWduIGNlbnRlclxuICAgICAgbWFyZ2luIDhweCAwIDBcbiAgICAgIGZvbnQtc2l6ZSAxMHB4XG4gICAgICBmb250LXdlaWdodCA4MDBcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvatarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-avatar',
                templateUrl: './avatar.component.html',
                styleUrls: ['./avatar.component.styl']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "hU0S":
/*!*******************************************************************!*\
  !*** ./src/app/components/arrow-button/arrow-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArrowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowButtonComponent", function() { return ArrowButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");



class ArrowButtonComponent {
    constructor() {
        this.active = false;
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onClick() {
        this.clickEvent.emit(!this.active);
    }
}
ArrowButtonComponent.ɵfac = function ArrowButtonComponent_Factory(t) { return new (t || ArrowButtonComponent)(); };
ArrowButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArrowButtonComponent, selectors: [["app-arrow-button"]], inputs: { active: "active" }, outputs: { clickEvent: "clickEvent" }, decls: 1, vars: 2, consts: [["src", "assets/down-arrow.svg", 1, "arrow-button-container", 3, "click"]], template: function ArrowButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArrowButtonComponent_Template_svg_icon_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_1__["SvgIconComponent"]], styles: [".arrow-button-container[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.arrow-button-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(0deg) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fycm93LWJ1dHRvbi5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQU87QUFDVDtBQUFFO0VBQ0UseUJBQVU7QUFFZDtBQUFFO0VBQ0Usa0NBQVU7QUFFZCIsImZpbGUiOiJhcnJvdy1idXR0b24uY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJyb3ctYnV0dG9uLWNvbnRhaW5lclxuICBjdXJzb3IgcG9pbnRlclxuICBzdmdcbiAgICB0cmFuc2Zvcm0gcm90YXRlKDE4MGRlZylcbi5hY3RpdmVcbiAgc3ZnXG4gICAgdHJhbnNmb3JtIHJvdGF0ZSgwZGVnKSAhaW1wb3J0YW50XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArrowButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-arrow-button',
                templateUrl: './arrow-button.component.html',
                styleUrls: ['./arrow-button.component.styl']
            }]
    }], null, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "lCy9":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigator.service */ "ec3T");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SearchBarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onCompleteItemClick(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class SearchBarComponent {
    constructor(fileService, navigatorService) {
        this.fileService = fileService;
        this.navigatorService = navigatorService;
        this.text = '';
        this.complete = [];
        this.records = [];
    }
    get completeStyle() {
        return {
            height: `${this.complete.length * 32}px`
        };
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.fileService.subComplete$.subscribe(value => this.complete = value);
    }
    addRecord(text) {
        if (!this.records.some(word => word === text)) {
            this.records.push(text);
        }
    }
    onType(e) {
        // @ts-ignore
        const value = e.target.value;
        this.text = value;
        if (!value) {
            this.complete = [];
            return;
        }
        this.fileService.postComplete({ text: value });
    }
    onEnter() {
        this.addRecord(this.text);
        this.navigatorService.setPaths([]);
        this.navigatorService.setTab(_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].NONE);
        this.fileService.postSearch({ text: this.text });
    }
    onCompleteItemClick(text) {
        this.text = text;
        this.complete = [];
        this.addRecord(this.text);
        this.navigatorService.setPaths([]);
        this.navigatorService.setTab(_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE"].NONE);
        this.fileService.postSearch({ text });
    }
    onMoreClick() {
        if (this.complete.length) {
            this.complete = [];
        }
        else {
            this.complete = this.records;
        }
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"])); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 10, vars: 5, consts: [[1, "search-bar-container"], [1, "search-button"], ["src", "assets/search.svg"], [1, "input-container"], ["type", "text", 1, "input", 3, "value", "input", "keydown.enter"], [1, "complete-container", 3, "ngStyle"], ["class", "complete-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "draw-button", 3, "click"], ["src", "assets/down-arrow.svg"], [1, "complete-item", 3, "click"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchBarComponent_Template_input_input_5_listener($event) { return ctx.onType($event); })("keydown.enter", function SearchBarComponent_Template_input_keydown_enter_5_listener() { return ctx.onEnter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SearchBarComponent_div_7_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchBarComponent_Template_div_click_8_listener() { return ctx.onMoreClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "svg-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.complete.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.completeStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.complete);
    } }, directives: [angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".search-bar-container[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.search-bar-container[_ngcontent-%COMP%]   .search-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #556f96;\n  cursor: pointer;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 32px;\n  border: unset;\n  font-size: 18px;\n  padding: 0 5px;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]:focus {\n  outline: unset;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .complete-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  transition: ease height 250ms;\n  position: absolute;\n  width: 100%;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  background: #fff;\n  overflow: hidden;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .complete-container[_ngcontent-%COMP%]   .complete-item[_ngcontent-%COMP%] {\n  padding: 5px;\n  cursor: pointer;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .complete-container[_ngcontent-%COMP%]   .complete-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.search-bar-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .complete-container[_ngcontent-%COMP%]   .complete-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n.search-bar-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  border-top: 1px solid #000;\n  border-right: 1px solid #000;\n  border-left: 1px solid #000;\n}\n.search-bar-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .complete-container[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #000;\n  border-right: 1px solid #000;\n  border-left: 1px solid #000;\n}\n.search-bar-container[_ngcontent-%COMP%]   .draw-button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #d9d9d9;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaC1iYXIuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBVztFQUNYLGFBQVE7RUFDUiw4QkFBZ0I7RUFDaEIsbUJBQVk7QUFDZDtBQUNFO0VBQ0UsV0FBTTtFQUNOLFlBQU87RUFDUCxhQUFRO0VBQ1IsdUJBQWdCO0VBQ2hCLG1CQUFZO0VBQ1osbUJBQVc7RUFDWCxlQUFPO0FBQ1g7QUFDRTtFQUNFLGtCQUFTO0VBQ1QsT0FBSztBQUNUO0FBQ007RUFDRSxzQkFBVztFQUNYLFdBQU07RUFDTixZQUFPO0VBQ1AsYUFBTztFQUNQLGVBQVU7RUFDVixjQUFRO0FBQ2hCO0FBQVE7RUFDRSxjQUFRO0FBRWxCO0FBREk7RUFDRSxzQkFBVztFQUNYLDZCQUFXO0VBQ1gsa0JBQVM7RUFDVCxXQUFNO0VBQ04sU0FBSTtFQUNKLE9BQUs7RUFDTCxRQUFNO0VBQ04sV0FBUTtFQUNSLGdCQUFXO0VBQ1gsZ0JBQVM7QUFHZjtBQUZNO0VBQ0UsWUFBUTtFQUNSLGVBQU87QUFJZjtBQUhRO0VBQ0UsbUJBQVc7QUFLckI7QUFKUTtFQUNFLFNBQU87RUFDUCxlQUFVO0FBTXBCO0FBSE07RUFDRSwwQkFBVztFQUNYLDRCQUFhO0VBQ2IsMkJBQVk7QUFLcEI7QUFKSTtFQUNFLDZCQUFjO0VBQ2QsNEJBQWE7RUFDYiwyQkFBWTtBQU1sQjtBQUpFO0VBQ0UsV0FBTTtFQUNOLFlBQU87RUFDUCxhQUFRO0VBQ1IsdUJBQWdCO0VBQ2hCLG1CQUFZO0VBQ1osbUJBQVc7RUFDWCxlQUFPO0FBTVgiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtYmFyLWNvbnRhaW5lclxuICBtYXJnaW4tdG9wIDE1cHhcbiAgZGlzcGxheSBmbGV4XG4gIGp1c3RpZnktY29udGVudCBzcGFjZS1iZXR3ZWVuXG4gIGFsaWduLWl0ZW1zIGNlbnRlclxuXG4gIC5zZWFyY2gtYnV0dG9uXG4gICAgd2lkdGggMzJweFxuICAgIGhlaWdodCAzMnB4XG4gICAgZGlzcGxheSBmbGV4XG4gICAganVzdGlmeS1jb250ZW50IGNlbnRlclxuICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgIGJhY2tncm91bmQgIzU1NkY5NlxuICAgIGN1cnNvciBwb2ludGVyXG5cbiAgLmlucHV0LWNvbnRhaW5lclxuICAgIHBvc2l0aW9uIHJlbGF0aXZlXG4gICAgZmxleCAxXG4gICAgbGFiZWxcbiAgICAgIC5pbnB1dFxuICAgICAgICBib3gtc2l6aW5nIGJvcmRlci1ib3hcbiAgICAgICAgd2lkdGggMTAwJVxuICAgICAgICBoZWlnaHQgMzJweFxuICAgICAgICBib3JkZXIgdW5zZXRcbiAgICAgICAgZm9udC1zaXplIDE4cHhcbiAgICAgICAgcGFkZGluZyAwIDVweFxuICAgICAgICAmOmZvY3VzXG4gICAgICAgICAgb3V0bGluZSB1bnNldFxuICAgIC5jb21wbGV0ZS1jb250YWluZXJcbiAgICAgIGJveC1zaXppbmcgYm9yZGVyLWJveFxuICAgICAgdHJhbnNpdGlvbiBlYXNlIGhlaWdodCAyNTBtc1xuICAgICAgcG9zaXRpb24gYWJzb2x1dGVcbiAgICAgIHdpZHRoIDEwMCVcbiAgICAgIHRvcCAxMDAlXG4gICAgICBsZWZ0IDBcbiAgICAgIHJpZ2h0IDBcbiAgICAgIHotaW5kZXggOTlcbiAgICAgIGJhY2tncm91bmQgd2hpdGVcbiAgICAgIG92ZXJmbG93IGhpZGRlblxuICAgICAgLmNvbXBsZXRlLWl0ZW1cbiAgICAgICAgcGFkZGluZyA1cHhcbiAgICAgICAgY3Vyc29yIHBvaW50ZXJcbiAgICAgICAgJjpob3ZlclxuICAgICAgICAgIGJhY2tncm91bmQgI0Y1RjVGNVxuICAgICAgICBwXG4gICAgICAgICAgbWFyZ2luIDBcbiAgICAgICAgICBmb250LXNpemUgMThweFxuICAuYWN0aXZlXG4gICAgbGFiZWxcbiAgICAgIC5pbnB1dFxuICAgICAgICBib3JkZXItdG9wIDFweCBzb2xpZCBibGFja1xuICAgICAgICBib3JkZXItcmlnaHQgMXB4IHNvbGlkIGJsYWNrXG4gICAgICAgIGJvcmRlci1sZWZ0IDFweCBzb2xpZCBibGFja1xuICAgIC5jb21wbGV0ZS1jb250YWluZXJcbiAgICAgIGJvcmRlci1ib3R0b20gMXB4IHNvbGlkIGJsYWNrXG4gICAgICBib3JkZXItcmlnaHQgMXB4IHNvbGlkIGJsYWNrXG4gICAgICBib3JkZXItbGVmdCAxcHggc29saWQgYmxhY2tcblxuICAuZHJhdy1idXR0b25cbiAgICB3aWR0aCAzMnB4XG4gICAgaGVpZ2h0IDMycHhcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQgY2VudGVyXG4gICAgYWxpZ24taXRlbXMgY2VudGVyXG4gICAgYmFja2dyb3VuZCAjRDlEOUQ5XG4gICAgY3Vyc29yIHBvaW50ZXJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.styl']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "m4bG":
/*!***************************************************!*\
  !*** ./src/app/components/grid/grid.component.ts ***!
  \***************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/FILE_TYPE */ "E3WU");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/navigator.service */ "ec3T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _grid_folder_grid_folder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../grid-folder/grid-folder.component */ "95mk");
/* harmony import */ var _grid_file_grid_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../grid-file/grid-file.component */ "yB5P");








function GridComponent_div_1_app_grid_folder_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-grid-folder", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GridComponent_div_1_app_grid_folder_4_Template_app_grid_folder_clickEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onFolderClick($event); })("doubleClickEvent", function GridComponent_div_1_app_grid_folder_4_Template_app_grid_folder_doubleClickEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onFolderDoubleClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", folder_r3);
} }
function GridComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u8CC7\u6599\u593E ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridComponent_div_1_app_grid_folder_4_Template, 1, 1, "app-grid-folder", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.folders);
} }
function GridComponent_div_2_app_grid_file_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-grid-file", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickEvent", function GridComponent_div_2_app_grid_file_4_Template_app_grid_file_clickEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.onFileClick($event); })("doubleClickEvent", function GridComponent_div_2_app_grid_file_4_Template_app_grid_file_doubleClickEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.onFileDoubleClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", file_r8);
} }
function GridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u6A94\u6848 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridComponent_div_2_app_grid_file_4_Template, 1, 1, "app-grid-file", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.files);
} }
class GridComponent {
    constructor(fileService, navigatorService) {
        this.fileService = fileService;
        this.navigatorService = navigatorService;
        this.filesData = [];
        this.paths = [];
    }
    get folders() {
        return this.filesData.filter(file => file.type === _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE"].FOLDER);
    }
    get files() {
        return this.filesData.filter(file => file.type !== _utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_1__["FILE_TYPE"].FOLDER);
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.fileService.subFiles$.subscribe(value => this.filesData = value);
        this.navigatorService.subPaths$.subscribe(value => this.paths = value);
    }
    onFolderClick(row) {
        this.fileService.fetchFile(row.id);
    }
    onFolderDoubleClick(row) {
        this.navigatorService.setPaths([...this.paths, row.name]);
        this.fileService.fetchFolder(row.id);
    }
    onFileClick(row) {
        this.fileService.fetchFile(row.id);
    }
    onFileDoubleClick(row) {
        this.fileService.fetchContent(row.id);
        this.fileService.setIsOpen(true);
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"])); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 3, vars: 2, consts: [[1, "grid-container"], ["class", "folder-container", 4, "ngIf"], ["class", "file-container", 4, "ngIf"], [1, "folder-container"], [1, "label"], [1, "folder-wrapper"], [3, "data", "clickEvent", "doubleClickEvent", 4, "ngFor", "ngForOf"], [3, "data", "clickEvent", "doubleClickEvent"], [1, "file-container"], [1, "file-wrapper"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridComponent_div_2_Template, 5, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.folders.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.files.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _grid_folder_grid_folder_component__WEBPACK_IMPORTED_MODULE_5__["GridFolderComponent"], _grid_file_grid_file_component__WEBPACK_IMPORTED_MODULE_6__["GridFileComponent"]], styles: [".grid-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid-container[_ngcontent-%COMP%]   .folder-container[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n  border-bottom: 2px solid #f5f5f5;\n}\n.grid-container[_ngcontent-%COMP%]   .folder-container[_ngcontent-%COMP%]   .folder-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.grid-container[_ngcontent-%COMP%]   .folder-container[_ngcontent-%COMP%]   .folder-wrapper[_ngcontent-%COMP%]   app-grid-folder[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n.grid-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   .file-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.grid-container[_ngcontent-%COMP%]   .file-container[_ngcontent-%COMP%]   .file-wrapper[_ngcontent-%COMP%]   app-grid-file[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyaWQuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFNO0FBQ1I7QUFBRTtFQUNFLG1CQUFlO0VBQ2YsZ0NBQWM7QUFFbEI7QUFESTtFQUNFLGFBQVE7RUFDUixlQUFVO0FBR2hCO0FBRk07RUFDRSxXQUFPO0FBSWY7QUFGSTtFQUNFLGFBQVE7RUFDUixlQUFVO0FBSWhCO0FBSE07RUFDRSxXQUFPO0FBS2YiLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lclxuICB3aWR0aCAxMDAlXG4gIC5mb2xkZXItY29udGFpbmVyXG4gICAgcGFkZGluZy1ib3R0b20gOHB4XG4gICAgYm9yZGVyLWJvdHRvbSAycHggc29saWQgI0Y1RjVGNVxuICAgIC5mb2xkZXItd3JhcHBlclxuICAgICAgZGlzcGxheSBmbGV4XG4gICAgICBmbGV4LXdyYXAgd3JhcFxuICAgICAgYXBwLWdyaWQtZm9sZGVyXG4gICAgICAgIG1hcmdpbiA1cHhcbiAgLmZpbGUtY29udGFpbmVyXG4gICAgLmZpbGUtd3JhcHBlclxuICAgICAgZGlzcGxheSBmbGV4XG4gICAgICBmbGV4LXdyYXAgd3JhcFxuICAgICAgYXBwLWdyaWQtZmlsZVxuICAgICAgICBtYXJnaW4gNXB4XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.styl']
            }]
    }], function () { return [{ type: _services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "o5g6":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    onClick() {
        console.log('logo click');
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 34, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "width", "130", "height", "75.445", "viewBox", "0 0 130 75.445", 1, "logo-svg", 3, "click"], ["id", "logo", "transform", "translate(-257.539 -85.744)"], ["id", "Path_8", "data-name", "Path 8", "d", "M387.778,105.365l-74.9,15.4L260.4,104.014l72.426-15.223Z", "transform", "translate(-0.995 -1.062)", "fill", "#fff"], ["id", "Group_27", "data-name", "Group 27", "transform", "translate(257.54 101.666)"], ["id", "Path_9", "data-name", "Path 9", "d", "M309.725,169.26,259.04,152.093v-40.4l50.685,17.167Z", "transform", "translate(-258.062 -110.714)", "fill", "#fff"], ["id", "Path_10", "data-name", "Path 10", "d", "M309.2,169.715a.975.975,0,0,1-.313-.051L258.2,152.5a.977.977,0,0,1-.664-.926v-40.4a.978.978,0,0,1,1.291-.926l50.684,17.167a.977.977,0,0,1,.665.926v40.4a.978.978,0,0,1-.977.978ZM259.5,150.87l48.73,16.5V129.037l-48.73-16.5Z", "transform", "translate(-257.54 -110.192)", "fill", "#556f96"], ["id", "Group_28", "data-name", "Group 28", "transform", "translate(257.539 85.744)"], ["id", "Path_11", "data-name", "Path 11", "d", "M311.828,121.692a.969.969,0,0,1-.316-.053L258.2,103.4a.978.978,0,0,1,.111-1.881l73.351-15.758a.983.983,0,0,1,.49.02l54.693,16.63a.978.978,0,0,1-.063,1.887l-74.734,17.363A.969.969,0,0,1,311.828,121.692Zm-49.661-19,49.712,17,70.906-16.474-50.959-15.5Z", "transform", "translate(-257.539 -85.744)", "fill", "#556f96"], ["id", "Group_29", "data-name", "Group 29", "transform", "translate(330.892 86.721)"], ["id", "Rectangle_15", "data-name", "Rectangle 15", "width", "1.955", "height", "37.375", "fill", "#556f96"], ["id", "Group_30", "data-name", "Group 30", "transform", "translate(309.236 134.266)"], ["id", "Path_12", "data-name", "Path 12", "d", "M343.4,167.972a2.243,2.243,0,0,0,.446-1.354v-3.482a1.458,1.458,0,0,0-.431-1.161,1.257,1.257,0,0,0-1.155-.214l-3.787.884a.1.1,0,0,0-.091.111V169.5c0,.06.03.084.091.071l3.8-.882A1.877,1.877,0,0,0,343.4,167.972Z", "transform", "translate(-337.404 -160.736)", "fill", "#fff"], ["id", "Path_13", "data-name", "Path 13", "d", "M337.921,170.026a1.034,1.034,0,0,1-.654-.227,1.05,1.05,0,0,1-.386-.823v-6.742a1.086,1.086,0,0,1,.858-1.065l3.776-.882a2.2,2.2,0,0,1,2.019.428,2.392,2.392,0,0,1,.767,1.9V166.1a3.226,3.226,0,0,1-.646,1.947h0a2.84,2.84,0,0,1-1.694,1.076l-3.79.879A1.174,1.174,0,0,1,337.921,170.026Zm.915-7.106v4.918l2.7-.625a.907.907,0,0,0,.569-.356,1.282,1.282,0,0,0,.245-.779v-3.464a.637.637,0,0,0-.094-.423.471.471,0,0,0-.3,0Zm4.042,4.531h0Zm-4.688-4.38-.018,0Z", "transform", "translate(-336.881 -160.215)", "fill", "#fff"], ["id", "Path_14", "data-name", "Path 14", "d", "M414.287,111.481a.978.978,0,0,0-.818-.2l-77.377,16.509a.977.977,0,0,0-.774.956v40.361a.977.977,0,0,0,.977.978,1,1,0,0,0,.231-.027l77.377-18.78a.977.977,0,0,0,.747-.95v-38.09A.978.978,0,0,0,414.287,111.481Z", "transform", "translate(-27.11 -8.899)", "fill", "#556f96"], ["id", "Group_31", "data-name", "Group 31", "transform", "translate(321.094 130.894)"], ["id", "Path_15", "data-name", "Path 15", "d", "M360.636,165.366l-1.857-3.728a.085.085,0,0,0-.106-.053l-1.375.3a.1.1,0,0,0-.09.111v4.053a.293.293,0,0,1-.257.314l-1.616.351c-.171.037-.256-.03-.256-.2V156.4a.293.293,0,0,1,.256-.314l4.244-.942a3.186,3.186,0,0,1,1.7.026,2.038,2.038,0,0,1,1.133.882,2.936,2.936,0,0,1,.4,1.585,3.616,3.616,0,0,1-.514,1.894,3.72,3.72,0,0,1-1.419,1.361.125.125,0,0,0-.061.067.053.053,0,0,0,.015.065l1.995,3.763a.188.188,0,0,1,.044.127.184.184,0,0,1-.06.135.335.335,0,0,1-.167.081l-1.707.371A.26.26,0,0,1,360.636,165.366Zm-3.427-7.755v2.55c0,.061.029.085.09.071l1.963-.431a1.859,1.859,0,0,0,1.035-.6,1.581,1.581,0,0,0,.4-1.069,1.059,1.059,0,0,0-.4-.907,1.22,1.22,0,0,0-1.035-.159l-1.963.434A.1.1,0,0,0,357.209,157.61Z", "transform", "translate(-355.079 -155.04)", "fill", "#fff"], ["id", "Group_32", "data-name", "Group 32", "transform", "translate(330.755 128.726)"], ["id", "Path_16", "data-name", "Path 16", "d", "M376.9,161.92l-.423-1.328a.066.066,0,0,0-.091-.057l-3.7.806a.111.111,0,0,0-.091.1l-.423,1.51a.375.375,0,0,1-.287.275l-1.752.381a.185.185,0,0,1-.2-.041.2.2,0,0,1-.016-.2l3.217-10.87a.381.381,0,0,1,.287-.278l2.22-.493a.223.223,0,0,1,.287.151l3.217,9.484a.2.2,0,0,1,.015.089.229.229,0,0,1-.06.158.31.31,0,0,1-.167.09l-1.751.38A.224.224,0,0,1,376.9,161.92Zm-3.7-2.353,2.673-.585c.061-.013.085-.054.076-.123l-1.359-4.356c-.01-.038-.028-.055-.053-.05s-.048.031-.068.076l-1.344,4.947C373.118,159.551,373.144,159.581,373.2,159.568Z", "transform", "translate(-369.907 -151.711)", "fill", "#fff"], ["id", "Group_33", "data-name", "Group 33", "transform", "translate(340.247 124.81)"], ["id", "Path_17", "data-name", "Path 17", "d", "M387.149,158.319l-2.658-9.6a.146.146,0,0,1-.015-.073.262.262,0,0,1,.242-.268l1.721-.382a.2.2,0,0,1,.272.169l1.42,5.793c.01.038.031.055.061.048s.05-.031.06-.075l1.359-6.409a.334.334,0,0,1,.272-.29l1.707-.379c.16-.036.256.02.286.166l1.48,5.793c.01.038.027.055.053.05s.042-.029.053-.073l1.359-6.423a.334.334,0,0,1,.272-.291l1.646-.365c.091-.02.153-.006.189.042a.243.243,0,0,1,.022.2l-2.431,10.762a.343.343,0,0,1-.287.292l-1.662.361c-.161.035-.256-.021-.287-.167l-1.51-6.184c-.01-.039-.03-.055-.061-.048s-.05.031-.061.075l-1.4,6.817a.333.333,0,0,1-.272.289l-1.54.334C387.274,158.521,387.179,158.465,387.149,158.319Z", "transform", "translate(-384.476 -145.701)", "fill", "#fff"], ["id", "Group_34", "data-name", "Group 34", "transform", "translate(354.491 122.289)"], ["id", "Path_18", "data-name", "Path 18", "d", "M413.418,143.709l-4.863,1.075a.1.1,0,0,0-.091.113v2.354c0,.061.03.085.091.072l3.157-.695c.171-.038.256.031.256.205v1.341a.3.3,0,0,1-.256.319l-3.157.691a.1.1,0,0,0-.091.112v2.462c0,.062.03.086.091.073l4.863-1.06c.17-.038.256.031.256.206v1.342a.3.3,0,0,1-.256.318l-6.827,1.483c-.171.037-.256-.031-.256-.206V143.677a.3.3,0,0,1,.256-.318l6.827-1.515c.17-.038.256.031.256.205v1.342A.3.3,0,0,1,413.418,143.709Z", "transform", "translate(-406.335 -141.833)", "fill", "#fff"], ["id", "Group_35", "data-name", "Group 35", "transform", "translate(363.958 120.149)"], ["id", "Path_19", "data-name", "Path 19", "d", "M426.427,149.056l-1.858-3.8a.085.085,0,0,0-.106-.054l-1.374.3a.1.1,0,0,0-.091.113v4.124a.3.3,0,0,1-.257.318l-1.615.351c-.171.037-.257-.031-.257-.207V139.909a.3.3,0,0,1,.257-.319l4.244-.942a3.142,3.142,0,0,1,1.7.033,2.062,2.062,0,0,1,1.133.9,3.041,3.041,0,0,1,.4,1.615,3.727,3.727,0,0,1-1.934,3.3.13.13,0,0,0-.061.068.054.054,0,0,0,.015.066l1.994,3.837a.2.2,0,0,1-.015.267.331.331,0,0,1-.166.082l-1.707.371A.258.258,0,0,1,426.427,149.056ZM423,141.151v2.595c0,.062.03.086.091.073l1.963-.432a1.842,1.842,0,0,0,1.035-.606,1.621,1.621,0,0,0,.4-1.086,1.091,1.091,0,0,0-.4-.925,1.2,1.2,0,0,0-1.035-.166l-1.963.435A.1.1,0,0,0,423,141.151Z", "transform", "translate(-420.869 -138.548)", "fill", "#fff"], ["id", "Group_36", "data-name", "Group 36", "transform", "translate(262.231 121.272)"], ["id", "Path_20", "data-name", "Path 20", "d", "M266.525,149.917a5.091,5.091,0,0,1-1.325-1.677,4.466,4.466,0,0,1-.461-2.005l.014-3.374a2.884,2.884,0,0,1,.475-1.709,2.058,2.058,0,0,1,1.336-.826,4.118,4.118,0,0,1,2.006.186,5.981,5.981,0,0,1,1.98,1.037,4.942,4.942,0,0,1,1.326,1.607,4.154,4.154,0,0,1,.468,1.936c0,.089-.079.118-.235.088l-1.565-.391-.059-.018c-.137-.043-.2-.089-.2-.138v-.089a2.229,2.229,0,0,0-.47-1.4,2.455,2.455,0,0,0-1.249-.862,1.435,1.435,0,0,0-1.267.072,1.223,1.223,0,0,0-.48,1.095l-.014,3.527a2.2,2.2,0,0,0,.47,1.381,2.506,2.506,0,0,0,1.264.874,1.414,1.414,0,0,0,1.253-.07,1.207,1.207,0,0,0,.48-1.081.107.107,0,0,1,.067-.1.227.227,0,0,1,.182.021l1.565.572c.165.073.249.124.248.153v.074a2.652,2.652,0,0,1-.483,1.642,2.058,2.058,0,0,1-1.336.778,4.17,4.17,0,0,1-1.983-.212A5.863,5.863,0,0,1,266.525,149.917Z", "transform", "translate(-264.739 -140.271)", "fill", "#556f96"], ["id", "Group_37", "data-name", "Group 37", "transform", "translate(271.315 123.344)"], ["id", "Path_21", "data-name", "Path 21", "d", "M278.679,153.45l.04-9.808q0-.25.249-.173l1.565.489a.317.317,0,0,1,.248.328l-.033,8.2a.113.113,0,0,0,.087.117l4.7,1.5a.321.321,0,0,1,.248.332l-.005,1.29q0,.251-.25.171l-6.6-2.121A.32.32,0,0,1,278.679,153.45Z", "transform", "translate(-278.679 -143.451)", "fill", "#556f96"], ["id", "Group_38", "data-name", "Group 38", "transform", "translate(279.37 126.65)"], ["id", "Path_22", "data-name", "Path 22", "d", "M292.867,158.333a5.37,5.37,0,0,1-1.348-1.763,4.824,4.824,0,0,1-.475-2.119l.012-3.174a3.081,3.081,0,0,1,.491-1.791,2.178,2.178,0,0,1,1.358-.89,3.9,3.9,0,0,1,2.013.161,5.7,5.7,0,0,1,2.024,1.1,5.265,5.265,0,0,1,1.348,1.745,4.791,4.791,0,0,1,.475,2.107l-.012,3.2a3.209,3.209,0,0,1-.491,1.831,2.136,2.136,0,0,1-1.358.9,3.925,3.925,0,0,1-2.027-.182A5.669,5.669,0,0,1,292.867,158.333Zm3.32-.783a1.421,1.421,0,0,0,.5-1.227l.013-3.279a2.583,2.583,0,0,0-.484-1.548,2.476,2.476,0,0,0-1.307-.94,1.369,1.369,0,0,0-1.3.121,1.46,1.46,0,0,0-.5,1.235l-.012,3.269a2.538,2.538,0,0,0,.484,1.538,2.487,2.487,0,0,0,1.292.935A1.4,1.4,0,0,0,296.187,157.55Z", "transform", "translate(-291.044 -148.526)", "fill", "#556f96"], ["id", "Group_39", "data-name", "Group 39", "transform", "translate(288.8 128.736)"], ["id", "Path_23", "data-name", "Path 23", "d", "M307.31,162.385a5.188,5.188,0,0,1-1.326-1.692,4.527,4.527,0,0,1-.468-2.029l.027-6.743c0-.169.083-.228.25-.176l1.565.489a.319.319,0,0,1,.248.332l-.027,6.77a2.334,2.334,0,0,0,.471,1.433,2.444,2.444,0,0,0,1.249.888,1.37,1.37,0,0,0,1.252-.087,1.294,1.294,0,0,0,.48-1.133l.027-6.791q0-.255.25-.177l1.565.489a.32.32,0,0,1,.248.334l-.026,6.788a2.939,2.939,0,0,1-.483,1.736,2.1,2.1,0,0,1-1.336.843,3.927,3.927,0,0,1-1.984-.187A5.75,5.75,0,0,1,307.31,162.385Z", "transform", "translate(-305.516 -151.727)", "fill", "#556f96"], ["id", "Path_24", "data-name", "Path 24", "d", "M330.356,168l0-8.411-8.873-2.782c-.165-.052-.249.008-.25.179l-.136,9.819a.343.343,0,0,0,.046.159l-.007.058.065.023a.346.346,0,0,0,.144.1l.529.142,8.488,2.834V168Z", "transform", "translate(-22.144 -24.756)", "fill", "#556f96"], ["id", "Path_25", "data-name", "Path 25", "d", "M344.369,159.721a2.274,2.274,0,0,0-1.322-.835,4.346,4.346,0,0,0-1.986.039l-4.837,1.122-.853.186a.294.294,0,0,0-.257.314V170.6c0,.172.085.239.257.2l.853-.185,4.837-1.105a5.547,5.547,0,0,0,1.986-.833,4.252,4.252,0,0,0,1.322-1.417,3.569,3.569,0,0,0,.468-1.784V161.3A2.557,2.557,0,0,0,344.369,159.721Z", "transform", "translate(-27.029 -25.451)", "fill", "#fff"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogoComponent_Template__svg_svg_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "g", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "g", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "g", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "g", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zdHlsIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.styl']
            }]
    }], null, null); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





const { apiUrl } = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
const initUserInfo = () => ({
    name: '',
    avatarUrl: '',
    drive: {
        used: 0,
        total: 0
    }
});
class UserService {
    constructor(http) {
        this.http = http;
        this.userInfo = initUserInfo();
        this.subUserInfo$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.userInfo);
    }
    fetchUserInfo() {
        this.http.get(apiUrl + '/user')
            .subscribe(value => this.subUserInfo$.next(value));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "t99X":
/*!***************************************************************!*\
  !*** ./src/app/components/breadcrumb/breadcrumb.component.ts ***!
  \***************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigator.service */ "ec3T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");






function BreadcrumbComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "svg-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const path_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](path_r2);
} }
function BreadcrumbComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BreadcrumbComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClick(ctx_r3.paths[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BreadcrumbComponent_div_0_div_4_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.paths[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.paths.slice(1));
} }
class BreadcrumbComponent {
    constructor(navigatorService) {
        this.navigatorService = navigatorService;
        this.paths = [];
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.navigatorService.subPaths$.subscribe(value => this.paths = value);
    }
    onClick(path) {
        const tabType = _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_NAME_TO_TAB_TYPE"][path];
        this.navigatorService.setTab(tabType);
        this.navigatorService.setPaths([_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["TAB_TYPE_TO_TAB_NAME"][tabType]]);
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"])); };
BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 1, vars: 1, consts: [["class", "breadcrumb-container", 4, "ngIf"], [1, "breadcrumb-container"], [1, "basic-text-container", 3, "click"], ["class", "path-text-container", 4, "ngFor", "ngForOf"], [1, "path-text-container"], ["src", "assets/arrow_breadcrumbs.svg"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paths.length >= 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]], styles: [".breadcrumb-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 5px 0;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  font-size: 16px;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .basic-text-container[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .basic-text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .basic-text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #556f96;\n}\n.breadcrumb-container[_ngcontent-%COMP%]   .path-text-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JyZWFkY3J1bWIuY29tcG9uZW50LnN0eWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFRO0VBQ1IsbUJBQVk7RUFDWixjQUFRO0FBQVY7QUFDRTtFQUNFLGFBQU87RUFDUCxlQUFVO0FBQ2Q7QUFBRTtFQUNFLGlCQUFhO0FBRWpCO0FBREk7RUFDRSxlQUFPO0FBR2I7QUFGTTtFQUNFLGNBQU07QUFJZDtBQUhFO0VBQ0UsYUFBUTtFQUNSLG1CQUFZO0VBQ1osaUJBQWE7QUFLakIiLCJmaWxlIjoiYnJlYWRjcnVtYi5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJyZWFkY3J1bWItY29udGFpbmVyXG4gIGRpc3BsYXkgZmxleFxuICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgcGFkZGluZyA1cHggMFxuICBwXG4gICAgbWFyZ2luIDAgNXB4XG4gICAgZm9udC1zaXplIDE2cHhcbiAgLmJhc2ljLXRleHQtY29udGFpbmVyXG4gICAgbWFyZ2luLXJpZ2h0IDVweFxuICAgIHBcbiAgICAgIGN1cnNvciBwb2ludGVyXG4gICAgICAmOmhvdmVyXG4gICAgICAgIGNvbG9yICM1NTZGOTZcbiAgLnBhdGgtdGV4dC1jb250YWluZXJcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICBtYXJnaW4tcmlnaHQgNXB4XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumb',
                templateUrl: './breadcrumb.component.html',
                styleUrls: ['./breadcrumb.component.styl']
            }]
    }], function () { return [{ type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_1__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yB5P":
/*!*************************************************************!*\
  !*** ./src/app/components/grid-file/grid-file.component.ts ***!
  \*************************************************************/
/*! exports provided: GridFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridFileComponent", function() { return GridFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file.service */ "cpn4");
/* harmony import */ var src_app_utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/FILE_TYPE */ "E3WU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-svg-icon */ "OFbc");
/* harmony import */ var _favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../favorite-button/favorite-button.component */ "aVbW");







function GridFileComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r0.data.name);
} }
function GridFileComponent_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "video", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.data.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GridFileComponent_svg_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "svg-icon", 11);
} }
class GridFileComponent {
    constructor() {
        this.data = Object(_services_file_service__WEBPACK_IMPORTED_MODULE_1__["initTableRow"])();
        this.clickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.doubleClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.FILE_TYPE = src_app_utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_2__["FILE_TYPE"];
        this.FILE_TYPE_TO_ICON_PATH_ADAPTER = src_app_utils_FILE_TYPE__WEBPACK_IMPORTED_MODULE_2__["FILE_TYPE_TO_ICON_PATH_ADAPTER"];
    }
    onClick() {
        this.clickEvent.emit(this.data);
    }
    onDoubleClick() {
        this.doubleClickEvent.emit(this.data);
    }
}
GridFileComponent.ɵfac = function GridFileComponent_Factory(t) { return new (t || GridFileComponent)(); };
GridFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridFileComponent, selectors: [["app-grid-file"]], inputs: { data: "data" }, outputs: { clickEvent: "clickEvent", doubleClickEvent: "doubleClickEvent" }, decls: 10, vars: 7, consts: [[1, "grid-file-container", 3, "click", "dblclick"], [1, "top-container"], [3, "src", "alt", 4, "ngIf"], [3, "src", 4, "ngIf"], ["src", "assets/document.svg", 4, "ngIf"], [1, "bottom-container"], [1, "type-icon", 3, "src"], [1, "name"], [3, "active", "id"], [3, "src", "alt"], [3, "src"], ["src", "assets/document.svg"]], template: function GridFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridFileComponent_Template_div_click_0_listener() { return ctx.onClick(); })("dblclick", function GridFileComponent_Template_div_dblclick_0_listener() { return ctx.onDoubleClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridFileComponent_img_2_Template, 1, 2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridFileComponent_video_3_Template, 1, 1, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridFileComponent_svg_icon_4_Template, 1, 0, "svg-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "svg-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-favorite-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.FILE_TYPE.PICTURE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.FILE_TYPE.VIDEO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.type === ctx.FILE_TYPE.DOCUMENT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.FILE_TYPE_TO_ICON_PATH_ADAPTER[ctx.data.type]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.data.favorite)("id", ctx.data.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_4__["SvgIconComponent"], _favorite_button_favorite_button_component__WEBPACK_IMPORTED_MODULE_5__["FavoriteButtonComponent"]], styles: [".grid-file-container[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 1px solid #000;\n  cursor: pointer;\n}\n.grid-file-container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-bottom: 1px solid #f5f5f5;\n  width: 100%;\n  height: 150px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n}\n.grid-file-container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: auto;\n}\n.grid-file-container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.grid-file-container[_ngcontent-%COMP%]   .top-container[_ngcontent-%COMP%]   svg-icon[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n}\n.grid-file-container[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: 5px 15px;\n  width: 200px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.grid-file-container[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   .type-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.grid-file-container[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0 15px 0 0;\n  font-size: 18px;\n  max-width: 130px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyaWQtZmlsZS5jb21wb25lbnQuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQU07RUFDTixzQkFBTztFQUNQLGVBQU87QUFDVDtBQUFFO0VBQ0Usc0JBQVc7RUFDWCxnQ0FBYztFQUNkLFdBQU07RUFDTixhQUFPO0VBQ1AsYUFBUTtFQUNSLHVCQUFnQjtFQUNoQixtQkFBWTtFQUNaLFlBQVE7QUFFWjtBQURJO0VBQ0UsWUFBTztFQUNQLFdBQU07QUFHWjtBQUZJO0VBQ0UsWUFBTztFQUNQLFdBQU07QUFJWjtBQUhJO0VBQ0UsYUFBTztFQUNQLFlBQU07QUFLWjtBQUhFO0VBQ0Usc0JBQVc7RUFDWCxpQkFBUTtFQUNSLFlBQU07RUFDTixZQUFPO0VBQ1AsYUFBUTtFQUNSLDhCQUFnQjtFQUNoQixtQkFBWTtBQUtoQjtBQUpJO0VBQ0Usa0JBQWE7QUFNbkI7QUFMSTtFQUNFLGtCQUFPO0VBQ1AsZUFBVTtFQUNWLGdCQUFVO0VBQ1YsZ0JBQVM7RUFDVCx1QkFBYztFQUNkLG1CQUFZO0FBT2xCIiwiZmlsZSI6ImdyaWQtZmlsZS5jb21wb25lbnQuc3R5bCIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWZpbGUtY29udGFpbmVyXG4gIHdpZHRoIDIwMHB4XG4gIGJvcmRlciAxcHggc29saWQgYmxhY2tcbiAgY3Vyc29yIHBvaW50ZXJcbiAgLnRvcC1jb250YWluZXJcbiAgICBib3gtc2l6aW5nIGJvcmRlci1ib3hcbiAgICBib3JkZXItYm90dG9tIDFweCBzb2xpZCAjRjVGNUY1XG4gICAgd2lkdGggMTAwJVxuICAgIGhlaWdodCAxNTBweFxuICAgIGRpc3BsYXkgZmxleFxuICAgIGp1c3RpZnktY29udGVudCBjZW50ZXJcbiAgICBhbGlnbi1pdGVtcyBjZW50ZXJcbiAgICBwYWRkaW5nIDVweFxuICAgIGltZ1xuICAgICAgaGVpZ2h0IDEwMCVcbiAgICAgIHdpZHRoIGF1dG9cbiAgICB2aWRlb1xuICAgICAgaGVpZ2h0IDEwMCVcbiAgICAgIHdpZHRoIDEwMCVcbiAgICBzdmctaWNvblxuICAgICAgaGVpZ2h0IDEwMHB4XG4gICAgICB3aWR0aCAxMDBweFxuXG4gIC5ib3R0b20tY29udGFpbmVyXG4gICAgYm94LXNpemluZyBib3JkZXItYm94XG4gICAgcGFkZGluZyA1cHggMTVweFxuICAgIHdpZHRoIDIwMHB4XG4gICAgaGVpZ2h0IDUwcHhcbiAgICBkaXNwbGF5IGZsZXhcbiAgICBqdXN0aWZ5LWNvbnRlbnQgc3BhY2UtYmV0d2VlblxuICAgIGFsaWduLWl0ZW1zIGNlbnRlclxuICAgIC50eXBlLWljb25cbiAgICAgIG1hcmdpbi1yaWdodCAxMHB4XG4gICAgLm5hbWVcbiAgICAgIG1hcmdpbiAwIDE1cHggMCAwXG4gICAgICBmb250LXNpemUgMThweFxuICAgICAgbWF4LXdpZHRoIDEzMHB4XG4gICAgICBvdmVyZmxvdyBoaWRkZW5cbiAgICAgIHRleHQtb3ZlcmZsb3cgZWxsaXBzaXNcbiAgICAgIHdoaXRlLXNwYWNlIG5vd3JhcFxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-file',
                templateUrl: './grid-file.component.html',
                styleUrls: ['./grid-file.component.styl']
            }]
    }], null, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], doubleClickEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map