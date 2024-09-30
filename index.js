const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   Ambil value dari Select
  const skill = document.querySelector("#skill");
  const value = skill.value;
  console.log(value);

  let footer = document.querySelector("footer");
  let header = document.querySelector("header");
  let section = document.querySelector("section");

  //   Ubah warna
  if (value === "HTML") {
    header.style.backgroundColor = "red";
    footer.style.backgroundColor = "red";
    section.style.color = "red";
  }
});
