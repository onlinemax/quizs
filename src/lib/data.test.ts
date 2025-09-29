import { Data } from "./data";
import data from "./data.json";
import { test, expect } from "vitest";

test("Verify the validity of data.json", () => {
	expect(() => { Data.parse(data) }).not.toThrow();
})
