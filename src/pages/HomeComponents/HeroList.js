import React, { Component } from 'react';
import axios from 'axios';

class HeroList extends Component {
state = {
	heros :[]
}

componentDidMount(){
	axios.get("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json").then(res => {
		console.log(res.data);
		this.setState({
			heros : res.data
		})
	})
}

render () {

	const { heros } = this.state;
	const heroList = heros.map(hero => {

		return (

	<div className="column is-half-mobile is-one-fifth-desktop" key={hero.id}>
		<div className="card">
		  <div className="card-image">
		    <figure className="image is-4by2">
		      <img src={hero.images.md} alt={hero.name} />
		    </figure>
		  </div>
		  <div className="card-content">
	        <p className="title is-4">{hero.biography.aliases[0]}</p>
	        <p className="subtitle is-6">@{hero.name}</p>
		    <div className="content">
		     {hero.work.occupation}
		    </div>
		  </div>
		</div>
		</div>

			)

	});



	return (
		<div className="columns is-multiline is-spaced">
			{ heroList }
		</div>
		)
	}

}

export default HeroList;
