import ReactPlayer from "react-player"

export function Model(props) {

    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',
    }
    
    return (
        <div className="modal show fade" style={modelStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" className="btn-close" onClick={props.hide}></button>
                    </div>
                    <div className="modal-body">
                        <img src={props.img} className="img-fluid"/>
                        <ReactPlayer url={props.desc} />
                    </div>
                </div>
            </div>
        </div>
    )
}