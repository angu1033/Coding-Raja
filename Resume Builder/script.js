//alert("Loading");
function addNewWEField(){
    //console.log("Adding new field")
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter Here');

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);

}

//genrate cv functions
function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;
    document.getElementById('nameT2').innerHTML=nameField;

    //contact
    document.getElementById('contactT').innerHTML=document.getElementById("contactField").value;

    //address
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    //important links
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    document.getElementById('linkT').innerHTML=document.getElementById('linkedInField').value;
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

    //objective
    document.getElementById('objT').innerHTML=document.getElementById('objectiveField').value;

    //work experience

    let wes=document.getElementsByClassName("weField");

    let str=" ";

    for(let e of wes) {
        str= str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML=str;

    let aqs=document.getElementsByClassName("aqField");
    let str1="";
    for(let e of aqs){
        str1=str1+`<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //code for setting image
    let file=document.getElementById("imgField").files[0];
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set image
    reader.onloadend=function(){
        document.getElementById("imgTemp").src=reader.result;
    }

    document.getElementById("cv-form").style.display='none';
    document.getElementById("cv-template").style.display='block';





}