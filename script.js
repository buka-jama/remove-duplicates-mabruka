function removeduplicates(number) {

    const duplicate=[];

    for (let i = 0; i < number.length; i++) {
        if (!duplicate.includes(number[i])) {

            duplicate.push(number[i]);
            
        }
        
    }
    return duplicate;
}

console.log(removeduplicates([1,0,1,0]));

console.log(removeduplicates(["New", "York", "City"]));

console.log(removeduplicates(["Hassan", "Aisha", "Aisha"]));
