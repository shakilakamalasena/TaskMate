import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        // HASH THE PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);

        // CREATE A NEW USER AND SAVE TO DB
        const newUser = await prisma.user.create({
            data: {
                username,
                name,
                email,
                password: hashedPassword,
            },
        });

        res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Failed to create user! (username/email exists)",
        });
    }
};

export const login = async (req, res) => {
    const { username, password, cookieConsent } = req.body;

    try {
        // CHECK IF THE USER EXISTS

        const user = await prisma.user.findUnique({
            where: { username },
        });

        if (!user) {
            return res
                .status(401)
                .json({ message: "Invalid Credintials (User doesn't exist)!" });
        }

        // CHECK IF THE PASSWORD IS CORRECT

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res
                .status(401)
                .json({ message: "Invalid credentials! (Password incorrect)" });

        // GENERATE COOKIE TOKEN AND SEND TO THE USER

        // res.setHeader("Set-Cookie", "test=" + "myValue").json({
        //     message: "Success!",
        // });
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign(
            {
                id: user.id,
                isAdmin: false,
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: age }
        );

        // If the user accepts cookies, set the token as a cookie
        if (cookieConsent === "true") {
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: age,
            });
        } else {
            res.cookie("token", token, {
                httpOnly: true,
            });
        }

        // Send user data, but exclude password
        const { password: userPassword, ...userInfo } = user;
        res.status(200).json(userInfo);

        // const { password: userPassword, ...userInfo } = user;

        // res.cookie("token", token, {
        //     httpOnly: true,
        //     // secure: true,
        //     maxAge: age,
        // })
        //     .status(200)
        //     .json(userInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({ message: "Logout successful" });
};
