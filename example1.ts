// function log(a)
// {
//     console.log(a);
// }

// var a= "Hello World"
// log(a)


// var [identifier ] : [type-annotation] = value;
// var [identifier ] : [type-annotation];
// var [identifier ]  = value;
// var [identifier ] ;

let b:boolean =false;
let c:number =10;
let d:number= 0o213;
let name1: string="ark";

let aa: string[]= ["TS", "JS"];
let ab: Array<string> =["TS","JS"];
let ac:[number , string];


enum fruit{
    apple,
    banana,
    mango,
    orange
}
let fruitname: string= fruit[2];

let ag: any;  //when you don't know the type of value i.e can be number, string
ag=10;
ag="gg";

// use let comapared to var bcoz var has global hosting thus var will be 
// accessible outside it's scope i.e dangerous and i.e not the case with 
// let thus. lwt is safe.

// type assertion
// let v1;
// let v2: number= (<string>v1).<use any string funct>
// let v2: number= (v1 as string).<use any string funct>

function product(x:number,y)
{
    return x*y;
}

product(2,3);

//annonymous func
let w= function(x,y)
{
    return x*y;

}
console.log(w(2,3));

let ex = (a) =>console.log(a);
//a is parameter and action is console.log()
console.log(b);

// class
class myClass{
    j: number;
    constructor(k :number)
    {
        this.j=k;

    }
    value()
    {
        return ("The number is "+ this.j);
    }
}

let myObj = new myClass(6);
console.log(myObj.value())

// inheritance
class ChildClass extends myClass
{
    l:number;
    constructor(m:number, k:number)
    {
        super(k);
        this.l = m; 

    }
    value()
    {
        return("val from parent"+this.j+"val fromm child"+this.l);
    }
}
let childObj = new ChildClass(2,4);
console.log(childObj.value());

// interface

interface myInterface{
    s:number;
    t:string;
    myFunc();
}

class A implements myInterface
{
    s:number;
    t:string;
    constructor(s:number, t:string)
    {
        this.s=s;
        this.t=t;
    }
    myFunc()
    {
        console.log("impementing " +this.s+" "+this.t);
    }
}

let o =new A(1,"HI");
console.log(o.myFunc());
