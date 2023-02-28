import User from "../models/User"

// READ
export const getUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ message: err.message })
  }
}

export const getUserFriends = async (req, res) => {
  const { id } = req.params
  const user = await User.findById(id)

  const friends = await Promise.all(
    user.firends.map((id) => User.findById(id))
  )
  const formatted
}