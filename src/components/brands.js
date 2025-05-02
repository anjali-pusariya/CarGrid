import 'bootstrap/dist/css/bootstrap.min.css';
import br1 from '../assests/images/brand1.png'
import br2 from '../assests/images/brand2.png'
import br3 from '../assests/images/brand3.png'
import br4 from '../assests/images/brand4.png'
import br5 from '../assests/images/brand5.png'
import br6 from '../assests/images/brand6.png'

  const brandImages = [
    br1, 
    br2, 
    br3, 
    br4, 
    br5, 
    br6
  ];
export default function AppBrands(){
    return(
<section className="brand-carousel-wrapper" id='brands'>
<br></br><br></br><br></br>
      <div className="brand-carousel-container">
        <div className="brand-carousel-track">
          {brandImages.concat(brandImages).map((image, index) => (
            <div className="brand-carousel-item" key={index}>
              <img src={image} alt={`Brand ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <br></br><br></br><br></br>
    </section>
    )
}
