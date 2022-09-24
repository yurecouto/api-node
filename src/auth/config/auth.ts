export default {
  secret_access: process.env.SECRET_ACCESS,
  secret_refresh: process.env.SECRET_REFRESH,

  expiration_access: "1m",
  expiration_refresh: "1h",
};
