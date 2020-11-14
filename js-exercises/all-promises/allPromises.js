var argumentsdata = '';

const allPromises = args => {

    // will reject if any promises fails
    return new Promise( (resolve, reject) => {

            if( args && args.length <= 0 ) {
                resolve(new Error('Arguments cannot be lenght of 0'))
            }
    
            if (!Array.isArray(args)) {
                resolve(new Error(`Error: Expecting Args as Array, Received ${typeof (args)}`));
            }
    
            const resolvedValues = [];
            // loop through all the args
            for ( let i = 0, p = args[0]; i < args.length; i++) {
                    
                p = p.then( val => {

                    resolvedValues.push(val);

                    if( args.length === resolvedValues.length ) {
                        resolve(resolvedValues)
                    }
                    return args[i+1];

                }).catch((err) => {
                    reject(err)
                })
            }
    });
};

export { allPromises };
