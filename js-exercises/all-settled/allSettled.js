function allSettled(args) {

    return new Promise((resolve, reject) => {
        const resolvedPromise = [];
        
        if( args && args.length <= 0 || !Array.isArray(args) ) {
            resolve(new Error('Arguments cannot be lenght of 0'))
        }

        for( let i = 0, p = args[0]; i < args.length; i++ ) {
            
            p = p.then(() => {

                resolvedPromise.push({status: 'fulfilled'});                

                if( resolvedPromise.length === args.length ) {
                    resolve(resolvedPromise);
                }

                return args[i+1];

            }).catch(() => {
                resolvedPromise.push({status: 'rejected'})

                if( resolvedPromise.length === args.length ) {
                    resolve(resolvedPromise);
                }

                return args[i+1];
            })
        }
    })
}

export { allSettled };
