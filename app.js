//Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
   //Hide Results
document.getElementById('loading').style.display='block';

   //Show loader
document.getElementById('results').style.display='none';
setTimeout(calculateresult,2000);


    e.preventDefault();
});

//Calculate Results

function calculateresult(e){
   
  let amount=document.getElementById('amount').value;
  let interest=document.getElementById('interest').value;
  let years=document.getElementById('years').value;
  let monthlypayment=document.getElementById('monthly-payment');
  let totalpayment=document.getElementById('total-payment');
  let totalinterest=document.getElementById('total-interest');

   interest=interest/1200;
   let x=Math.pow(1+interest,years*12);
   let monthly=(amount*interest*(x)/(x-1)).toFixed(2);
   if (monthly> 0){
       monthlypayment.value=monthly;
   totalpayment.value=((monthlypayment.value)*12*years);
   totalinterest.value=(totalpayment.value)-amount;
   
    //Show results
    document.getElementById('results').style.display='block';
    
    //Hide loader
    document.getElementById('loading').style.display='none';


   }
   else{
      showerror('Please check your number');
   }
   

    
}
//Show error

function showerror(error)
{
//Show results
document.getElementById('results').style.display='none';
    
//Hide loader
document.getElementById('loading').style.display='none';


// Create a div element
let errordiv=document.createElement('div');

//Get elements
let card=document.querySelector('.card');
let heading=document.querySelector('.heading');

//Add class
errordiv.className='alert alert-danger';

//Create text node and add to div
errordiv.appendChild(document.createTextNode(error));

//Insert error above heading
card.insertBefore(errordiv,heading);

//Clear error after 2 seconds
setTimeout(clearerror,2000);
}

//Clear error
function clearerror(){
    document.querySelector('.alert').remove();
}
