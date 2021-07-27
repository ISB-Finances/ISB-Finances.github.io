import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import LearningGuides from './components/pages/LearningGuides';
import Comparisons from './components/pages/Comparisons';
import Glossary from './components/pages/Glossary';
import BudgetingHub from './components/pages/BudgetingHub';
import TestGraph from './components/TestGraph';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import { AuthProvider } from './components/UserAuth/AuthContext';

function App() {
  return (
    <>
   
      <Router>
        <AuthProvider>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/learning-guides' component={LearningGuides} />
          <Route path='/comparisons' component={Comparisons} />
          <Route path='/glossary' component={Glossary} />
          <Route path='/budgeting-hub' component={BudgetingHub} />
         <Route path='/test' component={TestGraph} />
        </Switch>
        </AuthProvider>

      </Router>
    </>
  );
}

export default App;
