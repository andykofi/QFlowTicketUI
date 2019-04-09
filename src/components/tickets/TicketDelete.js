import React from 'react';
import { Link } from "react-router-dom";
import  Modal  from '../Modal';
import history from '../../history';
import { fetchTicket, deleteTicket } from '../../actions';
import { connect } from 'react-redux';


class  ticketDelete extends React.Component {

    componentDidMount() {
        this.props.fetchTicket (this.props.match.params.id);
    }

    renderAction () {
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteTicket(this.props.match.params.id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );

    };

    renderContent () {
        if(!this.props.tickets) {
            return 'Are you sure you want to delete this ticket??'
        } else{
            return `Are you sure you want to delete the ticket with title:${this.props.tickets.title}`;
        }

    }

    render() {
        return (
            <div>
                <Modal
                    title="Delete Ticket"
                    content={this.renderContent()}
                    actions={this.renderAction()}
                    onDismiss={() => history.push('/')}
                />
            </div>

        );
    }

}
const mapStateToProps = (state, ownProps) => {
    return{ tickets:state.tickets[ownProps.match.params.id]}
};
/**
 * The ownprops allows us to pull the match.params.id
 * and show it up to this page
 */
export default  connect(mapStateToProps, { fetchTicket, deleteTicket })(ticketDelete);