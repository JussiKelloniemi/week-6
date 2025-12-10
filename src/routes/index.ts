import {Request, Response, Router} from "express"
import {Offer, IOffer} from "../models/Offer"

const router: Router = Router()

router.post("/upload",  async (req: Request, res: Response) => {
    try {
        console.log("POST /upload called!")
        console.log("Request body:", req.body)

        const { title, price, description } = req.body

        const offer: IOffer = new Offer({
            title: title,
            price: price,
            description: description
        })
        await offer.save()
        console.log("Offer uploaded and saved in database")
        return res.status(201).json({message: "Offer uploaded and saved in database"})

        
    } catch(error: any) {
        console.error(`Error saving offer: ${error}`)
        return res.status(500).json({message: 'Internal server error'})
    }
})

export default router