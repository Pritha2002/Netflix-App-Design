import React from 'react';
import './NetflixRegistrationComponent.css';

function NetflixRegistrationComponent() {
    return (
        <div className='w-100 m-auto'>
            <div className="input-group input-group-lg text-dark">
                <div className="form-floating me-4">
                    <input 
                        type="email" 
                        className="form-control w-100 text-dark rounded form-modify" 
                        id="floatingInput" 
                        placeholder=" "
                        required 
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                </div>
                <button className="btn btn-danger rounded">
                    Get Started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    );
}

export default NetflixRegistrationComponent;
