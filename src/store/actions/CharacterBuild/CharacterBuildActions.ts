import { CharacterBuildActionTypes, CHANGE_BUILD_ANCESTRY } from "./CharacterBuildActionTypes";
import { Ancestries } from "../../../PF2eCoreLib/Ancestries";
import { ActionCreator } from "redux";
import { Dispatch } from "react";
import { AppActions } from "../AllActionTypesAggregated";

export const ChangeBuildAncestry: ActionCreator<CharacterBuildActionTypes> = (Ancestry: keyof Ancestries): CharacterBuildActionTypes => ({ 
    type: CHANGE_BUILD_ANCESTRY,
    Ancestry: Ancestry 
});
export const startChangeBuildAncestry = (Ancestry: keyof Ancestries) => {
    console.debug("startChangeBuildAncestry");
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(ChangeBuildAncestry(Ancestry));
    };
};