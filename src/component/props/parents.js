import React from "react"
import Child from "./child"
import './card.css'

let Product =()=>{

const pro =[
    {

        id:1,
        name:"wired headphone",
        price:'$22',
        Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUuOXbwCd2QqKY_xuNmBXDVWoI_V9Pm29hgulGK1EdnUbOIriEAP2N1OS6UbNm40qJBJbEZ07mtKHevkDDPpgRnldpKkPuov4hK-LjhD_lekWDtr7d1hlj"
    },
    {

        id:1,
        name:"wired headphone",
        price:'$22',
          Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUuOXbwCd2QqKY_xuNmBXDVWoI_V9Pm29hgulGK1EdnUbOIriEAP2N1OS6UbNm40qJBJbEZ07mtKHevkDDPpgRnldpKkPuov4hK-LjhD_lekWDtr7d1hlj"
    },
    {

        id:1,
        name:"wired headphone",
        price:'$22',
          Image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUuOXbwCd2QqKY_xuNmBXDVWoI_V9Pm29hgulGK1EdnUbOIriEAP2N1OS6UbNm40qJBJbEZ07mtKHevkDDPpgRnldpKkPuov4hK-LjhD_lekWDtr7d1hlj"
    }
]

    return(
        <div>
      <Child  pro={pro}/>
        </div>
    )
}
export default Product