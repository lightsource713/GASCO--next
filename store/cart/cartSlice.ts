import { createSlice } from '@reduxjs/toolkit';
import { Cart } from 'lib/ecwid/types';

const initialState = {
  productsInCart: {} as Cart
};

export const haveSameElements = (arr1:string[], arr2:string[])=>{
  if (arr1.length !== arr2.length) {
    return false;
}

// Sort both arrays
const sortedArr1 = arr1.slice().sort();
const sortedArr2 = arr2.slice().sort();

// Compare the sorted arrays element by element
for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
        return false;
    }
}

return true;
}

export const cartClice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let tempCartData = { ...state.productsInCart };
      if (Object.keys(tempCartData).length == 0) {
        state.productsInCart = action.payload;
      } else {
        const cartItem = state.productsInCart.lines.find(cartItem=>{
          return cartItem.id == action.payload.lines[0].id
        })
        const cartItemCombination = cartItem?.merchandise.selectedOptions.map(option=>{
          return option.value
        })
        const addProductComination:string[] = action.payload.lines[0].merchandise.selectedOptions.map((option: { value: any; })=>{
          return option.value
        })
        let flag = false
        if(cartItemCombination){
          flag = haveSameElements(cartItemCombination,addProductComination)
        }
        
        if(flag){
          if(cartItem){
            const increatedCartItemData= {
              ...cartItem,
              quantity:cartItem?.quantity?cartItem?.quantity+1:1,
              cost:{
                totalAmount:{...cartItem.cost.totalAmount,
                  amount:String((Number(cartItem.cost.totalAmount.amount)/cartItem.quantity)*(cartItem.quantity+1))},
                 
                }
            }
            const sameCartItemIndex = tempCartData.lines.findIndex((item)=>{
              return item.id == action.payload.lines[0].id
            })
            tempCartData.lines[sameCartItemIndex] = increatedCartItemData
            state.productsInCart = {...tempCartData,
              totalQuantity: state.productsInCart.totalQuantity + 1,
            }
          }
        }else{
          const newCartItme = { ...action.payload.lines[0] };
          const tempLines = [...state.productsInCart.lines];
          tempLines.push(newCartItme);
          state.productsInCart = {
          ...state.productsInCart,
          lines: tempLines,
          totalQuantity: state.productsInCart.totalQuantity + 1,
        };
        }
      }
    },
    deleteCartItem:(state,action)=>{
       const tempCartData = { ...state.productsInCart };
       const itemIndex=tempCartData.lines.findIndex(item=>{
        return item.id == action.payload.id
       })
       const deletedItemQuantity = tempCartData.lines[itemIndex]?.quantity
       tempCartData.lines.splice(itemIndex,1)
       state.productsInCart = {
        ...tempCartData,
        totalQuantity:deletedItemQuantity?state.productsInCart.totalQuantity-deletedItemQuantity:state.productsInCart.totalQuantity}
    },
    editQuantity:(state,action)=>{

      let tempCartData = { ...state.productsInCart };
      const cartItem = state.productsInCart.lines.find(item=>{
        return item.id == action.payload.sendingData.lineId
      })
      const itemIndex=tempCartData.lines.findIndex(item=>{
        return item.id == action.payload.sendingData.lineId
       })
      if(action.payload.type== "minus"){
        if(action.payload.sendingData.quantity == 0){
          tempCartData.lines.splice(itemIndex,1)
          
          //Will do
          state.productsInCart = {
            ...tempCartData,
            totalQuantity:state.productsInCart.totalQuantity-1}
        }else{
          if(cartItem){
            tempCartData.lines[itemIndex] = {
              ...cartItem,
              quantity:action.payload.sendingData.quantity,
              cost:{
                totalAmount:{
                  ...state.productsInCart.cost.totalAmount,
                  amount:String(Number(state.productsInCart.lines[itemIndex]?.cost.totalAmount.amount)/Number(state.productsInCart.lines[itemIndex]?.quantity)*action.payload.sendingData.quantity)
                }
              }
            }
            state.productsInCart = {
              ...tempCartData,
              totalQuantity:state.productsInCart.totalQuantity-1}
          }
        }
      }else{
        if(cartItem){
          tempCartData.lines[itemIndex] = {
            ...cartItem,
            quantity:action.payload.sendingData.quantity,
            cost:{
              totalAmount:{
                ...state.productsInCart.cost.totalAmount,
                amount:String(Number(state.productsInCart.lines[itemIndex]?.cost.totalAmount.amount)/Number(state.productsInCart.lines[itemIndex]?.quantity)*action.payload.sendingData.quantity)
              }
            }
          }
        }
        state.productsInCart = {
          ...tempCartData,
          totalQuantity:state.productsInCart.totalQuantity+1}
      }
    }
  }
});

export const { addProductToCart,deleteCartItem,editQuantity} = cartClice.actions;
export const cartReducer = cartClice.reducer;
