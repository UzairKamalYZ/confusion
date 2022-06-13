# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


The Flux Architecture (way of organising react application)
* Unidirectional Data Flow 
Action -> Dispatcher -> Store -> View
 Flux could have multiple store , and modification controlled by store. 
Modification done via actions, store subscribed by views. On update store will emit the change and contoller will referesh the
 state again and it will cause rerendering part of the page. 
Stores cannot be modified directly but via Actions only.<BR>
-- `New Actions propagated through the system in response to user interactions`


Redux is kind of Flux approach:
(A general approach can be applied in Angular, React and etc.)
* Store the state and consistent way to access the state. Be able to modify and modification 
be reflected in application. 
1) Predictable state container for JS apps. 
2) Inspired by Flux, Elm, Immutable
3) Makes state mutation predictable. 
Prinicple of Redux
* Single source of truth
  - Single state object tree within a single store
    - Single store and single state tree enbale powerful techniques
      - Logging
      - Api handling
      - undo/redo
      - State persistance
      - time travel debugging
* State is read-ony
* Changes are made with pure functions
   - Take previous state and action and return next state
   - No mutation of the previous state

Redux Data Flow
![img.png](img.png)

Redux Concepts: 
* State : store in plain JS Object
* Action : Plain JS Object with type field that specifies how to change something in state. 
* Reducer:  Pure funcitons which take current state and generate new state (Update data Immutably)
* 

`npm install redux`
`npm install react-redux`
