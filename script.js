var input = document.getElementById("userInput");

function makeOutputElement(event){
	if(event.key == "Enter"){
		const newp = document.createElement("p");
		const newContent = document.createTextNode("Hi there")
		newp.appendChild(newContent)
		const currStuff = document.getElementById("userInput")
		document.body.insertAfter(currStuff, newp)
		
	}
}

input.addEventlistener("keypress", produceOutput(event));