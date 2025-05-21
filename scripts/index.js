const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");

const profileAddBtn = document.querySelector("profile__add-btn");
const profileAddModal = document.querySelector("#profile__add-btn");
//const profileAddCloseBtn

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__discription");

profileEditBtn.addEventListener("click", function () {
  //editProfileName.value = profileNameEl.textContent;
  //editProfileDescription.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

profileAddBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
  ij;
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  console.log("submitting");
}

editProfileForm.addEventListener("submit");
