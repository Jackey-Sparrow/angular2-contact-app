import {Component, View} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
    selector:'component-3'
})
@View({
    templateUrl: './components/help/help.html?v=<%= VERSION %>',
    directives:[RouterLink]
})

export class Help{}