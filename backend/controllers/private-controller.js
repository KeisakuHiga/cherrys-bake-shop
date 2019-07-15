const currentUser = (req, res) => {
  console.log(req.user)
  return res.send({
    currentUser: req.user
  })
}

module.exports = {
  currentUser
}