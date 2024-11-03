
import { mongoose } from 'mongoose';





const restaurentModel = new mongoose.Schema({
    email:String,
    password : String,
    name : String,
    city : String,
    address : String,
    contact : String,
})

export const restaurentSchema = mongoose.models.foods || mongoose.model('foods',restaurentModel)