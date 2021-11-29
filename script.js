
const calc = () => {
    const a = process.argv[2]
    const b = process.argv[3]
    const c = process.argv[4]
    switch (b) {
        case 'x' :
            console.log(`${a} ${b} ${c} =`, a * c)
            break
        case '+' :
            console.log(`${a} ${b} ${c} =`, a + c)
            break
        case '-':
            console.log(`${a} ${b} ${c} =`, a - c)
            break
        case '/':
            console.log(`${a} ${b} ${c} =`, a / c)
            break
    }
}

calc()

