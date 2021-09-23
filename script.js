/*
//creacion de una clase 
class Persona {
    //crecion de un atributo
    nombrePersona = "";
    //creacion de un metodo
    imprimirNombre() {
        console.log(this.nombrePersona);
    }
    obtenerNombre() {
        //llamada de un atributo
        this.nombrePersona = prompt("Ingre tu nombre");
    }
    ejecutarMetodos(){
        //llamada a metodos
        this.obtenerNombre();
        this.imprimirNombre();
    }
}
//instancia de una clase 
let miObjeto = new Persona();
miObjeto.ejecutarMetodos();


*/
class Siglo{
    añorecabado=0;
    

    obtenernombre(){
        
        this.añorecabado=prompt("ingresa el año")
        this.añorecabado=parseInt(this.añorecabado)
        console.log(this.añorecabado)
        if (this.añorecabado<100){
            console.log(" estas en siglo 1")
        }else if(101>this.añorecabado<200){
            console.log("estas en siglo 2")
        }else if(201>this.añorecabado <300){
            console.log("estas en siglo 3")
        }else if(201>this.añorecabado <300){
            console.log("estas en siglo 3")
        }else if(201>this.añorecabado <300){
            console.log("estas en siglo 3")
        }else if(201>this.añorecabado <300){
            console.log("estas en siglo 3")
        }else if(201>this.añorecabado <300){
            console.log("estas en siglo 3")
        }else if(201>this.añorecabado <300){
            console.log("estas en siglo 3")
        }else if(301>this.añorecabado <401){
            console.log("estas en siglo 4")
        }else if(401>this.añorecabado <500){
            console.log("estas en siglo 5")
        }else if(501>this.añorecabado <600){
            console.log("estas en siglo 6")
        }else if(601>this.añorecabado <701){
            console.log("estas en siglo 7")
        }else if(701>this.añorecabado <800){
            console.log("estas en siglo 8")
        }else if(801>this.añorecabado <900){
            console.log("estas en siglo 9")
        }else if(901>this.añorecabado <1000){
            console.log("estas en siglo 10")
        }else if(101>this.añorecabado <1100){
            console.log("estas en siglo 11")
        }else if(1101>this.añorecabado <1200){
            console.log("estas en siglo 12")
        }else if(1201>this.añorecabado <1300){
            console.log("estas en siglo 13")
        }else if(1301>this.añorecabado <1400){
            console.log("estas en siglo 14")
        }else if(1401>this.añorecabado <1500){
            console.log("estas en siglo 15")
        }else if(1501>this.añorecabado <1600){
            console.log("estas en siglo 16")
        }else if(1601>this.añorecabado <1700){
            console.log("estas en siglo 17")
        }else if(1701>this.añorecabado <1800){
            console.log("estas en siglo 18")
        }else if(1801>this.añorecabado <1900){
            console.log("estas en siglo 19")
        }else if(1901>this.añorecabado <2000){
            console.log("estas en siglo 20")
        }else if(2001>this.añorecabado <2100){
            console.log("estas en siglo 21")
        }
        
        
    }
    ejecutarMetodos(){
        
        this.obtenernombre();
    }
    
}
let miobjeto=new Siglo();
miobjeto.ejecutarMetodos();



class Palindromo{

    
    obtenerfrase() {
        //llamada de un atributo
        this.palabra = prompt("Ingre tu nombre");
        console.log(this.palabra);
        let normalized = str.toLowerCase().match(/[a-z]/gi).reverse();
        return normalized.join('') === normalized.reverse().join('')
    }
    ejecutarMetodos(){
        //llamada a metodos
        this.obtenerfrase();
        ;
    }
}
//instancia de una clase 
let miObjeto = new Palindromo();
miObjeto.ejecutarMetodos();
