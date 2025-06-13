import React from 'react';

function Button (props) {
    return (
        <>
          <button className='outline-none px-5 py-1 rounded-3xl font-medium font-mono shadow-lg' onClick={props.onClick} style={{backgroundColor: props.bgColor, color: props.btColor}} >{props.btColorName}</button>  
        </>
    );
}


export default Button;