import angular from 'angular';
require('bootstrap-loader');

// Components
import {AppComponent} from './app.component.js';
import {NavComponent} from './components/navbar/nav.js';

const app = angular.module('goalsApp', [NavComponent.selector]);

app.component(AppComponent.selector, AppComponent);