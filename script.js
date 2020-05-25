/*Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал.*/



function testCopy(arr) { 
    return arr.slice();
 }

 var arr= [  2 , 453 , 5 , 5 ];

 var test1 = testCopy (arr);

 console.log(test1);
