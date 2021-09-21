import { combineReducers, createStore } from "redux";

import CalenderScreen from "./src/data/screens/CalenderScreen";
import { Provider } from "react-redux";
import React from "react";
import UniversityDetailScreen from "./src/data/screens/UniversityDetailScreen";
import UniverstiesScreen from "./src/data/screens/UniverstiesScreen";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from 'react-navigation-stack';
import {universityReducer} from './src/store/reducers/university'

const rootReducer = combineReducers({
  university: universityReducer,
});
const store = createStore(rootReducer);
const switchNavigator = createBottomTabNavigator({
  Calender: createStackNavigator({
    Calenders: CalenderScreen,
  }),
  UniversititesFlow: createStackNavigator({
    Universities: UniverstiesScreen,
    UniversityDetail: UniversityDetailScreen,
  })
});

const AppScreens = createAppContainer(switchNavigator);
export default function App() {
  return (
    <Provider store={store}>
      <AppScreens />
    </Provider>
  );
}
