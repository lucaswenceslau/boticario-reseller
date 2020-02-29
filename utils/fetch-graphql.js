const query = `
    query {
        items{
        id
        title
        listPrice
        bestPrice
        description
        image
        }
    }
`;
const url = "https://cgsy71zgc1.execute-api.eu-west-1.amazonaws.com/staging/";

const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  };
  fetch(url, opts)
    .then(res => res.json())
    .then(console.log)
    .catch(console.error);