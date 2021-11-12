//aplicando estilos en ReactJS

export default function Cargando() {
    
    return (
        //los estilos inline en react son un 
        //objeto
        <div
            style={
                {
                    position:'fixed',
                    top:0,
                    left:0,
                    width:'100vw',
                    height: '100vh',
                    zIndex:'99',
                    backgroundcolod:'white'
                }
            }
        >
            <i className="fas fa-cog fa-spin fa-6x" style={
                {
                    color:"slateblue",
                    position:"absolute",
                    top:"calc(50% - 50px)",
                    left:"calc(50% - 50px)",
                }
            }></i>
        </div>
    )
}
