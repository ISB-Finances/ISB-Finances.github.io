import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LearningGuides from './components/pages/LearningGuides';
import Comparisons from './components/pages/Comparisons';
import Glossary from './components/pages/Glossary';
import BudgetingHub from './components/pages/BudgetingHub';
import Dashboard from './components/UserAuth/Dashboard';
import { AuthProvider } from './components/UserAuth/AuthContext';
import PrivateRoute from './components/UserAuth/PrivateRoute';
import Signup from './components/UserAuth/Signup';
import Login from './components/UserAuth/Login'
import ForgotPassword from './components/UserAuth/ForgotPassword'
import UpdateProfile from './components/UserAuth/UpdateProfile'
import Account from './components/budgeting-hub/Account'




function App() {
  return (
    <>
      <Router>
        <Navbar />
                {/* <AuthProvider> */}
<Switch>
          <Route path='/' exact component={Home} />
          <Route path='/learning-guides' component={LearningGuides} />
          <Route path='/comparisons' component={Comparisons} />
          <Route path='/glossary' component={Glossary} />
          {/* <Route path="budgeting-hub/signup" component={Signup} />
                  <Route path="budgeting-hub/login" component={Login} />
                  <Route path="budgeting-hub/forgot-password" component={ForgotPassword}/> */}

          <Route path='/budgeting-hub' component={BudgetingHub} />


                 
        </Switch>
        {/* </AuthProvider> */}
      </Router>
    </>
  );
}

export default App;