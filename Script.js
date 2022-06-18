//To do: Clear the board once a winner has been determined
window.addEventListener("load",start)
let turn = 0; //Determine which turn is it. even x's turn, odd 0's turn
let positions = new Array(9)
let handler = function(){put_mark(this)}
let positions_X = new Set()
let positions_0 = new Set()

const winner_pos = [[0,1,2], [3,4,5],[6,7,8],
                 [0,3,6], [1,4,7],[2,5,8],
                 [0,4,8], [6,4,2]]
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
    
    let row_index = cel.parentElement.rowIndex
    let position = 3*row_index + cel.cellIndex
    
    if(turn%2==0)
    {
        cel.innerText = "X"
        positions_X.add(position)
        if(check_winner(positions_X))
        {
            alert("X winner")
        }
    } 
    else
    {
        cel.innerText = "0"
        positions_0.add(position)
        if(check_winner(positions_0))
        {
            alert("0  winner")
        }
    }

    turn = turn + 1
    cel.removeEventListener("click", handler)
    if(turn==9)
    {
        alert("Draw")
    }
}

function check_winner(player_pos)
{
   let winner = false
   for(let i = 0; i<winner_pos.length && winner==false; i++)
   {
        winner = true
        for(let j = 0; j<winner_pos[i].length; j++)
        {
            if(!player_pos.has(winner_pos[i][j]))
            {
                winner = false
                break
            }
        }
   }
   return winner
}