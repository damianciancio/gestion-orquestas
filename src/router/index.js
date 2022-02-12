import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/payment/:id/buy/failed',
    name: 'PagoFallido',
    component: () => import(/* webpackChunkName: "FailedPayment" */ '../views/shows/FailedPayment.vue'),
    meta: {
      requiresAuth: true,
      layout: 'user'
    }
  }, 
  {
    path: '/payment/:id/buy/success',
    name: 'PagoAprobado',
    component: () => import(/* webpackChunkName: "register" */ '../views/shows/SuccessfullPayment.vue'),
    meta: {
      requiresAuth: true,
      link_name: 'PaymentSuccessfull',
      layout: 'user'
    }
  },
  {
    path: '/user/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    meta: {
      guest: true,
      link_name: 'Registrarse',
    },
  },
  {
    path: '/new/:id',
    name: 'NewView',
    component: () => import( /* webpackChunkName: "register" */ '../views/news/NewView.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true,
      link_name: 'Log In',
    },
  },
  {
    path: '/user/:id',
    name: 'UserProfile',
    component: () => import('../views/UserProfile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/shows/:id',
    name: 'ShowView',
    component: () => import('../views/shows/Show.vue'),
    meta: {
      requiresAuth: false,
      link_name: 'ShowView',
      layout: 'user'
    },
  },
  {
    path: '/shows/:id/buy',
    name: 'BuyTickets',
    component: () => import('../views/shows/BuyTickets.vue'),
    meta: {
      requiresAuth: true,
      link_name: 'BuyTickets',
      layout: 'user'
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
      link_name: 'Home',
      layout: 'user-home'
    },
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/Dashboard.vue'),
    meta: {
      requiresAuth: true,
      is_admin: true,
      link_name: 'Dashboard',
    },
  },
  {
    path: '/admin/resources',
    name: 'Recursos',
    component: () => import(/* webpackChunkName: "usermanagement" */ '../views/MusicalResources.vue'),
    meta: {
      requiresAuth: true,
      is_admin: true,
      link_name: 'Recursos'
    },
    redirect: { name: 'ResourcesList' },
    children: [
      {
        path: '',
        name: 'ResourcesList',
        component: () => import(/* webpackChunkName: "usermanagement" */ '../views/MusicalResourcesList.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Recursos'
        },
      },
      {
        path: 'add/:type',
        name: 'CrearRecurso',
        component: () => import(/* webpackChunkName: "usermanagement" */ '../views/MusicalResourceAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Recursos'
        },
      },
      {
        path: ':id',
        name: 'VerRecurso',
        component: () => import(/* webpackChunkName: "usermanagement" */ '../views/MusicalResourceView.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'VistaRecurso'
        },
      },
      {
        path: ':id/editar',
        name: 'EditarRecurso',
        component: () => import(/* webpackChunkName: "usermanagement" */ '../views/MusicalResourceAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'edicionRecurso'
        },
      },
    ]
  },
  {
    path: '/admin/users',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "usermanagement" */ '../views/UserManagement.vue'),
    redirect: { name: 'UserList' },
    meta: {
      requiresAuth: true,
      is_admin: true,
      link_name: 'Usuarios',
    },
    children: [
      {
        path: '',
        name: 'UserList',
        component: () => import(/* webpackChunkName: "UserList" */ '../views/UserList.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Gestión de Usuarios'
        },
      },
      {
        path: 'add',
        name: 'CrearUsuario',
        component: () => import(/* webpackChunkName: "useradd" */ '../views/UserAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Crear Usuario',
        },
      },
      {
        path: 'edit/:id',
        name: 'EditarUsuario',
        component: () => import(/* webpackChunkName: "useradd" */ '../views/UserAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Editar Usuario'
        }
      }
    ]
  },
  {
    path: '/admin/news',
    name: 'NewsManagement',
    component: () => import('../views/news/NewsManagement'),
    meta: {
      requiresAuth: true,
      is_admin: true,
      link_name: 'Noticias'
    },
    redirect: {name: 'NewsList'},
    children: [
      {
        path: '',
        name: 'NewsList',
        component: () => import('../views/news/NewsList'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Noticias'
        }
      },
      {
        path: 'add',
        name: 'CrearNoticia',
        component: () => import(/* webpackChunkName: "useradd" */ '../views/news/NewAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Crear Noticia',
        },
      },
      {
        path: 'edit/:id',
        name: 'EditarNoticia',
        component: () => import(/* webpackChunkName: "useradd" */ '../views/news/NewAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Editar Noticia'
        }
      }
    ]
  },
  {
    path: '/admin/shows',
    name: 'ShowsManagement',
    component: () => import('../views/shows/ShowsManagement'),
    meta: {
      requiresAuth: true,
      is_admin: true,
      link_name: 'Shows'
    },
    redirect: {name: 'ShowsList'},
    children: [
      {
        path: '',
        name: 'ShowsList',
        component: () => import('../views/shows/ShowsList'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Shows'
        }
      },
      {
        path: 'add',
        name: 'CrearShow',
        component: () => import(/* webpackChunkName: "useradd" */ '../views/shows/ShowAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Crear show',
        },
      },
      {
        path: 'edit/:id',
        name: 'EditarShow',
        component: () => import(/* webpackChunkName: "useradd" */ '../views/shows/ShowAdd.vue'),
        meta: {
          requiresAuth: true,
          is_admin: true,
          link_name: 'Editar Show'
        }
      }
    ]
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("to", to)
  console.log("from", from)
  console.log("from", from)
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    console.log("1")
    if (localStorage.getItem('jwt') == null) {
      console.log("2")
      next({
        name: 'Login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      console.log("3")
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if (to.matched.some((record) => record.meta.is_admin)) {
        console.log("4")
        if (user.rolesUser.map(rol => rol.id).includes(1)) {
          console.log("5")
          next();
        } else {
          console.log("6")
          next({ name: 'Home' });
        }
      } else {
        console.log("7")
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    console.log("8")
    if (localStorage.getItem('jwt') == null) {
      console.log("9")
      next();
    } else {
      console.log("10")
      next({ name: 'Home' });
    }
  } else {
    console.log("10")
    next();
  }
});

export default router;
