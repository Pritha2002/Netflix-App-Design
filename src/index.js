import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import NetflixIndexComponent from './NetflixIndexComponent';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="netflix_init">
      <NetflixIndexComponent />
  </div>
);
