import { Link } from "react-router-dom";

const CTAButton = ({ text, className, to }) => {
    return(
        <>
        <Link to={to}>
        <button className={className}>
            {text}
        </button>
        </Link>
        </>
    );
}
export default CTAButton;