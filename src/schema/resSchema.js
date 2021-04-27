module.exports = {
  getSchema: {
    tags: ["Restaurant"],
    params: {
      type: "object",
      required: ["restaurantId"],
      properties: {
        restaurantId: { type: "number" },
      },
    },
  },

  createSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["name", "about", "avatar", "latitude", "longitude", "userId"],
      properties: {
        name: { type: "string" },
        about: { type: "string" },
        avatar: { type: "string" },
        latitude: { type: "number" },
        longitude: { type: "number" },
        userId: { type: "number" },
        cover_image: { type: "string" },
      },
    },
  },

  reviewSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["userId", "restaurantId", "message", "star"],
      properties: {
        userId: { type: "number" },
        restaurantId: { type: "number" },
        message: { type: "string" },
        star: { type: "number" },
        images: {
          type: "array",
          items: {
            type: "object",
            required: ["url"],
            properties: {
              url: { type: "string" },
            },
          },
        },
      },
    },
  },

  getReviewSchema: {
    tags: ["Restaurant"],
    params: {
      type: "object",
      required: ["reviewId"],
      properties: {
        reviewId: { type: "number" },
      },
    },
  },

  commentSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["message", "userId", "reviewId"],
      properties: {
        userId: { type: "number" },
        reviewId: { type: "number" },
        message: { type: "string" },
      },
    },
  },

  likeSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["userId", "reviewId"],
      properties: {
        userId: { type: "number" },
        reviewId: { type: "number" },
      },
    },
  },

  nearSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["latitude", "longitude", "radius"],
      properties: {
        latitude: { type: "number" },
        longitude: { type: "number" },
        radius: { type: "number" },
      },
    },
  },

  promotionSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["name", "exp", "description", "restaurantId"],
      properties: {
        name: { type: "string" },
        exp: { type: "string", format: "date-time" },
        image: { type: "string" },
        description: { type: "string" },
        restaurantId: { type: "number" },
      },
    },
  },

  couponSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: [
        "name",
        "exp",
        "description",
        "restaurantId",
        "coin",
        "quantity",
      ],
      properties: {
        name: { type: "string" },
        exp: { type: "string", format: "date-time" },
        image: { type: "string" },
        description: { type: "string" },
        coin: { type: "number" },
        quantity: { type: "number" },
        restaurantId: { type: "number" },
      },
    },
  },

  redeemSchema: {
    tags: ["Restaurant"],
    body: {
      type: "object",
      required: ["userId", "couponId"],
      properties: {
        userId: { type: "number" },
        couponId: { type: "number" },
      },
    },
  },

  getPromotionSchema: {
    tags: ["Restaurant"],
    params: {
      type: "object",
      required: ["restaurantId"],
      properties: {
        restaurantId: { type: "number" },
      },
    },
  },

  feedSchema: {
    tags: ["Restaurant"],
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "number" },
      },
    },
  },
};
