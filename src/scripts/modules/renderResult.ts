/**
 * Creates a loading placeholder component.
 * @param {string} msg - The message to be shown on the placeholder.
 * @returns The created component.
 */
function createPlaceholder(msg: string): HTMLDivElement {
  const placeholder = document.createElement('div');
  const loaderDiv = document.createElement('div');
  const p = document.createElement('p');

  p.innerText = msg;
  placeholder.classList.add('loading');
  loaderDiv.classList.add('loader');
  placeholder.appendChild(p);
  placeholder.appendChild(loaderDiv);

  return placeholder;
}

/**
 * Creates a bad response message container.
 * @param {string} msg - The message to be shown as a bad response massage.
 * @returns The bad response message container.
 */
function createBadResponseContainer(msg: string): HTMLDivElement {
  const container = document.createElement('div');
  const p = document.createElement('p');

  p.innerText = msg;
  container.classList.add('bad-response');
  container.appendChild(p);

  return container;
}

/**
 * Creates a card container with weather data.
 * @param {string} title - The title of the data.
 * @param {string} content - The relevant information to show.
 * @returns The card element.
 */
function createDataContainer(title: string, content: string): HTMLDivElement {
  const container = document.createElement('div');
  const titleSpan = document.createElement('span');
  const contentSpan = document.createElement('span');

  titleSpan.classList.add('data-title');
  titleSpan.innerText = title;
  contentSpan.classList.add('data');
  contentSpan.innerText = content;

  container.classList.add('card');
  container.appendChild(titleSpan);
  container.appendChild(contentSpan);

  return container;
}

/**
 * Appends a loading placeholder to a container element.
 * @param {HTMLDivElement} container - The container element where the placeholder will be appended.
 * @param {HTMLDivElement} placeholder - The placeholder element to append.
 */
function renderPlaceholder(
  container: HTMLElement,
  placeholder: HTMLDivElement
): void {
  container.innerHTML = '';
  container.appendChild(placeholder);
}

/**
 * Appends a bad response message component to a container.
 * @param {HTMLElement} container - The container where the bad response message component will be appended.
 * @param {HTMLDivElement} badResponseComponent - The bad response message component.
 */
function renderBadResponse(
  container: HTMLElement,
  badResponseComponent: HTMLDivElement
): void {
  container.innerHTML = '';
  container.appendChild(badResponseComponent);
}

/**
 * Appends the successful response data to a container.
 * @param {HTMLElement} container - The container where the data will be appended.
 * @param {HTMLDivElement[]} data - An array containing card elements with relevant data appended.
 */
function renderSuccessfulResponse(
  container: HTMLElement,
  data: HTMLDivElement[]
): void {
  container.innerHTML = '';

  for (const div of data) {
    container.appendChild(div);
  }
}

export {
  createPlaceholder,
  createBadResponseContainer,
  createDataContainer,
  renderPlaceholder,
  renderBadResponse,
  renderSuccessfulResponse
};
