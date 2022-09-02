document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").textContent = data.activity
        document.getElementById('title').textContent = "🤖 Happy Bot 🤖"
        document.body.classList.add('fun')
        document.getElementById('get-activity').classList.add('new-btn')
        document.getElementById('get-activity').textContent = 'New Activity'


      })
  })