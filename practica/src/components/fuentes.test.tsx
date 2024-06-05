import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import React from 'react'
import Fuentes from './Fuentes';

describe('App', () => {

    beforeEach(() => {
        const cambiarFuente = (fuente: string) => {
            console.log(`Cambiar fuente a: ${fuente}`);
        };

        render(<Fuentes cambiarFuente={cambiarFuente} />);
    });

    test('titulo', () => {
        const fuente = screen.getByText('Cambria')
        expect(fuente).toBeInTheDocument()

        fireEvent.click(fuente)

    })

})