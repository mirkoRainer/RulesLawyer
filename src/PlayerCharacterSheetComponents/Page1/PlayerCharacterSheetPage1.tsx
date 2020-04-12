import React, { Component } from 'react';
import PlayerCharacterMetadata from './Metadata/PlayerCharacterMetaData'
import AbilityScores from './AbilityScore/AbilityScores';
import ClassDC from './ClassDC/ClassDC';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {

}

interface State {
  characterName: string;
  ancestriesList: string[];
  ancestry: string;
  backgroundsList: string[];
  background: string;
  backgroundAbilityChoices: string[];
  backgroundAbilityChoice: string;
  pcClass: string;
  classDC: number;
  subClassList: string[];
  subClass: string;
  playerName: string;
  strengthScore: number;
  dexterityScore: number;
  constitutionScore: number;
  intelligenceScore: number;
  wisdomScore: number;
  charismaScore: number;
  armorClass: number;
  armorClassProficiencyAmount: number;
  armorClassDexCap: number;
  armorClassIsTrained: boolean;
  armorClassIsExpert: boolean;
  armorClassIsMaster: boolean;
  armorClassIsLegendary: boolean;
  armorClassItemBonus: number;
  unarmoredIsTrained: boolean;
  unarmoredIsExpert: boolean;
  unarmoredIsMaster: boolean;
  unarmoredIsLegendary: boolean;
  lightArmorIsTrained: boolean;
  lightArmorIsExpert: boolean;
  lightArmorIsMaster: boolean;
  lightArmorIsLegendary: boolean;
  mediumArmorIsTrained: boolean;
  mediumArmorIsExpert: boolean;
  mediumArmorIsMaster: boolean;
  mediumArmorIsLegendary: boolean;
  heavyArmorIsTrained: boolean;
  heavyArmorIsExpert: boolean;
  heavyArmorIsMaster: boolean;
  heavyArmorIsLegendary: boolean;
  shieldBonus: number;
  shieldHardness: number;
  shieldMaxHitPoints: number;
  shieldBrokenThreshold: number;
  shieldCurrentHitPoints: number;
}

export default class PlayerCharacterSheetPage1 extends Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        'characterName' :  'Croft',
        'ancestriesList' :  [],//PF2eCoreUtils.GetListOfAncestries(),
        'ancestry' :  '',
        'backgroundsList' :  [],//PF2eCoreUtils.GetListOfBackgrounds(),
        'background' :  '',
        'backgroundAbilityChoices' :  [],
        'backgroundAbilityChoice' :  '',
        'pcClass' :  '',
        'classDC': 15,
        'subClassList' :  [],
        'subClass' :  '',
        'playerName' :  '',
        'strengthScore' :  10,
        'dexterityScore' :  11,
        'constitutionScore' :  12,
        'intelligenceScore' :  13,
        'wisdomScore' :  14,
        'charismaScore' :  15,
        'armorClass' :  0,
        'armorClassProficiencyAmount' :  0,
        'armorClassDexCap' :  0,
        'armorClassIsTrained' :  false,
        'armorClassIsExpert' :  false,
        'armorClassIsMaster' :  false,
        'armorClassIsLegendary' :  false,
        'armorClassItemBonus' :  0,
        'unarmoredIsTrained' :  false,
        'unarmoredIsExpert' :  false,
        'unarmoredIsMaster' :  false,
        'unarmoredIsLegendary' :  false,
        'lightArmorIsTrained' :  false,
        'lightArmorIsExpert' :  false,
        'lightArmorIsMaster' :  false,
        'lightArmorIsLegendary' :  false,
        'mediumArmorIsTrained' :  false,
        'mediumArmorIsExpert' :  false,
        'mediumArmorIsMaster' :  false,
        'mediumArmorIsLegendary' :  false,
        'heavyArmorIsTrained' :  false,
        'heavyArmorIsExpert' :  false,
        'heavyArmorIsMaster' :  false,
        'heavyArmorIsLegendary' :  false,
        'shieldBonus' :  0,
        'shieldHardness' :  0,
        'shieldMaxHitPoints' :  0,
        'shieldBrokenThreshold' :  0,
        'shieldCurrentHitPoints' :  0,
      }
    }

    
    render() {
		return (
			<View>
				<PlayerCharacterMetadata characterName={this.state.characterName} />
        <AbilityScores 
          strength={this.state.strengthScore}
          dexterity={this.state.dexterityScore}
          constitution={this.state.constitutionScore}
          intelligence={this.state.intelligenceScore}
          wisdom={this.state.wisdomScore}
          charisma={this.state.charismaScore} />
				<ClassDC classDC={this.state.classDC} />
				{/* <ArmorClass armorClass={this.state.armorClass}/>
				<SavingThrows />
				<HitPoints />
				<Perception />
				<Speed />
				<MeleeStrikes />
				<RangedStrikes />
				<WeaponProficiencies />
				<Skills />
				<Languages /> */}
			</View>
		)
    }
}