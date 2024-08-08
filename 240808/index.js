const apiUrl = "https://jsonplaceholder.typicode.com/comments";

const button = document.querySelector(".showBtn");
button.addEventListener("click", fetchComments);

async function fetchComments() {
  try {
    const response = await fetch(apiUrl);
    const comments = await response.json();

    let slicedData = comments.slice(0, 10);

    const commentsDiv = document.getElementById("comments");

    slicedData.forEach((comment) => {
      let slicedBody = " ";
      if (comment.body.length >= 40) {
        slicedBody = comment.body.slice(0, 40) + "...";
      }

      const commentElement = document.createElement("div");
      commentElement.innerHTML = `
                  <h2>${slicedBody}</h2>
                  <p>사용자 이름: ${comment.name}</p>
                  <p>이메일: ${comment.email}</p>
              `;
      commentsDiv.appendChild(commentElement);
    });
  } catch (error) {
    console.log(error);
  }
}
