import React, { Component } from 'react';
import  Person from './components/Person/Person';
import { Button } from 'reactstrap';

import './App.css';
import Rendomizenum from "./components/Rendomizenum/Rendomizenum";

class App extends Component {
  state={
    people: [
        {name:'Dmitrii',age: 29,hobby:'Video games'},
        {name: 'John',age: 30,hobby: 'Likes drinking alone'}
    ],
    numbers:[1,2,3,4,5]
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
    changeNumber=()=>{

        const numbers=[...this.state.numbers];
        console.log(numbers);
         for (let i=0;i<numbers.length;i++){
            let number=numbers[i];
            console.log(number);
            number=Math.floor(Math.random()*36)+1;
                numbers[i] = number;
                numbers.sort((a, b) => a - b);
            this.setState({numbers});
        }
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
              <Button color="danger" onClick={this.changeName}>Change Name</Button>
          </div>
          <div style={{
              width:'50%',
              boxShadow: '0 2px 2px #ccc',
              margin:'10px auto',
              padding:'20px'
          }}>
              <Rendomizenum numbers={this.state.numbers}/>
              <Button color="success" onClick={this.changeNumber}>Change numbers</Button>
          </div>
      </div>
    );
  }
}

export default App;
