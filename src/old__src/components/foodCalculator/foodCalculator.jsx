import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


import Menu from './menu';
import Products from './products';
import FoodDetail from './foodDetail';
import UsedFood from './usedFood';


import '../../app.scss'

class FoodCalculator extends Component {
  
  render() {
     
     return (
       
            <div className="main clearfix">
                <div className="">
                    <Menu />
                    { (this.props.match.params.foodType !== undefined )? 
                    
                        <div>
                            <Products />
                            <FoodDetail eatingType={this.props.match.params.foodType} />
                            <UsedFood eatingType={this.props.match.params.foodType} />
                        </div>
                        : 
                        <h1>выберите прием пищи</h1>
                    }
                </div>
            </div>
    )
  }
}
      
export default connect(
    (state) => ({
        user : state.user.userName,
        authorizedUser: state.user.authorized,
        isAuthorizing : state.user.isAuthorizing,
    })
)(FoodCalculator);