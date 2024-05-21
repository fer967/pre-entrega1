const products = [
    {
        id:1,
        title:'guitarra',
        price:'3000',
        category:'cuerdas',
        description:'acustica',
        image:''
    },
    {
        id:2,
        title:'bateria',
        price:'2000',
        category:'percusion',
        description:'acustica',
        image:''
    },
    {
        id:3,
        title:'flauta',
        price:'1000',
        category:'vientos',
        description:'traversa',
        image:''
    },
    {
        id:4,
        title:'piano',
        price:'5000',
        category:'teclados',
        description:'de cola',
        image:''
    },
    {
        id:5,
        title:'bajo',
        price:'2500',
        category:'cuerdas',
        description:'electrico',
        image:''
    },
    {
        id:6,
        title:'bombo',
        price:'1500',
        category:'percusion',
        description:'leguero',
        image:''
    },
    {
        id:7,
        title:'trompeta',
        price:'3000',
        category:'vientos',
        description:'piccolo',
        image:''
    },
    {
        id:8,
        title:'teclado',
        price:'4000',
        category:'teclados',
        description:'midi',
        image:''
    },
];

export const getProducts = new Promise((resolve) =>{
    setTimeout(() => {
        resolve(products);
    }, 3000);
});


// getProduct tambien es promise
export const getProduct = (id) => {
    return products.find((prod) => prod.id == id);
};


// getCategory usa filter y setTimeout
/*export const getCategory = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(products.filter((prod)=>prod.category==category))
    }, 2000)
});*/

// otra forma
export const getCategory = (category)=>{
    return products.filter((prod)=>prod.category==category);
};

