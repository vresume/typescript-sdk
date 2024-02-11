import { ResumeApi } from "../dist";

const bearerToken = process.env.BEARER_TOKEN || ""

async function main() {
  const api = new ResumeApi({
    basePath: "https://vresume-server.onrender.com",
  });

  await api
    .get({
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    })
    .then(({ data, status }) => {
      console.log(data, status);
    })
    .catch((e) => {
      console.error(e.response?.data || e);
    });
}

main();
