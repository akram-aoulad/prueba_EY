import React from "react";
import { prettyDOM, render, screen, waitFor } from "@testing-library/react"
import Diezpokemons from "./DiezPokemons";
import { randomInteger } from "./DiezPokemons.service";
import { act } from "react-dom/test-utils";
jest.setTimeout(15000)

describe('DiezPokemons test', () => {
    it('should render loading', async () => {
        render(<Diezpokemons  />)
        const loading = 'Loading Pokemons...'
        expect(screen.getByTestId('loader')).toHaveTextContent(loading)
    })
    // due the delay on the api, the test suite is not able to find the requested data.
    it.skip('should render elements', async () => {
        await new Promise(r => setTimeout(r, 7000))
        const elements = screen.getByTestId('id_0')
        await expect(elements).toBeTruthy()
    })
})

describe('Random service', () => {
    it('Returns a number between 0 and 10', () => {
        expect(randomInteger(0,10)).toBeLessThanOrEqual(10)
        expect(randomInteger(0,10)).toBeGreaterThanOrEqual(0)
    })

    it('Returns a number between 0 and 700', () => {
        expect(randomInteger(0,700)).toBeLessThanOrEqual(700)
        expect(randomInteger(0,700)).toBeGreaterThanOrEqual(0)
    })
})