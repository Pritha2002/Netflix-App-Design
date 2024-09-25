import NetflixFAQComponent from './NetflixComponent/NetflixFAQComponent';
import NetflixFooterComponent from './NetflixComponent/NetflixFooterComponent';
import NetflixGallery2Component from './NetflixComponent/NetflixGallery2Component';
import NetflixHeaderComponent from './NetflixComponent/NetflixHeaderComponent';
import NetflixMainComponent from './NetflixComponent/NetflixMainComponent';
import NetflixGalleryComponent from './NetflixGalleryComponent';
import './NetflixIndexComponent.css';

function NetflixIndexComponent() {
  return (
    <div className="netflix_index">
      <div className="welcome">
        <header>
              <NetflixHeaderComponent />
        </header>
        <main>
              <NetflixMainComponent />
        </main>
      </div>
      <div className="gallery1">
            <NetflixGalleryComponent />
      </div>
      <div className="gallery2">
            <NetflixGallery2Component />
      </div>
      <section>
            <NetflixFAQComponent />
      </section>
      <footer>
          <NetflixFooterComponent />
      </footer>
    </div>
  );
}

export default NetflixIndexComponent;