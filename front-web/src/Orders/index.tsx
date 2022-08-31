import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLoacation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './style.css';
import { OrderLocationdata, Product } from './types';

function Orders () {

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    console.log(products)
    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data)) //case of succeed
        .catch(error => console.log(error)) //case of failure
    }, [])

    return (
        <div className="main-orders">
            <StepsHeader /> 
            <ProductsList products={products} />
            <OrderLoacation onChangeLocation={location => setOrderLocation(location)} />           
        </div>
    )
}

export default Orders;