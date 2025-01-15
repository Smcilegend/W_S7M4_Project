import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Module 4 Project Tests', () => {
  describe('English Language', () => {
    /*
      👉 TASK 1

      One test is done for you as an example.
    */
    let texts = getEntriesByKeyPrefix(txt.en, 'TEXT')
    for (let [key, val] of texts) {
      test(`${key} is visible`, () => {
        render(<App />)
        expect(screen.getByText(val)).toBeVisible()
      })
    }
    let labels = getEntriesByKeyPrefix(txt.en, 'LABEL')
    for (let [key, val] of labels) {
      test(`${key} is visible`, () => {
        render(<App />)
        expect(screen.getByLabelText(val)).toBeVisible()
      })
    }
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByPlaceholderText(txt.esp.PLACEHOLDER_USERNAME)).toBeVisible()
    })
  })
  
  describe('Spanish Language', () => {
    test(`TEXT_HEADING_CREATE_ACCOUNT is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByText(txt.esp.TEXT_HEADING_CREATE_ACCOUNT)).toBeVisible()
    })
    test(`LABEL_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByLabelText(txt.esp.LABEL_USERNAME)).toBeVisible()
    })
    test(`PLACEHOLDER_USERNAME is visible`, () => {
      render(<App lang="esp" />)
      expect(screen.getByPlaceholderText(txt.esp.PLACEHOLDER_USERNAME)).toBeVisible()
    })
  })
  
  describe('getEntriesByKeyPrefix', () => {
    test('can extract the correct data', () => {
      const obj = { 
        abc_1: "data_abc_1",
        abc_2: "data_abc_2",
        xyz_1: "data_xyz_1",
        abc_3: "data_abc_3",
      }
      const expected = [
        ["abc_1", "data_abc_1"],
        ["abc_2", "data_abc_2"],
        ["abc_3", "data_abc_3"],
      ]
      const expected2 = [
        ["xyz_1", "data_xyz_1"],
      ]
      expect(getEntriesByKeyPrefix(obj, "abc")).toEqual(expected)
      expect(getEntriesByKeyPrefix(obj, "xyz")).toEqual(expected2)
      expect(getEntriesByKeyPrefix(obj, "foo")).toEqual([])
    })
  })
})

function getEntriesByKeyPrefix(obj, keyPrefix) {
  // Implementation as per TASK 4 part 1
  const prefix = `${keyPrefix}_`
  return Object.entries(obj).filter(([key, _]) => key.startsWith(prefix))
  
  /*
    👉 TASK 4 part 1

    Implemented above.
  */
}