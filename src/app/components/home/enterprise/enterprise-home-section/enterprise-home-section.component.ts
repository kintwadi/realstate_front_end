import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { LookingForIconsComponent } from '../../../../shared/components/common/home-section-slider/looking-for-icons/looking-for-icons.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-enterprise-home-section',
    imports: [LookingForIconsComponent, RouterModule],
    templateUrl: './enterprise-home-section.component.html',
    styleUrls: ['./enterprise-home-section.component.scss']
})
export class EnterpriseHomeSectionComponent {

  public textToType = 'Much Is House Worth ?';
  public typedText = '';
  public animationSubscription: Subscription | undefined;

  ngOnInit() {
    this.startTypingAnimation();
  }

  ngOnDestroy() {
    if (this.animationSubscription) {
      this.animationSubscription.unsubscribe();
    }
  }

  startTypingAnimation() {
    const charactersArray = this.textToType.split('');
    let currentIndex = 0;
    let eraseMode = false;

    this.animationSubscription = interval(150).subscribe(() => {
      if (!eraseMode) {
        if (currentIndex < charactersArray.length) {
          this.typedText += charactersArray[currentIndex];
          currentIndex++;
        } else {
          eraseMode = true;
        }
      } else {
        if (this.typedText.length > 0) {
          this.typedText = this.typedText.slice(0, -1);
        } else {
          eraseMode = false;
          currentIndex = 0;
        }
      }
    });
  }
}
