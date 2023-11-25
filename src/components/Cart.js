import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MenuList from './MenuList';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className='container border p-5'>
            <h3 className='mb-2 text-center'>Cart</h3>
            {cartItems.length === 0 && (
                <h5 className='text-center mt-5'> Cart is empty. Add Items to the cart!</h5>
            )}
            {cartItems.length !== 0 && (
                <>
                    <div className='text-end m-3'>
                        <button className='btn btn-dark' onClick={handleClearCart}> Clear Cart</button>
                    </div>
                    <MenuList menu={cartItems} />
                </>
            )}

        </div>
    )
}

export default Cart
