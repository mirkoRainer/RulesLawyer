import { Guid } from "guid-typescript";
import { iBonus } from "../../PF2eCoreLib/Bonus";
import { BonusType } from "../../PF2eCoreLib/BonusTypes";
import {
    DEFAULT_ITEM,
    InventoryItem,
} from "../../PF2eCoreLib/PlayerCharacter/Inventory";
import {
    DEFAULT_ARMOR,
    IsArmor,
} from "../../PF2eCoreLib/PlayerCharacter/Armor";
import * as reducerHelper from "./reducerHelper";
import { DEFAULT_WEAPON } from "../../PF2eCoreLib/PlayerCharacter/Weapon";
import { examplePlayerCharacter } from "../../../examplePlayerCharacter";

global.console = {
    ...console,
    log: jest.fn(),
    info: jest.fn(),
    error: jest.fn(),
};

describe("reducerHelper", () => {
    describe("UpdateItemInInventory", () => {
        it("throws an error and returns the input inventory when the item doesn't exist", () => {
            const guid = Guid.create();
            const inventory: InventoryItem[] = [DEFAULT_WEAPON, DEFAULT_ITEM];
            const absentItem: InventoryItem = {
                ...DEFAULT_ARMOR,
                id: guid,
            };
            reducerHelper.UpdateItemInInventory(absentItem, inventory);
            expect(global.console.error).toHaveBeenCalledWith(
                `Inventory item not found. itemId:${absentItem.id.toString()}`
            );
        });
        it("updates an inventory item with new values", () => {
            const weapon = DEFAULT_WEAPON;
            const inventory: InventoryItem[] = [weapon, DEFAULT_ITEM];
            const newInventory = reducerHelper.UpdateItemInInventory(
                {
                    ...weapon,
                    name: "TestMcTestFace",
                },
                inventory
            );
            expect(inventory[0].name).toBe("TestMcTestFace");
        });
    });
    describe("InsertOrUpdateBonuses", () => {
        it("adds bonuses from new sources", () => {
            const oldBonuses: iBonus[] = [
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "magic",
                },
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "power",
                },
            ];
            const newBonuses: iBonus[] = [
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "math",
                },
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 2,
                    source: "magic",
                },
            ];
            expect(
                reducerHelper.InsertOrUpdateBonuses(newBonuses, oldBonuses)
                    .length
            ).toBe(3);
        });
        it("updates bonus amount for existing sources", () => {
            const oldBonuses: iBonus[] = [
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "magic",
                },
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "power",
                },
            ];
            const newBonuses: iBonus[] = [
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 3,
                    source: "magic",
                },
            ];
            expect(
                reducerHelper.InsertOrUpdateBonuses(newBonuses, oldBonuses)[0]
                    .amount
            ).toBe(3);
        });
    });
    describe("RemoveBonus", () => {
        it("Removes a given bonus from a given array of bonuses", () => {
            const oldBonuses: iBonus[] = [
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "magic",
                },
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "power",
                },
                {
                    type: BonusType.Armor,
                    appliesTo: "everything",
                    amount: 1,
                    source: "math",
                },
            ];
            const bonusToRemove: iBonus = {
                type: BonusType.Armor,
                appliesTo: "everything",
                amount: 1,
                source: "math",
            };
            expect(
                reducerHelper.RemoveBonus(bonusToRemove, oldBonuses).length
            ).toBe(2);
        });
    });
    describe("ChangeArmorThatIsWorn", () => {
        let inventoryItems: InventoryItem[] = [];
        beforeEach(() => {
            inventoryItems = examplePlayerCharacter.inventory.items.slice();
        });
        afterEach(() => {
            inventoryItems = [];
        });
        it("results in only one worn armor", () => {
            let wornCount = 0;
            const updatedInventory = reducerHelper.ChangeArmorThatIsWorn(
                DEFAULT_ARMOR,
                inventoryItems
            );
            updatedInventory.forEach((item) => {
                if (item.worn && IsArmor(item)) {
                    wornCount++;
                }
            });
            expect(wornCount).toBe(1);
        });
        it("Marks the passed in armor as worn", () => {
            expect(inventoryItems.find((x) => x.worn === true)?.name).toBe(
                "Leather Armor"
            ); // Ensure leather armor for the example is worn
            const updatedInventory = reducerHelper.ChangeArmorThatIsWorn(
                DEFAULT_ARMOR,
                inventoryItems
            );
            expect(updatedInventory.find((x) => x.worn === true)?.name).toBe(
                "Unarmored"
            );
        });
    });
});
