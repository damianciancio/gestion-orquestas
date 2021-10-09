import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
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
    path: '/user/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta: {
      guest: true,
      link_name: 'Log In',
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: false,
      link_name: 'Home',
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
        path: '/add',
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

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/user/login',
        params: { nextUrl: to.fullPath },
      });
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user);
      if (to.matched.some((record) => record.meta.is_admin)) {
        if (user.rolesUser.map(rol => rol.id).includes(1)) {
          next();
        } else {
          next({ name: 'Home' });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (localStorage.getItem('jwt') == null) {
      next();
    } else {
      next({ name: 'Home' });
    }
  } else {
    next();
  }
});

export default router;
