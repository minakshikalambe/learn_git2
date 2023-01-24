import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProductCard } from '../Redux/products/action';

const gameList =[
  {
    "name":"Minecraft",
    "year":"2011",
    "photoLink":"https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    "price":1500
  },
  {
    "name":"Grand Theft Auto V",
    "year":"2013",
    "photoLink":"https://www.gamespot.com/a/uploads/scale_landscape/mig/6/8/4/4/2286844-gtalogo-big_61199_screen.jpg",
    "price":1200
  },
  {
    "name":"BioShock",
    "year":"2007",
    "photoLink":"https://lh3.googleusercontent.com/HCUkD69MAHEOj84Yi7Kb5vxHpCePTsmQI4g9vYuVPUo-87cWE6ZZIk0tiyYzaiS9zaAFMTXRNYJaaRczRN-yQYw",
    "price":1100
  },
  {
    "name":"BioShock Infinite",
    "year":"2013",
    "photoLink":"https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg",
    "price":1300
  },
  {
    "name":"Dance Dance Revolution",
    "year":"2010",
    "photoLink":"https://upload.wikimedia.org/wikipedia/en/5/52/Dance_Dance_Revolution_PS3.jpg",
    "price":1700
  },
  {
    "name":"The Witcher 3: Wild Hunt",
    "year":"2011",
    "photoLink":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/EN_The-Witcher-3_Logo-Black_RGB.svg/1200px-EN_The-Witcher-3_Logo-Black_RGB.svg.png",
    "price":1000
  },
  {
    "name":"Street Fighter II",
    "year":"1991",
    "photoLink":"https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/SF2_JPN_flyer.jpg/220px-SF2_JPN_flyer.jpg",
    "price":1500
  },
  {
    "name":"Madden NFL 21",
    "year":"2020",
    "photoLink":"https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Madden_NFL21_Logo.png/260px-Madden_NFL21_Logo.png",
    "price":1900
  },
  {
    "name":"Team Fortress 2",
    "year":"2020",
    "photoLink":"https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    "price":2000
  }
]
export const Home = () => {
  const dispatch =useDispatch();
  const addToCartHandler=(e)=>{
     dispatch(addProductCard(e))
  }
  return (
    <div className='homeContainer'>
      <div className='navbar'>
        <Link to="/register"><div className='loginDiv'>Login/SignIn</div></Link>
        <Link to="/cart"><div className='loginDiv'>Cart</div></Link>
      </div>
      <div className='homeBody'>
        {gameList.map((e,i)=>{
          return <div key={i} className="gameCard"><p>{e.name}</p><p>{e.year}</p><p>{e.price}₹</p><div className='imgDiv'><img src={e.photoLink} alt={"img"}/></div>
          <button className='addcart' onClick={()=>addToCartHandler(e)}>Add to cart</button>
          </div>
        })}
      </div>
    </div>
  )
}