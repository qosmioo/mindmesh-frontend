import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import TeamPage from "@/pages/TeamPage.vue";
import LoginPage from "@/pages/Login.vue";
import SignupPage from "@/pages/Signup.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import postItem from "@/components/PostItem.vue";
import TaskBoard from "@/pages/TaskBoard.vue";
import ProfileSettings from "@/pages/ProfileSettings.vue";
import TeamSettings from "@/pages/TeamSettings.vue";
import CreateTeam from "@/pages/CreateTeam.vue";
import CreateTask from "@/pages/CreateTask.vue";
import Participants from "@/pages/Members.vue";
import CreatePost from "@/pages/CreatePost.vue";
import AddMember from "@/pages/AddMember.vue";
import Leaderboard from "@/pages/Leaderboard.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/team/:id/feed',
        component: PostPage,
    },
    {
        path: '/teams',
        component: TeamPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/signup',
        component: SignupPage
    },
    {
        path: '/post/:id',
        component: PostIdPage,
        name: 'postId',
    },
    {
        path: '/team/:id/taskboard',
        component: TaskBoard,
    },
    {
        path: '/settings/profile/:id',
        component: ProfileSettings
    },
    {
        path: '/settings/team/:id',
        component: TeamSettings
    },
    {
        path: '/team-create',
        component: CreateTeam
    },
    {
        path: '/task-create',
        component: CreateTask
    },
    {
        path: '/team/:id/members',
        component: Participants,
    },
    {
        path: '/post-create',
        component: CreatePost
    },
    {
        path: '/member-add',
        component: AddMember
    },
    {
        path: '/team/:id/leaderboard',
        component: Leaderboard
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router