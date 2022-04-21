class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
    
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('seagate');
myStack.push('kindle');
myStack.push('discord');
console.log(myStack.peek());
console.log("\nThe stack\n");
console.log(myStack);
console.log(myStack.pop());