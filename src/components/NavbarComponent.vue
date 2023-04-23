<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="nav-link" style="text-decoration: none;color: black;font-family: 'Rubik Wet Paint', cursive;" href="#">NNN</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
                    <li class="nav-item">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#news">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn" href="/">Subscribe</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
nav {
    background-color: white;
    width: 100%;
    padding: 15px;
    border: 2px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 5px 5px rgba(21, 48, 66, 0.5);
    backdrop-filter: blur(10px);
    height: auto;
    z-index: 1;
}

.nav-link {
    font-family: 'Dongle', sans-serif;
    font-size: 35px;
    color: black;
}

.nav-link:hover {
    font-family: 'Dongle', sans-serif;
    font-size: 35px;
    color: black;
}

.btn {
    background-color: black;
    margin-right: 30px;
    padding: 10px 20px 10px 20px;
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    color: white;
    border-radius: 10px;
    border: 1px solid black;
}

.btn:hover {
    color: black;
    border: 1px solid black;
    background-color: white;
}
</style>