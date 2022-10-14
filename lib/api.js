const FIREBASE_DOMAIN = "https://nickschroderdev-default-rtdb.firebaseio.com";

export async function getProjects(language) {
  const response = await fetch(`${FIREBASE_DOMAIN}/${language}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch projects.");
  }

  const transformedProjects = [];

  for (const key in data) {
    const projectObj = {
      id: key,
      ...data[key],
    };

    transformedProjects.push(projectObj);
  }

  return transformedProjects;
}
