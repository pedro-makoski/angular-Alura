export interface Contato {
  id: number
  nome: string
  telefone: string
  email: string
  aniversario?: string
  redes?: string 
  observacao?: string,
  avatar: string | ArrayBuffer  
}
