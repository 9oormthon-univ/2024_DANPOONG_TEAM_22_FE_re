import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {NavigationContainerRefWithCurrent} from '@react-navigation/native';
import {RootStackParamList} from '@type/RootStackParamList';
import PushNotification from 'react-native-push-notification';

export const configurePushNotifications = (
  navigationRef: NavigationContainerRefWithCurrent<RootStackParamList>,
) => {
  const navigateToYouthListenScreen = ({
    alarmId,
    script,
  }: Readonly<{alarmId: number; script: string}>) => {
    navigationRef.navigate('YouthStackNav', {
      screen: 'YouthListenScreen',
      params: {
        alarmId,
        script,
      },
    });
  };

  // (optional) 토큰이 생성될 때 실행됨(토큰을 서버에 등록할 때 쓸 수 있음)
  PushNotification.configure({
    onRegister: function (token: any) {
      console.log('TOKEN in onRegister:', token);
    },

    // (required) 리모트 노티를 수신하거나, 열었거나 로컬 노티를 열었을 때 실행
    onNotification: function (notification: any) {
      console.log('NOTIFICATION in onNotification:', notification);
      const alarmId = notification.data.alarmId;
      console.log('alarmId', alarmId);
      if (alarmId && navigationRef && navigationRef.current) {
        console.log('navigate to PushScreen', alarmId);
        navigateToYouthListenScreen({
          alarmId: Number(alarmId),
          script: notification.body,
        });
      }
      // IOS ONLY (required) 리모트 노티를 수신하거나, 열었거나 로컬 노티를 열었을 때 실행
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) 등록한 액션을 누렀고 invokeApp이 false 상태일 때 실행됨, true면 onNotification이 실행됨 (Android)
    onAction: function (notification: any) {
      console.log('ACTION in onAction:', notification.action);
      console.log('NOTIFICATION in onAction:', notification);
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err: Error) {
      console.error(err.message, err);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });

  PushNotification.createChannel(
    {
      channelId: 'riders', // (required)
      channelName: '앱 전반', // (required)
      channelDescription: '앱 실행하는 알림', // (optional) default: undefined.
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    },
    (created: boolean) =>
      console.log(`createChannel riders returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};