import React ,{useState} from 'react';

export  default  function AddToCart ()
{
     const [count,setCount] = useState(0)
    const handleAdd=(event)=>{
        event.preventDefault();

        console.log('add '+count)
         setCount(count+1)}
    const  handleMinus=(event)=>{
        event.preventDefault();

        if (count>0){

             setCount(count-1)
         }
        console.log('minus '+count)

    }
    const handleInputChange = (event) => {
        setCount(event.target.value);
    };

    return(

        <div className="product-info-row3">
            <form method="post">
                <div className="product-page-price">
                    <div className="add-to-cart-form-price price" data-hook="product_price">
                        <h2 className="selling">$15.99</h2>
                        <div className="shipping">
                            <span className="delivery a-link-normal">Free shipping in US</span>
                            <span className="delivery">Arrives: <span
                                className="bold">Wed,June 07-Fri,June 09</span></span>
                            <span className="delivery bold">Free 30-Day Returns</span>
                        </div>
                    </div>
                </div>


                  <div class="details-card-quantity">
                                         In Stock
                  </div>
                <div >
                        <div className="quantity-input">
                            <span className="quantity-label">quantity:</span>
                            <button className="decrease" onClick={handleMinus}>-</button>
                            <input   type="number" id="quantity" min="0" value={count}         onChange={handleInputChange}
                                   className="number-short-input" readOnly/>
                            <button className="increase" onClick={handleAdd}>+</button>
                        </div>
                     <div class="quantity-action">
                                                <button name="button" type="submit" class="add-to-cart-button" data-id="616307">
                                                  Add to Cart
                                                </button>
                                                <button name="button" type="submit" class="buy-now-button" data-id="616307">
                                                   Buy Now
                                                </button>
                     </div>
                    <p className="sold-by">
                        Sold by IBSPOT, ships from <span className="ship-from">United States</span>
                    </p>
                </div>
            </form>
            <div className="buyer-protection">
                <div className="buyer-text">
                    <h2>IBspot Buyer Protection</h2>
                    <p>Shop confidently on IBspot, receive your item as described or your money back for eligible
                        orders. </p>
                </div>
            </div>
        </div>

    )
}
