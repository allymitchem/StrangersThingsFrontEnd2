const baseUrl = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

export async function getPosts(token) {
    const options = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
  const response = await fetch(`${baseUrl}/posts`, options);
  const result = await response.json();
  const posts = result.data.posts;
  return posts;
}

export async function registerUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(`${baseUrl}/users/register`, options);
  const result = await response.json();

  return result.data;
}

export async function logInUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(`${baseUrl}/users/login`, options); //// got rid of /users/
  const result = await response.json();

  return result.data;
}
export async function addPosts(token, title, description, price, userLocation, willDeliver) { //took out even from () title, description, price, location, willDeliver
    // event.preventDefault()
// console.log(token, event.target)
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        
        title,
        description,
        price,
        userLocation,
        willDeliver


      },
    }),
  };
  const response = await fetch(`${baseUrl}/posts`, options);
  const result = await response.json();

}
