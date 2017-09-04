import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { REGISTRATION, CHECK_BUSY_USER } from '../../actions/registration';

import './registration.scss';

function  RegistrationPanel (props) {
    return (
        <div className="authorization">
            <h2 className="text-center">Регистрация</h2>
            <form onSubmit={props.registrationUser.bind(this)}>
                <div>
                    {props.busyRegistrationUser ?
                        <input onChange={props.checkBusyRegistrationUser} className="red"  required type="text" defaultValue="111" placeholder="Логин" />
                    :    
                        <input onChange={props.checkBusyRegistrationUser} required type="text" placeholder="Логин" /> 
                    }
                </div>
                <div>
                    <input required type="password" placeholder="Пароль" />
                </div>
                <div>
                    {props.busyRegistrationUser ? <button disabled >post./api/registration регистрация</button> : <button>post./api/registration регистрация</button> }
                </div>
            </form>
        </div>
    )
}

export default connect(
    state => ({
        busyRegistrationUser: state.user.busyRegistrationUser,
    }),
    dispatch => ({
        checkBusyRegistrationUser: (event)=>{
           dispatch(CHECK_BUSY_USER(event)); 
        },
        registrationUser : (event) => {
            event.preventDefault();
            dispatch(REGISTRATION(event));
        }
}))(RegistrationPanel);