import postData from "./postData"
import renderCarts from "./renderCarts"

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartModal = document.querySelector('.cart')
    const cartCloseBtn = cartModal.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')
    const cartTotal = document.querySelector('.cart-total > span')
    const cartSendBtn = document.querySelector('.cart-confirm')
    const cartWrapper = document.querySelector('.cart-wrapper')

    cartBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []

        cartModal.style.display = 'flex'

        renderCarts(cart)
        
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    })

    cartCloseBtn.addEventListener('click', () => {
        cartModal.style.display = ''
    })

    goodsWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ?
                 JSON.parse(localStorage.getItem('cart')) : []
            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodItem)

            localStorage.setItem('cart', JSON.stringify(cart))
        }
    })

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ?
                 JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === +key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCarts(cart)

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
             JSON.parse(localStorage.getItem('cart')) : []
        
        postData(cart).then(() => {
            localStorage.removeItem('cart')

            renderCarts([])

            cartTotal.textContent = 0
        })
    })
}

export default cart