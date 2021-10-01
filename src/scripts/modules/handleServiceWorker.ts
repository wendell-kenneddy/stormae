async function handleServiceWorker(): Promise<void> {
  try {
    if ('serviceWorker' in navigator) {
      await navigator.serviceWorker.register('/sw.js');
    }
  } catch (error) {
    console.log(error);
  }
}

export { handleServiceWorker };
