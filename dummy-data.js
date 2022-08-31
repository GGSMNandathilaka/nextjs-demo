const DUMMY_ACTIVITIES = [
  {
    id: "001",
    title: "Fruit Salad",
    description:
      "Count up by 10 from 0. F.QuN6a.4 - counts forwards and backwards by tens to and from 100",
    type: "Episode",
    date: "2022-05-12",
    image: "images/img1.png",
    purpose: "Conceptual understanding",
    isFeatured: true,
  },
  {
    id: "002",
    title: "Hopping on the Number Line",
    description:
      "Add and subtract whole numbers (number line). ACMNA004.m - Represent practical situations to model addition and sharing - Subtraction up to 20 - concrete representation, number line",
    type: "Episode",
    date: "2022-06-12",
    image: "images/img2.png",
    purpose: "Conceptual understanding",
    isFeatured: true,
  },
  {
    id: "003",
    title: "Ice-Cream Machine",
    description:
      "Create sets of given size with objects. 0.P1.N.10.f - count to determine the number of objects in a set [applying with understanding] - Counting Up to 20.",
    type: "Episode",
    date: "2022-07-12",
    image: "images/img3.png",
    purpose: "Conceptual understanding",
    isFeatured: true,
  },
];

export function getFeaturedActivities() {
  return DUMMY_ACTIVITIES.filter((activity) => activity.isFeatured);
}

export function getAllActivities() {
  return DUMMY_ACTIVITIES;
}

export function getFilteredActivities(dateFilter) {
  const { year, month } = dateFilter;

  let filteredActivities = DUMMY_ACTIVITIES.filter((activity) => {
    const activityDate = new Date(activity.date);
    return (
      activityDate.getFullYear() === year &&
      activityDate.getMonth() === month - 1
    );
  });

  return filteredActivities;
}

export function getActivityById(id) {
  return DUMMY_ACTIVITIES.find((activity) => activity.id === id);
}
