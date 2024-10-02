let isVisible = false;

const showElement = (element) => {
  element.style.display = "flex";
  document.body.style.overflow = "hidden";

  isVisible = true;
};

const hideElement = (element) => {
  element.style.display = "none";
  document.body.style.overflow = "auto";

  isVisible = false;
};

export const toggleVisibility = (triggerElement, targetElement) => {
  triggerElement.addEventListener("click", (event) => {
    event.stopPropagation();

    if (isVisible) {
      hideElement(targetElement);
    } else {
      showElement(targetElement);
    }
  });
};

export const hideOnClickOutside = (container, targetElement) => {
  container.addEventListener("click", () => {
    hideElement(targetElement);
  });
};

export const showOnClick = (container, targetElement) => {
  container.addEventListener("click", () => {
    showElement(targetElement);
  });
};
