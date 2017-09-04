import React from 'react';
import {Route ,NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {CHOIСE_A_DAY} from '../../actions/actions';
import {STORE} from '../../store/store'; //для отработки dispatch

import curentDate from '../../reducer/curentDate';
import './menu.scss'

function Menu (props) {
    function selectDate(e){
        STORE.dispatch(CHOIСE_A_DAY({date : e.target.value}))
    }
    
    
    return (
            <nav className="topMenu clearfix">
                <ul>
                    {props.menu.map((el, index)=>
                        <li key={index}><NavLink activeStyle={{color: 'white', background: 'black'}} to={`/food/${el.url}`}>{el.title}</NavLink></li>)
                    }  
                <input onChange={selectDate.bind(this)} type="date" defaultValue={curentDate} />
                </ul>
            </nav>  
    )
}

export default withRouter( 
    connect(
  state => ({
    menu: state.menu
  }))(Menu)
);