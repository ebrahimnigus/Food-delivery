import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Exxplore our menu</h1>
        <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy our customers</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return (
                    <div key={index} className="explore-menu-list-icon">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>


    </div>
  )
}

export default ExploreMenu