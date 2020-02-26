import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './LandingPage';
import Piskel from './Piskel';
import User from './User';
import '../scss/index.scss';

const Page = () => (
    <HashRouter>
        <main>
            <header><User /></header>
            <Route exact path="/" component={Landing} />
            <Route path="/piskel" component={Piskel} />
        </main>
    </HashRouter>
);

export default Page;
