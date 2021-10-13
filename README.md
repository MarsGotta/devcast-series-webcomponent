# devcast-series-webcomponent
¡Hi! 
This is the repository with the supporting code for the talk "A new website with WebComponents".
This is a mono-repository so you'll find different packages with different proyects:
* mars-button: The WebComponent example in the talk.
* angular-app: A simple application in Angular with the webcomponent implemented
* react-app: A simple application in React with mars-button component implemented
* vue-app: A simple Vue app with mars-button component implemented

## Install
For install you need to have [Lerna](https://github.com/lerna/lerna) and [Yarn](https://yarnpkg.com/) installed:
```
npm i -g lerna
```
Then you need to install all dependencies through Lerna:
```
lerna bootstrap
```

Finally you need to enter each of packages and start each project through the command line:
```
cd packages/mars-button
yarn start

cd packages/angular-app
yarn start

cd packages/react-app
yarn start

cd packages/vue-app
yarn start
```

## Resources
[Talk Slides](https://slides.com/marsgotta/una-nueva-web-con-webcomponents)
