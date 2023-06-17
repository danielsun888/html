import React from "react";
import { useRouter } from 'next/router';
import ProductData from '@/data/productData';
import Category from "@/components/Category";
import AddToCart from "@/components/addToCart";
export  default  function ProductDescription( {product }){
    const divStyle = {
        div:{display:"flex"}
    };
    if (!product) {
        return <div>Product not found</div>;
    }

    return (


              <div className="product-info-row2">
                <div className="details-info">
                    <div className="product-details">
                        <div className="product-description"><h1 className="product-detail-title">{product.name}</h1></div>
                        <div className="product-rating1">
                            <a id="bylineInfo" className="a-link-normal"
                               href="/stores/Rugshop/page/BBB9F7D5-9545-4CDE-8F39-CA76C7ABF6A8?ref_=ast_bln">Visit the
                                Rugshop Store</a></div>
                        <div className="stars-wrapper">
                            <div style={divStyle.div}>
                                <img src="/images/icon_star(on).jpg" />
                                <img src="/images/icon_star(off).jpg"/>
                                <img src="/images/icon_star(off).jpg"/>
                                <img src="/images/icon_star(off).jpg"/>
                                <img src="/images/icon_star(off).jpg"/>
                            </div>
                            <div>(4.8)</div>
                            <div><a href="02next/pages#" data-turbolinks="false">182 reviews</a></div>
                        </div>
                        <span className="discount">-30%</span>
                        <span className="price">$29.99</span>
                        <br />
                        <span className="original-price">$39.99</span>
                        <br />
                        <span className="delivery">Arrives: <span className="date">Wed,June 07-Fri,June 09</span></span>
                    </div>
                    <div className="horizontal-line"></div>

                            {product.specs && (
                                <div>

                                 <div><span className="color">Color</span></div>
                                 <div className="tooltip">
                                    <div style={divStyle.div}>
                                        {product.specs.map((spec, index) => (
                                            <div className="a-button-inner">
                                              <button className="a-button-text" type="button" id="a-autoid-21-announce">
                                                 <div className="color-desc">    {spec}</div>
                                               </button>
                                            </div>
                                        ))}
                                     </div>
                                  </div>
                                </div>

                                )}

                    <div>
                        <div><span className="color">About this item</span></div>
                        <ul className="details-more   mb-3">
                            <li>100% polypropylene machine made area rug with jute backing.
                            </li>
                            <li>100% polypropylene machine made area rug with jute backing.
                            </li>
                            <li>100% polypropylene machine made area rug with jute backing.
                            </li>
                            <li>100% polypropylene machine made area rug with jute backing.
                            </li>
                            <li>Easy-to-clean, does not shed - Perfect for high traffic areas of your home, this design
                                beautifully enhances any room of the home.
                            </li>
                            <li>Easy-to-clean, does not shed - Perfect for high traffic areas of your home, this design
                                beautifully enhances any room of the home.
                            </li>
                        </ul>
                    </div>
                    <div className="specification">
                        <div className="row">

                            <div><span className="cell bold">Brand:</span></div>
                            <div><span className="cell bold">Mpn:</span></div>
                            <div><span className="cell bold">Size:</span></div>
                            <div><span className="cell bold">Color:</span></div>
                            <div><span className="cell bold">Material Type:</span></div>
                            <div><span className="cell bold">Manufacturer:</span></div>
                            <div><span className="cell bold">Model:</span></div>
                            <div><span className="cell bold">Product Dimensions:</span></div>
                            <div><span className="cell bold">Isin:</span></div>
                        </div>
                        <div className="row">

                            <div><span className="cell">Rugshop Store</span></div>
                            <div><span className="cell ">MON836Gray2*7</span></div>
                            <div><span className="cell">2*7 Feet</span></div>
                            <div><span className="cell ">Grey</span></div>
                            <div><span className="cell">Other</span></div>
                            <div><span className="cell ">World Rug Gallery</span></div>
                            <div><span className="cell">Rugshop Vintage</span></div>
                            <div><span className="cell ">0.31 inches</span></div>
                            <div><span className="cell">IBSKEV</span></div>
                        </div>
                    </div>
                </div>
            </div>

    );

        }