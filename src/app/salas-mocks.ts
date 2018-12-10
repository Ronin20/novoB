import { Categoria } from './shared/categoria.model';
import { Sala } from './shared/sala.model';

export const SALAS_E: Sala[]  = [
    {
        id: '123',
        categorias:  [{
            titulo: 'Categoria 1',
            ideias: [{
                titulo: 'ideia 1',
                user: 'ranielisonsoares2@gmail.com'
            }]
        }],
        admin: 'ranielisonsoares'
    },

    {
        id: '124',
        categorias:  [{
            titulo: 'Categoria 2',
            ideias: [{
                titulo: 'ideia 2',
                user: 'ranielisonsoares2@gmail.com'
            }]
        }],
        admin: 'ranielisonsoares'
    },

    {
        id: '125',
        categorias:  [{
            titulo: 'Categoria 4',
            ideias: [{
                titulo: 'ideia 3',
                user: 'ranielisonsoares2@gmail.com'
            }]
            
        },
        
        {
            titulo: 'Categoria 5',
            ideias: [{
                titulo: 'ideia 3',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 4',
                user: 'ranielisonsoares2@gmail.com'
            }]
        },
        {
            titulo: 'Categoria 6',
            ideias: [{
                titulo: 'ideia 7',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 8',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 9',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 10',
                user: 'ranielisonsoares2@gmail.com'
            }]
        },
        {
            titulo: 'Categoria 8',
            ideias: [{
                titulo: 'ideia 11',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 12',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 13',
                user: 'ranielisonsoares2@gmail.com'
            },
            
            {
                titulo: 'ideia 14',
                user: 'ranielisonsoares2@gmail.com'
            }]
        }],
        admin: 'ranielisonsoares'
    }
]