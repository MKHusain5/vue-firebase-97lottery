<template>
  <div>
    <h2>Welcome to Dashboard</h2>
    <p>User email: {{ user?.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();

    const auth = getAuth();
    onAuthStateChanged(auth, (u) => {
      if (u) user.value = u;
      else router.push('/login');
    });

    const logout = () => {
      signOut(auth).then(() => router.push('/login'));
    }

    return { user, logout };
  }
}
</script>
