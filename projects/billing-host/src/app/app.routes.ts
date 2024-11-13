import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'billing',
    loadChildren: () => loadRemoteModule('billing', './routes').then((m) => m.routes),
  },

];
