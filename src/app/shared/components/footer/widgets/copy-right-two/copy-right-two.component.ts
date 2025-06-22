import { Component } from '@angular/core';

@Component({
    selector: 'app-copy-right-two',
    imports: [],
    templateUrl: './copy-right-two.component.html',
    styleUrls: ['./copy-right-two.component.scss']
})

export class CopyRightTwoComponent {

    public year = new Date().getFullYear()

}
