import { IndexPath } from "@ui-kitten/components";

export const actionSymbol = "◆";
export const freeActionSymbol = "◇";
export const reactionSymbol = "↺";

export const DetermineActionSymbol = (numberOfActions: number) => {
    switch (numberOfActions) {
        case 0:
            return freeActionSymbol;
        case 0.5:
            return reactionSymbol;
        default:
            return actionSymbol.repeat(numberOfActions);
    }
};

export const MapActionToIndexPath = (Action: number) => {
    switch (Action) {
        case 0: // Free Action
            return new IndexPath(0);
        case 0.5: // Reaction
            return new IndexPath(1);
        case 1:
            return new IndexPath(2);
        case 2:
            return new IndexPath(3);
        case 3:
            return new IndexPath(4);
        default:
            return new IndexPath(0);
    }
};

export const MapIndexToAction = (index: number) => {
    switch (index) {
        case 0:
            return 0;
        case 1:
            return 0.5;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 3;
        default:
            return 0;
    }
};
