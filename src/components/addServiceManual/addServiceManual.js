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
                <Card.Content>
                    <TextInput
                        label='Service Name'
                        mode='outlined'
                        value={this.state.serviceName}
                        onChangeText={serviceName => this.setState({ serviceName })}
                    />
                    <TextInput
                        label='Service Account'
                        mode='outlined'
                        value={this.state.serviceAccount}
                        onChangeText={serviceAccount => this.setState({ serviceAccount })}
                    />
                    <TextInput
                        label='Service Key'
                        mode='outlined'
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
        margin: 4,
    },
});

export default AddServiceManual;
