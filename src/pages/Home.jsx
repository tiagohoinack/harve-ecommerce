import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/images/banner_img (1).jpg';
import banner2 from '../assets/images/banner_img (2).jpg';
import banner3 from '../assets/images/banner_img (3).jpg';
import banner4 from '../assets/images/banner_img (4).jpg';
import banner5 from '../assets/images/banner_img (5).jpg';
import banner6 from '../assets/images/banner_img (6).jpg';
import banner7 from '../assets/images/banner_img (7).jpg';

function Home() {
  const bannerImages = [
    { id: 1, src: banner1, alt: 'Banner 1' },
    { id: 2, src: banner2, alt: 'Banner 2' },
    { id: 3, src: banner3, alt: 'Banner 3' },
    { id: 4, src: banner4, alt: 'Banner 4' },
    { id: 5, src: banner5, alt: 'Banner 5' },
    { id: 6, src: banner6, alt: 'Banner 6' },
    { id: 7, src: banner7, alt: 'Banner 7' },
  ];

  return (
    <div className="page-container">
      <div className="content-card">
        <div className="carousel-container">
          <Carousel interval={5000} indicators={true}>
            {bannerImages.map((image) => (
              <Carousel.Item key={image.id}>
                <img
                  className="carousel-image"
                  src={image.src}
                  alt={image.alt}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Home };