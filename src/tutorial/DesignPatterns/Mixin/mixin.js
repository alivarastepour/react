export class Mixin {
    constructor() {
    }
}

const mixin = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    name:"salam"
}
Object.assign(Mixin.prototype, mixin);

