var arr=[];
function addItem()
{
    var name=$("#name").val();
    var price=parseInt($("#price").val());
    var image=$("#image").val();
    var categorie=$("#categorie").val();
    var description=$("#description").val();
    var obj=
    {
        name:name,
        price:price,
        image:image,
        categorie:categorie,
        description:description
    };
    
    setItem(obj);
    window.location="showItem.html";
}
function setItem(amt)
{
    if(localStorage.getItem('data')!=undefined)
    {
        var x= JSON.parse(localStorage.getItem('data'));
        arr=x;
    }
    var name=$("#name").val();
    var price=parseInt($("#price").val());
    var image=$("#image").val();
    var categorie=$("#categorie").val();
    var description=$("#description").val();
    var obj=
    {
        name:name,
        price:price,
        image:image,
        categorie:categorie,
        description:description
    };
    arr.push(obj);
    localStorage.setItem('data',JSON.stringify(arr));
}

var getArr=[];
function getItem()
{   
    var x=JSON.parse(localStorage.getItem('data'));
    getArr=x;
    if(getArr.length>0)
    {
        showItem();
    }
}
function showItem()
{
    $("#table tbody").empty();
    getArr.forEach(function(value,key)
    {
        $("#table tbody").append('<tr><td>'
        +'<img src="'+value.image+'" alt="image"></td><td style="padding-top:30px">'
        +value.name+'</td><td style="padding-top:30px">'
        +value.price+'</td><td style="padding-top:30px">'
        +value.description+'</td><td style="padding-top:30px">'
        +value.categorie+'</td><td style="padding-top:30px">'
        +'<i class="fa fa-edit" style=" padding-left: 20px; font-size: large;" onclick="editItem('+key+')"></i>'
        +'<i class="fa fa-trash" style="font-size: large;" onclick="deleteItem('+key+')"></i></td>'
        +'</tr>'
        );
    });
}
var deleteArr=[];
function deleteItem(amt)
{   
    var x=JSON.parse(localStorage.getItem('data'));
    for(var i=0; i<x.length; i++)
    {
        if(x[amt]!=x[i])
        {
            deleteArr.push(x[i]);
        }
    }
    localStorage.removeItem('data');
    localStorage.setItem('data',JSON.stringify(deleteArr));
    alert("Successful Deleted!");
    window.location="showItem.html";
}



var editarr=[];
function editItem(amt){
    
    var x=JSON.parse(localStorage.getItem('data'));
    editarr=x;
    
if(editarr.length>0){
    editData(amt);
}
}
function editData(amt){
    window.location="createItem.html?id="+amt+"&name="+editarr[amt].name+"&image="+editarr[amt].image+
    "&price="+editarr[amt].price+"&categorie="+editarr[amt].categorie+"&description="+editarr[amt].description;
}
var editarr1=[];
function updateItem(){
    var name=$('#name').val();
    var image=$('#image').val();
    var price=$('#price').val();
    var categorie=$('#categorie').val();
    var description=$('#description').val(); 
    var id=$('#mid').val();
    var x=JSON.parse(localStorage.getItem('data'));
    editarr1=x;
    for(var i=0; i<editarr1.length; i++)
    {
        if(id==i)
        {
            editarr1[i].name=name;
            editarr1[i].image=image;
            editarr1[i].price=price;
            editarr1[i].categorie=categorie;
            editarr1[i].description=description;
            localStorage.setItem('data',JSON.stringify(editarr1));
            alert("Updated!");
            window.location="showItem.html";
        }
    }
}




var chickenArr=[];
function chickenItem()
{ 
    var x= JSON.parse(localStorage.getItem('data'));
    chickenArr=x;
    if(chickenArr.length>0)
    {
        chickenAdd();
    }
}
function chickenAdd()
{
    chickenArr.forEach(function(value,key)
    {
        if(value.categorie=="Chicken")
        {
            $("#chickenadd").append('<div class="card card-sm" style="width:220px;height:270px; margin:15px; border:2px solid black; float: left;">'
            +'<img class="card-img-top" src="'+value.image+'" alt="Card image" style="width:100px; height:100px; margin-left: 60px;">'
            +'<div class="card-body" style="width:240px;height:150px;">'
            +'<div style="width:240px;height:100px;"><span class="card-title" style="font-weight: bold;">'+value.categorie+':</span>'
            +'<span style="font-weight: bold; color:gray;">'+value.name+'</span><br>'
            +'<span class="card-text">'+value.description+'</span></div>'
            +'<div style="width:240px;height:50px;">'
            +'<a>$'+value.price+'</a>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a class="btn btn-success btn-sm"  onclick="orderChicken('+key+',this)">Order+</a>'
            +'</div>'
            +'</div>'
            +'</div>'
            );
        }
    });
}
var qty=1, n=0;
function orderChicken(amt)
{
    n+=parseInt(chickenArr[amt].price);
    $("#chickenTable tbody").append('<tr><td>'+chickenArr[amt].name+'</td><td>'
    +chickenArr[amt].price+'</td><td>'
    +chickenArr[amt].categorie+'</td><td>'
    +qty+'</td><td>'
    +'<i class="fa fa-trash" style="font-size: large;" onclick="deleteChickenOrder('+amt+',this)"></i></td>'
    +'</tr>'
    );
    $("#total").text("Total Amount:"+n+"Ks");
}
function deleteChickenOrder(amt,e)
{
    var tot=parseInt(n);
    tot-=parseInt(chickenArr[amt].price);
    $(e).parent().parent().remove();
    $("#total").text("Total Amount:"+tot+"Ks");
    n=parseInt(tot);
}








var noodleArr=[];
function noodleItem()
{ 
    var x= JSON.parse(localStorage.getItem('data'));
    noodleArr=x;
    if(noodleArr.length>0)
    {
        noodleAdd();
    }
}
function noodleAdd()
{
    noodleArr.forEach(function(value,key)
    {
        if(value.categorie=="Noodle")
        {
            $("#noodleadd").append('<div class="card card-sm" style="width:220px;height:270px; margin:15px; border:2px solid black; float: left;">'
            +'<img class="card-img-top" src="'+value.image+'" alt="Card image" style="width:100px; height:100px; margin-left: 60px;">'
            +'<div class="card-body" style="width:240px;height:150px;">'
            +'<div style="width:240px;height:100px;"><span class="card-title" style="font-weight: bold;">'+value.categorie+':</span>'
            +'<span style="font-weight: bold; color:gray;">'+value.name+'</span><br>'
            +'<span class="card-text">'+value.description+'</span></div>'
            +'<div style="width:240px;height:50px;">'
            +'<a>$'+value.price+'</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn btn-success btn-sm"  onclick="orderNoodle('+key+',this)">Order+</a>'
            +'</div>'
            +'</div>'
            +'</div>'
            );
        }
    });
}
var qty=1, n=0;
function orderNoodle(amt)
{
    n+=parseInt(noodleArr[amt].price);
    $("#chickenTable tbody").append('<tr><td>'+noodleArr[amt].name+'</td><td>'
    +noodleArr[amt].price+'</td><td>'
    +noodleArr[amt].categorie+'</td><td>'
    +qty+'</td><td>'
    +'<i class="fa fa-trash" style="font-size: large;" onclick="deleteNoodleOrder('+amt+',this)"></i></td>'
    +'</tr>'
    );
    $("#total").text("Total Amount:"+n+"Ks");
}
function deleteNoodleOrder(amt,e)
{
    var tot=parseInt(n);
    tot-=parseInt(noodleArr[amt].price);
    $(e).parent().parent().remove();
    $("#total").text("Total Amount:"+tot+"Ks");
    n=parseInt(tot);
}








var beerArr=[];
function beerItem()
{ 
    var x= JSON.parse(localStorage.getItem('data'));
    beerArr=x;
    if(beerArr.length>0)
    {
        beerAdd();
    }
}
function beerAdd()
{
    beerArr.forEach(function(value,key)
    {
        if(value.categorie=="Beer")
        {
            $("#beeradd").append('<div class="card card-sm" style="width:220px;height:270px; margin:15px; border:2px solid black; float: left;">'
            +'<img class="card-img-top" src="'+value.image+'" alt="Card image" style="width:100px; height:100px; margin-left: 60px;">'
            +'<div class="card-body" style="width:240px;height:150px;">'
            +'<div style="width:240px;height:100px;"><span class="card-title" style="font-weight: bold;">'+value.categorie+':</span>'
            +'<span style="font-weight: bold; color:gray;">'+value.name+'</span><br>'
            +'<span class="card-text">'+value.description+'</span></div>'
            +'<div style="width:240px;height:50px;">'
            +'<a>$'+value.price+'</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a class="btn btn-success btn-sm" onclick="orderBeer('+key+',this)">Order+</a>'
            +'</div>'
            +'</div>'
            +'</div>'
            );
        }
    });
}
var qty=1, n=0;
function orderBeer(amt)
{
    n+=parseInt(beerArr[amt].price);
    $("#chickenTable tbody").append('<tr><td>'+beerArr[amt].name+'</td><td>'
    +beerArr[amt].price+'</td><td>'
    +beerArr[amt].categorie+'</td><td>'
    +qty+'</td><td>'
    +'<i class="fa fa-trash" style="font-size: large;" onclick="deleteBeerOrder('+amt+',this)"></i></td>'
    +'</tr>'
    );
    $("#total").text("Total Amount:"+n+"Ks");
}
function deleteBeerOrder(amt,e)
{
    var tot=parseInt(n);
    tot-=parseInt(beerArr[amt].price);
    $(e).parent().parent().remove();
    $("#total").text("Total Amount:"+tot+"Ks");
    n=parseInt(tot);
}



