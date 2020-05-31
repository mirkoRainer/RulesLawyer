class CheckOutcome extends Object {
    private difficultyClass: number = 0;
    private checkTotal: number = 0;
    private numberOnDie: number = 0;
    private isCritical: boolean = false;
    private isSuccess: boolean = false;
    private criticalThreshold: number = 0;
    constructor(
        difficultyClass: number,
        checkTotal: number,
        dieRoll: number,
        criticalThreshold: number = 10
    ) {
        super();
        this.checkTotal = checkTotal;
        this.difficultyClass = difficultyClass;
        this.criticalThreshold = criticalThreshold;
        this.numberOnDie = dieRoll;
        this.isCritical = false;
        this.isSuccess = false;
        this.DetermineOutcome();
    }
    private DetermineOutcome(): void {
        this.isSuccess = this.checkTotal >= this.difficultyClass;
        this.DetermineCritical();
    }
    private DetermineCritical(): void {
        var num: number = this.isSuccess
            ? this.checkTotal - this.difficultyClass
            : this.difficultyClass - this.checkTotal;
        this.isCritical = num >= this.criticalThreshold;
        this.AccountFor20or1onDie();
    }
    private AccountFor20or1onDie(): void {
        var flag: boolean = this.numberOnDie === 1;
        if (flag) {
            this.DowngradeResult();
        }
        var flag2: boolean = this.numberOnDie === 20;
        if (flag2) {
            this.UpgradeResult();
        }
    }
    private UpgradeResult(): void {
        var flag: boolean = this.isSuccess && this.isCritical;
        if (!flag) {
            var flag2: boolean = this.isSuccess && !this.isCritical;
            if (flag2) {
                this.isCritical = true;
            }
            var flag3: boolean = !this.isSuccess && !this.isCritical;
            if (flag3) {
                this.isSuccess = true;
            }
            var flag4: boolean = !this.isSuccess && this.isCritical;
            if (flag4) {
                this.isCritical = false;
            }
        }
    }
    private DowngradeResult(): void {
        var flag: boolean = this.isSuccess && this.isCritical;
        if (flag) {
            this.isCritical = false;
        } else {
            var flag2: boolean = this.isSuccess && !this.isCritical;
            if (flag2) {
                this.isSuccess = false;
            } else {
                var flag3: boolean = !this.isSuccess && !this.isCritical;
                if (flag3) {
                    this.isCritical = true;
                } else {
                    var flag4: boolean = !this.isSuccess && this.isCritical;
                    if (flag4) {
                    }
                }
            }
        }
    }
    RetrieveOutcomeReport(): string {
        var text: string = this.isSuccess ? "Success" : "Failure";
        return this.isCritical ? "Critical " + text : text;
    }
}
