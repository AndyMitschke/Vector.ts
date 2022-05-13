class Vector
{
  public x: number;
  public y: number;

  constructor(x = 0, y = 0) 
  {
    this.x = x;
    this.y = y;
  }

  public get magnitude(): number
  {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  public set magnitude(magnitude: number)
  {
    this.normalize().scale(magnitude);
  }

  public get direction(): number
  {
    return Math.atan2(this.y, this.x);
  }

  public set direction(direction: number) 
  {
    var magnitude = this.magnitude;
    const x = Math.round(10000 * (Math.sin(direction) * magnitude)) / 10000;
    const y = Math.round(10000 * (Math.cos(direction) * magnitude)) / 10000;
    this.x = x;
    this.y = y;
  }

  public set(x: number, y: number): Vector
  {
    this.x = x;
    this.y = y;
    return this;
  }

  public copy(vector: Vector): Vector
  {
    this.x = vector.x;
    this.y = vector.y;
    return this;
  }
  
  public up(): Vector
  {
    this.direction = Math.PI;
    return this;
  }

  public down(): Vector
  {
    this.direction = 0;
    return this;
  }

  public left(): Vector
  {
    this.direction = -Math.PI / 2;
    return this;
  }

  public right(): Vector
  {
    this.direction = Math.PI / 2;
    return this;
  }

  public add(vector: Vector): Vector
  {
    this.x += vector.x;
    this.y += vector.y;
    return this;
  }

  public subtract(vector: Vector): Vector
  {
    this.x -= vector.x;
    this.y -= vector.y;
    return this;
  }

  public scale(scalar: number): Vector
  {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  public divide(scalar: number): Vector
  {
    if(scalar === 0) return this;
    this.x /= scalar;
    this.y /= scalar;
    return this;
  }

  public normalize(): Vector
  {
    const magnitude = this.magnitude;
    if(magnitude === 0) return this;
    this.x /= magnitude;
    this.y /= magnitude;
    return this;
  }

  public limit(limit: number): Vector
  {
    if(this.magnitude <= limit) return this;
    return this.normalize().scale(limit);
  }

  public zero(): Vector
  {
    this.x = 0;
    this.y = 0;
    return this;
  }

  public round(): Vector
  {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  }

  public floor(): Vector
  {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  }

  public ceil(): Vector
  {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  }

  public flip(): Vector
  {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  }

  public flipHorizontal(): Vector
  {
    this.y = -this.y;
    return this;
  }

  public flipVertical(): Vector
  {
    this.x = -this.x;
    return this;
  }

  public rotate(radians: number): Vector
  {
    const sin = Math.sin(radians);
    const cos = Math.cos(radians);
    const x = Math.round(10000 * (this.x * cos - this.y * sin)) / 10000;
    const y = Math.round(10000 * (this.x * sin + this.y * cos)) / 10000;
    this.x = x;
    this.y = y;
    return this;
  }

  public distanceTo(vector: Vector): number
  {
    const a = this.x - vector.x;
    const b = this.y - vector.y;
    return Math.sqrt(a ** 2 + b ** 2);
  }

  public angleTo(vector: Vector): number
  {
    return this.direction - vector.direction;
  }

  public lerp(target: Vector, amount: number = 0.2, limit: number = 0.1): Vector
  {
    if(Vector.distanceBetween(this, target) <= limit)
    {
      this.copy(target);
      return this;
    }
    if(amount < 0) amount = 0;
    if(amount > 1) amount = 1;
    this.x += (target.x - this.x) * amount;
    this.y += (target.y - this.y) * amount;
    return this;
  }

  public moveTowards(target: Vector, amount: number = 0.2, limit: number = 0.1): Vector
  {
    // not working yet
    return this;
  }



  public static up(vector?: Vector): Vector
  {
    if(vector)
    {
      return Vector.copy(vector).up();
    }
    return new Vector(1, 0).up();
  }

  public static down(vector?: Vector): Vector
  {
    if(vector)
    {
      return Vector.copy(vector).down();
    }
    return new Vector(1, 0).down();
  }

  public static left(vector?: Vector): Vector
  {
    if(vector)
    {
      return Vector.copy(vector).left();
    }
    return new Vector(1, 0).left();
  }

  public static right(vector?: Vector): Vector
  {
    if(vector)
    {
      return Vector.copy(vector).right();
    }
    return new Vector(1, 0).right();
  }

  public static createUnitVector(direction: number): Vector
  {
    const vector = new Vector(0, 1);
    vector.direction = direction;
    return vector;
  }

  public static copy(vector: Vector) 
  {
    return new Vector().copy(vector);
  }

  public static add(vectorA: Vector, vectorB: Vector): Vector
  {
    return Vector.copy(vectorA).add(vectorB);
  }

  public static subtract(vectorA: Vector, vectorB: Vector): Vector
  {
    return Vector.copy(vectorA).subtract(vectorB);
  }

  public static scale(vectorA: Vector, scalar: number): Vector
  {
    return Vector.copy(vectorA).scale(scalar);
  }

  public static divide(vectorA: Vector, scalar: number): Vector
  {
    return Vector.copy(vectorA).divide(scalar);
  }

  public static normalize(vector: Vector): Vector
  {
    return Vector.copy(vector).normalize();
  }

  public static limit(vector: Vector, limit: number): Vector
  {
    return Vector.copy(vector).limit(limit);
  }

  public static round(vector: Vector): Vector
  {
    return Vector.copy(vector).round();
  }

  public static floor(vector: Vector): Vector
  {
    return Vector.copy(vector).floor();
  }

  public static ceil(vector: Vector): Vector
  {
    return Vector.copy(vector).ceil();
  }

  public static rotate(vector: Vector, radians: number): Vector
  {
    return Vector.copy(vector).rotate(radians);
  }

  public static flip(vector: Vector): Vector
  {
    return Vector.copy(vector).flip();
  }

  public static flipHorizontal(vector: Vector): Vector
  {
    return Vector.copy(vector).flipHorizontal();
  }

  public static flipVertical(vector: Vector): Vector
  {
    return Vector.copy(vector).flipVertical();
  }

  public static lerp(vector: Vector, target: Vector, amount: number = 0.2, limit: number = 0.1): Vector
  {
    return Vector.copy(vector).lerp(target, amount);
  }

  public static moveTowards(vector: Vector, target: Vector, amount: number = 0.2, limit: number = 0.1): Vector
  {
    return Vector.copy(vector).moveTowards(target, amount, limit);
  }

  public static isEqual(vectorA: Vector, vectorB: Vector): boolean
  {
    return vectorA.x === vectorB.x && vectorA.y === vectorB.y;
  }

  public static distanceBetween(vectorA: Vector, vectorB: Vector): number
  {
    return vectorA.distanceTo(vectorB);
  }

  public static angleBetween(vectorA: Vector, vectorB: Vector): number
  {
    return vectorA.angleTo(vectorB);
  }

  public static dotProduct(vectorA: Vector, vectorB: Vector): number
  {
    return vectorA.x * vectorB.x + vectorA.y * vectorB.y;
  }
}

export { Vector };
