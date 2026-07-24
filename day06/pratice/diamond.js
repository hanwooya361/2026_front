let result = "";

    // 1개 ~ 10개
    for (let line = 1; line <= 10; line++) {
      let spaces = "";
      let stars = "";

      for (let space = 1; space <= 10 - line; space++) {
        spaces += " ";
      }

      for (let star = 1; star <= line; star++) {
        stars += "*";

        if (star < line) {
          stars += " ";
        }
      }

      result += spaces + stars + "\n";
    }

    // 9개 ~ 1개
    for (let line = 9; line >= 1; line--) {
      let spaces = "";
      let stars = "";

      for (let space = 1; space <= 10 - line; space++) {
        spaces += " ";
      }

      for (let star = 1; star <= line; star++) {
        stars += "*";

        if (star < line) {
          stars += " ";
        }
      }

      result += spaces + stars + "\n";
    }

    document.querySelector("#star").innerHTML = result;