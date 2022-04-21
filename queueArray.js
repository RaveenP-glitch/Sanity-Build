class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[0];
    }

    enqueue(value){
        this.array.push(value);
        return this;
    }

    dequeue(){
        this.array.shift();
        return this;
    }

}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Bob');
myQueue.enqueue('Harry');
myQueue.enqueue('Loyd');
console.log(myQueue);
console.log(myQueue.peek());
myQueue.dequeue();
console.log(myQueue);