import React from 'react'

const MenuList = ({ menu }) => {
    return (
        <>
            {menu.map((menu) => (
                <div className="card">
                    <div className='card-body'>
                        <p>{menu.card.info.name}</p>
                        <p>Rs {menu.card.info.price/100}</p>
                        <p>{menu.card.info.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MenuList
