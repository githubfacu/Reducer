import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import React from 'react';
import App from './App';


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

        render(<App />)
    })

    test('Titulo', () => {
        const titulo = screen.getByRole('heading', {level: 1})
        expect(titulo).toBeInTheDocument()
        expect(titulo.textContent).toEqual('Reducer')
    })


})