import React , {useState} from "react";

function Card() {
    
    const [name,setName] = useState(0);
    const inc = () =>{
        setName(name+1);
    }
    const dec = () =>{
        setName(name-1);
    }
    const reset = () =>{
        setName(0);
    }
    return(
        <div className="counterContainer">
            <h2 className="display"> {name}</h2>
            <button className="buttonB" onClick={inc}>inc</button>
            <button className="buttonB" onClick={reset}>reset</button>
            <button className="buttonB" onClick={dec}>dec</button>
        </div>

    );

}

export default Card;