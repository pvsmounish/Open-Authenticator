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
import { getServices, getOTP, getCurrentCountDown } from '../../utils';
import { colors } from '../../styles';

class HomeScreen extends Component {

    state = {
        isFABOpen: false,
        isAddServiceManualOpen: false,
        services: [],
    };

    updateOTPs = () => {
        const { services } = this.state;
        const countDown = getCurrentCountDown();
        services.map((service) => {
            return Object.assign(service, { otp: getOTP({ secret: service.secret }), countDown } );
        })
        this.setState({ services });
    }

    getServices = async () => {
        await this.setState({ services: await getServices() });
    }

    async componentDidMount() {
        await this.getServices();
        this.interval = setInterval(
            () => this.updateOTPs(),
            1000
        );
         // Add willFocus listener to refresh services data after saving new service
        const { navigation } = this.props;
        this.focusListener = navigation.addListener('willFocus', async () => {
            await this.getServices();
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    showAddServiceManualModel = () => this.setState({ isAddServiceManualOpen: true });
    hideAddServiceManualModel = () => this.setState({ isAddServiceManualOpen: false });

    render() {

        const { isAddServiceManualOpen, services } = this.state;

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
                                key={serviceCode.name+serviceCode.account}
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
                                { icon: 'qrcode', label: 'Scan QR', onPress: () => this.props.navigation.navigate('AddServiceScan') },
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
                    <AddServiceManual style={styles.card} refreshServices={this.getServices} />
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
