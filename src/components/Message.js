import React from 'react';
import PropTypes from 'prop-types';

const Message = ({author, message}) => {
    return (
        <p>
            <i>{author}</i>&nbsp;{message}
        </p>
    );
};

Message.PropTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Message;
