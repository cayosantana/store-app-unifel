import './products.css'
import logoImageProd from './image/logo-flashstore.png'
import ProductList from '../components/productList';

const Products = () => {
    return ( 
        <>
            <div className='page-products'>
                <div className='image-logo-products'>
                    <img src={logoImageProd} alt="" />
                    
                </div>
                <ProductList />
            </div>
        </>
    );
}
 
export default Products;