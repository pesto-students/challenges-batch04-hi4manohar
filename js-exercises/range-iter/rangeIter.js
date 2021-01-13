function rangeIter(lb, ub) {

    if( lb && ub ) {
        if( isNaN(lb) === true || isNaN(ub) === true ) {
            throw TypeError('First And second argument should be a number');
        }
    } else {
        throw TypeError('First And second argument should be a value');
    }
    
    const range = {
        from: lb,
        to: ub,
    };

    range[Symbol.iterator] = function () {
        return {
            current: this.from,
            last: this.to,
            next: function () {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            },
        };
    };

    const rangeArr = [];

    for (const value of range) {
        rangeArr.push(value);
    }

    return rangeArr;
}

export { rangeIter };
