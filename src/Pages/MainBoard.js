import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserActivities from './UserActivities';

const MainBoard = () => {
    return (
        <Routes>
            <Route exact path="/activities" Component={UserActivities}></Route>
        </Routes>
    )
}

export default MainBoard