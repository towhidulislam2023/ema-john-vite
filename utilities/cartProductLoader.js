import { getShoppingCart } from "./fakedb";

const cartProductLoader=async()=>{
    const loadedProduct=  await fetch('products.json')
    const product=await loadedProduct.json()
const orderProducts=[]
    const storedProduct=getShoppingCart()
    for(const id in storedProduct){
        const orderProduct = product.find(product=>product.id === id)
        if (orderProduct) {
            orderProduct.quantity = storedProduct[id]
            orderProducts.push(orderProduct)  
        }
    }
    return (orderProducts);



}
export { cartProductLoader }