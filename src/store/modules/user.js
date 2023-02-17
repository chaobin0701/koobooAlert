import { login, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    token: getToken(),
    name: "",
    avatar: "",
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_NAME: (state, name) => {
    state.name = name;
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar;
  },
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    // const { username, password } = userInfo;
    return new Promise((resolve, reject) => {
      commit("SET_TOKEN", "admin-token");
      setToken("admin-token");
      resolve();
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      //   commit('SET_TOKEN', data.token)
      //   setToken(data.token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      let name = "CCB";
      let avatar =
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif";
      commit("SET_NAME", name);
      commit("SET_AVATAR", avatar);
      resolve({ name, avatar });
      //   getInfo(state.token)
      //     .then((response) => {
      //       const { data } = response;

      //       if (!data) {
      //         return reject("Verification failed, please Login again.");
      //       }

      //       const { name, avatar } = data;

      //       commit("SET_NAME", name);
      //       commit("SET_AVATAR", avatar);
      //       resolve(data);
      //     })
      //     .catch((error) => {
      //       reject(error);
      //     });
    });
  },

  //退出登录
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken(); // must remove  token  first
      resetRouter();
      commit("RESET_STATE");
      resolve();
      // logout(state.token)
      //   .then(() => {
      //     removeToken(); // must remove  token  first
      //     resetRouter();
      //     commit("RESET_STATE");
      //     resolve();
      //   })
      //   .catch((error) => {
      //     reject(error);
      //   });
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
