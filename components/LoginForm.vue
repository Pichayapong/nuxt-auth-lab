<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="username"
      >
        Username
      </label>
      <input
        id="username"
        v-model="username"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-6">
      <label
        class="block text-grey-darker text-sm font-bold mb-2"
        for="password"
      >
        Password
      </label>
      <input
        id="password"
        v-model="password"
        class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
        type="password"
        placeholder="******************"
      />
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button @click="login()">Sign In</button>
      <a
        class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
        href="#"
      >
        Forgot Password?
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    async login() {
      console.log(`username ${this.username}, password ${this.password}`)
      try {
        const res = await this.$fire.auth.signInWithEmailAndPassword(
          this.username,
          this.password
        )
        console.log('login successfull', res)
        console.log('user data:', res.user)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
