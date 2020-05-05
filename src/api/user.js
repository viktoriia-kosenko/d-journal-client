export const getToken = (email, password) => {
  const postParams = {
    body: JSON.stringify({ email, password }),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  };
  return fetch("/login", postParams).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};

export const submitNewUser = (newUser) => {
  const postParams = {
    body: JSON.stringify(newUser),
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
  };

  return fetch("/signup", postParams).then((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};
