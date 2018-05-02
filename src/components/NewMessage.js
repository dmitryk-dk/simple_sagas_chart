import React from 'react';
import PropTypes from 'prop-types';

const NewMessage = ({dispatch}) => {

    return (
        <section className={'NewMessage-container'}>
            <input 
                type="text" 
                onKeyPress={(e) => handleMessage(e, dispatch)} />
        </section>
    );
}

function handleMessage (e, dispatch) {
    const usename = 'dmitryk-dk';
    const { target } = e;
    if (e.key === 'Enter') {
        dispatch(target.value, usename);
        target.value = '';
    }
};

NewMessage.PropTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default NewMessage;
