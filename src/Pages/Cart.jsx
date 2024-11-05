import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';


const Cart = () => {

const {products, currency, CartItems} = useContext(ShopContext);
const [cartData, setCartData] = useState([]);


useEffect(()=>{
  const tempData = [];
  for (const items in CartItems){
    for(const item in CartItems [item]){
      if (CartItems[items[item]] > 0) {
        tempData.push({
          _id: items,
          size:item,
          quantity: CartItems[items][item]
        })
      }
    }
  }
setCartData(tempData);
},[CartItems])


  return (
    <div className=' border-t pt-14'>
      <div className=' text-2xl mb-3'>
      <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product)=>product._id === item._id);

            return(
                <div key={index} className=' py-4 border-t text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 '>
                  <div className=' flex items-start gap-6'>
                    <img className=' w-16 sm:w-20' src={productData.image[0]} alt="" />
                    <div>
                      <p className=' text-xs sm:text-lg font-medium'>{productData.name}</p>
                    </div>

                  </div>

                </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Cart