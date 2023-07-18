class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else this._state = newState;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        } else console.log("Книга в плохом состоянии")
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] == value) {
                return this.books[i];
            }
        }
        return null;
    }

    giveBookByName(name) {
        for (let i = 0; i < this.books.length; i++) {;
            if (this.books[i].name === name) {
                return this.books.splice(i, 1)[0];
            }
        }
        return null;
    }
}

//Выполнение задания 3

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <=5) {
            if (subject in this.marks) {
            this.marks[subject].push(mark);
            } else {
            this.marks[subject] = [];
            this.marks[subject].push(mark);
            }
        }    
    }

    getAverageBySubject(subject) {
        if (subject in this.marks) {
            return this.marks[subject].reduce((acc, mark, index, arr) => {
                acc += mark;
                if (index === (arr.length - 1)) {
                  return acc / arr.length;
                }
                return  acc;
              }, 0);
        }
        return 0;
    }

    getAverage() {
        let subjects = Object.keys(this.marks);
        return subjects.reduce((acc, subject, index, arr) => {
            acc += this.marks[subject].reduce((acc, mark, index, arr) => {
                    acc += mark;
                    if (index === (arr.length - 1)) {
                      return acc / arr.length;
                    }
                    return acc;
                }, 0)
            if (index === (arr.length - 1)) {
                return acc / arr.length;
            }
            return  acc; 
        }, 0);
    }
}
