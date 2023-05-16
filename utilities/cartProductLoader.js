import { getShoppingCart } from "./fakedb";

const cartProductLoader = async () => {
    const storedProduct = getShoppingCart()
    const ids = Object.keys(storedProduct)
    console.log(ids);
    const loadedProduct = await fetch('https://ema-john-server-theta.vercel.app/productsbyids', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(ids)

    })
    const product = await loadedProduct.json()
    const orderProducts = []
    for (const id in storedProduct) {
        const orderProduct = product.find(product => product._id === id)
        if (orderProduct) {
            orderProduct.quantity = storedProduct[id]
            orderProducts.push(orderProduct)
        }
    }
    return (orderProducts);



}
export { cartProductLoader }