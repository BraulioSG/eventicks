const API_URL = process.env.REACT_APP_API_URL;

async function PostApiRequest(path, body) {
  const request = new Request(API_URL + path, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  try {
    const response = await fetch(request);
    let data = undefined;
    if (response.ok) {
      data = await response.json();
      return data;
    }
    return null;
  } catch (err) {
    return err;
  }
}

async function GetApiRequest(path) {
  const request = new Request(API_URL + path, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  try {
    const response = await fetch(request);
    let data = undefined;
    if (response.ok) {
      data = await response.json();
      return data;
    }
    return null;
  } catch (err) {
    return err;
  }
}

export { PostApiRequest, GetApiRequest };
