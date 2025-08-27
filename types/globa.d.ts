declare global {
  type Course = {
    id: number,
    img: string,
    title: string,
    description?: string,
    createdAt?: string,
    duree?: string,
    nonDisponible?: boolean,
    categorie?: string,
    sommaire?: string[],
    ceQueVousApprendrez?:string[],
    prerequis?:string[],
    publicCible?:string,
  }
}

export { }