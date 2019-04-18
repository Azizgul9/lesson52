import React from 'react';
import './Rendomizenum.css';

const Rendomizenum = (props) => {
    const numbers = props.numbers;
    const listItems = numbers.map((number,index) =>
        <li key={index} className={"num_item"}>{number}</li>
    );
    return (
        <ul className={"num_list"}>{listItems}</ul>
    );
};

export default Rendomizenum;