// Retrieve cached events data from localStorage
const cachedEventsData = sessionStorage.getItem('previousEventsData');
const pastEvents = JSON.parse(cachedEventsData) || []; // Parse the data or provide an empty array if it's not available

// Calculate the total trash bags and volunteers
let totalTrashBags = 0;
let totalVolunteers = 0;

pastEvents.forEach((event) => {
  totalTrashBags += event['Number of Trash Bags'] || 0;
  totalVolunteers += event['Number of Volunteers'] || 0;
});

export const stats = [
  {
    title: 'campaign',
    number: pastEvents.length,
    logo: 'campaigns',
  },
  {
    title: 'places',
    number: pastEvents.length,
    logo: 'places',
  },
  {
    title: 'volunteers',
    number: totalVolunteers,
    logo: 'volunteers',
  },
  {
    title: 'trash-bags',
    number: totalTrashBags,
    logo: 'trashBags',
  },
];
