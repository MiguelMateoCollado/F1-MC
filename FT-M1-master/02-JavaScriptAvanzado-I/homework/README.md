
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);
  console.log(a);
  var f = function(a, b, c) {
    b = a;
    console.log(b);
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b);
}
c(8,9,10);
console.log(b);
console.log(x);
```
El console.log(b) == 10
El console.log(x) == 1

las variables con var son variables locales o globales dependiendo el contexto donde fue declarada, pero las variables que no son declaradas con var son variables que inmediatamente comienzan a existir sin importar el contexto es decir cuando el contexto donde existe esa variable es ejecutado esta variable pasa a existir en todos los contextos como si fuera parte del contexto global y no de un contexto local.

```javascript
console.log(bar);
console.log(baz);
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```
baz === not defined
bar === undefined

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor);
```
instructor === franco

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);
```
instructor === tony

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);
    console.log(pm);
}
console.log(instructor);
console.log(pm);
```
instructor == the flash
pm === franco

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" === 2
"2" * "3" === 6
4 + 5 + "px" === "9px"
"$" + 4 + 5 === "$45"
"4" - 2 === 2
"4px" - 2 === NaN
7 / 0 === Infinity
{}[0] === undefined
parseInt("09") === 09
5 && 2 === 2
2 && 5 === 5
5 || 0 === 5
0 || 5 === 5
[3]+[3]-[10] === undefined || 4
3>2>1 === false
[] == ![] true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();

la ejecucion no retorna nada pero en consola se muestra un undefined === a y foo() === 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);
en esta parte retorna snack === undefined
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

El primer console.log ejecuta el metodo getFullname que trae el nombre del objeto exterior que en este caso es el prop que contiene un fullname y le hace referencia con el this.fullname.

en caso del console.log que llama a test no retorna nada porque no se esta creando un objeto al cual hacer referencia en el momento es decir esa propiedad pertenece a un objeto que aun no existe y this.fullname no tiene a quien referirse todavia porque no a sido creado.

```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();
```
primero se muestra el console.log(1) y luego el console.log(4) despues toma los siguientes dos que pasaron a la API de ejecucion que son console.log(3) y luego console.log(2) estos en ese orden ya que el 2 tiene un retraso de 1 segundo.

la api espera a que la pila de ejecucion ejecute todos los pasos antes de ejecutar los que les son mandados a ella asi y luego los pone en el orden de llegada en la pila.
