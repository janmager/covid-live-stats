import React, { Component } from 'react'

import CountryList from '../covid/CountryList';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
                    <CountryList />
                </div>
            </div>
        )
    }
}
