import { Component, Input } from '@angular/core';
import { LoaderOneComponent } from './loader-one/loader-one.component';
import { LoaderTwoComponent } from './loader-two/loader-two.component';
import { LoaderThreeComponent } from './loader-three/loader-three.component';

@Component({
    selector: 'app-loader',
    imports: [LoaderOneComponent, LoaderTwoComponent, LoaderThreeComponent],
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Input() type: string;

}
