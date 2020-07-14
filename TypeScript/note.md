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

## [Do's and Don's](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types)

1. Don't use the types refer to non-primitive boxed objects.
2. For callback function, use void instead of any.
```
/* WRONG */
function fn(x: () => any) {
    x();
}
```
3. Don’t write separate overloads that differ only on callback arity.
4. Don’t put more general overloads before more specific overloads. When an earlier overload is “more general” than a later one, the later one is effectively hidden and cannot be called.
5. Don’t write several overloads that differ only in trailing parameters.
6. Do use union types whenever possible, Don’t write overloads that differ by type in only one argument position.
```
 /* WRONG */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number): Moment;
    utcOffset(b: string): Moment;
}
```
```
/* OK */
interface Moment {
    utcOffset(): number;
    utcOffset(b: number|string): Moment;
}
```