import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Home() {

    return (
        <>

            <Helmet>
                <title> Home</title>
                <meta name='description' content='This is my Home page' />
            </Helmet>

            <h1>Home</h1>
            <p>
                Welcome to my Capstone Frontend Disney Movie Prince N Princess Projects Home Page!
                This Project is all about my Daughters Favorite Disney Movies and their favorite Prince and Princess like Anna , Elsa , Moana, Sofia ...
            </p>
            <p>
                Simple Links: <Link to='/'> Home</Link>,
                <Link to='/about'> About</Link>

            </p>
        </>
    );
}