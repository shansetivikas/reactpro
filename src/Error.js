import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contact', {state: {from: 'errorpath'}});
    }
    return (
        <>
             <p>Error Path not available</p>
             <button onClick = {handleClick}>Click Here</button>
             {/* <Link to="/contact">Click here to redirect to Home Page</Link> */}

        </>
       
    )
}

export default Error;