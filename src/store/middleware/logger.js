export const loggerMiddleware = (store)=>(next)=> (action) => 
{
     if(!action.type) {
        return next(action);
     }

    next(action); 
}