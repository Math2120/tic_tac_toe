// on récupère le titre
let title = document.getElementById("title")

// récupérer le contenant
let grid = document.querySelector(".grid")

// on récupère le bouton
let button = document.getElementById("button")

// on récupère le "turn"
let turn = document.getElementById("turn")

// on récupère toutes les boxs, puis une par une
let boxes = document.querySelectorAll(".box")

let winning_combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

for(let x = 0; x < boxes.length; x++) {
    let box = document.getElementById(x)
    box.addEventListener("click", function() {
        // quand on appuie sur une case cela met un "x"
        // ou un "o" en fonction du tour
        if(turn.innerText === "Turn : x" && box.innerText === "") {
            box.innerText = "x"
            turn.innerText = "Turn : o"
        }
        if(turn.innerText === "Turn : o" && box.innerText === "") {
            box.innerText = "o"
            turn.innerText = "Turn : x"
        }
        for(let w = 0; w < winning_combos.length; w++) {
            let a = winning_combos[w][0]
            let b = winning_combos[w][1]
            let c = winning_combos[w][2]

            // Vérification des conditions de victoire
            for (let combo of winning_combos) {
                    let [a, b, c] = combo;
                    if (boxes[a].innerText && boxes[a].innerText === boxes[b].innerText && boxes[b].innerText === boxes[c].innerText) {
                        if(boxes[c].innerText === "x") {
                            // alert("Les x ont gagné")
                            title.innerText = "TicTacToe - Victory by x"
                        }
                        if(boxes[c].innerText === "o") {
                            // alert("Les o ont gagné")
                            title.innerText = "TicTacToe - Victory by o"
                        }
                        let condition = true
                        // Vous pouvez ajouter ici le code pour gérer la fin du jeu
                        for(let x = 0; x < boxes.length; x++) {
                            let box = document.getElementById(x)
                            box.removeEventListener("click", function() {})
                        }
                        break;

                }
            }
            if(condition = true) {
                break;
            }
        }    
    })
}

button.addEventListener("click", function() {
    // console.log("function restart")
    for(let y = 0; y < boxes.length; y++) {
        boxes[y].innerHTML = ""
        turn.innerText = "Turn : x"
    }
})

function main() {
    // fonction qui fait démarrer le jeu
    turn.innerText = "Turn : x"
}

main()