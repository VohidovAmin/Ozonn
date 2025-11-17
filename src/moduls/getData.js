const getData = () => {
    return fetch('https://test-cd24b-default-rtdb.firebaseio.com/goods.json')
    .then((responce) => {
        return responce.json()
    })
}

export default getData