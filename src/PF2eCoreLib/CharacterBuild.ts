import { Backgrounds } from "./Backgrounds";
import { Classes } from "./Classes";
import { Ancestries } from "./Ancestries";
import { BuildChoice } from "../store/CharacterBuildState";
import { GetAncestryFeatChoicesFor } from "./AncestryFeats";

export function GetAvailableBuildChoices(Ancestry: keyof Ancestries, Background: keyof Backgrounds, Class: keyof Classes) : BuildChoice[] {
    let buildOptions: BuildChoice[] = [];
    buildOptions.push(...GetAncestryFeatChoicesFor(Ancestry));

    return buildOptions;
} 