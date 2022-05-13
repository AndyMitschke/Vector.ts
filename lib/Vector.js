class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    get magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    set magnitude(magnitude) {
        this.normalize().scale(magnitude);
    }
    get direction() {
        return Math.atan2(this.y, this.x);
    }
    set direction(direction) {
        var magnitude = this.magnitude;
        const x = Math.round(10000 * (Math.sin(direction) * magnitude)) / 10000;
        const y = Math.round(10000 * (Math.cos(direction) * magnitude)) / 10000;
        this.x = x;
        this.y = y;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    }
    up() {
        this.direction = Math.PI;
        return this;
    }
    down() {
        this.direction = 0;
        return this;
    }
    left() {
        this.direction = -Math.PI / 2;
        return this;
    }
    right() {
        this.direction = Math.PI / 2;
        return this;
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(scalar) {
        if (scalar === 0)
            return this;
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    normalize() {
        const magnitude = this.magnitude;
        if (magnitude === 0)
            return this;
        this.x /= magnitude;
        this.y /= magnitude;
        return this;
    }
    limit(limit) {
        if (this.magnitude <= limit)
            return this;
        return this.normalize().scale(limit);
    }
    zero() {
        this.x = 0;
        this.y = 0;
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    flip() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    flipHorizontal() {
        this.y = -this.y;
        return this;
    }
    flipVertical() {
        this.x = -this.x;
        return this;
    }
    rotate(radians) {
        const sin = Math.sin(radians);
        const cos = Math.cos(radians);
        const x = Math.round(10000 * (this.x * cos - this.y * sin)) / 10000;
        const y = Math.round(10000 * (this.x * sin + this.y * cos)) / 10000;
        this.x = x;
        this.y = y;
        return this;
    }
    distanceTo(vector) {
        const a = this.x - vector.x;
        const b = this.y - vector.y;
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    angleTo(vector) {
        return this.direction - vector.direction;
    }
    lerp(target, amount = 0.2, limit = 0.1) {
        if (Vector.distanceBetween(this, target) <= limit) {
            this.copy(target);
            return this;
        }
        if (amount < 0)
            amount = 0;
        if (amount > 1)
            amount = 1;
        this.x += (target.x - this.x) * amount;
        this.y += (target.y - this.y) * amount;
        return this;
    }
    moveTowards(target, amount = 0.2, limit = 0.1) {
        return this;
    }
    static up(vector) {
        if (vector) {
            return Vector.copy(vector).up();
        }
        return new Vector(0, -1);
    }
    static down(vector) {
        if (vector) {
            return Vector.copy(vector).down();
        }
        return new Vector(0, 1);
    }
    static left(vector) {
        if (vector) {
            return Vector.copy(vector).left();
        }
        return new Vector(-1, 0);
    }
    static right(vector) {
        if (vector) {
            return Vector.copy(vector).right();
        }
        return new Vector(1, 0);
    }
    static createUnitVector(direction) {
        const vector = new Vector(0, 1);
        vector.direction = direction;
        return vector;
    }
    static copy(vector) {
        return new Vector().copy(vector);
    }
    static add(vectorA, vectorB) {
        return Vector.copy(vectorA).add(vectorB);
    }
    static subtract(vectorA, vectorB) {
        return Vector.copy(vectorA).subtract(vectorB);
    }
    static scale(vectorA, scalar) {
        return Vector.copy(vectorA).scale(scalar);
    }
    static divide(vectorA, scalar) {
        return Vector.copy(vectorA).divide(scalar);
    }
    static normalize(vector) {
        return Vector.copy(vector).normalize();
    }
    static limit(vector, limit) {
        return Vector.copy(vector).limit(limit);
    }
    static round(vector) {
        return Vector.copy(vector).round();
    }
    static floor(vector) {
        return Vector.copy(vector).floor();
    }
    static ceil(vector) {
        return Vector.copy(vector).ceil();
    }
    static rotate(vector, radians) {
        return Vector.copy(vector).rotate(radians);
    }
    static flip(vector) {
        return Vector.copy(vector).flip();
    }
    static flipHorizontal(vector) {
        return Vector.copy(vector).flipHorizontal();
    }
    static flipVertical(vector) {
        return Vector.copy(vector).flipVertical();
    }
    static lerp(vector, target, amount = 0.2, limit = 0.1) {
        return Vector.copy(vector).lerp(target, amount);
    }
    static moveTowards(vector, target, amount = 0.2, limit = 0.1) {
        return Vector.copy(vector).moveTowards(target, amount, limit);
    }
    static isEqual(vectorA, vectorB) {
        return vectorA.x === vectorB.x && vectorA.y === vectorB.y;
    }
    static distanceBetween(vectorA, vectorB) {
        return vectorA.distanceTo(vectorB);
    }
    static angleBetween(vectorA, vectorB) {
        return vectorA.angleTo(vectorB);
    }
    static dotProduct(vectorA, vectorB) {
        return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
    }
}
export { Vector };
