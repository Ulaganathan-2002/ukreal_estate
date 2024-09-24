<script>
   var cls =  document.querySelector(".close");
   cls.addEventListener('click', ()=>{
    document.querySelector(".cartTap").style.display = "none";
   });

   var icart =  document.querySelector(".icon-cart");
   icart.addEventListener('click', ()=>{
    document.querySelector(".cartTap").style.display = "grid";
   });
 debugger;
 var pluitem1 =  document.querySelector("#plusitem1");
 pluitem1.addEventListener('click', ()=> {
       var qty = document.querySelector("#qtyitem1").innerHTML;
       var amount = document.querySelector("#totalprice1").innerHTML;
       qty++;
       document.querySelector("#qtyitem1").innerHTML =qty;
       document.querySelector("#totalprice1").innerHTML =qty*amount;
       
 });
 var pluitem2 =  document.querySelector("#minusitem1");
 pluitem2.addEventListener('click', ()=> {
       var qty = document.querySelector("#qtyitem1").innerHTML;
       var delet = document.querySelector("#totalprice1").innerHTML;
       qty--;
       document.querySelector("#qtyitem1").innerHTML =qty;
       document.querySelector("#totalprice1").innerHTML =qty*delet;

       
 });
 </script>