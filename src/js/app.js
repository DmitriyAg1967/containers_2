export default class ErrorRepository {
    constructor() {
        this.map = new Map();
    }
    add(num, str) {
        this.map.set(num, str);
    }
    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code);
        }
        return 'Unknown error';
    }
}
