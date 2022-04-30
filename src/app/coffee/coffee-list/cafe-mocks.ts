import { Cafe, CafeTypes } from './../Cafe';

import { faker } from '@faker-js/faker';

export const cafeMockData: Cafe[] = [
{
id: faker.datatype.number({ min: 1, max: 50}),
nombre: faker.name.findName(),
region: faker.name.findName(),
sabor: faker.commerce.productDescription(),
image: faker.image.imageUrl(),
tipo: faker.random.arrayElement(['Blend', 'Café de Origen']) as CafeTypes
},
{
  id: faker.datatype.number({ min: 1, max: 50}),
  nombre: faker.name.findName(),
  region: faker.name.findName(),
  sabor: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  tipo: faker.random.arrayElement(['Blend', 'Café de Origen']) as CafeTypes
},
{
  id: faker.datatype.number({ min: 1, max: 50}),
  nombre: faker.name.findName(),
  region: faker.name.findName(),
  sabor: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  tipo: faker.random.arrayElement(['Blend', 'Café de Origen']) as CafeTypes
},
{
  id: faker.datatype.number({ min: 1, max: 50}),
  nombre: faker.name.findName(),
  region: faker.name.findName(),
  sabor: faker.commerce.productDescription(),
  image: faker.image.imageUrl(),
  tipo: faker.random.arrayElement(['Blend', 'Café de Origen']) as CafeTypes
}
]