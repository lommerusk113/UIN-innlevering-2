
const str = "Hei. Her er en beskjed til alle studenter. Dette her er en ekstraoppgave dere kan prøve dere på. Her får du prøvd deg på litt HTML, CSS og JavaScript. Knappene nedenfor skal <span>fjerne</span> og <span>legge</span> til ord fra denne listen. Lykke til. Alle 'span'-elementer inne i denne teksten skal ha <span>bold og ha understrek</span> styling.";

const strlist = str.split(" ")
let i = 0
    
function display(i){
    let lst = strlist.slice(0, i)
    lst = lst.toString()
    lst = lst.replaceAll(","," ").replaceAll(".", ". <br>").replaceAll("HTML", "HTML,")
    document.getElementById("tekst").innerHTML = lst;
}

function update(n){
    i += n
    if (i > strlist.length){
        i = strlist.length
    }else if(i < 0){
        i = 0
    }
    display(i)
}
