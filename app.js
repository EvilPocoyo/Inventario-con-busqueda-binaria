import {Producto} from './producto.js';
import {Inventario} from './inventario.js';

let invt = new Inventario();

document.getElementById('producto-form').addEventListener('submit', function(e){
        let cod = document.getElementById('codigo').value;
        let nom = document.getElementById('nombre').value;
        let cant = document.getElementById('cantidad').value;
        let pre = document.getElementById('precio').value;

        let nuevo = new Producto (cod,nom,cant,pre);

        if(nom === "" || cod === "" || cant === "" || pre === ""){
            return alert("Por favor rellene todos los campos");
        }

        invt.agregar(nuevo);
        let element = invt.verInvt();

        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
        e.preventDefault();
        
});

document.getElementById('producto-e').addEventListener('submit', function(e){
        const codigoEliminar = document.getElementById('codigoEliminar').value;
        
        let element = invt.eliminar(codigoEliminar);
        if(element){
                let listarProductos = document.getElementById('product-list');
                listarProductos.innerHTML = `<h4>Producto eliminado con codigo:</h4>${codigoEliminar}`;
        }else{
                let listarProductos = document.getElementById('product-list');
                listarProductos.innerHTML = `<h4>Producto no encontrado</h4>`;
        }
        
        e.preventDefault();
});

document.getElementById('producto-b').addEventListener('submit', function(e){
        const codigoBuscar = document.getElementById('codigoBuscar').value;
        
        let element = invt.busquedaBinaria(codigoBuscar);
        if(element != ''){
                let listaProducto = document.getElementById('product-list');
                listaProducto.innerHTML = `<h4>Producto encontrado:</h4>${element}`;
        }else {
                let listaProducto = document.getElementById('product-list');
                listaProducto.innerHTML = `<h4>Producto no encontrado</h4>`;
        }

        e.preventDefault();
});

document.getElementById('producto-m').addEventListener('submit', function(e){    
        let element = invt.verInvt();
        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
        
        e.preventDefault();
});

document.getElementById('producto-in').addEventListener('submit', function(e){  
        invt.invertir();

        let element = invt.verInvt();
        let listaProducto = document.getElementById('product-list');
        listaProducto.innerHTML = element;
        e.preventDefault();
        
});