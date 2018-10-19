import { NgModule } from '@angular/core';

import { SampleRunningAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SampleRunningAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SampleRunningAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SampleRunningAppSharedCommonModule {}
