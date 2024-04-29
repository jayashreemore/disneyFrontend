import {Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function NotFound() {
    return (
        <>
        <Helmet> 
                <title> 404</title>
                <meta name='description' content='This is 404' />
        </Helmet>
            <h1>404-NotFound</h1>

            <hr />

            <p>
                Sorry, the page you are looking for does not exists.
            </p>
                <Link to='/' > Back</Link>
        </>
    );
}

export default NotFound;