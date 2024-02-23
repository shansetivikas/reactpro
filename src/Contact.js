import { useState } from "react";

//useState(initialState);
// useState(1) -> initialState

// Hooks



const Contact = (props) => {
  
   
    const [count, setCount] = useState(1);
    const [testObj, setTestObj] = useState({fname: 'vikas', color: 'red'});
    const fname = testObj.fname;
    const color =testObj.color;

    console.log(fname);
    console.log(color);
//    var count = 1;
    const incrementCount = () => {
        // count = count+1;
        // setCount(count+1);
        // setCount(count+1);
        setTestObj((a) => {
            return {...a, fname: 'test'}
        })
        setCount((a) => {
            return  a+1
        });
       
        setCount((prevCount) => {
            return  prevCount+1
        });
        
    };

    const decrementCount = () => {
    //    count = count-1;
       console.log(count);
    };

    return (
        <>
        {/* <p>Contact {a}</p> */}
        <div style={{display: "flex"}}>
            <button onClick={decrementCount}>-</button>
            <p>{count}  {fname} {color}</p>
            <button onClick={incrementCount}>+</button>
        </div>
        </>
    )
}

export default Contact;