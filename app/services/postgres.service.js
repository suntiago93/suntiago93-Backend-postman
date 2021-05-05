const pg = require("pg");


class PostgresService {
    constructor(){
        this.connectionString ="postgresql://postgres:admin@localhost:5432/universidad";
        
        this.pool = new pg.Pool({connectionString: this.connectionString});
    }

    async executeSql(sql){
    let resultado= await this.pool.query(sql);
    return resultado;
    }
}

module.exports=PostgresService;