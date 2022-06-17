
window.addEventListener("load",start)
let turn = 0; //Determine which turn is it. even x's turn, odd 0's turn
let positions = new Array(9)
let handler = function(){put_mark(this)}


function start()
{

    for(let i = 0; i<positions.length; i++)
    {
        positions[i]= document.getElementById("cel" + i)
        positions[i].addEventListener("click",handler)
    }
    
   
}

function put_mark(cel)
{ 
    if(turn%2==0)
    {
        cel.innerText = "X"
    } 
    else
    {
        cel.innerText = "0"
    }
    turn = turn + 1
    cel.removeEventListener("click", handler)
}
