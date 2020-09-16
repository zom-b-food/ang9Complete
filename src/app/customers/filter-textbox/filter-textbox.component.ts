import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filter-textbox',
    template: `
        Filter: <input type="text" [(ngModel)]="filter" class="form-control short" />
    `
})
export class FilterTextboxComponent implements OnInit {

    private _filter: string;
    @Input() get filter() {
        return this._filter;
    }

    set filter(val: string) {
        this._filter = val;
        this.changed.emit(this.filter); // Raise changed event
    }

    @Output() changed: EventEmitter<string> = new EventEmitter<string>();


    constructor() {}

    ngOnInit() {

    }
}
