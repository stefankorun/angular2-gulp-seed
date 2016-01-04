import {bootstrap} from 'angular2/platform/browser'

import {App} from './src/app'
import {AuthService} from "./src/services/auth-service";

//noinspection TypeScriptValidateTypes
bootstrap(App, [
  AuthService
]);
