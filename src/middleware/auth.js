import jwt from "jsonwebtoken";

export const createAccessToken = (user) => {
    const data = {
        id: user._id,
        email: user.email,
    };

    return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

export const verify = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ auth: "Failed", message: "No token provided" });
    }

    token = token.slice(7, token.length);

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
        if (err) {
            return res.status(403).json({ auth: "Failed", message: err.message });
        }
        req.user = decodedToken;
        next();
    });
};
