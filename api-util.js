export async function getAllActivities() {
  const response = await fetch(
    "https://nextjs-demo-bc79f-default-rtdb.firebaseio.com/activities.json"
  );
  const data = await response.json();

  const activities = [];

  for (let key in data) {
    activities.push({
      id: key,
      ...data[key],
    });
  }

  return activities;
}

export async function getFeaturedActivities() {
  const activities = await getAllActivities();
  return activities.filter((e) => e.isFeatured);
}

export async function getActivityById(id) {
  const activities = await getAllActivities();
  return activities.find((activity) => activity.id === id);
}

export async function getFilteredActivities(dateFilter) {
  const activities = await getAllActivities();
  const { year, month } = dateFilter;

  let filteredActivities = activities.filter((activity) => {
    const activityDate = new Date(activity.date);
    return (
      activityDate.getFullYear() === year &&
      activityDate.getMonth() === month - 1
    );
  });

  return filteredActivities;
}
