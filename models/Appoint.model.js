const mongoose=require("mongoose");

const appointSchema=mongoose.Schema({
    "name": String,
	"image": String,
	"specialization": String,
	"experience": Number,
	"location": String,
	"date": String,
	"slots" : Number,
	"fee": Number
})

const AppointModel=mongoose.model("appointments",appointSchema)

module.exports={
    AppointModel
}

// [
// 	{
// 	  "name": "Jane Doe",
// 	  "image": "https://example.com/doctor-image.jpg",
// 	  "specialization": "Dermatologist",
// 	  "experience": 10,
// 	  "location": "Los Angeles",
// 	  "date": "2023-04-05T12:00:00.000Z",
// 		"slots" : 2,
// 	  "fee": 150
// 	},
// 	{
// 	  "name": "Mark Johnson",
// 	  "image": "https://example.com/doctor-image.jpg",
// 	  "specialization": "Pediatrician",
// 	  "experience": 5,
// 	  "location": "Chicago",
// 	  "date": "2023-04-06T09:30:00.000Z",
// 		"slots" : 1,
// 	  "fee": 100
// 	}
// ]