import React, {Component} from 'react';
import CardList from './CardList';
import {Robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

class App extends Component
{
	constructor(){
		super();
		this.state = {
			Robots : Robots,
			Searchfield : ''
		}

	}

	onSearchChange = (event) =>{
				this.setState({ Searchfield:event.target.value })
					
			// console.log(filteredRobots);	
	}

	render(){
				const filteredRobots = this.state.Robots.filter(Robots => {
				return Robots.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
			})
		return(
				<div className = 'tc'>
					<h1>ROBOFRIENDS</h1>
					<SearchBox SearchChange = {this.onSearchChange}/>
					<Scroll>
						<CardList Robots = {filteredRobots}/>
					</Scroll>
				</div>
			);

	}
}

export default App;