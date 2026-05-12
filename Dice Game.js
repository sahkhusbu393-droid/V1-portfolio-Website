 function rollDice() {
      let dice1 = Math.floor(Math.random() * 6) + 1;
      let dice2 = Math.floor(Math.random() * 6) + 1;

      document.getElementById("player1").textContent = getDiceFace(dice1);
      document.getElementById("player2").textContent = getDiceFace(dice2);

      if (dice1 > dice2) {
        document.getElementById("result").textContent = "🎉 Player 1 Wins!";
      } else if (dice2 > dice1) {
        document.getElementById("result").textContent = "🎉 Player 2 Wins!";
      } else {
        document.getElementById("result").textContent = "🤝 It's a Draw!";
      }
    }

    function getDiceFace(num) {
      let faces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
      return faces[num - 1];
    }