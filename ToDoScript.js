addTask = function() {
var litext = document.createTextNode(document.querySelector('#taskenter').value);
var listitem = document.createElement("li");
var cbox = document.createElement("input");
cbox.type = "checkbox";
listitem.appendChild(cbox);
listitem.appendChild(litext);
cbox.onclick = completeTask;
var ulsection1 = document.querySelector('#unlist');
ulsection1.appendChild(listitem);



}
completeTask = function(){
  this.parentNode.className = "done";
}
