function openModal() {
    const modal = document.querySelector("#modal") as HTMLDialogElement;
    modal.showModal();
}

function closeModal() {
    const modal = document.querySelector("#modal") as HTMLDialogElement;
    modal.close();
}

function clearModal() {
    document.querySelector("#modal-content")!.innerHTML = "";
}

export { openModal, closeModal, clearModal };
