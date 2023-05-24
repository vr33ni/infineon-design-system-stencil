import { Component, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'ifx-sidebar-item',
  styleUrl: '../../index.scss',
  shadow: true
})
export class SidebarItem {
  @Element() el;
  @Prop() icon: string = ""
  @State() hasIcon: boolean = false;

  componentDidLoad() { 
    //random change
    const iconWrapper = this.el.shadowRoot.querySelector('ifx-icon')
    if(iconWrapper) { 
      const icon = iconWrapper.querySelector('svg')
      if(!icon) { 
        this.hasIcon = false;
      } else this.hasIcon = true;
    }
  }

  render() {
    return (
      <div class='sidebar__nav-item'>
       {this.icon && 
        <div class={`sidebar__nav-item-icon-wrapper ${!this.hasIcon ? 'noIcon' : ""}`}>
        <ifx-icon icon={this.icon}></ifx-icon>
      </div>}
        <div class="sidebar__nav-item-label">
          <slot />
        </div>
        {/* <div class="sidebar__nav-item-number">
          <ifx-number-indicator>7</ifx-number-indicator>
        </div> */}
      </div>
    );
  }
}