import Person from "../Person/Person";
import React from "react";

const People=props=>{
    return props.people.map((person, index) =>(

    <Person
        key={index}
        name={person.name}
        age={person.age}
        onClick={() => props.increaseAge(index)}
        onchange={event => props.tryChangeName(event, index)}
        remove={()=>props.removePerson(index)}
    >
        <i>{person.hobby}</i>
    </Person>
    ));
};

export default People;