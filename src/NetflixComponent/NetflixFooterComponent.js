import './NetflixFooterComponent.css';
import LanguageComponent from './SmallerComponents/LanguageComponent';

export default function NetflixFooterComponent() {
    return (
        <div className='text-white bg-black footerComp'>
            <p>Questions? Call <u className='underline'>000-800-919-1694</u></p>
            <div className='row underline'>
                <div className='col-3'>
                    <ul className='list-unstyled'>
                        <li>FAQ</li>
                        <li>Investor Relations</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <ul className='list-unstyled'>
                        <li>Help Centre</li>
                        <li>Jobs</li>
                        <li>Cookie Preferences</li>
                        <li>Legal Notices</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <ul className='list-unstyled'>
                        <li>Account</li>
                        <li>Ways to Watch</li>
                        <li>Corporate Information</li>
                        <li>Only on Netflix</li>
                    </ul>
                </div>
                <div className='col-3'>
                    <ul className='list-unstyled'>
                        <li>Media Centre</li>
                        <li>Terms of Use</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className='row mb-4'>
                <LanguageComponent />
            </div>
            <div className='row'>
                <ul className='list-unstyled'>
                    <li className='text-decoration-none'>Netflix India</li>
                </ul>
            </div>
        </div>
    );
}
