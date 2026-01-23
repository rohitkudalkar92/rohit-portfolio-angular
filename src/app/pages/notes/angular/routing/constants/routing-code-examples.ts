export const ROUTING_CODE_EXAMPLES = {
  basicRouting: `// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },           // Default route
  { path: 'about', component: AboutComponent },     // /about
  { path: '**', redirectTo: '' }                    // Wildcard - redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// app.component.html
<nav>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
</nav>
<router-outlet></router-outlet>`,

  routeParameters: `// Route with parameter
const routes: Routes = [
  { path: 'user/:id', component: UserComponent }
];

// UserComponent
import { ActivatedRoute } from '@angular/router';

export class UserComponent implements OnInit {
  userId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Get route parameter
    this.userId = this.route.snapshot.paramMap.get('id');
    
    // Or subscribe to parameter changes
    this.route.paramMap.subscribe(params => {
      this.userId = params.get('id');
    });
  }
}

// Navigate with parameter
<a [routerLink]="['/user', userId]">View User</a>`,

  queryParams: `// Query parameters: /search?q=angular&page=1
export class SearchComponent implements OnInit {
  searchQuery: string;
  page: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['q'];
      this.page = params['page'];
    });
  }
}

// Navigate with query params
<a [routerLink]="['/search']" [queryParams]="{q: 'angular', page: 1}">Search</a>

// Programmatic navigation
import { Router } from '@angular/router';

constructor(private router: Router) {}

search() {
  this.router.navigate(['/search'], { 
    queryParams: { q: 'angular', page: 1 } 
  });
}`,

  childRoutes: `// Child routes
const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductEditComponent }
    ]
  }
];

// ProductsComponent template
<h2>Products</h2>
<router-outlet></router-outlet>  <!-- Child routes render here -->

// URLs:
// /products -> ProductListComponent
// /products/123 -> ProductDetailComponent
// /products/123/edit -> ProductEditComponent`,

  lazyLoading: `// Lazy loading module
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

// admin-routing.module.ts
const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users', component: AdminUsersComponent }
];

// Benefits:
// - Reduces initial bundle size
// - Loads modules only when needed
// - Improves app performance`,

  routeGuards: `// CanActivate Guard - protect routes
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('token');
    
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

// Use guard in routes
const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]  // Protected route
  }
];`,

  programmaticNavigation: `import { Router, ActivatedRoute } from '@angular/router';

export class MyComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Navigate to route
  goToAbout() {
    this.router.navigate(['/about']);
  }

  // Navigate with parameters
  goToUser(id: number) {
    this.router.navigate(['/user', id]);
  }

  // Navigate with query params
  search(term: string) {
    this.router.navigate(['/search'], {
      queryParams: { q: term }
    });
  }

  // Relative navigation
  goToEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  // Navigate back
  goBack() {
    window.history.back();
  }
}`,

  routerLinkActive: `// Highlight active links
<nav>
  <a routerLink="/" 
     routerLinkActive="active"
     [routerLinkActiveOptions]="{exact: true}">
    Home
  </a>
  
  <a routerLink="/about" 
     routerLinkActive="active">
    About
  </a>
  
  <a routerLink="/contact" 
     routerLinkActive="active">
    Contact
  </a>
</nav>

// CSS
.active {
  color: blue;
  font-weight: bold;
  border-bottom: 2px solid blue;
}`
} as const;
