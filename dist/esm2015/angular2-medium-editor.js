import { Directive, ElementRef, EventEmitter, Input, Output, ɵlooseIdentical } from '@angular/core';
import * as MediumEditor from 'medium-editor';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
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
class MediumEditorDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.update = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        this.editor.subscribe('editableInput', (event, editable) => {
            this.updateModel();
        });
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.editor) {
            this.editor.setContent(this.model);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isPropertyUpdated(changes, this.lastViewModel)) {
            this.lastViewModel = this.model;
            this.refreshView();
        }
    }
    /**
     * Emit updated model
     * @return {?}
     */
    updateModel() {
        let /** @type {?} */ value = this.editor.getContent();
        value = value.replace(/&nbsp;/g, '')
            .replace(/<p><br><\/p>/g, '')
            .trim();
        this.lastViewModel = value;
        this.update.emit(value);
    }
    /**
     * Remove MediumEditor on destruction of directive
     * @return {?}
     */
    ngOnDestroy() {
        this.editor.destroy();
    }
    /**
     * @param {?} changes
     * @param {?} viewModel
     * @return {?}
     */
    isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) {
            return false;
        }
        const /** @type {?} */ change = changes.model;
        if (change.isFirstChange()) {
            return true;
        }
        return !ɵlooseIdentical(viewModel, change.currentValue);
    }
}
MediumEditorDirective.decorators = [
    { type: Directive, args: [{
                selector: 'medium-editor'
            },] },
];
/** @nocollapse */
MediumEditorDirective.ctorParameters = () => [
    { type: ElementRef, },
];
MediumEditorDirective.propDecorators = {
    "model": [{ type: Input, args: ['editorModel',] },],
    "options": [{ type: Input, args: ['editorOptions',] },],
    "placeholder": [{ type: Input, args: ['editorPlaceholder',] },],
    "update": [{ type: Output, args: ['editorModelChange',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { MediumEditorDirective };
//# sourceMappingURL=angular2-medium-editor.js.map
