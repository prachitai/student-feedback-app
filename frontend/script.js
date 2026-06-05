const api =
"https://student-feedback-app-qiaz.onrender.com";

async function addFeedback(){

    const name =
    document.getElementById("name").value;

    const message =
    document.getElementById("message").value;

    await fetch(api+"/add",{
        method:"POST",
        headers:{
            "Content-Type":
            "application/json"
        },
        body:JSON.stringify({
            name,
            message
        })
    });

    loadFeedback();
}

async function loadFeedback(){

    const response =
    await fetch(api+"/all");

    const data =
    await response.json();

    let output="";

    data.forEach(item=>{
        output+=`
        <p>
        <b>${item.name}</b> :
        ${item.message}
        </p>`;
    });

    document.getElementById(
    "result").innerHTML=output;
}

loadFeedback();