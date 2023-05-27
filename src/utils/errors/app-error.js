

class AppError extends Error{
    constructor(massage, statusCode){
        super(massage);
        this.statusCode=statusCode;
        this.explaination=massage
    }
}


module.exports= AppError;