const routeNotFound = (req, res) => {
    res.status(404).json({ message: "Page Not Found" })
}

export default routeNotFound;