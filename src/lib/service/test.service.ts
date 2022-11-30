import { Injectable } from '@angular/core';
import { TestOject } from '../../interface/test-object.interface';

@Injectable({
    providedIn: 'root'
})
export class TestService {
    test(): TestOject {
        return { id: 0, name: 'testobject'};
    }

    testParam(id: number): string {
        return `Your id was: ${id}`;
    }
}