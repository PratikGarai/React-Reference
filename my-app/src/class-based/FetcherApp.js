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

	componentDidMount(){
		fetch("https://swapi.dev/api/people/1")
		.then(response => response.json())
		.then(data =>{
			this.setState({
				character : data
			});
		});
	}

	render(){
		return(
			<h1>{this.state.character.name?this.state.character.name:"No Data"}</h1>
		);
	}
}

export default FetcherApp;
