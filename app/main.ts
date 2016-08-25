import { bootstrap } from '@angular/platform-browser-dynamic';
import { MyComponent } from './my-component';

bootstrap(MyComponent).catch((err) => {
	console.log(err);
});
