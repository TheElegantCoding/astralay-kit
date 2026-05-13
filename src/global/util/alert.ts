const updateStack = (id: string) => {
  const activeAlerts = [...document.querySelectorAll<HTMLDivElement>(`[data-alert='${id}']`)].toReversed();

  activeAlerts.forEach((element, index) => {
    element.classList.remove('alert--behind', 'alert--behind-third');

    if (index === 1) {
      element.classList.add('alert--behind');
    } else if (index >= 2) {
      element.classList.add('alert--behind-third');
    }
  });
};

const buildAlert = (id: string): null | HTMLDivElement => {
  const blueprint = document.querySelector<HTMLDivElement>(`[data-alert='${id}']`);
  if (!blueprint) { return null; }

  const newAlert = blueprint.cloneNode(true) as HTMLDivElement;
  newAlert.removeAttribute('id');

  return newAlert;
};

const createRemoveAlert = (newAlert: HTMLDivElement) => {
  return () => {
    newAlert.classList.remove('alert--active');
    setTimeout(() => {
      newAlert.remove();
      updateStack(newAlert.dataset.alert ?? '');
    }, 300);
  };
};

const setupAutoClose = (
  newAlert: HTMLDivElement,
  buttonClose: null | HTMLButtonElement,
  duration: number,
  removeThisAlert: () => void
) => {
  let autoCloseTimer = setTimeout(removeThisAlert, duration);

  buttonClose?.addEventListener('click', removeThisAlert);
  newAlert.addEventListener('mouseenter', () => { clearTimeout(autoCloseTimer); });
  newAlert.addEventListener('mouseleave', () => {
    autoCloseTimer = setTimeout(removeThisAlert, 2000);
  });
};

const activateAlert = (newAlert: HTMLDivElement) => {
  setTimeout(() => {
    newAlert.classList.add('alert--active');
  }, 300);
};

const showAlert = (id: string) => {
  const newAlert = buildAlert(id);
  if (!newAlert) { return; }

  const buttonClose = newAlert.querySelector<HTMLButtonElement>('[data-alert-close]');
  const duration = Number(newAlert.dataset.duration) || 5000;
  const removeThisAlert = createRemoveAlert(newAlert);

  document.body.append(newAlert);
  updateStack(id);
  setupAutoClose(
    newAlert,
    buttonClose,
    duration,
    removeThisAlert
  );
  activateAlert(newAlert);
};

export { showAlert };
