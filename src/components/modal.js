import { getFromLocalStorage, saveToLocalStorage, setItemToLocalStorage } from "../storage/storage.js";
import { addEventListeners, contador } from "./contador.js";


export function Modal(prod){

    //llamo al id del contenedor para el modal
    let container = document.querySelector('#productModal');

    let template = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">${prod.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <img src="${prod.image}" class="img-fluid" alt="${prod.title}">
                        </div>
                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                            <div class="d-flex flex-column gap-3">
                                <p>${prod.description}</p>
                                <p style="width: 150px;">
                                    Precio: <small class="text-dark fs-6 fw-bold"> USD ${prod.price}</small>
                                </p>  
                                ${contador(prod.id)}<!-- el contador viene desde la funcion contador que está en contador.js -->
                            </div>   
                        </div>   
                    </div>   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-dark" id="addToCartBtn-${prod.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;


    //le cargo a traves del DOM con el innerHTML el contenido de template
    container.innerHTML = template;

    //para crear el nuevo modal dentro del container
    const bootstrapModal = new bootstrap.Modal(container);
    
    //se utiliza el metodo show para mostrar el modal
    bootstrapModal.show();
    
    //llamo a la funcion addEventListeners  que está en contador.js para capturar el id del producto y poder reutilizarlo en el modal de descripcion del producto y que se aplique a los botones para marcar la cantidad del producto seleccionado dentro del modal
    addEventListeners(prod.id, 1);

    //llamo (capturo) al boton de agregar al carrito del modal de mostrar producto por su id a traves del document.querySelector
    let btnAddToCart = document.querySelector(`#addToCartBtn-${prod.id}`);

    //le agrego el veneto click al boton de agregar al carrito
    btnAddToCart.addEventListener('click', () => {

        //===== TO=>>>>DO
        //mensaje para verificar por pantalla que este tomando los datos del boton al disparar el evento click
        console.log(`Producto ${prod.id} agregado al carrito`);//===== TO=>>>>DO

        //se accede al selector del <span> del contador que indica la cantidad del producto que se va a agregar al carrito
        prod.qtty = Number(document.querySelector(`#contador-${prod.id}`).textContent);
        //hay tres formas de convertir el contenido que toma como string para que lo guarde como tipo number:
        // prod.qtty = ++document.querySelector(`#contador-${prod.id}`).textContent;
        // prod.qtty = Number(document.querySelector(`#contador-${prod.id}`).textContent);
        // prod.qtty = parseInt(document.querySelector(`#contador-${prod.id}`).textContent);
        // prod.qtty = parseFloat(document.querySelector(`#contador-${prod.id}`).textContent);

        // metodo para VALIDACION DE PRODUCTO - NO GENERAR PRODUCTOS DUPLICADOS
        let dataStorage = getFromLocalStorage();//recupero la informacion del localStorage y lo guardo en una variable
        let filtered = dataStorage.filter((p) => p.id !== prod.id);//carga en la variable existe todos los productos anteriores  distintos al que estamos cargando ahora (si el que estamos cargando ahora ya existia el identico al que estamos agregando no lo incluye)
        
        //===== TO=>>>>DO
        //mensaje de consola para verificar si esta tomando bien los datos
        console.log(filtered);
        
        //se le agrega a "prod"  este nuevo producto que seleccione con la cantidad actualizada
        filtered.push(prod);

        //se le agrega el valor de la variable "filtered" al localStorage
        setItemToLocalStorage(filtered);
        //lo mismo hecho directamente sin utilizar la funcion traida desde storage.js
        //localStorage.setItem('cart', JSON.stringify(filtered));

        //===== TO=>>>>DO """""ACA EL PROFE DIJO QUE LO IBA A TERMINAR DE MODIFICAR PARA LA CLASE 4"
        //llamo a la funcion para guardar en el local storage
        //saveToLocalStorage(prod);   
    });

};