let counter = 2;
const handleClick = function (e) {
  console.log("BOTTONE 1 CLICCATO", e);
};

const handleMouseEnter = function (e) {
  console.log("mouse sopra bottone 1", e);
};
const createThirdButton = function () {
  const newButton = document.createElement("button");
  counter = counter + 1;
  newButton.innerText = "BOTTONE " + counter;
  newButton.addEventListener("click", (e) => {
    console.log(` BOTTONE $ {counter} CLICCATO`, e);
    createImage();
  });

  const buttonArea = document.getElementById("button-area");

  buttonArea.appendChild(newButton);
};

const createImage = function () {
  console.log("FUNZIONA!");
  //1) creare l'immagine
  const newImage = document.createElement("img");
  // 2)diamole l'immagine
  newImage.setAttribute(
    "src",
    "https://th.bing.com/th?id=OIP.2GN5mXbnsMIHfVDOxAcfjgHaJN&w=224&h=278&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
  );
  //3) diamole una classe CSS
  newImage.classList.add("img-dog");
  //4)diamole una descrizione "alt"
  newImage.setAttribute("alt", "Immagine di cane");
  //5)rendiamola sensibile al passaggio del mouse
  newImage.addEventListener("mouseenter", () => {
    console.log("mouse sopra il doggo");
    //ingrandiamo leggermente l'immagine
    newImage.classList.add("bigger");
  });
  newImage.addEventListener("mouseleave", () => {
    // quando il cursore esce...
    newImage.classList.remove("bigger");
  });
  //6) pronta! dobbiamo appenderla ora nella pagina
  const container = document.getElementById("img-container");
  container.appendChild(newImage);
};

// creiamo ora il terzo bottone automaticamente all'avvio della pagina
createThirdButton();
