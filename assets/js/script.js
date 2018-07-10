// fonction regex verification des champs logIn
function login(){
  var reg = /^[a-zA-Z1-9]$/;
  var log = document.getElementById('pseudo').value;
  var pwd = document.getElementById('password').value;
  if (reg.test(log) && reg.test(pwd) == true){
    // valide
} else {
  var error = 'Vous avez un erreur dans votre mots de passe ou votre nom de compte';
}
};
// regex verification des champs d'Inscription
function signFunction(){
  var regPL = /^[a-zA-Z1-9]+$/;
  var regEmail = /^[a-zA-Z1-9]+[@][a-zA-Z1-9]+[.][a-z]{3}$/;
  var log = document.getElementById('signLogin').value;
  var pwd = document.getElementById('signPassword').value;
  var email = document.getElementById('signEmail').value;
  var confPwd = document.getElementById('signConfirmPassword').value;
  if (regPL.test(log) && regPL.test(pwd) && regEmail.test(email) && regPL.test(confPwd) == true ){
    // valide , confirmation des 2 mdp
    if (pwd == confPwd){
      alert('Merci pour votre inscription');
    }

} else {
  var error = 'Vous avez une erreur dans votre formulaire d\'inscription';
}
};
