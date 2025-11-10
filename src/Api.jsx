import axios from 'axios'
import React, { useState } from 'react'

export default function Api() {
    const[products ,setProducts]=useState([])
    let domain ="https://fakestoreapi.com"
    let endpiont= "/products"
    let url =domain + endpiont
    axios
    .get(url)
    .then((res) => {
       let data=res.data
       setProducts(data)
    })
    .catch(( ) => {
        alert('eror')
    })
    
  return (
    <div className='grid grid-cols-3 gap-4'
    >
     {
        products.map (
            (el)=>{
                return(
                    <div key={el.id} className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={el.image}
      alt="Shoes" className='w-[300px] card-img'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{el.category}</h2>
    <p>{el.price}$</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
                )
            }
        )
     }
    </div>
  )
}
