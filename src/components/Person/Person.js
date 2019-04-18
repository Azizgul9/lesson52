import React from 'react';

import './Person.css';

//class Person extends Component {
const Person =props=> (
    //render() {
      //  return (
            <div className="person">
                <h1>
                    <button onClick={props.remove}>x</button>
                    {props.name}
                </h1>
                <p>
                    Age:
                    {props.age}
                    <button onClick={props.onClick}>+</button>
                    </p>
                <p>{props.children}</p>
                <p>
                    <input type="text" value={props.name}
                           onChange={props.onchange}/>
                </p>
            </div>
     //   );
   // }
);
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