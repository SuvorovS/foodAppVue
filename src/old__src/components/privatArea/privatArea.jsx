import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AuthorizationPanel from '../authorization/authorizationPanel';
import IsAuthorizedPreloader from '../authorization/isAuthorizedPreloader';
import { CHECK_AUTHORIZED } from '../../actions/authorization';

class PrivatArea extends Component {

    componentWillMount(){
        console.log('PrivatArea will componentWillMount');
        this.props.checkAuthorized();
    }

    needAuthorization(){
        return ( <AuthorizationPanel /> )
    }
    isAuthorizing(){
            return ( <IsAuthorizedPreloader /> )
    }
    renderAutorized(){
        return (
            <div className="privat_area">{this.props.children}</div>
        );
    }

    render(){
        if (this.props.isAuthorizing) {
            return ( this.isAuthorizing() )
        }
        else if(this.props.user !== '' && this.props.user !== false){
            return( this.renderAutorized() )
        }
        else {
            return( <AuthorizationPanel /> )
        }
    }
}

export default withRouter (connect(
    (state) => ({
        user : state.user.userName,
        authorizedUser: state.user.authorized,
        isAuthorizing : state.user.isAuthorizing,
    }),
    dispatch => ({
        checkAuthorized: () => {
            dispatch(CHECK_AUTHORIZED());
        }
    })
)(PrivatArea));