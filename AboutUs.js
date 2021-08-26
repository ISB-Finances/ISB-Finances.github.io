import React from 'react';
import { Media } from 'reactstrap';
import './media.css';

class AboutUs extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {};
	}
	
	render(){
		
		const aboutus = this.props.about.map((about) => {
			return(
				<div key={about.id} id="unit" className="col-12 mt-5">					
					<Media tag="li">
						<Media left>
							<Media object src={about.image} alt={about.name} />
						</Media>
						<Media body className="ml-3">
							<Media heading><strong>{about.name}</strong></Media>
							<div><strong> Year and Major </strong>{about.category}</div>
							<div><strong>Learnings and COntributions- </strong>{about.description}</div>
						</Media>
					</Media>
				</div>
			);
		});
		
		return(
			<div className="container">
				<div className="row">
					<Media list>
						{aboutus}
					</Media>
				</div>
			</div>
		);
	}
}

// 'Keys' - It helps identify which items have changed, are added or removed.


export default AboutUs;