/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0, head);
  let pre = dummy;
  while (pre !== null) {
    let cur = pre;
    for (let i = 0; i < k; i++) {
      cur = cur?.next || null;
      if (cur === null) {
        return dummy.next;
      }
    }

    const node = pre.next;
    const nxt = cur?.next || null;
    if (cur) {
      cur.next = null;
    }
    pre.next = reverseList(node);
    if (node) {
      node.next = nxt;
    }
    pre = node;
  }

  return dummy.next;
};

const reverseList = (head) => {
  let l = null;
  let cur = head;
  while (cur) {
    const r = cur.next;
    cur.next = l;
    l = cur;
    cur = r;
  }
  return l;
};
