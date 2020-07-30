import { CharacterBuildActionTypes, CHANGE_BUILD_ANCESTRY } from "../actions/CharacterBuild/CharacterBuildActionTypes";
import { CharacterBuildState } from "../CharacterBuildState";
import { GetAvailableBuildChoices } from "../../PF2eCoreLib/CharacterBuild";
import { Ancestries } from "../../PF2eCoreLib/Ancestries";
import { Backgrounds } from "../../PF2eCoreLib/Backgrounds";
import { Classes } from "../../PF2eCoreLib/Classes";

const ancestry: keyof Ancestries = "Dwarf";
const background: keyof Backgrounds= "Acolyte";
const pcClass: keyof Classes = "Alchemist"; 
const defaultState: CharacterBuildState = {
    Ancestry: ancestry,
    Background: background,
    Class: pcClass,
    SubClass: undefined,
    ClassBuild: {
        Level1: [],
        Level2: [],
        Level3: [],
        Level4: [],
        Level5: [],
        Level6: [],
        Level7: [],
        Level8: [],
        Level9: [],
        Level10: [],
        Level11: [],
        Level12: [],
        Level13: [],
        Level14: [],
        Level15: [],
        Level16: [],
        Level17: [],
        Level18: [],
        Level19: [],
        Level20: []
    },
    ChoicesAvailable: GetAvailableBuildChoices(ancestry, background, pcClass),
};

export const characterBuildReducer = (
    state = defaultState,
    action: CharacterBuildActionTypes
): CharacterBuildState => {
    let newState: CharacterBuildState;
    switch(action.type) {
    case CHANGE_BUILD_ANCESTRY:
        newState = {
            ...state,
            Ancestry: action.Ancestry
        };
        return newState;
    default:
        return state;
    }
};