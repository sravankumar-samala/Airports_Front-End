import { v4 as uuid } from 'uuid'

export const airportsList = [
    {
        id: uuid(),
        name: 'Indra Gandhi Internation Airport',
        country: 'India',
        code: 'DEL',
        terminals: 3
    },
    {
        id: uuid(),
        name: 'Dubai Internation Airport',
        country: 'UAE',
        code: 'DXB',
        terminals: 5
    },
    {
        id: uuid(),
        name: 'Heathrow Airport',
        country: 'England',
        code: 'LHR',
        terminals: 6
    },
]

export const terminals = []