function infected(days) {
    var numOfInfected = 0;

    for(let i = 0; i < days + 1; i++){
        if(i == 0){
            //Day 0 1 computer is infected
            numOfInfected = 1
        } else if ( i % 3 != 0){
            //Every day after day 0 the number of infected computers double
            numOfInfected = numOfInfected * 2
        } else if ( i % 3 == 0){
            // Every 3rd day, a patch is applied after the virus spreads 
            // and reduces the number of infected computers by 20%. 

            // Account for the new number of infected before patch is applied
            numOfInfected = numOfInfected * 2
            // Round the number of patched computers up to the nearest whole number.
            var numPatched = Math.ceil(numOfInfected * .20)
            // Subtract number of patched computers from total number of infected computers
            numOfInfected = numOfInfected - numPatched
        }
    }
    return numOfInfected;
}

console.log(infected(25))

