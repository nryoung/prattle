Prattle
======
Prattle is a [Twin Peaks](https://en.wikipedia.org/wiki/Twin_Peaks) themed chat application Built in React. Prattle makes use of the [Chatkit SDK](https://pusher.com/chatkit).

## Check out a live version of Prattle here

Table of Contents
=================
<!--ts-->
   * [Features](#features)
   * [Setting Up A Development Environment](#setting-up-a-development-environment)
   * [Enhancements and Improvements](#enhancements-and-improvements)
<!--te-->

Features
========

## Sending Messages
![Alt text](images/sending-messages.gif?raw=true "Sending Messages")

## Receiving messages
![Alt text](images/receiving-messages.gif?raw=true "Receiving Messages")

## Typing Indicator
![Alt text](images/typing-indicator.gif?raw=true "Receiving Messages")

**NOTE:** If you don't see the typing indicator when you test this that means you are logged in to the same account (they are assigned randomly). Refresh one of the browsers you are testing with to login as a different user.

Setting Up A Development Environment
====================================

**NOTE:** I developed this application using Node v10.13.0 and Yarn v1.12.3. If you experience any installation or development issues please ensure you are using the same (or close) versions.

1. In order to setup the application locally, clone the repo:
```
$ git clone https://github.com/nryoung/prattle.git
```

2. Next install all the dependencies needed:
```
$ yarn install
```

3. If you haven't created a [Chatkit](https://pusher.com/chatkit) free account, you will need to now. You will then need to get the relevant values from your account and add them to your `.env` like so (at the root of the repo):
```
REACT_APP_INSTANCE_LOCATOR="<instance locator value here>"
REACT_APP_TOKEN_PROVIDER="<token provider value here>"
REACT_APP_ROOM="<room id here>"
```

  **NOTE:** all of these values can be found under the `Settings` tab on your account. Dotenv will then automatically inject these values during build time to the places in the application that need them.

4. The next and final thing to do is is start up the application for the first time:
```
$ yarn start
```

5. If your feeling extra ambitious you can always run the tests via:
```
$ yarn test
```

Enhancements and Improvements
=============================

While developing this application I ran in to a list of things that I would love to improve to make both the user and developer experience better if given more time.

#### Ability to add new users and user authentication
The [Chatkit SDK](https://pusher.com/chatkit) only allows the creation of new users if you are running your own server with their SDK running on it. The ability to add new users along with user authentication would be necessary in the future development of this application.

#### a11y Support
When building this application so quickly I definitely did not have to time to think about a11y support. If I continued I would think about adding support right away as it is easier to add at the beginning than at the end.

#### Loading States
There are no loading states or placeholders in the application currently. In the future it would be nice to add loading states, animations and placeholders so that components and data don't randomly render on the screen when they are done loading, potentially disorienting the user.

#### Internationalization
Adding international support and translations to an application is much easier to do at the beginning of applications life than when it is more mature. I would use a library like [React Intl](https://github.com/yahoo/react-intl) to do this.

#### Error handling when sending or receiving messages
If the application fails to send or receive a message there is no error handling or error alert UI to let the user know that it failed. Adding error handling and the corresponding UI would allow for a better user experience.

#### CDN for hosting images
The background image to the application, which is rather large, is served locally via the application itself. In the future, this image should be moved to a CDN like [Cloudinary](https://cloudinary.com/) which would be able to serve all images much quicker than the application ever could.

#### Support for more screen sizes
The application only supports standard size mobile device (iPhone6 and up) and standard desktop screen sizes. You can see where I define those breakpoints [here](https://github.com/nryoung/prattle/blob/master/src/styles/media.js). I would like to expand the supported screen size for small devices like the iPhone5 as well as extra wide and HD screens.

#### Standardize pixel sizes or use CSS grid for standard columns and rows.
Chat applications are pretty standard layout wise. I would standardize the pixel sizes throughout the application. I would also seriously consider using something like CSS grid to make the layout even easier.

#### Comprehensive tests
The tests at the moment are only really doing snapshot testing. If given more time, I would love to add more functional tests to make sure things are getting called correctly when components mount and other component functionality. Also, I would probably move over to using [Enzyme](https://github.com/airbnb/enzyme) as the test render as it is performant and easily allows for shallow and fully mounted rendering.

#### Organization of components
The components right now are organized in a very flat tree structure. As this application grows in complexity we would definitely want to define a more organized component structure to make the code easier to navigate.

#### Support for other browsers
Testing on this application was only done with the latest version of Chrome and Firefox. As development continued we would want to make sure to support the latest version of Microsoft Edge and any versions of Internet Explorer that we would need to support.

#### Animations
The user experience could be improved drastically by adding animations for when a user receives a new message and sends a new message. Currently, they just pop in to the screen.

#### Webpack resolve path option
As this application grows in complexity and the directory structure becomes larger I would want to add [Webpack resolve option](https://webpack.js.org/configuration/resolve/) that would allow us to turn relative imports that look like this:
```
import module from '../../../directory/module'
```
into ones that look like this:
```
import module from 'components/directory/module'
```

#### Better defined prop types
This one is pretty minor, although important. Some of the prop types I have defined are using `PropTypes.object` which is not ideal since we want to explicitly define what properties and values in the object that we are passing in as props are.

#### Add the Styled Components Babel plugin
This one is also minor, but provides a much better developer experience when inspecting and troubleshooting issues in the DOM. [The Styled Components Babel Plugin](https://github.com/styled-components/babel-plugin-styled-components) not only adds this but a bunch of other functionality that is extremely useful.
