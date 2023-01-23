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


//  THIS Keyword :=> 



