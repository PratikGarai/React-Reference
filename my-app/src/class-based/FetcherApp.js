import React from 'react';

class FetcherApp extends React.Component
{
	constructor()
	{
		super();
		this.state = {
			character:{}
		}
	}

	render(){
		return(
			<h1>{this.state.character.name?this.state.character.name:"No Data"}</h1>
		);
	}
}

export default FetcherApp;
