const form = document.querySelector('form');
var ansSection = document.querySelector("#article-answer");
var btn = document.querySelector("#submit-cm");

btn.disabled = true;

const createPost = async(e) =>{
    e.preventDefault();
  
    ansSection.insertAdjacentHTML( "afterbegin",`
    <div class="ans">
    <h1>Nadav ohayon</h1>
    <p>${document.querySelector("textarea").value}</p>
    </div>`) 

  
    btn.disabled = true;

    const doc= {
        title: "Nadav Ohayon",
        body: form.body.value,
    }

    await fetch('https://quora4.herokuapp.com/db.json', {
        method: 'POST',
        body:JSON.stringify(doc),
        headers: {'content-Type': 'application/json'}
    });
    document.querySelector("textarea").value = '';
    window.location.replace('/index.php');
}


form.addEventListener('submit' ,createPost);

form.addEventListener('keyup', stateHandle)

function stateHandle() {
    if (document.querySelector("textarea").value == "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

