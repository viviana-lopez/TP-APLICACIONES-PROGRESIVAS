//funcion para crear el componente del contador dentro del span y poder reutilizarlo en el carrito de compras
export function contador(id) {
    let template = `
        <div class="d-flex justify-content-center align-items-center gap-3 my-3">
            <button id="decrementBtn-${id}" class="btn btn-dark">-</button>
            <span id="contador-${id}">1</span>
            <button id="incrementBtn-${id}" class="btn btn-dark">+</button>
        </div>
        `;

    return template;
}

//funcion para acceder a los id de cada elemento del contador del boton para modificar la cantidad del producto
export function addEventListeners(id) {
    let btnIncrement = document.querySelector(`#incrementBtn-${id}`);
    let btnDecrement = document.querySelector(`#decrementBtn-${id}`);
    //let spanContador = document.querySelector(`#contador-${id}`);

    //agrego los eventos on click a los botones
    btnIncrement.addEventListener('click', () => {
        console.log('click aumentar');
    });

    btnDecrement.addEventListener('click', () => {
        console.log('clic disminuir');
    });

}