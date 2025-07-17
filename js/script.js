
    function startApp() {
      const name = document.getElementById('userName').value.trim();
      if (name === "") {
        alert("Please enter your name.");
        document.getElementById('userName').focus();
        return;
      }
      localStorage.setItem("todoUser", name);
      window.location.href = "todo.html";
    }

    // Add Enter key support
    document.getElementById('userName').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('continueBtn').click();
      }
    });

setTimeout(() => {
  console.log(
    "%c✨ Designed and Developed by Harsh Pandey",
    "color: #007bff; font-weight: bold; font-size: 16px;"
  );
  console.log(
    "%c🔗 https://lucifer01430.github.io/Portfolio/",
    "color: #28a745; font-size: 14px;"
  );
}, 2000);



  