class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.author_id = data.userId;
        this.author = this.get_user();

        this.image = 'https://placekitten.com/200/300';
        this.image_thumbnail = 'https://placekitten.com/70/70';
    }

    async get_user(user_id = this.author_id) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
        let user = await response.json();

        this.author = user;
    }
}

async function get_posts(limit = 10) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    let posts = await response.json();

    let post_objects = [];
    for (let post of posts) {
        post_objects.push(new Post(post));
    }

    return post_objects;
}


async function add_article_list_items(posts) {
    let article_list = document.getElementById('main-article-list-tbody');

    for (let post of posts) {
        await post.get_user();
    }

    for (let post of posts) {
        let article = `
            <tr>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.author.name}</td>
                <td>
                    <button type="button" data-id="${post.id}">Edit</button>
                    <button type="button" data-id="${post.id}">Delete</button>
                </td>
            </tr>`;

        article_list.innerHTML += article;
    }
}

document.addEventListener('DOMContentLoaded', e => {
    let form = document.getElementById('edit-post');

    document
        .getElementById('main-article-list-tbody')
        .addEventListener('click', e => {
            if ('BUTTON' === e.target.tagName && 'Edit' === e.target.textContent) {
                form.style.display = 'block';

                console.log(posts);

                console.log(`edit post: ${e.target.dataset.id}`);
            }

            if ('BUTTON' === e.target.tagName && 'Delete' === e.target.textContent) {
                console.log(`delete post: ${e.target.dataset.id}`);
            }
        })
})

let posts;

async function handle_page() {
    // Get posts from api.
    posts = await get_posts();

    // Add all articles to article list.
    add_article_list_items(posts);
}

handle_page()
