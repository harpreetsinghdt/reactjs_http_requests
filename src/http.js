export const fetchAvailablePlaces = async () => {
  const res = await fetch("http://localhost:3000/places");
  const resData = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch places!");
  }
  return resData.places;
};

export const updateUserPlaces = async (places) => {
  const res = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await res.json();
  if (!res.ok) {
    throw new Error("Failed to update user data!");
  }
  return resData.message;
};

export const fetchUserPlaces = async () => {
  const res = await fetch("http://localhost:3000/user-places");
  const resData = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch places!");
  }
  return resData.places;
};
