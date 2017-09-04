import React from 'react';
import {connect} from 'react-redux';

import {STORE} from '../../store/store';
import {SHOW_USED_FOOD_DETAIL, REMOVE_FROM_USED_FOOD, SAVE_USED_FOOD_ON_SERVER} from '../../actions/actions';

import './usedFood.scss';

function UsedFood (props) {
    let eatingType = props.eatingType || 'dinner'; //получаю из react-родителя как свойство !!!
    let selectedDay = props.selectedDay;
   
    function handleClick(e){
        let id = +e.target.id;
        let selectedFood = props.usedFood[selectedDay][eatingType].filter((item)=>{ return item.id === id})[0];
        STORE.dispatch(SHOW_USED_FOOD_DETAIL({selectedFood:  selectedFood}));
    }
///////////////////////
    function handleDeleteClick(e){
        STORE.dispatch(REMOVE_FROM_USED_FOOD({id: e.target.id, eatingType : eatingType, selectedDay: props.selectedDay}));
        e.stopPropagation();        
    }
///////////////////   
    return (
        <div className="usedFood">
           <h3>Скушала, да?!!!</h3>
                {console.log(props.usedFood)}
                
                {props.usedFood.items[props.selectedDay][eatingType].length != 0 ? <hr/> : '' }
                
                {props.isFatching ?
                    <h1>Загрузка</h1>
                    :
                    <div>
                        <ul>
                            {props.usedFood.items[selectedDay][eatingType].map((el, index)=>
                                <li onClick={handleClick.bind(this)}  id={el.id} key={index}>
                                    <span id={el.id}>{el.title}</span>
                                    <span id={el.id}> : {el.quantity} шт</span>
                                    <button id={el.id} onClick={handleDeleteClick.bind(this)}>Удалить</button>
                                </li>) }
                        </ul>
                        <hr />
                        <div className="usedFood_data">
                            <p><span>Белки: </span>{props.usedFood.items[selectedDay][eatingType].reduce((sum, current)=>{return sum + current.protein}, 0)}</p>
                            <p><span>Жиры: </span>{props.usedFood.items[selectedDay][eatingType].reduce((sum, current)=>{return sum + current.lipids}, 0)}</p>
                            <p><span>Углеводы: </span>{props.usedFood.items[selectedDay][eatingType].reduce((sum, current)=>{return sum + current.carbohydrate}, 0)}</p>
                            <p><span>Каллорийность: </span>{props.usedFood.items[selectedDay][eatingType].reduce((sum, current)=>{return sum + current.energy}, 0)}</p>
                        </div>
                        <div>
                            {props.isChanged ? <button className="btn btn-danger btn-large" onClick={props.saveUsedFoodListOnServer}>Сохранить</button>
                            : <button className="btn btn-success" onClick={props.saveUsedFoodListOnServer}>сохранено</button>
                            }
                        </div>
                    </div>
                }
        </div>
    )
}

export default connect(
    (state) => ({
        usedFood: state.usedFood,
        selectedDay: state.usedFood.date,
        isFatching : state.usedFood.isFatching,
        isChanged : state.usedFood.changed
    }),
    (dispatch) =>({
        saveUsedFoodListOnServer : ()=>{
            dispatch(SAVE_USED_FOOD_ON_SERVER());
        }
    })
)(UsedFood);

UsedFood.propTypes = {

}