import './products.css'
import logoImageProd from './image/logo-eco.png'

const Products = () => {
    return ( 
        <>
            <div className='page-products'>
                <div className='image-logo-products'>
                    <img src={logoImageProd} alt="" />
                    
                </div>
            </div>
        </>
    );
}
 
export default Products;