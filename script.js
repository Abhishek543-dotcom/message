// Open Proposal Popup
document.getElementById("proposalBtn").addEventListener("click", function() {
    document.getElementById("proposalPopup").style.display = "flex";
  });
  
  // Handle Yes Button Click
  document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("proposalPopup").style.display = "none";
    document.getElementById("confirmationMessage").style.display = "flex";
  
    // Send Email via EmailJS
    emailjs.send("", "", {
      to_name: "Your Name",
      from_name: "Ayushi",
      message: "Ayushi said YES! 💖"
    }).then(function(response) {
      console.log("Email sent successfully!", response);
    }, function(error) {
      console.log("Failed to send email.", error);
    });
  });
  
  // Handle No Button Click (Playful Logic)
  document.getElementById("noBtn").addEventListener("click", function() {
    const noBtn = document.getElementById("noBtn");
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  });


  document.getElementById("proposalBtn").addEventListener("click", function() {
    console.log("Button clicked!"); // Debugging: Check if this logs in the console
    document.getElementById("proposalPopup").style.display = "flex";
  });