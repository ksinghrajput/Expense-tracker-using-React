import React from 'react';
import '../NewExpence/NewExpence.css'

const ShowInputFormButton = (props) => {
    return (

        <div className='new-expense'>
            <div className='new-expense__action'>
                <button type="button" onClick={props.onInputFormVisibility}>Add Expenses</button>
            </div>
        </div>
    );
}

export default ShowInputFormButton;
