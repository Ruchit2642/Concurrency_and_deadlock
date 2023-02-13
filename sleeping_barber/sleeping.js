var Customers = 0;    // to gettotal no. of customers
var barber = 0;    // to check barber is free or not
var customer_wr = 0;   //total no. of customers present in waiting room
var p=0;     //for display purpose
var n ;   //total no. of seats available in waiting room

//Time Complexity O(1)
document.getElementById('c1').innerHTML = "";
var x =0
function buttonClick() {
    Customers++;  // to add customers
    console.log(Customers)
    var s = '<button type="button" class = "container1" id = '+(x+1)+' onclick="add_wr(this.id)">'+'Customer'+(x+1)+'</button>';
    document.getElementById('c1').innerHTML += s;
    x++;
}


//Time Complexity O(n)
function start(){
    n= document.getElementById('chairs').value;
    p=n;
    document.getElementById('output_ch').innerHTML = 'No. of chairs in waiting room: '+(p)+'';
    barber=0;
    document.getElementById('added_customer');
    var t = document.getElementById('c1');
    document.getElementById('c2').innerHTML = "";
    document.getElementById('c4').innerHTML = "";
    t.innerHTML = "";
    for(var i = 0; i < Customers; i++)
    {
        var s = '<button type="button" class = "container1" id = '+(i+1)+' onclick="add_wr(this.id)">'+'Customer'+(i+1)+'</button>'; 
        t.innerHTML += s;
    }
    document.getElementById('chairs').value = "";

    console.log(n);
}


//Time Complexity O(1)
function add_wr(id)
{
        customer_wr++;
        if(n >= customer_wr ){
            
            document.getElementById('waiting_customer').style.display = "";
            var y = document.getElementById(id);
            y.remove();
            var z = document.getElementById('c2');
            var s = '<button type="button" class = "container1" onclick="add_cut(this.id)" id = '+(id)+'>'+'Customer'+(id)+'</button>';
            z.innerHTML += s;
        }
        else
            alert("Come Later");
            
}

//Time Complexity O(1)
function add_cut(id){
    if (barber == 0){
        customer_wr--;
        barber = 1;
        document.getElementById('customer_cut').style.display = "";
        var x = document.getElementById(id);
        x.remove();
        document.getElementById('c3').innerHTML = '';
        var z = document.getElementById('c3');
        var s = '<button type="button" class = "container1" onclick="add_comp(this.id)" id = '+(id)+'>'+'Customer'+(id)+'</button>';
        z.innerHTML += s;
    }
    else
        alert("Please wait some more time for your turn");
    
}

//Time Complexity O(1)
function add_comp(id){
    barber = 0;
    document.getElementById('customer_done').style.display = "";
    var x = document.getElementById(id);
    x.remove();
    var z = document.getElementById('c4');
    var s = '<button type="button" class = "container1"  id = '+(id)+'>'+'Customer'+(id)+'</button>';
    z.innerHTML += s;
    document.getElementById('c3').innerHTML = 'Barber is sleeping';
    setTimeout(() => {alert("Barber is free")},300);
    // alert("Barber is free");

}
