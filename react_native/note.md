state

# Testing

## Static Analysis:

1. Linters

["extends": "@react-native-community"](https://github.com/facebook/react-native/blob/master/packages/eslint-config-react-native-community/index.js)

2. Type checking

ESLint, Flow, TypeScript

## Writing Testable Code

Seperate the view part of your app-your React componets-from your business logic and app state.

## Write Tests

Separating the view part of your app—your React components—from your business logic and app state

## Unit Tests

### Mocking

## Integration Tests

# Component Tests

1. Interaction

2. Rendering.

    Snapshots need to be committed

TestRenderer, react-native-testing-library, @testing-library/react-native

## End-to-End Tests

Detox, Appium.

# Using Libraries

npm CLI or Yarn Classic

install lib:
`
    npm install react-native-webview
`

## Linking Native Code on IOS

Run the `upgrade` command

`
    npx prod-install
`


## Linking Native Code on Android

android project use gradle to manager dependencies.

## Find Libs:

React Native Directory: a searchable database of libs build for RN.

Remove uncompatible libs:

` npm uninstall `

# Upgrading to new React Native version

` npx react-native upgrade`

# Style

use camel casing. e.g backgroundColor rather than background-color

StyleSheet.create

# Height and Width

density-independent pixels

# Layout with flexbox

## flexDirection

` column`, ` row-reversse`, `column-reverse`

## Layout Direction

`LTR`, `RTL`

## Justify Content

`justifyContent`:

1. flex-start
2. flex-end
3. center
4. space-between
5. space-around
6. space-evenly

## Align Items

`Align Items`:
1. stretch
2. flex-start
3. flex-end
4. center
5. baseline

## Align Self

## Align Content

## Flex Wrap

## Flex Basis, Grow, and Shrink

## Width and Height

## Absolute & Relative Layout

# Publishing to Goolge Play Store

Sign the apk with correct singing key using `keytool`.


    sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000


Config the gradlew file.

    ...
    android {
        ...
        defaultConfig { ... }
        signingConfigs {
            release {
                if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                    storeFile file(MYAPP_UPLOAD_STORE_FILE)
                    storePassword MYAPP_UPLOAD_STORE_PASSWORD
                    keyAlias MYAPP_UPLOAD_KEY_ALIAS
                    keyPassword MYAPP_UPLOAD_KEY_PASSWORD
                }
            }
        }
        buildTypes {
            release {
                ...
                signingConfig signingConfigs.release
            }
        }
    }
    ...


Go to 'android' folder, run:

`npx react-native run-android --variant=release`