import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Iftikhar Yar Khan - Project Lead & Backend Architect',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'about',
        title: 'About - Iftikhar Yar Khan',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
    },
    {
        path: 'contact',
        title: 'Contact - Iftikhar Yar Khan',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    {
        path: 'blog',
        title: 'Blog & Insights - Iftikhar Yar Khan',
        loadComponent: () => import('./pages/blogs/blogs.component').then(m => m.BlogsComponent)
    },
    // {
    //     path: 'blog/:slug',
    //     title: 'Optimizing Cloud Costs at Scale',
    //     loadComponent: () => import('./pages/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
    // },
    {
        path: 'projects',
        title: 'Projects - Iftikhar Yar Khan',
        loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
    },
    // {
    //     path: 'project/:slug',
    //     title: 'Project Detail - Nexus Data Platform',
    //     loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent)
    // },
    {
        path: '**',
        title: '404 Not Found',
        loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
    }
];
