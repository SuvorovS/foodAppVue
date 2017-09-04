import React, {Component} from 'react';
import {connect} from 'react-redux';

import {STORE} from '../../store/store';
import {ADD_TO_USED_FOOD, CHANGE_FOOD_COUNT} from '../../actions/actions';

import './foodDitail.scss';

class FoodDitail extends Component {
    constructor (props){
        super(props);
        this.state = {value : ''};
        let eatingType = props.eatingType;
    }
    setFoodPortionCount(e) {
        let foodCount = e.target.value;
        this.setState({value : e.target.value})
        STORE.dispatch(CHANGE_FOOD_COUNT({foodCount, id : this.props.curentFood.id}))    
    }
    clearFoodPortionCount(e) {
        let foodCount = e.target.value;
        this.setState({value : ''})
    }
    componentWillReceiveProps(nextProps, nextState){ //********** */
        this.setState({value : nextProps.value})
    }
   
    addToUsedFood(e) {
        STORE.dispatch(ADD_TO_USED_FOOD({foodToAdd :  this.props.curentFood,
             eatingType: this.props.eatingType, selectedDay: this.props.selectedDay}));
    }
    render(){
        return (
            <div className="foodDitail">
                <h3 className="foodDitail_header">{this.props.curentFood.title || 'Продукт'}</h3>
                <hr/>
                <div className="foodDitail_data">
                    <p>
                        <span>Количество: </span>
                        <input type="text" onClick={this.clearFoodPortionCount.bind(this)}
                             onChange={this.setFoodPortionCount.bind(this)} value={this.state.value} /> 
                       <span>{this.state.value ?  Math.round(this.state.value * this.props.curentFood.portion) + ' г.' 
                            : ' г.'}</span>
                    </p>
                    <p><span>Белки: </span>{this.props.curentFood.protein || 0}</p>
                    <p><span>Жиры: </span>{this.props.curentFood.lipids || 0}</p>
                    <p><span>Углеводы: </span>{this.props.curentFood.carbohydrate || 0}</p>
                    <p><span>Каллорийность: </span>{this.props.curentFood.energy || 0}</p>
                </div>
                    {Array.isArray(this.props.curentFood) || this.props.curentFood.quantity === 0 ? <button>скушать</button>
                                                                : <button onClick={this.addToUsedFood.bind(this)}>скушать</button>}
            </div>
        )
    }
}

export default connect(
    state => ({
        curentFood : state.curentFood,
        selectedDay : state.usedFood.date,
        value : state.curentFood.quantity
    }),
    dispatch =>({
       
    })
)(FoodDitail);