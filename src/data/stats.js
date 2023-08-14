// Retrieve cached events data from localStorage
const cachedEventsData = localStorage.getItem('eventsData');
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
    title: 'حملة تنظيف',
    number: pastEvents.length,
    logo: 'campaigns',
  },
  {
    title: 'مكان',
    number: pastEvents.length,
    logo: 'places',
  },
  {
    title: 'متطوع',
    number: totalVolunteers,
    logo: 'volunteers',
  },
  {
    title: 'كيس نفايات',
    number: totalTrashBags,
    logo: 'trashBags',
  },
];
