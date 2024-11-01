
import { mongoose } from 'mongoose';





const restaurentModel = new mongoose.Schema({
    name:String
})

export const restaurentSchema = mongoose.models.foods || mongoose.model('foods',restaurentModel)