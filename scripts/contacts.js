const FIOPattern = /^[А-ЯЁа-яёA-Za-z]+ [А-ЯЁа-яёA-Za-z]+ [А-ЯЁа-яёA-Za-z]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const numberPattern = /^\+(7|3)\d{9,11}$/;

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
  var errorFlag = 0;
  const FIO = document.getElementById("FIO");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");

  if (!check(FIO.value, FIOPattern)) {
    errorElement(FIO);
    errorFlag = 1;
  }
  if (!check(email.value, emailPattern)) {
    errorElement(email);
    errorFlag = 1;
  }
  if (!check(phone.value, numberPattern)) {
    errorElement(phone);
    errorFlag = 1;
  }

  if (!errorFlag) {
    document.getElementById("contactForm").requestSubmit();
  }
}
