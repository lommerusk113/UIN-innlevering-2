function add(){
    title = document.getElementById('title').value;
    content = document.getElementById('content').value;
    if (title == "" || content == ""){
        return
    }

    art = document.createElement("article");
    art.className = "box";

    head = document.createElement("h3");
    t = document.createTextNode(title)
    head.appendChild(t)

    con = document.createElement("p");
    c = document.createTextNode(content)
    con.appendChild(c)

    sub = document.createElement("input")
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