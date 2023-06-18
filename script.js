


var dollar = "US Dollar";
var euro = "Euro";  

var currency = document.getElementById("currency");
var currency_name = document.getElementsByClassName("currency_name");
var currency_value = document.getElementsByClassName("currency_value");
function changeCurrency()
{
    if(currency.value=='$')
    {
        currency.value='€'
        currency.innerHTML='€'
        currency.style.background="#1877F2"

        for (var i = 0; i < currency_name.length; ++i) {
            var item = currency_name[i];  
            item.innerHTML = euro;
        }
        for (var j = 0; j < currency_value.length; j++) {
            var price = currency_value[j];
            var new_value = parseInt((currency_value[j].innerHTML.substring(1)).replaceAll(',', '') ); 
            new_value = (new_value*0.94);
            //result = Number(new_value.toFixed(0)).toLocaleString().split(/\s/).join(',') + '.' + Number(new_value.toString().slice(new_value.toString().indexOf('.')+1)).toLocaleString()
            result = new_value.toLocaleString();
            price.innerHTML = "€"+  result;
            price.style.color="#1877F2";
            
            
        }
    }else
    {
        currency.value='$'
        currency.innerHTML='$'
        currency.style.background="#0C9E5A" 

        for (var i = 0; i < currency_name.length; ++i) {
            var item = currency_name[i];  
            item.innerHTML = dollar;
        }
        for (var j = 0; j < currency_value.length; j++) {
            var price = currency_value[j];
            var new_value = parseInt((currency_value[j].innerHTML.substring(1)).replaceAll(',', '') ); 
            new_value = (new_value*1.06);
            //result = Number(new_value.toFixed(0)).toLocaleString().split(/\s/).join(',') + '.' + Number(new_value.toString().slice(new_value.toString().indexOf('.')+1)).toLocaleString()
            result = new_value.toLocaleString();
            price.innerHTML = "€"+  result;
            price.style.color="#0C9E5A";
            
            
        }
    }
}



