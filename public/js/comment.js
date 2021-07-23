const newFormHandler = async (event) => {
  event.preventDefault();

  const comment_body = document.querySelector("#commentData").value.trim();

  if (comment_body) {
     
    const response = await fetch(`/api/commentsRoutes`, {
      method: "POST",
      body: JSON.stringify({ comment_body }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to create comment");
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

//   document
//     .querySelector(".project-list")
//     .addEventListener("click", delButtonHandler);
