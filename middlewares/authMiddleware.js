function authMiddleware (req,res,next){
    if (req.session.usuarioLogueado != undefined){
        next();
    }else{
        res.send("Esta pagina es solo para clientes sin loguearse. falta terminar de implementar")
    }

}

module.exports = authMiddleware;