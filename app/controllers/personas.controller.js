
const PostgresService = require("../services/postgres.service");
const _pg= new PostgresService();

const getPersonas= async (req,res) =>{
    
        let sql ='select * from persona'
        try{
            let  resulado = await _pg.executeSql(sql);
            let rows= resulado.rows;
            return res.send({
                ok:true,
                message:"usuarios consultados",
                content:rows,
            });
            }catch(error){
            return res.send({
                ok:false,
                message:"error al consultar los datos",
                content:error,
            });
            }
};


const getPersona= async (req,res) =>{
    
    let id=req.body.id
    let sql ="select * from persona where id='"+ id +"'";
    try{
    let  resulado = await _pg.executeSql(sql);
    let rows= resulado.rows;
    return res.send({
        ok:true,
        message:"usuarios consultados",
        content:rows,
    });
    }catch(error){
    return res.send({
        ok:false,
        message:"error al consultar los datos",
        content:error,
    });
    }
};


const crearPersona=(req,res) =>{
    return res.send("hola");

    
};


module.exports = {getPersona,getPersonas,crearPersona};