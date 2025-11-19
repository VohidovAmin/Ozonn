import { hotSaleFilter, priceFilter } from "./filters"
import getData from "./getData"
import renderGoods from "./renderGoods"

const filterPrice = () => {
    const minInput = document.querySelector('#min')
    const maxInput = document.querySelector('#max')
    const checkboxInput = document.getElementById('discount-checkbox')
    const checkboxSpan = document.querySelector('.filter-check_checkmark')

    if (!minInput || !maxInput) return

    const applyFilters = () => {
        const min = Number(minInput.value) || 0
        const max = Number(maxInput.value) || Infinity
        const hot = checkboxInput.checked

        getData().then(data => {
            const result = priceFilter(hotSaleFilter(data, hot), min, max)
            renderGoods(result)
        })
    }

    minInput.addEventListener('input', applyFilters)
    maxInput.addEventListener('input', applyFilters)

    checkboxInput.addEventListener('change', () => {
        if (checkboxInput.checked) {
            checkboxSpan.classList.add('checked')
        } else {
            checkboxSpan.classList.remove('checked')
        }

        applyFilters()
    })
}

export default filterPrice
