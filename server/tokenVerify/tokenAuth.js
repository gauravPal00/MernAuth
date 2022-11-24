import  Jwt  from "jsonwebtoken";

 function tokenAuth (req,res,next){
const token = req.header('auth-token')
if(!token){
    return res.status(400).send("Access Denied !")
}
try{
    const verified = Jwt.verify(token, "token");
        req.user = verified;
        next();
}
catch(error){
    res.status(400).send({error,success:false});
}
}

export default tokenAuth