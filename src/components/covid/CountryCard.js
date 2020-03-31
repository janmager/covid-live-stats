import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import './CountryCard.css';

export default class CountryCard extends Component {
    state = {
        country: '',
        flag: '',
        all: '',
        today: '',
        deaths: '',
        todayDeaths: '',
        recovered: '',
        critical: '',
        updated: ''
    }

    componentDidMount() {
        const {country, flag, all, today, deaths, todayDeaths, recovered, critical, updated} = this.props;

        this.setState({
            country,
            flag,
            all,
            today,
            deaths,
            todayDeaths,
            recovered,
            critical,
            updated
        })
    }

    numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    convertDate(milisecond) {
        var date = new Date(milisecond);
        var month;
        
        if((date.getMonth()+1)<10) month = "0"+(date.getMonth()+1);
        else month = (date.getMonth()+1);

        return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+" "+date.getDate()+'.'+month+'.'+date.getFullYear();
    }

    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-3' >
                <div className='card'>
                    <h5 className='card-header flagDiv d-flex justify-content-start align-items-center'>
                        <img src={this.state.flag} />
                        {this.state.country}
                    </h5>
                    <div className='card-body'>
                        <b>RAZEM</b><br/>
                        Zarażeni: {this.numberWithSpaces(this.state.all)}
                        <br/>
                        Zgony: {this.state.deaths}
                        <br/><br/>
                        <b>DZIŚ</b><br/>
                        Zareżeni: +{this.state.today}
                        <br/>
                        Zgony: +{this.state.todayDeaths}
                    </div>
                </div>
            </div>
        )
    }
}
