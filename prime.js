//var n;
//var count=0;
//n=document.getElementById("txt1").value;

function isPrime()
{
var n;
var count=0;
var output;
n=document.getElementById("txt1").value;
for (var i=1 ; i<=n ; i++)
{
         if(n%i==0)
       {
       count=count+1;
        }
}
if(count==2)
        {
       // document.getElementById('result').innerHTML="prime number";
           output="It is a Prime Number";
           document.getElementById("result").value=output;
            console.log("given number is a prime: "+n);
        }
else
    {
      //document.getElementById('result').innerHTML=" not a prime number";
       ouput="It is not a Prime Number";
       document.getElementById("result").value=ouput;
        console.log("given number is  not a prime: "+n);
    }
}