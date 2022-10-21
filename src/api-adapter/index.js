const baseUrl = "https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT";

export async function getPosts() {
  const response = await fetch(`${baseUrl}/posts`);
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
export async function addPosts(event) {
    event.preventDefault()

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: event.target[0].value,
        description: event.target[1].value,
        price: event.target[2].value,
        location: event.target[3].value,
        willDeliver: event.target[4].checked
      },
    }),
  };
  const response = await fetch(`${baseUrl}/posts`, options);
  const result = await response.json();

}
