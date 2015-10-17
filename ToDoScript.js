addTask = function() {
var litext = document.createTextNode(document.querySelector('#taskenter').value);
var listitem = document.createElement("li");
var cbox = document.createElement("input");
cbox.type = "checkbox";
cbox.onclick = completeTask;
listitem.appendChild(cbox);
listitem.appendChild(litext);
var ulsection1 = document.querySelector('#unlist');
ulsection1.appendChild(listitem);



}
completeTask = function(){
  this.parent.className = "done";
}
