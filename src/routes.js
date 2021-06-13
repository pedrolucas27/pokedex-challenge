import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ViewMain from './pages/ViewMain';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ViewMain} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
