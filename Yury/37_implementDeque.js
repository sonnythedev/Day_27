/*
    Difficulty: Tricky    

    Create a new data type that models a double-ended queue, or deque. You should be able to push items to the front or back, pop them from the front or back, and get the number of items.

    Samples:
    *Your code*
    let numbers = new Deque();
    numbers.pushBack(5);
    numbers.pushBack(8);
    numbers.pushFront(7);
    numbers.pushBack(3);
    numbers.count    == 4
    numbers.popFront == 7
    numbers.popBack  == 3
    numbers.popFront == 7
    numbers.popFront == 8
    numbers.popBack  == null


    Queue: FIFO 
    Dequeue: pushBack, pushFront, popFront, popBack
*/

class Deque{
    constructor(){
        this.data=[];
    }
    pushBack(item){
        this.data.push(item);
    }
    pushFront(item){
        this.data.unshift(item);
    }
    popBack(){
        return this.data.pop();
    }
    popFront(){
        return this.data.shift();
    }
    get count(){
        return this.data.length;
    }
}

let numbers=new Deque();
numbers.pushBack(5);
numbers.pushBack(8);
numbers.pushFront(7);
numbers.pushBack(3);
//console.log(numbers.count);
console.log(numbers.popFront());
console.log(numbers.popBack());

console.log(numbers.data);