export const fetchData = () => {
  fetch('https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev/')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      sessionStorage.setItem('eventsData', JSON.stringify(data));
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
};

// // use this function to fetch data and update local storage on a weekly basis in anywhere needed
// export const fetchAndUpdateDataWeekly = () => {
//   fetchData(); // Initial fetch and update

//   // Fetch and update data every week
//   const intervalId = setInterval(fetchData, 7 * 24 * 60 * 60 * 1000); // 1 week in milliseconds

//   // Clear the interval when the component unmounts or as needed
//   return () => {
//     clearInterval(intervalId);
//   };
// };
