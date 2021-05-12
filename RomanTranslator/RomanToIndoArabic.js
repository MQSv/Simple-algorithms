function romantoIndoArabic (romanString) {
    const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"],

    translateNumber = romanNumber => {
        const index = romanNumerals.indexOf(romanNumber) + 1,

        baseFive = 5**(Math.floor(index / 2)),

        baseTwo = 2**(Math.floor((index - 1) / 2));

        return baseFive * baseTwo
    },

    translateChain = (index, lastNumber) => {
        if (index === romanString.length) return lastNumber;

        const actualNumber = translateNumber(romanString[index]);

        if (actualNumber > lastNumber) return translateChain(index + 1, actualNumber - lastNumber);

        return lastNumber + translateChain(index + 1, actualNumber)
    };

    return translateChain(ZEROINDEX = 0, ZERONUMBER = 0)
}; // wrong roman number inputs, such as IIV (equal to III), will fail;