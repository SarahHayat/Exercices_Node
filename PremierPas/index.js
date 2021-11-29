const fs = require('fs');
const csv = require('csv-parser')
const csv_data = [];
const stats = [];
const fileName = 'text.csv'
let average_feet = [];
let average_height = [];

function main() {
    if (verifyFileExist(fileName) && verifyIsCsvFile(fileName)) {

        console.log("je suis dans le fichier ", fileName)
        fs.createReadStream(fileName)
            .pipe(csv({
                delimiter: ';',
            }))
            .on('data', function (row) {
                // console.log(row)
                // const username = generateUsername(row.Firstname, row.Surname);
                // addToFeetTab(row.Feet);
                // addToHeightTab(row.Height);
                // csv_data.push(row)
                console.log(row)
                const datas = {
                    num: row.Firstname,
                    date: row.Surname,
                    jackpot: row.Feet,
                    n1: row.Height,

                }
                console.log(datas)
                // users.push(user)
                // console.table(csv_data)
            })
            .on('error', function (err) {
                console.log("ERROR = ", err)
                // do something with `err`
            })
            .on('end', function () {
                //
                // const stat = {
                //     "feets": calculate_average(average_feet),
                //     "heights": calculate_average(average_height)
                // }
                // stats.push(stat)
                // writeStats("Average Feet" + calculate_average(average_feet).toString())
                // writeStats("Average Height" + calculate_average(average_height).toString())
                // // console.table(users)
                // console.table(stats)

            })
    } else {
        console.error('File does not exist')
    }
}


function generateUsername(firstname, surname) {
    return `${firstname[0]}-${surname}`.toLowerCase();
}

function addToHeightTab(height) {
    average_height.push(height)
    console.log(average_height)
}

function addToFeetTab(feet) {
    average_feet.push(feet);
    console.log(average_feet)
}

function calculate_average(tab) {
    let avg = 0;
    for (const value in tab) {
        avg = Number(tab[value]) + avg;
    }
    return avg / tab.length;
}

function verifyFileExist(fileName) {
    return fs.existsSync(fileName);
}

function verifyIsCsvFile(fileName) {
    return fileName.split(".")[1] === "csv";
}

function writeStats(data) {

    fs.appendFile("stats.csv", data + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    })
}

main();