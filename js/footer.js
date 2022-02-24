const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `<div class="footer-content">
    <img src="img/loGO.png" class="logo" alt="">
    <div class="footer-ul-container">
        
    </div>
</div>
<p class="footer-title">about company</p>
<p class="info">this is a modern website with new products coming every week, waiting for you to renew your every day tech needs</p>
<p class="info">support emails - beny.2014.girjan@gmail.com</p>
<p class="info">telephone - 0762010620</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
    </div>
</div>
<p class="footer-credit">Your store forever</p>`;
}
createFooter();
