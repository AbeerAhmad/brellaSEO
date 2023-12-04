import { fetchByDocument } from "../prismicApi.js";

const LoadData = () => {
  //get Portfolio and Blog data and store it in session storage for later use

  try {
    fetchByDocument("portfolio", {
      orderings: "my.portfolio.order",
    }).then((response) => {
      sessionStorage.portfolioData = JSON.stringify(response.results);
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }

  //Blog data
  const fetchAllPosts = async () => {
    let page = 1;
    let total = 2;
    const posts = [];

    while (page <= total) {
      try {
        const response = await fetchByDocument("blog", {
          orderings: "my.blog.published_date desc",
          pageSize: 100,
          page,
        });
        if (!response || !response.total_pages) {
          total = 0;
          continue;
        }
        total = response.total_pages;
        page++;
        posts.push(...response.results);
      } catch (error) {
        total = 0;
      }
    }
    return posts;
  };

  fetchAllPosts().then((posts) => {
    sessionStorage.blogData = JSON.stringify(posts);
  });

  const fetchJobsData = async () => {
    await fetch(
      "https://recruiting.paylocity.com/recruiting/v2/api/feed/jobs/bad51cde-c860-42f9-b932-8b45067dd4e3"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        sessionStorage.Jobs = JSON.stringify(data.jobs);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  };

  fetchJobsData();

  return;
};

export default LoadData;
