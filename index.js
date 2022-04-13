const pizza = [
    {
        id:1,
        nombre:"nevada", 
        ingredientes:["queso","huevo","salsa"],
        precio:700
    },
    {
        id:2,
        nombre:"cebollada", 
        ingredientes:["queso","cebolla","ajo","salsa"],
        precio:400
    },
    {
        id:3,
        nombre:"super", 
        ingredientes:["queso","huevo","salsa","oregano","cheddar"],
        precio:400
    },
    {
        id:4,
        nombre:"picante", 
        ingredientes:["queso","huevo","salsa extra picante","salsa mexicana"],
        precio:1000
    },
    {
        id:5,
        nombre:"vegana", 
        ingredientes:["queso vegano","cebolla","ajo","salsa","lentejas"],
        precio:700
    },
    {
        id:6,
        nombre:"sin queso", 
        ingredientes:["salsa","oregano"],
        precio:5600
    }
  ];

  const pizzaImpar =[];
  const pizzaMenos600 = [];
  const pizzaNombres = [];
  const pizzaPrecios = [];
  const nombreMasPrecio = [];

 

  (pizza.forEach(pizzas=> {
    if(pizzas.id%2===1){
        pizzaImpar.push(pizzas.nombre);
    }
    if(pizzas.precio<600){
        pizzaMenos600.push(pizzas.nombre);
    }
    pizzaNombres.push(pizzas.nombre);
    pizzaPrecios.push(pizzas.precio)
    nombreMasPrecio.push("Nombre:"+pizzas.nombre + " " +"Precio:"+pizzas.precio + "  ");
  }))

  console.log(`las pizzas con un id impar son: ${pizzaImpar}`);
  console.log(`las pizzas que valen menos de 600$ son: ${pizzaMenos600}`);
  console.log(`el nombre de todas las pizzas es: ${pizzaNombres}`);
  console.log(`el precio de todas las pizzas es: ${pizzaPrecios}`);
  console.log(`el nombre de la pizza y su precio es: ${nombreMasPrecio}`);
