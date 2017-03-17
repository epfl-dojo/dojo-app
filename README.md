# EPFL Dojo app

> A Quasar project that aims to centralize tools and communication for Coding Dojos at [EPFL](https:/www.epfl.ch).

## Initial Setup

``` bash
# clone the repository
$ git clone git@github.com:epfl-dojo/dojo-app.git && cd dojo-app

# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ quasar dev

# build for production with minification
$ quasar build

# lint code
$ quasar lint
```

### Cordova
  * Check with connected Android:  
    `cd cordova && quasar build && cordova run android`

  * Release signed APK:  
    `quasar build && cordova build android --release -- --keystore="epfldojo.keystore" --storePassword="XXXX" --alias=epfldojorelease`

### Electron
  * Build electron package:  
    `cd electron && quasar build`

  * To create a `.deb` file:  
    `cd electron && electron-installer-debian --src dist/EPFLDojoApp-linux-x64 --dest dist/installers/ --arch amd64`

## Versions
Note: when pushing a new version, be sure to check:
  * [ ] `package.json`
  * [ ] `src/App.vue`
  * [ ] `electron/package.json`
  * [ ] `cordova/config.xml`
