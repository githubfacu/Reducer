import { useState } from 'react'
import { Avatar, Flex, Segmented } from "antd";

interface PaletaColoresProps {
    cambiarBgColor: (bgColor: string) => void
    cambiarColor: (color: string) => void
}

const PaletaColores = ({cambiarBgColor, cambiarColor}: PaletaColoresProps) => {

    const [selectorTexto, setSelectorTexto] = useState(true)

    const cambiarSelector = (value: boolean) => {
        setSelectorTexto(value)
    }


    const colorOptions = [
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#ffffff'}}  className='rounded-sm'></Avatar>
                </div>
            ),
            value: '#ffffff',
        },
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#000000'}}  className='rounded-sm'></Avatar>
                </div>
            ),
            value: '#000000',
        },
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#e63946'}}  className='rounded-sm'></Avatar>
                </div>
            ),
            value: '#e63946',
        },
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#f1faee'}} className='rounded-sm'></Avatar>
                </div>
            ),
            value: '#f1faee',
        },
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#a8dadc'}}  className='rounded-sm'></Avatar>
                </div>
            ),
            value: '#a8dadc',
        },
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#457b9d'}}  className='rounded-sm'/>
                </div>
            ),
            value: '#457b9d',
        },
        {
            label: (
                <div>
                <Avatar style={{backgroundColor: '#1d3557'}}  className=' rounded-sm'/>
                </div>
            ),
            value: '#1d3557',
        }
    ]

    const selectoresOptions = [
        {
            label: (
                <div style={{ padding: 4 }}>
                    <h3>Color de Texto</h3>
                </div>
            ),
            value: true,
        },
        {
            label: (
                <div style={{ padding: 4 }}>
                    <h3>Color de Fondo</h3>
                </div>
            ),
            value: false,
        },
    ]



  return (
    <div>
        <Flex gap="small" align="flex-start" vertical className='items-center'>
            <Segmented className=' bg-slate-300'
                options={colorOptions}
                onChange={selectorTexto ? cambiarColor : cambiarBgColor}
            />
            <Segmented className=' bg-slate-300'
                options={selectoresOptions}
                onChange={cambiarSelector}
            />
        </Flex>
    </div>
  )
}

export default PaletaColores