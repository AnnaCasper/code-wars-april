// The Hamming weight of a string is the number of symbols that are different from the zero-symbol of the alphabet used.
// There are several algorithms for efficient computing of the Hamming weight for numbers.
// In this Kata, speaking technically, you have to find out the number of '1' bits in a binary representation of a number.
// Thus,

//hammingWeight(10) // 1010  =&gt; 2
//hammingWeight(21) // 10101 =&gt; 3

//The interesting part of this task is that you have to do it without string operation

//using toString()
hammingWeight = function (num) {
  parseInt(num, 10).toString(2);
  console.log(num);
  return num;
}

hammingWeight(10);
hammingWeight(21);



hammingWeight2();
