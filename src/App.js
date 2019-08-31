import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom'
import { ShopPage } from './pages/shop/shop.component';
import Header from './components/header/header.component';
import Accounts from './pages/accounts/accounts.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super()

    this.state= {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

       
        userRef.onSnapshot(snapshot => (
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        ));

      }
      else{
        this.setState({currentUser: userAuth})
      }

      
     

      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component= {Accounts}></Route>
        </Switch>
      </div>
    );
  }
  
}

export default App;
