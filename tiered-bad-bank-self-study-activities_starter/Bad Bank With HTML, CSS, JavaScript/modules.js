var ui = {};

ui.navigation = `

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hyrule Bank</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" onClick="loadCreateAccount()" id="createAccount" href="#createAccount">Create Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Withdraw</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Deposit</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Accounts
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
`;

var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;

ui.createAccount = `
<div class="card" style="width: 18rem;">
  <img src="bank.png" class="card-img-top" alt="...">
  <div class="card-body">
  Name<br>
  <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
  Email address<br>
  <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
  Password<br>
  <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
    <h5 class="card-title">Hyrule Bank</h5>
    <p class="card-text">
    The National bank account</p>
    <button type="submit" id="submit" class="btn" onClick="create()">Create Account</button>
    <div id="createStatus"></div>
  </div>
</div>
`;


var loadCreateAccount = function(){
  target.innerHTML = ui.createAccount;
};

loadCreateAccount();