// import React from 'react';

function Category({ posts }) {
    return (
        <div className="breadcrumb">
            <div className="container">
                <ul>
                    <li>
                        <a href="/" itemScope="url">
                            <span itemProp="name">Home</span>
                        </a>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <a href="/t/promotions" itemProp="url">
                            <span itemProp="name"><span className="translation_missing" title="translation missing: en.spree.taxon.Promotions">Categories</span></span>
                        </a>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <a href="/t/promotions/new-node" itemProp="url">
                            <span itemProp="name"><span className="translation_missing" title="translation missing: en.spree.taxon.Recommend Products">Home & Kitchen</span></span>
                        </a>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <a href="/t/promotions/new-node" itemProp="url">
                            <span itemProp="name"><span className="translation_missing" title="translation missing: en.spree.taxon.Recommend Products">Home Décor</span></span>
                        </a>
                    </li>
                    <li>&gt;</li>
                    <li>
                        <a href="/t/promotions/new-node" itemProp="url">
                            <span itemProp="name"><span className="translation_missing" title="translation missing: en.spree.taxon.Recommend Products">Rugs,Pads & Protectors</span></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Category
