import Usermodel from "../Model/UserModel.js";

export const Ragister = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(404).json({ message: 'All feild is requred' })
        };
        const passwordhash = await bcript.hash(password, 10)
        const existingUser = await Usermodel.findOne({ email });
        if (existingUser) {
            res.status(404).json({ message: 'user allredy exist' })
        };
        const user = await Usermodel.create({ name, email, password });
        res.status(200).json({ message: 'Register successfuly', user })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in Ragister API' })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({ message: 'All field requred' })
        }
        const user = await Usermodel.findOne({ email });
        if (!user) {
            res.status(404).json({ message: 'User not found' })
        };
        const ismetch = await user.compairepassword(password);
        if (!ismetch) {
            return res.status(404).json({ message: 'Invalid cridentioal' });

        };
        const token = user.generateToken();
        res.status(200).json({ message: 'Login successfuly' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in login API' })
    }
}

export const CreateUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(404).json({ message: 'All field is requred' })
        };
        const user = await Usermodel.create({ name, email, password });
        res.status(200).json({ message: 'User create successfuly' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in create API' })
    }
}

export const GetallUser = async (req, res) => {
    try {
        const user = await Usermodel.find();
        if (!user) {
            res.status(404).json({ message: 'User not found' })
        };
        res.status(200).json({ message: 'Get all user', user })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'error in GetallUser API' })
    }
}

export const GetbyidUser = async (req, res) => {
    try {
        const user = await Usermodel.findById({ email });
        if (!user) {
            res.status(404).json({ message: 'user not found' })
        };
        res.status(200).json({ message: 'Getbyid User successfuly', user })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'error in GetbyidUser API' })
    }
}


export const Updateuser = async (req, res) => {
    try {
        const user = await Usermodel.findByIdAndUpdate(req.params.id);
        if (!email) {
            res.status(404).json({ message: 'User not found' })
        };
        const { name, email, password } = req.body;
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;
        await user.save();
        res.status(200).json({ message: 'User Update successfuly' })

    } catch (error) {
        console.log(error);
        res.status(500).send({ error: 'error in Updateuser API' })
    }
}


export const Deletauser = async (req, res) => {
  try {
    const user=await Usermodel.findByIdAndDelete(req.params.id);
    if(!user){
        res.status(404).json({message:'User not found'})
    };
    res.status(200).json({message:'user Dleteapi',user})
  } catch (error) {
    
    console.log(error);
    res.status(500).send({ error: 'error in Deletauser API' })
  }
}