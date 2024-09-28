
let vez = 1
let lastPlayer = 1

let player1 = []
let player2 = []

let player1Turn = document.querySelector(".player1")
let player2Turn = document.querySelector(".player2")

function checkTurn(){
    console.log(vez)
    if(vez === 1){
        player1Turn.classList.add("active")
        if(player2Turn.classList.contains("active")){
            player2Turn.classList.remove("active")
        }
    }else if(vez === 2){
        player2Turn.classList.add("active")
        if(player1Turn.classList.contains("active")){
            player1Turn.classList.remove("active")
        }

    }
}
checkTurn()
function select(e) {
    if (vez === 1) {
        if(e.children[0].innerHTML === ""){
            player1Turn.classList.add("active")
            e.children[0].innerHTML = "x"
            player1.push(e)
            if(player1.length > 3){
                removeItem(player1[0])
                player1.shift()
            }
            checkWin()
            vez = 2
            checkTurn()
        }
        return
    } else if (vez === 2) {
        if(e.children[0].innerHTML === ""){
            e.children[0].innerHTML = 'o'
            player2.push(e)
            if(player2.length > 3){
                removeItem(player2[0])
                player2.shift()
            }
            checkWin()
            vez = 1
            checkTurn()

        }return
    }
}
function removeItem (item){
    item.children[0].innerHTML = ''
}
function checkWin() {
    let btn1 = document.getElementById("btn1").children[0].innerHTML
    let btn2 = document.getElementById("btn2").children[0].innerHTML
    let btn3 = document.getElementById("btn3").children[0].innerHTML
    let btn4 = document.getElementById("btn4").children[0].innerHTML
    let btn5 = document.getElementById("btn5").children[0].innerHTML
    let btn6 = document.getElementById("btn6").children[0].innerHTML
    let btn7 = document.getElementById("btn7").children[0].innerHTML
    let btn8 = document.getElementById("btn8").children[0].innerHTML
    let btn9 = document.getElementById("btn9").children[0].innerHTML

    console.log(btn1)
    if (btn1 === 'x' && btn2 === "x" && btn3 === "x" ||
        btn1 === 'x' && btn4 === "x" && btn7 === "x" ||
        btn1 === 'x' && btn5 === "x" && btn9 === "x" ||
        btn2 === 'x' && btn5 === "x" && btn8 === "x" ||
        btn3 === 'x' && btn6 === "x" && btn9 === "x" ||
        btn4 === 'x' && btn5 === "x" && btn6 === "x" ||
        btn3 === 'x' && btn5 === "x" && btn7 === "x" ||
        btn7 === 'x' && btn8 === "x" && btn9 === "x"
    ) {
        alert("1 Win")
    } else if (btn1 === 'o' && btn2 === "o" && btn3 === "o" ||
        btn1 === 'o' && btn4 === "o" && btn7 === "o" ||
        btn1 === 'o' && btn5 === "o" && btn9 === "o" ||
        btn2 === 'o' && btn5 === "o" && btn8 === "o" ||
        btn3 === 'o' && btn6 === "o" && btn9 === "o" ||
        btn4 === 'o' && btn5 === "o" && btn6 === "o" ||
        btn3 === 'o' && btn5 === "o" && btn7 === "o" ||
        btn7 === 'o' && btn8 === "o" && btn9 === "o") {

        alert("2 Win")
    }
}
function restart(){
    window.location.reload()
}