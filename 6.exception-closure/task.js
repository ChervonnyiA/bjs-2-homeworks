function parseCount(string) {
    let num = Number.parseFloat(string);
    if (isNaN(num)) {
        throw new Error("Невалидное значение");
    }
    return num;
}

function validateCount(string) {
    try {
        return parseCount(string);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((a + b) <= c || (a + c) <= b || (b + c) <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    this.a = a;
    this.b = b;
    this.c = c;
    }

    get perimeter() {
        return (this.a + this.b + this.c);
    }

    get area() {
        let p = (this.a + this.b + this.c) / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p-this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return triangle = new Triangle(a, b, c);
    } catch (error) {
        let obj = {
            get perimeter() {
                return ("Ошибка! Треугольник не существует"); 
            },
            get area() {
                return ("Ошибка! Треугольник не существует"); 
            }
        }
        return obj;
    } 
}