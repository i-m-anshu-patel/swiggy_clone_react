import React, { useState } from 'react'
import MenuList from './MenuList'

const RestaurantMenuList = ({menu, title, categories}) => {
  return (categories === 1) ? (
    <div className='my-2'>
    <h5>{title}</h5>
    <hr />
       {menu.map((menuItems) => (
        <>
        <p className='h6'>Category Name {menuItems.title}</p>
        <MenuList menu={menuItems.itemCards} />
        </>
        
       ))}
    </div>
    
  ) : (
    <div className='my-2'>
    <h5>{title}</h5>
    <hr />
    <MenuList menu={menu} />
    <hr/>
    </div>
  )
}

export default RestaurantMenuList
