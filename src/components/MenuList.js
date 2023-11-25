import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';

const MenuList = ({ menu }) => {

    const dispatch = useDispatch();

    const handleAddItem = (menuItem) => {
        dispatch(addItem(menuItem))
    }
    return (
        <>
            {menu.map((menuItem) => (
                <div className="card" key={menuItem.card.info.name}>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <p>{menuItem.card.info.name}</p>
                                <p>Rs {menuItem.card.info.price / 100}</p>
                                <p>{menuItem.card.info.description}</p>
                            </div>
                            <div className='col-md-2 offset-md-1'>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + menuItem.card.info.imageId} className=" p-1" alt="..." height="125px" style={{ 'borderRadius': '10px' }} />
                                <div className='d-flex justify-content-center'><button className='btn btn-dark' onClick={() => handleAddItem(menuItem)}> Add +</button></div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default MenuList
