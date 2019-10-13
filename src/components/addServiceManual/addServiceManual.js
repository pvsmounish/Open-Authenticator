import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';

import { addService, getQueryParams } from '../../utils';

class AddServiceManual extends Component {

    state = {
        account: '',
        secretURI: '',
    }

    saveService = async () => {
        const { account, secretURI } = this.state;
        const { secret, issuer: name } = getQueryParams({ url: secretURI });
        const { error } = await addService({ name, account, secret });
        if(error)
            console.log('Error while saving service')
        else
            this.props.refreshServices();
    }

    render() {
        return (
            <Card style={styles.card}>
                <Card.Title title='Add Service (Manual)' />
                <Card.Content>
                    <TextInput
                        label='Account Name'
                        mode='outlined'
                        style={styles.textInput}
                        value={this.state.account}
                        onChangeText={account => this.setState({ account })}
                    />
                    <TextInput
                        label='Service Secret'
                        mode='outlined'
                        multiline={true}
                        numberOfLines={4}
                        style={styles.textInput}
                        value={this.state.secretURI}
                        onChangeText={secretURI => this.setState({ secretURI })}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button onPress={this.saveService}>Save</Button>
                </Card.Actions>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        margin: 8,
    },
    textInput: {
        marginVertical: 2,
    },
});

export default AddServiceManual;
