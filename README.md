# Vector.ts
A simple vector class written in TypeScript


## Methods

### .set(number, number)
```Javascript
const vec = new Vector(1, 2)
vec.set(2, 2)
// vec { x: 2, y: 2 }
```

### .copy()
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(3, 4)
vec1.copy(vec2)
// vec1 { x: 3, y: 4 }
```

### .up()
```Javascript
const vec = new Vector(1, 2)
vec.up()
// vec { x: 0, y: -1 }
```

### .down()
```Javascript
const vec = new Vector(1, 2)
vec.down()
// vec { x: 0, y: 1 }
```

### .left()
```Javascript
const vec = new Vector(1, 2)
vec.left()
// vec { x: -1, y: 0 }
```

### .right()
```Javascript
const vec = new Vector(1, 2)
vec.right()
// vec { x: 1, y: 0 }
```

### .add(Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(2, 3)
vec1.add(vec2)
// vec1 { x: 3, y: 5 }
```

### .subtract(Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(2, 3)
vec1.subtract(vec2)
// vec1 { x: -1, y: -1 }
```

### .scale(number)
```Javascript
const vec = new Vector(1, 2)
vec.scale(2)
// vec { x: 2, y: 4 }
```

### .divide(number)
```Javascript
const vec = new Vector(4, 6)
vec.divide(2)
// vec { x: 2, y: 3 }
```

### .normalize()
```Javascript
const vec = new Vector(1, 2)
vec.normalize()
// vec { x: 0.447..., y: 0.894... }
```

### .limit(number)
```Javascript
const vec = new Vector(1, 2)
vec.limit(0.7)
// vec { x: 0.313..., y: 0.626... }
```

### .zero()
```Javascript
const vec = new Vector(1, 2)
vec.zero()
// vec { x: 0, y: 0 }
```

### .flip()
```Javascript
const vec = new Vector(1, 2)
vec.flip()
// vec { x: -1, y: -2 }
```

### .flipHorizontal()
```Javascript
const vec = new Vector(1, 2)
vec.flipHorizontal()
// vec { x: 1, y: -2 }
```

### .flipVertical()
```Javascript
const vec = new Vector(1, 2)
vec.flipVertical()
// vec { x: -1, y: 2 }
```

### .rotate(number)
```Javascript
const vec = new Vector(0, 1)
vec.rotate(Math.PI / 2)
// vec { x: 1, y: 0 }
```

### .distanceTo(Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(2, 3)
vec1.distanceTo(vec2)
// 1.414...
```

### .angleTo(Vector)
```Javascript
const vec1 = new Vector(0, 1)
const vec2 = new Vector(1, 0)
vec1.angleTo(vec2)
// 1.570...
```

### .lerp(target: Vector, steps: number, limit: number)
```Javascript
const vec1 = new Vector(0, 1)
const vec2 = new Vector(1, 0)
vec1.lerp(vec2, 0.1, 0.1)
```

### .moveTowards(target: Vector, steps: number, limit: number)
```Javascript
// not working yet
const vec1 = new Vector(0, 1)
const vec2 = new Vector(1, 0)
vec1.moveTowards(vec2, 0.1, 0.1)
```


## Static Methods

### Vector.createUnitVector(number)
```Javascript
const vec = Vector.createUnitVector(Math.PI / 2)
// vec { x: 1, y: 0 }
```

### Vector.copy(Vector)
```Javascript
const vec1 = new Vector(2, 3)
const vec2 = Vector.copy(vec1)
// vec2 { x: 2, y: 3 }
```

### Vector.up()
```Javascript
const vec = Vector.up()
// vec { x: 0, y: -1 }
```

### Vector.down()
```Javascript
const vec = Vector.down()
// vec { x: 0, y: 1 }
```

### Vector.left()
```Javascript
const vec = Vector.left()
// vec { x: -1, y: 0 }
```

### Vector.right()
```Javascript
const vec = Vector.right()
// vec { x: 1, y: 0 }
```

### Vector.add(Vector, Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(3, 4)
const result = Vector.add(vec1, vec2)
// result { x: 4, y: 6 }
```

### Vector.subtract(Vector, Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(3, 4)
const result = Vector.subtract(vec1, vec2)
// result { x: -2, y: -2 }
```

### Vector.scale(Vector, number)
```Javascript
const vec = new Vector(1, 2)
const sca = 3
const result = Vector.scale(vec, sca)
// result { x: 3, y: 6 }
```

### Vector.divide(Vector, number)
```Javascript
const vec = new Vector(4, 6)
const sca = 2
const result = Vector.divide(vec, sca)
// result { x: 2, y: 3 }
```

### Vector.normalize(Vector)
```Javascript
const vec1 = new Vector(3, 4)
const vec2 = Vector.normalize(vec1)
// vec2 { x: 0.6, y: 0.8 }
```

### Vector.limit(Vector, number)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = Vector.limit(1.5)
// vec2 { x: 0.6708, y: 1.3416 }
```

### Vector.rotate(Vector, number)
```Javascript
const vec1 = new Vector(0, 1)
const vec2 = Vector.rotate(Math.PI / 2)
// vec2 { x: 1, y: 0 }
```

### Vector.flip(Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = Vector.flip()
// vec2 { x: -1, y: -2 }
```

### Vector.flipHorizontal(Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = Vector.flipHorizontal()
// vec2 { x: 1, y: -2 }
```

### Vector.flipVertical(Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = Vector.flipVertical()
// vec2 { x: -1, y: 2 }
```

### Vector.isEqual(Vector, Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(2, 1)
const result = Vector.isEqual(vec1, vec2)
// result false

const vec1 = new Vector(1, 2)
const vec2 = new Vector(1, 2)
const result = Vector.isEqual(vec1, vec2)
// result true
```

### Vector.distanceBetween(Vector, Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(3, 4)
const result = Vector.distanceBetween(vec1, vec2)
// result 1.414...
```

### Vector.angleBetween(Vector, Vector)
```Javascript
const vec1 = new Vector(0, 1)
const vec2 = new Vector(1, 0)
const result = Vector.angleBetween(vec1, vec2)
// result 1.570...
```

### Vector.dotProduct(Vector, Vector)
```Javascript
const vec1 = new Vector(1, 2)
const vec2 = new Vector(3, 4)
const result = Vector.dotProduct(vec1, vec2)
// result 11
```


## License
[MIT](https://choosealicense.com/licenses/mit/)