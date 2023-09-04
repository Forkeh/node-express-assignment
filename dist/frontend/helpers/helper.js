"use strict";
function activateButton() {
    document
        .querySelector("#modal-btn.-close")
        ?.addEventListener("click", () => {
        const modal = document.querySelector("#modal");
        modal.close();
    });
}
