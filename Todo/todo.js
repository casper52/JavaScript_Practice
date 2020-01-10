// to do 목록에 item 추가
function get_list(){
    if(window.event.keyCode == 13){
        var input = document.getElementById("valin").value;
        var listplus = document.createElement("li");
        listplus.innerHTML = "<a onclick=move_list(\""+input+"\");\>"+input+"</a>";
        document.getElementById("inlist").appendChild(listplus);
        document.getElementById("valin").value = "";
    }
}

// done list에 완료 item 추가
function move_list(listplus){
   var doneItem = document.createElement("li");
   doneItem.innerHTML = listplus;
   document.getElementById("donelist").appendChild(doneItem); 

   inlist.childNodes[1].remove(); // to do 목록에서 완료 item 삭제
   
}