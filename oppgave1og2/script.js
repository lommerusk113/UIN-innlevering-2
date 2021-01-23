function add(){
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;
    if (title == "" || content == ""){
        return
    }

    let art = document.createElement("article");
    art.className = "box";

    let head = document.createElement("h3");
    t = document.createTextNode(title)
    head.appendChild(t)

    let con = document.createElement("p");
    c = document.createTextNode(content)
    con.appendChild(c)

    let sub = document.createElement("input")
    sub.className = "complete";
    sub.type = "submit"
    sub.value = "Complete";
    sub.onclick = function(){complete(this)}

    art.appendChild(head);
    art.appendChild(con);
    art.appendChild(sub);

    art.style.height = "125px"
    art.style.width = "220px"

    document.getElementById("con").appendChild(art);

}
function complete(n){
    n.parentNode.parentNode.removeChild(n.parentNode);
}