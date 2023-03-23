/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IfxAlert {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "icon": string;
        "overflowing": boolean;
    }
    interface IfxButton {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "href": string;
        "icon": string;
        "position": string;
        "setFocus": () => Promise<void>;
        "size": string;
        "target": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "alignment": string;
        "direction": string;
        "hasAll": boolean;
        "hasBtn": boolean;
        "hasDesc": boolean;
        "largeSize": boolean;
        "smallSize": boolean;
    }
    interface IfxCardHeadline {
        "direction": string;
        "hasDesc": boolean;
    }
    interface IfxCardOverline {
    }
    interface IfxCardText {
        "hasBtn": boolean;
    }
    interface IfxDropdown {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxDropdownItem {
        "checkable": boolean;
        "disabled": boolean;
        "icon": string;
        "label": string;
        "size": 's' | 'm';
    }
    interface IfxDropdownMenu {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxFilterInput {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxIcon {
        "icon": any;
        "ifxIcon": any;
    }
    interface IfxIconButton {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "href": string;
        "icon": string;
        "setFocus": () => Promise<void>;
        "shape": string;
        "size": string;
        "target": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
    interface IfxLink {
        "href": string;
        "icon": any;
        "position": string;
        "target": string;
        "underline": any;
    }
    interface IfxSearchInput {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxSpinner {
        "size": string;
    }
    interface IfxStatus {
        "border": boolean;
        "color": 'orange' | 'ocean'| 'grey'| 'grey-200'| 'red'| 'green'| 'berry';
        "text": string;
    }
    interface IfxTag {
        "text": string;
    }
}
declare global {
    interface HTMLIfxAlertElement extends Components.IfxAlert, HTMLStencilElement {
    }
    var HTMLIfxAlertElement: {
        prototype: HTMLIfxAlertElement;
        new (): HTMLIfxAlertElement;
    };
    interface HTMLIfxButtonElement extends Components.IfxButton, HTMLStencilElement {
    }
    var HTMLIfxButtonElement: {
        prototype: HTMLIfxButtonElement;
        new (): HTMLIfxButtonElement;
    };
    interface HTMLIfxCardElement extends Components.IfxCard, HTMLStencilElement {
    }
    var HTMLIfxCardElement: {
        prototype: HTMLIfxCardElement;
        new (): HTMLIfxCardElement;
    };
    interface HTMLIfxCardHeadlineElement extends Components.IfxCardHeadline, HTMLStencilElement {
    }
    var HTMLIfxCardHeadlineElement: {
        prototype: HTMLIfxCardHeadlineElement;
        new (): HTMLIfxCardHeadlineElement;
    };
    interface HTMLIfxCardOverlineElement extends Components.IfxCardOverline, HTMLStencilElement {
    }
    var HTMLIfxCardOverlineElement: {
        prototype: HTMLIfxCardOverlineElement;
        new (): HTMLIfxCardOverlineElement;
    };
    interface HTMLIfxCardTextElement extends Components.IfxCardText, HTMLStencilElement {
    }
    var HTMLIfxCardTextElement: {
        prototype: HTMLIfxCardTextElement;
        new (): HTMLIfxCardTextElement;
    };
    interface HTMLIfxDropdownElement extends Components.IfxDropdown, HTMLStencilElement {
    }
    var HTMLIfxDropdownElement: {
        prototype: HTMLIfxDropdownElement;
        new (): HTMLIfxDropdownElement;
    };
    interface HTMLIfxDropdownItemElement extends Components.IfxDropdownItem, HTMLStencilElement {
    }
    var HTMLIfxDropdownItemElement: {
        prototype: HTMLIfxDropdownItemElement;
        new (): HTMLIfxDropdownItemElement;
    };
    interface HTMLIfxDropdownMenuElement extends Components.IfxDropdownMenu, HTMLStencilElement {
    }
    var HTMLIfxDropdownMenuElement: {
        prototype: HTMLIfxDropdownMenuElement;
        new (): HTMLIfxDropdownMenuElement;
    };
    interface HTMLIfxFilterInputElement extends Components.IfxFilterInput, HTMLStencilElement {
    }
    var HTMLIfxFilterInputElement: {
        prototype: HTMLIfxFilterInputElement;
        new (): HTMLIfxFilterInputElement;
    };
    interface HTMLIfxIconElement extends Components.IfxIcon, HTMLStencilElement {
    }
    var HTMLIfxIconElement: {
        prototype: HTMLIfxIconElement;
        new (): HTMLIfxIconElement;
    };
    interface HTMLIfxIconButtonElement extends Components.IfxIconButton, HTMLStencilElement {
    }
    var HTMLIfxIconButtonElement: {
        prototype: HTMLIfxIconButtonElement;
        new (): HTMLIfxIconButtonElement;
    };
    interface HTMLIfxLinkElement extends Components.IfxLink, HTMLStencilElement {
    }
    var HTMLIfxLinkElement: {
        prototype: HTMLIfxLinkElement;
        new (): HTMLIfxLinkElement;
    };
    interface HTMLIfxSearchInputElement extends Components.IfxSearchInput, HTMLStencilElement {
    }
    var HTMLIfxSearchInputElement: {
        prototype: HTMLIfxSearchInputElement;
        new (): HTMLIfxSearchInputElement;
    };
    interface HTMLIfxSpinnerElement extends Components.IfxSpinner, HTMLStencilElement {
    }
    var HTMLIfxSpinnerElement: {
        prototype: HTMLIfxSpinnerElement;
        new (): HTMLIfxSpinnerElement;
    };
    interface HTMLIfxStatusElement extends Components.IfxStatus, HTMLStencilElement {
    }
    var HTMLIfxStatusElement: {
        prototype: HTMLIfxStatusElement;
        new (): HTMLIfxStatusElement;
    };
    interface HTMLIfxTagElement extends Components.IfxTag, HTMLStencilElement {
    }
    var HTMLIfxTagElement: {
        prototype: HTMLIfxTagElement;
        new (): HTMLIfxTagElement;
    };
    interface HTMLElementTagNameMap {
        "ifx-alert": HTMLIfxAlertElement;
        "ifx-button": HTMLIfxButtonElement;
        "ifx-card": HTMLIfxCardElement;
        "ifx-card-headline": HTMLIfxCardHeadlineElement;
        "ifx-card-overline": HTMLIfxCardOverlineElement;
        "ifx-card-text": HTMLIfxCardTextElement;
        "ifx-dropdown": HTMLIfxDropdownElement;
        "ifx-dropdown-item": HTMLIfxDropdownItemElement;
        "ifx-dropdown-menu": HTMLIfxDropdownMenuElement;
        "ifx-filter-input": HTMLIfxFilterInputElement;
        "ifx-icon": HTMLIfxIconElement;
        "ifx-icon-button": HTMLIfxIconButtonElement;
        "ifx-link": HTMLIfxLinkElement;
        "ifx-search-input": HTMLIfxSearchInputElement;
        "ifx-spinner": HTMLIfxSpinnerElement;
        "ifx-status": HTMLIfxStatusElement;
        "ifx-tag": HTMLIfxTagElement;
    }
}
declare namespace LocalJSX {
    interface IfxAlert {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "icon"?: string;
        "overflowing"?: boolean;
    }
    interface IfxButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "href"?: string;
        "icon"?: string;
        "position"?: string;
        "size"?: string;
        "target"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "alignment"?: string;
        "direction"?: string;
        "hasAll"?: boolean;
        "hasBtn"?: boolean;
        "hasDesc"?: boolean;
        "largeSize"?: boolean;
        "smallSize"?: boolean;
    }
    interface IfxCardHeadline {
        "direction"?: string;
        "hasDesc"?: boolean;
    }
    interface IfxCardOverline {
    }
    interface IfxCardText {
        "hasBtn"?: boolean;
    }
    interface IfxDropdown {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxDropdownItem {
        "checkable"?: boolean;
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "size"?: 's' | 'm';
    }
    interface IfxDropdownMenu {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxFilterInput {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxIcon {
        "icon"?: any;
        "ifxIcon"?: any;
    }
    interface IfxIconButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "href"?: string;
        "icon"?: string;
        "shape"?: string;
        "size"?: string;
        "target"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IfxLink {
        "href"?: string;
        "icon"?: any;
        "position"?: string;
        "target"?: string;
        "underline"?: any;
    }
    interface IfxSearchInput {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxSpinner {
        "size"?: string;
    }
    interface IfxStatus {
        "border"?: boolean;
        "color"?: 'orange' | 'ocean'| 'grey'| 'grey-200'| 'red'| 'green'| 'berry';
        "text"?: string;
    }
    interface IfxTag {
        "text"?: string;
    }
    interface IntrinsicElements {
        "ifx-alert": IfxAlert;
        "ifx-button": IfxButton;
        "ifx-card": IfxCard;
        "ifx-card-headline": IfxCardHeadline;
        "ifx-card-overline": IfxCardOverline;
        "ifx-card-text": IfxCardText;
        "ifx-dropdown": IfxDropdown;
        "ifx-dropdown-item": IfxDropdownItem;
        "ifx-dropdown-menu": IfxDropdownMenu;
        "ifx-filter-input": IfxFilterInput;
        "ifx-icon": IfxIcon;
        "ifx-icon-button": IfxIconButton;
        "ifx-link": IfxLink;
        "ifx-search-input": IfxSearchInput;
        "ifx-spinner": IfxSpinner;
        "ifx-status": IfxStatus;
        "ifx-tag": IfxTag;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ifx-alert": LocalJSX.IfxAlert & JSXBase.HTMLAttributes<HTMLIfxAlertElement>;
            "ifx-button": LocalJSX.IfxButton & JSXBase.HTMLAttributes<HTMLIfxButtonElement>;
            "ifx-card": LocalJSX.IfxCard & JSXBase.HTMLAttributes<HTMLIfxCardElement>;
            "ifx-card-headline": LocalJSX.IfxCardHeadline & JSXBase.HTMLAttributes<HTMLIfxCardHeadlineElement>;
            "ifx-card-overline": LocalJSX.IfxCardOverline & JSXBase.HTMLAttributes<HTMLIfxCardOverlineElement>;
            "ifx-card-text": LocalJSX.IfxCardText & JSXBase.HTMLAttributes<HTMLIfxCardTextElement>;
            "ifx-dropdown": LocalJSX.IfxDropdown & JSXBase.HTMLAttributes<HTMLIfxDropdownElement>;
            "ifx-dropdown-item": LocalJSX.IfxDropdownItem & JSXBase.HTMLAttributes<HTMLIfxDropdownItemElement>;
            "ifx-dropdown-menu": LocalJSX.IfxDropdownMenu & JSXBase.HTMLAttributes<HTMLIfxDropdownMenuElement>;
            "ifx-filter-input": LocalJSX.IfxFilterInput & JSXBase.HTMLAttributes<HTMLIfxFilterInputElement>;
            "ifx-icon": LocalJSX.IfxIcon & JSXBase.HTMLAttributes<HTMLIfxIconElement>;
            "ifx-icon-button": LocalJSX.IfxIconButton & JSXBase.HTMLAttributes<HTMLIfxIconButtonElement>;
            "ifx-link": LocalJSX.IfxLink & JSXBase.HTMLAttributes<HTMLIfxLinkElement>;
            "ifx-search-input": LocalJSX.IfxSearchInput & JSXBase.HTMLAttributes<HTMLIfxSearchInputElement>;
            "ifx-spinner": LocalJSX.IfxSpinner & JSXBase.HTMLAttributes<HTMLIfxSpinnerElement>;
            "ifx-status": LocalJSX.IfxStatus & JSXBase.HTMLAttributes<HTMLIfxStatusElement>;
            "ifx-tag": LocalJSX.IfxTag & JSXBase.HTMLAttributes<HTMLIfxTagElement>;
        }
    }
}
