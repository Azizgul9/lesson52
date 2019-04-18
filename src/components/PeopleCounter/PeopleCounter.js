import React from 'react';

const PeopleCounter=({numberOfPeople})=>{
    const counterStyle={
        color:'green'
    };

    if(numberOfPeople<=2){
        counterStyle.color='red';
    }
    if(numberOfPeople<=1){
        counterStyle.fontWeight='bold';
    }
  return(
      <p style={counterStyle}>
          Total people: {numberOfPeople}
      </p>
  );
};
export default PeopleCounter;