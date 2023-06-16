   //if1
// let son1 = -1;

// if (son1 > 0) {
//   console.log(son1 +=1);
// } else {
// console.log(son1);
// }

//--------------------------------------------------

   //if2
// let son1 = 0;

// if (son1 > 0) {
//   console.log(son1 +=1);
// } else {
// console.log(son1 -=2);
// }

//--------------------------------------------------

   //if3
// let son1 = -1;

// if (son1 > 0) son1++;
//   else if (son1 < 0) son1 -=2;
//   else son1 = 10;
// console.log(son1);

    // if4
// let son1 = -12;
// let son2 = -13;
// let son3 = -2;

// if (son1 > 0 && son2 > 0 && son3 > 0) {
//   console.log("Uchalasi ham musbat");
// } else if (son1 > 0 && son2 > 0 ||son2 > 0 && son3 > 0 || son1 > 0 && son3 > 0) {
//   console.log("Ikkalasi musbat");
// } else if (son1 > 0 || son2 > 0 || son3 > 0 ) {
//   console.log("Bittasi musbat");
// }else {
//   console.log("Hammasi manfiy");
// }

//-------------------------------------------

    // if5
// let son1 = -12;
// let son2 = 13;
// let son3 = -2;

// if (son1 > 0 && son2 > 0 && son3 > 0) {
//   console.log("Uchalasi ham musbat");
// } else if (son1 > 0 && son2 > 0 ||son2 > 0 && son3 > 0 || son1 > 0 && son3 > 0) {
//   console.log("Ikkata musbat va ikkita manfiy son");
// } else if (son1 > 0 || son2 > 0 || son3 > 0 ) {
//   console.log("Bittasi musbat va Ikkita manfiy son");
// }else {
//   console.log("Hammasi manfiy");
// }

//-------------------------------------------

    // if6
// let son1 = 13;
// let son2 = 13;


// if (son1 > son2) {
//   console.log("Kattasi " + son1);
// } else if (son1 < son2) {
//   console.log("Kattasi " + son2);
// }else {
//   console.log("Ikkalasi teng");
// }

// ----------------------------------

   // if7
// let son1 = 13;
// let son2 = 13;


// if (son1 > son2) {
//   console.log("1");
// } else if (son1 < son2) {
//   console.log("2");
// }else {
//   console.log("1 2");
// }

   // if8
// let son1 = 13;
// let son2 = 13;


// if (son1 > son2) {
//   console.log("Kattasi " + son1 + "Kichigi " + son2 );
// } else if (son1 < son2) {
//   console.log("Kattasi " + son2 + "Kichigi " + son1);
// }else {
//   console.log("Ikkalasi teng");
// }


   // if10
  //  let son1 = 73;
  //  let son2 = 13;


  //  if (son1 !== son2) {
  //    console.log( son1 + son2 );
  //  } else if (son1 = son2) {
  //    console.log(0);
  //  }


     // if13
// let son1 = 32;
// let son2 = 20;
// let son3 = 25;


//  if (son2 <son1 < son3 || son3 <son1 < son2) {
//   console.log(son1); }
//  else if (son1 < son2 < son3 || son3 <son2 < son1 ) {
//     console.log(son2);
// // } else if (son1 <son3 < son2 || son2 <son3 < son1) {
// //   console.log(son3);
// // }

// function showPrimeNumbers(limit) {

//    for (let number = 2; number <= limit; number++) {
//      let sum=0;

//      for  (i=1 ; i<= number/2 ; i++  ) {
//        if ( number%i ===0) {
//          sum++ ;
//        }
//      }
//      if (sum+1===2) {
//        console.log(number);
//      }
//    }
//  }
// ---------------------------------------------------------
// var n=2;
// let p=1;

// for (let i = 1; i <= 5; i++) {
//    p*=yig(n, i);
// }
// console.log(p);
// function yig(n, i) {
//    let sum = 0;
//    for(let j=1; j<=n ; j++ ) {
//       sum+=(i+j);
//    }
//    return sum;
// }
// ------------------------------------------------------


// function kup(a,b) {
//    return a*b;
// }

// function yig(a,b) {
//    return a+b;
// }
// var n = 2;

// let p=1;
// for (let i=1; i<=5 ;i++) {
//    let s=0;
//    for (let j =1; j<=n ; j++) {
//       s+=yig(i,j);
//    }
//    p*=kup(p,s);
// }
// console.log(p);


// let n = 2;
// let p = 1;

// for (let i = 1; i <= 5; i++) {
//   let sum = 0;
//   for (let j = 1; j <= n; j++) {
//     sum += (i + j);
//   }
//   p *= sum;
// }

// console.log(p);

// for  10
// let n =10;
// s=0;
// for (let i = 1; i<=n; i++) {
//    s+=1/n
// }

// console.log(s);
