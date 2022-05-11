import {clone as _clone, map as _map} from 'lodash';

const mockTransports = [
    {
        brand: 'Subaru',
        type: 'sport',
        transport_type: 'car',
        status: false,
        carcass: 'седан',
        power: 200,
        color: 'red',
        userId: ''
    },
    {
        brand: 'Bugatti',
        type: 'sport',
        transport_type: 'car',
        status: false,
        carcass: 'седан',
        power: 600,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx7r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx8r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx9r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx10r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx11r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx12r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx13r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx14r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx15r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx16r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx17r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx18r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx19r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx20r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx21r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx22r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    },
    {
        brand: 'Suzuki Zx23r',
        type: 'sport',
        transport_type: 'moto',
        carcass: 'Sport bike',
        status: true,
        power: 151,
        color: 'black',
        userId: ''
    }
];

function createManyTransports(mockTransports, count) {
    const clonedTransports = _clone(mockTransports);
    const createdManyTransports = _map(new Array(count).fill(null), (_, index) => {
        return {
            brand: `Suzuki Zx${index}r`,
            type: `sport ${index}`,
            transport_type: `moto ${index}`,
            carcass: `Sport bike ${index}`,
            status: index % 2 === 0,
            power: 151,
            color: 'black',
            userId: ''
        }
    })

    return [...clonedTransports, ...createdManyTransports];
}

export const manyTransportsMock = createManyTransports(mockTransports, 500);
