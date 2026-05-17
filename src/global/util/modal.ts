const toggleModal = (name: string) => {
  const modal = document.querySelector(`[data-modal="${name}"]`);

  modal?.classList.toggle('modal--active');
};

export { toggleModal };