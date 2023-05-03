var x1 = 0;
var v1 = 3;
var x2 = 4;
var v2 = 2;

function kangaroo(x1, v1, x2, v2) {
    let t = 0; // Initialize the number of jumps
  
    // Iterate while neither kangaroo has reached a position where the other can no longer catch up.
    while (!((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1))) {
      // Check if the kangaroos are at the same position after 't' jumps.
      if (x1 + v1 * t === x2 + v2 * t) {
        return "YES";
      }
  
      // Increment the number of jumps.
      t++;
    }
  
    // If the loop exits, that means one kangaroo has reached a position where the other can no longer catch up.
    return "NO";
  }
  kangaroo(0,2,5,3)
  console.log(' kangaroo(0,2,5,3): ',  kangaroo(0,2,5,3));
  console.log(' kangaroo(0,3,4,2): ',  kangaroo(2,1,1,2));
  