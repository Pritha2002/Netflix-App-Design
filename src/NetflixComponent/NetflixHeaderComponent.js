import "./NetflixHeaderComponent.css";
import LanguageComponent from "./SmallerComponents/LanguageComponent";

export default function NetflixHeaderComponent() {
    return (
        <div className="netflix_header">
            <div className="d-flex justify-content-between">
                <div>
                    <img width="250" alt="Netflix Logo" />
                </div>
                <div className="d-flex">
                    <LanguageComponent />
                    <button className="signin-btn">Sign In</button>
                </div>
            </div>
        </div>
    );
}