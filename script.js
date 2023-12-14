window.addEventListener("keypress", function(e){
   if(e.key == "Enter"){
       //Produce Requested Content/Action
       const currentDiv = document.getElementById("currentDiv")
       const currentInput = document.getElementById("currentInput")
       const currentInputValue = String(currentInput.value)
       console.log(currentInputValue)
       if (currentInputValue === "about age") {
           const newh1 = document.createElement("h1")
           const newText = document.createTextNode("14")
           newh1.append(newText)
           currentDiv.append(newText)
       } else if (currentInputValue === "world") {
       }
       //Create New Input
       const newDiv = document.createElement("div")
       const newInput = document.createElement("input")
       newDiv.append(newInput)
       document.body.insertBefore(newDiv, currentDiv)
       //Change IDs
       currentDiv.id = "done"
       newDiv.id = "currentDiv"
       currentInput.id = "done"
       newInput.id = "currentInput"
   }
})
