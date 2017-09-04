import React from 'react';
import {connect} from 'react-redux';

import {STORE} from '../../store/store';
import {SHOW_CURENT_FOOD_DETAIL, SEARCH_FOOD} from '../../actions/actions';

import './products.scss'

function Products (props) {
    function handleShowFoodClick(e){
        let id = +e.target.id;
        let choosenFood = props.foodList.filter((item)=>{ return item.id === id})[0];
        STORE.dispatch(SHOW_CURENT_FOOD_DETAIL({selectedFood : choosenFood}));
    }
    
    function handleSearchFood(e){
            STORE.dispatch(SEARCH_FOOD(e.target.value)); 
    }

    return (
        <div className="products">
            <h3>Список продуктов</h3>
            <hr/>
            <div className="products__search">
                <input onChange={handleSearchFood} type="text"/>
            </div>
            <ul>
                {props.foodList.map((el, index)=>
                <li onClick={handleShowFoodClick.bind(this)} id={el.id} key={index}>{el.title}</li>)
                }
            </ul>
        </div>  
    )
}

export default connect(
  (state) => ({
    foodList: state.foodList.filter( (elem)=>{return elem.title.toLowerCase().indexOf(state.filterListFood.toLowerCase()) !== -1})
  }))(Products);