import React, {Component} from 'react';

import './Person.css';

class Person extends Component {
    render() {
        return (
            <div className="person">
                <h1>{this.props.name}</h1>
                <p>Age: {this.props.age}</p>
                <p>{this.props.children}</p>
            </div>
        );
    }
};
//
// class Human{
//     // constructor(){
//     //     this.age=0;
//     // }
//     age=0;
//
//     // increaseAge(){
//     //     this.age++;
//     //     console.log('Human is now',this.age);
//     // }
//     increaseAge=()=>{
//             this.age++;
//             console.log('Human is now',this.age);
//         }
//     startLife=()=>{
//        // setInterval(this.increaseAge.bind(this),1000);
//         //setInterval(()=>this.increaseAge(),1000);
//         setInterval(this.increaseAge(),1000);
//     }
// }
//
// const h=new Human();
// h.startLife();

export default Person;