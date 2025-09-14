//para poder utilizar el localStorage al cargar la pagina se tiene que inicializar el localStorage (la clave y el valor)

//a esta constante se le va a asignar el valor de la variable cart (let cart que viene de la funcion saveToLocalStorage)
const STORAGE_KEY = 'cart';

//esta funcion inicializa el valor del localStorage validando primero si es que ya existe un valor inicial grabado en memoria  (va a traer ese valor), en caso de no tener un valor almacenado va a generar un valor nulo o undefined (un array vacío)
export function initLocalStorage() {
    //si (STORAGE_KEY) esta vacío va a devolver un valor FALSE y al compararlo con el FALSE del (!localStorage.getItem) va a devolver TRUE entrando asi a realizar la accion del IF
    //otra forma de escribirlo sería: if(localStorage.getItem(STORAGE-KEY) == null)
    if(!localStorage.getItem(STORAGE_KEY)) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }
}

//obtener los datos del localStorage

export function getFromLocalStorage() {
    //se parsean los datos para guardarlos en su tipo de datos originales para poder acceder a los atributos de los elementos del array
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

//guardar los datos del localStorage
export function saveToLocalStorage(item) {
    //solicitamos la informacion del localStorage
    let cart = getFromLocalStorage();
    //le agregamos a esa informacion el nuevo item seleccionado el cual se guardará al final del array
    cart.push(item);
    //convertimos nuevamente la información en un string de caracteres para que pueda ser guardado nuevamente en el localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

//funcion para agregar/actualizar nuevos productos en el carrito
export function setItemToLocalStorage(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}