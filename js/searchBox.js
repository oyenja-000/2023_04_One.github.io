// const searchBtn = document.getElementById("search-btn");
// const searchContainer = document.querySelector(".search-container");
// const searchBox = document.querySelector(".search");

// searchBtn.addEventListener("click", function() {
//   searchContainer.classList.toggle("active");
//   searchBox.classList.toggle("active");
// });


document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}