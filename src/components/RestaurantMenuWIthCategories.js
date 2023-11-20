import React from 'react'

const RestaurantMenuWIthCategories = ({ menu }) => {
    return (
        <>
            {menu.map((menu) => (
                <div className="card">
                    <div className='card-body'>
                        <p>{menu.card.info.name}</p>
                    </div>
                </div>
            ))}
        </>

    )
}

export default RestaurantMenuWIthCategories
