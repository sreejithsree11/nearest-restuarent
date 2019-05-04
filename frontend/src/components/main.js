import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Feed from './feed/Feed';

const Main  = () => (
     <Switch>
        <Route exact path="/" component={Feed}/>
    </Switch>
)

export default Main;