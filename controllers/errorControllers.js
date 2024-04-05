export const errorGlobalHandler = (err, req, res, next) => {
  console.log(err);

  if (process.env.NODE_ENV !== "development") {
    return res.status(err.status ?? 500).json({
      message:
        !err.status || err.status === 500
          ? "Internal server error"
          : err.message,
    });
  }
  res
    .status(err.status ?? 500)
    .json({ message: err.message, data: err.data, stack: err.stack });
};
