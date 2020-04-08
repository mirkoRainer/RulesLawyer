///<reference path='mscorlib.ts'/>
class BaseViewModel extends NObject
{
	private isBusy: boolean = false;
	private title: string = NString.Empty;
	set IsBusy(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.isBusy
			];
			var _r = this.SetProperty<boolean>(_p0, value, "IsBusy", null);
			this.isBusy = _p0[0];
			return _r;
		})();
	}
	get IsBusy(): boolean
	{
		return this.isBusy;
	}
	set Title(value: string)
	{
		(()=>
		{
			var _p0 = [
				this.title
			];
			var _r = this.SetProperty<string>(_p0, value, "Title", null);
			this.title = _p0[0];
			return _r;
		})();
	}
	get Title(): string
	{
		return this.title;
	}
	SetProperty<T>(backingStore: T[], value: T, propertyName: string = "", onChanged: () => void = null): boolean
	{
		var flag: boolean = EqualityComparer<T>.Default.Equals(backingStore[0], value);
		var result: boolean;
		if (flag)
		{
			result = false;
		}
		else
		{
			backingStore[0] = value;
			if (onChanged !== null)
			{
				onChanged();
			}
			result = true;
		}
		return result;
	}
	constructor()
	{
		super();
	}
}
class PlayerCharacterSheetViewModel extends BaseViewModel
{
	private isEditing: boolean = true;
	private characterName: string = NString.Empty;
	private ancestriesList: List<string> = PF2eCoreUtils.GetListOfAncestries();
	private ancestry: string = NString.Empty;
	private backgroundsList: List<string> = PF2eCoreUtils.GetListOfBackgrounds();
	private background: string = NString.Empty;
	private backgroundAbilityChoices: List<string> = new List<string>();
	private backgroundAbilityChoice: string = null;
	private pcClass: string = NString.Empty;
	private subClassList: List<string> = new List<string>();
	private subClass: string = NString.Empty;
	private playerName: string = NString.Empty;
	private strengthScore: number = 0;
	private dexterityScore: number = 0;
	private constitutionScore: number = 0;
	private intelligenceScore: number = 0;
	private wisdomScore: number = 0;
	private charismaScore: number = 0;
	private armorclass: number = 0;
	private armorClassProficiencyAmount: number = 0;
	private armorClassDexCap: number = 0;
	private armorClassIsTrained: boolean = false;
	private armorClassIsExpert: boolean = false;
	private armorClassIsMaster: boolean = false;
	private armorClassIsLegendary: boolean = false;
	private armorClassItemBonus: number = 0;
	private unarmoredIsTrained: boolean = false;
	private unarmoredIsExpert: boolean = false;
	private unarmoredIsMaster: boolean = false;
	private unarmoredIsLegendary: boolean = false;
	private lightArmorIsTrained: boolean = false;
	private lightArmorIsExpert: boolean = false;
	private lightArmorIsMaster: boolean = false;
	private lightArmorIsLegendary: boolean = false;
	private mediumArmorIsTrained: boolean = false;
	private mediumArmorIsExpert: boolean = false;
	private mediumArmorIsMaster: boolean = false;
	private mediumArmorIsLegendary: boolean = false;
	private heavyArmorIsTrained: boolean = false;
	private heavyArmorIsExpert: boolean = false;
	private heavyArmorIsMaster: boolean = false;
	private heavyArmorIsLegendary: boolean = false;
	private shieldBonus: number = 0;
	private shieldHardness: number = 0;
	private shieldMaxHitPoints: number = 0;
	private shieldBrokenThreshold: number = 0;
	private shieldCurrentHitPoints: number = 0;
	private classDc: number = 0;
	private classDCKeyAbilityModifier: number = 0;
	private classDCProficiencyBonus: number = 0;
	private classDcIsTrained: boolean = false;
	private classDcIsExpert: boolean = false;
	private classDcIsMaster: boolean = false;
	private classDcIsLegendary: boolean = false;
	private classDCItemBonus: number = 0;
	private playerCharacter: PlayerCharacter = null;
	set IsEditing(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.isEditing
			];
			var _r = super.SetProperty<boolean>(_p0, value, "IsEditing", null);
			this.isEditing = _p0[0];
			return _r;
		})();
	}
	get IsEditing(): boolean
	{
		return this.isEditing;
	}
	set CharacterName(value: string)
	{
		this.playerCharacter.Name = value;
		(()=>
		{
			var _p0 = [
				this.characterName
			];
			var _r = super.SetProperty<string>(_p0, value, "CharacterName", null);
			this.characterName = _p0[0];
			return _r;
		})();
	}
	get CharacterName(): string
	{
		return this.characterName;
	}
	get AncestriesList(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.ancestriesList);
	}
	set Ancestry(value: string)
	{
		this.playerCharacter.SetAncestry(value);
		(()=>
		{
			var _p0 = [
				this.ancestry
			];
			var _r = super.SetProperty<string>(_p0, value, "Ancestry", null);
			this.ancestry = _p0[0];
			return _r;
		})();
	}
	get Ancestry(): string
	{
		return this.ancestry;
	}
	get BackgroundsList(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.backgroundsList);
	}
	set Background(value: string)
	{
		(()=>
		{
			var _p0 = [
				this.background
			];
			var _r = super.SetProperty<string>(_p0, value, "Background", null);
			this.background = _p0[0];
			return _r;
		})();
		this.playerCharacter.SetBackground(value);
		this.backgroundAbilityChoices = this.playerCharacter.GetBackgroundAbilityChoices();
	}
	get Background(): string
	{
		return this.background;
	}
	set BackgroundAbilityChoices(value: ObservableCollection<string>)
	{
		(()=>
		{
			var _p0 = [
				this.backgroundAbilityChoices
			];
			var _r = super.SetProperty<List<string>>(_p0, Enumerable.ToList<string>(value), "BackgroundAbilityChoices", null);
			this.backgroundAbilityChoices = _p0[0];
			return _r;
		})();
	}
	get BackgroundAbilityChoices(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.backgroundAbilityChoices);
	}
	set BackgroundAbilityChoice(value: string)
	{
		this.playerCharacter.SetBackgroundAbility(value);
		(()=>
		{
			var _p0 = [
				this.backgroundAbilityChoice
			];
			var _r = super.SetProperty<string>(_p0, value, "BackgroundAbilityChoice", null);
			this.backgroundAbilityChoice = _p0[0];
			return _r;
		})();
	}
	get BackgroundAbilityChoice(): string
	{
		return this.backgroundAbilityChoice;
	}
	get ClassList(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(PF2eCoreUtils.GetListOfClasses());
	}
	set PcClass(value: string)
	{
		(()=>
		{
			var _p0 = [
				this.pcClass
			];
			var _r = super.SetProperty<string>(_p0, value, "PcClass", null);
			this.pcClass = _p0[0];
			return _r;
		})();
		this.playerCharacter.SetClass(value);
	}
	get PcClass(): string
	{
		return this.pcClass;
	}
	get SubClassPickerTitle(): string
	{
		var flag: boolean = this.playerCharacter.PcClass === null;
		var result: string;
		if (flag)
		{
			result = "-";
		}
		else
		{
			result = this.playerCharacter.PcClass.NameOfSubClass;
		}
		return result;
	}
	get SubClassList(): ObservableCollection<string>
	{
		var flag: boolean = this.playerCharacter.PcClass === null;
		var result: ObservableCollection<string>;
		if (flag)
		{
			result = new ObservableCollection<string>(new List<string>());
		}
		else
		{
			result = new ObservableCollection<string>(this.playerCharacter.PcClass.SubClasses);
		}
		return result;
	}
	set SubClass(value: string)
	{
		var flag: boolean = !NString.IsNullOrEmpty(value);
		if (flag)
		{
			this.playerCharacter.PcClass.SetSubClass(value);
		}
		(()=>
		{
			var _p0 = [
				this.subClass
			];
			var _r = super.SetProperty<string>(_p0, value, "SubClass", null);
			this.subClass = _p0[0];
			return _r;
		})();
	}
	get SubClass(): string
	{
		return this.subClass;
	}
	get Heritage(): string
	{
		return this.CheckNullString(this.playerCharacter.Heritage.Name);
	}
	get Level(): number
	{
		return (this.playerCharacter.Level > 0) ? this.playerCharacter.Level : 1;
	}
	set PlayerName(value: string)
	{
		this.playerCharacter.PlayerName = value;
		(()=>
		{
			var _p0 = [
				this.playerName
			];
			var _r = super.SetProperty<string>(_p0, value, "PlayerName", null);
			this.playerName = _p0[0];
			return _r;
		})();
	}
	get PlayerName(): string
	{
		return this.playerName;
	}
	get Size(): string
	{
		return this.CheckNullString(Size[this.playerCharacter.Size]);
	}
	set Alignment(value: string)
	{
		this.playerCharacter.SetNewAlignment(value);
	}
	get Alignment(): string
	{
		return this.CheckNullString(Alignment[this.playerCharacter.Alignment]);
	}
	Traits: ObservableCollection<Trait> = null;
	set Deity(value: string)
	{
		this.playerCharacter.Deity = value;
	}
	get Deity(): string
	{
		return this.CheckNullString(this.playerCharacter.Deity);
	}
	set HeroPoints(value: number)
	{
		this.playerCharacter.HeroPoints = value;
	}
	get HeroPoints(): number
	{
		return this.playerCharacter.HeroPoints;
	}
	set ExperiencePoints(value: number)
	{
		this.playerCharacter.ExperiencePoints = value;
	}
	get ExperiencePoints(): number
	{
		return this.playerCharacter.ExperiencePoints;
	}
	get AbilityScoreRange(): List<number>
	{
		return PF2eCoreUtils.GetAbilityScoreRange();
	}
	set StrengthScore(value: number)
	{
		this.playerCharacter.SetAbilityScore("Strength", value);
		this.strengthModifier = this.playerCharacter.AbilityScores.Strength.Modifier;
		(()=>
		{
			var _p0 = [
				this.strengthScore
			];
			var _r = super.SetProperty<number>(_p0, value, "StrengthScore", null);
			this.strengthScore = _p0[0];
			return _r;
		})();
	}
	get StrengthScore(): number
	{
		var flag: boolean = this.playerCharacter.AbilityScores === null || this.playerCharacter.AbilityScores.Strength === null;
		var result: number;
		if (flag)
		{
			result = 10;
		}
		else
		{
			this.strengthScore = this.playerCharacter.AbilityScores.Strength.Score;
			result = this.strengthScore;
		}
		return result;
	}
	private strengthModifier: number = 0;
	get StrengthModifierString(): string
	{
		return this.CreateAbilityModifierString(this.strengthModifier);
	}
	set DexterityScore(value: number)
	{
		this.playerCharacter.SetAbilityScore("Dexterity", value);
		this.dexterityModifier = this.playerCharacter.AbilityScores.Dexterity.Modifier;
		(()=>
		{
			var _p0 = [
				this.dexterityScore
			];
			var _r = super.SetProperty<number>(_p0, value, "DexterityScore", null);
			this.dexterityScore = _p0[0];
			return _r;
		})();
	}
	get DexterityScore(): number
	{
		var flag: boolean = this.playerCharacter.AbilityScores.Dexterity === null;
		var result: number;
		if (flag)
		{
			result = 10;
		}
		else
		{
			this.dexterityScore = this.playerCharacter.AbilityScores.Dexterity.Score;
			result = this.dexterityScore;
		}
		return result;
	}
	private dexterityModifier: number = 0;
	get DexterityModifierString(): string
	{
		return this.CreateAbilityModifierString(this.dexterityModifier);
	}
	set ConstitutionScore(value: number)
	{
		this.playerCharacter.SetAbilityScore("Constitution", value);
		this.constitutionModifier = this.playerCharacter.AbilityScores.Constitution.Modifier;
		(()=>
		{
			var _p0 = [
				this.constitutionScore
			];
			var _r = super.SetProperty<number>(_p0, value, "ConstitutionScore", null);
			this.constitutionScore = _p0[0];
			return _r;
		})();
	}
	get ConstitutionScore(): number
	{
		var flag: boolean = this.playerCharacter.AbilityScores.Constitution === null;
		var result: number;
		if (flag)
		{
			result = 10;
		}
		else
		{
			this.constitutionScore = this.playerCharacter.AbilityScores.Constitution.Score;
			result = this.constitutionScore;
		}
		return result;
	}
	private constitutionModifier: number = 0;
	get ConstitutionModifierString(): string
	{
		return this.CreateAbilityModifierString(this.constitutionModifier);
	}
	set IntelligenceScore(value: number)
	{
		this.playerCharacter.SetAbilityScore("Intelligence", value);
		this.intelligenceModifier = this.playerCharacter.AbilityScores.Intelligence.Modifier;
		(()=>
		{
			var _p0 = [
				this.intelligenceScore
			];
			var _r = super.SetProperty<number>(_p0, value, "IntelligenceScore", null);
			this.intelligenceScore = _p0[0];
			return _r;
		})();
	}
	get IntelligenceScore(): number
	{
		var flag: boolean = this.playerCharacter.AbilityScores.Intelligence === null;
		var result: number;
		if (flag)
		{
			result = 10;
		}
		else
		{
			this.intelligenceScore = this.playerCharacter.AbilityScores.Intelligence.Score;
			result = this.intelligenceScore;
		}
		return result;
	}
	private intelligenceModifier: number = 0;
	get IntelligenceModifierString(): string
	{
		return this.CreateAbilityModifierString(this.intelligenceModifier);
	}
	set WisdomScore(value: number)
	{
		this.playerCharacter.SetAbilityScore("Wisdom", value);
		this.wisdomModifier = this.playerCharacter.AbilityScores.Wisdom.Modifier;
		(()=>
		{
			var _p0 = [
				this.wisdomScore
			];
			var _r = super.SetProperty<number>(_p0, value, "WisdomScore", null);
			this.wisdomScore = _p0[0];
			return _r;
		})();
	}
	get WisdomScore(): number
	{
		var flag: boolean = this.playerCharacter.AbilityScores.Wisdom === null;
		var result: number;
		if (flag)
		{
			result = 10;
		}
		else
		{
			this.wisdomScore = this.playerCharacter.AbilityScores.Wisdom.Score;
			result = this.wisdomScore;
		}
		return result;
	}
	private wisdomModifier: number = 0;
	get WisdomModifierString(): string
	{
		return this.CreateAbilityModifierString(this.wisdomModifier);
	}
	set CharismaScore(value: number)
	{
		this.playerCharacter.SetAbilityScore("Charisma", value);
		this.charismaModifier = this.playerCharacter.AbilityScores.Charisma.Modifier;
		(()=>
		{
			var _p0 = [
				this.charismaScore
			];
			var _r = super.SetProperty<number>(_p0, value, "CharismaScore", null);
			this.charismaScore = _p0[0];
			return _r;
		})();
	}
	get CharismaScore(): number
	{
		var flag: boolean = this.playerCharacter.AbilityScores.Charisma === null;
		var result: number;
		if (flag)
		{
			result = 10;
		}
		else
		{
			this.charismaScore = this.playerCharacter.AbilityScores.Charisma.Score;
			result = this.charismaScore;
		}
		return result;
	}
	private charismaModifier: number = 0;
	get CharismaModifierString(): string
	{
		return this.CreateAbilityModifierString(this.charismaModifier);
	}
	set ArmorClass(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.armorclass
			];
			var _r = super.SetProperty<number>(_p0, value, "ArmorClass", null);
			this.armorclass = _p0[0];
			return _r;
		})();
	}
	get ArmorClass(): number
	{
		return this.armorclass;
	}
	set ArmorClassProficiencyAmount(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassProficiencyAmount
			];
			var _r = super.SetProperty<number>(_p0, value, "ArmorClassProficiencyAmount", null);
			this.armorClassProficiencyAmount = _p0[0];
			return _r;
		})();
	}
	get ArmorClassProficiencyAmount(): number
	{
		return this.armorClassProficiencyAmount;
	}
	set ArmorClassDexCap(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassDexCap
			];
			var _r = super.SetProperty<number>(_p0, value, "ArmorClassDexCap", null);
			this.armorClassDexCap = _p0[0];
			return _r;
		})();
	}
	get ArmorClassDexCap(): number
	{
		return this.armorClassDexCap;
	}
	set ArmorClassIsTrained(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassIsTrained
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ArmorClassIsTrained", null);
			this.armorClassIsTrained = _p0[0];
			return _r;
		})();
	}
	get ArmorClassIsTrained(): boolean
	{
		return this.armorClassIsTrained;
	}
	set ArmorClassIsExpert(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassIsExpert
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ArmorClassIsExpert", null);
			this.armorClassIsExpert = _p0[0];
			return _r;
		})();
	}
	get ArmorClassIsExpert(): boolean
	{
		return this.armorClassIsExpert;
	}
	set ArmorClassIsMaster(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassIsMaster
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ArmorClassIsMaster", null);
			this.armorClassIsMaster = _p0[0];
			return _r;
		})();
	}
	get ArmorClassIsMaster(): boolean
	{
		return this.armorClassIsMaster;
	}
	set ArmorClassIsLegendary(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassIsLegendary
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ArmorClassIsLegendary", null);
			this.armorClassIsLegendary = _p0[0];
			return _r;
		})();
	}
	get ArmorClassIsLegendary(): boolean
	{
		return this.armorClassIsLegendary;
	}
	set ArmorClassItemBonus(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.armorClassItemBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ArmorClassItemBonus", null);
			this.armorClassItemBonus = _p0[0];
			return _r;
		})();
	}
	get ArmorClassItemBonus(): number
	{
		return this.armorClassItemBonus;
	}
	set UnarmoredIsTrained(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.unarmoredIsTrained
			];
			var _r = super.SetProperty<boolean>(_p0, value, "UnarmoredIsTrained", null);
			this.unarmoredIsTrained = _p0[0];
			return _r;
		})();
	}
	get UnarmoredIsTrained(): boolean
	{
		return this.unarmoredIsTrained;
	}
	set UnarmoredIsExpert(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.unarmoredIsExpert
			];
			var _r = super.SetProperty<boolean>(_p0, value, "UnarmoredIsExpert", null);
			this.unarmoredIsExpert = _p0[0];
			return _r;
		})();
	}
	get UnarmoredIsExpert(): boolean
	{
		return this.unarmoredIsExpert;
	}
	set UnarmoredIsMaster(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.unarmoredIsMaster
			];
			var _r = super.SetProperty<boolean>(_p0, value, "UnarmoredIsMaster", null);
			this.unarmoredIsMaster = _p0[0];
			return _r;
		})();
	}
	get UnarmoredIsMaster(): boolean
	{
		return this.unarmoredIsMaster;
	}
	set UnarmoredIsLegendary(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.unarmoredIsLegendary
			];
			var _r = super.SetProperty<boolean>(_p0, value, "UnarmoredIsLegendary", null);
			this.unarmoredIsLegendary = _p0[0];
			return _r;
		})();
	}
	get UnarmoredIsLegendary(): boolean
	{
		return this.unarmoredIsLegendary;
	}
	set LightArmorIsTrained(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.lightArmorIsTrained
			];
			var _r = super.SetProperty<boolean>(_p0, value, "LightArmorIsTrained", null);
			this.lightArmorIsTrained = _p0[0];
			return _r;
		})();
	}
	get LightArmorIsTrained(): boolean
	{
		return this.lightArmorIsTrained;
	}
	set LightArmorIsExpert(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.lightArmorIsExpert
			];
			var _r = super.SetProperty<boolean>(_p0, value, "LightArmorIsExpert", null);
			this.lightArmorIsExpert = _p0[0];
			return _r;
		})();
	}
	get LightArmorIsExpert(): boolean
	{
		return this.lightArmorIsExpert;
	}
	set LightArmorIsMaster(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.lightArmorIsMaster
			];
			var _r = super.SetProperty<boolean>(_p0, value, "LightArmorIsMaster", null);
			this.lightArmorIsMaster = _p0[0];
			return _r;
		})();
	}
	get LightArmorIsMaster(): boolean
	{
		return this.lightArmorIsMaster;
	}
	set LightArmorIsLegendary(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.lightArmorIsLegendary
			];
			var _r = super.SetProperty<boolean>(_p0, value, "LightArmorIsLegendary", null);
			this.lightArmorIsLegendary = _p0[0];
			return _r;
		})();
	}
	get LightArmorIsLegendary(): boolean
	{
		return this.lightArmorIsLegendary;
	}
	set MediumArmorIsTrained(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.mediumArmorIsTrained
			];
			var _r = super.SetProperty<boolean>(_p0, value, "MediumArmorIsTrained", null);
			this.mediumArmorIsTrained = _p0[0];
			return _r;
		})();
	}
	get MediumArmorIsTrained(): boolean
	{
		return this.mediumArmorIsTrained;
	}
	set MediumArmorIsExpert(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.mediumArmorIsExpert
			];
			var _r = super.SetProperty<boolean>(_p0, value, "MediumArmorIsExpert", null);
			this.mediumArmorIsExpert = _p0[0];
			return _r;
		})();
	}
	get MediumArmorIsExpert(): boolean
	{
		return this.mediumArmorIsExpert;
	}
	set MediumArmorIsMaster(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.mediumArmorIsMaster
			];
			var _r = super.SetProperty<boolean>(_p0, value, "MediumArmorIsMaster", null);
			this.mediumArmorIsMaster = _p0[0];
			return _r;
		})();
	}
	get MediumArmorIsMaster(): boolean
	{
		return this.mediumArmorIsMaster;
	}
	set MediumArmorIsLegendary(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.mediumArmorIsLegendary
			];
			var _r = super.SetProperty<boolean>(_p0, value, "MediumArmorIsLegendary", null);
			this.mediumArmorIsLegendary = _p0[0];
			return _r;
		})();
	}
	get MediumArmorIsLegendary(): boolean
	{
		return this.mediumArmorIsLegendary;
	}
	set HeavyArmorIsTrained(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.heavyArmorIsTrained
			];
			var _r = super.SetProperty<boolean>(_p0, value, "HeavyArmorIsTrained", null);
			this.heavyArmorIsTrained = _p0[0];
			return _r;
		})();
	}
	get HeavyArmorIsTrained(): boolean
	{
		return this.heavyArmorIsTrained;
	}
	set HeavyArmorIsExpert(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.heavyArmorIsExpert
			];
			var _r = super.SetProperty<boolean>(_p0, value, "HeavyArmorIsExpert", null);
			this.heavyArmorIsExpert = _p0[0];
			return _r;
		})();
	}
	get HeavyArmorIsExpert(): boolean
	{
		return this.heavyArmorIsExpert;
	}
	set HeavyArmorIsMaster(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.heavyArmorIsMaster
			];
			var _r = super.SetProperty<boolean>(_p0, value, "HeavyArmorIsMaster", null);
			this.heavyArmorIsMaster = _p0[0];
			return _r;
		})();
	}
	get HeavyArmorIsMaster(): boolean
	{
		return this.heavyArmorIsMaster;
	}
	set HeavyArmorIsLegendary(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.heavyArmorIsLegendary
			];
			var _r = super.SetProperty<boolean>(_p0, value, "HeavyArmorIsLegendary", null);
			this.heavyArmorIsLegendary = _p0[0];
			return _r;
		})();
	}
	get HeavyArmorIsLegendary(): boolean
	{
		return this.heavyArmorIsLegendary;
	}
	set ShieldBonus(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.shieldBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ShieldBonus", null);
			this.shieldBonus = _p0[0];
			return _r;
		})();
	}
	get ShieldBonus(): number
	{
		return this.shieldBonus;
	}
	set ShieldHardness(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.shieldBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ShieldHardness", null);
			this.shieldBonus = _p0[0];
			return _r;
		})();
	}
	get ShieldHardness(): number
	{
		return this.shieldHardness;
	}
	set ShieldMaxHitPoints(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.shieldBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ShieldMaxHitPoints", null);
			this.shieldBonus = _p0[0];
			return _r;
		})();
	}
	get ShieldMaxHitPoints(): number
	{
		return this.shieldMaxHitPoints;
	}
	set ShieldBrokenThreshold(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.shieldBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ShieldBrokenThreshold", null);
			this.shieldBonus = _p0[0];
			return _r;
		})();
	}
	get ShieldBrokenThreshold(): number
	{
		return this.shieldBrokenThreshold;
	}
	set ShieldCurrentHitPoints(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.shieldBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ShieldCurrentHitPoints", null);
			this.shieldBonus = _p0[0];
			return _r;
		})();
	}
	get ShieldCurrentHitPoints(): number
	{
		return this.shieldCurrentHitPoints;
	}
	get FortitudeSave(): number
	{
		return this.playerCharacter.FortitudeSave.Amount;
	}
	get FortitudeSaveProficiencyBonus(): number
	{
		return this.playerCharacter.FortitudeSave.ProficiencyBonus;
	}
	get FortitudeItemBonus(): number
	{
		return this.playerCharacter.FortitudeSave.ItemBonus;
	}
	get FortitudeProficiency(): boolean
	{
		return true;
	}
	get ReflexSave(): number
	{
		return this.playerCharacter.ReflexSave.Amount;
	}
	get ReflexSaveProficiencyBonus(): number
	{
		return this.playerCharacter.ReflexSave.ProficiencyBonus;
	}
	get ReflexItemBonus(): number
	{
		return this.playerCharacter.ReflexSave.ItemBonus;
	}
	get ReflexProficiency(): boolean
	{
		return true;
	}
	get WillSave(): number
	{
		return this.playerCharacter.WillSave.Amount;
	}
	get WillSaveProficiencyBonus(): number
	{
		return this.playerCharacter.WillSave.ProficiencyBonus;
	}
	get WillItemBonus(): number
	{
		return this.playerCharacter.WillSave.ItemBonus;
	}
	get WillProficiency(): boolean
	{
		return true;
	}
	get MaxHitPoints(): number
	{
		return this.playerCharacter.MaxHitPoints;
	}
	set CurrentHitPoints(value: number)
	{
		this.playerCharacter.CurrentHitPoints = value;
	}
	get CurrentHitPoints(): number
	{
		return this.playerCharacter.CurrentHitPoints;
	}
	set TemporaryHitPoints(value: number)
	{
		this.playerCharacter.TemporaryHitPoints = value;
	}
	get TemporaryHitPoints(): number
	{
		return this.playerCharacter.TemporaryHitPoints;
	}
	set DyingValue(value: number)
	{
		this.playerCharacter.DyingValue = value;
	}
	get DyingValue(): number
	{
		return this.playerCharacter.DyingValue;
	}
	set WoundedValue(value: number)
	{
		this.playerCharacter.WoundedValue = value;
	}
	get WoundedValue(): number
	{
		return this.playerCharacter.WoundedValue;
	}
	set Resistances(value: ObservableCollection<string>)
	{
		this.playerCharacter.Resistances = value;
	}
	get Resistances(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.Resistances);
	}
	set Immunities(value: ObservableCollection<string>)
	{
		this.playerCharacter.Immunities = value;
	}
	get Immunities(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.Immunities);
	}
	set Conditions(value: ObservableCollection<string>)
	{
		this.playerCharacter.Conditions = value;
	}
	get Conditions(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.Conditions);
	}
	get Perception(): number
	{
		return this.playerCharacter.Perception.Amount;
	}
	get PerceptionProficiencyBonus(): number
	{
		return this.playerCharacter.Perception.ProficiencyBonus;
	}
	get PerceptionProficiency(): boolean
	{
		return true;
	}
	get PerceptionItemBonus(): number
	{
		return this.playerCharacter.Perception.ItemBonus;
	}
	get Senses(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.Senses);
	}
	set ClassDc(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.classDc
			];
			var _r = super.SetProperty<number>(_p0, value, "ClassDc", null);
			this.classDc = _p0[0];
			return _r;
		})();
	}
	get ClassDc(): number
	{
		return this.classDc;
	}
	set ClassDCKeyAbilityModifier(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.classDCKeyAbilityModifier
			];
			var _r = super.SetProperty<number>(_p0, value, "ClassDCKeyAbilityModifier", null);
			this.classDCKeyAbilityModifier = _p0[0];
			return _r;
		})();
	}
	get ClassDCKeyAbilityModifier(): number
	{
		return this.classDCKeyAbilityModifier;
	}
	set ClassDCProficiencyBonus(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.classDCProficiencyBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ClassDCProficiencyBonus", null);
			this.classDCProficiencyBonus = _p0[0];
			return _r;
		})();
	}
	get ClassDCProficiencyBonus(): number
	{
		return this.classDCProficiencyBonus;
	}
	set ClassDcIsTrained(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.classDcIsTrained
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ClassDcIsTrained", null);
			this.classDcIsTrained = _p0[0];
			return _r;
		})();
	}
	get ClassDcIsTrained(): boolean
	{
		return this.classDcIsTrained;
	}
	set ClassDcIsExpert(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.classDcIsExpert
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ClassDcIsExpert", null);
			this.classDcIsExpert = _p0[0];
			return _r;
		})();
	}
	get ClassDcIsExpert(): boolean
	{
		return this.classDcIsExpert;
	}
	set ClassDcIsMaster(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.classDcIsMaster
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ClassDcIsMaster", null);
			this.classDcIsMaster = _p0[0];
			return _r;
		})();
	}
	get ClassDcIsMaster(): boolean
	{
		return this.classDcIsMaster;
	}
	set ClassDcIsLegendary(value: boolean)
	{
		(()=>
		{
			var _p0 = [
				this.classDcIsLegendary
			];
			var _r = super.SetProperty<boolean>(_p0, value, "ClassDcIsLegendary", null);
			this.classDcIsLegendary = _p0[0];
			return _r;
		})();
	}
	get ClassDcIsLegendary(): boolean
	{
		return this.classDcIsLegendary;
	}
	set ClassDCItemBonus(value: number)
	{
		(()=>
		{
			var _p0 = [
				this.classDCItemBonus
			];
			var _r = super.SetProperty<number>(_p0, value, "ClassDCItemBonus", null);
			this.classDCItemBonus = _p0[0];
			return _r;
		})();
	}
	get ClassDCItemBonus(): number
	{
		return this.classDCItemBonus;
	}
	get Speed(): number
	{
		return this.playerCharacter.Speed;
	}
	get MovementTypes(): string
	{
		return this.playerCharacter.MovementTypes;
	}
	get MeleeStrikesDetails(): string
	{
		return this.playerCharacter.MeleeStrikesDetails;
	}
	get RangedStrikesDetails(): string
	{
		return this.playerCharacter.RangedStrikesDetails;
	}
	get UnarmedProficiency(): boolean
	{
		return true;
	}
	get SimpleWeaponProficiency(): boolean
	{
		return true;
	}
	get MartialWeaponProficiency(): boolean
	{
		return true;
	}
	get OtherWeaponProficiency(): boolean
	{
		return true;
	}
	get Acrobatics(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Acrobatics);
	}
	get Arcana(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Arcana);
	}
	get Athletics(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Athletics);
	}
	get Crafting(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Crafting);
	}
	get Deception(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Deception);
	}
	get Diplomacy(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Diplomacy);
	}
	get Intimidation(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Intimidation);
	}
	get Lore1(): SkillViewModel
	{
		return new SkillViewModel(Enumerable.First<Skill>(this.playerCharacter.Lore));
	}
	get Lore2(): SkillViewModel
	{
		return new SkillViewModel(Enumerable.Last<Skill>(this.playerCharacter.Lore));
	}
	get Medicine(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Medicine);
	}
	get Nature(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Nature);
	}
	get Occultism(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Occultism);
	}
	get Performance(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Performance);
	}
	get Religion(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Religion);
	}
	get Society(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Society);
	}
	get Stealth(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Stealth);
	}
	get Survival(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Survival);
	}
	get Thievery(): SkillViewModel
	{
		return new SkillViewModel(this.playerCharacter.Thievery);
	}
	set Languages(value: ObservableCollection<string>)
	{
		this.playerCharacter.Languages = value;
	}
	get Languages(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.Languages);
	}
	get AncestryFeatsAndAbilities(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.AncestryFeatsAndAbilities);
	}
	get SkillFeats(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.SkillFeats);
	}
	get GeneralFeats(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.GeneralFeats);
	}
	get ClassFeatsAndAbilities(): ObservableCollection<IClassFeat>
	{
		return new ObservableCollection<IClassFeat>(this.playerCharacter.ClassFeatsAndAbilities);
	}
	get BonusFeats(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.BonusFeats);
	}
	get WornItems(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.WornItems);
	}
	get ReadiedItems(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.ReadiedItems);
	}
	get OtherItems(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.OtherItems);
	}
	get TotalBulk(): number
	{
		return this.playerCharacter.GetTotalBulk();
	}
	get EncumberedBulk(): number
	{
		return this.playerCharacter.GetEncumbered();
	}
	get MaxBulk(): number
	{
		return this.playerCharacter.GetMaxBulk();
	}
	get Copper(): number
	{
		return this.playerCharacter.Coins.Copper;
	}
	get Silver(): number
	{
		return this.playerCharacter.Coins.Silver;
	}
	get Gold(): number
	{
		return this.playerCharacter.Coins.Gold;
	}
	get Platinum(): number
	{
		return this.playerCharacter.Coins.Platinum;
	}
	get SpellAttackRoll(): number
	{
		return this.playerCharacter.GetSpellAttackRoll();
	}
	get SpellKeyAbilityModifier(): number
	{
		return this.playerCharacter.GetSpellKeyAbilityModifier();
	}
	get SpellAttackProficiency(): boolean
	{
		return true;
	}
	get SpellDC(): number
	{
		return this.playerCharacter.GetSpellDC();
	}
	get SpellDCModifier(): number
	{
		return this.playerCharacter.GetSpellDCModifier();
	}
	get SpellDCProficiency(): boolean
	{
		return true;
	}
	get CantripLevel(): number
	{
		return this.playerCharacter.GetCantripLevel();
	}
	get SpellSlotsPerDay(): number[]
	{
		return this.playerCharacter.GetDailySpellSlot();
	}
	get Cantrips(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.GetCantrip());
	}
	get InnateSpells(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.GetInnateSpells());
	}
	get Spells(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.GetSpells());
	}
	get FocusSpells(): ObservableCollection<string>
	{
		return new ObservableCollection<string>(this.playerCharacter.GetFocusSpells());
	}
	private CreateAbilityModifierString(modifier: number): string
	{
		var flag: boolean = modifier <= 0;
		var result: string;
		if (flag)
		{
			result = NString.Format("{0}", modifier);
		}
		else
		{
			result = NString.Format("+{0}", modifier);
		}
		return result;
	}
	constructor();
	constructor(PC: PlayerCharacter);
	constructor(PC?: PlayerCharacter)
	{
		super();
		if (arguments.length === 0)
		{
			this.constructor_0();
			return;
		}
		this.constructor_1(PC);
	}
	private constructor_0(): void
	{
		this.Title = "New Adventurer";
		var playerCharacter: PlayerCharacter = new PlayerCharacter();
		this.playerCharacter = playerCharacter;
		this.IsEditing = true;
	}
	private constructor_1(PC: PlayerCharacter): void
	{
		this.Title = "Character Sheet";
		this.playerCharacter = (PC || new PlayerCharacter());
		this.IsEditing = true;
	}
	private CheckNullString(value: string): string
	{
		return NString.IsNullOrEmpty(value) ? "" : value;
	}
}
class ProficiencyViewModel extends NObject
{
	get IsUntrained(): boolean
	{
		return this._IsUntrained_k__BackingField;
	}
	get IsTrained(): boolean
	{
		return this._IsTrained_k__BackingField;
	}
	get IsExpert(): boolean
	{
		return this._IsExpert_k__BackingField;
	}
	get IsMaster(): boolean
	{
		return this._IsMaster_k__BackingField;
	}
	get IsLegendary(): boolean
	{
		return this._IsLegendary_k__BackingField;
	}
	constructor(ProficiencyLevel: Proficiency);
	constructor();
	constructor(ProficiencyLevel?: Proficiency)
	{
		if (arguments.length === 1 && (ProficiencyLevel === null || ProficiencyLevel.constructor === Number))
		{
			super();
			this.constructor_0(ProficiencyLevel);
			return;
		}
		super();
		this.constructor_1();
	}
	private constructor_0(ProficiencyLevel: Proficiency): void
	{
		var flag: boolean = ProficiencyLevel > Proficiency.Untrained;
		if (flag)
		{
			this._IsUntrained_k__BackingField = false;
			var flag2: boolean = ProficiencyLevel >= Proficiency.Trained;
			if (flag2)
			{
				this._IsTrained_k__BackingField = true;
				var flag3: boolean = ProficiencyLevel >= Proficiency.Expert;
				if (flag3)
				{
					this._IsExpert_k__BackingField = true;
					var flag4: boolean = ProficiencyLevel >= Proficiency.Master;
					if (flag4)
					{
						this._IsMaster_k__BackingField = true;
						var flag5: boolean = ProficiencyLevel >= Proficiency.Legendary;
						if (flag5)
						{
							this._IsLegendary_k__BackingField = true;
						}
					}
				}
			}
		}
		else
		{
			this._IsUntrained_k__BackingField = true;
			this._IsTrained_k__BackingField = false;
			this._IsExpert_k__BackingField = false;
			this._IsMaster_k__BackingField = false;
			this._IsLegendary_k__BackingField = false;
		}
	}
	private constructor_1(): void
	{
		this._IsUntrained_k__BackingField = true;
		this._IsTrained_k__BackingField = false;
		this._IsExpert_k__BackingField = false;
		this._IsMaster_k__BackingField = false;
		this._IsLegendary_k__BackingField = false;
	}
}
class SkillViewModel extends NObject
{
	Proficiency: ProficiencyViewModel = null;
	Modifier: number = 0;
	Descriptor: string = null;
	constructor(skill: Skill)
	{
		super();
		this.Proficiency = new ProficiencyViewModel(skill.Proficiency);
		this.Modifier = skill.ModifierBonus;
		this.Descriptor = (NString.IsNullOrWhiteSpace(skill.Descriptor) ? "" : skill.Descriptor);
	}
}
class PF2eCoreUtils extends NObject
{
	static GetListOfAncestries(): List<string>
	{
		return PF2eCoreUtils.GetListOfNamesOfClassesThatImplement(new Type("IAncestry"));
	}
	static GetListOfBackgrounds(): List<string>
	{
		return PF2eCoreUtils.GetListOfNamesOfClassesThatImplement(new Type("IBackground"));
	}
	static GetListOfClasses(): List<string>
	{
		return PF2eCoreUtils.GetListOfNamesOfClassesThatImplement(new Type("IPcClass"));
	}
	static GetListOfHeritages(): List<string>
	{
		return PF2eCoreUtils.GetListOfNamesOfClassesThatImplement(new Type("IHeritage"));
	}
	static GetAbilityScoreRange(): List<number>
	{
		return Enumerable.ToList<number>(Enumerable.Range(1, 40));
	}
	static GetListOfNamesOfClassesThatImplement(interfaceName: Type): List<string>
	{
		var arg_48_0: IEnumerable<Type> = Enumerable.Where<Type>(NArray.ToEnumerable(Assembly.GetExecutingAssembly().GetTypes()), (t: Type)=>{return Enumerable.Contains<Type>(NArray.ToEnumerable(t.GetInterfaces()), interfaceName);});
		var arg_48_1: (arg: Type) => string;
		if ((arg_48_1 = PF2eCoreUtils___c.__9__5_1) === null)
		{
			arg_48_1 = (PF2eCoreUtils___c.__9__5_1 = PF2eCoreUtils___c.__9._GetListOfNamesOfClassesThatImplement_b__5_1);
		}
		var source: IEnumerable<string> = Enumerable.Select<Type, string>(arg_48_0, arg_48_1);
		return Enumerable.ToList<string>(source);
	}
	constructor()
	{
		super();
	}
}
class PF2eCoreUtils___c extends NObject
{
	static __9: PF2eCoreUtils___c = new PF2eCoreUtils___c();
	static __9__5_1: (arg: Type) => string = null;
	_GetListOfNamesOfClassesThatImplement_b__5_1(t: Type): string
	{
		return t.Name;
	}
	constructor()
	{
		super();
	}
}
class Bonus extends NObject
{
	get Type(): string
	{
		return this._Type_k__BackingField;
	}
	get Amount(): number
	{
		return this._Amount_k__BackingField;
	}
	constructor()
	{
		super();
	}
}
enum Bonustype
{
	Proficiency,
	Circumstance,
	Status,
	Item
}
interface IAction
{
	ActionCost: ActionCost;
	SubordinateActions: IAction[];
	Traits: Trait[];
	Trigger: string;
	Check: ICheck;
	Effect: IEffect;
}
interface IAoNItem
{
	AoNUri: Uri;
}
interface ICheck
{
	Bonuses: Bonus[];
	AbilityModifier: number;
	Penalties: Penalty[];
}
interface IEffect
{
}
interface IPfObject
{
	Level: number;
}
class CheckOutcome extends NObject
{
	private difficultyClass: number = 0;
	private checkTotal: number = 0;
	private numberOnDie: number = 0;
	private isCritical: boolean = false;
	private isSuccess: boolean = false;
	private criticalThreshold: number = 0;
	constructor(difficultyClass: number, checkTotal: number, dieRoll: number, criticalThreshold: number = 10)
	{
		super();
		this.checkTotal = checkTotal;
		this.difficultyClass = difficultyClass;
		this.criticalThreshold = criticalThreshold;
		this.numberOnDie = dieRoll;
		this.isCritical = false;
		this.isSuccess = false;
		this.DetermineOutcome();
	}
	private DetermineOutcome(): void
	{
		this.isSuccess = (this.checkTotal >= this.difficultyClass);
		this.DetermineCritical();
	}
	private DetermineCritical(): void
	{
		var num: number = this.isSuccess ? (this.checkTotal - this.difficultyClass) : (this.difficultyClass - this.checkTotal);
		this.isCritical = (num >= this.criticalThreshold);
		this.AccountFor20or1onDie();
	}
	private AccountFor20or1onDie(): void
	{
		var flag: boolean = this.numberOnDie === 1;
		if (flag)
		{
			this.DowngradeResult();
		}
		var flag2: boolean = this.numberOnDie === 20;
		if (flag2)
		{
			this.UpgradeResult();
		}
	}
	private UpgradeResult(): void
	{
		var flag: boolean = this.isSuccess && this.isCritical;
		if (!flag)
		{
			var flag2: boolean = this.isSuccess && !this.isCritical;
			if (flag2)
			{
				this.isCritical = true;
			}
			var flag3: boolean = !this.isSuccess && !this.isCritical;
			if (flag3)
			{
				this.isSuccess = true;
			}
			var flag4: boolean = !this.isSuccess && this.isCritical;
			if (flag4)
			{
				this.isCritical = false;
			}
		}
	}
	private DowngradeResult(): void
	{
		var flag: boolean = this.isSuccess && this.isCritical;
		if (flag)
		{
			this.isCritical = false;
		}
		else
		{
			var flag2: boolean = this.isSuccess && !this.isCritical;
			if (flag2)
			{
				this.isSuccess = false;
			}
			else
			{
				var flag3: boolean = !this.isSuccess && !this.isCritical;
				if (flag3)
				{
					this.isCritical = true;
				}
				else
				{
					var flag4: boolean = !this.isSuccess && this.isCritical;
					if (flag4)
					{
					}
				}
			}
		}
	}
	RetrieveOutcomeReport(): string
	{
		var text: string = this.isSuccess ? "Success" : "Failure";
		return this.isCritical ? ("Critical " + text) : text;
	}
}
class Penalty extends NObject
{
	Type: string = null;
	Amount: number = 0;
	constructor()
	{
		super();
	}
}
enum Proficiency
{
	Untrained,
	Trained = 2,
	Expert = 4,
	Master = 6,
	Legendary = 8
}
enum Trait
{
	Aberration,
	Abjuration,
	Acid,
	Additive,
	Aeon,
	Agile,
	Air,
	Alchemical,
	Alchemist,
	Amphibious,
	Anadi,
	Angel,
	Animal,
	Apex,
	Aquatic,
	Arcane,
	Archetype,
	Archon,
	Artifact,
	Astral,
	Attached,
	Attack,
	Auditory,
	Aura,
	Azata,
	Backstabber,
	Backswing,
	Barbarian,
	Bard,
	Beast,
	Boggard,
	Bomb,
	Brutal,
	Bulwark,
	Caligni,
	Cantrip,
	Catfolk,
	Celestial,
	Champion,
	Changeling,
	Chaotic,
	Charm,
	Cleric,
	Cold,
	Comfort,
	Common,
	Companion,
	Complex,
	Composition,
	Concentrate,
	Conjuration,
	Consecration,
	Construct,
	Consumable,
	Contact,
	Curse,
	Daemon,
	Darkness,
	Deadly,
	Death,
	Dedication,
	Demon,
	Dero,
	Detection,
	Devil,
	Dhampir,
	Dinosaur,
	Disarm,
	Disease,
	Divination,
	Divine,
	Downtime,
	Dragon,
	Drow,
	Druid,
	Duergar,
	Dwarf,
	Earth,
	Electricity,
	Elemental,
	Elf,
	Elixir,
	Emotion,
	Enchantment,
	Environmental,
	Ethereal,
	Evil,
	Evocation,
	Exploration,
	Extradimensional,
	Fatal,
	Fear,
	Fey,
	Fiend,
	Fighter,
	Finesse,
	Fire,
	Flexible,
	Flourish,
	Focused,
	Force,
	Forceful,
	Fortune,
	FreeHand,
	Fungus,
	General,
	Genie,
	Ghost,
	Ghoul,
	Giant,
	Gnoll,
	Gnome,
	Goblin,
	Golem,
	Good,
	Grapple,
	Gremlin,
	Hag,
	HalfElf,
	Halfling,
	HalfOrc,
	Haunt,
	Healing,
	Human,
	Humanoid,
	Illusion,
	Incapacitation,
	Incorporeal,
	Inevitable,
	Infused,
	Ingested,
	Inhaled,
	Injury,
	Instinct,
	Invested,
	Jousting,
	Kobold,
	Lawful,
	Leshy,
	Light,
	Linguistic,
	Litany,
	Lizardfolk,
	Magical,
	Manipulate,
	Mechanical,
	Mental,
	Merfolk,
	Metamagic,
	Mindless,
	Minion,
	Misfortune,
	Monitor,
	Monk,
	Morph,
	Move,
	Multiclass,
	Mummy,
	Mutagen,
	Mutant,
	Necromancy,
	Negative,
	Noisy,
	Nonlethal,
	Nymph,
	Oath,
	Occult,
	Oil,
	Olfactory,
	Ooze,
	Open,
	Orc,
	Parry,
	Plant,
	Poison,
	Polymorph,
	Positive,
	Possession,
	Potion,
	Precious,
	Prediction,
	Press,
	Primal,
	Propulsive,
	Protean,
	Psychopomp,
	Rage,
	Rakshasa,
	Range,
	RangedTrip,
	Ranger,
	Rare,
	Ratfolk,
	Reach,
	Reload,
	Revelation,
	Rogue,
	Scroll,
	Scrying,
	SeaDevil,
	Secret,
	Shadow,
	Shove,
	Skeleton,
	Skill,
	Sleep,
	Snare,
	Sonic,
	Sorcerer,
	Soulbound,
	Spirit,
	Splash,
	Sprite,
	Staff,
	Stance,
	Structure,
	Summoned,
	Swarm,
	Sweep,
	Talisman,
	Telepathy,
	Teleportation,
	Tengu,
	Tethered,
	Thrown,
	Transmutation,
	Trap,
	Trip,
	Troll,
	Twin,
	TwoHand,
	Unarmed,
	Uncommon,
	Undead,
	Unique,
	Vampire,
	Versatile,
	Virulent,
	Visual,
	Volley,
	Wand,
	Water,
	Werecreature,
	Wizard,
	Xulgath,
	Zombie
}
class Armor extends NObject
{
	Name: string = null;
	Category: ArmorCategory = 0;
	Level: number = 0;
	Price: Coins = null;
	ACBonus: number = 0;
	DexCap: number = 0;
	CheckPenalty: Penalty = null;
	SpeedPenalty: Penalty = null;
	StrengthRequirement: number = 0;
	Bulk: Bulk = null;
	Group: ArmorGroup = 0;
	Traits: IEnumerable<Trait> = null;
	constructor()
	{
		super();
	}
}
enum ArmorGroup
{
	Leather,
	Composite,
	Chain,
	Plate
}
enum ArmorCategory
{
	Unarmored,
	Light,
	Medium,
	Heavy
}
class Bulk extends NObject
{
	private BulkAmount: number = 0;
	constructor(value: number = 0.0)
	{
		super();
	}
}
class Coins extends NObject
{
	Copper: number = 0;
	Silver: number = 0;
	Gold: number = 0;
	Platinum: number = 0;
	constructor(copper: number, silver: number, gold: number, platinum: number)
	{
		super();
		this.Copper = copper;
		this.Silver = silver;
		this.Gold = gold;
		this.Platinum = platinum;
	}
}
interface IEquipment
{
	Level: number;
	Price: Coins;
	Bulk: Bulk;
}
class ActionCost extends NObject
{
	private cost: number = 0;
	set Cost(value: number)
	{
		var flag: boolean = value < -1;
		if (flag)
		{
			this.cost = -1;
		}
		var flag2: boolean = value > 3;
		if (flag2)
		{
			this.cost = 3;
		}
		this.cost = value;
	}
	get Cost(): number
	{
		return this.cost;
	}
	constructor()
	{
		super();
	}
}
interface IWeapon
{
}
class MeleeAttack extends NObject implements ICheck
{
	private Traits: List<Trait> = null;
	Bonuses: Bonus[] = null;
	AbilityModifier: number = 0;
	Penalties: Penalty[] = null;
	constructor()
	{
		super();
	}
}
enum Ability
{
	Free,
	Strength,
	Dexterity,
	Constitution,
	Intelligence,
	Wisdom,
	Charisma
}
class AbilityScore extends NObject
{
	Score: number = 0;
	Ability: Ability = 0;
	Modifier: number = 0;
	constructor(score: number, ability: Ability);
	constructor(score: number, ability: string);
	constructor(score: number, ability: any)
	{
		super();
		if (arguments.length === 2 && (score === null || score.constructor === Number) && (ability === null || ability.constructor === Number))
		{
			this.constructor_0(score, ability);
			return;
		}
		this.constructor_1(score, ability);
	}
	private constructor_0(score: number, ability: Ability): void
	{
		this.Score = score;
		this.Ability = ability;
		var d: number = <number>(this.Score - 10) / 2.0;
		this.Modifier = <number>Math.floor(d);
	}
	private constructor_1(score: number, ability: string): void
	{
		this.Score = score;
		var d: number = <number>(this.Score - 10) / 2.0;
		this.Modifier = <number>Math.floor(d);
		try
		{
			this.Ability = <Ability>Enum.Parse(new Type("Number"), ability);
		}
		catch (ex_53)
		{
			if (ex_53 instanceof NullReferenceException)
			{
				throw new NullReferenceException("An ability string passed to the AbilityScore constructor was null. ");
			}
			else
				throw ex_53;
		}
	}
}
enum Alignment
{
	LG,
	NG,
	CG,
	LN,
	N,
	CN,
	LE,
	NE,
	CE
}
class ProficiencyBasedNumber extends NObject
{
	get Amount(): number
	{
		return this._Amount_k__BackingField;
	}
	Proficiency: Proficiency = 0;
	ModifierBonus: number = 0;
	ItemBonus: number = 0;
	get ProficiencyBonus(): number
	{
		return this._ProficiencyBonus_k__BackingField;
	}
	get IsUntrained(): boolean
	{
		return this._IsUntrained_k__BackingField;
	}
	get IsTrained(): boolean
	{
		return this._IsTrained_k__BackingField;
	}
	get IsExpert(): boolean
	{
		return this._IsExpert_k__BackingField;
	}
	get IsMaster(): boolean
	{
		return this._IsMaster_k__BackingField;
	}
	get IsLegendary(): boolean
	{
		return this._IsLegendary_k__BackingField;
	}
	constructor(proficiency: Proficiency, level: number, modifierBonus: number, isDC: boolean = false, itemBonus: number = 0)
	{
		super();
		this.Proficiency = proficiency;
		this.ItemBonus = itemBonus;
		this._ProficiencyBonus_k__BackingField = <number>(this.Proficiency + level);
		this._Amount_k__BackingField = this.ProficiencyBonus + this.ItemBonus + modifierBonus;
		if (isDC)
		{
			this._Amount_k__BackingField = this.Amount + 10;
		}
		var flag: boolean = proficiency > Proficiency.Untrained;
		if (flag)
		{
			this._IsUntrained_k__BackingField = false;
			var flag2: boolean = proficiency >= Proficiency.Trained;
			if (flag2)
			{
				this._IsTrained_k__BackingField = true;
				var flag3: boolean = proficiency >= Proficiency.Expert;
				if (flag3)
				{
					this._IsExpert_k__BackingField = true;
					var flag4: boolean = proficiency >= Proficiency.Master;
					if (flag4)
					{
						this._IsMaster_k__BackingField = true;
						var flag5: boolean = proficiency >= Proficiency.Legendary;
						if (flag5)
						{
							this._IsLegendary_k__BackingField = true;
						}
					}
				}
			}
		}
		else
		{
			this._IsUntrained_k__BackingField = true;
			this._IsTrained_k__BackingField = false;
			this._IsExpert_k__BackingField = false;
			this._IsMaster_k__BackingField = false;
			this._IsLegendary_k__BackingField = false;
		}
	}
}
class ArmorClass extends ProficiencyBasedNumber
{
	get Total(): number
	{
		return this._Total_k__BackingField;
	}
	constructor(proficiency: Proficiency, level: number, modifierBonus: number, armor: Armor, isDC: boolean = false, itemBonus: number = 0)
	{
		super(proficiency, level, modifierBonus, isDC, 0);
		this._Total_k__BackingField = armor.ACBonus + Math.min(armor.DexCap, modifierBonus) + this.ProficiencyBonus + 10;
	}
}
interface ICreature extends IPfObject
{
}
enum Language
{
	Abyssal,
	Aklo,
	Alghollthu,
	Amurrun,
	Anadi,
	Aquan,
	Arboreal,
	Auran,
	Boggard,
	Caligni,
	Celestial,
	Common,
	Cyclops,
	Daemonic,
	Draconic,
	Druidic,
	Dwarven,
	Elven,
	Gnoll,
	Gnomish,
	Goblin,
	Halfling,
	Hallit,
	Ignan,
	Infernal,
	Iruxi,
	Jotun,
	Kelish,
	Mwangi,
	Necril,
	Orcish,
	Osiriani,
	Protean,
	Requian,
	Shadowtongue,
	Shoanti,
	Skald,
	Sphinx,
	Sylvan,
	Tengu,
	Terran,
	Tien,
	Undercommon,
	Utopian,
	Varisian,
	Vudrani
}
class Skill extends ProficiencyBasedNumber
{
	Name: string = null;
	Descriptor: string = null;
	constructor(proficiency: Proficiency, level: number, modifierBonus: number, isDC: boolean = false, itemBonus: number = 0, armor: Armor = null)
	{
		super(proficiency, level, modifierBonus, isDC, itemBonus);
	}
}
enum Size
{
	Tiny,
	Small,
	Medium,
	Large,
	Huge,
	Gargantuan
}
class AbilityScoreArray extends NObject
{
	private propertiesOfThisClass: PropertyInfo[] = null;
	Strength: AbilityScore = null;
	Dexterity: AbilityScore = null;
	Constitution: AbilityScore = null;
	Intelligence: AbilityScore = null;
	Wisdom: AbilityScore = null;
	Charisma: AbilityScore = null;
	FreeBoostsAvailable: number = 0;
	constructor(boostsAndFlaws: List<AbilityScoreBoostFlaw>)
	{
		super();
		this.propertiesOfThisClass = super.GetType().GetProperties();
		this.CalculateAbilityScores(boostsAndFlaws);
	}
	AddBoosts(boosts: List<AbilityScoreBoostFlaw>): void
	{
		var array: PropertyInfo[] = this.propertiesOfThisClass;
		for (var i: number = 0; i < array.length; i = i + 1)
		{
			var propertyInfo: PropertyInfo = array[i];
			var flag: boolean = propertyInfo.Name === "FreeBoostsAvailable";
			if (!flag)
			{
				var flag2: boolean = boosts.Count === 0;
				if (flag2)
				{
					propertyInfo.SetValue(this, new AbilityScore(10, propertyInfo.Name));
				}
				var enumerator: List_Enumerator<AbilityScoreBoostFlaw> = boosts.GetEnumerator();
				try
				{
					while (enumerator.MoveNext())
					{
						var current: AbilityScoreBoostFlaw = enumerator.Current;
						var flag3: boolean = current.Ability === Ability[Ability.Free];
						if (flag3)
						{
							var freeBoostsAvailable: number = this.FreeBoostsAvailable;
							this.FreeBoostsAvailable = freeBoostsAvailable + 1;
						}
						else
						{
							var flag4: boolean = current.Ability === propertyInfo.Name;
							if (flag4)
							{
								var abilityScore: AbilityScore = <AbilityScore>propertyInfo.GetValue(this);
								var num: number = (abilityScore.Score >= 18) ? 1 : 2;
								propertyInfo.SetValue(this, new AbilityScore(abilityScore.Score + num, propertyInfo.Name));
							}
						}
					}
				}
				finally
				{
					(<IDisposable>enumerator).Dispose();
				}
			}
		}
	}
	private CalculateAbilityScores(boostsAndFlaws: List<AbilityScoreBoostFlaw>): void
	{
		this.Strength = new AbilityScore(10, Ability.Strength);
		this.Dexterity = new AbilityScore(10, Ability.Dexterity);
		this.Constitution = new AbilityScore(10, Ability.Constitution);
		this.Intelligence = new AbilityScore(10, Ability.Intelligence);
		this.Wisdom = new AbilityScore(10, Ability.Wisdom);
		this.Charisma = new AbilityScore(10, Ability.Charisma);
		var enumerator: List_Enumerator<AbilityScoreBoostFlaw> = boostsAndFlaws.GetEnumerator();
		try
		{
			while (enumerator.MoveNext())
			{
				var current: AbilityScoreBoostFlaw = enumerator.Current;
				var array: PropertyInfo[] = this.propertiesOfThisClass;
				for (var i: number = 0; i < array.length; i = i + 1)
				{
					var propertyInfo: PropertyInfo = array[i];
					var flag: boolean = propertyInfo.Name === "FreeBoostsAvailable";
					if (!flag)
					{
						var flag2: boolean = current.Ability === Ability[Ability.Free];
						if (!flag2)
						{
							var flag3: boolean = current.Ability === propertyInfo.Name;
							if (flag3)
							{
								var abilityScore: AbilityScore = ((propertyInfo.GetValue(this) instanceof AbilityScore)?<AbilityScore>propertyInfo.GetValue(this):null);
								var isBoost: boolean = current.IsBoost;
								var value: AbilityScore;
								if (isBoost)
								{
									value = new AbilityScore(abilityScore.Score + 2, abilityScore.Ability);
								}
								else
								{
									value = new AbilityScore(abilityScore.Score - 2, abilityScore.Ability);
								}
								propertyInfo.SetValue(this, value);
							}
						}
					}
				}
				var flag4: boolean = current.Ability === "Free";
				if (flag4)
				{
					var freeBoostsAvailable: number = this.FreeBoostsAvailable;
					this.FreeBoostsAvailable = freeBoostsAvailable + 1;
				}
			}
		}
		finally
		{
			(<IDisposable>enumerator).Dispose();
		}
	}
	SetAbilityScore(score: number, ability: Ability): void;
	SetAbilityScore(abilityScore: AbilityScore): void;
	SetAbilityScore(scoreOrAbilityScore: any, ability?: Ability): void
	{
		if (arguments.length === 2 && (scoreOrAbilityScore === null || scoreOrAbilityScore.constructor === Number) && (ability === null || ability.constructor === Number))
		{
			this.SetAbilityScore_0(scoreOrAbilityScore, ability);
			return;
		}
		this.SetAbilityScore_1(scoreOrAbilityScore);
	}
	private SetAbilityScore_0(score: number, ability: Ability): void
	{
		var array: PropertyInfo[] = this.propertiesOfThisClass;
		for (var i: number = 0; i < array.length; i = i + 1)
		{
			var propertyInfo: PropertyInfo = array[i];
			var flag: boolean = propertyInfo.Name === Ability[ability];
			if (flag)
			{
				propertyInfo.SetValue(this, new AbilityScore(score, ability));
				break;
			}
		}
	}
	private SetAbilityScore_1(abilityScore: AbilityScore): void
	{
		var array: PropertyInfo[] = this.propertiesOfThisClass;
		for (var i: number = 0; i < array.length; i = i + 1)
		{
			var propertyInfo: PropertyInfo = array[i];
			var flag: boolean = propertyInfo.Name === Ability[abilityScore.Ability];
			if (flag)
			{
				propertyInfo.SetValue(this, abilityScore);
				break;
			}
		}
	}
}
class AbilityScoreBoostFlaw extends NObject
{
	IsBoost: boolean = false;
	Ability: string = null;
	constructor(isBoost: boolean, ability: Ability)
	{
		super();
		this.IsBoost = isBoost;
		this.Ability = Ability[ability];
	}
}
class Ancestries extends NObject
{
	static Dwarf: Dwarf = null;
	static Elf: Elf = null;
	static Gnome: Gnome = null;
	static Goblin: Goblin = null;
	static HalfElf: HalfElf = null;
	static HalfOrc: HalfOrc = null;
	static Halfling: Halfling = null;
	static Human: Human = null;
	static Hobgoblin: Hobgoblin = null;
	static Leshy: Leshy = null;
	constructor()
	{
		super();
	}
}
interface IAncestry
{
	Name: string;
	HitPoints: number;
	Size: Size;
	Speed: number;
	AbilityBoosts: ICollection<AbilityScoreBoostFlaw>;
	AbilityFlaws: ICollection<AbilityScoreBoostFlaw>;
	Languages: ICollection<Language>;
	Traits: ICollection<Trait>;
	SpecialAbilities: ICollection<string>;
}
class Dwarf extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Dwarf";
	}
	get HitPoints(): number
	{
		return 10;
	}
	get Size(): Size
	{
		return Size.Medium;
	}
	get Speed(): number
	{
		return 20;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Wisdom), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(false, Ability.Charisma)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Dwarven, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Dwarf, Trait.Humanoid
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Darkvision", "Clan Dagger"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=1");
	}
	constructor()
	{
		super();
	}
}
class Elf extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Elf";
	}
	get HitPoints(): number
	{
		return 6;
	}
	get Size(): Size
	{
		return Size.Medium;
	}
	get Speed(): number
	{
		return 30;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Dexterity), new AbilityScoreBoostFlaw(true, Ability.Intelligence), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Constitution)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Elven, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Elf, Trait.Humanoid
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Low-Light Vision"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=2");
	}
	constructor()
	{
		super();
	}
}
class Gnome extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Gnome";
	}
	get HitPoints(): number
	{
		return 8;
	}
	get Size(): Size
	{
		return Size.Small;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Charisma), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Strength)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Gnomish, Language.Sylvan, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Gnome, Trait.Humanoid
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Low-Light Vision"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=3");
	}
	constructor()
	{
		super();
	}
}
class Goblin extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Goblin";
	}
	get HitPoints(): number
	{
		return 6;
	}
	get Size(): Size
	{
		return Size.Small;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Dexterity), new AbilityScoreBoostFlaw(true, Ability.Charisma), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Wisdom)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Goblin, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Goblin, Trait.Humanoid
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Darkvision"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=4");
	}
	constructor()
	{
		super();
	}
}
interface IHeritage
{
	Name: string;
}
class HalfElf extends NObject implements IAncestry, IHeritage, IAoNItem
{
	get Name(): string
	{
		return "HalfElf";
	}
	get HitPoints(): number
	{
		return 8;
	}
	get Size(): Size
	{
		return Size.Medium;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Free), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return new Array<AbilityScoreBoostFlaw>(0);
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Elf, Trait.Humanoid, Trait.HalfElf
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Low-Light Vision"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=7");
	}
	constructor()
	{
		super();
	}
}
class Halfling extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Halfling";
	}
	get HitPoints(): number
	{
		return 6;
	}
	get Size(): Size
	{
		return Size.Small;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Dexterity), new AbilityScoreBoostFlaw(true, Ability.Wisdom), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Strength)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Halfling, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Halfling, Trait.Humanoid
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Keen Eyes"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=5");
	}
	constructor()
	{
		super();
	}
}
class HalfOrc extends NObject implements IAncestry, IHeritage, IAoNItem
{
	get Name(): string
	{
		return "HalfOrc";
	}
	get HitPoints(): number
	{
		return 8;
	}
	get Size(): Size
	{
		return Size.Medium;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Free), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return new Array<AbilityScoreBoostFlaw>(0);
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Orc, Trait.Humanoid, Trait.HalfOrc
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Low-Light Vision"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=8");
	}
	constructor()
	{
		super();
	}
}
class Hobgoblin extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Hobgoblin";
	}
	get HitPoints(): number
	{
		return 8;
	}
	get Size(): Size
	{
		return Size.Medium;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Intelligence), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Wisdom)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Goblin, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Goblin, Trait.Humanoid, Trait.Uncommon
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Darkvision"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=13");
	}
	constructor()
	{
		super();
	}
}
class Human extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Human";
	}
	get HitPoints(): number
	{
		return 8;
	}
	get Size(): Size
	{
		return Size.Medium;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Free), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return new Array<AbilityScoreBoostFlaw>(0);
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Human, Trait.Humanoid
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return new Array<string>(0);
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=6");
	}
	constructor()
	{
		super();
	}
}
class Leshy extends NObject implements IAncestry, IAoNItem
{
	get Name(): string
	{
		return "Leshy";
	}
	get HitPoints(): number
	{
		return 8;
	}
	get Size(): Size
	{
		return Size.Small;
	}
	get Speed(): number
	{
		return 25;
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Wisdom), new AbilityScoreBoostFlaw(true, Ability.Free)
		];
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostFlaw>
	{
		return [
			new AbilityScoreBoostFlaw(false, Ability.Intelligence)
		];
	}
	get Languages(): ICollection<Language>
	{
		return [
			Language.Sylvan, Language.Common
		];
	}
	get Traits(): ICollection<Trait>
	{
		return [
			Trait.Plant, Trait.Leshy, Trait.Uncommon
		];
	}
	get SpecialAbilities(): ICollection<string>
	{
		return [
			"Low-Light Vision", "Plant Nourishment"
		];
	}
	get AoNUri(): Uri
	{
		return new Uri("http://2e.aonprd.com/Ancestries.aspx?ID=14");
	}
	constructor()
	{
		super();
	}
}
interface IBackground
{
	Name: string;
	AbilityBoostOptions: List<AbilityScoreBoostFlaw>;
	AbilityScoreBoost: AbilityScoreBoostFlaw;
	SkillFeat: string;
	TrainedSkill: string;
	TrainedLoreSkill: string;
}
class Emancipated extends NObject implements IBackground
{
	get Name(): string
	{
		return super.GetType().Name;
	}
	get AbilityBoostOptions(): List<AbilityScoreBoostFlaw>
	{
		var expr_05: List<AbilityScoreBoostFlaw> = new List<AbilityScoreBoostFlaw>();
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Dexterity));
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Charisma));
		return expr_05;
	}
	get AbilityScoreBoost(): AbilityScoreBoostFlaw
	{
		return new AbilityScoreBoostFlaw(true, Ability.Free);
	}
	set SkillFeat(value: string)
	{
		throw new NotImplementedException();
	}
	get SkillFeat(): string
	{
		throw new NotImplementedException();
	}
	set TrainedSkill(value: string)
	{
		throw new NotImplementedException();
	}
	get TrainedSkill(): string
	{
		throw new NotImplementedException();
	}
	set TrainedLoreSkill(value: string)
	{
		throw new NotImplementedException();
	}
	get TrainedLoreSkill(): string
	{
		throw new NotImplementedException();
	}
	constructor()
	{
		super();
	}
}
class Scholar extends NObject implements IBackground
{
	get Name(): string
	{
		return super.GetType().Name;
	}
	get AbilityBoostOptions(): List<AbilityScoreBoostFlaw>
	{
		var expr_05: List<AbilityScoreBoostFlaw> = new List<AbilityScoreBoostFlaw>();
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Intelligence));
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Wisdom));
		return expr_05;
	}
	get AbilityScoreBoost(): AbilityScoreBoostFlaw
	{
		return new AbilityScoreBoostFlaw(true, Ability.Free);
	}
	get SkillFeat(): string
	{
		throw new NotImplementedException();
	}
	get TrainedSkill(): string
	{
		throw new NotImplementedException();
	}
	get TrainedLoreSkill(): string
	{
		throw new NotImplementedException();
	}
	constructor()
	{
		super();
	}
}
class CharacterBackgrounds extends NObject
{
	static Emancipated: Emancipated = new Emancipated();
	static Scholar: Scholar = new Scholar();
	constructor()
	{
		super();
	}
}
interface IPcClass
{
	Name: string;
	TypicalMembers: string;
	RolePlayingSuggestions: string;
	KeyAbilityScore: AbilityScoreBoostFlaw;
	AlternateKeyAbilityScore: AbilityScoreBoostFlaw;
	HitPoints: number;
	Proficiencies: Dictionary<string, Proficiency>;
	AdvancementTable: Dictionary<number, string[]>;
	ClassFeats: List<IClassFeat>;
	NameOfSubClass: string;
	SubClass: string;
	SubClasses: List<string>;
	GetProficiency(proficiencyWanted: PlayerCharacter_Proficiencies, level: number): Proficiency;
	GetKeyAbilityScore(): number;
	GetKeyAbilityScoreModifier(): number;
	SetSubClass(value: string): void;
}
class Rogue extends NObject implements IPcClass
{
	get Name(): string
	{
		return "Rogue";
	}
	get HitPoints(): number
	{
		return 8;
	}
	SubClass: string = null;
	get KeyAbilityScore(): AbilityScoreBoostFlaw
	{
		return new AbilityScoreBoostFlaw(true, Ability.Dexterity);
	}
	get AlternateKeyAbilityScore(): AbilityScoreBoostFlaw
	{
		return new AbilityScoreBoostFlaw(true, Ability.Strength);
	}
	get TypicalMembers(): string
	{
		throw new NotImplementedException();
	}
	get RolePlayingSuggestions(): string
	{
		throw new NotImplementedException();
	}
	get Proficiencies(): Dictionary<string, Proficiency>
	{
		throw new NotImplementedException();
	}
	get AdvancementTable(): Dictionary<number, string[]>
	{
		throw new NotImplementedException();
	}
	get SubClasses(): List<string>
	{
		var expr_05: List<string> = new List<string>();
		expr_05.Add("Ruffian");
		expr_05.Add("Scoundrel");
		expr_05.Add("Thief");
		return expr_05;
	}
	get NameOfSubClass(): string
	{
		return "Racket";
	}
	get ClassFeats(): List<IClassFeat>
	{
		throw new NotImplementedException();
	}
	GetKeyAbilityScore(): number
	{
		throw new NotImplementedException();
	}
	GetKeyAbilityScoreModifier(): number
	{
		throw new NotImplementedException();
	}
	GetProficiency(proficiencyWanted: PlayerCharacter_Proficiencies, level: number): Proficiency
	{
		throw new NotImplementedException();
	}
	SetSubClass(value: string): void
	{
		var flag: boolean = NString.IsNullOrEmpty(value);
		if (!flag)
		{
			this.SubClass = value;
		}
	}
	constructor()
	{
		super();
	}
}
class PcClasses extends NObject
{
	static Rogue: Rogue = new Rogue();
	constructor()
	{
		super();
	}
}
interface IClassFeat
{
}
interface IGeneralFeat
{
}
interface ISkillFeat
{
}
class AnvilDwarf extends NObject implements IHeritage
{
	get Name(): string
	{
		return "Anvil Dwarf";
	}
	constructor()
	{
		super();
	}
}
class Heritages extends NObject
{
	static AnvilDwarf: AnvilDwarf = new AnvilDwarf();
	constructor()
	{
		super();
	}
}
class PlayerCharacter extends NObject
{
	Id: Guid = null;
	Name: string = null;
	Ancestry: IAncestry = null;
	Background: IBackground = null;
	BackgroundAbilityChoice: AbilityScoreBoostFlaw = null;
	Heritage: IHeritage = null;
	Level: number = 0;
	PcClass: IPcClass = null;
	PlayerName: string = null;
	Size: Size = 0;
	Alignment: Alignment = 0;
	Traits: List<Trait> = null;
	Deity: string = null;
	HeroPoints: number = 0;
	ExperiencePoints: number = 0;
	AbilityScores: AbilityScoreArray = null;
	ArmorClass: ArmorClass = null;
	Armor: Armor = null;
	UnarmoredProficiency: Proficiency = 0;
	LightArmorProficiency: Proficiency = 0;
	MediumArmorProficiency: Proficiency = 0;
	HeavyArmorProficiency: Proficiency = 0;
	ShieldBonus: number = 0;
	ShieldHardness: number = 0;
	ShieldMaxHitPoints: number = 0;
	ShieldBrokenThreshold: number = 0;
	ShieldCurrentHitPoints: number = 0;
	FortitudeSave: ProficiencyBasedNumber = null;
	ReflexSave: ProficiencyBasedNumber = null;
	WillSave: ProficiencyBasedNumber = null;
	MaxHitPoints: number = 0;
	CurrentHitPoints: number = 0;
	TemporaryHitPoints: number = 0;
	DyingValue: number = 0;
	WoundedValue: number = 0;
	Resistances: IEnumerable<string> = null;
	Immunities: IEnumerable<string> = null;
	Conditions: IEnumerable<string> = null;
	Perception: ProficiencyBasedNumber = null;
	Senses: IEnumerable<string> = null;
	ClassDC: ProficiencyBasedNumber = null;
	Speed: number = 0;
	MovementTypes: string = null;
	MeleeStrikesDetails: string = null;
	RangedStrikesDetails: string = null;
	UnarmedProficiency: Proficiency = 0;
	SimpleWeaponProficiency: Proficiency = 0;
	MartialWeaponProficiency: Proficiency = 0;
	OtherWeaponProficiency: Proficiency = 0;
	SkillPoints: number = 0;
	Acrobatics: Skill = null;
	Arcana: Skill = null;
	Athletics: Skill = null;
	Crafting: Skill = null;
	Deception: Skill = null;
	Diplomacy: Skill = null;
	Intimidation: Skill = null;
	Lore: List<Skill> = null;
	Medicine: Skill = null;
	Nature: Skill = null;
	Occultism: Skill = null;
	Performance: Skill = null;
	Religion: Skill = null;
	Society: Skill = null;
	Stealth: Skill = null;
	Survival: Skill = null;
	Thievery: Skill = null;
	Languages: IEnumerable<string> = null;
	AncestryFeatsAndAbilities: List<string> = null;
	SkillFeats: List<string> = null;
	GeneralFeats: List<string> = null;
	ClassFeatsAndAbilities: List<IClassFeat> = null;
	BonusFeats: List<string> = null;
	WornItems: List<string> = null;
	ReadiedItems: List<string> = null;
	OtherItems: List<string> = null;
	Coins: Coins = null;
	constructor()
	{
		super();
		this.Id = null;
		this.Level = 1;
	}
	SetAncestry(value: string): void
	{
		var flag: boolean = NString.IsNullOrEmpty(value);
		if (!flag)
		{
			try
			{
				var typeFromHandle: Type = new Type("Ancestries");
				var ancestry: IAncestry = <IAncestry>typeFromHandle.GetField(value).GetValue(null);
				this.Ancestry = ancestry;
			}
			catch (ex)
			{
				if (ex instanceof Exception)
				{
					throw new Exception(NString.Concat([
						"Check the Ancestries.cs file to see if ", value, " has a property there. Could not assign ", value, " as an Ancestry. Invalid Ancestry name or String.  ", ex.Message
					]));
				}
				else
					throw ex;
			}
		}
	}
	SetBackground(value: string): void
	{
		var flag: boolean = NString.IsNullOrEmpty(value);
		if (!flag)
		{
			try
			{
				var typeFromHandle: Type = new Type("CharacterBackgrounds");
				var background: IBackground = <IBackground>typeFromHandle.GetField(value).GetValue(null);
				this.Background = background;
				this.BackgroundAbilityChoice = Enumerable.First<AbilityScoreBoostFlaw>(background.AbilityBoostOptions);
			}
			catch (ex)
			{
				if (ex instanceof Exception)
				{
					throw new Exception(NString.Concat([
						"Check to make sure ", value, " exists in the CharacterBackgrounds.cs file. Could not assign ", value, " as an Background. Invalid Background name or String. ", ex.Message
					]));
				}
				else
					throw ex;
			}
		}
	}
	SetBackgroundAbility(value: string): void
	{
		var flag: boolean = NString.IsNullOrEmpty(value);
		if (!flag)
		{
			var ability: Ability = <Ability>Enum.Parse(new Type("Number"), value);
			this.BackgroundAbilityChoice = new AbilityScoreBoostFlaw(true, ability);
		}
	}
	GetBackgroundAbilityChoices(): List<string>
	{
		var flag: boolean = this.Background === null;
		var result: List<string>;
		if (flag)
		{
			result = new List<string>();
		}
		else
		{
			var abilityBoostOptions: List<AbilityScoreBoostFlaw> = this.Background.AbilityBoostOptions;
			var arg_42_0: IEnumerable<AbilityScoreBoostFlaw> = abilityBoostOptions;
			var arg_42_1: (arg: AbilityScoreBoostFlaw) => string;
			if ((arg_42_1 = PlayerCharacter___c.__9__24_0) === null)
			{
				arg_42_1 = (PlayerCharacter___c.__9__24_0 = PlayerCharacter___c.__9._GetBackgroundAbilityChoices_b__24_0);
			}
			var source: IEnumerable<string> = Enumerable.Select<AbilityScoreBoostFlaw, string>(arg_42_0, arg_42_1);
			result = Enumerable.ToList<string>(source);
		}
		return result;
	}
	SetHeritage(value: string): void
	{
		var flag: boolean = PF2eCoreUtils.GetListOfHeritages().Contains(value);
		if (flag)
		{
			try
			{
				var typeFromHandle: Type = new Type("Heritages");
				var heritage: IHeritage = <IHeritage>typeFromHandle.GetField(value).GetValue(null);
				this.Heritage = heritage;
			}
			catch (ex)
			{
				if (ex instanceof Exception)
				{
					throw new Exception(NString.Concat([
						"Check to make sure ", value, " exists in the Heritages.cs file. Could not assign ", value, " as an Heritage. Invalid Heritage name or String. ", ex.Message
					]));
				}
				else
					throw ex;
			}
		}
	}
	SetLevel(newLevel: number): void
	{
		throw new NotImplementedException();
	}
	SetClass(value: string): void
	{
		var flag: boolean = NString.IsNullOrEmpty(value);
		if (!flag)
		{
			try
			{
				var typeFromHandle: Type = new Type("PcClasses");
				var pcClass: IPcClass = <IPcClass>typeFromHandle.GetField(value).GetValue(null);
				this.PcClass = pcClass;
			}
			catch (ex)
			{
				if (ex instanceof Exception)
				{
					throw new Exception(NString.Concat([
						" Make sure ", value, " has an entry in the PcClasses.cs file. Could not assign ", value, " as an PcClass. Invalid PcClass name or String. ", ex.Message
					]));
				}
				else
					throw ex;
			}
		}
	}
	SetAbilityScore(abilityName: string, score: number): void
	{
		var flag: boolean = this.AbilityScoreArrayIsMissing();
		if (flag)
		{
			this.AbilityScores = new AbilityScoreArray(new List<AbilityScoreBoostFlaw>());
		}
		var flag2: boolean = NString.IsNullOrEmpty(abilityName);
		if (!flag2)
		{
			this.AbilityScores.SetAbilityScore(score, Enum.Parse<Ability>(abilityName));
		}
	}
	AbilityScoreArrayIsMissing(): boolean
	{
		return this.AbilityScores === null;
	}
	SetNewAlignment(value: string): void
	{
		throw new NotImplementedException();
	}
	GetTotalBulk(): number
	{
		throw new NotImplementedException();
	}
	GetEncumbered(): number
	{
		return 5 + this.AbilityScores.Strength.Modifier;
	}
	GetMaxBulk(): number
	{
		return 10 + this.AbilityScores.Strength.Modifier;
	}
	GetSpellAttackRoll(): number
	{
		return 0;
	}
	GetSpellKeyAbilityModifier(): number
	{
		return 0;
	}
	GetSpellAttackProficiency(): Proficiency
	{
		return Proficiency.Untrained;
	}
	GetSpellDCModifier(): number
	{
		return 0;
	}
	GetSpellDC(): number
	{
		return 0;
	}
	GetSpellDCProficiency(): Proficiency
	{
		return Proficiency.Untrained;
	}
	GetCantripLevel(): number
	{
		return 0;
	}
	GetDailySpellSlot(): number[]
	{
		return new Array<number>(2);
	}
	GetCantrip(): List<string>
	{
		throw new NotImplementedException();
	}
	GetInnateSpells(): List<string>
	{
		throw new NotImplementedException();
	}
	GetSpells(): List<string>
	{
		throw new NotImplementedException();
	}
	GetFocusSpells(): List<string>
	{
		throw new NotImplementedException();
	}
}
class PlayerCharacter___c extends NObject
{
	static __9: PlayerCharacter___c = new PlayerCharacter___c();
	static __9__24_0: (arg: AbilityScoreBoostFlaw) => string = null;
	_GetBackgroundAbilityChoices_b__24_0(choice: AbilityScoreBoostFlaw): string
	{
		return choice.Ability;
	}
	constructor()
	{
		super();
	}
}
enum PlayerCharacter_Proficiencies
{
	Unarmed,
	SimpleWeapon,
	MartialWeapon,
	OtherWeapon,
	Class,
	Perception,
	Will,
	Reflex,
	Fortitude,
	HeavyArmor,
	MediumArmor,
	LightArmor,
	Unarmored,
	Acrobatics,
	Arcana,
	Athletics,
	Crafting,
	Deception,
	Diplomacy,
	Intimidation,
	Lore,
	Medicine,
	Nature,
	Occultism,
	Performance,
	Religion,
	Society,
	Stealth,
	Survival,
	Thievery
}
