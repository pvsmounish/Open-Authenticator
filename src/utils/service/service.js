import AsyncStorage from '@react-native-community/async-storage';

export const addService = async ({ name = '', secret = '', account = '' }) => {
    try {
        const services = await getServices();
        services.unshift({
            name,
            secret,
            account,
        });
        await AsyncStorage.setItem('services', JSON.stringify(services));
        return { error: false };
    } catch (e) {
        return { error: true };
    }
}

export const getServices = async () => {
    try {
        const services = await AsyncStorage.getItem('services');
        if(services !== null) {
            return JSON.parse(services);
        }
        return [];
    } catch(e) {
        return [];
    }
}