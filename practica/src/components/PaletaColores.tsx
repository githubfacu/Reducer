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
                <Avatar className=' bg-white rounded-sm'></Avatar>
                </div>
            ),
            value: 'white',
        },
        {
            label: (
                <div>
                <Avatar className=' bg-black rounded-sm'></Avatar>
                </div>
            ),
            value: 'black',
        },
        {
            label: (
                <div>
                <Avatar className=' bg-blue-800 rounded-sm'></Avatar>
                </div>
            ),
            value: 'blue-700',
        },
        {
            label: (
                <div>
                <Avatar className=' bg-red-600 rounded-sm'></Avatar>
                </div>
            ),
            value: 'red-600',
        },
        {
            label: (
                <div>
                <Avatar className=' bg-orange-600 rounded-sm'></Avatar>
                </div>
            ),
            value: 'orange-500',
        },
        {
            label: (
                <div>
                <Avatar className=' bg-green-600 rounded-sm'/>
                </div>
            ),
            value: 'green-500',
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