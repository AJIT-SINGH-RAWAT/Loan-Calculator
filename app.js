
//Listen for submit
document.getElementById('loan-form').addEventListener('submit',function(e){
   //Hide Results
document.getElementById('loading').style.display='block';

   //Show loader
document.getElementById('results').style.display='none';
setTimeout(calculateresult,2000);


    e.preventDefault();
});
