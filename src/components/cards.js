//el INDEX.JS lo vamos a utilizar uniamente para llamar a los METODOS y FUNCIONES

//el "import" permite traer funciones de tipo "export" desde otros archivos js

import { getProducts } from "../api.js";
import { Modal } from "./modal.js";


export function RenderCards (){
    //realizo el uso del DOM para poder ubicar donde se van a generar las cards
    let productList = document.querySelector('#product-list');
    console.log(productList);
     
    //utilizo la funcion getProducts para hacer el llamado de la api
    //finalizo la promesa del fetch con un then para que me muestre todo el array de productos traidos de la API
    //con el let template dentro del forEach genero de manera dinamica los cards de productos utilizando los datos traidos de la api
    getProducts().then((products)=> {
        if (!Array.isArray(products) || products.length === 0) {
            productList.innerHTML = "<p>No se pudieron cargar productos.</p>";
            return;
        }
    
        let template = '';
        products.forEach((p) => {
            template += `
                <div class="col">
                    <div class="card justify-content-center align-items-center" style="width: 300px;">
                        <img src="${p.image}" class="card-img-top" alt="${p.title}" style="height: 300px; width: 250px; object-fit: contain">
                        <div class="card-body" style="width: 300px;">
                            <h5 class="card-title text-truncate">${p.title}</h5>               
                        </div>
                        <div class="mb-3">
                            <button class="btn btn-dark" id="btn-${p.id}"> Más detalles</button>
                        </div>
                    </div>
                </div>
            `;
            //<p class="card-text">${p.description}</p>
        });
    
        //cargo los cards que se crearon en la variable template en el html
        productList.innerHTML = template;

        //asignando eventos onclick a los botones (identifica al boton del elemento seleccionado)
        products.forEach((p) =>{
            let btn = document.querySelector(`#btn-${p.id}`);
            btn.addEventListener('click', () => {
                Modal();
            });
        });
    });
    //la comilla invertida permite realizar saltos de linea
    //template += (el +=) permite que vaya acumulando las cards generadas, si no se pusiese el += solo quedaria generada la ultima card del recorrido del array pues iria modificando la informacion en lugar de acumulandola
}