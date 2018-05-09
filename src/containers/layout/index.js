import React from "react";
import {StyleSheet, StatusBar, View, Text} from "react-native";
import {Button} from 'react-native-elements';

import "@expo/vector-icons";

class Layout extends React.Component {
    componentDidMount() {
        console.log("xxx");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor="rgba(0, 0, 0, 0)"
                    barStyle="light-content"
                />
                <Text>Open up App.js to start working on your app!</Text>
                <Button
                    raised
                    icon={{name: 'home', size: 32}}
                    buttonStyle={{backgroundColor: '#ff4f00', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Welcome to\nReact Native Elements`}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Layout