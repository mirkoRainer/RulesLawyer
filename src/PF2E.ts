///<reference path='mscorlib.ts'/>
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
interface IPfObject
{
	Level: number;
}

class Penalty extends Object
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
class Armor extends Object
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
class Bulk extends Object
{
	private BulkAmount: number = 0;
	constructor(value: number = 0.0)
	{
	    super();
	}
}
class Coins extends Object
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
class ActionCost extends Object
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
class MeleeAttack extends Object implements ICheck
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
class AbilityScore extends Object
{
	Score: number = 0;
	Ability: string = '';
	Modifier: number = 0;
	constructor(score: number, ability: Ability);
	constructor(score: number, ability: string);
	constructor(score: number, ability: any)	    	{
		supe	    );
		if (arguments.length === 2 && (score === null || score.constructor === Number) && (ability === null || ability.constructor === Numb	    ))	        {
			this.constructor_0(score, abili	        ;
			ret	    n;	    	}
		this.constructor_1(score, ability);
	}
	private constructor_0(score: number, ability: Ability): void	    	{
		this.Score = sc	    e;
		this.Ability = abil	    y;
		var d: number = <number>(this.Score - 10) / 	    0;
		this.Modifier = <number>Math.floor(d);
	}
	private constructor_1(score: number, ability: string): void	    	{
		this.Score = sc	    e;
		var d: number = <number>(this.Score - 10) / 	    0;
		this.Modifier = <number>Math.floor	    );
		    ry	        {
			this.Ability = <Ability>Enum.Parse(new'Number'umber"), abili	    );	    	}
		catch (ex	    3)	        {
			if (ex_53 instanceof NullReferenceExcept	        )
	            
				throw new NullReferenceExce'An ability string passed to the AbilityScore constructor was null. 'ull.	        ;
	        }
				            
				throw ex	    3;
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
class ProficiencyBasedNumber extends Objec    
{
	get Amount(): nu    ber        	{
		return this._Amount_k__BackingFi    ld;
	}
	Proficiency: Proficiency = 0;
	ModifierBonus: number = 0;
	ItemBonus: number = 0;
	get ProficiencyBonus(): number	    	{
		return this._ProficiencyBonus_k__BackingField;
	}
	get IsUntrained(): boolean	    	{
		return this._IsUntrained_k__BackingField;
	}
	get IsTrained(): boolean	    	{
		return this._IsTrained_k__BackingField;
	}
	get IsExpert(): boolean	    	{
		return this._IsExpert_k__BackingField;
	}
	get IsMaster(): boolean	    	{
		return this._IsMaster_k__BackingField;
	}
	get IsLegendary(): boolean	    	{
		return this._IsLegendary_k__BackingField;
	}
	constructor(proficiency: Proficiency, level: number, modifierBonus: number, isDC: boolean = false, itemBonus: number = 0)	    	{
		supe	    );
		this.Proficiency = proficie	    y;
		this.ItemBonus = itemBo	    s;
		this._ProficiencyBonus_k__BackingField = <number>(this.Proficiency + lev	    );
		this._Amount_k__BackingField = this.ProficiencyBonus + this.ItemBonus + modifierBo	    s;
		if (i	    C)	        {
			this._Amount_k__BackingField = this.Amount +	    0;	    	}
		var flag: boolean = proficiency > Proficiency.Untrai	    d;
		if (f	    g)	        {
			this._IsUntrained_k__BackingField = fa	        ;
			var flag2: boolean = proficiency >= Proficiency.Trai	        ;
			if (fl	        )
	            
				this._IsTrained_k__BackingField = t	            
				var flag3: boolean = proficiency >= Proficiency.Exp	            
				if (fl	            
		                
					this._IsExpert_k__BackingField = t	                
					var flag4: boolean = proficiency >= Proficiency.Mas	                
					if (fl	                
			                    						this._IsMaster_k__BackingField = t	                    						var flag5: boolean = proficiency >= Proficiency.Legend	                    						if (fl	                    				                        						this._IsLegendary_k__BackingField = t	                    				                
			            
		        }
	    	}	    	}
			    se	        {
			this._IsUntrained_k__BackingField = t	        ;
			this._IsTrained_k__BackingField = fa	        ;
			this._IsExpert_k__BackingField = fa	        ;
			this._IsMaster_k__BackingField = fa	        ;
			this._IsLegendary_k__BackingField = fa	    e;
		}
	}
}
class ArmorClass extends ProficiencyBasedNumbe    
{
	get Total(): nu    ber        	{
		return this._Total_k__BackingFi    ld;    
	}
	constructor(proficiency: Proficiency, level: number, modifierBonus: number, armor: Armor, isDC: boolean = false, itemBonus: number      0)        	{
		super(proficiency, level, modifierBonus, isDC,        );
		this._Total_k__BackingField = armor.ACBonus + Math.min(armor.DexCap, modifierBonus) + this.ProficiencyBonus +    10;
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
	constructor(proficiency: Proficiency, level: number, modifierBonus: number, isDC: boolean = false, itemBonus: number = 0, armor: Armor = null)	    	{
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
class AbilityScoreArray extends Object
{
	private propertiesOfThisClass: PropertyInfo[] = null;
	Strength: AbilityScore = null;
	Dexterity: AbilityScore = null;
	Constitution: AbilityScore = null;
	Intelligence: AbilityScore = null;
	Wisdom: AbilityScore = null;
	Charisma: AbilityScore = null;
	FreeBoostsAvailable: number = 0;
	constructor(boostsAndFlaws: List<AbilityScoreBoostFlaw>)	    	{
		supe	    );
		this.propertiesOfThisClass = super.GetType().GetPropertie	    );
		this.CalculateAbilityScores(boostsAndFlaws);
	}
	AddBoosts(boosts: List<AbilityScoreBoostFlaw>): void	    	{
		var array: PropertyInfo[] = this.propertiesOfThisCl	    s;
		for (var i: number = 0; i < array.length; i = i 	    1)	        {
			var propertyInfo: PropertyInfo = array	        ;
			var flag: boolean = propertyInfo.Nam'FreeBoostsAvailable'lab	        ;
			if (!f	        )
	            
				var flag2: boolean = boosts.Count ==	            
				if (fl	            
		                
					propertyInfo.SetValue(this, new AbilityScore(10, propertyInfo.Nam	            
		            
				var enumerator: List_Enumerator<AbilityScoreBoostFlaw> = boosts.GetEnumerato	            
				            
		                
					while (enumerator.MoveNex	                
			                    						var current: AbilityScoreBoostFlaw = enumerator.Curr	                    						var flag3: boolean = current.Ability === Ability[Ability.Fr	                    						if (fl	                    				                        						var freeBoostsAvailable: number = this.FreeBoostsAvaila	                        						this.FreeBoostsAvailable = freeBoostsAvailable 	                    				                    							                    				                        						var flag4: boolean = current.Ability === propertyInfo.N	                        						if (fl	                        				                            						var abilityScore: AbilityScore = <AbilityScore>propertyInfo.GetValue(th	                            						var num: number = (abilityScore.Score >= 18) ? 1 	                            						propertyInfo.SetValue(this, new AbilityScore(abilityScore.Score + num, propertyInfo.Nam	                        				                    				                
			            
		            
				fin	            
		                
					(<IDisposable>enumerator).Dispos	            
		        }
	    	}
		}
	}
	private CalculateAbilityScores(boostsAndFlaws: List<AbilityScoreBoostFlaw>): void	    	{
		this.Strength = new AbilityScore(10, Ability.Streng	    );
		this.Dexterity = new AbilityScore(10, Ability.Dexteri	    );
		this.Constitution = new AbilityScore(10, Ability.Constituti	    );
		this.Intelligence = new AbilityScore(10, Ability.Intelligen	    );
		this.Wisdom = new AbilityScore(10, Ability.Wisd	    );
		this.Charisma = new AbilityScore(10, Ability.Charis	    );
		var enumerator: List_Enumerator<AbilityScoreBoostFlaw> = boostsAndFlaws.GetEnumerato	    );
		    ry	        {
			while (enumerator.MoveNex	        )
	            
				var current: AbilityScoreBoostFlaw = enumerator.Curr	            
				var array: PropertyInfo[] = this.propertiesOfThisCl	            
				for (var i: number = 0; i < array.length; i = i 	            
		                
					var propertyInfo: PropertyInfo = array	                
					var flag: boolean = propertyInfo.Nam'FreeBoostsAvailable'lab	                
					if (!f	                
			                    						var flag2: boolean = current.Ability === Ability[Ability.Fr	                    						if (!fl	                    				                        						var flag3: boolean = current.Ability === propertyInfo.N	                        						if (fl	                        				                            						var abilityScore: AbilityScore = ((propertyInfo.GetValue(this) instanceof AbilityScore)?<AbilityScore>propertyInfo.GetValue(this):nu	                            						var isBoost: boolean = current.IsBo	                            						var value: AbilitySc	                            						if (isBo	                            				                                						value = new AbilityScore(abilityScore.Score + 2, abilityScore.Abili	                            				                            							                            				                                						value = new AbilityScore(abilityScore.Score - 2, abilityScore.Abili	                            				                            						propertyInfo.SetValue(this, val	                        				                    				                
			            
		            
				var flag4: boolean = current.Abilit'Free'"Fr	            
				if (fl	            
		                
					var freeBoostsAvailable: number = this.FreeBoostsAvaila	                
					this.FreeBoostsAvailable = freeBoostsAvailable 	            
		        }
	    	}	    	}
		fin	    ly	        {
			(<IDisposable>enumerator).Dispos	    );
		}
	}
	SetAbilityScore(score: number, ability: Ability): void;
	SetAbilityScore(abilityScore: AbilityScore): void;
	SetAbilityScore(scoreOrAbilityScore: any, ability?: Ability): void	    	{
		if (arguments.length === 2 && (scoreOrAbilityScore === null || scoreOrAbilityScore.constructor === Number) && (ability === null || ability.constructor === Numb	    ))	        {
			this.SetAbilityScore_0(scoreOrAbilityScore, abili	        ;
			ret	    n;	    	}
		this.SetAbilityScore_1(scoreOrAbilityScore);
	}
	private SetAbilityScore_0(score: number, ability: Ability): void	    	{
		var array: PropertyInfo[] = this.propertiesOfThisCl	    s;
		for (var i: number = 0; i < array.length; i = i 	    1)	        {
			var propertyInfo: PropertyInfo = array	        ;
			var flag: boolean = propertyInfo.Name === Ability[abili	        ;
			if (f	        )
	            
				propertyInfo.SetValue(this, new AbilityScore(score, abilit	            
				br	        ;
	    	}
		}
	}
	private SetAbilityScore_1(abilityScore: AbilityScore): void	    	{
		var array: PropertyInfo[] = this.propertiesOfThisCl	    s;
		for (var i: number = 0; i < array.length; i = i 	    1)	        {
			var propertyInfo: PropertyInfo = array	        ;
			var flag: boolean = propertyInfo.Name === Ability[abilityScore.Abili	        ;
			if (f	        )
	            
				propertyInfo.SetValue(this, abilitySco	            
				br	        ;
	    	}
		}
	}
}
class AbilityScoreBoostFlaw extends Object
{
	IsBoost: boolean = false;
	Ability: string = null;
	constructor(isBoost: boolean, ability: Ability)	    	{
		supe	    );
		this.IsBoost = isBo	    t;
		this.Ability = Ability[ability];
	}
}
class Ancestries extends Object
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
	constructor()	    	{
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
class Dwarf extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Dwarf'Dwa    f";    
	}
	get HitPoints(): nu    ber        	{
		return    10;    
	}
	get Size():     ize        	{
		return Size.Med    um;    
	}
	get Speed(): nu    ber        	{
		return    20;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Wisdom), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(false, Ability.Chari        a)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Dwarven, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Dwarf, Trait.Huma        id
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Darkvision'is'Clan Dagger'ag        r"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=1'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Elf extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Elf' "E    f";    
	}
	get HitPoints(): nu    ber        	{
		retur     6;    
	}
	get Size():     ize        	{
		return Size.Med    um;    
	}
	get Speed(): nu    ber        	{
		return    30;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Dexterity), new AbilityScoreBoostFlaw(true, Ability.Intelligence), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Constitut        n)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Elven, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Elf, Trait.Huma        id
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Low-Light Vision'is        n"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=2'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Gnome extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Gnome'Gno    e";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;    
	}
	get Size():     ize        	{
		return Size.Sm    ll;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Charisma), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Stren        h)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Gnomish, Language.Sylvan, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Gnome, Trait.Huma        id
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Low-Light Vision'is        n"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=3'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Goblin extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Goblin'obl    n";    
	}
	get HitPoints(): nu    ber        	{
		retur     6;    
	}
	get Size():     ize        	{
		return Size.Sm    ll;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Dexterity), new AbilityScoreBoostFlaw(true, Ability.Charisma), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Wis        m)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Goblin, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Goblin, Trait.Huma        id
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Darkvision'is        n"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=4'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
interface IHeritage
{
	Name: string;
}
class HalfElf extends Object implements IAncestry, IHeritage, IAoNIte    
{
	get Name(): st    ing        	{
		r'HalfElf'lfE    f";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;    
	}
	get Size():     ize        	{
		return Size.Med    um;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Free), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		return new Array<AbilityScoreBoostFlaw>    0);    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Elf, Trait.Humanoid, Trait.Hal        lf
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Low-Light Vision'is        n"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=7'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Halfling extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Halfling'fli    g";    
	}
	get HitPoints(): nu    ber        	{
		retur     6;    
	}
	get Size():     ize        	{
		return Size.Sm    ll;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Dexterity), new AbilityScoreBoostFlaw(true, Ability.Wisdom), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Stren        h)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Halfling, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Halfling, Trait.Huma        id
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Keen Eyes' E        s"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=5'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class HalfOrc extends Object implements IAncestry, IHeritage, IAoNIte    
{
	get Name(): st    ing        	{
		r'HalfOrc'lfO    c";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;    
	}
	get Size():     ize        	{
		return Size.Med    um;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Free), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		return new Array<AbilityScoreBoostFlaw>    0);    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Orc, Trait.Humanoid, Trait.Hal        rc
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Low-Light Vision'is        n"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=8'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Hobgoblin extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Hobgoblin'obl    n";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;    
	}
	get Size():     ize        	{
		return Size.Med    um;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Intelligence), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Wis        m)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Goblin, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Goblin, Trait.Humanoid, Trait.Unco        on
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Darkvision'is        n"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=13'ID=1    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Human extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Human'Hum    n";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;    
	}
	get Size():     ize        	{
		return Size.Med    um;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Free), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		return new Array<AbilityScoreBoostFlaw>    0);    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Human, Trait.Huma        id
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		return new Array<string>    0);    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=6'?ID=    ");    
	}
	construct    r()        	{
		supe    ();
	}
}
class Leshy extends Object implements IAncestry, IAoNIte    
{
	get Name(): st    ing        	{
		r'Leshy'Les    y";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;    
	}
	get Size():     ize        	{
		return Size.Sm    ll;    
	}
	get Speed(): nu    ber        	{
		return    25;    
	}
	get AbilityBoosts(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(true, Ability.Constitution), new AbilityScoreBoostFlaw(true, Ability.Wisdom), new AbilityScoreBoostFlaw(true, Ability.F        e)
    	];    
	}
	get AbilityFlaws(): ICollection<AbilityScoreBoostF    aw>        	{
		retu            [
			new AbilityScoreBoostFlaw(false, Ability.Intellige        e)
    	];    
	}
	get Languages(): ICollection<Langu    ge>        	{
		retu            [
			Language.Sylvan, Language.Co        on
    	];    
	}
	get Traits(): ICollection<Tr    it>        	{
		retu            [
			Trait.Plant, Trait.Leshy, Trait.Unco        on
    	];    
	}
	get SpecialAbilities(): ICollection<str    ng>        	{
		retu            'Low-Light Vision'is'Plant Nourishment'hm        t"
    	];    
	}
	get AoNUri():    Uri        	{
		return ne'http://2e.aonprd.com/Ancestries.aspx?ID=14'ID=1    ");    
	}
	construct    r()        	{
		supe    ();
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
class Emancipated extends Object implements IBackgroun    
{
	get Name(): st    ing        	{
		return super.GetType().N    me;    
	}
	get AbilityBoostOptions(): List<AbilityScoreBoostF    aw>        	{
		var expr_05: List<AbilityScoreBoostFlaw> = new List<AbilityScoreBoostFlaw        );
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Dexterit        );
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Charism        );
		return expr    05;    
	}
	get AbilityScoreBoost(): AbilityScoreBoost    law        	{
		return new AbilityScoreBoostFlaw(true, Ability.Fr    e);    
	}
	set SkillFeat(value: str    ng)        	{
		throw new NotImplementedExceptio    ();    
	}
	get SkillFeat(): st    ing        	{
		throw new NotImplementedExceptio    ();    
	}
	set TrainedSkill(value: str    ng)        	{
		throw new NotImplementedExceptio    ();    
	}
	get TrainedSkill(): st    ing        	{
		throw new NotImplementedExceptio    ();    
	}
	set TrainedLoreSkill(value: str    ng)        	{
		throw new NotImplementedExceptio    ();    
	}
	get TrainedLoreSkill(): st    ing        	{
		throw new NotImplementedExceptio    ();    
	}
	construct    r()        	{
		supe    ();
	}
}
class Scholar extends Object implements IBackgroun    
{
	get Name(): st    ing        	{
		return super.GetType().N    me;    
	}
	get AbilityBoostOptions(): List<AbilityScoreBoostF    aw>        	{
		var expr_05: List<AbilityScoreBoostFlaw> = new List<AbilityScoreBoostFlaw        );
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Intelligenc        );
		expr_05.Add(new AbilityScoreBoostFlaw(true, Ability.Wisdo        );
		return expr    05;    
	}
	get AbilityScoreBoost(): AbilityScoreBoost    law        	{
		return new AbilityScoreBoostFlaw(true, Ability.Fr    e);    
	}
	get SkillFeat(): st    ing        	{
		throw new NotImplementedExceptio    ();    
	}
	get TrainedSkill(): st    ing        	{
		throw new NotImplementedExceptio    ();    
	}
	get TrainedLoreSkill(): st    ing        	{
		throw new NotImplementedExceptio    ();    
	}
	construct    r()        	{
		supe    ();
	}
}
class CharacterBackgrounds extends Object
{
	static Emancipated: Emancipated = new Emancipated();
	static Scholar: Scholar = new Scholar();
	constructor()	    	{
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
class Rogue extends Object implements IPcClas    
{
	get Name(): st    ing        	{
		r'Rogue'Rog    e";    
	}
	get HitPoints(): nu    ber        	{
		retur     8;
	}
	SubClass: string = null;
	get KeyAbilityScore(): AbilityScoreBoostFlaw	    	{
		return new AbilityScoreBoostFlaw(true, Ability.Dexterity);
	}
	get AlternateKeyAbilityScore(): AbilityScoreBoostFlaw	    	{
		return new AbilityScoreBoostFlaw(true, Ability.Strength);
	}
	get TypicalMembers(): string	    	{
		throw new NotImplementedException();
	}
	get RolePlayingSuggestions(): string	    	{
		throw new NotImplementedException();
	}
	get Proficiencies(): Dictionary<string, Proficiency>	    	{
		throw new NotImplementedException();
	}
	get AdvancementTable(): Dictionary<number, string[]>	    	{
		throw new NotImplementedException();
	}
	get SubClasses(): List<string>	    	{
		var expr_05: List<string> = new List<string	    );
		expr_0'Ruffian'ffia	    );
		expr_0'Scoundrel'ndre	    );
		expr_0'Thief'Thie	    );
		return expr_05;
	}
	get NameOfSubClass(): string	    	{
		r'Racket'acket";
	}
	get ClassFeats(): List<IClassFeat>	    	{
		throw new NotImplementedException();
	}
	GetKeyAbilityScore(): number	    	{
		throw new NotImplementedException();
	}
	GetKeyAbilityScoreModifier(): number	    	{
		throw new NotImplementedException();
	}
	GetProficiency(proficiencyWanted: PlayerCharacter_Proficiencies, level: number): Proficiency	    	{
		throw new NotImplementedException();
	}
	SetSubClass(value: string): void	    	{
		var flag: boolean = String.IsNullOrEmpty(val	    );
		if (!f	    g)	        {
			this.SubClass = va	    e;
		}
	}
	constructor()	    	{
		super();
	}
}
class PcClasses extends Object
{
	static Rogue: Rogue = new Rogue();
	constructor()	    	{
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
class AnvilDwarf extends Object implements IHeritag    
{
	get Name(): st    ing        	{
		r'Anvil Dwarf'Dwa    f";    
	}
	construct    r()        	{
		supe    ();
	}
}
class Heritages extends Object
{
	static AnvilDwarf: AnvilDwarf = new AnvilDwarf();
	constructor()	    	{
		super();
	}
}
class PlayerCharacter extends Object
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
	constructor()	    	{
		supe	    );
		this.Id = n	    l;
		this.Level = 1;
	}
	SetAncestry(value: string): void	    	{
		var flag: boolean = String.IsNullOrEmpty(val	    );
		if (!f	    g)	        {
			        y
	            
				var typeFromHandle: Type = new'Ancestries'trie	            
				var ancestry: IAncestry = <IAncestry>typeFromHandle.GetField(value).GetValue(nu	            
				this.Ancestry = ances	        ;
	        }
			catch 	        )
	            
				if (ex instanceof Except	            
		                
					throw new Exception(String.Conc	                    'Check the Ancestries.cs file to see if 'e if ", v' has a property there. Could not assign 'sign ", v' as an Ancestry. Invalid Ancestry name or String.  'ng.  ", ex.Mes	                
						            
		            
					                
					throw	        ;
	    	}
		}
	}
	SetBackground(value: string): void	    	{
		var flag: boolean = String.IsNullOrEmpty(val	    );
		if (!f	    g)	        {
			        y
	            
				var typeFromHandle: Type = new'CharacterBackgrounds'ound	            
				var background: IBackground = <IBackground>typeFromHandle.GetField(value).GetValue(nu	            
				this.Background = backgro	            
				this.BackgroundAbilityChoice = Enumerable.First<AbilityScoreBoostFlaw>(background.AbilityBoostOptio	        ;
	        }
			catch 	        )
	            
				if (ex instanceof Except	            
		                
					throw new Exception(String.Conc	                    'Check to make sure 'sure ", v' exists in the CharacterBackgrounds.cs file. Could not assign 'sign ", v' as an Background. Invalid Background name or String. 'ing. ", ex.Mes	                
						            
		            
					                
					throw	        ;
	    	}
		}
	}
	SetBackgroundAbility(value: string): void	    	{
		var flag: boolean = String.IsNullOrEmpty(val	    );
		if (!f	    g)	        {
			var ability: Ability = <Ability>Enum.Parse(new'Number'umber"), val	        ;
			this.BackgroundAbilityChoice = new AbilityScoreBoostFlaw(true, abili	    );
		}
	}
	GetBackgroundAbilityChoices(): List<string>	    	{
		var flag: boolean = this.Background === n	    l;
		var result: List<stri	    >;
		if (f	    g)	        {
			result = new List<string	    );	    	}
			    se	        {
			var abilityBoostOptions: List<AbilityScoreBoostFlaw> = this.Background.AbilityBoostOpti	        ;
			var arg_42_0: IEnumerable<AbilityScoreBoostFlaw> = abilityBoostOpti	        ;
			var arg_42_1: (arg: AbilityScoreBoostFlaw) => str	        ;
			if ((arg_42_1 = PlayerCharacter___c.__9__24_0) === n	        )
	            
				arg_42_1 = (PlayerCharacter___c.__9__24_0 = PlayerCharacter___c.__9._GetBackgroundAbilityChoices_b__24	        ;
	        }
			var source: IEnumerable<string> = Enumerable.Select<AbilityScoreBoostFlaw, string>(arg_42_0, arg_42	        ;
			result = Enumerable.ToList<string>(sour	    );	    	}
		return result;
	}
	SetHeritage(value: string): void	    	{
		var flag: boolean = PF2eCoreUtils.GetListOfHeritages().Contains(val	    );
		if (f	    g)	        {
			        y
	            
				var typeFromHandle: Type = new'Heritages'tage	            
				var heritage: IHeritage = <IHeritage>typeFromHandle.GetField(value).GetValue(nu	            
				this.Heritage = herit	        ;
	        }
			catch 	        )
	            
				if (ex instanceof Except	            
		                
					throw new Exception(String.Conc	                    'Check to make sure 'sure ", v' exists in the Heritages.cs file. Could not assign 'sign ", v' as an Heritage. Invalid Heritage name or String. 'ing. ", ex.Mes	                
						            
		            
					                
					throw	        ;
	    	}
		}
	}
	SetLevel(newLevel: number): void	    	{
		throw new NotImplementedException();
	}
	SetClass(value: string): void	    	{
		var flag: boolean = String.IsNullOrEmpty(val	    );
		if (!f	    g)	        {
			        y
	            
				var typeFromHandle: Type = new'PcClasses'asse	            
				var pcClass: IPcClass = <IPcClass>typeFromHandle.GetField(value).GetValue(nu	            
				this.PcClass = pcCl	        ;
	        }
			catch 	        )
	            
				if (ex instanceof Except	            
		                
					throw new Exception(String.Conc	                    ' Make sure 'sure ", v' has an entry in the PcClasses.cs file. Could not assign 'sign ", v' as an PcClass. Invalid PcClass name or String. 'ing. ", ex.Mes	                
						            
		            
					                
					throw	        ;
	    	}
		}
	}
	SetAbilityScore(abilityName: string, score: number): void	    	{
		var flag: boolean = this.AbilityScoreArrayIsMissin	    );
		if (f	    g)	        {
			this.AbilityScores = new AbilityScoreArray(new List<AbilityScoreBoostFlaw>	    );	    	}
		var flag2: boolean = String.IsNullOrEmpty(abilityNa	    );
		if (!fl	    2)	        {
			this.AbilityScores.SetAbilityScore(score, Enum.Parse<Ability>(abilityNam	    );
		}
	}
	AbilityScoreArrayIsMissing(): boolean	    	{
		return this.AbilityScores === null;
	}
	SetNewAlignment(value: string): void	    	{
		throw new NotImplementedException();
	}
	GetTotalBulk(): number	    	{
		throw new NotImplementedException();
	}
	GetEncumbered(): number	    	{
		return 5 + this.AbilityScores.Strength.Modifier;
	}
	GetMaxBulk(): number	    	{
		return 10 + this.AbilityScores.Strength.Modifier;
	}
	GetSpellAttackRoll(): number	    	{
		return 0;
	}
	GetSpellKeyAbilityModifier(): number	    	{
		return 0;
	}
	GetSpellAttackProficiency(): Proficiency	    	{
		return Proficiency.Untrained;
	}
	GetSpellDCModifier(): number	    	{
		return 0;
	}
	GetSpellDC(): number	    	{
		return 0;
	}
	GetSpellDCProficiency(): Proficiency	    	{
		return Proficiency.Untrained;
	}
	GetCantripLevel(): number	    	{
		return 0;
	}
	GetDailySpellSlot(): number[]	    	{
		return new Array<number>(2);
	}
	GetCantrip(): List<string>	    	{
		throw new NotImplementedException();
	}
	GetInnateSpells(): List<string>	    	{
		throw new NotImplementedException();
	}
	GetSpells(): List<string>	    	{
		throw new NotImplementedException();
	}
	GetFocusSpells(): List<string>	    	{
		throw new NotImplementedException();
	}
}
class PlayerCharacter___c extends Object
{
	static __9: PlayerCharacter___c = new PlayerCharacter___c();
	static __9__24_0: (arg: AbilityScoreBoostFlaw) => string = null;
	_GetBackgroundAbilityChoices_b__24_0(choice: AbilityScoreBoostFlaw): string	    	{
		return choice.Ability;
	}
	constructor()	    	{
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
