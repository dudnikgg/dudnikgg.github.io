// import template from './nav.pug';
// import styles from './nav.sass';

export const NavComponent = {
  template: "template()",
  selector: 'nav',
  bindings: {},
  controller: class navController {
    /* @ngInject */
    constructor($scope) {
      Object.assign(this, { $scope });
    }
  }
};
