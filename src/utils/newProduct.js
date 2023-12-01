import { Link } from "react-router-dom"

export default function newProduct(cod, description, size){
    const newRow = document.createElement('tr')
    const structure = `
    <tr>
    <td data-cod>${cod}</td>
    <td data-description>${description}</td>
    <td data-size>${size}</td>
    <td data-control>
    <ul class="tabela__botoes-controle">
    <li><a class="botao-simples botao-simples--editar" href="/editar">Editar</a></li>
    <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
    </ul>
    </td>
    </tr>
    ` 
    newRow.innerHTML = structure
    newRow.dataset.id = cod
    return newRow
}