<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReNHXxiCMbFPVf-toIzY4KU7ahs4AJhDmCYFk2iJVS9fzXhiyf&usqp=CAU"
        width="40"
        height="40"
        alt
      />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav nav-tabs">
      
      <li class="nav-item" >
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/skills">Skills</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/projects">Projects</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="/contact">Contact</router-link>
      </li>
    </ul>
    </div>
    
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
      
  })
};
</script>