// Define your routes and corresponding functions
const routes = {
    '/': home,
    '/about': about,
    '/contact': contact
  };
  
  // Define the functions to handle each route
  function home() {
    console.log('This is the home page');
  }
  
  function about() {
    console.log('This is the about page');
  }
  
  function contact() {
    console.log('This is the contact page');
  }
  
  // Add event listener for the onpopstate event
  window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    const handler = routes[path];
    handler();
  });
  
  // Add event listener for clicks on links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const handler = routes[href];
      window.history.pushState({}, '', href);
      handler();
    });
  });
  