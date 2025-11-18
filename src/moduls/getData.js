const getData = (str) => {
    return fetch(
        `https://test-cd24b-default-rtdb.firebaseio.com/goods.json?${str ? 'search=${str}' : ''}`
        )
        .then((responce) => {
            return responce.json()
        })
}

export default getData  