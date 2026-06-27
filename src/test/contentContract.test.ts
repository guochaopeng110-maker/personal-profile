import { describe, expect, it } from "vitest";

describe("Content Model Contract", () => {
  it("has matching keys for both Chinese and English content", async () => {
    // @ts-ignore - files do not exist yet (RED phase)
    const zh = await import("../content/zh");
    // @ts-ignore
    const en = await import("../content/en");

    expect(zh.content).toBeDefined();
    expect(en.content).toBeDefined();

    // Deep compare keys to ensure bilingual parity
    const compareKeys = (obj1: any, obj2: any, path = "") => {
      const keys1 = Object.keys(obj1).sort();
      const keys2 = Object.keys(obj2).sort();

      expect(keys1, `Keys mismatch at path: ${path}`).toEqual(keys2);

      keys1.forEach((key) => {
        const val1 = obj1[key];
        const val2 = obj2[key];
        const currentPath = path ? `${path}.${key}` : key;

        if (typeof val1 === "object" && val1 !== null && typeof val2 === "object" && val2 !== null) {
          if (!Array.isArray(val1)) {
            compareKeys(val1, val2, currentPath);
          } else {
            expect(Array.isArray(val2), `Type mismatch at path: ${currentPath}`).toBe(true);
            expect(val1.length, `Array length mismatch at path: ${currentPath}`).toBe(val2.length);
            val1.forEach((item, idx) => {
              if (typeof item === "object" && item !== null) {
                compareKeys(item, val2[idx], `${currentPath}[${idx}]`);
              }
            });
          }
        } else {
          expect(typeof val1, `Type mismatch at path: ${currentPath}`).toBe(typeof val2);
        }
      });
    };

    compareKeys(zh.content, en.content);
  });
});
