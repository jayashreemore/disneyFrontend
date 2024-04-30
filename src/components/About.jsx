
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';



export default function About() {

    return (
        <>
            <Helmet>
                <title> About</title>
                <meta name='description' content='This is my About page' />
            </Helmet>
            <h1>About</h1>
            
            <p>
            This Project is About Disney Movie Prince N Princess Character Details
                
            </p>
            <p>
                Simple Links: <Link to='/'> Home</Link>,
                <Link to='/about'> About</Link>,
                
            </p>
        </>
    );
}
