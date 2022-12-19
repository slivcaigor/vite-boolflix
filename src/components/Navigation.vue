<script>

</script>

<template >
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">

      <div class="navbar logo-header">
        <a class="navbar-brand" href="#">
          <img id="logo" src="../assets/img/Netflix.png" alt="Netflix Logo">
        </a>


        <div>
          <button>Italiano</button>
          <button>Accedi</button>
        </div>

      </div>
    </div>
  </nav>


</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;


.logo-header {
  display: flex;
  justify-content: space-around;

  img {
    height: 2.8125rem;
    width: 10.4375rem;
  }
}

// .nflogo {
//   fill: #e50914;
// }
</style>