function ageCalculation() {
    const input = document.getElementById("birthday").value;
    //La variable "input" utiliza el método "document.getElementById()" para obtener el valor de entrada utilizando su id "birthday".
    
    const bd = new Date(input);
    //La variable "bd" utiliza el constructor "Date()" con la fecha introducida por el usuario, es decir, la fecha de nacimiento, como argumento.
    
    const month_diff = Date.now() - bd.getTime();
    //la variable "month_diff" calcula la diferencia entre la fecha actual mediante el método asociado "now()" y el tiempo en milisegundos transcurrido desde el "1 de enero de 1970" obtenido mediante el método "getTime()".

    const age_diff = new Date(month_diff);
    //La variable "age_diff" convierte la diferencia de meses calculada al formato de fecha.

    const year = age_diff.getUTCFullYear();
    //La variable "year" extrae el año de la fecha.

    const calAge = Math.abs(year - 1970);
    //La variable "cal-age" calcula la edad exacta de una persona restando el cálculo obtenido basado en la hora de 1970 del año obtenido.
    
    if (input === "") {
        alert("Please enter your birthday")
    } else {
        return document.getElementById("result").innerHTML = `Your age is ${calAge} ${calAge > 1 ? "years" : "year"} old`;
    } //el método "document.getElementById()" accede al encabezado añadido utilizando su id "result" para mostrar la edad calculada.
}



