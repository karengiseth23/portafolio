import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'experience',
        loadComponent: () =>
        import('./components/experience/experience').then(m => m.Experience)
    },
      {
        path: 'projects',
        loadComponent: () =>
        import('./components/projects/projects').then(m => m.Projects)
    },
    {
        path: 'project/:id',
        loadComponent: () =>
            import('./components/project-detail/project-detail').then(m => m.ProjectDetail)
     },
    {
        path: 'aboutMe',
        loadComponent: () =>
        import('./components/about/about').then(m => m.About)
    },
    {
        path: '**',
        redirectTo: 'aboutMe'
    }

];
