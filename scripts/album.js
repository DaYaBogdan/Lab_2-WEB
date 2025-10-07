const rowLength = 4;
const imagesLength = 15;

listOfNames = [
  "Mak",
  "Sebastian Schuster",
  "Yuri Krupenin",
  "Tomasz Brengos",
  "Alissa Schilling",
  "Shana Van Roosbroek",
  "Evgeni Tcherkasski",
  "Jonas Degener",
  "Leongsan",
  "Jonny Gios",
  "Christian Cueni",
  "Emma Swoboda",
  "Leongsan",
  "Clay Banks",
  "Louis Droege",
];

listOfReferences = [
  "https://unsplash.com/@mak_jp",
  "https://unsplash.com/@sebby88",
  "https://unsplash.com/@cubeofwood",
  "https://unsplash.com/@iwashis",
  "https://unsplash.com/@alissaschh",
  "https://unsplash.com/@shanavaro",
  "https://unsplash.com/@evgenit",
  "https://unsplash.com/@jonasdegener",
  "https://unsplash.com/@leongsan",
  "https://unsplash.com/@supergios",
  "https://unsplash.com/@chrigu",
  "https://unsplash.com/@emmakphoto",
  "https://unsplash.com/@leongsan",
  "https://unsplash.com/@claybanks",
  "https://unsplash.com/@lois184",
];

function makeUniqueElement(elementType, whatID, whoseChild, ...uniqueArgs) {
  const element = document.createElement(elementType);
  element.id = whatID;

  if (elementType === "div") {
    //uniqueArgs должен получить данные о классе div'а
    element.classList.add(uniqueArgs[0]);
  } else if (elementType === "img") {
    //uniqueArgs должен получить данные о нахождении изоображения, его alt и title
    element.src = uniqueArgs[0];
    element.alt = uniqueArgs[1];
    element.title = uniqueArgs[2];
  } else if (/^h.$/.test(elementType)) {
    //uniqueArgs должен получить данные о нахождении тексте
    element.textContent = uniqueArgs[0];
  } else if (elementType === "a") {
    //uniqueArgs должен получить данные о тексте, рефу и таргету
    element.textContent = uniqueArgs[0];
    element.href = uniqueArgs[1];
    element.target = uniqueArgs[2];
  }

  document.getElementById(whoseChild).appendChild(element);
}

function renderAlbum() {
  for (var i = 0; i < imagesLength / rowLength; i++) {
    makeUniqueElement("div", "row_" + i, "strip", "image-row");

    for (var j = i * rowLength; j < (i + 1) * rowLength && j < imagesLength; j++) {
      makeUniqueElement("div", "block_" + j, "row_" + i, "image-block");

      //Установка изображения
      makeUniqueElement(
        "img",
        "img_" + j,
        "block_" + j,
        "../images/album/album_" + (j + 1) + ".jpg",
        "Фото принадлежит " + listOfNames[j] + " с Unsplash",
        "Фото принадлежит " + listOfNames[j] + " с Unsplash"
      );

      //Далее текст под изображением
      makeUniqueElement("h3", "text_" + j + ".1", "block_" + j, "Фото ");

      makeUniqueElement(
        "a",
        "anchor_" + j,
        "text_" + j + ".1",
        listOfNames[j],
        listOfReferences[j],
        "_blank"
      );

      makeUniqueElement("h3", "text_" + j + ".2", "block_" + j, " с Unsplash");
    }
  }
}
