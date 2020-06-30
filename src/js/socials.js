const socialButton = document.getElementById('more-socials');
socialButton.style.textDecoration = 'underline';
socialButton.addEventListener('mouseover', () => {
    socialButton.style.cursor = 'pointer';
});
socialButton.addEventListener('click', () => {
    const otherSocials = document.getElementsByClassName('other-social');
    if (otherSocials[0].style.display == 'inline') {
        for (soc of otherSocials) soc.style.display = 'none';
        socialButton.textContent = 'More contacts';
    }
    else {
        for (soc of otherSocials) soc.style.display = 'inline';
        socialButton.textContent = 'Less contacts';
    }
});