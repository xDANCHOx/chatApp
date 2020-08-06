export default function ({ store, redirect, route }) {
  if (route.path !== '/' && store.state.user === '') {
    return redirect('/');
  }
}
