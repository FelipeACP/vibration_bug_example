# Vibration Bug

This demo is meant to reproduce [this issue](https://github.com/expo/expo/issues/14736)

## Description

Income Push Notifications won't vibrate more than twice regardless of the length of the array supplied to `vibrationPattern`.

## Steps to reproduce:

1. Clone this demo project.
2. Install the NPM dependencies.
3. Run `expo start` and open the app on a real android device.
4. Send a push notification by either pressing 'Schedule a notification' or using the [push notification tool](https://expo.dev/notifications) (make sure to set the channel to 'evacuation').
5. Expect the device to vibrate only twice.
