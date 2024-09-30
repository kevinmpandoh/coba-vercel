const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   Ambil value dari Select
  const skill = document.querySelector("#skill");
  const value = skill.value;
  console.log(value);

  let footer = document.querySelector("footer");
  let header = document.querySelector("header");
  let h2 = document.querySelectorAll("h2");
  let root = document.documentElement;

  //   Ubah warna
  if (value === "HTML") {
    // header.style.backgroundColor = "red";
    // footer.style.backgroundColor = "red";
    // for (let i = 0; i < h2.length; i++) {
    //   h2[i].style.color = "red";
    // }
    root.style.setProperty("--text-color", "pink");
    root.style.setProperty("--primary-color", "black");
  } else if (value === "CSS") {
    header.style.backgroundColor = "blue";
    footer.style.backgroundColor = "blue";
    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "blue";
    }
  } else if (value === "Javascript") {
    header.style.backgroundColor = "yellow";
    footer.style.backgroundColor = "yellow";
    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "yellow";
    }
  } else {
    header.style.backgroundColor = "green";
    footer.style.backgroundColor = "green";
    for (let i = 0; i < h2.length; i++) {
      h2[i].style.color = "green";
    }
  }
});
