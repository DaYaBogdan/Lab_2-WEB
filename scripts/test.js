const integerPattern = /^-?\d+$/;

function check(str, pattern) {
  return pattern.test(str);
}

function errorElement(element) {
  element.classList.add("error");

  element.addEventListener(
    "animationend",
    () => {
      element.classList.remove("error");
    },
    {once: true}
  );
}

function prepareForm() {
  const secondAnswer = document.getElementById("secondAnswer");

  if (!check(secondAnswer.value, integerPattern)) {
    errorElement(secondAnswer);
    return;
  }

  document.getElementById("testForm").requestSubmit();
}
