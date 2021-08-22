import { model, Schema } from 'mongoose';

const plan = new Schema(
    {
        nome: {
            type: String,
            required: true
        },
        minutos: {
            type: Number,
            required: true
        }
    }
);
const Plan = model('Plan', plan, 'Plans');

export { Plan };
