var btn = document.getElementById("enter");
var input = document.getElementById("input");
var ul =document.querySelector("ul");

var btnnode = document.querySelectorAll(".btnlist");

var linode=document.querySelectorAll("li");


// To find the input length
function inputLength(){

	return input.value.length;
}

// To add list on Mouse event


function addListAfterClick() {

	if (inputLength() > 0) {
		createListElement();
	}
}


// To add list on Keypress


function addListAfterKeypress(event) {

	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


// To add the entered item to the list
function createListElement(){
	

	var li = document.createElement("li");
	
	li.appendChild(document.createTextNode(input.value));
	var button = document.createElement("button");
	button.classList.add("btnlist");
	button.appendChild(document.createTextNode("X"));
	li.appendChild(button);


	ul.appendChild(li);
	input.value="";

	

	

}

//Delete an Item from the list

function deleteListElement(){

	this.parentNode.remove();

}


//Toggle an Item
function toggleElement(){


	this.classList.toggle("done");

}


btn.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterKeypress);

linode.forEach(function (li){
li.addEventListener("click",toggleElement);
});


btnnode.forEach(function(button){
button.addEventListener("click",deleteListElement);
});