// Type Conversion

function convertToNumber(str) {
    try{
        const num = Number(str)
        if (isNaN(num)){
            throw new Error("Invalid Number")
        }
        return num;
    }
    catch(error){
        return "Invalid Number";
    }
    
}
console.log(convertToNumber("avbdj"));
console.log(convertToNumber(13));

