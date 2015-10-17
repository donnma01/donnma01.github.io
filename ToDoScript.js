addTask = function() {
var litext = document.createTextNode(document.querySelector('#taskenter').value);
var listitem = document.createElement("li");
listitem.appendChild(litext);
var ulsection1 = document.querySelector('#unlist');
ulsection1.appendChild(listitem);



}
