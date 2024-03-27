// """"api"""" 👍👍

import { OrderType } from '../definitions/data';
import companyLogo from './assets/company.png';
import productImg from './assets/food.png';

export function getOrderInfo(): OrderType {
    return {
        company: {
            name: 'Matsuri Concept',
            logo: companyLogo,
        },
        product: {
            name: "Ceviche de salmão",
            img: productImg,
            description: 'salmão temperado com limão, cebola e pimenta'
        },
        product_sizes: [
            {
                id: 'medio',
                name: 'médio',
                old_price: 22.90,
                price: 19.90
            },
            {
                id: 'grande',
                name: 'grande',
                price: 28.90
            }
        ],
        drinks: [
            { id: 'coca-cola', name: 'coca-cola', price: 5 },
            { id: 'suco-prats', name: 'suco prats laranja', price: 6 },
            { id: 'agua-sem-gas', name: 'água sem gás', price: 3 },
        ],
        cutlery: [
            { id: 'hashi', name: 'hashi', price: 0 },
            { id: 'garfo-faca', name: 'garfo e faca descartável', price: 1 },
        ],
        extras: [
            { id: 'bisc-sorte', name: 'biscoitos da sorte', price: 2 },
            { id: 'rolinho', name: 'rolinho primavera', price: 8 },
        ]

    };
}
