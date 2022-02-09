import ReactPlayer from "react-player"

export function Model2(props) {

    let modelStyle = {
        position: 'absolute',
        left: '0',
        rigth: '50%',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.8)',
        padding: '10px',
        boxShadow: '2px 2px 2px 2px rgba(0,0,0,.1)',
    }

    let buttonStyle = {
        width: '100%',
        height: '30px',
        border: 'None',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #fff',
        color: '#fff',
        fontWeght: '500',
        cursor: 'pointer'
    }

    return (
        <div className="modal show fade" style={modelStyle}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.title}</h5>
                        <button type="button" style={buttonStyle} onClick={props.hide}>Close</button>
                    </div>
                    <div className="modal-body">
                        <img src={props.img} className="img-fluid"/>
                        <ReactPlayer  controls url={props.desc} />
                    </div>
                </div>
            </div>
        </div>
    )
}