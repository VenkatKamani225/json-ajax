var btn=document.getElementById("btn");
var clr = document.getElementById("clr");
var str = document.getElementById("animal-info");
var linksCounter=1;
btn.addEventListener("click",function(){
	var ourRequest= new XMLHttpRequest();
	ourRequest.open("GET","https://learnwebcode.github.io/json-example/animals-"+linksCounter+".json");
	ourRequest.onload=function(){
		var data = JSON.parse(ourRequest.responseText);
		renderHTML(data);
	};
    console.log("Success");
    ourRequest.send();
	linksCounter++;
	
	if(linksCounter>3){
		btn.style.display="none";
	}
    
    
    //ourRequest.send();
});

clr.onclick=()=>{
	str.innerHTML="";
	linksCounter=1;
	btn.style.display="";
}
function renderHTML(datas){
	
	var strin="";
		for(i = 0;i<datas.length;i++){
			 strin += "<p>"+datas[i].name +" is a "+datas[i].species+"likes ";
			 for(ii=0;ii<datas[i].foods.likes.length;ii++){
				strin+=datas[i].foods.likes[ii]+" ";
			 }
			 for(ii=0;ii<datas[i].foods.dislikes.length;ii++){
				strin+="dislikes "+datas[i].foods.dislikes[ii]+" ";
			 }
			 strin+=".</p>"
		}
		str.insertAdjacentHTML("beforeend",strin);
}