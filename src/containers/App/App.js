import React, {Component} from 'react';
//import Person from '../../components/Person/Person';
import {Button} from 'reactstrap';

import './App.css';
import Rendomizenum from "../../components/Rendomizenum/Rendomizenum";
import People from "../../components/People/People";
import ToggleButton from "../../components/ToogleButton/ToggleButon";
import PeopleCounter from "../../components/PeopleCounter/PeopleCounter";


class App extends Component {
    state = {
        people: [
            {name: 'Dmitrii', age: 29, hobby: 'Video games',id:'d1'},
            {name: 'John', age: 30, hobby: 'Likes drinking alone',id:'d2'},
            {name: 'Jack', age: 69, hobby: 'Collects posts stamps',id:'d3'},
            {name: 'Haru-kin', age: 19, hobby: 'Otaku desu!',id:'d4'}
        ],
        numbers: [1, 2, 3, 4, 5],
        showPeople: true
    };

    changeName = () => {
        //const people=this.state.people;
        //  people[1].name='John Doe'; nikogda state nelzya izmenyat na pryamuyu
        const people = [...this.state.people]; //kopiruyem massiv.Eto spread operator
        const person = {...people[1]};
        person.name = 'Jhon Doe';
        people[1] = person;

        //this.setState({people:people});
        this.setState({people});
    };
    /*increaseAge=()=>{
        const people=this.state.people.map(person=>{
            return {
                ...person,
                age: person.age + 1
            };
        });

        this.setState({people});
    };*/

    increaseAge = index => {

        const people = [...this.state.people];
        const person = {...people[index]};
        person.age++;
        people[index] = person;

        this.setState({people});
    };

    tryChangeName = (event, index) => {
        // console.log("Im here!",event.target.value);

        const people = [...this.state.people];
        const person = {...people[index]};
        person.name = event.target.value;
        people[index] = person;

        //this.setState({people:people});
        this.setState({people});
    };

    togglePeople = () => {
        this.setState(
            {
                showPeople: !this.state.showPeople
            }
        );
    };

    removePerson=index=>{
        const  people=[...this.state.people];
        people.splice(index,1);

        this.setState({people});
    };
    changeNumber = () => {

        const numbers = [...this.state.numbers];
        console.log(numbers);
        for (let i = 0; i < numbers.length; i++) {
            let number = numbers[i];
            console.log(number);
            number = Math.floor(Math.random() * 36) + 1;
            numbers[i] = number;
            numbers.sort((a, b) => a - b);
            this.setState({numbers});
        }
    };

    render() {
        let people = null;

        let buttonClasses=['Button'];

        if (this.state.showPeople) {
            people = (
                <People
                    people={this.state.people}
                    increaseAge={this.increaseAge}
                    tryChangeNme={this.tryChangeName}
                    removePerson={this.removePerson}
                />
            );
            buttonClasses.push('Red');
            // people =
            //(
            // <Fragment>
            // [<Person name={this.state.people[0].name}
            //          age={this.state.people[0].age}
            //          onClick={() => this.increaseAge(0)}
            //          onchange={event => this.tryChangeName(event, 0)}
            // >
            //     <i>{this.state.people[0].hobby}</i>
            // </Person>,
            //     <Person name={this.state.people[1].name}
            //             age={this.state.people[1].age}
            //             onClick={() => this.increaseAge(1)}
            //             onchange={event => this.tryChangeName(event, 1)}
            //     >
            //         <i>{this.state.people[1].hobby}</i>
            //
            //     </Person>
            //     // <div>
            //     //     <Button color="danger" onClick={this.changeName}>Change Name</Button>
            //     //     {/*<Button color="danger" onClick={this.increaseAge}>Increase age</Button>*/}
            //     // </div>
            // ];
            // </Fragment>
            //);
        }



        return (
            <div className="App">
               {/* <div style={containerStyle}>
                    <button className={buttonClasses.join(' ')} color={"success"} onClick={this.togglePeople}>Toggle people</button>
                </div>*/}
                <ToggleButton
                show={this.state.showPeople}
                onClick={this.togglePeople}
                >Toggle people</ToggleButton>
                {/*<p style={counterStyle}>
                    Total people: {this.state.people.length}
                </p>*/}
                <PeopleCounter numberOfPeople={this.state.people.length}/>
                {people}
                <div style={{
                    width: '50%',
                    boxShadow: '0 2px 2px #ccc',
                    margin: '10px auto',
                    padding: '20px'
                }}>
                    <Rendomizenum numbers={this.state.numbers}/>
                    <Button color="success" onClick={this.changeNumber}>Change numbers</Button>
                </div>
            </div>
        );
    }
}

export default App;
