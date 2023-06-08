document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault(); 
  
    let data = {
        name: document.getElementById("name").value,
        tel: document.getElementById("tel").value,
        email: document.getElementById("email").value,
        age: document.getElementById("age").value,
        note: document.getElementById("note").value,
        checkbox: document.getElementById("checkbox").value
    };

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://webhook.site/4dbb5e86-4f71-40ac-8257-ac5478b67f65", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

    setTimeout( () => {
        location.reload()
    }, 1000);
  });

  document.querySelector(".close-button").addEventListener("click", () => {
    var form = document.getElementById("container")
    form.style.display = "none"
  })