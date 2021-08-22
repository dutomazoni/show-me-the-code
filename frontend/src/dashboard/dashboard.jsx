import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/scss/dashboard.scss'
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button, Input, InputLabel, MenuItem, Select} from "@material-ui/core";


export default () => {
    let [origem, setOrigem] = useState('');
    let [destino, setDestino] = useState('');
    let [duracao, setDuracao] = useState('');
    let [disableInput, setDisableInput] = useState(false);
    let [plan, setPlan] = useState('');
    let [price, setPrice] = useState('');


    const getPlan =  (plan) => {
        axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
        axios.get(process.env.REACT_APP_API_URL + "/plan?nome=" + plan)
            .then((response) => {
                console.log(response)
                setPlan(response.data.plan)
            })
    }

    const getPrice = (origem, destino) => {
        axios.get(process.env.REACT_APP_API_URL + "/price?origem="+origem+"&destino="+destino)
            .then((response) => {
                setPrice(response.data.price)
                setDisableInput(true)
            })
    }

    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: "lightpink",
            color: "purple",
            fontSize: 20
        },
        body: {
            fontSize: 16,
        },
    }))(TableCell);


    const initialState = () => {
        setPrice('');
        setDisableInput(false);
        setOrigem('');
        setDestino('');
        setDuracao('');
        setPlan('');
    }


    const priceTable = (origem, destino, duracao, plan) => {
        return (
            <div className={"table-div"}>
                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Origem</StyledTableCell>
                                <StyledTableCell align="center">Destino</StyledTableCell>
                                <StyledTableCell align="center">Tempo</StyledTableCell>
                                <StyledTableCell align="center">Plano FaleMais</StyledTableCell>
                                <StyledTableCell align="center"><strong>Com FaleMais</strong></StyledTableCell>
                                <StyledTableCell align="center"><strong>Sem FaleMais</strong></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <StyledTableCell align="center">
                                    {origem}
                                </StyledTableCell>
                                <StyledTableCell  align="center">
                                    {destino}
                                </StyledTableCell>
                                <StyledTableCell  align="center">
                                    {duracao} min
                                </StyledTableCell>
                                <StyledTableCell  align="center">
                                    {plan.nome}
                                </StyledTableCell>
                                <StyledTableCell  align="center">
                                    R$ {plan.minutos > duracao ? '0' : ((duracao - plan.minutos) * 1.1 * price.valor_min).toFixed(2)}
                                </StyledTableCell>
                                <StyledTableCell  align="center">
                                    R$ {(duracao * price.valor_min).toFixed(2)}
                                </StyledTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }


    return (
        <div className={"container"}>
            <h1 color={"purple"}> Simule o valor de uma ligação:</h1>
            <form className={"form"} variant={"filled"} style={{margin:"1vw"}}>
                <InputLabel style={{margin:"1vw"}}>DDD Origem</InputLabel>
                <Select
                    id="demo-simple-select-label"
                    style={{minWidth: "6vw"}}
                    value={origem}
                    disabled={disableInput}
                    onChange={e => setOrigem(e.target.value)}
                >
                    <MenuItem value={"011"} disabled={destino === "011"}>011</MenuItem>
                    <MenuItem value={"016"} disabled={destino && destino !== "011"}>016</MenuItem>
                    <MenuItem value={"017"} disabled={destino && destino !== "011"}>017</MenuItem>
                    <MenuItem value={"018"} disabled={destino && destino !== "011"}>018</MenuItem>
                </Select>

                <InputLabel style={{margin:"1vw"}} >DDD Destino</InputLabel>
                <Select
                    style={{minWidth: "6vw"}}
                    value={destino}
                    disabled={disableInput}
                    onChange={e => setDestino(e.target.value)}
                >
                    <MenuItem value={"011"} disabled={origem === "011"}>011</MenuItem>
                    <MenuItem value={"016"} disabled={origem && origem !== "011"}>016</MenuItem>
                    <MenuItem value={"017"} disabled={origem && origem !== "011"}>017</MenuItem>
                    <MenuItem value={"018"} disabled={origem && origem !== "011"}>018</MenuItem>
                </Select>

                <InputLabel style={{margin:"1vw"}}>Duração em minutos</InputLabel>
                <Input placeholder="ex: 30" style={{width: "6vw"}} value={duracao} disabled={disableInput} onChange={e => setDuracao(e.target.value)} variant={"outlined"}/>

                <InputLabel style={{margin:"1vw", minWidth: "auto"}}>Plano</InputLabel>
                <Select
                    style={{minWidth: "6vw"}}
                    value={plan}
                    onChange={e => setPlan(e.target.value)}
                    disabled={disableInput}
                    placeholder="FaleMais 30"
                >
                    <MenuItem value={"FaleMais 30"}>FaleMais 30</MenuItem>
                    <MenuItem value={"FaleMais 60"}>FaleMais 60</MenuItem>
                    <MenuItem value={"FaleMais 120"}>FaleMais 120</MenuItem>
                </Select>

                <Button variant="contained" disableElevation style={{background:"purple", color: "white", width: "auto", padding: "1vh", marginLeft:"3vh"}}
                        onClick={() => {getPrice(origem, destino); getPlan(plan)}}> Simular </Button>
            </form>

            {price ? priceTable(origem, destino, duracao, plan) : <div/>}
            {disableInput ? <Button variant="contained" disableElevation style={{background:"purple", color: "white", width: "auto", padding: "1vh", margin:"3vh"}}
                                    onClick={() => initialState() }>Nova simulação </Button> : <div/> }

        </div>
    )

}
