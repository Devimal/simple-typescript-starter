import { hello } from "./main";

beforeEach(() => {
    console.log("before");
});

afterEach(() => {
    console.log("after");
});

test("hello should return true", () => {
    expect(hello()).toStrictEqual(true);
});
