const myFunction = () => {
  const url = "https://jsonplaceholder.typicode.com/";

  let response = UrlFetchApp.fetch(`${url}posts`);
  Logger.log(response);
};

const myFunction2 = () => {
  const url = "https://jsonplaceholder.typicode.com/";

  let options = {
    method: "GET",
    headers: {
      "Api-Key": xxxxxxxx,
    },
    followRedirects: false,
    muteHttpExceptions: false,
  };

  let response = UrlFetchApp.fetch(`${url}posts`, options);
  Logger.log(response);
};

const myFunction3 = () => {
  const url = "https://jsonplaceholder.typicode.com/";

  let post = {
    userId: 1,
    title: "sample_title",
    body: "sample_body",
  };

  let options = {
    method: "POST",
    "content-type": "Application/json",
    payload: JSON.stringify(post),
  };

  let response = UrlFetchApp.fetch(`${url}posts`, options);
  Logger.log(JSON.parse(response));
};
