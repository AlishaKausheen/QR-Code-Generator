const wrapper = document.querySelector(".wrapper");
let qrInput = wrapper.querySelector(".form input");
let generateBtn = wrapper.querySelector(".form button");
let qrImg = wrapper.querySelector(".qr-code img");
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue)
        return; //returns the image that is previously present
    //getting a qr code of user entered value using qr-server
    //api and passing the api returned image src to qrImg
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    wrapper.classList.add("active");
})