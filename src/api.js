//archivo con la logica para consumir la API de FAKESTORE

//funcion para poder usar el fetch para consumir los datos de la API cada vez que lo necesitemos
//"export" nos permite utilizar la funcion en cualquier archivo en el que lo necesitemos

export function getProducts() {
    let res = fetch('https://fakestoreapi.com/products')
         .then((response) => response.json())
         .then((data) => data);

    return res;
}