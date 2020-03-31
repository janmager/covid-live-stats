import React, { Component } from 'react'
import axios from 'axios';

export default class Covid extends Component {
    state = {
        country: '',
        today: ''
    }

    async componentDidMount() {
        const {country} = this.props.match.params;

        const onlyOne = `https://corona.lmao.ninja/countries/${country}`

        const CountryRes = await axios.get(onlyOne);

        const countryName = CountryRes.data.country;
        this.setState({
            country: countryName
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.country}</h1>
            </div>
        )
    }
}
