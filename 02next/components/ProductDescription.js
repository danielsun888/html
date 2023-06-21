import React from "react";

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
                               href="">Visit the
                                Rugshop Store</a></div>
                        <div className="stars-wrapper">
                            <div className="flex">
                                <img src="/images/icon_star(on).jpg" />
                                <img src="/images/icon_star(off).jpg"/>
                                <img src="/images/icon_star(off).jpg"/>
                                <img src="/images/icon_star(off).jpg"/>
                                <img src="/images/icon_star(off).jpg"/>
                            </div>
                            <div>(4.8)</div>
                            <div>182 reviews</div>
                        </div>
                        <span className="discount">-30%</span>
                        <span className="price">$29.99</span>
                        <br />
                        <span className="original-price">$39.99</span>
                        <br />
                        <span className="delivery">Arrives: <span className="date">Wed,June 07-Fri,June 09</span></span>
                    </div>
                    <div className="horizontal-line"></div>
                    <div>
                            {product.specs && (
                                <div>

                                 <div><span className="color">Color</span></div>
                                 <div className="tooltip">
                                    <div style={divStyle.div}>
                                        {product.specs.map((spec, index) => (
                                            <div className="a-button-inner">
                                              <button className="a-button-text" type="button" id="a-autoid-21-announce">
                                                  <div style={{ width: '36px', height: '36px', backgroundColor: spec }} ></div>

                                                 <div  className="option-name">    {spec}</div>
                                               </button>
                                            </div>
                                        ))}
                                     </div>
                                  </div>
                                </div>

                                )}
                    </div>

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
                    <div class="specification">
                                    <div class="row">

                                        <div class="row2"><span class="cell bold">Brand:</span></div>
                                        <div class="row2"><span class="cell bold">Mpn:</span></div>
                                        <div class="row2"><span class="cell bold">Size:</span></div>
                                        <div class="row2"><span class="cell bold">Color:</span></div>
                                        <div class="row2"><span class="cell bold">Material Type:</span></div>
                                        <div class="row2"><span class="cell bold">Manufacturer:</span></div>
                                        <div class="row2"><span class="cell bold">Model:</span></div>
                                        <div  class="row2"><span class="cell bold">Product Dimensions:</span></div>
                                        <div class="row2"><span class="cell bold">Isin:</span></div>
                                    </div>
                                    <div class="row">

                                        <div  class="row2"><span class="cell">Rugshop Store</span></div>
                                        <div  class="row2"><span class="cell ">MON836Gray2*7</span></div>
                                        <div  class="row2"><span class="cell">2*7 Feet</span></div>
                                        <div  class="row2"><span class="cell ">Grey</span></div>
                                        <div  class="row2"><span class="cell">Other</span></div>
                                        <div  class="row2"><span class="cell ">World Rug Gallery</span></div>
                                        <div  class="row2"><span class="cell">Rugshop Vintage</span></div>
                                        <div  class="row2"><span class="cell ">0.31 inches</span></div>
                                        <div  class="row2"><span class="cell">IBSKEV</span></div>
                                    </div>
                    </div>

                </div>
            </div>

    );

        }
