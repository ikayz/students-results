import Students from './Students';
import StudentResults from './StudentResults';
import Edit from './Edit';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

const NavigationStack = createStackNavigator({
  Students: {
    screen: Students,
    navigationOptions:() => ({
      headerTitle: "Student Results"
    }),
  },
  Edit: {
    screen: Edit,
    navigationOptions: () => ({
      headerTitle: "Edit Results",
    })
  },
},
  {
    headerLayoutPreset: 'center',
});

const BottomTabNav = createBottomTabNavigator({
  NavigationStack: {
    screen: NavigationStack,
  },
  StudentResults: {
    screen: StudentResults,
  },
});

export default Routes = createAppContainer(BottomTabNav);
