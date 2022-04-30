export class Cafe {
  id: number;
  nombre: string;
  tipo: CafeTypes
  region: string;
  image: string;
  sabor: string;

  constructor(
    id: number,
    nombre: string,
    tipo: CafeTypes,
    region: string,
    image: string,
    sabor: string
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.image = image;
    this.sabor = sabor;
  }
 }

 export enum CafeTypes {
  BLENDED = 'Blend',
  ORIGEN = 'Café de Origen'
}
