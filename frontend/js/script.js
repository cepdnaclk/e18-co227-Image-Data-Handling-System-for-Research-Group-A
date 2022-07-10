

const forms = document.querySelector(".forms"),  //selecting 
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})

const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

  searchBar.addEventListener("keyup", () => {
    if(searchBar.value && clearIcon.style.visibility != "visible"){
      clearIcon.style.visibility = "visible";
    } else if(!searchBar.value) {
      clearIcon.style.visibility = "hidden";
    }
  });

  clearIcon.addEventListener("click", () => {
    searchBar.value = "";
    clearIcon.style.visibility = "hidden";
  })

/* var button = getElementById("LoginForm").getElementById("signup");
button.onclick = function(){
        var username = LoginForm.getElementById("name").innerHTML;
        window.location.href = "Main.html";
        window.alert("hello");
        document.getElementById("displayname").innerHTML = username;
        
} */

const firstName = document.querySelector("#fname").value;
const outputName = document.querySelector("#displayname");
const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", () => {
  outputName.value = firstName;
  outputName.style.visibility = "visible";
})

// function signup(){
//     window.location.href = "Main.html";
//     var name = document.getElementById("fname").value;
//     document.getElementById("displayname").innerText = name;

    
}
/* links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
}) */