export interface Todo {
    /*O ? indica que essa variavel é opcional
    quando instanciarmos um novo Todo*/
    id?: String,
    /*ao contrário do anterior, este é obrigatório*/
    titulo: String,
    descricao: String,
    dataParaFinalizar: Date,
    finalizado: Boolean
}