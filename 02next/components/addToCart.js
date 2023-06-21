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

                <div className="details-card-quantity">
                    <h2 className="stock-color">In Stock</h2>
                </div>
                <div className="details-card-quantity" id="quantity_select_and_add_to_cart">
                    <div className="quantity quantity-select">
                        <div className="quantity-input">
                            <span className="quantity-label">quantity:</span>
                            <button id="decrease" onClick={handleMinus}>-</button>
                            <input   type="number" id="quantity" min="0" value={count}         onChange={handleInputChange}
                                   className="number-short-input" readOnly/>
                            <button id="increase" onClick={handleAdd}>+</button>
                        </div>
                    </div>
                     <div class="quantity-action">
                                                <button name="button" type="submit" class="add-to-cart-button" data-id="616307">
                                                  Add to Cart
                                                </button>
                                                <button name="button" type="submit" class="buy-now-button" data-id="616307">
                                                   Buy Now
                                                </button>
                     </div>
                    <p className="sold-by small mt-3">
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
