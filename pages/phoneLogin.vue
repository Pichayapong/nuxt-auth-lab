<template>
  <div>
    <h1>Login</h1>
    <br /><br />
    <form @submit.prevent="submit">
      <div>
        <label
          for="phonenumber"
          style="font:family:system-ui;font-size: x-large;"
          >Phone Number</label
        >
      </div>
      <div>
        <input
          id="phonenumber"
          v-model="phoneNumber"
          type="tel"
          maxlength="13"
          required
          style="
            text-align: center;
            maxwidth: 300px;
            width: 300px;
            height: 40px;
          "
          placeholder="+91 NUMBER"
          title="Enter Phone number with the code"
        />
      </div>
      <br />
      <div
        id="recaptcha-ss"
        style="background-color: #1b1a1a; width: 300px; margin: auto"
      ></div>
      <br />
      <div>
        <button id="log-in" class="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
    <br /><br />

    <br /><br />
    <div
      v-if="smsSent"
      style="
        background-color: #1b1a1a;
        width: 300px;
        height: 180px;
        margin: auto;
        border-radius: 10px;
      "
    >
      <div style="background-color: black">
        <label style="font:family:system-ui;font-size: x-large;"
          >Enter Otp</label
        >
      </div>
      <br />
      <div>
        <input
          id="otpField"
          v-model="otpnum"
          type="text"
          style="text-align: center"
          pattern="[0-9]{6}"
          maxlength="6"
          placeholder="Enter OTP"
          required
        />
      </div>
      <br />
      <div>
        <button id="otp-btn" class="btn" @click="verifyCode">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'PhoneLogin',
  data() {
    return {
      phoneNumber: null,
      confirmationResult: null,
      otpnum: null,
      recaptchaVerifier: null,
      recaptchaWidgetId: null,
      confirmResult: null,
      smsSent: false,
    }
  },
  mounted() {
    firebase.auth().useDeviceLanguage()
    console.log('firebase.auth().currentUser', firebase.auth().currentUser)
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-ss')
  },
  methods: {
    submit() {},
    verifyCode() {},
  },
}
</script>
