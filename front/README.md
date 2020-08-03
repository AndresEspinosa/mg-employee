This project was bootstrapped with **Create React App**.

Below you will find some information on how to perform common tasks.

## Table of Contents

- [Environment Quick Setup](#environment-quick-setup)
    - [Install NodeJs](#install-nodejs)
    - [Install Git](#install-git)
    - [Clone repository](#clone-repository)
    - [Install VS Code](#install-vs-code)
    - [Install VS Code Extensions](#install-vs-code-extensions)
    - [Install ReactDeveloperTools for Google Chrome](#install-reactdevelopertools-for-google-chrome)
    - [Install Global Packages](#install-global-packages)
- [Common Commands](#common-commands)
- [Create React App](#create-react-app)
- [Organize Application Structure](#organize-application-structure)
- [Create VS Code Settings File](#create-vs-code-settings-file)
- [Configure ESLint](#configure-eslint)
- [Configure EditorConfig](#configure-editorconfig)
- [Configure CSS Preprocessor (Sass)](#configure-sass-preprocessor)
- [Configure Stylelint](#configure-stylelint)
- [VS Code configuration](#vs-code-configuration)
	- [Ends of Lines](#ends-of-lines)
	- [Unknown file extensions](#unknown-file-extensions)
	- [Debbuging](#debbuging)
- [Installing necesary packages](#installing-necesary-packages)
	- [Lodash](#lodash)
	- [PropTypes](#proptypes)
	- [Redux](#redux)
	- [Redux Logger](#redux-logger)
	- [Thunk](#thunk)
	- [Axios](#axios)
	- [Axios Mock Adapter](#axios-mock-adapter)
	- [React Router](#react-router)
	- [Classnames](#classnames)
	- [React Helmeth](#react-helmeth)
    - [Web Font Loader](#web-font-loader)
    - [React Google Maps](#react-google-maps)
    - [DownShift](#downshift)

## Environment Quick Setup

### Install NodeJs
https://nodejs.org/es/download/

### Install Git
- [Git Client](https://git-scm.com/downloads)
- [Source Tree](https://www.sourcetreeapp.com) (Optional)

### Clone Repository
```shell
git clone https://github.com/AndresEspinosa/mg-employee.git
```

To avoid Git converting from LF to CRLF, run the following commands:
```shell
git config --global core.autocrlf false
git config --global core.eol lf
git rm --cached -r .
git reset --hard
```

### Install VS Code
https://code.visualstudio.com/download

### Install VS Code Extensions
- [DebuggerForChrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [JssSnippets](https://marketplace.visualstudio.com/items?itemName=visioncan.vscode-jss-snippets)
- [Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
- [NpmIntellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- [SortLines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
- [StyleLint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
- [SublimeBabel](https://marketplace.visualstudio.com/items?itemName=joshpeng.sublime-babel-vscode)

**NOTE:** Restart VS Code after installing all extensions

### Install ReactDeveloperTools for Google Chrome
https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation

### Install Global Packages
```shell
npm config set python /usr/bin/python # Required for UNIX
npm install -g node-sass-chokidar
npm install -g npm-run-all
```

## Common Commands
 - Install packages: `npm install`
 - Build CSS files: `npm run build-css`
 - Run JS linter: `npm run lintj`
 - Run CSS linter: `npm run lints`
 - Run unit tests: `npm run test`

Start the application by running `npm run start` and start debugging in VS Code by pressing `F5` or by clicking the green debug icon.

To build the applicacion:
```shell
npm run build:envName #where envName can be one of the following: dev, int, prd, stg, tst
cd build
http-server
```

## Create React App
To create a new app, follow this guide: https://github.com/facebookincubator/create-react-app

## Organize Application Structure
* Remove `registerServiceWorker.js`
* Remove `manifest.json` and its references in the `index.html` file
* Create directories:
    - `src/actions`
    - `src/config`
    - `src/containers`
    - `src/controls`
    - `src/core`
    - `src/pages`
    - `src/reducers`
    - `src/styles`
    - `src/test`
    - `src/util`

## Create VS Code Settings File
* On the root folder, create `.vscode` folder
* On the `.vscode` folder create `settings.json` file, with empty content: `{}`

## Configure ESLint
* Add the lint file to the root directory: `.eslintrc`:
    ```json
    {
        "env": {
            "jest": true
        },
        "extends": ["airbnb", "plugin:jest/recommended"],
        "plugins": ["jest"],
        "rules": { }
    }
    ```
* Rules: https://eslint.org/docs/rules
* Intall necesary packages for `airbnb` and `jest`:
    ```shell
    npm install --save-dev eslint
    npm install --save-dev eslint-plugin-jest
    npm install --save-dev eslint-config-airbnb
    ```
* Linter command line:
    - On the `package.json` file, add the following script:
        ```json
        "lintj": "./node_modules/.bin/eslint --ext .js src/"
        ```
    - To run eslint:
        ```shell
        npm run lintj
        ```
* Integration with VS code: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

## Configure EditorConfig
* Add the `.editorconfig` file to the root directory:
    ```
    root = true

    [*]
    charset = utf-8
    end_of_line = lf
    indent_size = 4
    indent_style = space
    insert_final_newline = true
    trim_trailing_whitespace = true

    [*.json]
    indent_size = 2
    ```
* Integration with VS Code Code: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

## Configure Sass Preprocessor
* Necesary packages:
    ```shell
    npm install --save node-sass-chokidar
    npm install npm-run-all --save-dev
    ```
* In the `package.json` file, add the following scripts:
    ```json
    "build-css": "node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/"
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path ./node_modules src/ -o src/ --watch --recursive"
    ```
* In the `package.json` file, replace `start` and `build` scripts for the following:
    ```json
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js"
    ```
* Remove all CSS files from the source control (`.gitignore`):
    ```
    src/**/*.css
    ```
* Hide all `CSS` files from VS Code. On `.vscode/settings.json` file, add the following setting:
    ```json
    "files.exclude": {
        "src/**/*.css": true
    }
    ```
* **Note**: always import style files as `.css` not as `.scss`. E.g:
    ```js
    import './styles.css';
    ```

## Configure Stylelint
* Necessary packages:
    ```shell
    npm install --save-dev stylelint
    npm install --save-dev stylelint-config-standard
    ```
* Create `.stylelintrc` file in the root directory
* Rules:
    - https://github.com/sasstools/sass-lint/tree/master/docs/rules
    - https://github.com/stylelint/stylelint/blob/master/docs/user-guide/example-config.md
* On the `package.json` file, add the following script:
    ```json
    "lints": "./node_modules/.bin/stylelint \"src/**/*.scss\"",
    ```
* To run stylelint:
    ```shell
    npm run lints
    ```
* Integration with VS Code: https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint

## Configure Unit Testing with Jest
* Necessary packages:
    ```shell
    npm install --save redux-mock-store
    ```
* In the `package.json` file, add Jest configuration:
    ```json
    "jest": {
        "collectCoverageFrom" : [
            "src/actions/**/*.js",
            "src/reducers/**/*.js",
            "src/util/**/*.js",
            "!src/actions/index.js",
            "!src/reducers/index.js",
            "!src/util/index.js"
        ]
    }
    ```
* In the `package.json` file, replace `test` script for the following:
    ```json
    "test": "react-scripts test --env=jsdom --coverage"
    ```
* In the root of src folder, Add `setupTests.js`, this file will be used
  to initialize common logic for all unit tests.

* To run tests:
    ```shell
    npm test
    ```
* Visual Studio Code integration:
    https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest

## VS Code configuration

### Ends of Lines
* For cross operating system support it's recommended to use `LF` not `CRLF`
* On `.vscode/settings.json` file add the following setting:
    ```json
    "files.eol": "\n"
    ```

### Unknown file extensions
* On `.vscode/settings.json` file add the following setting:
    ```json
    "files.associations": {
        ".env.*": "dotenv",
        ".stylelintrc": "json"
    },
    ```

### Debbuging
* Install Google Chrome Debugger: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome
* On `.vscode` folder, create `launch.json` file
    ```json
    {
        "version": "0.2.0",
        "configurations": [{
            "name": "Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:3000",
            "webRoot": "${workspaceRoot}/src",
            "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
            }
        }]
    }
    ```
* Start the app by running `npm start`, and start debugging in VS Code by pressing `F5` or by clicking the green debug icon.

## Installing necesary packages

### Lodash
**Purpose**: Use `throttle` function to save to the `localstore` every 1 second
```shell
npm install --save lodash
```

### PropTypes
**Purpose**: Document components
```shell
npm install --save prop-types
```

### Redux
**Purpose**: https://redux.js.org
```shell
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools
```

### Redux Logger
**Purpose**: Log Redux state to the JavaScript console
```shell
npm install --save redux-logger
```

### Thunk
**Purpose**: https://github.com/gaearon/redux-thunk
```shell
npm install --save redux-thunk
```

### Axios
**Purpose**: https://github.com/axios/axios
```shell
npm install --save axios
```

### Axios Mock Adapter
**Purpose**: https://github.com/ctimmerm/axios-mock-adapter
```shell
npm install --save axios-mock-adapter
```

### React Router
**Purpose**: Map urls to components
```shell
npm install --save react-router
npm install --save react-router-dom
```

### Classnames
**Purpose**: Create style classes easily
```shell
npm install --save classnames
```

### React Helmeth
**Purpose**: Put header information (title, metadata, etc.)
```shell
npm install --save react-helmet
```

### Cross Env
**Purpose**: Run scripts that set and use environment variables across platforms
```shell
npm install --save-dev cross-env
```

### DeepMerge
**Purpose**: Merges the enumerable attributes of two or more objects deeply.
```shell
npm install --save deep-merge
```

### MaterialUI
**Purpose**: https://material-ui.com
```shell
npm install --save @material-ui/core
npm install --save @material-ui/icons
```

### React Google Maps
**Purpose**: https://tomchentw.github.io/react-google-maps/#usage--configuration
```shell
npm install --save react-google-maps
npm install --save recompose
```

### DownShift
**Purpose**: https://github.com/paypal/downshift
```shell
npm install --save downshift
```
