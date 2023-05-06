import React from "react";
import { createUseStyles } from "react-jss";
import NavBarComponent from "../../components/NavBar";

const useStyles = createUseStyles({
    containersPages:{
       width:'calc(100% - 300px)',
       height:'100vh',
       background:"#F4F7F8"
    }
})

const DashboardPage = ()=>{
    const {containersPages} = useStyles()
    return(
        <div style={{display:'flex'}}>
        <NavBarComponent></NavBarComponent>
        <section className={containersPages}>
            
        </section>
        </div>
    )
}

export default DashboardPage;