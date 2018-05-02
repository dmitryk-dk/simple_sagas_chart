import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

const MessagesList = ({messages}) => {
    return (
        <section className={'MessagesList-container'}>
            <ul>
                {messages.map((message, i) => {
                    return (
                        <Message 
                            key={i}
                            {...message}
                        />
                    );
                })}
            </ul>
        </section>
    );
}

MessagesList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default MessagesList;
