/*
    Difficulty: Tricky    

    Write an extension for array that reimplements the "Math.min()" method.

    Samples:
    [1, 2, 3].solution()       == Math.min(...[1, 2, 3])
    ["q", "f", "k"].solution() == "f"
    [4096, 256, 16].solution() == 16
    [].solution()              == null
*/

// solution1
Array.prototype.solution1=function(){
    //console.log(args);
    if(this.length==0) return null;
    
    if(typeof this[0]=='string'){
         this.sort();
         return this[0];
    }
    else if(typeof this[0]=='number'){
        this.sort((a,b)=>(a-b));
        return this[0];
    }
}


// solution2

Array.prototype.solution2=function(){
    if(this.length==0) return null;

    let min=this[0];
    for(let item of this){
        if(item<min){
            min=item;
        }
    }
    return min;
}


// solution3

Array.prototype.solution3=function(){
    if(this.length==0) return null;

    let min=this[0];
    for(let item of this){
        if(item<min){
            min=item;
        }
    }
    return min;
}



/*
************************* PERFORMANCE TESTS *************************
*/

// import big numbers for test

// import big string for test


// test solution1()

console.log([10,2,3,4,5,1,6].solution1());
console.log(['a','b','c','d','e','f','g'].solution1());

// test solution2()
console.log([10,2,3,4,5,1,6].solution2());
console.log(['a','b','c','d','e','f','g'].solution2());


// test solution3()


/*
************************* PERFORMANCE RESULTS *************************

*/