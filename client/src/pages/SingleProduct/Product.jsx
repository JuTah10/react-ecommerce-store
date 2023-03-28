import "./Product.scss"

import {useState} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setIsCartOnHover } from "../../app/cartSlice";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { stepIconClasses } from "@mui/material";


function Product() {
    const dispatch = useDispatch();
    const images = [
      "/img/productPageImg/productImage2.jpeg",
      "/img/productPageImg/tShirt.jpeg",

    ]
    const cartTestData = [
      {
        itemName:"Brown coat",
        price: 109.99,
        quantity:1,
        color: "Brown",
        size:"S",
        imageSource: "/img/cartImg/hmgoepprod.jpeg"
    },
    {
        itemName:"Brown coat",
        price: 39.99,
        quantity:2,
        color: "Brown",
        size:"M",
        imageSource: "/img/cartImg/hmgoepprod2.jpeg"
    },
    {
        itemName:"Brown coat",
        price: 109.99,
        quantity:2,
        color: "Brown",
        size:"M",
        imageSource: "https://lp2.hm.com/hmgoepprod?set=source[/f9/c3/f9c3f12b844b6e09bf4263406be48fcd783ab213.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[z],hmver[2]&call=url[file:/product/main]"
    },
    ]

    const [mainImageIndex, setMainImageIndex] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [isFavorite, setIsFavorite] = useState(false)
    function initilizeSideImagesElement(){
      const imgElements = []
      for(let i=0;i<images.length;i++){
        imgElements.push(<img onClick={()=>getNewMainImage(i)} src={images[i]}/>)
      }
      return imgElements
    }
    function getNewMainImage(index){
      setMainImageIndex(index)
    }
    function decreaseQuantity(){
      if(quantity>1){
        setQuantity(prev => prev-1)
      }
    }
    function increaseQuantity(){
      setQuantity(prev => prev+1)
    }
    function toggleFavorite(){
      setIsFavorite(prev => !prev)
    }
    return (
      <div className="product-container">
       <div className="left">
          <div className="image-container">
           
            
            <div className="main-image">
              <img src={images[mainImageIndex]}/>
            </div>
            <div className="side-images">
                {initilizeSideImagesElement()}
            </div>
          </div>
       </div>
       <div className="right">
            <h1 className="title">Long SLeeve Graphic T-Shirt</h1>
            <h2 className="price">$19.9</h2>
            <div className="desc">

            <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Riss commodo viverra maecenas accumsan lacus vel facilisis labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
            </div>
          <div className="quantity">
            <button onClick={decreaseQuantity}><RemoveIcon className="icon"/></button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}><AddIcon className="icon"/></button>
          </div>
          <div className="add-to-cart">
            <AddShoppingCartIcon className="add-icon"/>
            <span onClick={() => {
                dispatch(addToCart(cartTestData[function(){return Math.floor(Math.random() * 3)}()] ))
                dispatch(setIsCartOnHover(true))
                }
             
              }>ADD TO CART</span>
          </div>
          <div className="favorite-and-compare">
              <div className="favorite">
                {isFavorite && <FavoriteIcon onClick={toggleFavorite} className="icon-fav"/>}
                {!isFavorite && <FavoriteBorderIcon onClick={toggleFavorite} className="icon-fav"/>}
                <span>ADD TO WISH LIST</span>
              </div>
              <div className="compare"> 
                <BalanceIcon className="icon-fav"/>
                <span>ADD TO COMPARE</span>
              </div>
          </div>
            <div className="information">
              <p>Vender: Polo</p>
              <p>Product Type: T-Shirt</p>
              <p>Tags: T-Shirt, Man, Top</p>
            </div>
            <hr className="hr-break-section"/>
            <div className="information">
              <p>DESCRIPTION</p>
              <hr/>
              <p>ADDITIONAL INFORMATION</p>
              <hr/>
              <p>FAQ</p>

            </div>

       </div>
      </div>
    )
}

export default Product