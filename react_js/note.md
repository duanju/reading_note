# Getting start

Create typescript project

    npx create-react-app my-app --template typescript

Runns the app in development mode.

    npm start

Start test

    npm test

Build for production to the build folder.

    npm run build

# Development

Tow packages of React App:

1. create-react-app is used to create new projects
2. react-scripts is a development dependency in the generated projects

Code stype

    [prettier](https://github.com/jlongster/prettier)

format our code whenever we make a commit in git 

    npm install --save husky lint-staged prettier

Debugging in ide

Developing Components in Isolation

* [Storybook for React (source)](https://storybook.js.org/)
* [React Styleguidist (source)](https://react-styleguidist.js.org/)

Analyzing the Bundle Size

Using HTTPS in Development

dev server and hte "proxy" feature

# Style and Assets

Adding Stylesheets:

use 'webpack' build tool, we import css to js file by `import './file.css'` which way provide the convinence but less portability.

[Adding CSS Modules](https://github.com/css-modules/css-modules)
[css-modules](https://css-tricks.com/css-modules-part-1-need/)

Post-Processing CSS

Adding Images, Fonts, and Files

Loading (.graphql)[https://www.jianshu.com/p/03a7d390375d] Files

Using the Public Folder:

1. Changing the HTML
2. Adding Assets Outside of the Module System

Resouces in `public` folder will be cp to `dist` foler untouched.<br/>
Use environment variable `PUBLIC_URL` to refer the assets in the `public` foler.

In JS code, use `process.env.PUBLIC_URL` for similar purposes.

# Code Splitting

# Installing a Dependency

# Importing a Component

# Using Global Variables

# Add Bootstrap

# Add Flow and Typescript

# Add Relay

Relay is a framework for building data-driven React applications powered by GraphQL

# Add a [Router](https://reacttraining.com/react-router/web/)

# Add Custom Environment Variables

1. `NODE_ENV`
2. `REACT_APP_XX`
3. `process.env`
4. `process.env.NODE_ENV` which should be `development` when run `npm start` and `test` when run `npm test`

Referencing environment variable in HTML
    <title>%REACT_APP_WEBSITE_NAME%</title>

[inject environment variable at build time](https://create-react-app.dev/docs/title-and-meta-tags#generating-dynamic-meta-tags-on-the-server)

Adding temp environment variable in Shell

    REACT_APP_NOT_SECRET_CODE=abcdef npm start

Adding Development environment variable in `.env`

    REACT_APP_NOT_SECRET_CODE=abcdef

Progressive web App Metadata

Build your app

# Runing Tests