const mongoose = require('mongoose');
const log = console.log

mongoose.connect('mongodb://localhost:27017/goalTracker')
    .then(() => {
        log("connection successful!")
    })
    .catch((err) => {
        log("connection failed:(")
        log(err)
        log(`test... ${err}`)
    })

    const goalSchema = new mongoose.Schema({
        title: String,
        achieved: Boolean
    })

    const Goal = mongoose.model('Goal', goalSchema)

    const greenJuice = new Goal({title: 'drank green juice', achieved: true})

    const water = new Goal({title: 'drank 1 litre water', achieved: true})
    water.save()

    Goal.insertMany([
        {title: '15+ min workout', achieved: true},
        {title: 'fruit at every meal', achieved: true},
        {title: 'in bed by 11:15', achieved: true},
    ])
        .then((data) => {
            log(`it worked:)`)
            log(data)
        })
        .catch((err) => {
            log("didn't work")
            log(err)
        })


    Goal.updateOne({ title: "wake up" }, { title: "eat at or below tdee" } )

    