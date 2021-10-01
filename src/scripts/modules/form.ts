import { makeRequest, RelevantData } from './request';
import { renderPlaceholder, createPlaceholder } from './renderResult';
import { handleBadResponse, handleSuccessfulResponse } from './responseHandler';

async function handleSubmit(): Promise<void> {
  const form = document.getElementById('weather-form') as HTMLFormElement;

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    const resultContainer = document.querySelector(
      'section#result'
    ) as HTMLElement;
    const placeholder = createPlaceholder('Procurando...');
    const query = form.querySelector('input#query') as HTMLInputElement;

    renderPlaceholder(resultContainer, placeholder);
    const response = await makeRequest(query.value);

    if (!response) return handleBadResponse(resultContainer);
    return handleSuccessfulResponse(resultContainer, response as RelevantData);
  });
}

export { handleSubmit };
