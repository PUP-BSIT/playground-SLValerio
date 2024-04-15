interface OnInit {
    ngOnInit():void;
}

function Component(selector:string, template:string) {
    return function() {
      console.log("The class is represented by selector <selector> and has a template of <template>.");
    }
}

@Component(selector, template)

class Valerio implements OnInit{
    constructor (private name: string) {
        console.log(`Rhe component $(this.name) is initiated.`);
    }
}

const valerio = new Valerio("Valerio");