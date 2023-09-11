import { Component, Prop, h, Host, Method, Element } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ifx-icon-button',
  styleUrl: 'icon-button.scss',
  shadow: true,
})

export class IconButton {
  @Prop() variant: 'solid' | 'outline';
  @Prop() size: string;
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop() href: string;
  @Prop() target: string = '_self';
  @Prop() style: string = 'round';
  @Element() el;

  private focusableElement: HTMLElement;

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  componentWillLoad() {
    if (this.style === '') {
      this.style = 'round';
    }
  }

  render() {
    return (
      <Host>
        {this.href ? (
          <a
            ref={(el) => (this.focusableElement = el)}
            class={this.getClassNames()}
            href={!this.disabled ? this.href : undefined}
            target={this.target}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            <ifx-icon icon={this.icon}></ifx-icon>
          </a>
        ) : (
          <button
            class={this.getClassNames()}
            type="button"
          >
            <ifx-icon icon={this.icon}></ifx-icon>
          </button>
        )}
      </Host>
    );
  }



  getVariantClass() {
    return `${this.variant}` === "secondary"
      ? `secondary`
      : `${this.variant}` === 'tertiary'
        ? `tertiary`
        : `primary`;
  }

  getSizeClass() {
    if (`${this.size}` === "xs") {
      return "xs"
    }
    else if (`${this.size}` === "s") {
      return "s"
    }
    else if (`${this.size}` === "l") {
      return "l"
    }
    else return "";
  }

  getClassNames() {
    return classNames(
      'btn icon-button',
      `btn-${this.style}`,
      this.size && `btn-${this.getSizeClass()}`,
      `btn-${this.getVariantClass()}`,
      this.disabled ? 'disabled' : ''
    );
  }
}