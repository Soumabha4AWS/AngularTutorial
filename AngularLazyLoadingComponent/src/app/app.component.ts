import { Component, ComponentFactoryResolver, Type, ViewContainerRef } from '@angular/core';
import { LazyloadParentComponent } from './component/lazyload-parent/lazyload-parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  lazyComponentPromise: Promise<Type<LazyloadParentComponent>> = new Promise<Type<LazyloadParentComponent>>((resolve, reject) => {}) ;
  

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  async loadLazyParentBottom() {

    this.viewContainerRef.clear();
    const {LazyloadParentComponent} = await import('./component/lazyload-parent/lazyload-parent.component');
    this.viewContainerRef.createComponent(this.componentFactoryResolver.resolveComponentFactory(LazyloadParentComponent));

  }


  async loadLazyParentTop() {    
    this.lazyComponentPromise = import('./component/lazyload-parent/lazyload-parent.component').then(({LazyloadParentComponent})=>LazyloadParentComponent)
  }


}


