import { useState } from "react";
import { useEffect } from "react";

const Effect = () => {

    const [name, setName] = useState('test');
    const [count, setCount] = useState(1);

    // this useeffect will be called on first render and if there or any changes in the component
    // useEffect(() => {
    //     console.log("hello");
    // });

    // this useEffect loads first time and whenever any value changes from dependencies
    // useEffect(() => {
    //     console.log(name);
    // }, [name, count]);

    // this will be called only on load
    // useEffect(() => {
    //     console.log("on mount")
    // }, []);

    // useEffect(() => {
    //     return () => {
    //         console.log("unmount");
    //     }
    // })
    
    

    const handleClick = () => {
        setName("react")
        console.log("userclicked")
    }

    const incrementCount = () => {
        setCount(count+1);
    }

    return (
        <>
            <p>{name}</p>
            <p>{count}</p>
            <button onClick={handleClick}>Change Name</button><br></br>
            <button onClick={incrementCount}>Increment Count</button>
        </>
    )
}


export default Effect;