import { Push, PushObject, PushOptions } from '@ionic-native/push';

export const registerNotification = async () => {

    const options: PushOptions = {
        android: {},
        ios: {
            alert: 'true',
            badge: true,
            sound: 'false'
        },
        windows: {},
        browser: {
            pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        }
    }
    const pushObject: PushObject = Push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe((error: any) => console.error('Error with Push plugin', error));
};


export default registerNotification;
