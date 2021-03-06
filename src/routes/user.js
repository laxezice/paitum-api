const userController = require("../controllers/userController");
const userSchema = require("../schema/userSchema");
module.exports = function (fastify, opts, done) {
  fastify.get("/all", userController.getAll);

  fastify.post(
    "/register",
    { schema: userSchema.registerSchema },
    userController.register
  );

  fastify.post(
    "/login",
    { schema: userSchema.loginSchema },
    userController.login
  );

  fastify.put(
    "/follow",
    { schema: userSchema.followSchema },
    userController.follow
  );

  fastify.put(
    "/unfollow",
    { schema: userSchema.followSchema },
    userController.unfollow
  );

  fastify.put(
    "/follow/restaurant",
    { schema: userSchema.followResSchema },
    userController.followRestaurant
  );

  fastify.put(
    "/unfollow/restaurant",
    { schema: userSchema.followResSchema },
    userController.unfollowRestaurant
  );

  fastify.get(
    "/profile",
    { schema: userSchema.profileSchema },
    userController.profile
  );

  fastify.put(
    "/profile/:userId",
    { schema: userSchema.editProfileSchema },
    userController.editProfile
  );

  fastify.patch(
    "/reset/:userId",
    { schema: userSchema.resetSchema },
    userController.resetPassword
  );

  fastify.delete(
    "/delete/:userId",
    { schema: userSchema.deleteSchema },
    userController.deleteProfile
  );
  done();
};
