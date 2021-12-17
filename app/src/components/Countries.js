import React,{useState} from 'react';

function Countries() {

    const [data,setData] = useState(['Hello'])

    function sayGoodbye () {
        setData("Goodbye")
    }

    return (
        {data}
    )
}

export default Countries;
