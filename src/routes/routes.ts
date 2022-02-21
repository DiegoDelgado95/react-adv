import { LazyExoticComponent } from 'react';
import { lazy } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

// const LazyPage1 = lazy( () => import('../01-lazyload/pages/LazyPage1') );
// const LazyPage2 = lazy( () => import('../01-lazyload/pages/LazyPage2') );
// const LazyPage3 = lazy( () => import('../01-lazyload/pages/LazyPage3') );

interface Route {
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?: Route[]
}


export const routes: Route[] = [
      {
        path: '/lazyload',
        Component: lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') ),
        name: 'LazyLoading Nested'
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy loading'
    }
]