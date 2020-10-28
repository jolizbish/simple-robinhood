import React, { Component } from 'react';
import './app.css';
import Year from './components/Year';

function determineMaxCommits(data) {
    let max = 0;

    data.forEach((week) => {
        week.days.forEach((day) => {
            if (day > max) {
                max = day;
            }
        });
    });

    return max;
}

export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            data: [],
            max: 0
        }
    }

    componentDidMount() {
        fetch('https://api.github.com/repos/facebook/react/stats/commit_activity')
            .then(resp => resp.json()
            .then(json => {
               this.setState({
                   data: json,
                   max: determineMaxCommits(json)
               });
            }));
    }

    render() {
        const { data, max } = this.state;
        return (
            <div className="container">
                <Year data={data} max={max} />
            </div>
        );
    }
}
