const features = document.querySelector(".featuresBtn");
const company = document.querySelector(".companyBtn");

function handleClick(e) {
  e.preventDefault();
  const divFeatures = document
    .querySelector(".linksFeatures")
    .classList.toggle("none");
  const divCompany = document
    .querySelector(".linksCompany")
    .classList.add("none");
}
function handleClick2(e) {
  e.preventDefault();
  const divCompany = document
    .querySelector(".linksCompany")
    .classList.toggle("none");
  const divFeatures = document
    .querySelector(".linksFeatures")
    .classList.add("none");
}

features.addEventListener("click", handleClick);
company.addEventListener("click", handleClick2);
