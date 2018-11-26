// Syntax below is how middleware is defined, always in the format below

export default store => next => action => {
    if( !action.payload || !action.payload.then ){
        //No payload property
        // - Or -
        // Not a promise, checking for .then

        return next(action);

    }
        // Has a promise on the payload property

        action.payload.then((resp) => {
            const newAction = {
                ...action,
                payload: resp
            }

            store.dispatch(newAction);
        });

        return action.payload;
    }

// // the ES5 version 
//     export default function(store) {
//         return function(next) {
//             return function(action){
//                 // Code goes here
//             }
//         }
//     }