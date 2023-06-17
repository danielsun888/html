import { useRouter } from 'next/router';
import ProductData from '@/data/productData';
import Category from "@/components/Category";
import AddToCart from "@/components/addToCart";
import ProductDescription from "@/components/ProductDescription";
import ProductGallery from "@/components/ProductGallery";
import productData from "@/data/productData";
export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const productInfo = ProductData.find(item => item.id === parseInt(id));
    let imageData = [];

    if (productInfo && productInfo.images && productInfo.images.length > 0) {
        imageData = productInfo.images;
    }


// Pass the images array to the ProductGallery component
    const divStyle = {
       div:{display:"flex"}
     };
    console.log(id,productInfo)
    // 根据产品数据渲染页面
    return (<div >
            <Category />

               <div style={{display:"flex"}}>
                   <div>
                   {/*<ProductGallery product={productInfo} style={{ flex: "1" }} />*/}
                   <ProductGallery images={imageData} />;

               </div>
                   <ProductDescription product ={productInfo}/>
                  <AddToCart />
               </div>
            </div>


);

}
