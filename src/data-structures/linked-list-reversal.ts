/* Reverse a linked list e.g. [1, 2, 3, 4, 5] for input
output should be 5, 4, 3, 2, 1

*/

function reverseLinkedList(head: any | null): any | null {
    let currentNode = head;
    let previousNode = null;

    while(currentNode){
        const nextNode = currentNode.next;
        previousNode = currentNode;

        if(!nextNode) return currentNode;
        currentNode = nextNode;
    }
    return currentNode;
}