<template>
  <div>
    <SearchUser/>
    <UserList/>
  </div>
</template>

<script>
  import SearchUser from './SearchUser';
  import UserList from './UserList';
  export default {
    name: 'GithubSearch',
    components: {
      SearchUser,
      UserList
    }
  };
</script>
