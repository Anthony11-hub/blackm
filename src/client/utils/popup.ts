document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("open-modal")!;
  const closeModalBtn = document.getElementById("close-modal-btn")!;
  const openModalBtn = document.getElementById("open-modal-btn")!;

  if (modal) {
    openModalBtn.addEventListener("click", () => {
      modal.style.visibility = "visible";
      modal.style.opacity = "1";
      modal.style.pointerEvents = "auto";
    });

    closeModalBtn.addEventListener("click", () => {
      modal.style.visibility = "hidden";
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
    });
  }
});
