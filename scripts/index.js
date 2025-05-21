const profileEditBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(".profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-name-input");
// - select based on id

const profileAddBtn = document.querySelector(".profile__add-btn");
const profileAddModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = profileAddModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

profileEditBtn.addEventListener("click", function () {
  //editProfileNameInput.value = profileNameEl.textContent;
  //editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});

profileAddBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
});

newPostBtn.addEventListener("click", function () {
  ProfileAddModal.classList.remove("modal_is-opened");
  ij;
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  //TODO - Handler the other
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
