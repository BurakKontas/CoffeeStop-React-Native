import { getData, setData, clearData } from './AsyncStorage';

export const getCart = async () => {
    const result = await getData('cart');
    return result;
}

export const addToCart = async (item) => {
    const result = await getCart();
    if(result !== null) {
        const index = result.findIndex(obj => {
            return obj.id === item.id;
        })
    
        if(index !== -1) return;
    }

    var r = result;
    if(result === null) r = []
    setData('cart',[...r, item])
}


export const clearCart = async () => {
    await clearData('cart');
}

export const updateCart = async (item) => {
    var cart = await getCart();
    if(item.quantity == 0) {
        const index = cart.findIndex(obj => {
            return obj.id === item.id;
        })        
        if (index > -1) { 
            cart.splice(index, 1);
            setData('cart',cart);
            return;
        }
    }

    const index = cart.findIndex(obj => {
        return obj.id === item.id;
    })
    if(index !== -1) cart[index].quantity = item.quantity;
    setData('cart',cart)
}