import {AppNavigator} from '../navigators';
import {NavigationActions} from 'react-navigation';

const initialNavState = AppNavigator.router.getStateForAction(
    NavigationActions.navigate({routeName: 'Layout'})
);

const navigation = (state = initialNavState, action) => {
    let next;
    switch (action.type) {
        default:
            next = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return next || state;
};


export default navigation;