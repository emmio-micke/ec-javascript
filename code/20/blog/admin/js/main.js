class Posts {
    constructor(posts) {
        this.posts = [];
        this.get_posts();

        this.authors = [];
        this.get_authors();
    }

    async get_authors() {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        this.authors = await response.json();

        let authors_select = document.getElementById('edit-authors');
        authors_select.textContent = '';

        for (let author of this.authors) {
            authors_select.innerHTML += `<option value="${author.id}">${author.name}</option>`;
        }
    }

    get_article(article_id) {
        for (let post of this.posts) {
            if (article_id == post.id) {
                return post;
            }
        }
        return null;
    }

    get_author(author_id) {
        for (let author of this.authors) {
            if (author_id == author.id) {
                return author;
            }
        }
        return null;
    }

    async get_posts(limit = 10) {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        let posts = await response.json();

        for (let post of posts) {
            this.posts.push(new Post(post));
        }

        this.add_article_list_items();
    }

    remove_post(article_id) {
        this.posts = this.posts.filter(current_post => current_post.id != article_id)
    }

    async add_article_list_items() {
        let article_list = document.getElementById('main-article-list-tbody');

        article_list.textContent = '';

        for (let post of this.posts) {
            await post.get_user();

            let article = `
                <tr data-id="${post.id}">
                    <td>${post.id}</td>
                    <td data-name="title">${post.title}</td>
                    <td data-name="author">${post.author.name}</td>
                    <td>
                        <button type="button" data-id="${post.id}">Edit</button>
                        <button type="button" data-id="${post.id}">Delete</button>
                    </td>
                </tr>`;

            article_list.innerHTML += article;
        }
    }
}
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


document.addEventListener('DOMContentLoaded', e => {
    let form = document.getElementById('edit-post');
    let posts = new Posts();

    document
        .getElementById('main-article-list-tbody')
        .addEventListener('click', e => {
            if ('BUTTON' === e.target.tagName && 'Edit' === e.target.textContent) {
                form.style.display = 'block';

                let article = posts.get_article(e.target.dataset.id);

                document
                    .getElementById('edit-title')
                    .value = article.title;

                document
                    .getElementById('edit-body')
                    .value = article.body;

                document
                    .getElementById('edit-authors')
                    .value = article.author_id;

                document
                    .getElementById('btn-save')
                    .setAttribute('data-id', e.target.dataset.id)
            }

            if ('BUTTON' === e.target.tagName && 'Delete' === e.target.textContent && confirm('Do you really want to delete this post?')) {
                console.log(`delete post: ${e.target.dataset.id}`);

                let post_id = e.target.dataset.id;

                let url = `https://jsonplaceholder.typicode.com/posts/${post_id}`;

                fetch(url, {
                    method: 'DELETE'
                })
                    .then(response => {
                        console.dir(response);
                        return response.json()
                    })
                    .then(data => {
                        posts.remove_post(post_id);

                        console.dir(posts);

                        document
                            .querySelector(`tr[data-id="${post_id}"]`)
                            .remove();
                    })
            }
        })

    document
        .getElementById('btn-save')
        .addEventListener('click', e => {
            let article = {};

            article.userId = document
                .getElementById('edit-authors')
                .value;

            article.title = document
                .getElementById('edit-title')
                .value;

            article.body = document
                .getElementById('edit-body')
                .value;

            let post_id = document
                .getElementById('btn-save')
                .getAttribute('data-id');

            let url = `https://jsonplaceholder.typicode.com/posts/${post_id}`;

            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(article)
            })
                .then(response => {
                    console.dir(response);
                    return response.json()
                })
                .then(data => {
                    let post = posts.get_article(post_id);

                    post.author_id = article.userId;
                    post.get_user();
                    post.title = article.title;
                    post.body = article.body;

                    document
                        .querySelector(`tr[data-id="${post_id}"] td[data-name="title"]`)
                        .textContent = article.title;

                    document
                        .querySelector(`tr[data-id="${post_id}"] td[data-name="author"]`)
                        .textContent = posts.get_author(article.userId).name;

                    form.style.display = 'none';
                })
        })
})


