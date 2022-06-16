window.addEventListener("load",start)
let cel0
function start()
{
    cel0 = document.getElementById("test")
    cel0.addEventListener("click", put_mark)
}

function put_mark()
{
    cel0.innerText ="X"
    cel0.removeEventListener()
}
