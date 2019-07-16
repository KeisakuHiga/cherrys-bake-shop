const currentUser = (req, res) => {
  return res.send({
    currentUser: req.user
  })
}

module.exports = {
  currentUser
}