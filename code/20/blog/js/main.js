class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.author = null;
        this.author_id = data.userId;

        this.image = 'https://placekitten.com/200/300';
        this.image_thumbnail = 'https://placekitten.com/70/70';
    }

    async get_user(user_id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        let user = await response.json();

        this.author = user;
    }
}

async function get_posts(limit = 5) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    let posts = await response.json();

    let post_objects = [];
    for (let post of posts) {
        post_objects.push(new Post(post));
    }

    return post_objects;
}

function handle_featured_article(article) {
    document
        .querySelector('article.main-story h2')
        .textContent = article.title;

    document
        .querySelector('article.main-story div.author span')
        .textContent = article.author.name;

    document
        .querySelector('article.main-story div.post p')
        .innerHTML = article.body;

    document
        .querySelector('article.main-story img')
        .src = article.image;
}

function add_article_list_items(posts) {
    let article_list = document.getElementById('main-article-list');

    for (let post of posts) {
        let article = `
            <article>
                <h4>${post.title}</h4>
                <img src="${post.image_thumbnail}">
                <p>${post.body}</p>
            </article>`;

        article_list.innerHTML += article;
    }
}


async function handle_page() {
    // Get posts from api.
    let posts = await get_posts();

    // Get author for the featured article.
    await posts[0].get_user(posts[0].author_id);

    // Render the featured posts.
    handle_featured_article(posts[0]);

    // Remove the first post and render the rest of them as article list.
    posts.shift();
    add_article_list_items(posts);
}

handle_page()
