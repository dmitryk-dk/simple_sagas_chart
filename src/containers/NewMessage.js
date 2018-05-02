import { connect } from 'react-redux';
import NewMessageComponent from '../components/NewMessage';
import {addMessage} from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (message, author) => {
            dispatch(addMessage(message, author));
        }
    }
}

export const NewMessage = connect(() => ({}), mapDispatchToProps)(NewMessageComponent);
