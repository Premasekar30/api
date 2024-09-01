async function fetchAndFilterPosts() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    const keyword = document.getElementById('keywordInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');

    resultsDiv.innerHTML = ''; // Clear previous results

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(keyword));

        if (filteredPosts.length === 0) {
            resultsDiv.innerHTML = '<p>No posts found with the given keyword.</p>';
        } else {
            filteredPosts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.className = 'post';

                const postTitle = document.createElement('h3');
                postTitle.textContent = post.title;

                const postBody = document.createElement('p');
                postBody.textContent = post.body;

                postDiv.appendChild(postTitle);
                postDiv.appendChild(postBody);
                resultsDiv.appendChild(postDiv);
            });
        }
    } catch (error) {
        console.error('Error fetching and filtering posts:', error);
        resultsDiv.innerHTML = '<p>There was an error fetching the posts. Please try again later.</p>';
    }
}
