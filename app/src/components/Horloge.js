import React from 'react';

function Horloge (){
    return (
            <div>
                <h2>Il est {new Date().toLocaleTimeString()}.</h2>
            </div>
    )

}

export default Horloge;
