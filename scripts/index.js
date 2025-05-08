const profileEditbtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

profileEditbtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal__is-opened");
});

modalCloseBtn.addEventListener("click", function () {
  editProfileCloseBtn.classList.add("modal__close-btn");
});
