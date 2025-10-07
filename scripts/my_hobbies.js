const topics = ["Хобби", "Книги", "Музыка", "Фильмы"];

const listForTopics = [
  ["программирование", "ожумания"],
  ["прэс"],
  ["Дотка", "Спат", "Слушат Серёгу Пирата"],
  [
    "В Лимбус Играт",
    "Для меня особенно важны занятия, которые позволяют отключиться от суеты и" +
      "погрузиться в мир творчества. Я люблю фотографировать природу: в этом есть что-то" +
      "медитативное — ловить свет, тени, движение облаков. Также увлекаюсь чтением научной" +
      "фантастики, где можно встретить идеи, которые заставляют задуматься о будущем и границах" +
      "возможного. В свободное время я играю на гитаре. Музыка помогает выразить эмоции, которые" +
      "трудно передать словами. Иногда пробую себя в рисовании — не ради результата, а ради" +
      "процесса. А ещё мне нравится гулять по новым местам, особенно в одиночестве: это даёт" +
      "ощущение свободы и внутреннего диалога. Хобби — это не просто развлечение, это способ быть",
  ],
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
    if (uniqueArgs[1]) element.style = uniqueArgs[1];
  } else if (elementType === "a") {
    //uniqueArgs должен получить данные о тексте, рефу и таргету
    element.textContent = uniqueArgs[0];
    element.href = uniqueArgs[1];
    element.target = uniqueArgs[2];
    if (uniqueArgs[4]) element.style = uniqueArgs[1];
  } else if (elementType === "ol") {
  } else if (elementType === "ul") {
  } else if (elementType === "li") {
  }

  document.getElementById(whoseChild).appendChild(element);
}

function renderTopics() {
  makeUniqueElement("div", "topics_row", "strip", "image-row");
  for (var i = 0; i < topics.length; i++) {
    makeUniqueElement("h1", "topic_" + i, "topics_row", "");
    makeUniqueElement("a", "topic_anchor_" + i, "topic_" + i, topics[i], "#" + topics[i], "_self");
  }
}

function renderList(index, undefinedList) {
  makeUniqueElement("ol", "o_list_" + index, "u_list_element_" + index);
  makeUniqueElement("h3", "o_list_element_" + index + "_font", "o_list_" + index);
  for (var j = 0; j < undefinedList.length; j++) {
    makeUniqueElement(
      "li",
      "o_list_element_" + index + "_" + j,
      "o_list_element_" + index + "_font"
    );

    makeUniqueElement(
      "h3",
      "o_list_element_" + j + "_text",
      "o_list_element_" + index + "_" + j,
      undefinedList[j],
      "text-align: left"
    );
  }
}

function createMyHobbies() {
  renderTopics();

  makeUniqueElement("ul", "u_list", "strip");
  for (var i = 0; i < topics.length; i++) {
    makeUniqueElement("li", "u_list_element_" + i, "u_list");
    makeUniqueElement("h2", topics[i], "u_list_element_" + i, topics[i], "text-align: left");
    renderList(i, listForTopics[i]);
  }
}
