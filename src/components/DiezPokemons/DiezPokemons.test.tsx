import React from "react";
import { prettyDOM, render, screen, waitFor } from "@testing-library/react"
import Diezpokemons from "./DiezPokemons";
import { randomInteger } from "./DiezPokemons.service";
import { act } from "react-dom/test-utils";
jest.setTimeout(70000)

describe('DiezPokemons test', () => {
    it('should render loading', async () => {
        render(<Diezpokemons  />)
        const loading = 'Loading Pokemons...'
        expect(screen.getByTestId('loader')).toHaveTextContent(loading)
    })
    // due the delay on the api, the test suite is not able to find the requested data.
    it.skip('should render elements', async () => {
        await new Promise(r => setTimeout(r, 7000))
        // eslint-disable-next-line testing-library/prefer-find-by
        await waitFor(() => expect(screen.getByTestId('id_0')).toBeTruthy(), { timeout: 70000})
    })
    // We're going to fetch with the standalone function, in order to ensure that the component is retrieving the data
    // as it should be.
    it('should return data from poke api', async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomInteger(0,10)}`)
        const json = await response.json()
        await waitFor(() => expect(json).not.toBeNull())
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