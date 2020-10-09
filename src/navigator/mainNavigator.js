import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen212019Navigator from '../features/CopyOfBlankScreen212019/navigator';
import BlankScreen212011Navigator from '../features/BlankScreen212011/navigator';
import BlankScreen112010Navigator from '../features/BlankScreen112010/navigator';
import BlankScreen012009Navigator from '../features/BlankScreen012009/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen212019: { screen: CopyOfBlankScreen212019Navigator },
BlankScreen212011: { screen: BlankScreen212011Navigator },
BlankScreen112010: { screen: BlankScreen112010Navigator },
BlankScreen012009: { screen: BlankScreen012009Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
