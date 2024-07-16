window.onload=function()
{
    prepare();
}

function prepare()
{
    if(!document.getElementsByTagName||!document.getElementById||!document.getElementById("image"))
        return false;
    var links=document.getElementById("image").getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        links[i].onclick = function ()
        {
            return show_pic(this) ? false : true;
        }
    }
}

function show_pic(whichpic)
{
    if(!(document.getElementById("placeholder")))
        return false;
    var source=whichpic.getAttribute("href");

    var placeholder;
    placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    var text = whichpic.getAttribute("title");
    //text = text ? text : "";

    var description = document.getElementById("d");
    if (description.firstChild.nodeType == 3)
        description.firstChild.nodeValue = text;

    return true;
}