const products = [
    {
        id: "1",
        name: "iphone 12",
        price: 1000,
        category: "celular",
        img:"https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png",
        stock: 25,
        description: "Descripcion de Iphone 12"
    },
    { id: "2", name: "Samsung S21", price: 800, category: "Celular", "imagen":"https://www.samsung.com/ar/smartphones/galaxy-s21-5g/galaxy-s21-fe-5g/buy/", stock: 25, description:"Descripcion de Samsung Galaxy S21"},

    { id: "3", name: "Ipad 10m generacion", price: 1200, category: "Tablet", "imagen":"https://www.apple.com/la/ipad-10.9/", stock: 25, description:"Descripcion de Ipad 10a generacion"}
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}