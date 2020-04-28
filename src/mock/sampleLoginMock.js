import mock from "./mock";

export default function sampleLoginMock() {
  mock.onPost("/account/login").reply((config) => {
    const data = JSON.parse(config.data);

    if (data.email === "admin" && data.password === "admin") {
      return [200, { token: "token" }];
    } else {
      return [401, { error: "Incorrect Credentials" }];
    }
  });
}
