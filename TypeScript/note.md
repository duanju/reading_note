## Init project

`npm init -y`

## Install dependencies

```
npm install --save-dev webpack webpack-cli
```

'--save-dev', in here, means the dependencies should only be added for development-time.

```
npm install --save react react-dom
npm install --save-dev @types/react @types/react-dom
```

'@types/' prefex means that we also want to get the declaration files for React and React-DOM.

```
npm install --save-dev typescript ts-loader source-map-loader
```

'ts-loader' helps Webpack compile TypeScript code using the `tsconfig.json`<br\>
'source-map-loader' is used for debugging.

## Add a TypeScript configuration file

Refer this [webpage](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) to get details.
    
    ts and ts -p project-path to launch the ts compiler

