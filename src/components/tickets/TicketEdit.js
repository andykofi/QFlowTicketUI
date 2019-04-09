import _ from 'lodash';
import React from 'react';
import { fetchTicket , editTicket } from '../../actions';
import TicketForm from './TicketForm';
import { connect } from 'react-redux';


class TicketEdit extends React.Component  {

    componentDidMount() {
        this.props.fetchTicket(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.editTicket(this.props.match.params.id,formValues)
    };

    render(){
        if(!this.props.tickets) {
            return <div> loading...</div>
        }
        console.log(this.props)
        return(
            <div>
                <h3>Update Ticket</h3>
                <TicketForm
                    //initialValues is from redux
                    initialValues={_.pick(this.props.tickets, 'title', 'description', 'date_view')}
                    onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state, onwProps) => {
    return { tickets: state.tickets[onwProps.match.params.id]};
};

export default connect( mapStateToProps, { fetchTicket, editTicket })(TicketEdit);