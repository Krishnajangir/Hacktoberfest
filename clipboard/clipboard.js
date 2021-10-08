const btn = document.querySelector(".copy-btn");
const text = document.querySelector(".copy-text");

btn.addEventListener("click", () =>{
  text.select();
  text.setSelectionRange(0, 10000);
  document.execCommand("copy");
  btn.classList.toggle("copied");
  btn.innerHTML = "Copied!";

  setTimeout(function(){
    btn.classList.toggle("copied");
    btn.innerHTML = "Copy";
  }, 3000);
});

