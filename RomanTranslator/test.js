//random numbers
const datatoTest = [
    "LXXXI",
    "DCCCLXXIII",
    "MCCXCI",
    "DXCIII",
    "DCLXXXIV",
    "MDCXLVI",
    "MDLXI",
    "MCMXX",
    "MDCCLXXXIX",
    "DCCCLXXVI"
],

results = [
    81,
    873,
    1291,
    593,
    684,
    1646,
    1561,
    1920,
    1789,
    876
],

translatedData = datatoTest.map(numeral => romantoIndoArabic(numeral));

console.log("Have Difference?" +//compare / tells if there´s a difference between results and translatedData elements
    results.map((correctNumber, index) => translatedData[index] === correctNumber).includes(false)
)