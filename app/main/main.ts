import { bootstrap } from '@angular/platform-browser-dynamic';
import { RaceComponent } from '../components/race/race.component';

bootstrap(RaceComponent).catch((err) => {
	console.log(err);
});
