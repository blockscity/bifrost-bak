import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import Routes from './routes';

import {
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';
import {
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

const navigationMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const addListener = createReduxBoundAddListener("root");


export const AppNavigator = createStackNavigator(Routes, {
    initialRouteName: 'Layout'
});

class AppNavigation extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const {dispatch, nav} = this.props;
        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppNavigation);

