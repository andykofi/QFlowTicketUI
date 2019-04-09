import React from 'react';
import { Route , Router } from "react-router-dom";
import TicketCreate from './tickets/TicketCreate';
import TicketDelete from './tickets/TicketDelete';
import TicketEdit from './tickets/TicketEdit';
import TicketList from './tickets/TicketList';
import TicketShow from './tickets/TicketShow';
import Header from './Header';
import  history from '../history';

const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={TicketList}/>
                    <Route path="/ticket/new" exact component={TicketCreate}/>
                    <Route path="/ticket/edit/:id" exact component={TicketEdit}/>
                    <Route path="/ticket/delete/:id" exact component={TicketDelete}/>
                    <Route path="/ticket/show" exact component={TicketShow}/>
                </div>
            </Router>
        </div>
    );
};

export default App;