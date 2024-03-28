import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CommingSoon from "../Components/CommingSoon"
import Dashbaord from './dashboard';

const MainBoard = () => {
    return (
        <Routes>
            <Route exact path="/main" Component={Dashbaord}></Route>
        </Routes>
    )
}

export default MainBoard