import React, { Component } from 'react'
import CountryCard from './CountryCard';
import axios from 'axios';

export default class CountryList extends Component {
    state = {
        url: 'https://corona.lmao.ninja/countries?sort=cases',
        country: '',
        flag: '',
        all: '',
        today: '',
        deaths: '',
        todayDeaths: '',
        recovered: '',
        critical: '',
        updated: ''
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ country: res.data })
    }

    convertDate(milisecond) {
        var date = new Date(milisecond);
        var month;
        var hour;
        var min;
        var day;
        var sec;
        
        if((date.getMonth()+1)<10) month = "0"+(date.getMonth()+1);
        else month = (date.getMonth()+1);

        if((date.getHours())<10) hour = "0"+(date.getHours());
        else hour = (date.getHours());

        if((date.getMinutes())<10) min = "0"+(date.getMinutes());
        else min = (date.getMinutes());

        if((date.getDate())<10) day = "0"+(date.getDate());
        else day = (date.getDate());

        if((date.getSeconds())<10) sec = "0"+(date.getSeconds());
        else sec = (date.getSeconds());

        return hour+":"+min+":"+sec+" "+day+'.'+month+'.'+date.getFullYear();
    }

    render() {
        return (
            <React.Fragment>
                {this.state.country ?
                (<div className='row'>
                    <h6 className='pt-2 pb-2 col-12'>Ostatnia aktualizacja: {this.convertDate(this.state.country[0].updated)}</h6>
                    {this.state.country.map(country => (
                        <CountryCard 
                            key={country.country}
                            country={country.country}
                            flag={country.countryInfo.flag}
                            all={country.cases}
                            today={country.todayCases}
                            deaths={country.deaths}
                            todayDeaths={country.todayDeaths}
                            recovered={country.recovered}
                            critical={country.critical}
                            updated={country.updated}
                        />
                    ))}
                </div>)
                : 
                (<h1>Loading...</h1>)}
            </React.Fragment>
        )
    }
}
