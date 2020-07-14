import React from 'react';
import { IonPage, IonContent, IonCard, IonButton, IonCardContent, IonInput } from '@ionic/react';
import { postRequest } from "../services/API";
import Header from '../components/Header';

class Login extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      username: '',
      password: ''
    };
  }

  doLogin = () => {
    const data = postRequest("login", { username: this.state.username, password: this.state.password });
    data.then(data => {
      var result = JSON.parse(data.data);
      if (result.status == "1") {
        localStorage.setItem("user_id", result.message[0].id);
        this.props.history.push('/tab1');
      } else {
        alert("خطأ في معلومات الدخول");
      }
    })
  }

  render() {
    return (
      <IonPage>
        <Header title="أهلاً بك في مدرستي" />
        <IonContent>
          <IonCard className="login-card">
            <h1>تسجيل الدخول</h1>
            <IonCardContent>
              <IonInput clearInput onIonChange={(e) => this.setState({ username: (e.target as HTMLInputElement).value })} placeholder="اسم المستخدم"></IonInput>
              <IonInput type="password" onIonChange={(e) => this.setState({ password: (e.target as HTMLInputElement).value })} clearInput placeholder="كلمة المرور"></IonInput>
              <IonButton color="primary" expand="full" onClick={this.doLogin}>تسجيل الدخول</IonButton>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    );
  }
};

export default Login;
