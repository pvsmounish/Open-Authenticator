import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import { Appbar, FAB, Portal } from 'react-native-paper';

import { ServiceCodeCard } from '../../components';
import { colors } from '../../styles';

const services = [
    {
        code: '859 157',
        serviceName: 'Google',
        serviceAccount: 'me@example.com',
    },
    {
        code: '859 157',
        serviceName: 'Google',
        serviceAccount: 'me2@example.com',
    },
]

class HomeScreen extends Component {

    state = {
        isFABOpen: false,
    };

    render() {
        return (
            <>
            <Appbar.Header>
                <Appbar.Content
                    title='Open Authenticator'
                />
            </Appbar.Header>
                <ScrollView
                    style={[styles.container, { backgroundColor: colors.theme.lightGrey }]}
                    contentContainerStyle={styles.content}
                >
                    {
                        services.map((serviceCode) => (
                            <ServiceCodeCard {...serviceCode} key={serviceCode.serviceName+serviceCode.serviceAccount} />
                        ))
                    }
                    
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
                </ScrollView>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 4,
    },
    card: {
        margin: 4,
    },
});

export default HomeScreen;
