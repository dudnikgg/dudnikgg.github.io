import template from './app.pug';

export const AppComponent = {
  template: template(), // pug-loader returns a function. Cannot to pass function to template, invoke
  selector: 'app',
  bindings: {
    message: '='
  },
  controller: class AppController {
    /* @ngInject */
    constructor($scope) {
      Object.assign(this, { $scope });
    }
  }
};