var date = new Date().getHours()
 if(date>6 &&  date <12 ){
    alert("Sabahiniz xeyir")
 }
 else if(date>12 && date<18){
    alert("Gunortaniz xeyir")
    document.body.style.backgroundColor = 'orange'

 }
 else if(date>18 || date<6){
    alert("Axsaminiz  xeyir")
    document.body.style.backgroundColor = 'black'

 }
 console.log(date);




