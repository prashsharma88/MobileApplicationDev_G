/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './source/Main';
import Tabnavigation from './TabNavigation_src/navigation/Tabnavigation';
import AppNavigation from './nested_navigation_src/navigation/NestedNav';


AppRegistry.registerComponent(appName, () => AppNavigation);
