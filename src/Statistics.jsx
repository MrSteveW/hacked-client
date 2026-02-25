import './Statistics.css'
import { Link } from 'react-router-dom';

function Statistics() {
    return(
        <>
        <div class="statBg">
            <div class="statB">
                <h1 class="statTit">
                    Statistics (placeholder)
                </h1>
                <img class="statImg" src="/public/images/stats.png"></img>
                <Link to="/home" className="BnSButton">
                    Back
                </Link>
            </div>
        </div>
        </>
    )
};

export default Statistics;