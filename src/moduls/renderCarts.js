const renderCarts = (goods) => {
    const cartsWrapper = document.querySelector('.cart-wrapper')

    cartsWrapper.innerHTML= ''

	if (goods.length === 0) {
		cartsWrapper.insertAdjacentHTML('beforeend', `
			<div id="cart-empty">
				Ваша корзина пока пуста
			</div>	
		`)
	} else {
		goods.forEach((goodsItem) => {
        cartsWrapper.insertAdjacentHTML('beforeend', `
				<div class="card" data-key="${goodsItem.id}">
                    ${goodsItem.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
					<div class="card-img-wrapper">
						<span class="card-img-top"
							style="background-image: url('${goodsItem.img}')"></span>
					</div>
				    <div class="card-body justify-content-between">
					    <div class="card-price">${goodsItem.price} ₽</div>
					    <h5 class="card-title">${goodsItem.title}</h5>
						<button class="btn btn-primary">Удалить</button>
					</div>
				</div>
        `)
    });
	}
}

export default renderCarts