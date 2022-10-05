class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

function reverseLinkedList(head) {
  if (head === null) {
    return;
  }

  let listHead = head;

  let currentNode = listHead;
  let prevNode = null;
  let nextNode = null;

  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;

    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }

  listHead = prevNode;
  return listHead;
}

console.log(reverseLinkedList(node1));
