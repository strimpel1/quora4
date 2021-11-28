
const textarea = document.querySelector("textarea");
var ansSection = document.querySelector("#article-answer");
var backUp = textarea.getAttribute('placeholder');
var btn = document.querySelector("#submit-cm");


var renderComment = async () => {
    let uri = 'http://localhost:3000/posts';

    const res = await fetch(uri);
    const comments = await res.json();

    let template = '';
    comments.forEach(post => {
        template += `
        <div class="ans">
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        </div>
        `
    })

    ansSection.innerHTML = template;
}



window.addEventListener('DOMContentLoaded', () => renderComment());

btn.disabled = true;


textarea.addEventListener("keydown", e => {
    textarea.style.height = "53px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});


textarea.onfocus = function() {
    this.setAttribute('placeholder', '');
}

textarea.onblur = function() {
    this.setAttribute('placeholder', backUp);
}
