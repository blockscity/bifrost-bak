import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './navigators'

const tabs = [{
  label: 'Navigation',
  screen: 'app.Home',
  icon: require('../imgs/swap.png'),
  title: 'Navigation Types',
}, {
  label: 'Actions',
  screen: 'app.Home',
  icon: require('../imgs/swap.png'),
  title: 'Navigation Actions',
}];


registerScreens();
console.log(Navigation.startTabBasedApp)

Navigation.startTabBasedApp({
  tabs,
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  }
});