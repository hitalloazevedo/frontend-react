import style from '../assets/css/Form.module.css'

export default function Form(props) {
    return <form id="new-item-form" onSubmit={async (e) => await props.funcSubmit(e, props.itemId)}>
    <h2>{props.title}</h2>
    <div className="input-field">
        <label htmlFor="codeInput">Código</label>
        <input onChange={(e) => props.funcHandle(e)} type="number" id="codeInput"/>
        <label htmlFor="descriptionInput">Descrição</label>
        <input onChange={(e) => props.funcHandle(e)} type="text" id="descriptionInput"/>
        <label htmlFor="sizeInput">Tamanho</label>
        <input onChange={(e) => props.funcHandle(e)} type="text" id="sizeInput"/>
    </div>
    <div className="button-field">
        <input type="submit" id="btnSend" value={props.type}/>
    </div>
</form>
}