const fetchUser = (req, res) => {
    if (req.isAuthenticated()) {

        res.json({
            authenticated: true,
            user: {
                username: req.user.username
            }
        })
    }
}

const logout = (req, res) => {
    req.logout((error) => {
        console.log("logouted")
        console.log(error)
        res.json({ success: true })
    })
}


export default { logout, fetchUser }