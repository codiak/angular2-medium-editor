import { Directive, ElementRef, EventEmitter, Input, Output, ɵlooseIdentical, NgModule } from '@angular/core';
import * as MediumEditor from 'medium-editor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Medium Editor wrapper directive.
 *
 * Examples
 * <medium-editor
 * [(editorModel)]="textVar"
 *    [editorOptions]="{'toolbar': {'buttons': ['bold', 'italic', 'underline', 'h1', 'h2', 'h3']}}"
 *    [editorPlaceholder]="placeholderVar"></medium-editor>
 */
var MediumEditorDirective = /** @class */ (function () {
    function MediumEditorDirective(el) {
        this.el = el;
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MediumEditorDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.element = this.el.nativeElement;
        this.element.innerHTML = '<div class="me-editable">' + this.model + '</div>';
        this.active = true;
        if (this.placeholder && this.placeholder.length) {
            this.options.placeholder = {
                text: this.placeholder
            };
        }
        // Global MediumEditor
        this.editor = new MediumEditor('.me-editable', this.options);
        this.editor.subscribe('editableInput', (/**
         * @param {?} event
         * @param {?} editable
         * @return {?}
         */
        function (event, editable) {
            _this.updateModel();
        }));
    };
    /**
     * @return {?}
     */
    MediumEditorDirective.prototype.refreshView = /**
     * @return {?}
     */
    function () {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MediumEditorDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    };
    /**
     * Emit updated model
     */
    /**
     * Emit updated model
     * @return {?}
     */
    MediumEditorDirective.prototype.updateModel = /**
     * Emit updated model
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.editor.getContent();
        value = value.replace(/&nbsp;/g, '')
            .replace(/<p><br><\/p>/g, '')
            .trim();
        this.lastViewModel = value;
        this.update.emit(value);
    };
    /**
     * Remove MediumEditor on destruction of directive
     */
    /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    MediumEditorDirective.prototype.ngOnDestroy = /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    function () {
        this.editor.destroy();
    };
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    MediumEditorDirective.prototype.isPropertyUpdated = /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    function (changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
        /** @type {?} */
        var change = changes.model;
        if (change.isFirstChange()) {
            return true;
        }
        return !ɵlooseIdentical(viewModel, change.currentValue);
    };
    MediumEditorDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'medium-editor'
                },] }
    ];
    /** @nocollapse */
    MediumEditorDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MediumEditorDirective.propDecorators = {
        model: [{ type: Input, args: ['editorModel',] }],
        options: [{ type: Input, args: ['editorOptions',] }],
        placeholder: [{ type: Input, args: ['editorPlaceholder',] }],
        update: [{ type: Output, args: ['editorModelChange',] }]
    };
    return MediumEditorDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MediumEditorModule = /** @class */ (function () {
    function MediumEditorModule() {
    }
    MediumEditorModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    exports: [
                        MediumEditorDirective
                    ],
                    declarations: [
                        MediumEditorDirective
                    ],
                },] }
    ];
    return MediumEditorModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { MediumEditorModule, MediumEditorDirective };

//# sourceMappingURL=angular2-medium-editor.js.map