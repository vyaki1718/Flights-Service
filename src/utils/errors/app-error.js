

class AppError extends Error{
    constructor(massage, statusCode){
        super(massage);
        this.statusCode=statusCode;
        this.explaination=this.explaination
    }
}


module.exports= AppError;