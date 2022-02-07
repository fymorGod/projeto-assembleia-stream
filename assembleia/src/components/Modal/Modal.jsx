export function Modal({closeModal}){
    return(
        <div className="modal">
            <div className="modalContainer">
                <button onClick={()=> closeModal(false)}> X </button>
                <h2>salve</h2>
            </div>
        </div>
    )
}