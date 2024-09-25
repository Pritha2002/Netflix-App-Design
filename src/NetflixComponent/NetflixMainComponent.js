import './NetflixMainComponent.css';
import NetflixRegistrationComponent from './SmallerComponents/NetflixRegistrationComponent';

export default function NetflixMainComponent() {
    return (
        <div className='netflix_main'>
            <div className='netflix_content'>
                <div className='text-center text-white'>
                    <h1 className='fw-bold p-2'>Unlimited movies,<br /> TV shows and more</h1>
                    <h4>Starts at ₹149. Cancel at any time.</h4>
                    <p className='text-center text-white fs-6'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <NetflixRegistrationComponent />
            </div>
        </div>
    );
}