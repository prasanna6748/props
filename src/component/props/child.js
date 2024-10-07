import React from "react"
import './card.css'

let child=(data)=>{

    console.log(data)
    return(
        <div>


{
    data.pro.map((e,i)=>
    {
        return(
            <div className="pro_list" key={i}>
                <div className="pro_cart">
              <img src={e.image} alt="pro_image"></img>
              <h2>{e.name}</h2>
                </div>

            </div>
        )
    }
    )

}
        </div>
    )
}
export default child