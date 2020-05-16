import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Exercise from './pages/Exercise';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
    Exercise,
  }),
);

export default Routes;
