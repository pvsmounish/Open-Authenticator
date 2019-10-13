import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import { 
    Appbar,
    FAB,
    Modal,
    Portal,
    Text,
} from 'react-native-paper';

import { ServiceCodeCard, AddServiceManual } from '../../components';
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
        isAddServiceManualOpen: false,
    };

    showAddServiceManualModel = () => this.setState({ isAddServiceManualOpen: true });
    hideAddServiceManualModel = () => this.setState({ isAddServiceManualOpen: false });

    render() {

        const { isAddServiceManualOpen } = this.state;

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
                            <ServiceCodeCard {...serviceCode}
                                key={serviceCode.serviceName+serviceCode.serviceAccount}
                                style={styles.card}
                            />
                        ))
                    }
                    {
                        services && services.length === 0 && (
                            <Text>No Services Found</Text>
                        )
                    }
                    <Portal>
                        <FAB.Group
                            open={this.state.isFABOpen}
                            icon={this.state.isFABOpen ? 'close' : 'add'}
                            actions={[
                                { icon: 'qrcode', label: 'Scan QR', onPress: () => console.log('Scan QR') },
                                { icon: 'text-short', label: 'Type', onPress: () => this.showAddServiceManualModel() },
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
                <Modal visible={isAddServiceManualOpen} onDismiss={this.hideAddServiceManualModel}>
                    <AddServiceManual style={styles.card} />
                </Modal>
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
