function receivesAFunction(callback) {
    callback();
}

const returnsANamedFunction = () => receivesAFunction;

function returnsAnAnonymousFunction() {
    return function() {
        console.log ("I am Anonymous");
    }
}

const process = (returnsANamedFunction())(returnsAnAnonymousFunction);

console.log(process);