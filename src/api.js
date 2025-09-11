//archivo con la logica para consumir la API de FAKESTORE

//funcion para poder usar el fetch para consumir los datos de la API cada vez que lo necesitemos
//"export" nos permite utilizar la funcion en cualquier archivo en el que lo necesitemos
// export function getProducts() {
//     let res = fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => console.log(data));

//     return res;
// }

export function getProducts() {
    let res = fetch('https://fakestoreapi.com/products')
         .then((response) => response.json())
         .then((data) => data);

    return res;
}

//----------sugerencia que me dio el chat para hacer la conexion sin el error que me habia estado dando
// export async function getProducts() {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');
//     if (!response.ok) {
//       throw new Error("Error en la API: " + response.statusText);
//     }

//     const data = await response.json();
//     console.log("Productos obtenidos:", data);
//     return data;  // 🔑 asegurarse de retornar el array
//   } catch (error) {
//     console.error("Error al obtener productos:", error);
//     return [];  // si hay error, devolvemos array vacío
//   }
// }