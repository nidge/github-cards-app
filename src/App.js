import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
const axios = require('axios').default;

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn
const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);


class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component {
	state = { userName: '' };
	handleSubmit = async (event) => {
  	event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
  const addressDetails =  await axios.get(`https://api.postcodes.io/postcodes/LS28 7RL`);

    console.log(resp);
    console.log(addressDetails);
    this.props.onSubmit(resp.data);
    this.setState({ userName: '' });
  };
	render() {
  	return (
    	<form onSubmit={this.handleSubmit}>
    	  <input 
          type="text" 
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username" 
          required 
        />
        <button>Add card....2222</button>
    	</form>
    );
  }
}

<div id="app" />

export default App;