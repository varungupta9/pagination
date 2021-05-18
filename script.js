
const request = new XMLHttpRequest();
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json ', true);
request.send();



request.onload = function(){


    var nameArray = [];
    var emailArray = [];
    
var data = JSON.parse(this.response);


    for(let e=0; e < data.length ; e++)
    {
    nameArray.push(data[e].name)
    emailArray.push(data[e].email)

    }
 
 
createtable(0,10)


function createtable(val1,val2){
    let start = val1;
    let end = val2

     
   
var rname = nameArray.slice(start,end) 
var remail = emailArray.slice(start,end) 
 
var container=document.createElement('div');
container.setAttribute('id','container')
var table = document.createElement('table')
table.setAttribute('id','tables')
table.setAttribute('class','table table-success table-striped"')
table.style.border="solid 1px"
var tablehead = document.createElement('thead')
var tr = document.createElement('tr')


var th1 = createThTr('th','ID')
var th2 = createThTr('th','Name')
var th3 = createThTr('th','Email')
tr.append(th1,th2,th3)
tablehead.append(tr)



for(var k = 0 ; k < 10 ; k++)
{  

var td1 = createThTr('td',++start)
td1.style.border="solid 1px"
var td2 = createThTr('td',rname[k])
td2.style.border="solid 1px"
var td3 = createThTr('td',remail[k])
td3.style.border="solid 1px"
var tr = document.createElement('tr')
tr.style.border="solid 1px"
tr.setAttribute('id','rows')
tr.append(td1,td2,td3)
table.append(tablehead,tr)
}

    // td2.style.border="solid 1px"
    //     th.innerHTML += res[e].id;
    //     td1.innerHTML += res[e].name;
    //     td2.innerHTML += res[e].email;
    //     tr.append(th,td1,td2)
    //     table.append(tr)
    //     document.body.append(table)





container.append(table)
document.body.append(container)

var page = document.createElement('div')
page.setAttribute('class','btn-group me-2')
page.setAttribute('role','group')
for(var i =0 ; i <13; i++){
    var btn = document.createElement('button')
    btn.setAttribute('type','button')
    btn.setAttribute('class','btn btn-outline-secondary')
    btn.setAttribute('id',i)
    
    if(i<10){
    btn.addEventListener("click",showPages)    
    btn.innerHTML=parseInt(i)+1}
    if (i===10)
    {   btn.addEventListener("click",next) 
        btn.innerHTML="next"
    }
    if (i===11)
    {   btn.addEventListener("click",prev)
        btn.innerHTML="previous"
    }
    if (i===12)
    {   btn.addEventListener("click",last)
        btn.innerHTML="last"
    }
    page.append(btn)

}
container.append(page)
document.body.append(container)

}


var pge ='';

function showPages()
{    var that = this;
     var ids = that.getAttribute("id")
     var row = document.getElementsByTagName('div')[0];
     pge= parseInt(ids)*10;
   
    row.parentNode.removeChild(row);
     createtable(parseInt(ids)*10,parseInt(ids)*10+10)
     
}
function next ()
{
    if(pge < 81)
    {
    var row = document.getElementsByTagName('div')[0];
    row.parentNode.removeChild(row);
    createtable(pge+10,pge+20)
    pge=pge+10;
    }
}
function prev ()
{
    
    if(pge >0)
    {
    var row = document.getElementsByTagName('div')[0];
    row.parentNode.removeChild(row);
    createtable(pge-10,pge-1)
    pge=pge-10;
    }
}


function last ()
{
    pge=90
    var row = document.getElementsByTagName('div')[0];
    row.parentNode.removeChild(row);
    createtable(pge,pge+10)
}


}

function createThTr(elementName, value , className){
    var th = document.createElement(elementName)
    th.setAttribute('class',className)
    th.innerHTML=value
    return th
}




