const router = require("express").Router();
// requiring my models routes
const { Post, User } = require("../../models");

router.get("/", (req, res) => {
    // find all Posts
    Post.findAll({
      attributes: ["id", "post_name","post_body",],
  
      include: [
        {
      
          model: User,
          attributes: ["user_name"],
        },
      ],
    })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post("/", (req, res) => {
    // create a new Post
    Post.create({
      post_name: req.body.post_name,
      post_body: req.body.post_body,
    })
      .then((data) => res.json(data))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });




module.exports = router;