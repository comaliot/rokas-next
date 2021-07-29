const githubRepos = async (req, res) => {
  const url = 'https://api.github.com/users/comaliot/repos';
  const response = await fetch(url);
  const json = await response.json();
  const projectsList = [];

  json.forEach((project) => {
    projectsList.push({
      name: project.name,
      stars: project.stargazers_count,
      url: project.html_url,
      description: project.description,
      language: project.language,
    });
  });

  return res.status(200).json({
    repos: projectsList,
  });
};

export default githubRepos;
