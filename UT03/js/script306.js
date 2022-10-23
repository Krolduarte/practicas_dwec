function convertBase (str,baseFrom,baseTo){
    
    if ( baseTo < 2 || baseTo > 36){
        return "Debes ingresar una base entre 2 y 36";
    }else{
        let num= parseInt(str,baseFrom);
        return num.toString(baseTo);
    }

}

console.log(convertBase('10',2,10));
console.log(convertBase('1111011',2,10));    //123


// correccion Victor: return  parseInt(str,baseFrom).toString(baseTo);