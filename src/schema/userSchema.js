module.exports = {
  registerSchema: {
    tags: ["User"],
    body: {
      type: "object",
      required: [
        "username",
        "password",
        "confirmPassword",
        "firstname",
        "lastname",
        "birthday",
        "gender",
      ],
      properties: {
        username: { type: "string" },
        password: { type: "string" },
        confirmPassword: { type: "string" },
        firstname: { type: "string" },
        lastname: { type: "string" },
        birthday: { type: "string", format: "date-time" },
        gender: {
          type: "string",
          enum: ["male", "female"],
        },
        caption: { type: ["string", "null"] },
        avartar: { type: ["string", "null"] },
        cover_image: { type: ["string", "null"] },
      },
    },
  },

  loginSchema: {
    tags: ["User"],
    body: {
      type: "object",
      required: ["username", "password"],
      properties: {
        username: { type: "string" },
        password: { type: "string" },
      },
    },
  },

  followSchema: {
    tags: ["User"],
    body: {
      type: "object",
      required: ["main", "sub"],
      properties: {
        main: { type: "number" },
        sub: { type: "number" },
      },
    },
  },

  followResSchema: {
    tags: ["User"],
    body: {
      type: "object",
      required: ["userId", "restaurantId"],
      properties: {
        userId: { type: "number" },
        restaurantId: { type: "number" },
      },
    },
  },

  profileSchema: {
    tags: ["User"],
    querystring: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "number" },
      },
    },
  },

  editProfileSchema: {
    tags: ["User"],
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "number" },
      },
    },
    body: {
      type: "object",
      avartar: { type: ["string", "null"] },
      required: [
        "firstname",
        "lastname",
        "birthday",
        "gender",
        "caption",
        "avartar",
        "cover_image",
      ],
      properties: {
        firstname: { type: "string" },
        lastname: { type: "string" },
        birthday: { type: "string", format: "date-time" },
        gender: {
          type: "string",
          enum: ["male", "female"],
        },
        caption: { type: ["string", "null"] },
        avartar: { type: ["string", "null"] },
        cover_image: { type: ["string", "null"] },
      },
    },
  },

  deleteSchema: {
    tags: ["User"],
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "number" },
      },
    },
  },

  resetSchema: {
    tags: ["User"],
    params: {
      type: "object",
      required: ["userId"],
      properties: {
        userId: { type: "number" },
      },
    },
    body: {
      type: "object",
      required: ["oldPassword", "newPassword", "confirmPassword"],
      properties: {
        oldPassword: { type: "string" },
        newPassword: { type: "string" },
        confirmPassword: { type: "string" },
      },
    },
  },
};
