const errorHandler=(err,req,res,next)=>{
    res.json(err.message+"🐥");
    res.status(err.status)
}
module.exports=errorHandler;