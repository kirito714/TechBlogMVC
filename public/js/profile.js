const newFormHandler = async (event) => {
  event.preventDefault();

  const post_name = document.querySelector("#postTitle").value.trim();

  const post_body = document.querySelector("#postBody").value.trim();

  if (post_name && post_body) {
    const response = await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({ post_name, post_body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create post");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/post/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete post");
    }
  }
};

document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);

document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
