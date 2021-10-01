import {
  createBadResponseContainer,
  createDataContainer,
  renderBadResponse,
  renderSuccessfulResponse
} from './renderResult';
import { RelevantData } from './request';
import { capitalize } from './utils/capitalize';

/**
 *  Handles the 404 error code response.
 * @param {HTMLElement} resultContainer - The container where the reponse message will be appended.

 */
function handleBadResponse(resultContainer: HTMLElement): void {
  const badResponseContainer = createBadResponseContainer('Sem resultados');
  renderBadResponse(resultContainer, badResponseContainer);
  return;
}

/**
 * Handles a successfull request to the weather api.
 * @param {HTMLElement} resultContainer - The container where the response data will be appended.
 *
 * @param {RelevantData} data - The data to show to the user.
 */
function handleSuccessfulResponse(
  resultContainer: HTMLElement,
  data: RelevantData
): void {
  const temperature = `${data.main.temp} C`;
  const weather = capitalize(`${data.weather[0].description}`);
  const countryCode = `${data.sys.country}`;
  const temperatureContainer = createDataContainer('Temperatura', temperature);
  const weatherContainer = createDataContainer('Clima', weather);
  const countryContainer = createDataContainer('País', countryCode);
  const dataArray = [temperatureContainer, weatherContainer, countryContainer];

  renderSuccessfulResponse(resultContainer, dataArray);
}

export { handleBadResponse, handleSuccessfulResponse };
