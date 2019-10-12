import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { FAB, Portal } from 'react-native-paper';

class HomeScreen extends Component {

    state = {
        isFABOpen: false,
    };

    render() {
        return (
            <>
                <Portal>
                    <FAB.Group
                        open={this.state.isFABOpen}
                        icon={this.state.isFABOpen ? 'close' : 'add'}
                        actions={[
                            { icon: 'qrcode', label: 'Scan QR', onPress: () => console.log('Scan QR') },
                            { icon: 'text-short', label: 'Type', onPress: () => console.log('Type')},
                        ]}
                        onStateChange={({ open }) => this.setState({ isFABOpen: open })}
                        onPress={() => {
                            if (this.state.isFABOpen) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
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
