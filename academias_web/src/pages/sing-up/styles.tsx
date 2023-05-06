import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    container:{
        width:'100%',
        height:"100vh",
        background:'linear-gradient(180deg, #4B9093 0%, #121212 100%);',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
})

export default useStyles;