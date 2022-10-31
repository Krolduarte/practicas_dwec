

function maxString(arr){
   return arr.reduce((item,acum) => {
        return (item.length > acum.length) ? item : acum;
    },arr[0].length)

}



console.log(maxString( ['hola','victor', 'villabalter', 'IES'] ));     // 'villabalter' 