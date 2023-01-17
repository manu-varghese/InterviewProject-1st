import React from 'react'
import './Search.css'

function Banner() {
  return (
    <div className='serch_container'>
        <div className='serch_items_main'>
            <div className="serch_items">
                <p className='serch_items_p1'>Choose from 25,00+ Spaces for your Business</p>
                <p className='serch_items_p2'>Get inspired and find your perfect place</p>
                <select name="" id="" className='serch_item'>
                    <option value="">Looking for</option>
                    <option value="">sdf</option>
                    <option value="">sdf</option>
                    <option value="">sdf</option>
                </select>
                <select name="" id="" className='serch_item'>
                    <option value="">Select City</option>
                    <option value="">sdf</option>
                    <option value="">sdf</option>
                    <option value="">sdf</option>
                </select>
                <button className='serch_item_btn'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Banner