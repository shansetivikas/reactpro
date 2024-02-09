

const Button = ({clickFn}) => {
    //  console.log(props);
    // const handleClick = (a) => {
    //     console.log(a);
    //     alert("clicked here");
    // } 

     return (
        // <button onClick={handleClick}>Click Me</button>
        // <button onClick={()=>alert("clicked Here")}>Click Me</button>
        //  <button onClick={()=>{handleClick("react")}}>Click Me</button>
        <button onClick={()=>clickFn("react")}>Click Me</button>
     )
}


export default Button;