function generateMeme() {
    const name = document.getElementById("nameInput").value;
    if (!name) {
        alert("Please enter your name!");
        return;
    }

    const canvas = document.getElementById("memeCanvas");
    const ctx = canvas.getContext("2d");

    // Load meme template
    const img = new Image();
    img.src = "meme_template.jpg"; // Replace with your own meme image

    img.onload = function () {
        // Set canvas size to match image
        canvas.width = img.width;
        canvas.height = img.height;

        // Draw image
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Text settings
        ctx.font = "50px Algerian";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";

        // Position text (near top but not too high)
        const x = canvas.width / 2;
        const y = 90; // Adjust this value if needed

        // Add stroke and text
        ctx.strokeText(name, x, y);
        ctx.fillText(name, x, y);

        // Show download button
        const downloadBtn = document.getElementById("downloadBtn");
        downloadBtn.style.display = "block";
        downloadBtn.href = canvas.toDataURL();
    };
}
