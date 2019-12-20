import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Login from '../components/Login'
import Regist from '../components/Regist'
import Search from '../components/search/Search'
import PaperListRecommend from '../components/paperList/PaperListRecommend'
import PaperListSearch from '../components/paperList/PaperListSearch'
import AdvancedSearch from '../components/search/AdvancedSearch'
import Paper from '../components/Paper/Paper'
import PaperListType from '../components/paperList/PaperListType'
import SearchOnly from '../components/search/SearchOnly'
import Expert from '../components/expert/expert'
import Patent from '../components/expert/patent/Patent'
import profile from '../components/expert/profile/profile'
import Admin from '../components/admin/Admin'
import PaperListSearchAdvanced from '../components/paperList/PaperListSearchAdvanced'
import MyProfile from '../components/admin/myprofile/MyProfile'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/login',
      children: [
        {
          path: 'PaperList/:PaperType',
          name: 'PaperListType',
          component: PaperListType
        },
        {
          path: 'Paper/:title',
          name: 'Paper',
          component: Paper
        },
        {
          path: 'searchOnly',
          name: 'SearchOnly',
          component: SearchOnly
        },
        {
          path: 'search',
          name: 'Search',
          component: Search,
          children: [
            {
              path: 'PaperList_Recommend',
              name: 'PaperListRecommend',
              component: PaperListRecommend
            },
            {
              path: ':listType/:input',
              name: 'PaperListSearch',
              component: PaperListSearch
            }
          ]
        },
        {
          path: 'advanced_search',
          name: 'AdvancedSearch',
          component: AdvancedSearch,
          children: [
            {
              path: ':input0/:relation/:input1',
              name: 'AdvancedSearchList',
              component: PaperListSearchAdvanced
            }
          ]
        },
        {
          path: 'Expert/:input',
          name: 'Expert',
          component: Expert,
          redirect: 'Expert/:input/profile',
          children: [
            {
              path: 'profile',
              name: 'profile',
              component: profile
            },
            {
              path: 'Patent',
              name: 'Patent',
              component: Patent
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'myProfile',
          name: 'myProfile',
          component: MyProfile
        }
      ]
    }
  ]
})
