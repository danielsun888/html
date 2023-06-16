

import React from 'react';
import ProductData from '@/data/productData';
import Link from 'next/link';

export default function  Index  () {
    return (

            <div>
                {ProductData.map(product => (
                    <div key={product.id}>
                        <Link href="/product/[id]" as={`/product/${product.id}`}>
                            {product.name}
                        </Link>
                        {/* 其他产品信息展示 */}
                    </div>
                ))}
            </div>
            );


};

