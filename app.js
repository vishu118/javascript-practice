//====================================== closures==========================================================================================

// CLOSURES => A function with a ref to its outer environment or lexical environment is callled Closures.
            // A function with its lexical environment bundled togather forms a closures.

            //  Each and every function is js has access to its lex env. (access to variable and function its parent.)

// function x(){
//     let b ;
//     function y(){
//         var a = 10;
//         function z(){
//             console.log(a,b) ;
//             b = 80;
//         }
//         z()
//         a = 5 ;
//     }
//     y()
// }
// x()

// function x(){
    // let a = 10; // here we can also directly return the function.
//     function y(){
//         console.log(a);
//     }
//     a = 78;
//     return y;
// }
// let z = x()
// console.log(z)
// z()



// Counter using closure;

// function counter(){
//     let count = 0;
//     return function (){
//          count++;
//          console.log(count)
//     }
// }

// let updateCount = counter()
// updateCount()
// updateCount()
// updateCount()
// updateCount()
// updateCount()
// updateCount()
// updateCount()
// updateCount() 



// ================MAP REDUCE FILTER============================

// MAP => Map method is used to create a new array from the existing one , by applying a function to each element to the first array.
//  let arr = [1,2,3,4,5]

//  let multipleArr = arr.map((num,i,arr)=>{
//     return num*3 + i;
//  })
// console.log(multipleArr)

// FILTER METHOD = > Filter method take each element of array and apply a condition to it if the condition is true then it include the elem to array and return it. It also take three param nums,index,arr

// let arr = [1,2,3,4,5];

// const moreThanTwo = arr.filter((nums)=>{
//  return nums>2
// })
// console.log(moreThanTwo)


// REDUCE METHOD => Reduce method reduce the given array into a single element as given in the user callback function.
// It take two value one callback function and the initial value. 

// const arr = [2,4,6,67,7] 
// const sum = arr.reduce((acc,curr , i ,arr)=>{
// return acc + curr;
// },0)
//  console.log(sum)


//  THIS Keyword :=> 


function counter(){
    for(let i = 0 ; i<5 ; i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}
counter()
