import React from 'react';
import image1 from './assets/images/img-1.svg'
import image2 from './assets/images/img-2.svg'
import image3 from './assets/images/img-3.svg'
import image4 from './assets/images/img-4.svg'
import image5 from './assets/images/img-5.svg'
import image6 from './assets/images/img-6.svg'
import image7 from './assets/images/img-7.svg'
import image8 from './assets/images/img-8.svg'
import image9 from './assets/images/img-9.svg'
import image10 from './assets/images/img-10.svg'
import profileImage from './assets/images/profile-image.svg'

const ImgContainer =(props) => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, profileImage]
    return(
        <picture className="img-container">
            <img src={images[props.number]} alt={`Imagen de pregunta ${props.number}`} />
        </picture>
    )
} 
export default ImgContainer;