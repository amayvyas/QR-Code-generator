// Function to convert text to a QR code
function convertToQR(text) {
    return new Promise((resolve, reject) => {
        QRCode.toDataURL(text, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url);
            }
        });
    });
}

// Function to generate and display the QR code
function generateQRCode() {
    const textInput = document.getElementById("text-input").value.trim();
    const qrContainer = document.getElementById("qr-container");

    if (!textInput) {
        alert("Please enter valid text or URL!");
        return;
    }

    // Clear the previous QR code
    qrContainer.innerHTML = "";

    convertToQR(textInput)
        .then(qrCodeUrl => {
            const img = document.createElement("img");
            img.src = qrCodeUrl;
            img.alt = "QR Code";
            qrContainer.appendChild(img);
        })
        .catch(err => {
            console.error("Error generating QR code:", err);
        });
}