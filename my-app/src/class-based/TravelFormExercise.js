import React from 'react';

class TravelForm extends React.Component{

	constructor(){
		super()
		this.state = {
			firstName : ""
		}
	}

	render(){
		return(
		<div>
			<form>
				<label for="firstName">First Name : </label>
				<input 
					type="text"
					value = ""
					placeholder = "First Name"
				/>
			</fomv>
		</div>
		);
	}
}

export default TravelForm;
