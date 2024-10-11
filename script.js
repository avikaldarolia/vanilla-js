const getPosts = async () => {
	try {
		const response = await fetch("https://dummyjson.com/posts?limit=10");
		const result = await response.json();

		return result;
	} catch (error) {
		console.error("Error fetching posts:", error);
	}
};

const displayPosts = async () => {
	const posts = await getPosts();
	console.log(posts.posts);

	if (posts) {
		const list = document.getElementById("list");
		posts.posts.forEach((post) => {
			const postElement = document.createElement("div");
			postElement.classList.add("post");
			postElement.innerHTML = `<p class="post-title">${post.title}</p>
            <p class="post-body">${post.body}</p>`;
			postElement.id = post.id;
			list.appendChild(postElement);
		});
	}
};

displayPosts();

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.7,
};

const callbackfn = () => {};

const observer = new IntersectionObserver(callbackfn, options);
