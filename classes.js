const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red"

class Polygon {
    constructor(length = 0, height = 0) {
        this.length = length
        this.height = height
    }
    display() {
        return `length is: ${this.length}, height is: ${this.height}`
    }
}

class Rectangle extends Polygon {
    constructor(length = 0, height = 0) {
        super(length, height)
    }
    toString() {
        var area = this.height * this.length
        return `Area equals: ${area}`
    }
    display() {
        return `length is: ${this.length}, height is: ${this.height}`
    }
    parameter() {
        var param = (this.length + this.height) * 2
        return `parameter is: ${param}`
    }
    draw() {
        ctx.fillRect(200, 150, this.height, this.length)
    }
}

class Square extends Rectangle {
    constructor(length = 0) {
        super(length, length)
    }
    toString() {
        var area = this.length * this.length
        return `Area equals: ${area}`
    }
    display() {
        return `length is: ${this.length}`
    }
    draw() {
        ctx.fillRect(40, 150, this.height, this.length)
        ctx.fill()
    }
}
class Circle extends Polygon {
    static pi = 3.14;
    constructor(rad) {
        super(0, 0)
        this.rad = rad
    }
    toString() {
        var area = Circle.pi * this.rad ** 2
        return `Area equals: ${area}`
    }
    display() {
        return `radius is: ${this.rad}`
    }
    parameter() {
        var param = 2 * Circle.pi * this.rad
        return `parameter is: ${param}`
    }
    draw() {
        ctx.beginPath()
        ctx.arc(100, 75, 50, 0, 2 * Math.Pi)
        ctx.fill()
    }
}

class Triangle extends Polygon {
    static half = 1 / 2
    constructor(length = 0, length2 = 0, length3 = 0, height = 0) {
        super(length, height)
        this.length2 = length2
        this.length3 = length3
    }
    heightCalc() {
        var x = ((this.length ** 2) + (this.length2 ** 2) - (this.length3 ** 2)) / (2 * this.length)
        this.height = Math.sqrt((this.length2 ** 2) - (x ** 2))
        return this.height
    }
    toString() {
        var area = Triangle.half * this.length * this.heightCalc()
        return `Area equals: ${area}`
    }
    perimeter() {
        var perim = this.length + this.length2 + this.length3
        return `perimeter is: ${perim}`
    }
    draw() {
        ctx.beginPath()
        ctx.moveTo(150, 150)
        ctx.lineTo(this.length + 150, 150)
        var x = ((this.length ** 2) + (this.length2 ** 2) - (this.length3 ** 2)) / (2 * this.length)
        var y = this.heightCalc()
        ctx.lineTo(x + 150, y + 150)
        ctx.fill()
        ctx.closePath()
    }
}
var rec = new Rectangle(50, 100)
var sq = new Square(50)
var tri = new Triangle(40, 50, 70)
var circ = new Circle(50)

rec.draw()
sq.draw()
tri.draw()
circ.draw()
