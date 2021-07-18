var result;
var restart = false;
do {
    do {
        var choix = prompt("Wich operation will you choose ? \n\n 1 - Addition\n 2 - Multiplication\n 3 - Substraction\n 4 - Division\n");
        choix = parseInt(choix);
        if(choix != "" && choix != null){
            do {
                var nb1 = prompt("First number");
                nb1 = parseFloat(nb1);
                var nb2 = prompt("Second number");
                nb2 = parseFloat(nb2)
            } while (isNaN(nb1) || isNaN(nb2));
        }
    } while (choix > 4 || choix == 0 || isNaN(choix) || (!Number.isInteger(choix)));

    function addition(nombreA, nombreB){
        return nombreA + nombreB;
    }
    function multiplication(nombreA, nombreB){
        return nombreA * nombreB;
    }
    function substraction(nombreA, nombreB){
        return nombreA - nombreB;
    }
    function division(nombreA, nombreB){
        if(nombreB == 0){
            throw new Error("We can't divide by 0")
        }
        return nombreA / nombreB;
    }
    try{
        switch (choix) {
            case 1:
                result = addition(nb1, nb2)
                break;  
            case 2:
                result = multiplication(nb1, nb2)
                break;
            case 3:
                result = substraction(nb1,nb2)
                break;
            case 4:
                result = division(nb1,nb2)
                break
            default:
                throw new Error("The choice is not valid")
        }
        alert(result);
    
            
        
        restart = confirm("An other try ?");
    }catch(error){
        alert(error);
    }
} while (restart);

