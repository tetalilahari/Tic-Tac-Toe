// let boxes = document.querySelectorAll(".box");
// let reset = document.querySelector("#res");
// let newbutton=document.querySelectorAll("#new");
// let msgcontainer=document.querySelectorAll(".msg-container");
// let msg=document.querySelectorAll("#msg");

// let turnO = true; // player O, player X

// const winpatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("box was clicked");
//         if (box.innerText !== "") return; // prevent overwriting

//         if (turnO) {
//             box.innerText = "O";
//             turnO = false;
//         } else {
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         checkwinner();
//     });
// });
// const showwinner=(winner)=>{
//     msg.innerText=`Congratulations,winner is ${winner}`;
//     msgcontainer.classlist.remove("hide");
// }
// const checkwinner = () => {
//     for (let pattern of winpatterns) {
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val = boxes[pattern[2]].innerText;

//         if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
//             if (pos1val === pos2val && pos2val === pos3val) {
//                 console.log("Winner is", pos1val);
//                 // Optional: disable all boxes here if you want
//                 showwinner(pos1val);
//             }
//         }
//     }
// };
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#res");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player O, player X

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; // Prevent double click

        console.log("box was clicked");

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        checkwinner();
    });
});

// Check winner logic
const checkwinner = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner is", pos1val);
            showWinner(pos1val);
            disableBoxes();
            break;
        }
    }
};

// Show winner on screen
const showWinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

// Disable all boxes after win
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

// Reset the game when clicking Reset Game button
reset.addEventListener("click", () => {
    resetGame();
});

// New Game logic for new game button
newGame.addEventListener("click", () => {
    resetGame();
});

// Reset the game
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    msgContainer.classList.add("hide");
};
