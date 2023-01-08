let listItems = document.querySelectorAll("li"); //con querySelectorAll si puedo usar la función forEach

listItems.forEach((li) => {
  li.addEventListener("click", handleClick);
});

function handleClick(event) {
  if (event.ctrlKey) {
    event.target.classList.toggle("selected");

  } else {
    if (event.target.classList.contains("selected")) {
      listItems.forEach((li) => {
        li.classList.remove("selected");
      });

    } else {
      listItems.forEach((li) => {
        li.classList.remove("selected");
      });
      event.target.classList.add("selected");
    }
  }
}


//Evita también la selección nativa del navegador en los clicks.
listItems.onmousedown = function () {
 return false;
};
