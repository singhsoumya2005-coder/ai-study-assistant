const express=require("express");

const router=express.Router();

const {registerUser,loginUser}=require("../controllers/userController");
const protect=require("../middleware/authMiddleware");

router.post("/register",registerUser);
router.post("/login",loginUser);

router.get(
    "/test",protect,
    (req,res)=>{
        res.json({
            success:true,
            message:req.user
        });
    }
);


module.exports=router;