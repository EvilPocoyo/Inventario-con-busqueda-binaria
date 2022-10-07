export class Inventario {
    constructor() {
        this.listaInvt = [];
    }
    agregar(producto){
        this.listaInvt.push(producto);
    }
    
    verInvt(){
        let cadena = '';
        for(let i = 0; i < this.listaInvt.length; i++){
            cadena += `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>codigo</strong> ${this.listaInvt[i].codigo}
                    <strong>nombre</strong> ${this.listaInvt[i].nombre}
                    <strong>precio</strong> ${this.listaInvt[i].precio}
                    <strong>cantidad</strong> ${this.listaInvt[i].cantidad}
                </div>
            </div>
            `;
        }
        return cadena;
    }

    eliminar(codigo){
        let x=0;
        let prod = null;
        for(let i = 0; i < this.listaInvt.length; i++){
            if(codigo === this.listaInvt[i].codigo){
                for (let j=i; j<this.listaInvt.length-1; j++){
                    this.listaInvt[j]=this.listaInvt[j+1];
                }
                this.listaInvt[this.listaInvt.length-1]=x;
                this.listaInvt.pop();
                prod = true;
            }
        }
        return prod;
    }

    busquedaBinaria(codigo){
        let prod = '';
        let right = this.listaInvt.length-1;
        let left = 0;
        let medio = Math.floor((right+left)/2);
        while(left <= right){
            if(this.listaInvt[medio].codigo === codigo){
                prod = `
                Codigo: ${this.listaInvt[medio].codigo}
                Nombre: ${this.listaInvt[medio].nombre}
                Precio: ${this.listaInvt[medio].precio}
                Cantidad: ${this.listaInvt[medio].cantidad}
                `;
            }
            if(this.listaInvt[medio].codigo < codigo  ){
                left = medio + 1;
            }else{
                right = medio - 1;
            }
            medio = Math.floor((right+left)/2);
        }
        return prod;
    }
    /*buscar(codigo){
        document.getElementById("product-list").innerHTML="";
        for(let i = 0; i < this.listaInvt.length; i++){
            let aux = this.listaInvt[i].codigo;
            if(Number(aux) === Number(codigo)){
                const listaProducto = document.getElementById('product-list');
                const element = document.createElement('div');
                element.innerHTML = `
                <div class="card text-center mb-4">
                   <div class="card-body">
                       <strong>${i}</strong>.
                       <strong>Codigo</strong>: ${this.listaInvt[i].codigo}
                       <strong>Nombre</strong>: ${this.listaInvt[i].nombre}
                       <strong>Precio</strong>: ${this.listaInvt[i].precio}
                       <strong>Cantidad</strong>: ${this.listaInvt[i].cantidad}
                    </div>
                </div>
                `;
                listaProducto.appendChild(element);
            }
        }
        if(document.getElementById("product-list").innerHTML === ""){
            const listaProducto = document.getElementById('product-list');
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto no encontrado</strong>
                </div>
            </div>
            `;
            listaProducto.appendChild(element);
        }
    }*/

    /*agregarPosicion(producto, posicion){
        posicion = posicion - 1;
        let aux = this.listaInvt[posicion];
        this.listaInvt[posicion] = producto;
        for(let i = posicion+1; i < this.listaInvt.length; i++){
            let aux2 = this.listaInvt[i];
            this.listaInvt[i] = aux;
            aux = aux2;
        }
        this.listaInvt.push(aux); 
    }*/

    invertir(){
        let aux = [];
        for(let i = this.listaInvt.length-1; i >= 0; i--){
            aux.push(this.listaInvt[i]);
        }
        this.listaInvt = aux;
    }
}