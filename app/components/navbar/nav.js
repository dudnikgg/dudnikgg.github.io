import { NavComponent } from './nav.component.js';

export * from './nav.component.js';

export default angular.module('nav', [])
  .component(NavComponent.selector, NavComponent);