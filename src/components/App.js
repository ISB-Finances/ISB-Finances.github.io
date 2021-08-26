import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom'
import AboutUs from './components/pages/AboutUs';
import { ABOUT } from './shared/about';

function App() {
  return (
  <Router> 
   <Navbar />
  </Router>
  );
}

class Apps extends React.Component {					
  
	constructor(props){
		super(props);
		
		this.state = {
			AboutUs: ABOUT
		};
	}
	
	render(){
		return (
			<div className='Apps'>
				<h1>About Us</h1>
				<AboutUs AboutUs={this.state.ABOUT} />
			</div>
		);
	}
}

export default App;
export {Apps};
