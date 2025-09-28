import {  Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import cover1 from '../../../assets/cover1.jpg';
import useProduct from '../../../hooks/useProduct';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ProductCategory from '../ProductCategory/ProductCategory';
import perfumeImg from '../../../assets/perfume.jpg'
import faceCreamImg from '../../../assets/facecream.jpg'


const Product = () => {
    const [product] = useProduct();
    const offerdProducts = product.filter((item) => item.category  === "Offerd");
    const perfume = product.filter(item => item.category === "perfume");
    const faceCream = product.filter((item) => item.category === "face Cream");
    const shampoo = product.filter((item) => item.category === "shampoo");
    return (
        <div>
            <Helmet><title>Product</title></Helmet>
            <Cover img={cover1} title="oue product"></Cover>
         <SectionTitle subHeading='Dont miss' heading="todays offer"></SectionTitle>
         {/* offerd product items */}
         <ProductCategory items={offerdProducts} title='Offerd' ></ProductCategory>
        {/* perfume product items */}
         <ProductCategory items={perfume} title='perfume' img={perfumeImg}></ProductCategory>

         <ProductCategory items={faceCream} title='face Cream' img={faceCreamImg}></ProductCategory>
         <ProductCategory items={shampoo} title='shampoo' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7M-PU5Xf59gzmTt0aBfiFP8hNKiZo1BYL-A&s'></ProductCategory>

        </div>
    );
};

export default Product;