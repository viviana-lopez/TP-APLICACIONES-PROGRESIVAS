

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
                            <p>${prod.description}</p>
                        </div>  
                        <div class="col-12 d-flex justify-content-end align-items-start">
                            <p style="width: 150px;">
                               Precio: <small class="text-dark fs-6 fw-bold"> USD ${prod.price}</small>
                            </p>    
                        
                        </div>  
                    </div>   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-dark" id="addToCartBtn">Agregar al carrito</button>
                </div>
            </div>
        </div>
    `;

    //le cargo a traves del DOM con el innerHTML el contenido de template
    container.innerHTML = template;

    const bootstrapModal = new bootstrap.Modal(container);
    //se utiliza el metodo show para mostrar el modal
    bootstrapModal.show();
}