const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({
    email,
  });

  if (userExists) {
    return res.status(400).json({
      success: false,
      message: "User already exixts",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(201).json({
    success: true,
    user,
  });
};

const loginUser=async (req,res)=>{
    const{email,password}=req.body;

    const user=await User.findOne({
        email
    });
    if(!user){
        return res.json(400).json({
            success:false,
            message:"Invalid Credentials"



        });
    }
    const isMatch=await bcrypt.compare(
        password,
        user.password
    );
    if(!isMatch){
        return res.status(400).json({
            success:false,
            message:"Invalid Credentials"


        });
    }

    const token=jwt.sign(
        {
            id:user._id
        },
        "secret123",
        {
            expiresIn:"7d"
        }

    );

    res.json({
        success:true,
        token
    });

};

module.exports = {
  registerUser,loginUser
};
