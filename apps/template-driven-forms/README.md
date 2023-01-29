- get data from store dans le smart component (container / presenter pattern)
- créer un vm dans le smart component : pipe sur le store et deepClone (JSON.parse(JSON.stringify(obj)))
- les propriétés du vm sont bind aux templates HTML
- le vm est passé au service d'enregistrement
- exemple de form :
            <app-hero-form
                [vm]="vm$ | async"
                [selectedUi]="selectedUi$ | async"

                (cancel)="close()"
                (save)="save($event)"
                (selectedUiChanged)="updateSelectedUi($event)"
            >
            </app-hero-form>
- dans le composant TS :
            @Input() vm: HeroAndLikes;
            @Input() selectedUi = '0';

            @Output() cancel = new EventEmitter();
            @Output() save = new EventEmitter();
            @Output() selectedUiChanged = new EventEmitter<string>();

            @ViewChild('heroForm') form: NgForm;

            addHero() {}
            onSubmit() {}
            inspect() {}
- https://stackblitz.com/edit/angular-kkatri