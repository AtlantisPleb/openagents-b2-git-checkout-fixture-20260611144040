import { describe, expect, test } from "bun:test"
import { sum } from "./sum"

describe("sum", () => {
  test("adds two numbers", () => {
    expect(sum(2, 3)).toBe(5)
  })
})
