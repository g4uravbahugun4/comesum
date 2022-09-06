import React from 'react'
import ItemBuy from '../components/itemBuy'
import ItemDescription from '../components/itemDescription'
import ItemDisplay from '../components/itemDisplay'
import Navbar from '../components/Navbar'

function product() {
  return (
    <>
    <Navbar/>
    <div className='flex md:flex-col lg:flex-col  justify-evenly overflow-y-auto'>
    <ItemDisplay/>
    <ItemDescription/>
    <ItemBuy/>
    </div>
    </>
   )
}

export default product