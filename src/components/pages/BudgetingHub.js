import React from 'react';
// import Footer from '../Footer';
import { Container } from 'react-bootstrap';
import Signup from '../UserAuth/Signup'
import Dashboard from '../UserAuth/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Login from '../UserAuth/Login';
import PrivateRoute from '../UserAuth/PrivateRoute';
import ForgotPassword from '../UserAuth/ForgotPassword';
import UpdateProfile from '../UserAuth/UpdateProfile';
import { AuthProvider } from '../UserAuth/AuthContext';
import Account from '../budgeting-hub/Account'


export default function BudgetingHub() {
    return ( 
        <>
  <Container className = "d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
         <div className="w-100" style={{maxWidth:"400px"}}>
<Router>
    <AuthProvider>
        <Switch>    
        <PrivateRoute path="/budgeting-hub/update-profile" component={UpdateProfile}/>
        <PrivateRoute exact path="/budgeting-hub" component={Dashboard}/>
        <PrivateRoute path="/budgeting-hub/account" component={Account}/>
                  <Route path="/budgeting-hub/signup" component={Signup} />
                  <Route path="/budgeting-hub/login" component={Login} />
                  <Route path="/budgeting-hub/forgot-password" component={ForgotPassword}/>

                  </Switch>
                  </AuthProvider>

                  </Router>


               </div>
       </Container>           
         </>
    );
}