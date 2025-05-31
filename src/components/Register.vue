<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const route = useRoute();

    const register = async () => {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log("Registered:", userCredential.user);

        const referralCode = route.query.sharecode;
        if (referralCode) {
          console.log("Referral:", referralCode);
          // Save referral in Firestore if needed
        }

        router.push('/dashboard');
      } catch (error) {
        alert(error.message);
      }
    }

    return { email, password, register };
  }
}
</script>
