document.getElementById("fetch-image").addEventListener("click", fetchDogImage);

function fetchDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      displayDogImage(data.message);
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
    });
}

function displayDogImage(imageUrl) {
  const dogImageDiv = document.getElementById("dog-image");
  dogImageDiv.classList.remove("hidden");
  dogImageDiv.innerHTML = `<img src="${imageUrl}" alt="Random Dog" class="img-fluid">`;
}
