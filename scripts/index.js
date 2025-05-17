const profileEditbtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__discription");

profileEditbtn.addEventListener("click", function () {
  editProfileNameInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal__is-opened");
});


