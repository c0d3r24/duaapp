import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from './../containers/Template';
import MorningEvening from '../containers/MorningEvening';
import Home from './../containers/Home';
import DailyLife from './../containers/DailyLife';
import Prayer from './../containers/Prayer';
import Illness from './../containers/Illness';
import Travel from './../containers/Travel';
import FaithProtection from './../containers/FaithProtection';
import HajjUmrahh from './../containers/HajjUmrahh';
import TrialsTribulation from './../containers/TrialsTribulation';
import Credit from './../containers/Credit';
const createRoute = () => {
    return (
        <Route
        path="/"
        component={Template}
        >  
            <IndexRoute
                component={Home}/>
            <Route 
                path={'/morning-evening'} 
                component={MorningEvening} />
            <Route 
                path={'/daily-life'} 
                component={DailyLife} />
            <Route 
                path={'/prayer'} 
                component={Prayer} />
            <Route 
                path={'/illness'} 
                component={Illness} />
            <Route 
                path={'/travel'} 
                component={Travel} />
            <Route 
                path={'/faith-protection'} 
                component={FaithProtection} />
            <Route 
                path={'/trials-tribulation'} 
                component={TrialsTribulation} />
            <Route 
                path={'/hajj-&-umrah'} 
                component={HajjUmrahh} />
            <Route 
                path={'/credit'} 
                component={Credit} />
        </Route>
    );
}

const Routes = createRoute();
export default Routes;