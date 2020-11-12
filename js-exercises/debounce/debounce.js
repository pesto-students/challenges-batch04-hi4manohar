function debounce(fn, timeInMs) {

    let timer;

    return function() {
        if( timer ) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn();
        }, timeInMs);
    }
}

export { debounce };
