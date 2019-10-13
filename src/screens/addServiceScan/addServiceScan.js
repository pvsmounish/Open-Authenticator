import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { 
    Appbar,
    Button,
    Card,
    TextInput,
    Modal,
} from 'react-native-paper';
import { RNCamera } from 'react-native-camera';

import { addService, getQueryParams } from '../../utils';

class AddServiceScanScreen extends Component {

    state = {
        shouldReadBarCode: true,
        isAskAccountNameModelOpen: false,
        barCodeText: '',
        account: '',
    };

    showAskAccountNameModel = () => this.setState({ isAskAccountNameModelOpen: true });
    hideAskAccountNameModel = () => {
        this.setState({ isAskAccountNameModelOpen: false, shouldReadBarCode: true })
    };

    barcodeRecognized = (barCodeText) => {
        console.log(barCodeText)
        this.setState({ shouldReadBarCode: false, barCodeText });
        this.showAskAccountNameModel();
    };

    saveService = async () => {
        const { barCodeText, account } = this.state;
        const { secret, issuer: name } = getQueryParams({ url: barCodeText });
        this.hideAskAccountNameModel();
        const { error } = await addService({ name, account, secret });
        if(error)
            console.log('Error while saving service')
        else
            this.props.navigation.navigate('Home');
    }

    render() {

        const { shouldReadBarCode, isAskAccountNameModelOpen }  = this.state;

        return (
            <>
                <Appbar.Header>
                    <Appbar.Content
                        title='Scan QR Code'
                    />
                </Appbar.Header>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.camera}
                    onBarCodeRead={shouldReadBarCode ? ({ data: barCodeText }) => this.barcodeRecognized(barCodeText) : null}
                >
                    {({ status }) => {
                        if (status === 'NOT_AUTHORIZED') {
                            showInfoNotification('Enable Camera permission to scan QR Code')
                            this.props.navigation.navigate('Home');
                        };
                    }}
                </RNCamera>
                <Modal visible={isAskAccountNameModelOpen} onDismiss={this.hideAskAccountNameModel}>
                    <Card style={styles.card}>
                        <Card.Title title='Account Name' />
                        <Card.Content>
                            <TextInput
                                label='Account Name'
                                mode='outlined'
                                style={styles.textInput}
                                value={this.state.account}
                                onChangeText={account => this.setState({ account })}
                            />
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={this.saveService}>Save</Button>
                        </Card.Actions>
                    </Card>
                </Modal>
            </>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    card: {
        margin: 8,
    },
    textInput: {
        marginVertical: 2,
    },
});

export default AddServiceScanScreen;
