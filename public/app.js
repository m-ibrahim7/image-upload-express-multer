const form = document.querySelector('#uploadForm');
const input = document.querySelector('#input');
const imagesContainer = document.querySelector("#images")

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('image', input.files[0]);
  let url = 'http://localhost:3010/upload'
  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(responseText => {
    // console.log(responseText);
    let image = document.createElement('div');
    image.classList.add('abc');
    image.innerHTML=`
    <img src="${responseText}">
    `
    imagesContainer.appendChild(image)

  })
  .catch(error => console.error('Error uploading image:', error));
});

