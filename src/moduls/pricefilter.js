import { priceFilter } from "./filters"
import getData from "./getData"
import renderGoods from "./renderGoods"

const filterPrice = () => {
    const minInput = document.querySelector('#min')
    const maxInput = document.querySelector('#max')

     if (!minInput || !maxInput) return

    const filterPriceInput = () => {
        const min = Number(minInput.value) || 0
        const max = Number(maxInput.value) || Infinity

        getData().then((data) => {
            renderGoods(priceFilter(data, min, max))
        })
    }
    minInput.addEventListener('input', filterPriceInput)
    maxInput.addEventListener('input', filterPriceInput)
}

export default filterPrice 