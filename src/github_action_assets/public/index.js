import github_action from 'ic:canisters/github_action';

github_action.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
