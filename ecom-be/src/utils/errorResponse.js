const handleServerError = (res, error) => {
  return res.status(500).json({ error: error.message || "Server Error" });
};

module.exports = handleServerError;
