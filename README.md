# RN-Drawer-Auth-Typescript-Biolerplate
People usually stuck on implementing the Navigation Routes and espacially after the react-navigation 6.x/5.x update. Here is a starter code (boilerplate) with basic implementation of Drawer Navigation and Authentication with Regex, which is an another challenge for developers. The code is converted into typescript recently. Hope you will like it 😄😄.

# Setting up development environment:

Go through official docs to setup: https://reactnative.dev/docs/environment-setup

# Steps to start:

1. Clone by ``` git clone git@github.com:naman9199/RN-Drawer-Auth-Typescript-Biolerplate.git ``` 
2.  ``` cd RN-Drawer-Auth-Typescript-Biolerplate ```
3. run ``` npm install ```
4. server: ``` npm run start ``` / ``` expo start ```
5. emulator: ``` npm run android ```

# Running on Expo (physical device)

install _expo go_ app on your device to test this app from _play store or app store_

1. run ``` expo start ``` to start server
2. open expo go app on physical device
3. scan the QR code from the server screen on you pc browser

# Running on Expo (Android Emulator)

Create or configure your avd manager on android studio for react native: https://reactnative.dev/docs/next/environment-setup

In this link go to react-native-cli
choose your OS and target device

Then setup the emulator according to docs

Once your android emulator is ready run ``` npm run android ```
or ``` expo start ``` and then click on _run on android_

# NOTE
This boilerplate does not contain **REDUX** hence **useState** hook is used for changing AuthScreen to MainScreen.
In future updates you may see the implementation of redux. Stay tuned! Happy Coding 🥳.
