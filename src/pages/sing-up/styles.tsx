import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container:{
        width:'100%',
        height:"100vh",
        background:'linear-gradient(90deg , #4B9093 0%, #183d3e 100%);',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
})

export default useStyles;