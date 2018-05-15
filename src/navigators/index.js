import Layout from '../containers/layout'
import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('app.Home', () => Layout);
}
