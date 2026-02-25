import './Not.css'
import { Link } from 'react-router-dom';

function NotAdded() {
    return (
        <>
        <div class="notDoneBg">
            <h1 class="NDT">ERROR 404</h1>
            <p class="NDP">Page has either not been made or cannot be found :(</p>
            <Link class="BnSButton" to='/home'>
            Back
            
            </Link>
        </div>

        </>
    )
};

export default NotAdded;