/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './src/Main';
// import Main from './src_old/Main';

AppRegistry.registerComponent(appName, () => Main);
