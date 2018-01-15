import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils } from '../../test';
import { MusicPage } from './music';

let fixture: ComponentFixture<MusicPage> = null;
let instance: any = null;

describe('Pages: MusicPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([MusicPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the music page', async(() => {
    expect(instance).toBeTruthy();
  }));
});