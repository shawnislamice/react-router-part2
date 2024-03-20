import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error=useRouteError()
    console.error(error)
    return (
        <div>
            <h2>Ops! Something May lost</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status=404 && <div>
                    <h3>Page not found</h3>
                    <p>Go Back to Home</p>
                    <Link to='/'>Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;