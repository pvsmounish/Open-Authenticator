import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import { Button, Card, TextInput, Title, Paragraph } from 'react-native-paper';

class AddServiceManual extends Component {

    state = {
        serviceName: '',
        serviceAccount: '',
        serviceKey: '',
    }

    render() {
        return (
            <Card style={styles.card}>
                <Card.Title title='Add Service (Manual)' />
                <Card.Content>
                    <TextInput
                        label='Service Name'
                        mode='outlined'
                        style={styles.textInput}
                        value={this.state.serviceName}
                        onChangeText={serviceName => this.setState({ serviceName })}
                    />
                    {/* <TextInput
                        label='Service Account'
                        mode='outlined'
                        style={styles.textInput}
                        value={this.state.serviceAccount}
                        onChangeText={serviceAccount => this.setState({ serviceAccount })}
                    /> */}
                    <TextInput
                        label='Service Key'
                        mode='outlined'
                        multiline={true}
                        numberOfLines={4}
                        style={styles.textInput}
                        value={this.state.serviceKey}
                        onChangeText={serviceKey => this.setState({ serviceKey })}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button>Save</Button>
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
