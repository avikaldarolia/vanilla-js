let skip = 0;
let limit = 10;
let loading = false;

const getPosts = async () => {
	try {
		const response = await fetch(
			`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
		);
		const result = await response.json();

		return result;
	} catch (error) {
		console.error("Error fetching posts:", error);
	}
};

const displayPosts = async () => {
	if (loading) {
		return;
	}

	loading = true;

	const posts = await getPosts();
	console.log(posts.posts);

	if (posts && posts.posts.length > 0) {
		const list = document.getElementById("list");
		posts.posts.forEach((post) => {
			const postElement = document.createElement("div");
			postElement.classList.add("post");
			postElement.innerHTML = `<p class="post-title">${post.title}</p>
            <p class="post-body">${post.body}</p>`;
			postElement.id = post.id;
			list.appendChild(postElement);
		});

		skip += limit;
	} else {
		console.log("No more posts to load.");
		observer.disconnect();
	}

	loading = false;
};

displayPosts();

const options = {
	root: null,
	rootMargin: "0px",
	threshold: 0.7,
};

const callbackfn = async (entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting && !loading) {
			displayPosts();
		}
	});
};

const target = document.getElementById("target");

const observer = new IntersectionObserver(callbackfn, options);
observer.observe(target);
