
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        //Code here
        const newNode =new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        //Code here
        const newNode = {
            value: value,
            next: null,
            prev: null
        };

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
       
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }

    insert(index, value){
        //check params
        if(index >= this.length){
            return this.append(value);
        }
        const newNode = {
            value: value,
            next: null,
            prev: null
        };
        const leader = this.traverseToIndex(index-1);
        const follower= leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        console.log(this);
        return this.printList()
        
    }

    traverseToIndex(index){
        //check params
        let counter =0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        //check params
        const leader = this.traverseToIndex(index-1);
       
        const unwantedNode = leader.next;
        unwantedNode.prev = leader;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }
    

}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(13);
myLinkedList.append(7);
myLinkedList.prepend(1);
myLinkedList.prepend(2);
myLinkedList.insert(2,33);
myLinkedList.insert(4,99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());