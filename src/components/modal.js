import { saveToLocalStorage } from "../storage/storage.js";
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

    //llamo a la funcion addEventListeners  que está en contador.js para capturar el id del producto y poder reutilizarlo en el modal de descripcion del producto y que se aplique a los botones para marcar la cantidad del producto seleccionado dentro del modal
    addEventListeners(prod.id, 1);

    //llamo (capturo) al boton de agregar al carrito del modal de mostrar producto por su id a traves del document.querySelector
    let btnAddToCart = document.querySelector(`#addToCartBtn-${prod.id}`);

    //le agrego el veneto click al boton de agregar al carrito
    btnAddToCart.addEventListener('click', () => {
        //mensaje para verificar por pantalla que este tomando los datos del boton al disparar el evento click
        console.log(`Producto ${prod.id} agregado al carrito`);
        prod.qtty = 1;
        //llamo a la funcion para guardar en el local storage
        saveToLocalStorage(prod);
    });

    

    //se utiliza el metodo show para mostrar el modal
    bootstrapModal.show();
}