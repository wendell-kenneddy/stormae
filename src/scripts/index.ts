import { handleSubmit } from './modules/form';
import { handleServiceWorker } from './modules/handleServiceWorker';

window.addEventListener('load', () => {
  handleSubmit();
  handleServiceWorker();
});
