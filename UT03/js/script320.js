//Vamos a suponer que tenemos un arrays con cadenas que incluyen fechas de la forma DD-MM-YYYY donde DD es el día, MM es el mes y YYYY es el año. Desarrolla una función sortDates( arr ) que devuelva un array con las mismas fechas ordenadas cronológicamente. El objetivo de este ejercicio es prácticas con la manipulación de cadenas y métodos de arrays, por lo que no debes utilizar las funciones de JavaScript para trabajar con fechas.


function sortDates(arr) {


    //let newfecha = arr.map((item) => item.split('-').join(''));
    arr.sort((a, b) => {
        let strA = a.slice(6) + a.slice(3,5) + a.slice(0,2);
        let strB = a.slice(6) + a.slice(3,5) + a.slice(0,2);
    
        return strA > strB ? -1 : 1;

    });

    return (arr);

}

    //newfecha = newfecha.map((item) => item.slice(0, 2) + '-' + item.slice(2, 4) + '-' + item.slice(4));

    


console.log(sortDates(['24-05-2022', '02-12-2018', '14-02-2020','01-07-2005','02-04-2005','01-01-2005']));







