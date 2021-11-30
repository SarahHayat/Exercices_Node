import User from "../entities/user"
import bcrypt from "bcrypt";

export function create(req, res) {
    let name = req.body.name;
    let password = req.body.password;
    let email = req.body.email;

    if (name !== null || password !== null || email !== null) {
        console.log(name, password, email)
        const hash = bcrypt.hashSync(password, 10);
        console.log("hash = ", hash)
        const user = new User({name: name, email:email, password: hash})

        user.save()
            .then((user) => {
                    res.status(201).json({
                        user
                    });
                }
            ).catch((error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
    } else {
        return res.statusCode(400).json({"message": "Champs manquant(s)"});
    }
}

