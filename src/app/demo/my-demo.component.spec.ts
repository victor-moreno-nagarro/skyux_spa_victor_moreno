import {
  TestBed
} from '@angular/core/testing';

import {
  SkyAppTestModule
} from '@skyux-sdk/builder/runtime/testing/browser';

import {
  expect
} from '@skyux-sdk/testing';

import {
  MyDemoComponent
} from './my-demo.component';

describe('My demo component', () => {

  /**
   * This configureTestingModule function imports SkyAppTestModule, which brings in all of
   * the SKY UX modules and components in your application for testing convenience. If this has
   * an adverse effect on your test performance, you can individually bring in each of your app
   * components and the SKY UX modules that those components rely upon.
   */
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('test prueba', () => {
    const fixture = TestBed.createComponent(MyDemoComponent);
    const alertEl = fixture.nativeElement.querySelector('p');

    // Using custom expect matchers
    expect(alertEl).toBeVisible();
    expect(alertEl).toHaveText(`Prueba Test`);
  });

});
