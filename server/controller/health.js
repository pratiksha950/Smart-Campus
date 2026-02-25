const getHome = (req, res) => {
    console.log("welcome to server");
    res.send("welcome to server");
}

const getHealth = (req, res) => {
    res.send("welcome to server");
}

export { getHome, getHealth }