import React from 'react'

const MenuList = ({ menu }) => {
    return (
        <>
            {menu.map((menu) => (
                <div className="card">
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <p>{menu.card.info.name}</p>
                                <p>Rs {menu.card.info.price / 100}</p>
                                <p>{menu.card.info.description}</p>
                            </div>
                            <div className='col-md-2 offset-md-1'>
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+menu.card.info.imageId} className=" p-1" alt="..." height="125px" style={{'borderRadius': '10px'}} />
                            <div className='d-flex justify-content-center'><button className='btn btn-dark '> Add +</button></div>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}

export default MenuList
