import React from 'react';
import { getData, setData, clearData } from './AsyncStorage';
import { resetCartQuantity, updateCartQuantity, updateCartState } from '../redux/reducers/cart';
import { useDispatch } from 'react-redux';
import { View } from 'react-native';



export class Cart {
    #dispatch;
    constructor(dispatch) {
        this.#dispatch = dispatch;
    }

    async getCart() {
        const result = await getData('cart');
        return result;
    }

    async updateState (){
        var sum = 0;
        await this.getCart().then(r => {
            r.forEach((obj) => {
                sum += obj.quantity;
            })
            this.#dispatch(updateCartQuantity(sum))
        }).catch((err) => {
            console.error(err)
        })
    }

    //------------//
    async updateCart (item) {  
        var cart = await this.getCart();
        if(item.quantity == 0) {
            const index = cart.findIndex(obj => {
                return obj.id === item.id;
            })        
            if (index > -1) { 
                cart.splice(index, 1);
                setData('cart',cart).then(() => {
                    this.updateState()
                }).catch((err) => {
                    console.error(err)
                })
            }
        }

        const index = cart.findIndex(obj => {
            return obj.id === item.id;
        })
        if(index !== -1) cart[index].quantity = item.quantity;
        setData('cart',cart).then(() => {
            this.updateState()
        }).catch((err) => {
            console.error(err)
        })
    }
        //------------//
    async addToCart (item) {
        const result = await this.getCart();
    
        if(item.id === null || item.quantity === null) {
            console.error("addToCart() -> Wrong Item");
            return;
        }
        if(result !== null) {
            const index = result.findIndex(obj => {
                return obj.id === item.id;
            })
            if(index !== -1) return;
        }
    
        var r = result;
        if(result === null) r = []
        setData('cart',[...r, item]).then(() => {
            this.updateState()
        }).catch((err) => {
            console.error(err)
        })
    }
    
    async removeFromCart (itemId) {
        await this.getCart().then((result => {
            var index = result.findIndex(obj => {
                return obj.id === itemId;
            })        
            if (index > -1) { 
                result.splice(index, 1);
                setData('cart',result).then(() => {
                    this.updateState()
                }).catch((err) => {
                    console.error(err)
                })
            }
        }))
    }

    async clearCart () {
        await clearData('cart').then(() => {
            this.updateState()
        }).catch((err) => {
            console.error(err)
        })
    }
    
}
