const toggleModal = (id: string) => {
  const modal = document.querySelector(`[data-modal="${id}"]`);

  modal?.classList.toggle('modal--active');
};

export { toggleModal };