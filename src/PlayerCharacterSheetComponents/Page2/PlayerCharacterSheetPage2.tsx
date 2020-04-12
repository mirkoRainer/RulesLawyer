get AncestryFeatsAndAbilities(): string[]
	{
		return this.state.playerCharacter.AncestryFeatsAndAbilities);
	}
	get SkillFeats(): string[]
	{
		return this.state.playerCharacter.SkillFeats);
	}
	get GeneralFeats(): string[]
	{
		return this.state.playerCharacter.GeneralFeats);
	}
	get ClassFeatsAndAbilities(): ObservableCollection<IClassFeat>
	{
		return new ObservableCollection<IClassFeat>(this.state.playerCharacter.ClassFeatsAndAbilities);
	}
	get BonusFeats(): string[]
	{
		return this.state.playerCharacter.BonusFeats);
	}
	get WornItems(): string[]
	{
		return this.state.playerCharacter.WornItems);
	}
	get ReadiedItems(): string[]
	{
		return this.state.playerCharacter.ReadiedItems);
	}
	get OtherItems(): string[]
	{
		return this.state.playerCharacter.OtherItems);
	}
	get TotalBulk(): number
	{
		return this.state.playerCharacter.GetTotalBulk();
	}
	get EncumberedBulk(): number
	{
		return this.state.playerCharacter.GetEncumbered();
	}
	get MaxBulk(): number
	{
		return this.state.playerCharacter.GetMaxBulk();
	}
	get Copper(): number
	{
		return this.state.playerCharacter.Coins.Copper;
	}
	get Silver(): number
	{
		return this.state.playerCharacter.Coins.Silver;
	}
	get Gold(): number
	{
		return this.state.playerCharacter.Coins.Gold;
	}
	get Platinum(): number
	{
		return this.state.playerCharacter.Coins.Platinum;
	}
	get SpellAttackRoll(): number
	{
		return this.state.playerCharacter.GetSpellAttackRoll();
	}
	get SpellKeyAbilityModifier(): number
	{
		return this.state.playerCharacter.GetSpellKeyAbilityModifier();
	}
	get SpellAttackProficiency(): boolean
	{
		return true;
	}
	get SpellDC(): number
	{
		return this.state.playerCharacter.GetSpellDC();
	}
	get SpellDCModifier(): number
	{
		return this.state.playerCharacter.GetSpellDCModifier();
	}
	get SpellDCProficiency(): boolean
	{
		return true;
	}
	get CantripLevel(): number
	{
		return this.state.playerCharacter.GetCantripLevel();
	}
	get SpellSlotsPerDay(): number[]
	{
		return this.state.playerCharacter.GetDailySpellSlot();
	}
	get Cantrips(): string[]
	{
		return this.state.playerCharacter.GetCantrip());
	}
	get InnateSpells(): string[]
	{
		return this.state.playerCharacter.GetInnateSpells());
	}
	get Spells(): string[]
	{
		return this.state.playerCharacter.GetSpells());
	}
	get FocusSpells(): string[]
	{
		return this.state.playerCharacter.GetFocusSpells());
	}
	private CreateAbilityModifierString(modifier: number): string
	{
		var flag: boolean = modifier <= 0;
		var result: string;
		if (flag)
		{
			result = String.Format("{0}", modifier);
		}
		else
		{
			result = String.Format("+{0}", modifier);
		}
		return result;
	}