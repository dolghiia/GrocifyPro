const grocery_scraper = require('../../../grocifyScraper/index');
const food = require('../models/food')
const mongoose = require('mongoose')

async function pull_scraped_data() {
    await mongoose.connect(''); //omitted for privacy
    var week_ago = new Date(Date.now());
    week_ago.setDate(week_ago.getDate() - 7);
    const update = await food.find({updatedAt : { $gt : week_ago} })
    if (update.length == 0) {
        var grocery_json = await grocery_scraper.pull_grocery_data().catch(console.log)
        for (var grocery_item of grocery_json) {
            const res = await food.findOne({name: grocery_item["name"], category: grocery_item["category"]})
            console.log(res)
            if (res != null) {
                food.updateOne({name: grocery_item["name"], category: grocery_item["category"]}, grocery_item)
            }
            else {
                const res = new food(grocery_item)
                res.save()
                console.log(res)
            }
        }
    }
}

module.exports = {
	pull_scraped_data
};