function getE(id){
return document.getElementById(id);
}
var password="password";
getE('but1').onclick=function(){
    getE('area').style.display="block";
    getE('ttt').style.display="none";
    getE('second').style.display="block";
     getE('but3').style.display="inline";
    getE('but4').style.display="inline";
    getE('area').innerHTML=getE('first').innerHTML;

}

getE('but3').onclick=function(){
getE('first').innerHTML=getE('area').value;
}

getE('but2').onclick=function(){
    getE('second').style.display="none";
    getE('ttt').style.display="block";
}


//розмір шрифта
var ch=document.querySelector('#ff');
ch.onclick=function(){
    for(i=0;i<5;i++){     
        if(document.getElementsByName('sizetext')[i].checked){
           var size=ch.children[i].children[1].innerHTML;
            getE('first').style.fontSize=size;
        }
    }
}
var ck1;

getE('but5').onclick=function(){
     for(i=0;i<9;i++){
         ck1=true;
        document.querySelectorAll('.some5')[i].style.display="none";
    document.querySelectorAll('.some4')[i].style.display="block";
         
        
    }
    
}

for(var i=0;i<9;i++){
document.querySelectorAll('.some4')[i].onclick=function(){
    getE('first').style.color =this.style.backgroundColor;
    for(j=0;j<9;j++){
    document.querySelectorAll('.some4')[j].style.display="none";
    }
}

}


getE('but6').onclick=function(){
     for(i=0;i<9;i++){
        
    document.querySelectorAll('.some4')[i].style.display="none";
         document.querySelectorAll('.some5')[i].style.display="block";
        
    }
}

for(var i=0;i<9;i++){
document.querySelectorAll('.some5')[i].onclick=function(){
    getE('first').style.backgroundColor=this.style.backgroundColor;
    for(j=0;j<9;j++){
    document.querySelectorAll('.some5')[j].style.display="none";
    }
}
}



var chek1=true;


getE('check1').onclick=function(){
    if(chek1==true){
    getE('first').style.fontWeight="bold";
    chek1=false;
}else {
    getE('first').style.fontWeight="normal";
    chek1=true;

}
}

var chek2=true;


getE('check2').onclick=function(){
    if(chek2==true){
    getE('first').style.fontStyle="italic";
    chek2=false;
}else {
    getE('first').style.fontStyle="normal";
    chek2=true;

}
}


getE('fontfamily').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
         
            getE('first').style.fontFamily=this.children[i].innerHTML;
        }
    }
}



getE('but4').onclick=function(){
    getE('first').style.display="none";
    getE('second').style.display="none";
    getE('ttt').style.display="none";
     getE('butt').style.display="none";
    getE('add1').style.display="block";
    
}

var list=document.querySelector('#ff2');
list.onclick=function(){   
        if(document.getElementsByName('change2')[1].checked){
            getE('tableform').style.display="none";
            getE('listform').style.display="block"; 
            getE('form3list').style.display="block";
        }else {
              getE('tableform').style.display="block";
            getE('listform').style.display="none";
            getE('form3list').style.display="none";
            getE('kellist').style.display="none";
            getE('tlist').style.display="none";
        }
 
}



//cтворення списку
//var chenglist=document.querySelector('#fontypeline');
//getE(typel2).onclick=function(){
//    if(document.getElementsByName('typel2')[1].checked){
//        alert("fv");
//    }
//}





var mark;

getE('tlist').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
         
        mark=this.children[i].innerHTML;
        }
    }
}

getE('createlist').onclick=function(){
    var k=0;
    var kil=getE('kellist').value;
    if(Number(getE('kellist').value)){
    }else{
        getE('kellist').style.borderColor="red";
        k+=1;
       
    }
if(k==0){
 getE('first').style.display="block";
    getE('second').style.display="block";
    getE('ttt').style.display="none";
     getE('butt').style.display="block";
    getE('add1').style.display="none";
    getE('area').style.display="block";
function creatlist(type,kil,typelist){
    var listul=document.createElement(type);
    listul.style.marginLeft="20px";
    listul.style.listStyle=mark;
    for(var i=0;i<kil;i++){
        var li=document.createElement('LI');
        li.innerHTML="some text";
        listul.appendChild(li);
    }
    

  first.appendChild(listul);
  getE('area').innerHTML=getE('first').innerHTML;
}
    
    creatlist(t2,kil,mark);
//var listul=document.createElement(t2);
//    listul.style.marginLeft="20px";
//    listul.style.listStyle=mark;
//    for(var i=0;i<kil;i++){
//        var li=document.createElement('LI');
//        li.innerHTML="some text";
//        listul.appendChild(li);
//    }
//    }
//
//  first.appendChild(listul);
//  getE('area').innerHTML=getE('first').innerHTML;
//    
}
}
var t2;

getE('typel2').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
         
          t2=this.children[i].innerHTML;
//            alert(t2);
            console.log(t2);
           
       
    }
}
}
 

//створення таблиці

getE('typel').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
         
          typeline=this.children[i].innerHTML;
        }
    }
}

getE('colorl').onchange=function(){
    for(var i=0;i<this.children.length;i++){
        if(this.children[i].selected){
         
          colorline=this.children[i].innerHTML;
        }
    }
}




getE('createtable').onclick=function(){
    
     var k=0;
    if(Number((getE('rowtable').value))){      
    }else{
        getE('rowtable').style.borderColor="red";  
        k+=1; 
    }
    if(Number(getE('coltable').value)){      
    }else{
        getE('coltable').style.borderColor="red";  
        k+=1; 
    }
    if(Number((getE('widhttable').value))){      
    }else{
        getE('widhttable').style.borderColor="red";  
        k+=1; 
    }
    if(Number(getE('heighttable').value)){      
    }else{
        getE('heighttable').style.borderColor="red";  
        k+=1; 
    }
    if(Number((getE('tovtable').value))){      
    }else{
        getE('tovtable').style.borderColor="red";  
        k+=1; 
    }
    
    
    
    
    if(k==0){
     getE('first').style.display="block";
    getE('second').style.display="block";
    getE('ttt').style.display="none";
     getE('butt').style.display="block";
    getE('add1').style.display="none";
    getE('area').style.display="block";
    var row=getE('rowtable').value;
    var col=getE('coltable').value;
    var widh=getE('widhttable').value;
    var hei=getE('heighttable').value;
     var tov=getE('tovtable').value;
    
 
var tb=document.createElement('table');

    
for(i=0;i<row;i++){
    var tr= document.createElement('tr');
    
    for(j=0;j<col; j++){
     var td=  document.createElement('td');
        td.innerHTML="text";
        td.style.height=hei+"px";
        td.style.width=widh+"px";
         
         td.style.border=tov+"px";
    td.style.borderColor=colorline;
    td.style.borderStyle=typeline;
        
        tr.appendChild(td);
        
}
    tb.appendChild(tr);
}


    
first.appendChild(tb);
 
  getE('area').innerHTML=getE('first').innerHTML;
}
}
getE('butblock').onclick=function(){
    var pass=prompt("Сторінку заблоковано. Введіть пароль");
    while(password!=pass){
        pass=prompt("Пароль був введений не вірно. Введіть пароль");
    }
 
    
}

getE('typel2').onblur=function(){
   getE('kellist').style.display="inline";
}

getE('kellist').onblur=function(){
    getE('tlist').style.display="inline";
}
getE('butblock').onclick=function(){
getE('notpass').style.display="none";
getE('block2').style.display="block";

}

getE('pasif').onclick=function(){
    var pass=getE('enterpass').value;
   if(pass==password){
       getE('block2').style.display="none";
       getE('blockpas').style.display="none";
   }else{
       getE('enterpass').value="";
       getE('notpass').style.display="block";
   }
}
















