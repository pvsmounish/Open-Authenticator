import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <>
                <Text>Home Screen</Text>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default HomeScreen;
