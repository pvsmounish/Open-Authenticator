import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';

import { Button, Card, TextInput, Title, Paragraph } from 'react-native-paper';

class AddServiceManual extends Component {

    state = {
        serviceAccount: '',
        serviceSecret: '',
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
                        value={this.state.serviceAccount}
                        onChangeText={serviceAccount => this.setState({ serviceAccount })}
                    />
                    <TextInput
                        label='Service Secret'
                        mode='outlined'
                        multiline={true}
                        numberOfLines={4}
                        style={styles.textInput}
                        value={this.state.serviceSecret}
                        onChangeText={serviceSecret => this.setState({ serviceSecret })}
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
