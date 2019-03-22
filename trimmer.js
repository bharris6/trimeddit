const divs = document.getElementsByClassName("usertext-body");
for (var d = 0; d < divs.length; d++) {
    try {
        var children = divs[d].getElementsByTagName("p");
         
        for(var i = children.length-1; i >= 0; i--){
            var new_html = children[i].innerHTML.replace(/(\&nbsp;|\u200B|\<br*\>)/g, '');
            if (new_html.length < 1) {
                    children[i].remove();
            }
            else {
                    children[i].innerHTML = new_html
                    break;
            }
        }
    }
    catch(err) {
        console.log("Error: " + err);
        console.log("d: " + divs[d]);
    }
}
