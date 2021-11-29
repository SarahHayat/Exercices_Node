const crypto = require('crypto')

const casino = () => {
    let j = 0;

    for (let i = 0; i < 100; i++) {
        var a = get_symboles(crypto.randomInt(0, 8))
        var b = get_symboles(crypto.randomInt(0, 8))
        var c = get_symboles(crypto.randomInt(0, 8))
        console.log(`${a} ${b} ${c}`);
        if (a === b && b === c) {
            j++;
        }
    }
    console.log(j);

}

function get_symboles(nb) {
    switch (nb) {
        case 0:
            return "♠";
        case 1:
            return "♥";
        case 2:
            return "♦";
        case 3:
            return "♣";
        case 4:
            return "ø";
        case 5:
            return "&";
        case 6:
            return "%";
        case 7:
            return "$";
    }
}

casino()