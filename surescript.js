document.getElementById('send-button').addEventListener('click', checkCode);

function checkCode() {
    const inputCode = document.getElementById('codeInput').value;
    const correctCode = "080522";  
    if (inputCode === correctCode) {
        window.location.href = "confession.html"; 
    } else {
        alert("are you sure?");
    }
}