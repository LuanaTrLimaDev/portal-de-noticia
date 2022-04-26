import api from "./api"

export const getNoticia = ({ busca }) => {
    //se receber uma pesquisa a resposta é conteudo da pesquisa  caso contrario o filtro é o brasil
    const baseURL = `?apiKey=e1f24bbfb26a40f18a05bdf1328bb7ee&${busca ? "q=" + busca : "country=br"}`
    return api.get(baseURL)
}