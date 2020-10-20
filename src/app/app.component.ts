import { Component } from '@angular/core';
import { ToastyConfig } from '../../node_modules/ng2-toasty';
import { Router } from '../../node_modules/@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'contify-ui';

    constructor(
        private toastyConfig: ToastyConfig,
        private router: Router
    ) {
        this.toastyConfig.theme = 'bootstrap';
    }

    navBarDisplays(): any {
        return this.router.url !== '/login';
    }
}
