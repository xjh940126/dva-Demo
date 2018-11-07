import React from 'react';
import { connect} from 'dva';
import ProductList from '../components/ProductList';

const Products = ({dispatch,products}) =>{
    function handleDel (id) {
        dispatch({
            type:'products/delete',
            payload: id,
        });
    }
    return (
        <div>
            <h2>list of Products</h2>
            <ProductList onDelete = {handleDel} products = {products} />
        </div>
    );    
};

// export default Products;
export default connect (({ products })=>({
    products
}))(Products);
