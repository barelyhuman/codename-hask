/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import App from './App';

Navigation.registerComponent('im.reaper.hask', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'im.reaper.hask'
             }
           }
         ]
       }
     }
  });
});

