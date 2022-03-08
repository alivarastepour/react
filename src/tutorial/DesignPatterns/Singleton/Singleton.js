
let ins = null;
let counter = 0;

class Singleton {
    constructor() {
        if (ins) {
            throw new Error('cant do that')
        }
        ins = this

    }

    add() {
        return ++counter;
    }

    sub() {
       return --counter;
    }

    getCount(){
        return counter;
    }
}

const sin = new Singleton();
export default sin;