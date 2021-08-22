import {Plan, Price} from '../Models';
import jwt from 'jsonwebtoken';

let plan_routes = {};

plan_routes.get_plan = async (req, res) => {

    try{
        let { nome } = req.query
        let plan = await Plan.findOne({nome: nome})
        if (plan){
            return res.status(200).json({plan})
        }else{
            return res.status(400).json({message: "Plano não encontrado =/"})
        }
    } catch (error) {
        return res.status(400).json({error});
    }
}
plan_routes.get_plans = async (req, res) => {
    try{
        let plans = await Plan.find({})
        // console.log(plans)
        if (plans){
            return res.status(200).json({plans})
        }else{
            return res.status(400).json({message: "Plano não encontrado =/"})
        }
    } catch (error) {
        return res.status(400).json({error});
    }
}

export { plan_routes };
