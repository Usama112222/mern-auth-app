const bcrypt = require('bcrypt')
const UserModel = require("../Models/User")
const jwt = require("jsonwebtoken");



const signup = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (user) {
            return res.status(409).json({
                message: "User already exists, you can login",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userModel = new UserModel({
            name,
            email,
            password: hashedPassword
        });

        await userModel.save();

        res.status(201).json({
            message: "Signup Successfully",
            success: true
        });

    } catch (err) {
        console.log("ERROR:", err);

        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(403).json({
                message: "Auth Failed",
                success: false
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(403).json({
                message: "Auth Failed",
                success: false
            });
        }

        const jwtToken = jwt.sign(
            { email: user.email, id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "24h" }
        );

     
        return res.status(200).json({
            message: "Login Successful",
            success: true,
            jwtToken
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};
module.exports ={
    signup,
    login
}