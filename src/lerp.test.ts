import { lerp } from "@antfu/utils"
import { expect, it } from "vitest"


it("lerp", () => {
  expect(lerp(0.2, 0.4, 0.5)).equal(0.3)
})