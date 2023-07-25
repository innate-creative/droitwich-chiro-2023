function copyPageUrl() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        alert("Link has been copied to clipboard!");
      })
      .catch(() => {
        console.log("Error: current URL could not be copied");
      });
  }