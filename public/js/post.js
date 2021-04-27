const newFormHandler = async (event) => {
  event.preventDefault();

  const description = document.querySelector("#comment-desc").value.trim();

  if (description) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/project");
    } else {
      alert("Failed to create comment");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/comments/${id}`, {
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
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".comment-list")
  .addEventListener("click", delButtonHandler);
