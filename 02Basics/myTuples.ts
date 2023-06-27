var user: [string, number, boolean];
user = ["ak", 78, true];

var rgb: [number, number, number];
rgb = [255, 233, 0];

type User = [number, string];
const newUser: User = [133, "example.com"];
newUser[1] = "google.com";

export {};
