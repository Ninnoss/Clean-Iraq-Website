export const fetchData = (setData) => {
  // Check if data is present in sessionStorage
  const storedData = sessionStorage.getItem('previousEventsData');

  if (storedData) {
    setData(JSON.parse(storedData));
  } else {
    // Fetch data from API and store in sessionStorage
    fetch('https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        sessionStorage.setItem('previousEventsData', JSON.stringify(data)); // Store the data in sessionStorage
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
};