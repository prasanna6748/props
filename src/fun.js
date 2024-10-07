import React from 'react'

let Change = () => {
    let count = () => {
        alert("hoiii")
    }
    let arr=[
    {
        id:1,
        name:"prass",
        age:40,
    },
    {
        id:2,
        name:"prassSSS",
        age:40,
    }

    ]
    return(
        <div>
            {
            arr.map((e,i)=>{
                return(
                    <div>

                        <h1>{e.name}</h1>
                        <h1>{e.id}</h1>
                        </div>
                )
            })
            
        }
            

            
              <button onClick={count}>Click</button>
        </div>
    )
}

export default Change