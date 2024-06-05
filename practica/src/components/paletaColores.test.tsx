import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import PaletaColores from './PaletaColores';
import React from 'react';



describe('colores', () => {

    beforeEach(() => {

        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: vi.fn().mockImplementation((query: string) => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: vi.fn(), // Deprecated
              removeListener: vi.fn(), // Deprecated
              addEventListener: vi.fn(),
              removeEventListener: vi.fn(),
              dispatchEvent: vi.fn(),
            })),
          });

        render(<PaletaColores cambiarBgColor={function (bgColor: string): void {
            throw new Error('Function not implemented.');
        } } cambiarColor={function (color: string): void {
            throw new Error('Function not implemented.');
        } } />)
    })

    test('ver texto para seleccionar color fuente y fondo', () => {
        const textoh3 = screen.getByText('Color de Texto')
        expect(textoh3).toBeInTheDocument()
    })

    test('ver texto para seleccionar color fuente y fondo', () => {
        const fondoh3 = screen.getByText('Color de Fondo')
        expect(fondoh3).toBeInTheDocument()
    })
})