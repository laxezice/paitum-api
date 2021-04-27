const {
  User,
  Coupon,
  Restaurant,
  Review,
  ReviewIamge,
} = require("../models/ModelIntaillize");
module.exports = {
  getAll: async (request, reply) => {
    let users = await User.findAll({
      include: {
        model: User,
        as: "following",
        attributes: { exclude: ["password"] },
      },
    });
    return { users: users };
  },

  register: async (request, reply) => {
    const data = request.body;
    let user = User.build({ ...data, coin: 0 });
    await user.save();
    return {
      status: 201,
      message: "register success",
      user: { ...user.dataValues, password: null },
    };
  },

  login: async (request, reply) => {
    const data = request.body;
    let user = await User.findOne({
      where: {
        username: data.username,
      },
    });
    if (data.password === user.password) {
      return {
        status: 200,
        message: "get data success",
        user: { ...user.dataValues, password: null },
      };
    } else {
      return {
        status: 400,
        message: "username or password is incorrect",
      };
    }
  },

  follow: async (request, reply) => {
    let follower = await User.findByPk(request.body.main);
    let followed = await User.findByPk(request.body.sub);
    await follower.addFollowing(followed);
    return {
      status: 200,
      message: "follow success",
    };
  },

  unfollow: async (request, reply) => {
    let follower = await User.findByPk(request.body.main);
    let followed = await User.findByPk(request.body.sub);
    await follower.removeFollowing(followed);
    return {
      status: 200,
      message: "unfollow success",
    };
  },

  followRestaurant: async (request, reply) => {
    let follower = await User.findByPk(request.body.userId);
    let followed = await Restaurant.findByPk(request.body.restaurantId);
    await follower.addFavRestaurants(followed);
    return {
      status: 200,
      message: "follow success",
    };
  },

  unfollowRestaurant: async (request, reply) => {
    let follower = await User.findByPk(request.body.userId);
    let followed = await Restaurant.findByPk(request.body.restaurantId);
    await follower.removeFavRestaurants(followed);
    return {
      status: 200,
      message: "unfollow success",
    };
  },

  profile: async (request, reply) => {
    let user = await User.findByPk(request.query.userId, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: User,
          as: "following",
          attributes: { exclude: ["password"] },
        },
        {
          model: User,
          as: "follower",
          attributes: { exclude: ["password"] },
        },
        {
          model: Review,
          as: "myReviews",
          include: [
            {
              model: ReviewIamge,
              as: "images",
            },
            {
              model: User,
              as: "reviewBy",
              attributes: {
                exclude: [
                  "password",
                  "birthday",
                  "gender",
                  "caption",
                  "coin",
                  "cover_image",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
            {
              model: User,
              as: "commenBy",
              attributes: {
                exclude: [
                  "password",
                  "birthday",
                  "gender",
                  "caption",
                  "coin",
                  "cover_image",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
            {
              model: User,
              as: "likeBy",
              attributes: {
                exclude: [
                  "password",
                  "birthday",
                  "gender",
                  "caption",
                  "coin",
                  "cover_image",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
          ],
        },
        "coupons",
        "favRestaurants",
      ],
    });
    return {
      status: 200,
      message: "get success",
      user: user,
    };
  },

  editProfile: async (request, reply) => {
    const data = request.body;
    let user = await User.findByPk(request.params.userId);
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.birthday = data.birthday;
    user.gender = data.gender;
    user.caption = data.caption;
    user.avartar = data.avartar;
    user.cover_image = data.cover_image;
    await user.save();
    return {
      status: 201,
      message: "edit success",
      user: { ...user.dataValues, password: null },
    };
  },

  resetPassword: async (request, reply) => {
    const data = request.body;
    let user = await User.findByPk(request.params.userId);
    if (user.password == data.oldPassword) {
      if (data.newPassword == data.confirmPassword) {
        user.password = data.newPassword;
        await user.save();
        return {
          status: 201,
          message: "change password success",
        };
      }
      return {
        status: 400,
        message: "new password and confirm not correct",
      };
    } else {
      return {
        status: 400,
        message: "old password incorrect",
      };
    }
  },

  deleteProfile: async (request, reply) => {
    let user = await User.findByPk(request.params.userId);
    let reviews = await Review.destroy({
      where: {
        userId: request.params.userId,
      },
    });
    await user.destroy();

    return {
      status: 201,
      message: "delete success",
    };
  },
};
