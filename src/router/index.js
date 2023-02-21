import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },
  {
    path: "/todolist",
    component: Layout,
    children: [
      {
        path: "todolist",
        name: "todolist",
        component: () => import("@/views/todolist/index"),
        meta: { title: "代办事项", icon: "form" },
      },
    ],
  },
  {
    path: "/fileSystem",
    component: Layout,
    children: [
      {
        path: "fileSystem",
        name: "fileSystem",
        component: () => import("@/views/fileSystem/index"),
        meta: { title: "文件系统", icon: "form" },
      },
    ],
  },
  {
    path: "/staffManagement",
    component: Layout,
    children: [
      {
        path: "staffManagement",
        name: "staffManagement",
        component: () => import("@/views/staffManagement/index"),
        meta: { title: "员工管理", icon: "form" },
      },
    ],
  },
  {
    path: "/personnelManagement",
    component: Layout,
    meta: { title: "入离职管理", icon: "form" },
    children: [
      {
        path: "Induction",
        name: "Induction",
        component: () => import("@/views/personnelManagement/Induction"),
        meta: { title: "入职", icon: "form" },
      },
      {
        path: "depart",
        name: "depart",
        component: () => import("@/views/personnelManagement/depart"),
        meta: { title: "离职", icon: "form" },
      },
      {
        path: "regular",
        name: "regular",
        component: () => import("@/views/personnelManagement/regular"),
        meta: { title: "转正", icon: "form" },
      },
    ],
  },
  {
    path: "/department",
    component: Layout,
    children: [
      {
        path: "department",
        name: "department",
        component: () => import("@/views/department"),
        meta: { title: "部门管理", icon: "form" },
      },
    ],
  },

  {
    path: "/personnelApproval",
    component: Layout,
    children: [
      {
        path: "personnelApproval",
        name: "personnelApproval",
        component: () => import("@/views/personnelApproval"),
        meta: { title: "入离职审批", icon: "form" },
      },
    ],
  },
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
