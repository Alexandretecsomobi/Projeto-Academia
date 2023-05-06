import React from "react";
import { createUseStyles } from "react-jss";
import {BsFillGridFill,BsCardChecklist} from 'react-icons/bs'
import {FiUser} from 'react-icons/fi'
import {BiLineChart} from 'react-icons/bi'
import {GrGroup} from 'react-icons/gr'
import {TbReportMoney} from 'react-icons/tb'

const useStyles = createUseStyles({
    containerNavbar:{
        width:'300px',
        height:'100vh',
        background:'#4B9093',
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    boxbtnlist:{
        display:"flex",
        flexDirection:"column",
        alignItems:"start",
        width:"90%",
        gap:"30px"
  
    },
    btnnavbar:{
        background:'none',
        color:'#fff',
        fontSize:"18px",
        transition:"0.3s ease", 
        '&:hover':{
            color:"#F59A73"
        }
    },
    footer:{
        display:"grid",
        width:"90%",
    }
})

const buttonsNavBar = [
    {id:1,title:'Geral',icon:<BsFillGridFill></BsFillGridFill>,url:''},
    {id:2,title:'Alunos',icon:<FiUser></FiUser>,url:''},
    {id:3,title:'Gestão de matriculas',icon:<BsCardChecklist></BsCardChecklist>,url:''},
    {id:4,title:'Faturamento',icon:<BiLineChart></BiLineChart>,url:''},
    {id:5,title:'Funcionários',icon:<GrGroup color='#fff'></GrGroup>,url:''},
    {id:6,title:'Contas à pagar',icon:<TbReportMoney></TbReportMoney>,url:''},
]

const NavBarComponent = ()=>{

    const {containerNavbar,boxbtnlist,btnnavbar,footer} = useStyles();
    
    return(
        <nav className={containerNavbar}>
            <div style={{width:"100%"}}>
                logo aqui
            </div>
           <div className={boxbtnlist}>
            {buttonsNavBar.map(item =>{
                return(
                    <button className={btnnavbar} key={item.id}>{item.icon} {item.title}</button>
                )
            })}
           </div>
           <footer className={footer}>
            <button className={btnnavbar}>Configurações</button>
            <button className={btnnavbar}>sair</button>
           </footer>
        </nav>
    )
}
export default NavBarComponent;