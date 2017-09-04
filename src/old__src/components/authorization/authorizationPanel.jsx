import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { LOGIN } from '../../actions/authorization';

import './authorization.scss';

function  AuthorizationPanel (props) {
    return (
        <div className="authorization">
            <h2 className="text-center">Авторизация</h2>
            <form onSubmit={props.login.bind(this)}>
                <div>
                    {props.incorectLogin ? <input className="red"  required type="text" placeholder="Логин" /> :
                        <input required type="text" defaultValue="1" placeholder="Логин" /> 
                    }
                </div>
                <div>
                    {props.incorectPassword ? <input className="red" required type="password" placeholder="Пароль" /> : 
                        <input required type="password" defaultValue="1" placeholder="Пароль" />
                    }
                </div>
                <div>
                    <button>post./api/login  войти</button>
                </div>
            </form>
        </div>
    )
}

export default connect(
  state => ({
    incorectLogin: state.user.incorectLogin,
    incorectPassword: state.user.incorectPassword
  }),
  dispatch => ({
    login : (event) => {
        event.preventDefault();
        dispatch(LOGIN(event));
    }
}))(AuthorizationPanel);