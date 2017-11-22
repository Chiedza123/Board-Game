
if (localStorage) {
 console.log('LocalStorage is supported!');
} else {
  console.log('No support. Use a fallback such as browser cookies or store on the server.');
}
{/* <script>
    document.getElementById('add').onclick = function(){
    alert(1);
    var text = document.getElementById('players').value;     
    var node = document.createElement("li");    
    var textNode = document.createTextNode(text);    
    node.appendChild(textNode);     
    document.getElementById('list').appendChild(node);
    localStorage.setItem('text', text);
  };
</script> */}
 // function showInput() {
//     document.getElementById('display').innerHTML = 
//                 document.getElementById("nameOfPlayer").value;
// }



// function showInput() {
//     document.getElementById('display').innerHTML = 
//                 document.getElementById("gameName").value;
// }

// var x = document.getElementById("form_sample");
// var createform = document.createElement('form'); // Create New Element Form
// createform.setAttribute("action", ""); // Setting Action Attribute on Form
// createform.setAttribute("method", "post"); // Setting Method Attribute on Form
// x.appendChild(createform);

// var heading = document.createElement('h2'); // Heading of Form
// heading.innerHTML = "Add Players";
// createform.appendChild(heading);

// var line = document.createElement('hr'); // Giving Horizontal Row After Heading
// createform.appendChild(line);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// function showInput() {
//     document.getElementById('display').innerHTML = 
//                 document.getElementById("user_input").value;
// }
// var namelabel = document.createElement('label'); // Create Label for Name Field
// namelabel.innerHTML = "Enter Game Name : "; // Set Field Labels
// createform.appendChild(namelabel);

// var inputelement = document.createElement('input'); // Create Input Field for Name
// inputelement.setAttribute("type", "text");
// inputelement.setAttribute("name", "dname");
// createform.appendChild(inputelement);

// var line = document.createElement('hr'); // Giving Horizontal Row After Heading
// createform.appendChild(line);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var namelabel = document.createElement('label'); // Create Label for Name Field
// namelabel.innerHTML = "Player's Name : "; // Set Field Labels
// createform.appendChild(namelabel);

// var inputelement = document.createElement('input'); // Create Input Field for Name
// inputelement.setAttribute("type", "text");
// inputelement.setAttribute("name", "dname");
// createform.appendChild(inputelement);

// var linebreak = document.createElement('br');
// createform.appendChild(linebreak);

// var submitelement = document.createElement('input'); // Append Submit Button
// submitelement.setAttribute("type", "submit");
// submitelement.setAttribute("name", "dsubmit");
// submitelement.setAttribute("value", "Submit");
// createform.appendChild(submitelement);
