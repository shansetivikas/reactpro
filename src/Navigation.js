import { Link } from "react-router-dom";

const Navigation = (props) => {

    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/layout">Layout</Link>
        </>
    )

}

export default Navigation;