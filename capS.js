const tesseract = require("node-tesseract-ocr")

const img = "https://i.ibb.co/jTKYQqP/Captcha-United.png"

const config = {
  lang: "eng",
  oem: 1,
  psm: 3,
}

tesseract
  .recognize(img, config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })
