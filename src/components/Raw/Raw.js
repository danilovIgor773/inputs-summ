import React from 'react';

const Raw = (props) => {
    return (
        <input type='text'
            value={props.value}
            onChange={props.changed}
        ></input>
    );
}

export default Raw;