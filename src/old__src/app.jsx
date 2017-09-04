import React, {Component} from 'react'
import {connect} from 'react-redux'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/header/header'
import MainPage from './components/mainPage/mainPage'
import FoodCalculator from './components/foodCalculator/foodCalculator'
import Another_page from './components/another_page/another_page'
import NotFound from './components/notFound/notFound'
import Menu from './components/foodCalculator/menu'
import Registration from './components/registration/registration'
import PrivatArea from './components/privatArea/privatArea'

class App extends Component {
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route path="/registration" component={Registration} />
                            <PrivatArea>
                                <Switch>
                                    <Route exact path="/food" render={ props => <Redirect to="/food/breacfast" /> } />
                                    <Route path="/food/:foodType" component= {FoodCalculator} />
                                    <Route path="/another_page" component= {Another_page} />
                                    <Route component={ NotFound }/>
                                </Switch>
                            </PrivatArea>
                            <Route component={ NotFound }/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;