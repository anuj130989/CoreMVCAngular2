(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('angular2-modal'), require('@angular/core'), require('rxjs/operator/combineLatest'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', 'angular2-modal', '@angular/core', 'rxjs/operator/combineLatest', '@angular/common'], factory) :
	(factory((global.angular2Modal = global.angular2Modal || {}, global.angular2Modal.bootstrap = global.angular2Modal.bootstrap || {}),global.angular2Modal,global.ng.core,global.Rx.Observable.prototype,global.ng.common));
}(this, (function (exports,angular2Modal,_angular_core,rxjs_operator_combineLatest,_angular_common) { 'use strict';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DEFAULT_VALUES = {
    dialogClass: 'modal-dialog',
    showClose: false
};
var DEFAULT_SETTERS = [
    'dialogClass',
    'size',
    'showClose'
];
var BSModalContext = (function (_super) {
    __extends(BSModalContext, _super);
    function BSModalContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @return {?}
     */
    BSModalContext.prototype.normalize = function () {
        if (!this.dialogClass) {
            this.dialogClass = DEFAULT_VALUES.dialogClass;
        }
        _super.prototype.normalize.call(this);
    };
    return BSModalContext;
}(angular2Modal.ModalOpenContext));
var BSModalContextBuilder = (function (_super) {
    __extends(BSModalContextBuilder, _super);
    /**
     * @param {?=} defaultValues
     * @param {?=} initialSetters
     * @param {?=} baseType
     */
    function BSModalContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        return _super.call(this, angular2Modal.extend(DEFAULT_VALUES, defaultValues || {}), angular2Modal.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || BSModalContext // https://github.com/Microsoft/TypeScript/issues/7234
        ) || this;
    }
    return BSModalContextBuilder;
}(angular2Modal.ModalOpenContextBuilder));

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BSModalContainer = (function (_super) {
    __extends$1(BSModalContainer, _super);
    /**
     * @param {?} dialog
     * @param {?} el
     * @param {?} renderer
     */
    function BSModalContainer(dialog, el, renderer) {
        var _this = _super.call(this, el, renderer) || this;
        _this.dialog = dialog;
        _this.activateAnimationListener();
        return _this;
    }
    BSModalContainer.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'bs-modal-container',
                    host: {
                        'tabindex': '-1',
                        'role': 'dialog',
                        'class': 'modal fade',
                        'style': 'position: absolute; display: block'
                    },
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    template: "<div [ngClass]=\"dialog.context.dialogClass\" \n      [class.modal-lg]=\"dialog.context.size == 'lg'\"\n      [class.modal-sm]=\"dialog.context.size == 'sm'\">\n  <div class=\"modal-content\" style=\"display:block\" role=\"document\" overlayDialogBoundary>\n    <ng-content></ng-content>\n  </div>    \n</div>"
                },] },
    ];
    /**
     * @nocollapse
     */
    BSModalContainer.ctorParameters = function () { return [
        { type: angular2Modal.DialogRef, },
        { type: _angular_core.ElementRef, },
        { type: _angular_core.Renderer, },
    ]; };
    return BSModalContainer;
}(angular2Modal.BaseDynamicComponent));

var BSMessageModalTitle = (function () {
    /**
     * @param {?} dialog
     */
    function BSMessageModalTitle(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    Object.defineProperty(BSMessageModalTitle.prototype, "titleHtml", {
        /**
         * @return {?}
         */
        get: function () {
            return this.context.titleHtml ? 1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    BSMessageModalTitle.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'modal-title',
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    template: "<div [ngClass]=\"context.headerClass\" [ngSwitch]=\"titleHtml\">\n      <button *ngIf=\"context.showClose\" type=\"button\" class=\"close\" \n              aria-label=\"Close\" (click)=\"dialog.dismiss()\">\n          <span aria-hidden=\"true\">\u00D7</span>\n      </button>\n      <div *ngSwitchCase=\"1\" [innerHtml]=\"context.titleHtml\"></div>\n      <h3 *ngSwitchDefault class=\"modal-title\">{{context.title}}</h3>\n </div>"
                },] },
    ];
    /**
     * @nocollapse
     */
    BSMessageModalTitle.ctorParameters = function () { return [
        { type: angular2Modal.DialogRef, },
    ]; };
    return BSMessageModalTitle;
}());
var BSMessageModalBody = (function () {
    /**
     * @param {?} dialog
     */
    function BSMessageModalBody(dialog) {
        this.dialog = dialog;
        this.context = dialog.context;
    }
    BSMessageModalBody.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'modal-body',
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    styles: [".form-group {\n    margin-top: 10px;\n  }"],
                    template: "<div [ngClass]=\"context.bodyClass\"> \n    <div [innerHtml]=\"context.message\"></div>\n      <div *ngIf=\"context.showInput\" class=\"form-group\">\n        <input autofocus #input\n            name=\"bootstrap\" \n            type=\"text\" \n            class=\"form-control\"\n            [value]=\"context.defaultValue\"\n            (change)=\"context.defaultValue = input.value\"  \n            placeholder=\"{{context.placeholder}}\">\n      </div>\n    </div>\n"
                },] },
    ];
    /**
     * @nocollapse
     */
    BSMessageModalBody.ctorParameters = function () { return [
        { type: angular2Modal.DialogRef, },
    ]; };
    return BSMessageModalBody;
}());
/**
 * Represents the modal footer for storing buttons.
 */
var BSModalFooter = (function () {
    /**
     * @param {?} dialog
     */
    function BSModalFooter(dialog) {
        this.dialog = dialog;
    }
    /**
     * @param {?} btn
     * @param {?} $event
     * @return {?}
     */
    BSModalFooter.prototype.onClick = function (btn, $event) {
        $event.stopPropagation();
        btn.onClick(this, $event);
    };
    BSModalFooter.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'modal-footer',
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    template: "<div [ngClass]=\"dialog.context.footerClass\">\n    <button *ngFor=\"let btn of dialog.context.buttons;\"\n            [ngClass]=\"btn.cssClass\"\n            (click)=\"onClick(btn, $event)\">{{btn.caption}}</button>\n</div>"
                },] },
    ];
    /**
     * @nocollapse
     */
    BSModalFooter.ctorParameters = function () { return [
        { type: angular2Modal.DialogRef, },
    ]; };
    return BSModalFooter;
}());
/**
 * A Component representing a generic bootstrap modal content element.
 *
 * By configuring a MessageModalContext instance you can:
 *
 *  Header:
 *      - Set header container class (default: modal-header)
 *      - Set title text (enclosed in H3 element)
 *      - Set title html (overrides text)
 *
 *  Body:
 *      - Set body container class.  (default: modal-body)
 *      - Set body container HTML.
 *
 *  Footer:
 *      - Set footer class.  (default: modal-footer)
 *      - Set button configuration (from 0 to n)
 */
var BSMessageModal = (function () {
    /**
     * @param {?} dialog
     */
    function BSMessageModal(dialog) {
        this.dialog = dialog;
    }
    BSMessageModal.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'modal-content',
                    encapsulation: _angular_core.ViewEncapsulation.None,
                    template: "<modal-title></modal-title><modal-body></modal-body><modal-footer></modal-footer>"
                },] },
    ];
    /**
     * @nocollapse
     */
    BSMessageModal.ctorParameters = function () { return [
        { type: angular2Modal.DialogRef, },
    ]; };
    return BSMessageModal;
}());

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DEFAULT_VALUES$1 = {
    component: BSMessageModal,
    headerClass: 'modal-header',
    bodyClass: 'modal-body',
    footerClass: 'modal-footer'
};
var DEFAULT_SETTERS$1 = [
    'headerClass',
    'title',
    'titleHtml',
    'bodyClass',
    'footerClass'
];
/**
 * A Preset representing the configuration needed to open MessageModal.
 * This is an abstract implementation with no concrete behaviour.
 * Use derived implementation.
 * @abstract
 */
var MessageModalPresetBuilder = (function (_super) {
    __extends$2(MessageModalPresetBuilder, _super);
    /**
     * @param {?=} defaultValues
     * @param {?=} initialSetters
     * @param {?=} baseType
     */
    function MessageModalPresetBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        var _this = _super.call(this, angular2Modal.extend(angular2Modal.extend({ buttons: [] }, DEFAULT_VALUES$1), defaultValues || {}), angular2Modal.arrayUnion(DEFAULT_SETTERS$1, initialSetters || []), baseType) || this;
        angular2Modal.setAssignAlias(_this, 'body', 'message', true);
        return _this;
    }
    /**
     * @param {?} css
     * @param {?} caption
     * @param {?} onClick
     * @return {?}
     */
    MessageModalPresetBuilder.prototype.addButton = function (css, caption, onClick) {
        var /** @type {?} */ btn = {
            cssClass: css,
            caption: caption,
            onClick: onClick
        };
        var /** @type {?} */ key = angular2Modal.privateKey('buttons');
        ((this[key])).push(btn);
        return this;
    };
    return MessageModalPresetBuilder;
}(BSModalContextBuilder));

var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * A Preset for a classic 1 button modal window.
 */
var OneButtonPresetBuilder = (function (_super) {
    __extends$3(OneButtonPresetBuilder, _super);
    /**
     * @param {?} modal
     * @param {?=} defaultValues
     */
    function OneButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, angular2Modal.extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary'
        }, defaultValues || {}), [
            'okBtn',
            'okBtnClass'
        ]) || this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    OneButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return OneButtonPresetBuilder;
}(MessageModalPresetBuilder));

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Common two button preset
 * @abstract
 */
var AbstractTwoButtonPresetBuilder = (function (_super) {
    __extends$4(AbstractTwoButtonPresetBuilder, _super);
    /**
     * @param {?} modal
     * @param {?=} defaultValues
     * @param {?=} initialSetters
     */
    function AbstractTwoButtonPresetBuilder(modal, defaultValues, initialSetters) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = []; }
        return _super.call(this, angular2Modal.extend({
            modal: modal,
            okBtn: 'OK',
            okBtnClass: 'btn btn-primary',
            cancelBtn: 'Cancel',
            cancelBtnClass: 'btn btn-default'
        }, defaultValues || {}), angular2Modal.arrayUnion([
            'okBtn',
            'okBtnClass',
            'cancelBtn',
            'cancelBtnClass',
        ], initialSetters)) || this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    AbstractTwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.cancelBtnClass, config.cancelBtn, function (cmp, $event) { return cmp.dialog.dismiss(); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return AbstractTwoButtonPresetBuilder;
}(MessageModalPresetBuilder));
/**
 * A Preset for a classic 2 button modal window.
 */
var TwoButtonPresetBuilder = (function (_super) {
    __extends$4(TwoButtonPresetBuilder, _super);
    /**
     * @param {?} modal
     * @param {?=} defaultValues
     */
    function TwoButtonPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, modal, defaultValues) || this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    TwoButtonPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) { return cmp.dialog.close(true); });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return TwoButtonPresetBuilder;
}(AbstractTwoButtonPresetBuilder));
var PromptPresetBuilder = (function (_super) {
    __extends$4(PromptPresetBuilder, _super);
    /**
     * @param {?} modal
     * @param {?=} defaultValues
     */
    function PromptPresetBuilder(modal, defaultValues) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        return _super.call(this, modal, angular2Modal.extend({ showInput: true, defaultValue: '' }, defaultValues || {}), ['placeholder', 'defaultValue']) || this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    PromptPresetBuilder.prototype.$$beforeOpen = function (config) {
        this.addButton(config.okBtnClass, config.okBtn, function (cmp, $event) {
            return cmp.dialog.close(((cmp.dialog.context)).defaultValue);
        });
        return _super.prototype.$$beforeOpen.call(this, config);
    };
    return PromptPresetBuilder;
}(AbstractTwoButtonPresetBuilder));

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TODO: use DI factory for this.
// TODO: consolidate dup code
var isDoc = !(typeof document === 'undefined' || !document);
var animationClass = 'in';
/**
 * Execute this method to flag that you are working with Bootstrap version 4.
 * @return {?}
 */
function bootstrap4Mode() {
    animationClass = 'show';
}
var Modal$1 = (function (_super) {
    __extends$5(Modal$$1, _super);
    /**
     * @param {?} overlay
     */
    function Modal$$1(overlay) {
        return _super.call(this, overlay) || this;
    }
    /**
     * @return {?}
     */
    Modal$$1.prototype.alert = function () {
        return new OneButtonPresetBuilder(this, /** @type {?} */ ({ isBlocking: false }));
    };
    /**
     * @return {?}
     */
    Modal$$1.prototype.prompt = function () {
        return new PromptPresetBuilder(this, /** @type {?} */ ({ isBlocking: true, keyboard: null }));
    };
    /**
     * @return {?}
     */
    Modal$$1.prototype.confirm = function () {
        return new TwoButtonPresetBuilder(this, /** @type {?} */ ({ isBlocking: true, keyboard: null }));
    };
    /**
     * @param {?} dialogRef
     * @param {?} content
     * @param {?=} bindings
     * @return {?}
     */
    Modal$$1.prototype.create = function (dialogRef, content, bindings) {
        var _this = this;
        var /** @type {?} */ backdropRef = this.createBackdrop(dialogRef, angular2Modal.CSSBackdrop);
        var /** @type {?} */ containerRef = this.createContainer(dialogRef, BSModalContainer, content, bindings);
        var /** @type {?} */ overlay = dialogRef.overlayRef.instance;
        var /** @type {?} */ backdrop = backdropRef.instance;
        var /** @type {?} */ container = containerRef.instance;
        dialogRef.inElement ? overlay.insideElement() : overlay.fullscreen();
        // add body class if this is the only dialog in the stack
        if (isDoc && !document.body.classList.contains('modal-open')) {
            document.body.classList.add('modal-open');
        }
        if (dialogRef.inElement) {
            backdrop.setStyle('position', 'absolute');
        }
        backdrop.addClass('modal-backdrop fade', true);
        backdrop.addClass(animationClass);
        container.addClass(animationClass);
        if (containerRef.location.nativeElement) {
            containerRef.location.nativeElement.focus();
        }
        overlay.beforeDestroy(function () {
            var /** @type {?} */ completer = new angular2Modal.PromiseCompleter();
            backdrop.removeClass(animationClass);
            container.removeClass(animationClass);
            rxjs_operator_combineLatest.combineLatest.call(backdrop.myAnimationEnd$(), container.myAnimationEnd$(), function (s1, s2) { return [s1, s2]; })
                .subscribe(function (sources) {
                isDoc && _this.overlay.groupStackLength(dialogRef) === 1 && document.body.classList.remove('modal-open');
                completer.resolve();
            });
            return completer.promise;
        });
        return dialogRef;
    };
    Modal$$1.decorators = [
        { type: _angular_core.Injectable },
    ];
    /**
     * @nocollapse
     */
    Modal$$1.ctorParameters = function () { return [
        { type: angular2Modal.Overlay, },
    ]; };
    return Modal$$1;
}(angular2Modal.Modal));

var providers = [
    { provide: angular2Modal.Modal, useClass: Modal$1 },
    { provide: Modal$1, useClass: Modal$1 }
];
var BootstrapModalModule = (function () {
    function BootstrapModalModule() {
    }
    /**
     * @return {?}
     */
    BootstrapModalModule.getProviders = function () {
        return providers;
    };
    BootstrapModalModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [angular2Modal.ModalModule, _angular_common.CommonModule],
                    declarations: [
                        BSModalFooter,
                        BSMessageModalTitle,
                        BSMessageModalBody,
                        BSMessageModal,
                        BSModalContainer
                    ],
                    providers: providers,
                    entryComponents: [
                        BSModalContainer,
                        BSMessageModal
                    ]
                },] },
    ];
    /**
     * @nocollapse
     */
    BootstrapModalModule.ctorParameters = function () { return []; };
    return BootstrapModalModule;
}());

exports.BSModalContext = BSModalContext;
exports.BSModalContextBuilder = BSModalContextBuilder;
exports.BSModalContainer = BSModalContainer;
exports.BSMessageModal = BSMessageModal;
exports.BSMessageModalTitle = BSMessageModalTitle;
exports.BSMessageModalBody = BSMessageModalBody;
exports.BSModalFooter = BSModalFooter;
exports.MessageModalPresetBuilder = MessageModalPresetBuilder;
exports.ModalOpenContext = angular2Modal.ModalOpenContext;
exports.ModalOpenContextBuilder = angular2Modal.ModalOpenContextBuilder;
exports.OneButtonPresetBuilder = OneButtonPresetBuilder;
exports.TwoButtonPresetBuilder = TwoButtonPresetBuilder;
exports.PromptPresetBuilder = PromptPresetBuilder;
exports.Modal = Modal$1;
exports.bootstrap4Mode = bootstrap4Mode;
exports.BootstrapModalModule = BootstrapModalModule;
exports.providers = providers;
exports.ɵa = AbstractTwoButtonPresetBuilder;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular2-modal-bootstrap.rollup.umd.js.map
