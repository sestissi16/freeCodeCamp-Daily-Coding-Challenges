import math

def infected(days):
    numOfInfected = 0
    
    for day in range(days + 1):
        if day == 0:
            # Day 0 1 computer is infected
            numOfInfected = 1
        elif day % 3 != 0:
            # Every day after day 0 the number of infected computers double
            numOfInfected = numOfInfected * 2
        elif day % 3 == 0:
            # Every 3rd day, a patch is applied after the virus spreads 
            # and reduces the number of infected computers by 20%. 

            # Account for the new number of infected before patch is applied
            numOfInfected = numOfInfected * 2
            # Round the number of patched computers up to the nearest whole number.
            numOfPatched = math.ceil(numOfInfected * .2)
            # Subtract number of patched computers from total number of infected computers
            numOfInfected = numOfInfected - numOfPatched

    return numOfInfected

print(infected(17))