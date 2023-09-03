function openModal() {
    const modal = document.querySelector("#modal");
    modal.showModal();
}
function closeModal() {
    const modal = document.querySelector("#modal");
    modal.close();
}
function clearModal() {
    document.querySelector("#modal-content").innerHTML = "";
}
export { openModal, closeModal, clearModal };
