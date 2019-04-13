import React, { Component } from 'react';
import  Person from './components/Person/Person';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    people: [
        {name:'Dmitrii',age: 29,hobby:'Video games'},
        {name: 'John',age: 30,hobby: 'Likes drinking alone'}
    ]
  };

  changeName=()=>{
      //const people=this.state.people;
      //  people[1].name='John Doe'; nikogda state nelzya izmenyat na pryamuyu
      const people=[...this.state.people]; //kopiruyem massiv.Eto spread operator
      const person={...people[1]};
      person.name='Jhon Doe';
      people[1]=person;

      //this.setState({people:people});
      this.setState({people});
  };
  render() {
    return (
      <div className="App">

        <Person name={this.state.people[0].name}
                age={this.state.people[0].age}>
            <i>this.state.people[0].hobby</i>
        </Person>
          <Person name={this.state.people[1].name}
                  age={this.state.people[1].age}>
            <i>{this.state.people[1].hobby}</i>
        </Person>
          <div>
              <button onClick={this.changeName}>Change Name</button>
          </div>
      </div>
    );
  }
}

export default App;
