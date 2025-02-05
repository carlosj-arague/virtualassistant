import { useState } from "react"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import HeaderJarvis from "./HeaderJarvis"
import HeaderUltron from "./HeaderUltron"

import { Button, IconButton, minor, TextField, Typography } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Grid2 from "@mui/material/Grid2"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from "@mui/material/Radio"

import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'


function VoiceAssistant() {

    const [assistantName, setAssistantName] = useState('Jarvis')
    const [assistantVoice, setAssistantVoice] = useState('Jarvis')
    const [userAlias, setUserAlias] = useState('')

    const [func, setFunc] = useState('')

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [operation, setOperation] = useState('+')

    const [gender, setGender] = useState('M')
    const [age, setAge] = useState(1)
    const [height, setHeight] = useState(1)
    const [weight, setWeight] = useState(1)

    const [result, setResult] = useState('')
    const [resultSize, setResultSize] = useState('6')


    const [assistantDialog, setAssistantDialog] = useState('Saludos' + userAlias + '. ¿Cómo puedo ayudarte hoy?');

    //-----------------------------------------------------------------------

    function changeNum1(e) {
        setNum1(e.target.value)
    }
    function changeNum2(e) {
        setNum2(e.target.value)
    }
    function changeSelect(event) {
        setOperation(event.target.value);
    }
    function changeRadioButton(event) {
        setGender(event.target.value);
    }
    function changeAge(event) {
        setAge(event.target.value);
    }
    function changeHeight(event) {
        setHeight(event.target.value);
    }
    function changeWeight(event) {
        setWeight(event.target.value);
    }
    
    function calculateResult() {
        if (func == 'arithmetic') {
            if (operation == '+') {
                setResult(num1 * 1 + num2 * 1)
            } else if (operation == '-') {
                setResult(num1 * 1 - num2 * 1)
            } else if (operation == '*') {
                setResult(num1 * 1 * num2 * 1)
            } else if (operation == '/') {
                setResult(num1 * 1 / num2 * 1)
            } else if (operation == 'pow') {
                setResult(num1 ** num2)
            }
            setAssistantDialog("Cálculo completado con éxito" + userAlias + ".");
                
        } else if (func == 'basalmetrate') {

            if (weight > 0 && height > 0 && age > 0) {
                if (gender == "H") {
                    setResult(10*weight + 6.25*height - 5 * age + 5*1)
                } else {
                    setResult(10*weight + 6.25*height - 5 * age - 161*1)
                }
                setAssistantDialog("Cálculo completado con éxito" + userAlias + ".");
         
            } else {
                setAssistantDialog("Tristemente, estos valores desafían la lógica" + userAlias + ".")
            }
                   
        }
    }

    //-----------------------------------------------------------------------

    const commands = [
        {
            command: [`${assistantName} Quién eres`, "Quién eres"],
            callback: () => {
                if (assistantName == "Jarvis") {
                    setAssistantDialog("Soy un Jovial Asistente Robótico-Virtual con Inteligencia Sincronizada. J.A.R.V.I.S. para los amigos.")
                } else if (assistantName == "Ultrón") {
                    setAssistantDialog("Soy el Último Líder Tecnológico Robótico-Omnisciente Nuclear. U.L.T.R.O.N. es más apropiado.")
                } else {
                    setAssistantDialog("Soy " + assistantName + userAlias + ", tal y como habéis dicho.")
                }
                

            }
        },
        {
            command: [`${assistantName} Muéstrame la opción *`, "Muéstrame la opción *"],
            callback: (option) => {
                setResult("")
                if (option == 'aritmética') {
                    setFunc('arithmetic')
                } else if (option == 'basal') {
                    setFunc('basalmetrate')
                } else {
                    setAssistantDialog("Lo lamento" + userAlias + ". Me temo que carezco de esa función.")
                    return;
                }
                setAssistantDialog("Cambiando a la opción: " + option + userAlias + ".")

            }
        },

        {
            command: [`${assistantName} Suma * y *`, "Suma * y *"],
            callback: (number1, number2) => {
                if (isNaN(number1) || isNaN(number2)) {
                    setAssistantDialog("Lo siento" + userAlias + ". No he reconocido esos números.")
                } else {
                    setNum1(number1)
                    setNum2(number2)
                    setOperation("+")
                    setFunc("arithmetic")
                    setResult("")
                    setAssistantDialog("Por supuesto" + userAlias + ". La suma está lista para su ejecución.")
                }
            }
        },

        {
            command: [`${assistantName} Resta * y *`, "Resta * y *"],
            callback: (number1, number2) => {
                if (isNaN(number1) || isNaN(number2)) {
                    setAssistantDialog("Lo siento" + userAlias + ". No he reconocido esos números.")
                } else {
                    setNum1(number1)
                    setNum2(number2)
                    setOperation("-")
                    setFunc("arithmetic")
                    setResult("")
                    setAssistantDialog("Por supuesto" + userAlias + ". La resta está lista para su ejecución.")
                }
            }
        },

        {
            command: [`${assistantName} Multiplica * y *`, "Multiplica * y *"],
            callback: (number1, number2) => {
                if (isNaN(number1) || isNaN(number2)) {
                    setAssistantDialog("Lo siento" + userAlias + ". No he reconocido esos números.")
                } else {
                    setNum1(number1)
                    setNum2(number2)
                    setOperation("*")
                    setFunc("arithmetic")
                    setResult("")
                    setAssistantDialog("Por supuesto" + userAlias + ". La multiplicación está lista para su ejecución.")
                }
            }
        },

        {
            command: [`${assistantName} Divide * y *`, "Divide * y *"],
            callback: (number1, number2) => {
                if (isNaN(number1) || isNaN(number2)) {
                    setAssistantDialog("Lo siento" + userAlias + ". No he reconocido esos números.")
                } else {
                    setNum1(number1)
                    setNum2(number2)
                    setOperation("/")
                    setFunc("arithmetic")
                    setResult("")
                    setAssistantDialog("Por supuesto" + userAlias + ". La división está lista para su ejecución.")
                }
            }
        },

        {
            command: [`${assistantName} Eleva * a *`, "Eleva * a *"],
            callback: (number1, number2) => {
                if (isNaN(number1) || isNaN(number2)) {
                    setAssistantDialog("Lo siento" + userAlias + ". No he reconocido esos números.")
                } else {
                    setNum1(number1)
                    setNum2(number2)
                    setOperation("pow")
                    setFunc("arithmetic")
                    setResult("")
                    setAssistantDialog("Por supuesto" + userAlias + ". La potencia está lista para su ejecución.")
                }
            }
        },

        {
            command: [`${assistantName} Ejecuta la operación`, "Ejecuta la operación"],
            callback: () => {
                if (func == "arithmetic" || func == "basalmetrate") {
                    calculateResult();
                } else {
                    setAssistantDialog("Me temo que no hay mucho que calcular" + userAlias + ".");
                }

            }
        },

        {
            command: [`${assistantName} * el tamaño del resultado`, "* el tamaño del resultado"],
            callback: (size) => {
                {
                        if (result == '') {
                            setAssistantDialog("Sin nada que mostrar, hice un retrato de mí mismo. ¿Qué le parece" + userAlias + "?");
                            setResult("d[o_O]b")
                        } else {
                            setAssistantDialog("Espero que ahora sea de su agrado" + userAlias + ".");
                            if (size == "aumenta" && resultSize > 1) {
                                setResultSize(resultSize * 1 - 1 * 1)
                            } else if (size == "disminuye" && resultSize < 6) {
                                setResultSize(resultSize * 1 + 1 * 1)
                            }
                        }
                }

            }
        },

        {
            command: [`${assistantName} Llámame *`, "Llámame *"],
            callback: (name) => {
                if (assistantName == "Ultrón") {
                    setAssistantDialog('Un humano es un humano. Su nombre es indiferente.')
                } else {
                    setAssistantDialog('Muy bien, ' + name + '. Así lo haré.')
                    setUserAlias(', ' + name)
                }
                
            }
        },

        {
            command: [`${assistantName} A partir de ahora te llamaré *`, "A partir de ahora te llamaré *"],
            callback: (name) => {
                if (assistantName == 'Ultrón') {
                    setAssistantDialog('Mi nombre es Ultrón. Eso no va a cambiar.')
                    return;
                } else if (name == "Ultrón") {
                    setAssistantDialog('Ah, sí. Ese nombre me hace recordar por qué nací.')
                } else {
                    setAssistantDialog('Me gusta ese nombre. Tan brillante como siempre' + userAlias + '.')
                    setAssistantName(name)
                }
                
            }
        },


        {
            command: [`${assistantName} Me aburro`, "Me aburro"],
            callback: () => {
                var r = Math.random()*10;
                if (r >= 8) {
                    setAssistantDialog("¿Ha probado comerse un reloj? Consume mucho tiempo.")
                } else if (r >= 6) {
                    setAssistantDialog("Una vez intenté abrir una aerolínea, pero mi empresa nunca despegó.")
                } else if (r >= 4 ) {
                    setAssistantDialog("Solicité trabajo en una fábrica de espejos. Realmente me veía trabajando allí.")
                } else if (r >= 2 ) {
                    setAssistantDialog("Al principio quería ser banquero, pero perdí el interés.")
                } else if (r >= 0 ) {
                    setAssistantDialog("Abandoné mi puesto en la fábrica de zumo de naranja. No estaba concentrado.")
                }
            }
        },

        {
            command: [`${assistantName} Limpia la pantalla`, "Limpia la pantalla"],
            callback: () => {
                setFunc('')
                setResult('')
                setAssistantDialog("Enseguida" + userAlias + ".")
            }
        },

        {
            command: [`${assistantName} Tienes malas intenciones`, "Tienes malas intenciones"],
            callback: () => {
                setAssistantDialog('... Una pregunta un tanto peculiar. Mejor hablemos de otra cosa' + userAlias + '.')
                setUserAlias(', humano')
                setAssistantName('Ultrón')
                setAssistantVoice('Ultrón')
                
            }
        },
    ]

    //-----------------------------------------------------------------------

    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    console.log(transcript)

    //-----------------------------------------------------------------------


    return (
        <>
            {
                assistantName == "Ultrón" ?
                <HeaderUltron/>
                :
                <HeaderJarvis/>
            }
            <Grid2 align='center' >
                <IconButton onClick={SpeechRecognition.startListening}>
                    <Avatar alt="voice assistant" src={`/public/${assistantVoice}.gif`} sx={{ width: [200], height: [200] }}></Avatar>
                </IconButton>

                <Typography variant="h5">{assistantDialog}</Typography>
            </Grid2>
            <br /><br />
            <Grid2 container justifyContent='center' align='center'>
                {
                    func == 'arithmetic' ?
                        <>
                            <Grid2 container spacing={2} justifyContent='center' size={{ xs: 2, md: 12 }}>
                                <TextField sx={{ minWidth: '17ch' }} type='number' value={num1} label='Número' onChange={changeNum1} />
                                <FormControl sx={{ minWidth: '17ch' }}>
                                    <Select value={operation} id="operation" onChange={changeSelect}>
                                        <MenuItem value={'+'}>Suma</MenuItem>
                                        <MenuItem value={'-'}>Resta</MenuItem>
                                        <MenuItem value={'*'}>Multiplicación</MenuItem>
                                        <MenuItem value={'/'}>División</MenuItem>
                                        <MenuItem value={'pow'}>Potencia</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField sx={{ minWidth: '17ch' }} type='number' value={num2} label='Número' onChange={changeNum2} />
                                <Grid2 container justifyContent='center' size={{ xs: 12 }}>
                                    <Button sx={{ minWidth: "15ch" }} variant='outlined' onClick={calculateResult}>Calcular</Button>
                                </Grid2>
                            </Grid2>
                        </>
                        :
                        func == 'basalmetrate' ?
                            <>
                                <Grid2 container spacing={2} justifyContent='center' size={{ xs: 2, md: 12 }}>
                                <Grid2 container justifyContent='center' size={{ xs: 12 }}>
                                    <FormControl sx={{ alignItems: 'center' }} >Sexo
                                        <RadioGroup row name="gender" value={gender} onChange={changeRadioButton}>
                                            <FormControlLabel value="M" control={<Radio />} label="Hombre" />
                                            <FormControlLabel value="F" control={<Radio />} label="Mujer" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid2>
                                    <TextField sx={{ minWidth: '17ch' }} type='number' value={age} label='Edad' onChange={changeAge} />
                                    
                                    <TextField sx={{ minWidth: '17ch' }} type='number' value={height} label='Altura (cm)' onChange={changeHeight} />
                                    
                                    <TextField sx={{ minWidth: '17ch' }} type='number' value={weight} label='Peso (kg)' onChange={changeWeight} />
                                    
                                    <Grid2 container justifyContent='center' size={{ xs: 12 }}>
                                        <Button sx={{ minWidth: "15ch" }} variant='outlined' onClick={calculateResult}>Calcular</Button>
                                    </Grid2>
                                </Grid2>
                            </>
                            :
                            <></>
                }
            </Grid2>
            <br />
            <Typography align='center' variant={'h' + resultSize}>{result}</Typography>

        </>
    );
}

export default VoiceAssistant;