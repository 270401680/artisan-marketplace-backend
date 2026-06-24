let users = [];

const registerUser = (req, res) => {
    const { name, email, password, role } = req.body;

    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        role
    };

    users.push(newUser);

    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            role: newUser.role
        }
    });
};

const loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        user => user.email === email && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    res.json({
        message: "Login Successful",
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    });
};

const getUsers = (req, res) => {
    res.status(200).json(users);
};

module.exports = {
    registerUser,
    loginUser,
    getUsers
};