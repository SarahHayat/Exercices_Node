const fs = require('fs');
const csv = require('csv-parser')
const users = [];
fs.createReadStream("text.csv")
    .pipe(csv())
    .on('data', function (row) {
        const username = generateUsername(row.Firstname, row.Surname);

        const user = {
            username,
            firstname: row.Firstname,
            surname: row.Surname,
        }
        users.push(user)
    })
    .on('end', function () {
        console.table(users)
        // TODO: SAVE users data to another file
    })

function generateUsername(firstname, surname) {
    return `${firstname[0]}-${surname}`.toLowerCase();
}