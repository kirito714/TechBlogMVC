const router = require("express").Router();
// requiring my models routes
const { Post, User, Comments } = require("../../models");
const withAuth = require("../../utils/auth");

// router.get("/", (req, res) => {
//   // find all Posts
//   Comments.findAll({
//     attributes: ["id", "post_name", "post_body"],

//     include: [
//       {
//         model: User,
//         attributes: ["user_name"],
//       },
//     ],
//   })
//     .then((data) => res.json(data))
//     .catch((err) => {z
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// api/comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comments.create({
      include: [
        {
          model: Post
        },
      ],
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

module.exports = router;
