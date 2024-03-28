import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../../Components/Layout/Default';
import SearchBar from './SearchBar';
import Table from './Table';

const UserManagement = () => {
    return (
        <DefaultLayout>
            <SearchBar />
            <Table />
        </DefaultLayout>
    )
}

export default UserManagement