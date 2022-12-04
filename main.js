const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

function myfun() {
  var a1 = document.getElementById("for-email").value;
  if (a1 < 1) {
    alert("Please Enter Valid E-mail Address for Subscribe us");
    return false;
  } else {
    alert("Thank You For Subscribe Us By Using This Email " +a1+".")
    return false;
  }
}

function refresh(){
  if(confirm("Are You Sure, You Want To Refresh!!!"))
  {
    location.reload();
  }
}