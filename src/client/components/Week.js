import React from 'react';
import Day from './Day';

function calculateBucket(commits, max) {
    return Math.ceil(commits / (max / 4 ));
}

export default function Week(props) {

    return (
        <div className="week">
            { props.data.days.map(day => {
                return (
                    <Day day={day} bucket={calculateBucket(day, props.max)} />
                );
            })}
        </div>
    );
}
