import bcrypt from "bcrypt";
import {User} from "../entities/user";
import Joi from "joi";

export function login(req, res) {
    const {error} = schema.validate(req.body);
    if (error) {
        return res.status(400).json(error.details[0].message);
    }
    User.findOne({email: req.body.email})
        .then((user) => {
            const validPassword = bcrypt.compareSync(req.body.password, user.password);
            if (!validPassword) {
                return res.status(400).json('Incorrect email or password.');
            }
            res.status(200).json(user);
        })
        .catch((err) => {
            return res.status(400).json('Incorrect email or password.');
        })

}


const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
});


