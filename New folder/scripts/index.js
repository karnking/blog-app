// code for time and date 
const date = document.getElementById("date");
const time = document.getElementById("time");

// Format the date as desired (e.g., YYYY-MM-DD)
const currentDate2 = new Date().toLocaleDateString("en-US", {
  month: "long",
  day: "2-digit",
  year: "numeric",
});
date.innerText = currentDate2;

const currentDate = new Date();
const currentTime = currentDate.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});

time.innerText = currentTime

// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const blogsURL = `${baseServerURL}/blogs`;
let mainSection = document.getElementById("data-list-wrapper");

let blogsData = [];



var title=document.querySelector("#welcome");
var name=document.createElement('h2');
name.innerText="Welcome, Peter";
title.append(name);


// add your js code for index page here 

async function fetching(abc)
{
  //console.log(abc);

try{


  let res=await fetch(`${abc}`)
  let blogsData=await res.json();
  console.log(blogsData);
 updatedata(blogsData);

}
catch(error)
{

  console.log("error");
}


}

//console.log(`${blogsURL}`);

function updatedata(data)
{
  mainSection.innerHTML="";
var maindiv=document.createElement('div');
maindiv.setAttribute("class","card-list");


data.forEach(function(ele){

  var body=document.createElement('div');
  body.setAttribute("class","card");
  
  var imgdiv=document.createElement('div');
  imgdiv.setAttribute("class","card_img");
  
  var img=document.createElement('img');
  img.src=ele.image;
  imgdiv.append(img);

  var bodydiv=document.createElement('div');
  bodydiv.setAttribute("class","card_body");


  var title=document.createElement('p');
  title.innerText=ele.title
  
  var subtitle=document.createElement('p');
  subtitle.innerText=ele.sub_title

  var category=document.createElement('p');
  category.innerText=ele.category

  var profile_pic=document.createElement('img');
  profile_pic.setAttribute("class","profile")
  profile_pic.src=ele.author.profile_pic;


  var name=document.createElement('p');
  // date.setAttribute("class","")
   name.innerText=ele.author.name;

  //  var id=document.createElement('p');
  // // date.setAttribute("class","")
  //  id.innerText=ele.id;
 

  var date=document.createElement('p');
 // date.setAttribute("class","")
  date.innerText=ele.publish_date;


  var button1=document.createElement('button');
  button1.setAttribute("class","deleteBtn");
  button1.setAttribute("id",ele.id);
  button1.innerText="Delete";

  button1.addEventListener("click",function()
  {
    deletefun(ele.id);

  })




  var button2=document.createElement('button');
  button2.setAttribute("class","readBtn");
  button2.setAttribute("id",ele.id);
  button2.innerText="Read More";
  button2.addEventListener("click",function()
  {
    localStorage.setItem("blog",JSON.stringify(ele));
    window.location.href="blog.html";
    
  })
  
 
  



  bodydiv.append(title,subtitle,category,profile_pic,name,date,button1,button2)
  body.append(imgdiv,bodydiv);
  
  maindiv.append(body);
 

})


mainSection.append(maindiv);




}

window.onload=()=>
{
  fetching(blogsURL);
}




//filter and sort

let newestFirst = document.getElementById("newest-first");
newestFirst.addEventListener("click",function()
{
fetching(`${blogsURL}?_sort=publish_date&_order=desc`)
  

})



let oldestFirst = document.getElementById("oldest-first");
oldestFirst.addEventListener("click",function()
{
  fetching(`${blogsURL}?_sort=publish_date&_order=asc`)
  

})





let filterInternational = document.getElementById("filter-International");
filterInternational.addEventListener("click",function()
{
  fetching(`${blogsURL}?category=International`)
  

})

let filterBusiness = document.getElementById("filter-Business");
filterBusiness.addEventListener("click",function()
{
  fetching(`${blogsURL}?category=Business`)
  

})
let filterEntertainment = document.getElementById("filter-Entertainment");
filterEntertainment .addEventListener("click",function()
{
  fetching(`${blogsURL}?category=Entertainment`)
  

})

let filterSports = document.getElementById("filter-Sports");
filterSports.addEventListener("click",function()
{
  fetching(`${blogsURL}?category=Sports`)
  

})
let filterHealth = document.getElementById("filter-Health");
filterHealth.addEventListener("click",function()
{
  fetching(`${blogsURL}?category=Health`)
  

})




async function deletefun(id)
{
  try{

    
  
    let response= await fetch(`${blogsURL}/${id}`,{
     method:"DELETE",
     headers:{
      "Content-Type":"application/json",
     },





    });


    
    fetching(blogsURL);
  }

  catch(error)
{
console.log(error);
}
}