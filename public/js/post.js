const newCommentHandler = async (event) => {
  event.preventDefault();

  console.log("comment button pushed");
  const description = document.querySelector("#comment-desc").value.trim();
  const project_id = parseInt(document.location.pathname.split('/')[document.location.pathname.split('/').length-1])
  console.log(description);
  console.log(project_id);

  if (description && project_id) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description, project_id}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // document.location.replace(`/project/1`);
    } else {
      alert("Failed to create comment");
    }
  }
};

const delCommHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const cid = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comments/${cid}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/project/${id}`);
    } else {
      alert("Failed to delete comment");
    }
  }
};

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newCommentHandler);

document
  .querySelector(".comment-list")
  .addEventListener("click", delCommHandler);
