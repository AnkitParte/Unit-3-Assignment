// Array inheritance methods

//let ar=[2,4,6]
//let areal= new Array(1,2,3);
//console.log(ar)
//console.log(areal);

// .push // Should add an element at the end.
// .powerPush()
// .pop() // Should remove an element from the end.
// .powerPop()
// .top() // Should return the element at the last index.
// .ourTop()
// .print() // Should print the elements in a single line (e.g. [1,2,3,4]).
// .powerPrint()
// .printReverse() // Should print the elements in a single line in reverse order.
// .powerPrintReverse()
// .size // Should return the length of the stack
// .powerSize()  

function ourArray(){

    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false
    })

    this.length=arguments.length;

    for(let i=0;i<arguments.length;i++){
        this[i]=arguments[i];
    }

}

let earlier= new ourArray(1,2,3,4,5,6);
//console.log(Object.values(earlier));
//console.log(earlier)

ourArray.prototype.powerPush = function(x){  //push function
    this[this.length]=x;
    this.length++;
}
earlier.powerPush(7);
//this[this.length]
ourArray.prototype.powerPop = function(){  //pop function
    delete this[this.length-1];
    this.length--;
}

earlier.powerPop();

ourArray.prototype.ourTop = function(){  //top function 
    return(this[this.length-1])          //this displays the last element of array
}

//console.log(earlier.ourTop());
//console.log(earlier)

ourArray.prototype.powerPrint = function(){  //prints the array
    console.log(Object.values(this));
}

earlier.powerPrint();

ourArray.prototype.powerPrintReverse = function(){  //prints the reverse of array
    //Object.values(this).reverse();
    let temp = Object.values(this)
    temp=temp.reverse();
    console.log(temp);
}

earlier.powerPrintReverse();

//earlier.powerPrint();

ourArray.prototype.powerSize = function(){  //prints the size of the array
    return (this.length);
}

console.log(earlier.powerSize());

