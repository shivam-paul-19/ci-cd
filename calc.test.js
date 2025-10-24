import { sum, subtract, multiply, divide } from "./calc.js";

describe("Tests for calculator functions", () => {
    // ─── SUM ─────────────────────────────────────────────
    describe("sum()", () => {
        test("adds two positive numbers", () => {
            expect(sum(2, 2)).toBe(4);
        });

        test("adds positive and negative numbers", () => {
            expect(sum(-5, 2)).toBe(-3);
        });

        test("adds zero correctly", () => {
            expect(sum(0, 7)).toBe(7);
        });

        test("handles string numbers", () => {
            expect(sum("3", "4")).toBe(7);
        });
    });

    // ─── SUBTRACT ────────────────────────────────────────
    describe("subtract()", () => {
        test("subtracts two positive numbers", () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test("subtracts with negative result", () => {
            expect(subtract(3, 8)).toBe(-5);
        });

        test("subtracts zero correctly", () => {
            expect(subtract(9, 0)).toBe(9);
        });

        test("handles string numbers", () => {
            expect(subtract("10", "4")).toBe(6);
        });
    });

    // ─── MULTIPLY ────────────────────────────────────────
    describe("multiply()", () => {
        test("multiplies two numbers", () => {
            expect(multiply(3, 5)).toBe(15);
        });

        test("multiplies with zero", () => {
            expect(multiply(10, 0)).toBe(0);
        });

        test("multiplies negative and positive numbers", () => {
            expect(multiply(-4, 6)).toBe(-24);
        });

        test("handles string numbers", () => {
            expect(multiply("3", "4")).toBe(12);
        });
    });

    // ─── DIVIDE ──────────────────────────────────────────
    describe("divide()", () => {
        test("divides two numbers", () => {
            expect(divide(10, 2)).toBe(5);
        });

        test("handles decimal results", () => {
            expect(divide(7, 2)).toBe(3.5);
        });

        test("divides negative by positive", () => {
            expect(divide(-8, 2)).toBe(-4);
        });

        test("returns 'not defined' when dividing by 0", () => {
            expect(divide(5, 0)).toBe("not defined");
        });

        test("handles string numbers", () => {
            expect(divide("20", "4")).toBe(5);
        });
    });
});
