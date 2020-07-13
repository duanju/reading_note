state

# Testing

## Static Analysis:

1. Linters
2. Type checking

ESLint, Flow, TypeScript

## Writing Testable Code

Seperate the view part of your app-your React componets-from your business logic and app state.

## Write Tests

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

`
    npx prod-install
`

## Linking Native Code on Android

android project use gradle to manager dependencies.

## Find Libs:

React Native Directory: a searchable database of libs build for RN.

Remove uncompatible libs:

` npm uninstall `

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