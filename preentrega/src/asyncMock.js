



const products = [
    {
        id: "1",
        name: "Laptop idea pad 3 Lenovo",
        price: 1000,
        category: "Notebooks",
        img:"https://www.lenovo.com/medias/lenovo-laptop-ideapad-3-15-intel-gallery.png?context=bWFzdGVyfHJvb3R8Mzc5MTQ0fGltYWdlL3BuZ3xoMzcvaDBkLzE0MTkwNTMwNzU2NjM4LnBuZ3w5ZDRhOWU5YjBjZjUxYWI1MGMyMWU1NGNlODAyMzgyZTQyZDQyYzBiODkyYTk0YzYwZGViNmQ5ZjNkNjg2Y2Qz",
        stock: 25,
        description: "Descripcion de Laptop idea pad 3"
    },
    { id: "2", name: "Samsung S21", price: 800, category: "Celulares", img:"https://www.samsung.com/ar/smartphones/galaxy-s21-5g/galaxy-s21-fe-5g/buy/", stock: 25, description:"Descripcion de Samsung Galaxy S21"},

    { id: "3", name: "Ipad 10m generacion", price: 1200, category: "Tablets", img:"https://www.apple.com/la/ipad-10.9/", stock: 25, description:"Descripcion de Ipad 10a generacion"}
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