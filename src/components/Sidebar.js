import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({users}) => {
    console.log(users);
    return (
        <aside>
            <ul>
                {users.map((user, i) => (<li key={i}>{user.name}</li>))}
            </ul>
        </aside>
    );
}

Sidebar.PropTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,

        }).isRequired
    ).isRequired
};

export default Sidebar; 
