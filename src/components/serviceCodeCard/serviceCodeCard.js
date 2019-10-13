import React from 'react';
import {
    Clipboard,
    StyleSheet,
} from 'react-native';

import { Button, Card, Title, Paragraph } from 'react-native-paper';

const ServiceCodeCard = ({ otp, name, account, countDown }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{ otp }</Title>
                <Paragraph>{ name || '-' } ({ account || '-' }) | Expires in { countDown } </Paragraph>
            </Card.Content>
            <Card.Actions>
                <Button onPress={() => Clipboard.setString(otp)}>Copy</Button>
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
