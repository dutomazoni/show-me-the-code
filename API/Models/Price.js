import { model, Schema } from 'mongoose';

const price = new Schema(
    {
        origem: {
            type: String,
            required: true
        },
        destino: {
            type: String,
            required: true
        },
        valor_min: {
            type: String,
            required: true
        },
    }
);
const Price = model('Price', price, 'Prices');

export { Price };
