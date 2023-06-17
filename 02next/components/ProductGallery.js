import React, { useState } from 'react';
import productData from "@/data/productData";
export default  function ProductGallery({ images }) {

    const initialImage  =             "/images/img-desc-product-thumbnail.jpg";

    const [bigImage, setBigImage] = useState(initialImage );

    const handleImageHover = (image) => {
        setBigImage(image);
    };

    if (!images) {
        return <div>Product not found</div>
    }
    return (
        <div className="product-info-row">
            <div className="details-gallery">
                <div className="mySwiper">
                    <div  id="galleryBox">
                        <a
                            href="https://images.ibspot.com/a3992hwojb2jzpdymaad1vr244mf?width=800&amp;height=800&amp;format=jpg" >
                            <picture>
                                <img src={bigImage} alt=""/>
                            </picture>

                        </a>

                    </div>
                </div>
                <div className="mySwiper2">
                    <div className="small-images">
                        {images.map((image, index) => (

                            <div className="swiper-slide">
                            <img     src={image} alt="Small Image 1"
                                     onMouseEnter={() => handleImageHover(image)}
                            />
                            </div>
                        ))}


                    </div>
                </div>
            </div>

        </div>

    );

}