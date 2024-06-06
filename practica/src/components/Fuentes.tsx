interface FuentesProps {
    cambiarFuente: (fuente: string) => void
}

const Fuentes = ({cambiarFuente}: FuentesProps ) => {

    const fuentes = [
        {
            name: 'Verdana',
            value: ''
        },
        {
            name: 'Helvética',
            value: ''
        },
        {
            name: 'Georgia',
            value: ''
        },
        {
            name: 'Courier',
            value: ''
        },
        {
            name: 'Cambria',
            value: ''
        },
    ]

  return (
    <div className='flex flex-col gap-2 select-none my-2'>
        {
            fuentes.map((fuente, index) => (
                <h3
                    key={index}
                    className='rounder-sm bg-slate-300 cursor-pointer py-2 px-6'
                    onClick={() => cambiarFuente(fuente.name)}
                >{fuente.name}</h3>
            ))
        }
    </div>
  )
}

export default Fuentes