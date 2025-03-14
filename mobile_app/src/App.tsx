import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { megaphone, home, person } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Login from './pages/Login';
import AddPost from './pages/AddPost';
import Comments from './pages/Comments';
import AddComment from './pages/AddComment';
import ClassesSchedule from './pages/ClassesSchedule';
import Homeworks from './pages/Homeworks';
import ExamsTable from './pages/ExamsTable';
import ExamsResults from './pages/ExamsResults';
import Notifications from './pages/Notifications';
import registerNotification from "./services/Notification";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

class App extends React.Component<any, any> {
  any = registerNotification();
  render() {
    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/Login" component={Login} />
              <Route path="/tab1" component={Tab1} exact={true} />
              <Route path="/tab1/ClassesSchedule" component={ClassesSchedule} />
              <Route path="/tab1/Homeworks" component={Homeworks} />
              <Route path="/tab1/ExamsTable" component={ExamsTable} />
              <Route path="/tab1/ExamsResults" component={ExamsResults} />
              <Route path="/tab1/Notifications" component={Notifications} />
              <Route path="/tab2" component={Tab2} exact={true} />
              <Route path="/tab2/AddPost" component={AddPost} />
              <Route path="/tab2/Comments" component={Comments} />
              <Route path="/tab2/AddComment" component={AddComment} />
              <Route path="/tab3" component={Tab3} />
              <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={home} />
                <IonLabel>الرئيسية</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon icon={megaphone} />
                <IonLabel>المشاركات</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon icon={person} />
                <IonLabel>الملف الشخصي</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>

        </IonReactRouter>
      </IonApp>
    )
  }
};

export default App;
