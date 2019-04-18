import React from 'react';
import './ToggleButton.css';

const ToggleButton=props=>{
    const containerStyle={
        marginTop:'10px'
    };
    const buttonClasses=['ToggleButton'];

    if (props.show){
        buttonClasses.push('Red');
    }

  return(
      <div style={containerStyle}>
          <button className={buttonClasses.join(' ')} color={"success"} onClick={props.onClick}>
              {props.children}
          </button>
      </div>
  );
};

export default ToggleButton;