//Traer la pantalla donde se va a poner la info
const pantalla = document.querySelector(".pantalla");

//Llamar TODOS(All) los botones
const botones = document.querySelectorAll(".btn");

/* Al apretar un boton suceda algo. Agregar un EvenListener a todos los botones
querySelectorAll crea un array */

botones.forEach((boton) => {
  //Cuando se haga "click" en cada botón, se ejecute cierta función
  boton.addEventListener("click", () => {
    //Mostrar en la pantalla el valor del botón
    const botonClick = boton.textContent;

    if (boton.id === "limpiar") {
      pantalla.textContent = "0";
      return;
      //(return) Termina la condicion y no se ejecuta nada mas.
    }

    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "...Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
        //eval() evalua un conjunto de strings que tenga operaciones
        //matematicas en un solo String y no en formato numero
      } catch (error) {
        pantalla.textContent = "...Error!";
      }
      return;
    }

    if (pantalla.textContent === "0" || pantalla.textContent === "...Error!") {
      pantalla.textContent = botonClick;
    } else {
      pantalla.textContent += botonClick;
    }
  });
});
