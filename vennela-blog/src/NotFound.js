import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry this page not found</h2>
            <Link to='/'> Please go back to home page</Link>
        </div>
     );
}
 
export default NotFound;