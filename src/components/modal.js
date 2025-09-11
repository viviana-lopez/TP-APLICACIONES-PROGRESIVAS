

export function Modal(){

    //llamo al id del contenedor para el modal
    let container = document.querySelector('#productModal');

    let template = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
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