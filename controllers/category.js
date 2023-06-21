exports.list = (req,res) => {
    res.json({
        message: "category list"
    })
}

exports.read = (req,res) => {
    res.json({
        message: "category read"
    })
}

exports.create = (req,res) => {
    res.json({
        message: "category created"
    })
}

exports.update = (req,res) => {
    res.json({
        message: "category updated"
    })
}

exports.remove = (req,res) => {
    res.json({
        message: "category removed"
    })
}
