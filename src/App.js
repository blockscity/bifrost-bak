import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

import configureStore from './store';
import rootSaga from './sagas';
import AppNavigation from './navigators'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            store: {},
            persistor: {},
            err: undefined
        };
    }

    componentDidMount() {
        console.log("mount");
        configureStore(() => {
            console.log("loaded");
            this.state.loaded = true;
            this.setState({loaded: true})

        }).then(({store, persistor}) => {
            store.runSaga(rootSaga);
            this.setState({store, persistor})
        }).catch(err => {
            this.setState({err: err})
        })
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <View style={styles.container}>
                    <Text>Open up App.js to start working on your app!</Text>
                    <Text>Changes you make will automatically reload.</Text>
                    <Text>Shake your phone to open the developer menu.</Text>
                </View>
            );
        }
        return (
            <Provider store={this.state.store}>
                <PersistGate persistor={this.state.persistor}>
                    <AppNavigation/>
                </PersistGate>
            </Provider>
        )

    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
