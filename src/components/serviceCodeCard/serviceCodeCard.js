import React from 'react';
import {
    StyleSheet,
} from 'react-native';

import { Button, Card, Title, Paragraph } from 'react-native-paper';

const ServiceCodeCard = ({ code, serviceName, serviceAccount }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{ code }</Title>
                <Paragraph>{ serviceName || '-' } ({ serviceAccount || '-' })</Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button>Copy</Button>
            </Card.Actions>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        margin: 4,
    },
});

export default ServiceCodeCard;