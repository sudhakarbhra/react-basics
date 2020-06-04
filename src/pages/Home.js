import React from 'react'
import HeroList from './HomeComponents/HeroList.js'

const Home = () => {

	return ( 

		<div className="container">
			<section className="hero is-danger is-medium">
			  <div className="hero-body">
			    <div className="container has-text-centered">
			      <h1 className="title">
			       Welcome to SuperHero API
			      </h1>
			      <h2 className="subtitle">
			       This is an simple training project to work with API using React and Axios
			      </h2>
			    </div>
			  </div>
			</section>
			
	        <h1 className="title mt-3">Column sizes</h1>
            <p className="subtitle"> Define the <strong>size</strong> of each column <strong>individually</strong></p> 

			
				<HeroList />
			
		</div>

	 )

}

export default Home;
