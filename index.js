/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginPage from './src/pages/loginPage';
import HomePage from './src/pages/homePage';

AppRegistry.registerComponent(appName, () => HomePage);
