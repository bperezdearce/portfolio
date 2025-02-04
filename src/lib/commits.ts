export async function fetchTotalCommits(): Promise<number> {
  const gitHubToken = process.env.GITHUB_TOKEN;

  const query = `
    {
      user(login: "bperezdearce") {
        contributionsCollection {
          totalCommitContributions
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${gitHubToken}`,
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    console.error(
      "Error al conectar con la API de GitHub",
      response.statusText
    );
    return 0;
  }

  const { data, errors } = await response.json();

  if (errors) {
    console.error("Errores en la consulta GraphQL:", errors);
    return 0;
  }

  const totalCommits =
    data.user.contributionsCollection.totalCommitContributions;

  return totalCommits;
}