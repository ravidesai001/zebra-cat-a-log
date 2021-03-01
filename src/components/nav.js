import React from "react";

function Nav(){
  return(
    <nav class="navbar navbar-custom navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Cat-a-log</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Home<span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="/add">Add a Cat</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;