
const jwt =require("jsonwebtoken");
const protect =async (req,res,next)=>{
    
        let token;
        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){
            token =req.headers.authorization.split(" ")[1];
            const decoded=jwt.verify(
                token,"secret123"

            );
            req.user=decoded;
            next();
    }else{
        return res.status(401).json({
            success:false,
            message:"No token"
        });
    }

};

module.exports=protect;


