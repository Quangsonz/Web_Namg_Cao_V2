import React from 'react'
import Data from "../products.json"

const ShopCategory = ({filterItem,  setItem,  menuItems, setProducts, selectedCategory}) => {
  return (
   <>
   <div className='widget-header'>
    <h5 className='ms-2'>All Categories</h5>
   </div>
   <div>
   <button onClick={() => setProducts(Data)} className={`m-2 ${selectedCategory ==="All" ? "bg-warning":""}`}>
            ALL
    </button>
    {
        menuItems.map((VaL, id) => {
            return(
                <button className={`m-2 ${selectedCategory === VaL ? "bg-warning" : ""}`} key={id} onClick={()=>filterItem(VaL)}>
                    {VaL}
                </button>
            )
        })
    }
   </div>
   </>
  )
}

export default ShopCategory
