import React from 'react';
import { connect } from 'react-redux';
import { createTicket } from '../../actions';
import TicketForm from './TicketForm';
//import  TicketFormNext from './TicketFormNext';

class TicketCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createTicket(formValues);
    };

    render() {
        return (
            <div>
                <h3>Create a Ticket</h3>
                <TicketForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(
    null,
    { createTicket }
)(TicketCreate);
