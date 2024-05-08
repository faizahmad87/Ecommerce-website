import { createContext,useState } from "react";
import { product,getProduct } from "./Product";

export const CartContext=createContext({
    items:[],
    getProductQuantity:()=>{},
    addOneToCart: ()=>{},
    removeOneFromCart: ()=>{},
    deleteFromCart: ()=>{},
    getTotalCost: ()=>{}
})

export function CartProvider({children}){
    const [cartProducts,setCartProducts]=useState([]);

    function getProductQuantity(id){
        const quantity=cartProducts.find(it=>it.id==id)?.quantity;
        if(quantity==undefined)return 0;
        return quantity;
    }
    
    function addOneToCart(id){
        const quantity=getProductQuantity(id);
        if(quantity===0){
             setCartProducts( [
                ...cartProducts,
                {
                    id:id,
                    quantity:1
                }
              ]);
        }
        else{
           setCartProducts(
            cartProducts.map(product=>
                product.id===id?
                {...product,quantity:product.quantity+1}
                :product
            )
           )
        }
    }

    function removeOneFromCart(id){
        const quantity=getProductQuantity(id);
        if(quantity==1){
            deleteFromCart(id);
        }
        else{
            setCartProducts(
                cartProducts.map(product=>
                    product.id===id?
                    {...product,quantity:product.quantity-1}
                    :product
                )
               )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts=>cartProducts.filter(
                currentproduct=>{
                    return currentproduct.id!=id;
                }
            )
        )
    }

    function getTotalCost(){
      let totalCost=0;
      cartProducts.map(it=>
        totalCost+=getProduct(it.id).Price*it.quantity
      )
      return totalCost;
    }
    const contextValue={
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return <>
     <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    </>
}

export default CartProvider;