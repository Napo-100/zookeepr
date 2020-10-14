const fs = require("fs");
const {
    filterByQuery,
    findById,
    createNewZookeeper,
    validateZookeeper,
} = require("../lib/zookeepers.js");
const { zookeepers } = require("../data/zookeepers");


jest.mock('fs');

test("creates a zookeeper object", () => {
    const zookeeper = createNewZookeeper(
        { name: "Darlene", id: "jhgdja3ng2" },
        zookeepers
    );

    expect(zookeeper.name).toBe("Darlene");
    expect(zookeeper.id).toBe("jhgdja3ng2");
});

test("filters by query", () => {
    const startingKeepers = [
        {
            id: "3",
            name: "Erica",
            age: "23",
            favoriteAnimal: "Bear",
        },
        {
            id: "4",
            name: "Noel",
            age: "30",
            favoriteAnimal: "Elephant",
        },
    ];

    const updatedKeepers = filterByQuery({ favoriteAnimal: "Bear" }, startingKeepers);

    expect(updatedKeepers.length).toEqual(1);
});

test("finds by id", () => {
    const startingKeepers = [
        {
            id: "3",
            name: "Erica",
            age: "23",
            favoriteAnimal: "Bear",
        },
        {
            id: "4",
            name: "Noel",
            age: "30",
            favoriteAnimal: "Elephant",
        },
    ];

    const result = findById("3", startingKeepers);

    expect(result.name).toBe("Erica");
});

test("validates age", () => {
    const zookeeper = {
      id: "2",
      name: "Raksha",
      age: 31,
      favoriteAnimal: "penguin",
    };
  
    const invalidZookeeper = {
      id: "3",
      name: "Isabella",
      age: "67",
      favoriteAnimal: "bear",
    };
  
    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });
