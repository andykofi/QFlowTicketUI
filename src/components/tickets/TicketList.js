import React from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../../actions';
import { Link } from 'react-router-dom';


class  TicketList extends  React.Component {

    componentDidMount() {
        this.props.fetchTickets();
    }

    renderAdmin(stream) {
        if(stream.userId === this.props.CurrentUserId){
            return(

                <div className="right floated content">
                    <Link to={`/ticket/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>

                    <Link to={`/ticket/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.tickets.map(ticket => {
            return(
                <div className="item" key={ticket.id}>
                    {this.renderAdmin(ticket)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {ticket.title}
                        <div className="description">{ticket.description}</div>
                        <div className="date_view">{ticket.date_View}</div>
                    </div>
                </div>
            );

        });
    }
    renderCreate() {
        if(this.props.isSignedIn) {
            return(
                <div style={{ textAlign: 'left'}}>
                    <Link to="/ticket/new" className="ui button primary">
                        Create Ticket
                    </Link>
                </div>
            );
        }
    }



    render() {
        return (
            <div>
                <h1> Ticket List</h1>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
};


/**
 * we are turning our list object into an array so we can use the map function
 * in this component. We do that by using Object.values(state.streams). streams is from
 * reducer.
 */
const mapStateToProps = (state) => {
    return {
        tickets: Object.values(state.tickets),
        CurrentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
}

export default connect(mapStateToProps, { fetchTickets })(TicketList);