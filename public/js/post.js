const newCommentHandler = async (event) => {
  event.preventDefault();

  console.log("comment button pushed");
  const description = document.querySelector("#comment-desc").value.trim();

  console.log(description);

  if (description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description }),
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

// document
//   .querySelector(".comment-list")
//   .addEventListener("click", delCommHandler);
