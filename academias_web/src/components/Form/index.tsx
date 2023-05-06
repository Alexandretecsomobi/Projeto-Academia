import React from 'react'
import {createUseStyles} from 'react-jss'
import { Link } from 'react-router-dom'

type FormOptions = {
  type: 'register' | 'login',
}

const useStyles = createUseStyles({
    formContainer:{
        width:'600px',
        height:"300px",
        background:"#fff",
        borderRadius:"5px",
        display:"flex",
        justifyContent:'center',
        alignItems:'center'
    },
    boxInputs:{
        width:"90%",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:'center',
        gap:"10px",
        marginBottom:"1rem"
    } ,
    input:{
     height:"30px",
     borderRadius:"10px",
     border:"1px solid silver",
     paddingLeft:"5px"
    },
    buttonsubmit:{
        width:"200px",
        height:"30px",
        background:"#2d2d2d",
        color:"#fff"
    },
    link:{
        color:"#2d2d2d",
    }
    
})

const Form = ({type}:FormOptions)=>{

    const {formContainer,boxInputs,input,buttonsubmit,link} = useStyles();
    return(
        <form className={formContainer}>
            {
                type === 'register' ? 
                <div style={{width:'100%',display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div className={boxInputs}>
                  <input className={input} type='text' name='user' placeholder='Digite um nome de usuário'></input>
                  <input className={input} type='email' name='email' placeholder='E-mail'></input>
                  <input className={input} type='text' name='name' placeholder='Nome completo'></input>
                  <input className={input} type='text'  placeholder='telefone'></input>
                  <input className={input} type='text'  placeholder='cnpj'></input>
                  <input className={input} type='text'  placeholder='Cep'></input>
                  <input className={input} type='text'  placeholder='Endereço'></input>
                  <input className={input} type='password' name='password'  placeholder='senha'></input>
                  <input className={input} type='password' name='password'  placeholder='Digite novamente a senha'></input>
                  </div>
                  <button className={buttonsubmit} type='submit'>Finalizar</button>
                  <Link className={link} to={'/login'}>Fazer login</Link>
                </div>
                :
                <div style={{width:'100%',display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <div className={boxInputs}>
                  <input className={input} type='email' name='email' placeholder='E-mail / usuário'></input>
                  <input className={input} type='password' name='password'  placeholder='senha'></input>
                  </div>
                  <button className={buttonsubmit} type='submit'>Entrar</button>
                </div>
            }
        </form>
    )
}
export default Form;

