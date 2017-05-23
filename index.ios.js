//import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
// const App = () => {
//   return (
//       <Text>Some Text</Text>
//   );
// };

const App = () => (
    <Header headerText={'Albums'} />
);

//render it to the device
AppRegistry.registerComponent('PlayingWithReactNative', () => App);
