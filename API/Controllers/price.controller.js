import { Price } from '../Models';
import jwt from 'jsonwebtoken';

let price_routes = {};

price_routes.get_price = async (req, res) => {

    try{
        let { origem, destino } = req.query
        let price = await Price.findOne({origem: origem, destino: destino})
        if (price){
            return res.status(200).json({price})
        }else{
            return res.status(400).json({message: "Operação não encontrada =/"})
        }
    } catch (error) {
        return res.status(400).json({error});
    }
}

export { price_routes };
