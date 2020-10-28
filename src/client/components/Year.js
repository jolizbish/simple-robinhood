import React from 'react';
import Week from './Week';

export default function Year(props) {

    return (
        <div className="year">
            { props.data.map(week => {
                return (
                    <Week data={week} max={props.max} />
                );
            })}
        </div>
    );
}
