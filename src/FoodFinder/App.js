import React, { Component } from 'react';
import FoodFinder from './Landing'
import Grapefruit from './Articles/Grapefruit'
import Ginger from './Articles/Ginger'
import GingerTea from './Articles/GingerTea'
import Almonds from './Articles/Almonds'
import LeafyGreens from './Articles/LeafyGreens'
import Honey from './Articles/Honey'
import AppBar from './Components/AppBar'
import { Route } from 'react-router-dom';
import Copyright from './Components/Copyright';

export default class extends Component {
    render() {
        return <div>
        <AppBar/>
        <main>
            <Route exact path='/' component={FoodFinder} />
            <Route exact path='/grapefruit' component={Grapefruit} />
            <Route exact path='/ginger' component={Ginger} />
            <Route exact path='/ginger-tea' component={GingerTea} />
            <Route exact path='/almonds' component={Almonds} />
            <Route exact path='/leafy-greens' component={LeafyGreens} />
            <Route exact path='/honey' component={Honey} />
        </main>
        <Copyright/>
        </div>
    }
}