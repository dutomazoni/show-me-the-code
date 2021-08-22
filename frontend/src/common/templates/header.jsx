import React from 'react'
import '../../styles/scss/header.scss'
import PhoneIcon from '@material-ui/icons/Phone';
import {AppBar, IconButton,Toolbar, Typography} from "@material-ui/core";

export default function props() {
    return (
        <div>
            <AppBar position="static" style={{background:"purple"}}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <PhoneIcon style={{fontSize: 40}} />
                    </IconButton>
                    <Typography variant="h4" style={{flexGrow: 1}}>
                        VxTel
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

// export default props => (
//     <header className={'main-header'} >
//         <a href={'/'} className={'logo'}>
//                 <span className={'logo-lg'} style={{color: "purple"}}>
//                     <b className={"h1"}><PhoneIcon style={{fontSize: 40, color: "purple"}}/> <strong>VxTel</strong> </b>
//                 </span>
//         </a>
//     </header>
// )
