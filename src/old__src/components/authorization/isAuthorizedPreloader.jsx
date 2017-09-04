import React, { Component } from 'react';
import { connect } from 'react-redux';


import './authorization.scss';

function IsAuthorizedPreloader(props) {
    return (
        <div className="authorization">
            <img src="img/isAuthorizedPreloader.gif" alt=""/>
        </div>
    )
}
            

export default connect(
  state => ({}),
  dispatch => ({})
)(IsAuthorizedPreloader);

