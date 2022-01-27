import { Component } from '@angular/core';

@Component({
    selector: 'navi-example',
    inputs: ['upC'],
    template: `
        <textarea>
            {{ this.upC }}
        </textarea>    
    `,
    styleUrls: ['./app.component.css']
})
export class NaviExampleComponent {
    upC: string|null = null;
}
