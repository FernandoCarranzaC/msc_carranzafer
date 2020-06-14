import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import {Fab, TextFiel, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons";
import PersonIcon from '@material-ui/icons/Person';

import { Container, 
         Button, 
         List,
         ListItem,
         ListSubheader,
         ListItemText,
         ListItemIcon
} from "@material-ui/core";

class Catalogos extends Component {
    // state = {  }
    titulo="catalogo";
    catologos = [];
    
    frmClave = React.createRef();
    frnCategoria =React.createRef();
    frnNombre = React.createRef();
    frnObjetivo = React.createRef();
    frnContenido = React.createRef();
  

    AddCatalogo = event =>
    {
        this.catologos.push(this.frnNombre.value);
    }


    render() {
        return(
            <div className = "App-content">
               <Link to="/">
                    <Button
                        variant="contained"
                        color="default"
                        size="small"
                        startIcon={<HomeIcon />}
                    >
                    Regresar
                    </Button>
                    
                </Link>
                <h4> CATALOGO DE ACTIVIDADES COMPLEMENTARIAS </h4>
            <div className = "App-catalogo">
            <form autoComplete="off" onSubmit={this.AddCatalogo} >
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                        >
                        Registro
                </Button> 
                &nbsp;&nbsp;
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                        >
                        Modifica
                </Button>
                &nbsp;&nbsp; 
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                        >
                        Consultar 
                </Button> 
                &nbsp;&nbsp;
                <Button
                            variant="contained"
                            color="default"
                            size="small"
                        >
                        Elimina 
                </Button> 
          
                <br></br>
                <TextField
                    label ="Clave: "
                    type = "text"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    inputRef ={e=>(this.frnNombre=e)}
               />
               &nbsp;&nbsp;
               <TextField
                    label ="Categoria: "
                    type = "text"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    inputRef ={e=>(this.frnCategoria=e)}
               />
                <br></br>
               <TextField
                    label ="Nombre: "
                    type = "text"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    inputRef ={e=>(this.frnNombre=e)}
               />
                <br></br>
               <TextField
                    label ="Objetivo: "
                    type = "text"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    inputRef ={e=>(this.frnObjetivo=e)}
               />
                <br></br>
               <TextField
                    label ="Contenido: "
                    type = "memo"
                    margin = "Normal"
                    variant = "outlined"
                    align = "left"
                    inputRef ={e=>(this.frnContenido=e)}
               />

            </form>
            </div>
            </div>
        );
    }
}
export default Catalogos;