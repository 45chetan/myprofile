

var dateInput = document.getElementById('dateInput')
    var currentDate = new Date();
    var formattedDate = currentDate.getDate() + '-' + ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +  currentDate.getFullYear();
    console.log(formattedDate);
    dateInput.value = formattedDate; 
function agecalculator(){

    let input = document.getElementById('date').value
    let rd,rm,ry;
    //console.log(input)
    input = new Date(input)
    let bday = input.getDate();
    let bmonth = input.getMonth()+1;
    let byear = input.getFullYear();
    let cday=currentDate.getDate();
    let cmonth=currentDate.getMonth()+1;
    let cyear=currentDate.getFullYear();
    if(cday>bday)
        {
            rd=cday-bday;
        }
    else
    {
        rd=(cday+30)-bday;
        cday--;
    }
    if(cmonth>bmonth)
        {
            rm=cmonth-bmonth;
        }
    else if(cmonth<bmonth)
    {
        rm=(cmonth+12)-bmonth
        cyear--
    }
    else if(cmonth==bmonth)
        rm=0;
    ry=cyear-byear;
    let span = document.getElementsByTagName('span')[0]
    span.innerHTML=ry+'Years, '+rm+'Months, '+rd+'Days'
  
    

    
}