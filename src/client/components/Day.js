import React from 'react';

const bucketLookup = {
    0: 'none',
    1: 'first',
    2: 'second',
    3: 'third',
    4: 'fourtth'
}

export default function Day(props) {
    return (
        <div className={`day ${bucketLookup[props.bucket]}`}></div>
    );
}
