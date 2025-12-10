import mongoose, {Document, Schema} from "mongoose";

interface IOffer extends Document {
    title: string
    description: string
    price: number
    createdAt: Date
}

const offerSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
})

const Offer: mongoose.Model<IOffer> = mongoose.model<IOffer>("Offer", offerSchema)

export {Offer, IOffer}