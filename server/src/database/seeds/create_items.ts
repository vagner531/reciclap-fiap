import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Lâmpadas', image: 'lampadas.svg'},
    {title: 'Pilhas e Baterias', image: 'baterias.svg'},
    {title: 'Papéis e papelão', image: 'papeis-papelao.svg'},
    {title: 'Residuos Eletrôcos', image: 'eletronicos.svg'},
    {title: 'Residuos Orgânicos', image: 'organicos.svg'},
    {title: 'Óleo de Cozinha', image: 'oleo.svg'},
  ]);
} 
