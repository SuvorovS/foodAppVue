import React from 'react';
import {Link, NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { LOGOUT } from '../../actions/authorization';


function Header(props){
    return (
        <header>
             <nav className="navbar navbar-default">
                <div className="container-fluid">
                    {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1><Link className="navbar-brand" to="/">Food App</Link></h1>
                    </div>

                    {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><NavLink exact activeStyle={{color: 'white', background: 'black'}} to="/">Main</NavLink></li>
                            <li><NavLink activeStyle={{color: 'white', background: 'black'}} to="/food">Food Calculator</NavLink></li>
                            <li><NavLink activeStyle={{color: 'white', background: 'black'}} to="/another_page">Another page</NavLink></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {props.user !== '' ? <li className="dropdown">
                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{props.user} <span className="caret"></span></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a onClick={props.logout.bind(this)}>Log out</a></li>
                                                        
                                                    </ul>
                                                </li> 
                                                
                                                : 
                                                <li><Link to="/registration">Регистрация</Link></li>
                                                
                            }
                        </ul>
                    </div>
                </div>
                </nav>
        </header>
    );
};

export default withRouter( connect(
  state => ({
    user: state.user.userName
  }),
  dispatch => ({
    logout: () => {
       dispatch(LOGOUT());
    }
  })
)(Header));