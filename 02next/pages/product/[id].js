import { useRouter } from 'next/router';
import ProductData from '@/data/productData';
import Category from "@/components/Category";
import AddToCart from "@/components/addToCart";
import ProductDescription from "@/components/ProductDescription";

export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const productInfo = ProductData.find(item => item.id === parseInt(id));
    console.log(id,productInfo)
    // 根据产品数据渲染页面
    return (<div >
            <Category />
               <div style={{display:"flex"}}>
                  <ProductDescription product ={productInfo}/>
                  <AddToCart />
               </div>
        </div>


);

}
