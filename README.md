# mornya-react-npm-template

> The template of react component project to upload NPM registry.
>
> Based on [mornya-react-scripts](https://github.com/mornya/mornya-react-scripts) that customized [CRA](https://github.com/facebookincubator/create-react-app) (react/redux boilerplate) scripts.

## Initialize

##### Install dependencies
```bash
npm i
```

## Build

##### Build your project
```bash
npm run bundle (NOT "npm run build")
```

## Publish

##### Publish to NPM registry
```bash
npm login
npm publish build (or npm run bundle)
```

## Other commands

##### Run all tests
```bash
npm test
```
##### Clear production build directory
```bash
npm run clean
```
##### Run Lint
```bash
npm run lint
```
##### Flow Type Check
```bash
npm run flow
```
##### Start Flow Type server
```bash
npm run flow:start
```
##### Stop Flow Type server
```bash
npm run flow:stop
```

## Generated this project

```bash
npm install -g create-react-app
create-react-app mornya-react-npm-template --scripts-version mornya-react-scripts

(generate configurations)
(make directories)
(copy files to "public" directory to distribute)
```
